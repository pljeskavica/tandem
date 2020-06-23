import getMean from './getMean';
export default arr => {
  const mean = getMean(arr);
  return Math.sqrt(
    arr.reduce((acc, number) => (number - mean) ** 2 / (arr.length - 1))
  );
};
