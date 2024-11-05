import React from 'react'

const ExpandedItemsButton = () => {
  return (
    <button className='flex w-fit items-center justify-between bg-white rounded-full border border-[#F2F4F5]'>
        <p className='bg-white text-[#25245F] font-medium py-2 px-3 rounded-full'>Reject</p>
        <p className='bg-[#0A78CD] text-white font-medium py-2 px-3 rounded-full box-shadow'>Match</p>
    </button>
  )
}

export default ExpandedItemsButton