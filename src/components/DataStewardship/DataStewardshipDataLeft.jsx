import { IoAddOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";

const DataStewardshipDataLeft = () => {

    const stewardshipData = [
        {
            srcRecordId: 95877802,
        },
        {
            srcRecordId: 63254127,
        },
        {
            srcRecordId: 95377802,
        },
        {
            srcRecordId: 87965412,
        },
        {
            srcRecordId: 95135746,
        },
        {
            srcRecordId: 32165478,
        },
    ]

    return (
        <div className='bg-[#F9FAFB] rounded-3xl h-[79%] w-[40%] py-4 pb-3 px-4 overflow-y-auto'>
            <div className='flex items-center gap-7 text-sm'>
                <div className='w-1/2 flex items-center'>
                    <p className='w-1/2 text-center pl-4'>Markaaz ID</p>
                    <p className='w-1/2 text-right'>SrcRecordid</p>
                </div>
                <div className='w-1/2 flex items-center'>
                    <p className='w-1/2 text-left'>Company</p>
                    <p className='w-1/2 text-left'>Matches</p>
                </div>
                <div></div>
            </div>
            {
                stewardshipData.map((id) => (
                    <div key={id.srcRecordId} className='bg-white rounded-2xl px-1 py-3 my-2'>
                        <div className="text-[#66668F] flex text-xs justify-between px-1">
                            <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
                                <IoAddOutline className="bg-[#e6f1fa] text-[#0A78CD] rounded-full shrink-0 p-1 text-3xl" />
                                <div className="flex w-full font-light gap-5 justify-between">
                                    <div className="w-1/2">
                                        <p>A20000029745116</p>
                                        <p>Equifax</p>
                                    </div>
                                    <p className="w-1/2 text-left">{id.srcRecordId}</p>
                                </div>
                            </div>
                            <div className="w-1/2 pr-3 pl-1 gap-2 flex justify-between">
                                <div className="flex w-full font-light gap-5 justify-between">
                                    <div className="w-1/2 flex flex-col gap-2">
                                        <p>Casual Creations</p>
                                        <div className="flex gap-1"><SlLocationPin className="shrink-0 text-base text-[#0A78CD] font-semibold" />315 Magellan Dr, Sarasota, FL 34243, USA</div>
                                        <div className="flex gap-1"><LuPhone className="shrink-0 text-base text-[#0A78CD]" />+1 2365986545</div>
                                    </div>
                                    <div className="w-1/2 text-left h-full flex flex-col pb-3 justify-between">
                                        <p>Matches 1 (2)</p>
                                        <button className="rounded-full w-fit py-2 px-4 bg-[#0A78CD] box-shadow text-white font-medium">Reject</button>
                                    </div>
                                </div>
                            </div>
                            <IoChevronForwardOutline className="bg-[#f0f0f4] text-[#66668F] p-1 rounded-full shrink-0 text-3xl" />
                        </div>
                    </div>
                ))
            }



        </div>
    )
}

export default DataStewardshipDataLeft