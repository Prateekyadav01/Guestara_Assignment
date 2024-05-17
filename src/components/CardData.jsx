import React from 'react'

const CardData = ({data,key}) => {
  return (
    <div className='flex flex-col w-fit justify-center ml-4 border border-solid mr-4 shadow-md p-1'>
      {data.name}
    </div>
  )
}

export default CardData
