function plusOne(digits: number[]): number[] {
  const digitsArr = digits.join('');
  const number = BigInt(digitsArr) + BigInt(1);

  const str = number.toString();
  const result: number[] = [];
  for (let i = 0; i < str.length; i++) {
    result.push(parseInt(str[i]));
  }
  return result;
}

console.log(plusOne([9, 9]));
