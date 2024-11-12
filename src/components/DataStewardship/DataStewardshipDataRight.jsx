import vector from "../../assets/Vector.svg";
import {
  IoChevronForwardOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import ExpandedItemsButton from "../Buttons/ExpandedItemsButton";

const DataStewardshipDataRight = ({ selectedData }) => {
  if (!selectedData) {
    return (
      <div className="bg-[#F9FAFB] rounded-3xl h-[79%] w-[58%] flex flex-col items-center justify-center gap-6">
        <img src={vector} alt="Vector illustration" />
        <p className="text-xl text-[#66668F] font-light">Click on</p>
        <IoChevronForwardOutline className="bg-[#0A78CD] text-white p-1 text-4xl rounded-full" />
        <button className="text-xl text-[#66668F] font-light">
          button to view more
        </button>
      </div>
    );
  }

  // Extract fields from selected data
  const { primaryData, matchData, dataSource, id } = selectedData;

  // Determine data source prefix
  let prefix = "";
  if (dataSource === "EFX") {
    prefix = "EFX_";
  } else if (dataSource === "CS") {
    prefix = "CS_";
  } else if (dataSource === "OC") {
    prefix = "OC_";
  }

  // Prepare field values data
  const fieldValuesData = Object.keys(primaryData)
    .filter((key) => key.startsWith(prefix))
    .map((key) => ({
      field: key,
      value: primaryData[key],
    }));

  // Prepare company details (example fields)
  const companyDetails = [
    { field: "Company Number", value: primaryData[`${prefix}ID`] || "-" },
    { field: "Name", value: primaryData[`${prefix}NAME`] || "-" },
    { field: "Address", value: primaryData[`${prefix}ADDRESS`] || "-" },
    { field: "City", value: primaryData[`${prefix}CITY`] || "-" },
    { field: "Country", value: primaryData[`${prefix}CTRYNAME`] || "-" },
    { field: "Postal Code", value: primaryData[`${prefix}ZIPCODE`] || "-" },
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#25245F] flex flex-col rounded-3xl h-[79%] w-[58%] px-5 py-4">
      <h1 className="font-medium">Match Details</h1>
      <div className="mt-1 mb-3 flex items-center justify-between">
        <div className="text-sm">
          <p className="">Source Information</p>
          <p className="text-xs text-[#66668F] font-light">Markaaz ID: {id}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm">
            <ExpandedItemsButton />
          </div>
          <button className="text-[#0A78CD] font-medium flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-white text-sm border border-[#F2F4F5]">
            <IoArrowBackOutline />
            Prev
          </button>
          <button className="text-[#0A78CD] font-medium flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-white text-sm border border-[#F2F4F5]">
            Next
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
      <div className="flex h-full gap-4 overflow-hidden">
        <div className="w-[45%] flex flex-col gap-2 h-full bg-white rounded-2xl p-2 overflow-y-auto">
          <div className="flex items-center w-full text-xs font-medium px-3">
            <h2 className="w-[40%]">Field</h2>
            <h2 className="w-[60%]">Value</h2>
          </div>
          {fieldValuesData.map((data) => (
            <div
              key={data.field}
              className="bg-[#F9FAFB] rounded-full w-full p-4 text-[#66668F] font-light flex items-center text-xs"
            >
              <p className="w-[40%]">{data.field}</p>
              <p className="w-[60%]">{data.value}</p>
            </div>
          ))}
        </div>
        <div className="w-[55%] h-full overflow-y-auto">
          <div className="bg-white rounded-2xl w-full h-[50%] p-2 flex flex-col gap-2 overflow-y-auto">
            <div className="w-full flex items-center text-xs font-medium px-3 text-[#25245F]">
              <h2 className="w-[40%]">Field</h2>
              <h2 className="w-[60%]">Value</h2>
            </div>

            {companyDetails.map((data) => (
              <div
                key={data.field}
                className="bg-[#F9FAFB] rounded-full w-full p-4 text-[#66668F] font-light flex items-center text-xs"
              >
                <p className="w-[40%]">{data.field}</p>
                <p className="w-[60%]">{data.value}</p>
              </div>
            ))}
          </div>
          {/* Additional sections can be added here */}
        </div>
      </div>
    </div>
  );
};

export default DataStewardshipDataRight;