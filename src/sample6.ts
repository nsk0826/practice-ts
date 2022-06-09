type Animal2 = {
  age: number;
  tag: "animal";
};

type Human3 = {
  age: number;
  name: string;
  tag: "human";
};

type Animal3 = Animal2 | Human3;

const getAge = (animal: Animal3) => {
  if (animal.tag === "animal") {
    return `この動物は ${animal.age} さい`;
  }
  return `${animal.name}は${animal.age}歳です`;
};
