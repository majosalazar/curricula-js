const findSmallestNumberAmongMixedElements = (arr) => {
  if (arr.length === 0) {
    return '';
  }

  let min = 10000;
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      if (arr[i] < min) {
        min = arr[i];
        index = i;
      }
    }
  }

  if (index === -1) {
    return '';
  }

  return arr[index];
};

module.exports = findSmallestNumberAmongMixedElements;
