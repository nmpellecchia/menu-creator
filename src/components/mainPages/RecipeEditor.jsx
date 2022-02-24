import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';
//
import DishCard from '../cardsAndSections/DishCard.jsx';
import { getDishes } from '../../utilities/services/dishes.js';
import { addNewItem } from '../../utilities/storage/storage.js';

function RecipeEditor() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [resultsTitle, setResultsTitle] = useState('');
  //
  const history = useNavigate();

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
    <main className="w-full h-full">
      <h1 className="text-3xl font-black text-center text-emerald-500 md:text-5xl md:mb-2">
        Recipe Searcher
      </h1>
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
      <div className="sticky bottom-0 right-0 flex justify-end gap-6 p-4">
        <button
          onClick={() => {
            history(-1);
          }}
          className="bg-emerald-600 border-2 border-emerald-600 text-white font-bold duration-500 hover:bg-transparent hover:text-emerald-600"
        >
          Go back
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-emerald-600 border-2 border-emerald-600 text-white font-bold duration-500 hover:bg-transparent hover:text-emerald-600"
        >
          Go Up
        </button>
      </div>
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
  );
}

function DishesSection(props) {
  return (
    <article>
      <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6">
        {props.title}
      </h2>
      <ul className="w-11/12 flex justify-center flex-wrap gap-4">
        {props.children}
      </ul>
    </article>
  );
}

export default RecipeEditor;
