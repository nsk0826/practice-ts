class UserClass  {
  constructor(name:string, age:number){
    this.name = name,
    this.age = age
  }
  name: string;
  age: number;
};

function createUser(name: string, age: number): UserClass {
  if (name === "") {
    throw new Error("名前は空にできません！");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: UserClass, message: string): string {
  return `${user.name}(${user.age}) 「${message}」`;
}

const uhyo = createUser("uhyo", 26);

console.log(getMessage(uhyo, "こんにちは"));
