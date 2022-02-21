// This program handles localStorage a few times so I consider is better
// to have a function for this purpose
export function saveOnLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

export function addNewItem(value) {
  // This time I choose letting the function have the key. To avoid
  // having to write it multiple times in the code
  const key = 'selectedDishes';
  //Retrieve from localstorage or create a new array if there isn't one
  let items = JSON.parse(localStorage.getItem(key)) || [];

  // If item already exists returns index, else -1
  let i = items.findIndex(item => item.title == value.title);

  if (items.length >= 4) {
    return;
  }
  // Check if item is not already in the list
  if (i !== -1) {
    return;
  }

  if (!checkVeganDishes(items, value)) {
    return;
  }
  items.push(value);

  saveOnLocalStorage(key, items);
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
        alert('You have too many vegan dishes');
        return false;
      }
      break;
    case 1:
      if (!itemToAdd.vegan && itemList.length == 3) {
        alert('Add another vegan dish');
        return false;
      }
      break;
    case 0:
      if (!itemToAdd.vegan && itemList.length == 2) {
        alert('Add a vegan dish');
        return false;
      }
      break;
    default:
      return true;
  }
  // If it passes the statements
  return true;
}
