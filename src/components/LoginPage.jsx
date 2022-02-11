import React from 'react';

function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-lime-300 to-emerald-500 h-screen">
      <form
        action=""
        className="w-11/12 md:w-3/4 h-3/4 flex flex-col justify-between items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4"
      >
        <div className="flex flex-col items-center mt-1">
          <h2 className="uppercase text-3xl font-bold pb-2">Log in</h2>
          <p className="text-sm text-slate-600 mb-8">
            To continue using this service, you need to have an account.
          </p>
        </div>
        <div className="w-11/12 flex flex-col relative mb-10">
          <input
            type="text"
            id="username"
            required
            className="w-full h-10 px-2 border-b-2 border-slate-500 outline-none peer valid:border-green-500"
          />
          <label
            htmlFor="username"
            className="text-xl absolute top-0 left-0 duration-500 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs"
          >
            Username
          </label>{' '}
        </div>
        <div className="w-11/12 flex flex-col relative mb-10">
          <input
            type="password"
            id="password"
            required
            className=" w-full h-10 px-2 border-b-2 border-slate-500 outline-none peer valid:border-green-500"
          />
          <label
            htmlFor="password"
            className="text-xl absolute top-0 left-0 duration-500 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs"
          >
            Password
          </label>{' '}
        </div>
        <input
          type="submit"
          value="Log in"
          className="w-1/2 rounded-full bg-lime-600 border-4 border-lime-600 p-4 text-white text-2xl uppercase font-bold duration-300 hover:bg-white hover:text-lime-600"
        />
      </form>
    </div>
  );
}

export default LoginPage;
