const map = <T>(array: number[], callback: (x: number) => T): T[] => {
  const result: T[] = [];
  array.map((v) => {
    return result.push(callback(v));
  });
  return result;
};

const numbers = [1, 1, 2, 3, 5, 8, 13];

const resultNumbers = map(numbers, (x: number) => x * 10);

const numbers2 = [1, -3, -2, 8, 0, -1];

const resultBoolean = map(numbers2, (x: number) => x >= 0);

console.log(resultNumbers);

console.log(resultBoolean)
