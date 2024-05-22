import React, { useState, useEffect } from 'react';
import { data } from '../assets/data';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/darkSlice';
import { v4 as uuidv4 } from 'uuid';

const ShowingDate = ({ day, formattedDate, selector }) => {
  const [click, setClick] = useState([]);
  const [colors, setColors] = useState({});
  const dispatch = useDispatch();

  const currentDate = new Date();
  const newDate = currentDate.getDate();

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

  const handleEvent = ( index) => {
    setClick((prev) => {
      let updatedClick = prev.includes(index) ? prev : [...prev, index];
      return updatedClick;
    });

    setColors((prevColors) => {
      if (prevColors[index]) {
        return prevColors;
      }
      const newColor = getRandomColor();
      return { ...prevColors, [index]: newColor };
    });

    dispatch(addData(index));
  };

  useEffect(() => {
    
    setClick(()=>{
      const savedEvents = JSON.parse(localStorage.getItem('event')) || [];
      return savedEvents;
  });
    console.log(click)
  }, [click]);


  return (
    <div className={`flex flex-col border-2 overflow-auto overflow-x-auto ${selector ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className={`border p-2 flex gap-1 ${day === newDate ? "bg-red-300 text-black" : ""}`}>
        <div>{day}</div>
        <div>{dayOfWeek}</div>
      </div>
      
      {data.map((e, i) => {
        const dataKey = uuidv4();
        return (
          <div
            key={dataKey}
            onClick={() => handleEvent(dataKey)}
            className={`w-[100px] h-[50px] border border-solid border-black`}
            style={{ backgroundColor: click.includes(i) ? colors[i] : 'transparent' }}
          >
            {click.includes(dataKey) ? (
              <div className='flex flex-col'>
                <span>Event</span>
                <span>12:00AM</span>
              </div>
            ) : (
              <hr />
            )}
          </div>
          
        );

      })}
    </div>
  );
};

export default ShowingDate;
