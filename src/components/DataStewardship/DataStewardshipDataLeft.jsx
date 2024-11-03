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

const DataStewardshipDataLeft = ({ stewardshipData, onSelectData }) => {
  // State to manage which items are expanded
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  // Toggle expand/collapse
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the boolean value for the specific item
    }));
  };

  const handleSelectData = (id) => {
    // If the same item is selected again, unselect it
    if (selectedId === id) {
      setSelectedId(null);
      onSelectData(null); // Pass null to hide the data on the right side
    } else {
      setSelectedId(id);
      onSelectData(id);
    }
  };

  return (
    <div className="bg-[#F9FAFB] rounded-3xl h-[79%] w-[42%] py-4 pb-3 px-4 overflow-y-auto">
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
      {stewardshipData.map(
        ({ srcRecordId, id, companyName, address, phone, matchPercentage }) => (
          <div key={id} className="bg-white rounded-2xl p-3 my-2">
            <div className="text-[#66668F] flex text-xs justify-between px-1">
              <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
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
                {/* <IoAddOutline className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl cursor-pointer" /> */}
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
              {selectedId === id ? (
                <IoChevronBackOutline
                  onClick={() => handleSelectData(id)}
                  className="bg-[#0A78CD] text-white p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                />
              ) : (
                <IoChevronForwardOutline
                  onClick={() => handleSelectData(id)}
                  className="bg-[#f0f0f4] text-[#66668F] p-1 rounded-full shrink-0 text-3xl cursor-pointer"
                />
              )}
            </div>
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

                <div className="p-3 border-b border-[#66668F33]">
                  <div className="flex w-full font-light text-[#66668F] justify-between px-2 ">
                    <div className="w-1/2 flex text-xs">
                      <div className="w-1/2">
                        <p>{id}</p>
                        <p>Equifax</p>
                      </div>
                      <p className="w-1/2">{srcRecordId}</p>
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
                      <div className="w-1/2 flex flex-col justify-between pb-4">
                        <p>{matchPercentage}</p>
                        <ExpandedItemsButton />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex w-full font-light text-[#66668F] justify-between px-2 ">
                    <div className="w-1/2 flex text-xs">
                      <div className="w-1/2">
                        <p>{id}</p>
                        <p>Equifax</p>
                      </div>
                      <p className="w-1/2">{srcRecordId}</p>
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
                      <div className="w-1/2 flex flex-col justify-between pb-4">
                        <p>{matchPercentage}</p>
                        <ExpandedItemsButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default DataStewardshipDataLeft;
