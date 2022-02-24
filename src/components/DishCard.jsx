import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import the css to have the styling
import 'sweetalert2/dist/sweetalert2.min.css';
//
import { cropStr, getTime } from '../utilities/services/handlingData';
import { showSuccessPopup } from '../utilities/services/popups';

function DishCard({ dish, btn, onClick }) {
  const [icon, setIcon] = useState('');

  const handleClick = () => {
    // Show dish added popup
    if (btn == 'Add') {
      onClick(dish) && showSuccessPopup('Dish succefully added!');
    }
    // Show dish deleted popup
    if (btn == 'Delete') {
      Swal.fire({
        title: `Are you sure you want to delete ${dish.title}?`,
        text: 'This action is irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        customClass: {
          confirmButton:
            'bg-red-600 py-2 px-4 mx-2 text-white font-bold rounded-md hover:bg-red-700',
          cancelButton:
            'bg-slate-400 py-2 px-4 mx-2 text-white font-bold rounded-md hover:bg-slate-500',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.isConfirmed) {
          showSuccessPopup(`${dish.title} has been deleted.`);
          onClick(dish);
        }
      });
    }
  };

  // Show the recipe img, name & instructions. Uses SweetAlert2
  const showDetails = () => {
    // Styling
    const detailPopUp = Swal.mixin({
      customClass: {
        confirmButton:
          'rounded-full bg-lime-600 border-4 border-lime-600 p-4 text-white text-2xl uppercase font-bold duration-300 hover:bg-white hover:text-lime-600',
      },
      buttonsStyling: false,
    });
    //
    detailPopUp.fire({
      title: dish.title,
      html: `<ul>
        ${dish.instructions[0].steps
          .map(step => {
            const text = step.step;
            return `<li>${text}</li>`;
          })
          .join('<br />')}
      </ul>`,
      imageUrl: dish.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: dish.title,
      confirmButtonText: 'Close',
    });
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
          <button
            className="rounded-full bg-lime-700 py-2 px-4 text-white hover:bg-emerald-700"
            onClick={showDetails}
          >
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
