import React, { useEffect, useState } from 'react';

function Navbar({ setToken }) {
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      setToken(null);
      localStorage.removeItem('token');
    }
  }, [isLoggedIn]);
  return (
    <nav className="h-14 px-2 flex justify-between items-center bg-gradient-to-l from-lime-300 to-emerald-500 text-white shadow-2xl">
      <p className="font-bold uppercase">🍴 Create your menu 🍴</p>
      <button
        className="h-3/4 rounded-full bg-lime-600 px-2 text-white text-sm uppercase duration-300 shadow-2xl hover:bg-transparent"
        onClick={() => {
          setLoggedIn(false);
        }}
      >
        log out
      </button>
    </nav>
  );
}

export default Navbar;
