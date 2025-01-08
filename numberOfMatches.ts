function numberOfMatches(n: number): number {
  let matches: number;
  let advancedTeams: number;

  if (n % 2 === 0) {
    matches = n / 2;
    advancedTeams = n / 2;
  } else {
    matches = (n - 1) / 2;
    advancedTeams = (n - 1) / 2 + 1;
  }

  if (advancedTeams === 1) {
    return matches;
  }
  return matches + numberOfMatches(advancedTeams);
}

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));