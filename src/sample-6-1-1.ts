type Animal = {
  species: string;
};

type Human2 = {
  name: string;
};

type User2 = Animal | Human2;

const tama: User2 = {
  species: "silver cat",
};

const fooMan: User2 = {
  name: "foo",
};




