// Ćwiczenie 5.
function countHits(query, text) {
    var pattern = new RegExp(query, 'ig');
    var matches = text.match(pattern);
    return matches.length;
}

// Objekty
var user = {
  name: 'John',
  lastName: 'Doe',
  age: 13,
  friends: [10, 20, 30],
  foo: undefined,
  bar: null,
  greet: function(name) {
    console.log('Hi, ' + name);
  },
  sayHi(name) {
    return 'Hi, ' + name;
  },
  address: {
    street: 'Sun Ave.',
    number: 17070
  },
};

user.name
user.greet('Arnau')
user.greet('Miquel')
user.lastName
user.sayHi('Maikel')
user.address.number
user['name']


var someKey = 'name';
user.someKey
user[someKey]
typeof(user.someKey)
typeof(user[someKey])
user.job = 'dev';
user
Object.assign(user, {email: 'john@doe.com'})
user
// Kiedy sie chce dodać więcej items do obiektu:
Object.assign(user, {email: 'foo@bar.com', garden: false, x: 1901901 });

//Obiekty / Petla for
for (var key in user) {
  console.log(key);
}

for (var key in user) {
  console.log(user[key]);
}

// Obiekt Date
var today = new Date();
today.getFullYear()
today.getDay()
today.toISOString();

// Math
Math.min([3, 4, 1])
Math.ceil(Math.random()*10)
Math.ceil(Math.random()*10)
Math.ceil(Math.random()*10)

// Ćwiczenie 9
function toPairs(object) {
  pairs = [];
  for (var key in object) {
    pairs.push([key, object[key]]);
  }
  return pairs;
}

var something = {
  one: 1,
  two: 2,
  three: 3,
};

toPairs(something)

// this

var person = {
  name: "John",
  greet: function greet() {
    console.log("Hello, I'm " + this.name);
  }
};

person.greet();
// this -> call, apply, bind !!!!
var monster = {
  name: 'Zorg'
};
person.greet.call(monster);
person.greet.apply(monster);
var monsterGreeting = person.greet.bind(monster);
monsterGreeting
monsterGreeting()

// this / Funkcje-konstruktory
function Person(name, age) {
  this.name = name;
  this.age = age;
};

var adam = new Person("Adam", 15);
adam.name
adam.age

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
};

var sugar = new Product('sugar', 20, 1200);
sugar.name

Person.prototype.isAdult = function () {
  return this.age >= 18;
};
adam.isAdult();

// Ćwiczenie 10
function num() {
  return this;
}
num = num.bind(5);
var total = 20 + num();
total

// Promise (need more info and practice)
function burger(resolve, reject) {
  resolve("BigMac");
}

var ticket = new Promise(burger);
ticket.then(function (result) {
  console.log(result);
});

//Ćwiczenie 11 -Chaining functions
var words = ['c', 'a', 'b'];
function upperCaseAll(words) {
  var result = words.map( function (value) {
    return value.toUpperCase(); 
  });
  return Promise.resolve(result);
}

function alphabetize(someArray) {
  var sortedArray = someArray.sort();
  return Promise.resolve(sortedArray);
}
upperCaseAll(words)
  .then(alphabetize)
  //.then(console.log);

// Fetch, JSON
// zobacz json formater czy validator
var dan = {name: "Dan", age: 31};
var dan_str = JSON.stringify(dan);
dan_str
JSON.parse(dan_str)
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        console.log(users);
    })
    .catch(function (error) {
        console.log(error);
    });

// Ćwiczenia 12
function getPosts() {
  function take20Posts(posts) {
    return Promise.resolve(posts.slice(0, 20));
  }
  function logPostTitles(posts) {
    posts.forEach(function (post){
      console.log(post.title);
    });
  }
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        return response.json();
    })
    .then(take20Posts)
    .then(logPostTitles)
    .catch(function (error) {
        console.log(error);
    });
}
getPosts()

// Zadania dodatkowe
//Title Case
var name = "jan Maria Rokita"
function toTitleCase(text) {
  return text
    .split(' ')
    .map(function (word) {
      var firstLetter = word.charAt(0).toUpperCase();
      return firstLetter + word.toLowerCase().slice(1);
  }) // forEach doesn't change the text, it returns another array so cannot be used chaining methods 
    .join(' ');
}
toTitleCase(name)

// Tell Time
function tellTime() {
  var now = new Date();

  var hour = now.getHours().toString().padStart(2, 0);
  var min = now.getMinutes().toString().padStart(2, 0);
  var sec = now.getSeconds().toString().padStart(2, 0);
  var time = hour + ':' + min + ':' + sec
  console.log(time)
      
  setTimeout(tellTime, 1000);
}
tellTime

// Shuffle
function shuffle(arr) {
  var suffled_arr = [];
  
}
// union
//function union(arr1, arr2) {
//  var arr_both = arr1.concatenate(arr2);
//  var result = [];
//  arr_both.forEach(function (value) {
//    if (!arr_both.includes(value)) {
//      result.push(value);
//    }});
//  return result;
//  }
//var a = [1, 2 , 3];
//var b = [2, 3, 4, 5];
//var c = a.concatenate(b);
// union(a,b)
//var d = new Set();
//d.prototype.add(c);
function union(arr1, arr2){
    arr2.forEach(function(e) {
        if (!arr1.includes(e))
            { return arr1.push(e) }
    })
    console.log(arr1)
    return arr1;
}

union([1, 2, 3, 4], [3, 4, 5, 6]);


function intersection(arrayA, arrayB) {
    var result = [];
    
    arrayA.forEach(function (value) {
        if ( arrayB.includes(value) && !result.includes(value) ) {
            result.push(value);
        }
    });

    return result;
}

intersection([1, 2, 3, 3, 4], [2, 3, 4, 5, 6])

// Secret Number
//prompt("What's your name?") // tu nie działa :(
var secretNumber = randomize();
// var guess = parseInt( prompt('Zgadnij numer...') );

while (secretNumber !== guess) {
    if (guess > secretNumber) {
        console.log('Za duży');
    }

    if (guess < secretNumber) {
        console.log('Za mały');
    }

    //guess = parseInt( prompt('Zgadnij numer...') );
}

console.log('gratulacje!');

// DO ZADANIA DODATKOWEGO:
var numbers = {
    0: 'zero',
    1: 'jeden',
    2: 'dwa',
    3: 'trzy',
    4: 'cztery',
    5: 'pięć',
    6: 'sześć',
    7: 'siedem',
    8: 'osiem',
    9: 'dziewięć'
};
array = ['1234']
function readNumbers(arr) {
  var writen_numbers = '';
  arr.split('')
  arr.forEach(function (value) {
    writen_numbers += numbers[value] + ' ';
  });
  return writen_numbers
}

readNumbers(array)

