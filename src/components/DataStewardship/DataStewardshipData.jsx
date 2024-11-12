import { useState, useEffect } from "react";
import DataStewardshipDataLeft from "./DataStewardshipDataLeft";
import DataStewardshipDataRight from "./DataStewardshipDataRight";
import { Loader2Icon } from "lucide-react";
import axios from "axios";

// API endpoint and headers
const API_URL = "https://api-ds.markaazdata.com/getData";
const API_KEY = "7ewZZL2Lg28cONdzCJmax26f0aBjhoReBBcV5Yig";

const DataStewardshipData = () => {
  const [stewardshipData, setStewardshipData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "x-api-key": API_KEY,
          },
        });

        // Check if response data is not empty or in the expected format
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Unexpected data format received");
        }

        // Map API response to the format expected by the components
        const mappedData = response.data.map((item) => {
          // Safely parse primary and match data
          let primaryData = {};
          let matchData = {};

          try {
            // Parsing the JSON data safely
            primaryData = JSON.parse(item.PRIMARY_MKID_DATA || "{}");
            matchData = JSON.parse(item.MATCH_SOURCE_DATA || "{}");
          } catch (e) {
            console.error("Error parsing JSON data", e);
          }

          // Log the parsed matchData (for debugging)
          // console.log("Parsed matchData:", matchData);

          // Determine data source prefix based on source
          let prefix = "";
          if (item.PRIMARY_MKID_SRC === "EFX") {
            prefix = "EFX_";
          } else if (item.PRIMARY_MKID_SRC === "CS") {
            prefix = "CS_";
          } else if (item.PRIMARY_MKID_SRC === "OC") {
            prefix = "OC_";
          }

          // Extract fields based on prefix from primaryData
          const companyName = primaryData[`${prefix}AFFLULTNAMEALL`] || "";
          const addressParts = [
            primaryData[`${prefix}AFFLULTADDRESSALL`],
            primaryData[`${prefix}AFFLULTCITYALL`],
            primaryData[`${prefix}AFFLULTCTRYISOCDALL`],
            primaryData[`${prefix}AFFLULTZIPCODEALL`],
          ].filter(Boolean);
          const address = addressParts.join(", ");
          const phone = primaryData[`${prefix}PHONE`] || "";

          // Safely extract fields from matchData (now it's an object)
          const matchAddress = matchData.ADDRESS1 || matchData.ADDRESS2 || matchData.ADDRESS3 || "";
          const matchCompanyName = matchData.NAME || "";

          console.log(item.MATCH_MKID_SOURCE_ID)

          // Return mapped data with both primary and match data
          return {
            id: item.PRIMARY_MKID,
            matchId: item.MATCH_MKID,
            sourceRecordId: item.PRIMARY_MKID_SOURCE_ID,
            matchSourceRecordId: item.MATCH_MKID_SOURCE_ID,
            companyName: companyName || matchCompanyName, // Default to match data company name if not available in primary
            address: address || matchAddress, // Use match data address if primary data address is missing
            phone,
            matchAddress : matchAddress,
            matchPercentage: `${item.BOOSTED_SCORE}%`,
            dataSource: item.PRIMARY_MKID_SRC,
            primaryData,
            matchData, // Now matchData is an object
            rawData: item, // Keep raw item for further use
          };
        });

        setStewardshipData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleSelectData = (id) => {
    const selectedItem = stewardshipData.find((item) => item.id === id);
    setSelectedData(selectedItem);
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="flex items-center gap-2">
          Loading Data <Loader2Icon className="h-4 w-4 animate-spin" />
        </p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-between px-5 py-4 gap-6">
      <DataStewardshipDataLeft
        stewardshipData={stewardshipData}
        onSelectData={handleSelectData}
      />
      <DataStewardshipDataRight selectedData={selectedData} />
    </div>
  );
};

export default DataStewardshipData;

