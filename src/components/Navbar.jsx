import React from 'react';

function Navbar() {
  return (
    <nav className="h-14 px-2 flex justify-between items-center bg-gradient-to-l from-lime-300 to-emerald-500 text-white shadow-2xl">
      <p className="font-bold uppercase">🍴 Create your menu 🍴</p>
      <button className="h-3/4 rounded-full bg-lime-600 px-2 text-white text-sm uppercase duration-300 shadow-2xl hover:bg-transparent">
        log out
      </button>
    </nav>
  );
}

export default Navbar;
