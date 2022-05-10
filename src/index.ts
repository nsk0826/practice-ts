const message: string = "Hello, world!";

console.log(message);

const greeting = "Hello, ";
const target = greeting + greeting;
console.log(target);

const r = /ab+c/i

console.log( r.test("abc"))
console.log(r.test("aaabc"))
console.log(r.test("a"))
console.log(r.test("ありがとう"))
console.log(r.test("ABC"))