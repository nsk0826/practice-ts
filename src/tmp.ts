type sampleF = {
  name: string;
  age: number;
  func: (n: number) => number;
};

type F = (args: number) => number;

const ff: sampleF = {
  name: "taro",
  age: 10,
  func: (n: number) => {
    return n + 1;
  },
};

console.log(ff.func(100));


// hello