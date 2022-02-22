import React from 'react';

function DishCard({ dish, btn, onClick }) {
  const handleClick = () => {
    onClick(dish);
  };

  return (
    <li className="w-11/12 md:w-2/5  m-6">
      <div className="shadow-2xl rounded-2xl p-3">
        <img
          src={dish.img || '#'}
          alt={dish.title}
          className="w-7/12 float-right bg-red-500"
        />
        <h3 className="font-semibold uppercase text-lg">{dish.title}</h3>
        <p className="font-semibold traking-wide">${dish.price}</p>
        <p className="traking-widest font-bold text-lime-600 my-2">
          {dish.healthScore + '🔥'}
        </p>
        <p>{dish.prepTime}mins</p>

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
