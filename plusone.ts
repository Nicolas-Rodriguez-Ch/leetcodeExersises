function plusOne(digits: number[]): number[] {
  const lastNum = digits.length - 1;
  for (let i = 0; i < digits.length; i++) {
    if (i === lastNum && digits[i] !== 9) digits[i] += 1;
    else if (i === lastNum && digits[i] === 9) digits.splice(i, 1, 1, 0);
  }
  return digits;
}

console.log(plusOne([9, 9]));
