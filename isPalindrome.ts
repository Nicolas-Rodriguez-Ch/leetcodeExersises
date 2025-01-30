function isPalindrome(s: string): boolean {
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

isPalindrome("A man, a plan, a canal: Panama");
