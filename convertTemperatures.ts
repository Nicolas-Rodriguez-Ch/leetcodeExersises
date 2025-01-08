function convertTemperature(celsius: number): number[] {
  const result: number[] = [];
  result.push(celsius + 273.15);
  result.push(celsius * 1.80 + 32.00);
  return result;
};

console.log(convertTemperature(36.50));
console.log(convertTemperature(122.11));