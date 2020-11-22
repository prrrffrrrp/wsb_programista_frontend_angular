// Arrays
var fullName = "John Doe";
fullName.split("").reverse().join("")

// if
function isAdult(age) {
  if (Number.isInteger(age)) {
        return age >= 18;
    } else {
        console.log("Oops!");
        return false;   
    }
}

isAdult(17)
isAdult(18)
isAdult(19)
isAdult('hi')

// RegExp do zadania domowe
var value = 'abcc';
var myPattern = new RegExp(value);

var anotherArray = [];
anotherArray

// Ćwiczenie 7
function skip(n, arr) {
  return arr.slice(n);
}

var nums = ['one', 'two', 'three', 'four'];
skip(1, nums)

// Pętle
var array = ["foo", "bar", "baz"];

for (var i = 0; i < array.length; ++i ) {
  console.log(array[i]);
}

// Home work!!
var array = [ [1, 2], [3, 4], [5, 6] ];

for (var i = 0; i < array.length; ++i) {
    console.log(array[i]);
}

// for .. in
for (var i in array) {
  console.log(array[i])
}

// while
var countries = [ 'Poland', 'England', 'China', 'Argentina' ];
var go = true;
/* while (go === true) {
  countries.pop();
  
  if (countries.length <= 2) {
    go = false;
  }
}
*/

// Ćwiczenia 8
function addAll(arr) {
  var sum = 0;
  for (var num in arr) {
    sum += arr[num]
  }
  return sum
}

addAll([1, 2, 3, 4])
addAll([])
var numbers = [1, 2, 3, 4, 70];
addAll(numbers)

// Objects

var obj = {0: 'foo', 'bar': 1, name: 'Al', age: 21};
obj
obj.name
obj['bar']
obj[0]
obj.age

obj.new_key = 'hello'
obj
obj.new_key = 'hi'
obj
obj.spam = {'one': 1, 'two': 2};
obj
obj.spam['one']
obj.spam.num = 3
obj.spam.num
obj
obj.spam.one
obj.spam.two

obj.spam[0]
obj.bar

var spam = {'bar': 0, bar: 1};
spam.bar
spam.bar
spam['bar']




