export {};

type Human = {
  age: number;
  name: string;
};

type HumanString = {
  age: string;
  name: string;
};

const man: Human = {
  age: 10,
  name: "masashi",
};

const manString: HumanString = {
  age: String(man.age),
  name: "ken",
};
