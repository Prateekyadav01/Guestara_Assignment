import React, { useState } from 'react';
import { data } from '../assets/data';

const ShowingDate = ({ day, formattedDate, selector }) => {
  const [click, setClick] = useState([]);
  const [colors, setColors] = useState({});

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeekIndex = date.getDay();
    return weekdays[dayOfWeekIndex];
  };

  const dayOfWeek = getDayOfWeek(formattedDate);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleEvent = (index) => {
    console.log(index);
    console.log('clicked');
    setClick((prev) => {
      if (prev.includes(index)) {
        return prev;
      }
      const newColor = getRandomColor();

      setColors((prevColors) => {
        if (prevColors === index) {
          return { ...prevColors, [index]: prevColors };
        }
        return { ...prevColors, [index]: newColor };
      });
      return [...prev, index];
    });
  };

  return (
    <div className={`flex flex-col border-2 ${selector ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className='border p-2 flex gap-1'>
        <div>{day}</div>
        <div>{dayOfWeek}</div>
      </div>
      {data.map((e, i) => (
        <div
          key={i}
          onClick={() => handleEvent(i)}
          className='w-[100px] h-[50px] border border-solid border-black'
          style={{ backgroundColor: click.includes(i) ? colors[i] : 'transparent' }}
        >
          {click.includes(i) ? (
            <div className='flex flex-col'>
              <span>Event</span>
              <span>12:00AM</span>
            </div>
          ) : (
            <hr />
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowingDate;
