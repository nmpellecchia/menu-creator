import React from 'react';
//
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

function Navbar({ setToken }) {
  const logOff = () => {
    Swal.fire({
      title: 'Do you want to log off?',
      text: 'You have to be logged in to use this site',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Log off',
      customClass: {
        confirmButton:
          'bg-red-600 py-2 px-4 mx-2 text-white font-bold rounded-md hover:bg-red-700',
        cancelButton:
          'bg-slate-400 py-2 px-4 mx-2 text-white font-bold rounded-md hover:bg-slate-500',
      },
      buttonsStyling: false,
    }).then(result => {
      if (result.isConfirmed) {
        setToken(null);
      }
    });
  };
  return (
    <nav className="h-14 px-2 flex justify-between items-center bg-gradient-to-l from-lime-300 to-emerald-500 text-white shadow-2xl">
      <p className="font-bold uppercase font-title">🍴 Create your menu 🍴</p>
      <button onClick={logOff} className="button">
        log out
      </button>
    </nav>
  );
}

export default Navbar;
