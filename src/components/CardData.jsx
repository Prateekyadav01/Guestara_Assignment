import React from 'react'

const CardData = ({data,key}) => {
  return (
    <div className='flex flex-col w-[90%] justify-center border border-solid border-black ml-4  mr-4 shadow-md p-1'>
      {data.name}
    </div>
  )
}

export default CardData
