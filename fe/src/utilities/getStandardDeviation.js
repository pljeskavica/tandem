import getMean from './getMean';
export default arr => {
  const mean = getMean(arr);

  const squareDifferences = arr.map(v => (v - mean) ** 2);

  const squareDiffAverages = getMean(squareDifferences);

  const stdDev = Math.sqrt(squareDiffAverages);

  return stdDev;
};
