import { useState, useEffect } from "react";
import DataStewardshipDataLeft from "./DataStewardshipDataLeft";
import DataStewardshipDataRight from "./DataStewardshipDataRight";

// API endpoint and headers
const API_URL = "https://api-ds.markaazdata.com/getData";
const API_KEY = "7ewZZL2Lg28cONdzCJmax26f0aBjhoReBBcV5Yig"; 

const DataStewardshipData = () => {
  const [stewardshipData, setStewardshipData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "x-api-key": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Map API response to the format expected by the components
        const mappedData = data.map((item) => {
          const primaryData = JSON.parse(item.PRIMARY_MKID_DATA || "{}");
          const matchData = JSON.parse(item.MATCH_SOURCE_DATA || "{}");

          // Determine data source prefix based on source
          let prefix = "";
          if (item.PRIMARY_MKID_SRC === "EFX") {
            prefix = "EFX_";
          } else if (item.PRIMARY_MKID_SRC === "CS") {
            prefix = "CS_";
          } else if (item.PRIMARY_MKID_SRC === "OC") {
            prefix = "OC_";
          }

          // Extract fields based on prefix
          const companyName = primaryData[`${prefix}AFFLULTNAMEALL`] || "";
          const addressParts = [
            primaryData[`${prefix}AFFLULTADDRESSALL`],
            primaryData[`${prefix}AFFLULTCITYALL`],
            primaryData[`${prefix}AFFLULTCTRYISOCDALL`],
            primaryData[`${prefix}AFFLULTZIPCODEALL`],
          ].filter(Boolean);
          const address = addressParts.join(", ");

          // Note: Phone number extraction is pending as per the initial instructions
          const phone = primaryData[`${prefix}PHONE`] || "";

          // Count of matches (assuming MATCH_SOURCE_DATA is an array)
          const matchesCount = 1; // Adjust as per actual data structure

          return {
            id: item.PRIMARY_MKID,
            sourceRecordId: item.PRIMARY_MKID_SOURCE_ID,
            companyName,
            address,
            phone,
            matchPercentage: `${item.BOOSTED_SCORE}%`,
            dataSource: item.PRIMARY_MKID_SRC,
            matchesCount,
            primaryData,
            matchData,
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
        <p>Loading...</p>
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
