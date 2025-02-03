function reverseWords(s: string): string {
  const result: string[] = [];
  const newArr = s.split(' ').filter((words) => words.length > 0);
  for (let index = newArr.length - 1; index >= 0; index--) {
    result.push(newArr[index]);
  }

  return result.join(' ');
}
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
console.log(reverseWords('The sky is blue'));
