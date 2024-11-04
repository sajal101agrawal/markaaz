import {
  IoAddOutline,
  IoChevronForwardOutline,
  IoChevronBackOutline,
  IoRemoveOutline,
} from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { useState } from "react";
import ExpandedItemsButton from "../Buttons/ExpandedItemsButton";

// Sample data for expanded items
const expandedItemsData = [
  { markaazId: "A30000029564879", expandSrcRecordId: 56487921 },
  { markaazId: "C90000029789452", expandSrcRecordId: 98745021 },
];

const DataStewardshipDataLeft = ({ stewardshipData, onSelectData }) => {
  // State to manage which items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // State to manage the selected item ID
  const [selectedId, setSelectedId] = useState(null);

  // Function to toggle for a specific item
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the state of the specific item
    }));
  };

  // Function to handle selecting/deselecting an item
  const handleSelectData = (id) => {
    if (selectedId === id) {
      setSelectedId(null); // Deselect the item if it's already selected
      onSelectData(null);   // Hide the data on the right side
    } else {
      setSelectedId(id);    // Select the new item
      onSelectData(id);     // Show the data on the right side
    }
  };

  return (
    <div className="bg-[#F9FAFB] rounded-3xl h-[79%] w-[42%] py-4 pb-3 px-4 overflow-y-auto">
      {/* Header with column titles */}
      <div className="flex items-center gap-7 text-sm">
        <div className="w-1/2 flex items-center">
          <p className="w-1/2 text-center pl-4">Markaaz ID</p>
          <p className="w-1/2 text-right">SrcRecordid</p>
        </div>
        <div className="w-1/2 flex items-center">
          <p className="w-1/2 text-left">Company</p>
          <p className="w-1/2 text-left">Matches</p>
        </div>
      </div>

      {/* Display each item in stewardshipData */}
      {stewardshipData.map(({ srcRecordId, id, companyName, address, phone, matchPercentage }) => (
        <div key={id} className="bg-white rounded-2xl p-3 my-2">
          <div className="text-[#66668F] flex text-xs justify-between px-1">
            <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
              {/* Toggle expand/collapse icons */}
              {expandedItems[id] ? (
                <IoRemoveOutline
                  onClick={() => toggleExpand(id)}
                  className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl cursor-pointer"
                />
              ) : (
                <IoAddOutline
                  onClick={() => toggleExpand(id)}
                  className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl cursor-pointer"
                />
              )}

              {/* Display item details */}
              <div className="flex w-full font-light gap-5 justify-between">
                <div className="w-1/2">
                  <p>{id}</p>
                  <p>Equifax</p>
                </div>
                <p className="w-1/2 text-left">{srcRecordId}</p>
              </div>
            </div>

            <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
              <div className="flex w-full font-light gap-5 justify-between">
                <div className="w-1/2 flex flex-col gap-2">
                  <p>{companyName}</p>
                  <div className="flex gap-1">
                    <SlLocationPin className="shrink-0 text-base text-[#0A78CD] font-semibold" />
                    {address}
                  </div>
                  <div className="flex gap-1">
                    <LuPhone className="shrink-0 text-base text-[#0A78CD]" />
                    {phone}
                  </div>
                </div>
                <div className="w-1/2 text-left h-full flex flex-col pb-3 justify-between">
                  <p>Matches 1 (2)</p>
                  <button className="rounded-full w-fit py-2 px-4 bg-[#0A78CD] box-shadow text-white font-medium">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded details section, visible if the item is expanded */}
          {expandedItems[id] && (
            <div className="bg-[#ECF5FB] rounded-xl mt-2 overflow-hidden">
              {/* Header for expanded section */}
              <div className="bg-[#C8D3DB] p-3">
                <div className="flex items-center w-full justify-between px-2">
                  <div className="w-1/2 flex items-center text-sm">
                    <p className="w-1/2">Markaaz ID</p>
                    <p className="w-1/2">SrcRecordid</p>
                  </div>
                  <div className="w-1/2 flex items-center text-sm">
                    <p className="w-1/2">Company</p>
                    <p className="w-1/2">Match(%)</p>
                  </div>
                </div>
              </div>

              {/* Display expanded items data */}
              {expandedItemsData.map((eItem) => (
                <div key={eItem.markaazId} className="border-b border-[#66668F33]">
                  <div className={`flex w-full font-light text-[#66668F] justify-between p-3 ${selectedId === eItem.markaazId ? 'bg-[#dde7ee]' : ''}`}>
                    <div className="w-1/2 flex text-xs">
                      <div className="w-1/2">
                        <p>{eItem.markaazId}</p>
                        <p>Equifax</p>
                      </div>
                      <p className="w-1/2">{eItem.expandSrcRecordId}</p>
                    </div>
                    <div className="w-1/2 flex text-xs">
                      <div className="w-1/2 flex flex-col gap-2">
                        <p>{companyName}</p>
                        <div className="flex gap-1">
                          <SlLocationPin className="shrink-0 text-base text-[#0A78CD] font-semibold" />
                          {address}
                        </div>
                        <div className="flex gap-1">
                          <LuPhone className="shrink-0 text-base text-[#0A78CD]" />
                          {phone}
                        </div>
                      </div>
                      <div className="w-1/2 flex flex-col justify-between gap-2 pb-4">
                        <div className="flex w-full items-center justify-between">
                          <p>{matchPercentage}</p>
                          {/* Navigation icons for selecting/unselecting data */}
                          {selectedId === eItem.markaazId ? (
                            <IoChevronBackOutline
                              onClick={() => handleSelectData(eItem.markaazId)}
                              className="bg-[#0A78CD] text-white p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                            />
                          ) : (
                            <IoChevronForwardOutline
                              onClick={() => handleSelectData(eItem.markaazId)}
                              className="bg-[#f0f0f4] text-[#66668F] p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                            />
                          )}
                        </div>
                        <ExpandedItemsButton />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataStewardshipDataLeft;
