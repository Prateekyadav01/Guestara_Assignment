import React, { useState } from 'react';

const Month = () => {
    const [today, setToday] = useState(Date.now());

    const getMonthYear = () => {
        const dateNow = new Date(today);
        const month = dateNow.toLocaleString('default', { month: 'long' });
        const year = dateNow.getFullYear();
        return { month, year };
    };

    const { month, year } = getMonthYear();

    return (
        <div className=" w-full bg-gray-300 border border-solid z-10 border-black fixed">
            <div className="flex justify-between items-center px-4 py-2">
                <div>
                    <span className="text-lg font-semibold">{month}</span>
                    <span className="text-lg font-semibold ml-2">{year}</span>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <span className="text-xl">&#10216;</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <span>Today</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <span className="text-xl">&#10217;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Month;
