type Human = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const datas: string = `
uhyo,26,1
john Smith,17,0
Mary Sue,14,1
`;

const humans: Human[] = [];
const lines = datas.split("\n");

for (const line of lines) {
  if (line === "") {
    continue;
  }
  const [name, ageString, premiumUserString] = line.split(",");

  const age = Number(ageString);
  const premiumUser = premiumUserString === "1";

  humans.push({
    name,
    age,
    premiumUser,
  });
}

for (const human of humans) {
  if (human.premiumUser) {
    console.log(`${human.name} (${human.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${human.name} (${human.age})はプレミアムユーザーではありません。`
    );
  }
}
