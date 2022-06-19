import {readFileSync} from "fs"

const txt = readFileSync("sample.txt", { encoding : "utf8"});

console.log(txt)

let count = 0
let currentIndex = 0

while(true){
  const nextIndex = txt.indexOf("hey" ,currentIndex)
  console.log(`nextIndex: ${nextIndex}`)

  if(nextIndex >= 0){
    count ++;
    currentIndex = nextIndex + 1
  }else {
    break
  }
}
console.log(`count: ${count}`)