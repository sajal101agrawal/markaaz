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

const expandedItemsData = [
  { markaazId: "A30000029564879", expandSrcRecordId: 56487921, },
  { markaazId: "C90000029789452", expandSrcRecordId: 98745021, },
]

const DataStewardshipDataLeft = ({ stewardshipData, onSelectData }) => {
  // State to manage which items are expanded
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  // Function to toggle the expanded state of an item based on its ID
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the boolean value for the specific item
    }));
  };

  // Function to handle the selection of data items
  const handleSelectData = (id) => {
    // If the same item is selected again, unselect it
    if (selectedId === id) {
      setSelectedId(null);
      onSelectData(null); // Pass null to hide the data on the right side
    } else {
      setSelectedId(id); // Update the selected ID
      onSelectData(id); // Pass the selected ID to the parent component
    }
  };

  return (
    <div className="bg-[#F9FAFB] rounded-3xl h-[79%] w-[42%] py-4 pb-3 px-4 overflow-y-auto">
      {/* Header section with column titles */}
      <div className="flex items-center gap-7 text-sm">
        <div className="w-1/2 flex items-center">
          <p className="w-1/2 text-center pl-4">Markaaz ID</p>
          <p className="w-1/2 text-right">SrcRecordid</p>
        </div>
        <div className="w-1/2 flex items-center">
          <p className="w-1/2 text-left">Company</p>
          <p className="w-1/2 text-left">Matches</p>
        </div>
        <div></div>
      </div>

      {/* Mapping through the stewardship data to display each item */}
      {stewardshipData.map(
        ({ srcRecordId, id, companyName, address, phone, matchPercentage }) => (
          <div key={id} className="bg-white rounded-2xl p-3 my-2">
            <div className="text-[#66668F] flex text-xs justify-between px-1">
              <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
                {expandedItems[id] ? (
                  // If the item is expanded, show a remove icon
                  <IoRemoveOutline
                    onClick={() => toggleExpand(id)}
                    className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl cursor-pointer"
                  />
                ) : (
                  // Otherwise, show an add icon
                  <IoAddOutline
                    onClick={() => toggleExpand(id)}
                    className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl cursor-pointer"
                  />
                )}
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

              {/* Navigation icons for selecting or unselecting data */}
              {selectedId === id ? (
                <IoChevronBackOutline
                  onClick={() => handleSelectData(id)} // Go back if selected
                  className="bg-[#0A78CD] text-white p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                />
              ) : (
                <IoChevronForwardOutline
                  onClick={() => handleSelectData(id)} // Select if not selected
                  className="bg-[#f0f0f4] text-[#66668F] p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                />
              )}
            </div>

            {/* Expanded details section, displayed if the item is expanded */}
            {expandedItems[id] && (
              <div className="bg-[#ECF5FB] rounded-xl mt-2 overflow-hidden">
                <div className="bg-[#C8D3DB] p-3">
                  <div className="flex items-center w-full justify-between px-2 ">
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

                {
                  expandedItemsData.map((eItem) => (
                    <div className="p-3 border-b border-[#66668F33]">
                      <div className="flex w-full font-light text-[#66668F] justify-between px-2 ">
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
                              {selectedId === eItem.markaazId ? (
                                <IoChevronBackOutline
                                  onClick={() => handleSelectData(eItem.markaazId)} // Go back if selected
                                  className="bg-[#0A78CD] text-white p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                                />
                              ) : (
                                <IoChevronForwardOutline
                                  onClick={() => handleSelectData(eItem.markaazId)} // Select if not selected
                                  className="bg-[#f0f0f4] text-[#66668F] p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                                />
                              )}
                            </div>
                            <ExpandedItemsButton />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default DataStewardshipDataLeft;
