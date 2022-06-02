class UserClass  {
  constructor(name:string, age:number){

    if(name === ""){
      throw new Error("名前は空にできません！");
    }
    this.name = name,
    this.age = age
  }
  name: string;
  age: number;

  getMessage(message: string){
    return `${this.name}(${this.age}) 「${message}」`;
  }
};


const uhyo = new UserClass("uhyo", 26);

console.log(uhyo.getMessage("こんにちは"));
