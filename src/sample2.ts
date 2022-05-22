const repeat = <T>(elment: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(elment);
  }
  return result;
};


const resultString = repeat<string>("aaa", 5);

