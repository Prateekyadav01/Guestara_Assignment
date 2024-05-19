import React from 'react';
import ShowingDate from './ShowingDate';
import { useSelector } from 'react-redux';

const Calendar = ({ dateData }) => {
  const { year, month } = dateData;
  const selector = useSelector((store) => store.dark);

  const numDaysInMonth = new Date(year, month, 0).getDate();
  const daysOfMonth = Array.from({ length: numDaysInMonth }, (_, index) => index + 1);

  const formatDate = (day) => {
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`flex gap-1 mt-10 ${selector ? 'bg-white' : 'bg-black'}`}>
      {daysOfMonth.map((day, index) => {
        const formattedDate = formatDate(day);
        return <ShowingDate key={index} day={day} formattedDate={formattedDate} selector={selector} />;
      })}
    </div>
  );
};

export default Calendar;
