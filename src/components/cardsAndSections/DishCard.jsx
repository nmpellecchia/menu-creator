import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import the css to have the styling
import 'sweetalert2/dist/sweetalert2.min.css';
//
import { cropStr, getTime } from '../../utilities/services/handlingData';
import { showSuccessPopup } from '../../utilities/services/popups';

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
          'rounded-full bg-gradient-to-r from-lime-500 to-emerald-700 p-2 text-white text-lg uppercase font-semibold hover:from-emerald-500',
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
    if (dish.healthScore < 15) {
      setIcon('😓 ');
    } else if (dish.healthScore < 30) {
      setIcon('😒 ');
    } else if (dish.healthScore < 45) {
      setIcon('🤔 ');
    } else if (dish.healthScore < 60) {
      setIcon('🙄 ');
    } else if (dish.healthScore < 75) {
      setIcon('😄 ');
    } else if (dish.healthScore < 90) {
      setIcon('😎 ');
    } else {
      setIcon('🤩 ');
    }
  }, []);

  return (
    <li className="w-11/12 md:w-2/5  m-6">
      <div className="h-full flex flex-col justify-between shadow-2xl rounded-2xl p-3">
        <div>
          <img
            src={dish.img || '#'}
            alt={dish.title}
            className="w-full float-none md:w-7/12 md:float-right"
          />
          <h3 className="font-semibold uppercase text-lg font-title">
            {cropStr(dish.title)}
          </h3>
          {dish.vegan && (
            <p className="uppercase text-lime-600 italic">(vegan)</p>
          )}
          <p className="font-semibold traking-wide">${dish.price}</p>
          <p className="traking-widest font-bold text-lime-600 my-2 text-lg">
            {icon + dish.healthScore}
          </p>
          <p>{getTime(dish.prepTime)}</p>
        </div>

        <div className="flex justify-between pt-6 clear-both">
          <button onClick={showDetails} className="button">
            Details
          </button>
          <button onClick={handleClick} className="button">
            {btn}
          </button>
        </div>
      </div>
    </li>
  );
}
export default DishCard;
