import vector from '../../assets/Vector.svg'
import { IoChevronForwardOutline } from "react-icons/io5";

const DataStewardshipDataRight = () => {
  return (
    <div className='bg-[#F9FAFB] rounded-3xl h-[79%] w-[60%] flex items-center justify-center flex-col gap-6'>
        <img src={vector} alt="" />
        <p className='text-xl text-[#66668F] font-light'>Click on</p>
        <IoChevronForwardOutline className='bg-[#0A78CD] text-white p-1 text-4xl rounded-full' />
        <button className='text-xl text-[#66668F]'>button to view more</button>
    </div>
  )
}

export default DataStewardshipDataRight