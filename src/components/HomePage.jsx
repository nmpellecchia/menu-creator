import React from 'react';
//
import { BsClockHistory, BsFillHeartFill, BsBasketFill } from 'react-icons/bs';

function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-200">
        <article>
          <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6">
            dishes summary
          </h2>
          <ul className="w-11/12 flex flex-wrap justify-center gap-4">
            <li className="max-w-1/2 text-center font-bold text-emerald-600">
              <p className="text-xl">Avg. prep. time</p>
              <div className="flex justify-center items-center my-4">
                <BsClockHistory className="h-6 w-6" />
                <p className="ml-1 text-black">2 hours 45 minutes</p>
              </div>
            </li>
            <li className="max-w-1/2 text-center font-bold text-emerald-600">
              <p className="text-xl">Avg. health score</p>
              <div className="flex justify-center items-center my-4">
                <BsFillHeartFill className="h-6 w-6" />
                <p className="ml-1 text-black">68.3</p>
              </div>
            </li>
            <li className="max-w-1/2 text-center font-bold text-emerald-600">
              <p className="text-xl">Total price</p>
              <div className="flex justify-center items-center my-4">
                <BsBasketFill className="h-6 w-6" />
                <p className="ml-1 text-black">$999.69</p>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6">
            Your dishes
          </h2>
          <ul className="flex justify-center flex-wrap">
            <li className="w-11/12 md:w-2/5  m-6">
              <div className="shadow-2xl rounded-2xl h-60 p-3">
                <div className="">
                  <img
                    src="#"
                    alt="#"
                    className="h-4/6 w-7/12 float-right bg-red-500"
                  />
                  <h3 className="font-semibold uppercase text-lg">
                    Burger with tomatoes and rucula
                  </h3>
                  <p className="font-semibold traking-wide">$69.69</p>
                  <p className="traking-widest font-bold text-lime-600 my-2">
                    89.95 🔥
                  </p>
                  <p>12hs. 58mins.</p>
                </div>

                <div className="flex justify-between pt-6">
                  <button className="rounded-full bg-lime-700 py-2 px-4 text-white hover:bg-emerald-700">
                    detalle
                  </button>
                  <button className="rounded-full bg-lime-700 py-2 px-4 text-white hover:bg-emerald-700">
                    juira
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}

export default HomePage;
