export {}
// for (let i: number = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz :" + i);
//   } else if (i % 5 === 0) {
//     console.log("Buzz :" + i);
//   } else if (i % 3 === 0) {
//     console.log("Fizz :" + i);
//   } else {
//     console.log(i);
//   }
// }

const getFissBuzzString = (i: number): string => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz :" + i;
  } else if (i % 5 === 0) {
    return "Buzz :" + i;
  } else if (i % 3 === 0) {
    return "Fizz :" + i;
  } else {
    return String(i);
  }
};
const sequence = (start: number, end: number): number[] => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFissBuzzString(i);
  console.log(message);
}
