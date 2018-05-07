const promise1 = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      setTimeout(() => {
        resolve('Function Promise Success !!!');
      }, 650)
    } else {
      reject('Function Promise Error !!!');
    }
  });
};



export default {
  promise1,
}
