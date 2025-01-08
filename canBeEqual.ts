function canBeEqual(target: number[], arr: number[]): boolean {
    return target.sort().join('') === arr.sort().join('');
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));
console.log(canBeEqual([7], [7]));
console.log(canBeEqual([3,7,9], [3,7,11]));