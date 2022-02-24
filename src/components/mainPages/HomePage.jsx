import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//
import { BsClockHistory, BsFillHeartFill, BsBasketFill } from 'react-icons/bs';
//
import {
  DISHES_KEY,
  getFromLocalStorage,
  saveOnLocalStorage,
} from '../../utilities/storage/storage.js';
import { getAvgValue, getTime } from '../../utilities/services/handlingData.js';
//
import DishCard from '../cardsAndSections/DishCard.jsx';

function HomePage() {
  const [dishes, setDishes] = useState(getFromLocalStorage(DISHES_KEY) || []);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const totalDishes = dishes.length;
    // Trying to modify useState inside map caused infinite loop
    // This is a workaround
    let newTime = 0;
    let newScore = 0;
    let newPrice = 0;
    // instead of modifying the state, use a normal variable
    // and update the state JUST ONCE at the end
    dishes.map(dish => {
      newTime += dish.prepTime;
      newScore += dish.healthScore;
      newPrice += dish.price;
    });

    setTime(Math.round(getAvgValue(newTime, totalDishes)));
    setScore(getAvgValue(newScore, totalDishes).toFixed(2));

    setPrice(newPrice.toFixed(2));
  }, [dishes]);

  const onClick = value => {
    const newDishes = dishes.filter(dish => dish.id !== value.id);
    setDishes(newDishes);
    saveOnLocalStorage(DISHES_KEY, newDishes);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-200">
      <DishesSection title="dishes summary">
        <SummaryItem
          title="Avg. prep. time"
          value={getTime(time)}
          icon="time"
        />
        <SummaryItem title="Avg. health score" value={score} icon="score" />
        <SummaryItem title="Total price" value={`$${price}`} icon="price" />
      </DishesSection>
      <article className="w-full px-6 flex justify-end text-6xl text-emerald-600">
        {dishes.length >= 4 ? (
          <button
            disabled="disabled"
            title="There are already too many dishes"
            className="pointer-none text-slate-600"
          >
            +
          </button>
        ) : (
          <Link to="/editor" title="Add dish" className="hover:text-lime-600">
            +
          </Link>
        )}
      </article>
      <DishesSection title="your dishes">
        {dishes.map(dish => {
          return (
            <DishCard
              key={dish.title}
              dish={dish}
              btn="Delete"
              onClick={onClick}
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
