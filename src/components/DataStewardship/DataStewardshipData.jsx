import React from 'react'
import DataStewardshipDataLeft from './DataStewardshipDataLeft'
import DataStewardshipDataRight from './DataStewardshipDataRight'

const DataStewardshipData = () => {
  return (
    <div className="w-full h-full flex justify-between px-5 py-4 gap-6">
      <DataStewardshipDataLeft />
      <DataStewardshipDataRight />
      
    </div>
  )
}

export default DataStewardshipData