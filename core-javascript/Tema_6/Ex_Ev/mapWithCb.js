// 2. Mocking functions: mapWithCb
// The mapwithCb function accepts an array and a callback. It maps over the array with the callback, 
// so we can expect the callback function to be called multiple times.

// Your task is to write tests for mapWithCb, which will involve writing a mock function (aka a spy) 
// for the callback function. The test cases have been provided for you.


const mapWithCb = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw Error();
  }
  return array.map(item => callback(item));
};

module.exports = mapWithCb;


