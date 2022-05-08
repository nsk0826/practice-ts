let result: string = "";
for (let i: number = 1; i <= 100; i++) {
  if (i > 1) {
    result += " ";
  }
  if (i % 3 === 0 && i % 5 === 0) {
    result += "FizzBuzz " + i;
  } else if (i % 5 === 0) {
    result += "Buzz " + i;
  } else if (i % 3 === 0) {
    result += "Fizz " + i;
  } else {
    result += i;
  }
}
console.log(result);
