import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';
//
import DishCard from './DishCard.jsx';
import { getDishes } from '../utilities/services/handlingData.js';
import { addNewItem } from '../utilities/storage/storage.js';

function RecipeEditor() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  return (
    <main className="w-full h-full">
      <h1 className="text-3xl font-black text-center text-emerald-500 md:text-5xl md:mb-2">
        Recipe Searcher
      </h1>
      <Formik
        initialValues={{
          vegan: false,
          search: '',
        }}
        validate={values => {
          let errors = {};
          if (values.search.length < 2) {
            errors.search = 'Search must have at least 2 characters';
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
          const newDishes = await getDishes(values);
          setDishes(newDishes);
          setSearchValue(values.search);
        }}
      >
        {() => (
          <Form className="w-full h-40 text-md p-4">
            <fieldset>
              <label className="inline-flex items-center text-md flex gap-2 cursor-pointer">
                <Field
                  type="checkbox"
                  name="vegan"
                  className="form-checkbox accent-lime-500 h-5 w-5 cursor-pointer"
                />
                Vegan
              </label>
            </fieldset>
            <fieldset className="flex justify-baseline">
              <Field
                type="text"
                id="search"
                name="search"
                className="border-y-2 border-l-2 border-slate-200 w-3/4 pr-2 outline-none"
                placeholder="Search recipe by name or ingredient"
              />
              <button
                type="submit"
                className="border-y-2 border-r-2 border-slate-200 text-slate-400 hover:text-lime-600"
              >
                <FaSearch />
              </button>
            </fieldset>
          </Form>
        )}
      </Formik>
      <section className="p-2">
        <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6">
          "{searchValue}" dishes
        </h2>
        <ul className="w-11/12 flex justify-center flex-wrap gap-4">
          {dishes.map(dish => {
            return (
              <DishCard
                key={dish.title}
                /* name={dish.title}
                img={dish.img}
                price={dish.price}
                healthScore={dish.healthScore}
                time={dish.prepTime} */
                dish={dish}
                btn="Add"
                onClick={addNewItem}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default RecipeEditor;
