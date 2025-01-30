function fizzBuzz(n: number): string[] {
  const newArr: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      newArr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      newArr.push('Buzz');
    } else if (i % 3 === 0) {
      newArr.push('Fizz');
    } else {
      newArr.push(i.toString());
    }
  }
  return newArr;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
