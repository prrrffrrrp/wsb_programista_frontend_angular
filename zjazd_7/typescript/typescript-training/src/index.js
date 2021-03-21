// Primitive types
// const PI: number = Math.PI;
let foo = 'bar';
const myNum = 1234;
let fail = null;
const myObj = { foo: 'bar' };
const friends = ['Tom', 'Dan', 'Sam', 'Zoe'];
const numbers = [10, 20, 30, 40];
function concatAll(str, num) {
    return str.concat(num.toString());
}
// Literal types
let secret;
secret = 'foo';
let customer;
customer = { name: 'John', age: 32, vip: true };
let person = { name: 'Jim', age: 10, vip: false };
const mul = (a, b) => a * b;
let ebony;
ebony = { name: 'ebony', price: 102.99, color: 'natural' };
// Unions
let gender = 'female';
let user;
user = { name: 'Adam', lastName: 'Kaminski' };
user = 'anonymous';
let yesOrNo1 = true;
let yesOrNo2 = false;
let dir = 'East';
const response = { status: 'success', data: 'OK' };
const categorie = (person) => {
    if ('friends' in person) {
        return person.friends;
    }
    else {
        return [];
    }
};
let geek = { name: 'Al', age: 3 };
let hipster = { name: 'Phil', friends: ['Al', 'Fred'] };
let cat1 = console.log(categorie(geek));
let cat2 = console.log(categorie(hipster));
// Wyliczenia (Enums)
// Old Enums
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let primaryColor = Color1.Red;
let secondaryColor = Color1[2];
// new Enums
var Color2;
(function (Color2) {
    Color2["Red"] = "#ff0000";
    Color2["Green"] = "#ff00ff";
    Color2["Blue"] = "#0000ff";
})(Color2 || (Color2 = {}));
let green = Color2.Green;
var MyDirection;
(function (MyDirection) {
    MyDirection["North"] = "n";
    MyDirection["East"] = "e";
    MyDirection["South"] = "s";
    MyDirection["West"] = "w";
})(MyDirection || (MyDirection = {}));
function move(direction) {
    // IMPLEMENTACJA
}
move(MyDirection.South);
;
;
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.discount = true;
        this.privateAccount = '123xyz';
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const john = new Customer('John', 10); // -> We can use a class as a Type
console.log(john.name);
console.log(john.discount);
class Demo {
    constructor() {
        this.test = true;
    }
    print() {
        console.log(this.test);
    }
}
Demo.pi = Math.PI; // -> static statment cannot use 'this.'
// Declare class attributes access type in constructor args to avoid repetition
class FooBar {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
// kontrola dostępu do pól w JS:
/*
 * Object.defineProperty
 * Object.defineProperties
 * Object.preventExtensions
 * Object.seal
 * Object.freeze
 */
// Ćwiczenia 5
var CPU;
(function (CPU) {
    CPU["Intel"] = "Intel";
    CPU["AMD"] = "amd";
})(CPU || (CPU = {}));
// 'implements' can implement many interfaces
class SuperLaptop {
    constructor(cooling, games, ssd, ram, cpu, price) {
        this.cooling = cooling;
        this.games = games;
        this.ssd = ssd;
        this.ram = ram;
        this.cpu = cpu;
        this.price = price;
        // the convention says that first go the public methods, then the protected, the the private.
        this.x = 1;
        this.y = 2;
        this.manufacturer = 'dkfjadskfjlaks';
    }
    on() { }
    off() { }
    xyz() { }
}
// Modules
import { add, mult } from './math-calculation';
// import {exclamation} from './string_operations';
const val1 = add(2, 2);
const val2 = mult(2, 2);
// const val3: string = exclamation("hello");
console.log(val1, val2);
const fruitShop = {
    name: 'Skep Owocowy',
    address: 'Sunny Ave.',
    items: [{ name: 'Apple', price: 10.22 }, { name: 'Kiwi', price: 9.99 }]
};
// now type fruitShop looks like that:
/*
 * interface fruitShop {
 *     name: string;
 *     address: string;
 *     items: Fruit[];
 * }
 */
class Bacon {
    constructor(secret) {
        this.secret = secret;
    }
}
const bacon = new Bacon(45);
function identity(value) {
    return value;
}
const strVal = identity('abc');
function add2(val1, val2) {
    console.log(val1);
    console.log(val2);
}
const f = { name: 'Pear', price: 12.02 };
add2(17.22, f);
