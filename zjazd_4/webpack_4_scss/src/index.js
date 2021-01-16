
// 1-Początek
import { sum } from "./sum";

console.log("Hello World!");
console.log(sum(2, 3));

// 2-Mały projekt
import style from "./css/index.scss"

let heading = document.querySelector('#demo');
let sumValue = sum(10, 5);

let theName = document.querySelector('#yourName')
let nameValue = 'Kasia';

heading.innerHTML = `10 + 5 = ${sumValue}`;
theName.innerHTML = `My name is ${nameValue}`;
