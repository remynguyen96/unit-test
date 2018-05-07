const str = str => str.split('').reverse().join('');

const num = (num) => {
  if (typeof num !== 'number') return;
  const sinNumber = Math.sin(Math.PI / 6);
  return parseFloat(sinNumber).toFixed(1) * 5;
};

const object = obj => {
  const newObject = {};
  for (let [index, value] of Object.entries(obj)) {
    newObject[index] = value;
  }
  newObject.test = 'testObject';
  return newObject;
};

const arr = arr => (
  arr.reduce((array, item) => {
    if (typeof item === 'number' && Math.sign(item) !== -1) {
      array.push(item);
    }
    return array;
  }, [])
);

export default {
  str,
  num,
  object,
  arr,
}
