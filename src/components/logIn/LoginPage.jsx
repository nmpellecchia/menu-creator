import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//
import { handleUserSubmit } from '../../utilities/loginAuth/handleUserSubmit.jsx';

function LoginPage({ setToken }) {
  // disables the form if the program is making an api call
  const [fetching, setFetching] = useState(false);

  return (
    <div className="bg-gradient-to-b from-lime-300 to-emerald-500 h-screen">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={values => {
          let errors = {};

          if (!values.email) {
            errors.email = 'Please enter an email to continue';
          }
          if (!values.password) {
            errors.password = 'Please enter password to continue';
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          resetForm(); // Cleans the form

          setFetching(true); // Disable the form while awaiting the API response
          const token = await handleUserSubmit(values);
          setToken(token);

          setFetching(false);
        }}
      >
        {/* Destructuring Formik props for easier use */}
        {({
          errors, // formik object, stores our form errors
        }) => (
          <Form className="w-11/12 md:w-3/4 h-3/4 flex flex-col justify-between items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
            <div className="flex flex-col items-center mt-1">
              <h2 className="uppercase text-3xl font-bold pb-2">Log in</h2>
              <p className="text-sm text-slate-600 mb-8">
                To continue using this service, you need to have an account.
              </p>
            </div>
            <div className="w-11/12 flex flex-col relative mb-10">
              <Field
                type="text"
                id="email"
                name="email"
                required
                className="w-full h-10 px-2 border-b-2 border-slate-500 outline-none peer valid:border-green-500"
              />
              <label
                htmlFor="email"
                className="text-xl absolute top-0 left-0 duration-500 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs"
              >
                Username
              </label>{' '}
              <ErrorMessage
                name="email"
                component={() => <p className="text-red-700">{errors.email}</p>}
              />
            </div>
            <div className="w-11/12 flex flex-col relative mb-10">
              <Field
                type="password"
                id="password"
                name="password"
                required
                className=" w-full h-10 px-2 border-b-2 border-slate-500 outline-none peer valid:border-green-500"
              />
              <label
                htmlFor="password"
                className="text-xl absolute top-0 left-0 duration-500 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs"
              >
                Password
              </label>{' '}
              <ErrorMessage
                name="password"
                component={() => (
                  <p className="text-red-700">{errors.password}</p>
                )}
              />
            </div>
            <button
              type="submit"
              disabled={fetching}
              className="w-1/2 rounded-full bg-lime-600 border-4 border-lime-600 p-4 text-white text-2xl uppercase font-bold duration-300 hover:bg-white hover:text-lime-600 disabled:bg-lime-400 disabled:text-slate-300 disabled:border-lime-400 disabled:cursor-wait"
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
