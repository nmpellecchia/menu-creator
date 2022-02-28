import axios from 'axios';

export async function getRecipeFromAPI(values) {
  let dishes;
  let diet = '';
  values.vegan ? (diet = 'vegan') : (diet = '');

  try {
    const res = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?',
      {
        params: {
          //Stored in .env
          apiKey: import.meta.env.VITE_API_KEY,
          query: values.search,
          // Spread to be able to have ternary operators and have a conditional param
          ...(diet && {
            diet: diet,
          }),
          // get all the info to avoid having to call multiple times the api
          addRecipeInformation: true,
          number: 20,
        },
      }
    );

    dishes = res.data.results;
    return dishes;
  } catch (error) {
    alert(error);
  }
}
