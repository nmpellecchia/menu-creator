import React, { useEffect, useState } from 'react';
//
import { BsClockHistory, BsFillHeartFill, BsBasketFill } from 'react-icons/bs';
import {
  deleteDish,
  DISHES_KEY,
  getFromLocalStorage,
} from '../utilities/storage/storage.js';
import DishCard from './DishCard.jsx';

function HomePage() {
  const dishes = getFromLocalStorage(DISHES_KEY);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-200">
      <DishesSection title="dishes summary">
        <SummaryItem title="Avg. prep. time" value="2hs 45mins" icon="time" />
        <SummaryItem title="Avg. health score" value="69.69" icon="score" />
        <SummaryItem title="Total price" value="$999.99" icon="price" />
      </DishesSection>
      <DishesSection title="your dishes">
        {dishes.map(dish => {
          return (
            <DishCard
              key={dish.title}
              dish={dish}
              btn="Delete"
              onClick={deleteDish}
            />
          );
        })}
      </DishesSection>
    </main>
  );
}

// recieves title, listComponent & component content
function DishesSection(props) {
  return (
    <article>
      <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6">
        {props.title}
      </h2>
      <ul className="w-11/12 flex justify-center flex-wrap gap-4">
        {props.children}
      </ul>
    </article>
  );
}
// The three summary at the top of the page
function SummaryItem(props) {
  let icon;

  // Select wich icon to show
  switch (props.icon) {
    // prep time
    case 'time':
      icon = <BsClockHistory className="h-6 w-6" />;
      break;
    // health score
    case 'score':
      icon = <BsFillHeartFill className="h-6 w-6" />;
      break;
    // price
    default:
      icon = <BsBasketFill className="h-6 w-6" />;
  }

  return (
    <li className="max-w-1/2 text-center font-bold text-emerald-600">
      <p className="text-xl">{props.title}</p>
      <div className="flex justify-center items-center my-4">
        {icon}
        <p className="ml-1 text-black">{props.value}</p>
      </div>
    </li>
  );
}

export default HomePage;
