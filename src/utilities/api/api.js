import axios from 'axios';

export async function getRecipeByName(value) {
  let dishes;
  try {
    const res = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?',
      {
        params: {
          //Stored in .env
          apiKey: import.meta.env.VITE_API_KEY,
          query: value,
          // get all the info to avoid having to call multiple times the api
          addRecipeInformation: true,
          number: 10,
        },
      }
    );

    dishes = res.data.results;
    return dishes;
  } catch (error) {
    alert(error);
  }
}
