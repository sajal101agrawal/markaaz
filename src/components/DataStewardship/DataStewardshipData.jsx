import { useState } from "react";
import DataStewardshipDataLeft from "./DataStewardshipDataLeft";
import DataStewardshipDataRight from "./DataStewardshipDataRight";

// Sample data for data stewardship, each object represents a company record
const stewardshipData = [
  {
    srcRecordId: 95877802,
    id: "A20000029745116",
    companyName: "Casual Creations",
    address: "315 Magellan Dr, Sarasota, FL 34243, USA",
    phone: "+1 2365986545",
    matchPercentage: "65%",
  },
  {
    srcRecordId: 95377802,
    id: "B20000029745116",
    companyName: "Global Solutions",
    address: "100 Main St, Anytown, USA",
    phone: "+1 1234567890",
    matchPercentage: "75%",
  },
  {
    srcRecordId: 87965412,
    id: "D20000029745678",
    companyName: "Innovate Inc",
    address: "456 Elm St, Metropolis, USA",
    phone: "+1 9876543210",
    matchPercentage: "80%",
  },
  {
    srcRecordId: 95135746,
    id: "E20000029741234",
    companyName: "Tech Works",
    address: "789 Oak Ave, Smalltown, USA",
    phone: "+1 6543210987",
    matchPercentage: "90%",
  },
  {
    srcRecordId: 32165478,
    id: "F20000029749876",
    companyName: "Eco Power",
    address: "321 Maple St, Greenfield, USA",
    phone: "+1 3456789123",
    matchPercentage: "50%",
  },
  {
    srcRecordId: 63254127,
    id: "C50000029787845",
    companyName: "Casual Creations",
    address: "315 Magellan Dr, Sarasota, FL 34243, USA",
    phone: "+1 2365986545",
    matchPercentage: "35%",
  },
  {
    srcRecordId: 63254127,
    id: "A30000029564879",
    companyName: "Casual Creations",
    address: "315 Magellan Dr, Sarasota, FL 34243, USA",
    phone: "+1 2365986545",
    matchPercentage: "35%",
  },
  {
    srcRecordId: 63254127,
    id: "C90000029789452",
    companyName: "Casual Creations",
    address: "315 Magellan Dr, Sarasota, FL 34243, USA",
    phone: "+1 2365986545",
    matchPercentage: "35%",
  },
];

const DataStewardshipData = () => {
  // State variable to hold the currently selected data
  const [selectedData, setSelectedData] = useState(null);

  // Function to handle selection of data item
  const handleSelectData = (id) => {
    // console.log("Selected data ID:", id);
    const selectedItem = stewardshipData.find((item) => item.id === id);
    // Updating the state with the selected item
    setSelectedData(selectedItem);
  };

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
