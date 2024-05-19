import React from 'react';
import { data } from '../assets/data';
import CardData from './CardData';
import { useSelector } from 'react-redux';

const User = () => {
  const selector = useSelector((store) => store.dark);
  console.log(selector);

  return (
    <div className={`flex flex-col w-[120px] h-full gap-4 sticky top-0 left-0 m-0 p-0 mt-5 ml-1 border border-solid border-black items-center overflow ${selector ? 'bg-white' : 'bg-black'}`}>
      {
        data.map((e, i) => {
          return <CardData data={e} key={i} selector={selector} />;
        })
      }
    </div>
  );
};

export default User;
