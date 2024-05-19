import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDark } from '../redux/darkSlice';

const Footer = () => {
    const [dark, setDark] = useState(false);
    const dispatch = useDispatch();

    const handleToggle =()=>{
        setDark(!dark);
        dispatch(toggleDark(dark));
    }
    

    return (
        <div className='flex justify-around bg-gray-300 h-10 items-center fixed bottom-0 w-full p-2'>
            <div className='flex items-center bg-gray-300 rounded-md gap-6  p-2'>
                <span>📱</span>
                <span>☎️</span>
                <span>📧</span>
                <div className=' bg-gray-300'>
                    {
                        dark ? (
                            <span className='text-black cursor-pointer' onClick={handleToggle}>Light</span>
                        ) : (
                            <span className='text-black cursor-pointer' onClick={handleToggle}>Dark</span>
                        )
                    }
                </div>
                <div className='cursor-pointer'>
                    <span>English</span>
                    <span>👇🏿</span>
                </div>
            </div>
            <div className='flex text-black border border-solid border-white rounded-md p-1'>
                <button>GO BACK TO DEMOS</button>
            </div>
        </div>
    );
}

export default Footer;
