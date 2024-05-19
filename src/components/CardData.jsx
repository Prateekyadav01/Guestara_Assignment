import React from 'react';

const CardData = ({ data, selector }) => {
  return (
    <div className={`flex flex-col w-[90%] justify-center ml-4 mr-4 shadow-md p-1 
      ${selector ? 'bg-white text-black border-black' : 'bg-black text-white border-white'} 
      border border-solid rounded-md`}>
      {data.name}
    </div>
  );
};

export default CardData;
