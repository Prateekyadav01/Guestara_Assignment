import React from 'react'
import { data } from '../assets/data'
import CardData from './CardData'

const User = () => {
  
  return (
    <div className='flex flex-col w-40 border border-solid boder-red-500 gap-4 mt-10'>
      {
        data.map((e,i)=>{
            return <CardData data={e} key={i} />
        })
      }
    </div>
  )
}

export default User
