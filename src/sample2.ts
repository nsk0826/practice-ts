type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
john Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];

const rows = data.split("\n");

for (const row of rows) {
  if (row !== "") {
    const rowDetail = row.split(",");
    const user: User = {
      name: rowDetail[0],
      age: Number(rowDetail[1]),
      premiumUser: rowDetail[2] === "1",
    };
    users.push(user);
  }
}
console.log(JSON.stringify(users));

for (const user of users) {
  if(user.premiumUser){
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} (${user.age})はプレミアムユーザーではありません。`
    );
  }
}
