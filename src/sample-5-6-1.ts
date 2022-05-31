type UserNA = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): UserNA {
  if (name === "") {
    throw new Error("名前は空にできません！");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: UserNA, message: string): string {
  return `${user.name}(${user.age}) 「${message}」`;
}

const uhyo = createUser("uhyo", 26);

console.log(getMessage(uhyo, "こんにちは"));
