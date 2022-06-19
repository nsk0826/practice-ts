import {readFileSync} from "fs"

const txt = readFileSync("sample.txt", { encoding : "utf8"});

console.log(txt)

let count = 0
let nextIndex = 0