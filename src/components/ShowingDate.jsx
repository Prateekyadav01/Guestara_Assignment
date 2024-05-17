import React from 'react';
import { data } from '../assets/data';

const ShowingDate = ({ day, formattedDate }) => {
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayOfWeekIndex = date.getDay();
    return weekdays[dayOfWeekIndex];
  };

  const dayOfWeek = getDayOfWeek(formattedDate);

  return (
    <div className="flex flex-col border-2">
      <div className='border p-2 flex gap-1'>
        <div>{day}</div>
        <div>{dayOfWeek}</div>
      </div>
      {
        data.map((e,i)=>{
          <div className='w-[100px] h-[100px] border-3'>
            <div>{e.name}</div>
            <div>{e.date}</div>
          </div>
        })
      }
    </div>
  );
};

export default ShowingDate;
