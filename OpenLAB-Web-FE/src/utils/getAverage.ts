const getAverage = (arr: Array<string>) => {
  const sum = arr.reduce(
    (temperature, val) => temperature + parseFloat(val),
    0
  );
  return sum / arr.length;
};
