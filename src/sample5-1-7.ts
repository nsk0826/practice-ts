{
  class User {
    constructor(public name:string, private age:number){}
  }

  const sam = new User("sam", 20);

  console.log(JSON.stringify(sam))

  //test
}
