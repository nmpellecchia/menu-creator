// This program handles localStorage a few times so I consider is better
// to have a function for this purpose
export function saveOnLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}
