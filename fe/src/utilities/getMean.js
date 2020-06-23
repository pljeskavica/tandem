import getSumOfArray from './getSumOfArray';

export default arr => {
  const sum = getSumOfArray(arr);
  return sum / arr.length;
};
