type FooNumber = {
  age: number;
  score: number;
};

type FooString = {
  age: string;
  score: string;
};

const fooObj: FooNumber = {
  age: 10,
  score: 20,
};

const fooObj2: FooString = {
  age: String(fooObj.age),
  score: String(fooObj),
};

type keys = keyof FooNumber;

for (const k of Object.keys(fooObj)) {
  console.log(k);
}
