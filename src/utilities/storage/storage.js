import { showErrorPopup } from '../services/popups.js';

// This time I choose letting the entire file have access to the key. To avoid
// having to write it multiple times in the code
export const DISHES_KEY = 'selectedDishes';

// This program handles localStorage a few times, I consider it is better
// to have a file for this purpose
export function saveOnLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

export function addNewItem(value) {
  //Retrieve from localstorage or create a new array if there isn't one
  let items = getFromLocalStorage(DISHES_KEY) || [];

  // If item already exists returns index, else -1
  let i = items.findIndex(item => item.title == value.title);

  if (items.length >= 4) {
    showErrorPopup('You have too many dishes!');
    return false;
  }
  // Check if item is not already in the list
  if (i !== -1) {
    showErrorPopup('This dish is already on the menu!');
    return false;
  }

  if (!checkVeganDishes(items, value)) {
    return false;
  }
  items.push(value);

  saveOnLocalStorage(DISHES_KEY, items);
  return true;
}

// This function should be tested with a library
function checkVeganDishes(itemList, itemToAdd) {
  let veganDishes = 0;

  for (let i = 0; i <= itemList.length - 1; i++) {
    if (itemList[i].vegan) {
      veganDishes++;
    }
  }

  /* if 2 dishes:
                  0 vegans == ADD VEGAN
                  1 vegan == do whatever
                  2 vegans == ADD NOT VEGAN
    if 3 dishes:
                  1 vegan == ADD VEGAN
                  2 vegan == ADD NOT VEGAN */

  switch (veganDishes) {
    case 2:
      if (itemToAdd.vegan) {
        showErrorPopup('You have too many vegan dishes');

        return false;
      }
      break;
    case 1:
      if (!itemToAdd.vegan && itemList.length == 3) {
        showErrorPopup('Add another vegan dish');
        return false;
      }
      break;
    case 0:
      if (!itemToAdd.vegan && itemList.length == 2) {
        showErrorPopup('Add a vegan dish');
        return false;
      }
      break;
    default:
      return true;
  }
  // If it passes the statements
  return true;
}
