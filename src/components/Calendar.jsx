// src/Calendar.js
import React from 'react';
import ShowingDate from './ShowingDate';

import { useSelector } from 'react-redux';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';

const Calendar = ({ dateData }) => {
  const { year, month, dayToday } = dateData;
  const selector = useSelector((store) => store.dark);

  const numDaysInMonth = new Date(year, month, 0).getDate();
  const daysOfMonth = Array.from({ length: numDaysInMonth }, (_, index) => index + 1);
  const [items, setItems] = useState(daysOfMonth);

  const formatDate = (day) => {
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const arr=[];
  const handleTheLocalStorage = (event) => {
    const { id } = event.target;
    localStorage.setItem('date', id);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className={`flex gap-1 mt-10 ${selector ? 'bg-white' : 'bg-black'}`}>
          {items.map((day, index) => {
            const formattedDate = formatDate(day);
            return (
              <ShowingDate
                key={index}
                id={day}
                day={day}
                formattedDate={formattedDate}
                selector={selector}
                dayToday={dayToday}
                onClick={handleTheLocalStorage}
              />
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Calendar;
