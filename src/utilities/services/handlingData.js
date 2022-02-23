export function getAvgValue(value, amount) {
  return value / amount;
}

export function cropStr(str) {
  const maxAmount = 20;
  if (str.length > maxAmount) {
    return str.slice(0, maxAmount) + '...';
  }
  return str;
}

export function getTime(mins) {
  let time = '';
  const hours = Math.floor(mins / 60);
  const newMins = mins % 60;

  if (hours > 0) {
    time += hours + 'hs.';
  }

  return (time += newMins + 'mins');
}
