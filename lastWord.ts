const lengthOfLastWord = (s: string): number => {
  const words = s.split(' ');
  const newArr = words.filter((word) => word.length > 0);
  const length = newArr.length;

  return newArr[length - 1].length;
};

lengthOfLastWord('luffy is still joyboy');
lengthOfLastWord('   fly me   to   the moon  ');
