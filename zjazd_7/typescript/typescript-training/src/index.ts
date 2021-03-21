
// Primitive types

const PI: number = Math.PI;

let foo: string = 'bar';

const myNum: number = 1234;

let fail: null = null;

const myObj: object = { foo: 'bar' };

const friends: string[] = ['Tom', 'Dan', 'Sam', 'Zoe'];

const numbers: number[] = [10, 20, 30, 40];

function concatAll(str: string, num: number): string {
    return str.concat(num.toString());
}


// Literal types
let secret: 'foo';
secret = 'foo';

let customer: { name: string, age: number, vip: boolean };
customer = { name: 'John', age: 32, vip: true };

type Person = { name: string, age: number, vip: boolean };
let person: Person = { name: 'Jim', age: 10, vip: false };

type MyBoolean = boolean;

type MulFunction = (v1: number, v2: number) => number;
const mul: MulFunction = (a, b) => a * b;

// Intersections

type Product = { name: string, price: number };
type Wood = { name: string, color: 'natural' };

let ebony: Product & Wood;
ebony = { name: 'ebony', price: 102.99, color: 'natural' };

// Unions

let gender: 'male' | 'female' = 'female';

type User = { name: string, lastName: string };
let user: User | 'anonymous';
user = { name: 'Adam', lastName: 'Kaminski' };
user = 'anonymous';

type Bool = true | false;
let yesOrNo1: Bool = true;
let yesOrNo2: Bool = false;

type Direction = 'North' | 'East' | 'West' | 'South';
let dir: Direction = 'East';

// Discriminated Unions

type SuccessResponse = { status: "success", data: string };
type ErrorResponse = { status: "error", code: number };
type TimeoutResponse = { status: "loading" };

type MyResponse = SuccessResponse | ErrorResponse | TimeoutResponse;
const response: MyResponse = { status: 'success', data: 'OK' };

// switch (response.status) {
//     case 'success':
//         console.log(response.data);
//     case 'error':
//         console.log(response.code);
//     case 'loading':
//         console.log('Loading...');
// }

// Ćwiczenia 3
type Geek = { name: string, age: number };
type Hipster = { name: string, friends: string[] };
type CategorizePerson = ( person: Geek | Hipster ) => string[];
const categorie: CategorizePerson = (person) => {
    if ('friends' in person) {
        return person.friends;
    } else {
        return [];
    }
};

let geek: Geek = {name: 'Al', age: 3}
let hipster: Hipster = { name: 'Phil', friends: ['Al', 'Fred'] }
let cat1 = console.log(categorie(geek));
let cat2 = console.log(categorie(hipster));

// Wyliczenia (Enums)
// Old Enums
enum Color1 {
    Red,
    Green,
    Blue
}
let primaryColor: number = Color1.Red;
let secondaryColor: string = Color1[2];

// new Enums
enum Color2 {
    Red = '#ff0000',
    Green = '#ff00ff',
    Blue = '#0000ff',
}
let green: Color2 = Color2.Green;

enum MyDirection {
    North = 'n',
    East = 'e',
    South = 's',
    West = 'w'
}

function move(direction: MyDirection) {
    // IMPLEMENTACJA
}

move(MyDirection.South);

// Interfaces
interface Building {};
interface SuperMarket extends Building {}

/*
 * Type vs Interface
 * Type is for short/simple/fast typing
 * Interface is for more convoluted/precise typing
 */

interface BankAccount {
    accountNumber: number; // -> end with ';'
    accountOwner: string;
};

interface Vip {
    discount: true;
    privateAccount: string;
}

class Customer implements Vip {
    public name: string;
    age: number;
    discount: true;
    privateAccount: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.discount = true;
        this.privateAccount = '123xyz';
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const john: Customer = new Customer('John', 10); // -> We can use a class as a Type

console.log(john.name);
console.log(john.discount);

class Demo {
    test: boolean;

    constructor() {
        this.test = true;
    }

    print(): void {
        console.log(this.test);
    }

    static pi: number = Math.PI; // -> static statment cannot use 'this.'
}

// Declare class attributes access type in constructor args to avoid repetition
class FooBar {
    constructor(public name: string, protected age: number) {}

    public sayHello(): void {
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
enum CPU {
    Intel = 'Intel',
    AMD = 'amd'
}

interface Laptop {
    ssd: boolean;
    ram: number;
    cpu: CPU;
    price: number;
}

interface LightSwitch {
    on(): void;
    off(): void;
}
// 'extends' can extend only one interface
interface GamingLaptop extends Laptop {
    cooling: boolean;
    games: string[];
}

// 'implements' can implement many interfaces
class SuperLaptop implements GamingLaptop, LightSwitch {
    // the convention says that first go the public methods, then the protected, the the private.
    public x = 1;
    protected y = 2;
    private manufacturer: string = 'dkfjadskfjlaks';

    constructor(
        public cooling: boolean,
        public games: string[],
        public ssd: boolean,
        public ram: number,
        public cpu: CPU,
        public price: number,
    ) {}

    public on(): void {}
    public off(): void {}
    private xyz(): void {}
}

// Modules

import {add, mult} from './math-calculation';
// import {exclamation} from './string_operations';

const val1: number = add(2, 2);
const val2: number = mult(2, 2);
// const val3: string = exclamation("hello");
console.log(val1, val2);

// Generics

interface Fruit {
    name: string;
    price: number;
}

// function fn( arg ) { console.log(arg); }
interface Shop< T > {
    name: string;
    address: string;
    items: T[];
}

const fruitShop: Shop<Fruit> = {
    name: 'Skep Owocowy',
    address: 'Sunny Ave.',
    items: [{ name: 'Apple', price: 10.22 }, { name: 'Kiwi', price: 9.99 }]
}
// now type fruitShop looks like that:
/*
 * interface fruitShop {
 *     name: string;
 *     address: string;
 *     items: Fruit[];
 * }
 */

class Bacon<T> {
    constructor(public secret: T) {}
}

const bacon = new Bacon<number>(45)

function identity<T>( value: T ): T {
    return value;
}

const strVal: string = identity<string>('abc');

function add2<T, U>(val1: T, val2: U): void {
    console.log(val1);
    console.log(val2);
}
const f: Fruit = {name: 'Pear', price: 12.02};

add2<number, Fruit>(17.22, f);
