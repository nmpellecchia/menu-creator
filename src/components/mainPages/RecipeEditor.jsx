import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';
//
import DishCard from '../cardsAndSections/DishCard.jsx';
import DishesSection from '../cardsAndSections/DishesSection.jsx';
//
import { getDishes } from '../../utilities/services/dishes.js';
import { addNewItem } from '../../utilities/storage/storage.js';

function RecipeEditor() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [resultsTitle, setResultsTitle] = useState('');
  //
  const history = useNavigate();

  // Change the results title depending on the API response
  useEffect(() => {
    if (dishes.length > 0 && searchValue !== '') {
      setResultsTitle(`Dishes containing '${searchValue}'`);
    } else if (dishes.length == 0 && searchValue !== '') {
      setResultsTitle(`We couldn't find dishes containing '${searchValue}'`);
    } else {
      setResultsTitle(``);
    }
  }, [searchValue]);

  return (
    <main className="w-full min-h-screen h-full bg-gradient-to-b from-white to-slate-200">
      {/* Go back to previous page */}
      <button
        onClick={() => {
          history(-1);
        }}
        className="bg-none text-black text-md hover:text-emerald-600 hover:underline"
      >
        {'<< Go back'}
      </button>
      <SearchForm setDishes={setDishes} setSearchValue={setSearchValue} />

      <DishesSection title={resultsTitle}>
        {dishes.map(dish => {
          return (
            <DishCard
              key={dish.title}
              dish={dish}
              btn="Add"
              onClick={addNewItem}
            />
          );
        })}
      </DishesSection>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to top"
        className="button sticky bottom-10 left-full mr-2 px-4 py-2 text-2xl"
      >
        ↑
      </button>
    </main>
  );
}

function SearchForm({ setDishes, setSearchValue }) {
  return (
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
          <p className="opacity-80 mb-2">Search a dish name or an ingredient</p>
          <fieldset className="flex justify-baseline">
            <Field
              type="text"
              id="search"
              name="search"
              className="border-y-2 border-l-2 border-slate-200 w-3/4 pr-2 outline-none"
              placeholder="BBQ Ribs, Pizza, Milk, Butter..."
            />
            <button
              type="submit"
              className="border-y-2 border-r-2 border-slate-200 rounded-none text-slate-400 hover:text-lime-600"
            >
              <FaSearch />
            </button>
          </fieldset>
          <fieldset>
            <label className="inline-flex items-center text-md flex gap-2 cursor-pointer mt-2">
              <Field
                type="checkbox"
                name="vegan"
                className="form-checkbox accent-lime-500 h-5 w-5 cursor-pointer"
              />
              Vegan
            </label>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}

export default RecipeEditor;
