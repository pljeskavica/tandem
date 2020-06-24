import getMean from './getMean';

export default arr => {
  const getMid = arr => {
    if (arr.length % 2 !== 0) return [arr[Math.floor(arr.length / 2)]];
    const index2 = Math.floor(arr.length / 2);
    const index1 = index2 - 1;
    return [arr[index2], arr[index1]];
  };
  const sortedArray = arr.sort((a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
    return 0;
  });

  const medianValues = getMid(sortedArray);
  return getMean(medianValues);
};
