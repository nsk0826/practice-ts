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

const getAge = () = 
