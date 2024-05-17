import React from 'react'
import { data } from '../assets/data'
import CardData from './CardData'

const User = () => {
  
  return (
    <div className='flex flex-col w-full  gap-4 mt-16 ml-1 border border-solid border-black  items-center'>
      {
        data.map((e,i)=>{
            return <CardData data={e} key={i} />
        })
      }
    </div>
  )
}

export default User
