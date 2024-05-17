import React, { useState } from 'react';
import { data } from '../assets/data';

const ShowingDate = ({ day, formattedDate }) => {

  const[click,setClick] = useState([]);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeekIndex = date.getDay();
    return weekdays[dayOfWeekIndex];
  };

  const dayOfWeek = getDayOfWeek(formattedDate);

  const handleEvent =(index)=>{
    console.log(index);
    console.log('clicked')
      setClick((prev)=>{
        if(prev.includes(index)){
          return prev;
        }
        return [...prev, index];
      })
  }

  return (
    <div className="flex flex-col border-2">
      <div className='border p-2 flex gap-1'>
        <div>{day}</div>
        <div>{dayOfWeek}</div>
      </div>
      {
        data.map((e, i) => (
          <div key={i} onClick={()=>handleEvent(i)} className='w-[100px] h-[50px] border border-solid border-black'>
            {
              click.includes(i) ? (<span>Event</span>) :(<hr></hr>)
            }
          </div>
        ))
      }
    </div>
  );
};

export default ShowingDate;
