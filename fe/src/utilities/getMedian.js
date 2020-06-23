import getMean from './getMean';

export default arr => {
  const getMid = arr => {
    if (arr.length % 2 !== 0) return Math.floor(arr.length / 2);
    const index2 = arr.length / 2;
    const index1 = index2 - 1;
    return getMean([arr[index2], arr[index1]]);
  };
  const sortedArray = arr.sort((a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
    return 0;
  });

  return getMid(sortedArray);
};
