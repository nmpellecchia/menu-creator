import React, { useEffect, useState } from 'react';
import { cropStr, getTime } from '../utilities/services/handlingData';

function DishCard({ dish, btn, onClick }) {
  const [icon, setIcon] = useState('');

  const handleClick = () => {
    onClick(dish);
  };

  useEffect(() => {
    if (dish.healthScore < 25) {
      setIcon('⛔ ');
    } else if (dish.healthScore < 50) {
      setIcon('❗ ');
    } else if (dish.healthScore < 75) {
      setIcon('✔ ');
    } else if (dish.healthScore < 100) {
      setIcon('🔥 ');
    } else {
      setIcon('💪 ');
    }
  }, []);

  return (
    <li className="w-11/12 md:w-2/5  m-6">
      <div className="shadow-2xl rounded-2xl p-3">
        <img
          src={dish.img || '#'}
          alt={dish.title}
          className="w-7/12 float-right bg-red-500"
        />
        <h3 className="font-semibold uppercase text-lg">
          {cropStr(dish.title)}
        </h3>
        {dish.vegan && <p className="uppercase text-lime-600">(vegan)</p>}
        <p className="font-semibold traking-wide">${dish.price}</p>
        <p className="traking-widest font-bold text-lime-600 my-2 text-lg">
          {icon + dish.healthScore}
        </p>
        <p>{getTime(dish.prepTime)}</p>

        <div className="flex justify-between pt-6 clear-both">
          <button className="rounded-full bg-lime-700 py-2 px-4 text-white hover:bg-emerald-700">
            Details
          </button>
          <button
            className="rounded-full bg-lime-700 py-2 px-4 text-white hover:bg-emerald-700"
            onClick={handleClick}
          >
            {btn}
          </button>
        </div>
      </div>
    </li>
  );
}

export default DishCard;
