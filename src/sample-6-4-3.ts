const get = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

type Human4 = {
  name: string;
  age: number;
};

const foo: Human4 = {
  name: "foo",
  age: 10,
};

console.log(get(foo, "name"));

console.log(get(foo, "age"));

