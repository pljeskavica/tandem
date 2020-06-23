export default arr => {
  const countMap = new Map();
  arr.forEach(n => {
    countMap.set(n, countMap.get(n) + 1 || 1);
  });
  const [highestEntry] = [
    ...countMap.entries(),
  ].reduce((highestEntry, entry) =>
    highestEntry[1] > entry[1] ? highestEntry : entry
  );
  return highestEntry;
};
