// const i let
const spam = "spam";
const bacon = {name: "Al", age: 23};
bacon.name
bacon.name = "Luc";
bacon.name

// Destrukturyzacja
const numbers = [1, 2, 3, 4];
const [first] = numbers // --> const first = numbers[0]
first
const [un, dos, tres] = numbers;
dos
tres
const [,,, last] = numbers;
last

const student = {name: "John", "age": 24, friends: ["Bob", "Tom"]};
const {name, friends} = student // --> const name = student.name
name
friends
student.job = {salary: 888, ocupation: 'programer'};
student
const {job: { salary } } = student;
salary

//Destrukturyzacja alias
const {name: firstName, friends: amigos} = student;
firstName
amigos

// Domyślne wartości
function greet(name = "Stranger") {
  return `Hello, ${name}!`;
}

greet()
greet("David")

const homeCoordinates = [232443, undefined]; // --> when undefined is used, it allows for the default values to be used instead.
const [x = 0, y = 0] = homeCoordinates;
x
y

const {one: uno = 1} = {};
uno

// funckje strzałkowe
// głownym atutem jest automatycznie wiązanie 'this'.

const hello = () => `Hello, there!`;
hello()

const add = (a = 0, b = 0) => {
  return a + b;
};

add()
add(2, 3);

const multi = [1, 2, 3, 4].map((number) => number * 3)
multi

const mult = m2 => m1 => m1 * m2;

const mulBy5 = mult(5);
[10,20,30].map(mulBy5);

const returnObject = () => ({foo: 100}); // add () in the function body to let JS know that your returning an object.
returnObject()

function foo() {
  console.log(this);
}

const bar = () => console.log(this);

const ramon = {name: "K", fooFn: foo, barFn: bar};
ramon.fooFn()
ramon.barFn()

// Operator reszty
function addd(...numbers) {
  return numbers.reduce((a,b) => a + b, 0);
}

addd();
addd(24);
addd(24, 10, 30)

function mul(num, ...numbers) {
  console.log(numbers);
  return numbers.reduce((accumulator, value) => accumulator + (value * num), 0);
}
mul(0, 10, 20, 30) // tot multiplicat per 0
mul(2, 10, 20 ,30)
mul(3)

function concat(name, surname, ...rest) {
  return name.concat(surname).concat(" is good at ").concat(rest.join(" & "));
}
concat("John", "Doe", "dancing", "shooting")

// Operator rozproszenia
const nums = [10, 20 ,30];
const ppl = ["Pam", "Dan", "Joe"]

let val = [NaN, ...nums, "XYZ", ...ppl, "hi", ...ppl];
val


let copy1 = nums.slice();
copy1
copy1 === nums
let copy2 = [...nums];
copy2
copy2 === nums

let sorting = {key: "name", dir: "ASC"};
let sorting2 = {...sorting, two: 2};
sorting2
sorting = {...sorting, dir: "DESC"};

// To samo można zrobić z Object.assign
const olderStudent = Object.assign({}, student, {age: 99});
olderStudent

let dateParams = [2020, 0, 1];
let date = new Date(...dateParams);
date

// Szablony ciągów znaków
"Don't \nsay \"ABC\"!";
`Don't say "ABC"`;
` Hello Mr ${student.name}`;

// Map
const pat = {name: "Pat", age: 42};
const mat = {name: "Mat", age: 42};

const neighbors = new Map([
  [pat, "1000"],
  [mat, "1001"]
]);
let zori = {name: "Zori", age:20};
neighbors.size
neighbors.set(zori, 1002);
neighbors.size
neighbors.get(pat)
neighbors.delete(pat)
neighbors.size
neighbors.has(zori)
neighbors.clear()
neighbors.size

const myMap = new Map();
myMap.set("foo", 100);
myMap.set("bar", 200);
myMap.size
let sum = (a) => a + a;
for (let entry of myMap) {
  const [key, val] = entry;
  `key: ${key} - val: ${val}`;
}

for (let n of myMap.keys()) {
  n
}

for (let n of myMap.values()) {
  n
}

// Set
const names = new Set(["Pat", "Tom"]);
names.add("Mat");
names.delete("Mat");
names.add(1);
names.add("1");
names

// Klasy
class Cat {
  constructor(name) {
    this.name = name;
  }
  
  meow(){
    return `${this.name} says: meow!`;
  }
}

cat = new Cat("filip")
cat.meow()

class Animal {
  id = Math.random();
  
  constructor(name) {
    this.name = name;
  }   
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  move() {
    return `${this.name} is moving!`;
  }
}

let animal = new Animal("Lol");
animal.move()
animal.name

// Private attr: Not really working
/*let ou = Object.defineProperty(animal, 'age', {value: 2, writable: false, readable: false});
ou.age = 5
animal.age = 5
*/
class Dog extends Animal {
  constructor(name, age = 0, owner = 'UNKNOWN') {
    super(name); //odnosi się do konstruktora Animal
    this.age = age; 
    this.owner = owner.toUpperCase();
  }
  
  bark() {
    return `${this.name} barks! WOOF!`;
  }
}

const dog1 = new Dog("Max", 10, "Tom");
const dog2 = new Dog("Zoe");
dog1
dog2
dog1.move()
dog1.bark()
dog2.bark()
// Moduły
/*export const secretCode = '123';
import { secretCode, randomizeNumber } from './other';
console.log(secretCode);
let luckyNumber
// export default exports only one value in the whole file
export default const cheese = () => "cheese";
import whatever from './other' // imports cheese. There is only cheese to import*/
// zamiana wartości
let a = 1;
let b = 2;
[a, b] = [b, a];
a

// arguments
function foo2(num) {
  return arguments;
}
foo2(5)
Array.from(foo2(6));

Array.from({ length: 20 })
Array.from({  length: 20 }, (elem, index) => index+1)

// Zadanie
// Point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(otherPoint) {
    return new Point(this.x + otherPoint.x, this.y + otherPoint.y)
  }
}

const pointA = new Point(1, 2);
const pointB = new Point(2, 1);
const pointC = pointA.plus(pointB);
pointC.x

// Katastrofa
/* Original code contains errors:

function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true}
  } = options;
  return `${speed}, ${hyperdrive}, ${frobnifier}`;
}
*/
function go( options = {} ) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true} = {}
  } = options;
  return `${speed}, ${hyperdrive}, ${frobnifier}`;
}

go({ speed: 5 })
go()

// Księgowość
const inventory = [
{ type: "machine", value: 5000 },
{ type: "machine", value: 650 },
{ type: "plant", value: 20 },
{ type: "furniture", value: 1200 },
{ type: "machine", value: 250 }
];
const valueOfMachines = inventory // [{}, {}, {}, {}, {}]
                            .filter(item => item.type === 'machine') // [{}, {}, {}]
                            .map(item => item.value) // [5000, 650, 250]
                            .reduce((sum, value) => sum + value, 0); // 5900
valueOfMachines

// z pętla for:
let suma = 0;
for (let i = 0; i < inventory.length; i += 1) {
  const item = inventory[i];
  if (item.type === 'machine') {
    suma += item.value;
  }
}
suma
// Partycjonowanie
const items = ["foo", "bar", "moo", "baz"];
const includesA = text => text.includes("a");
includesA('bar');
!includesA("moo");

function partition(filterFn, items) {
  const okItems = items.filter(filterFn);
  const nokItems = items.filter(item => !filterFn(item));
  return [okItems, nokItems];
}

partition(includesA, items);

function partitionReduce(fn, items) {
  return items.reduce();
}

function partitionLoop(fn, array) {
  const okItems = [];
  const nokItems = [];
  
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (fn(item)) {
      okItems.push(item);
    } else {
      nokItems.push(item);
    }
  }
  return [okItems, nokItems];
}
                      
                      
 




