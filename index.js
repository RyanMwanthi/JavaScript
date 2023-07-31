//VARIABLES

let na = 'Ryan';
console.log(na);
//cannot be reserved keyword
//should e meaningful
//cannot use hyphen(-)


//CONSTANTS

let interestRate = 0.3;  //variables can change but constants don't change
// Changing let to Const brings an error in the console
interestRate = 1;
console.log(interestRate)

//if you dont want to re-assign a variable constant(CONST) should be the default otherwise use let

const buyPrice = 900
console.log(buyPrice)

//Types in js = primitives:
//1.string:
//2.Undefined
//3.Number
//4.Boolean
//5.null

let namee = 'Ryan'; //string
let age = 20; //number
let isAprove = false; //boolean
let firstName = undefined;
let color = null


//OBJECTS


let person = {
    name: 'RYAN',
    age: '20'
};

//Dot Notation to access the name of person
person.name = 'John';

//Using Bracket Notation
person['name'] = 'Mary'


console.log(person.name);


//ARRAYS
// Arrays are data structures that are used to represent a list of items
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1
console.log(selectedColors)
console.log(selectedColors.length)

//FUNCTIONS

function greet() {
    //body of the function
    console.log('Hi');
}

// call function
greet();

//Function can have inputs 
//Performong Tasks
function greeting(fname, lname) {          // add a variable to greeting function letting it have a parameter called thename
    //body of the function         // it can have multiple parameters now adding lname
    console.log('Hi ' + fname + ' ' + lname);  // ( +) plus sign is used to concatinate strings

}
greeting('Ryan', 'Smith');
greeting('Mwanthi', 'Ryan');

//Calculating Values

function square(number) {
    return number * number;
}
console.log(square(3));


// This changed the hello world displaying it as Hello Hi There
document.getElementById("demo").innerHTML = "Hello Hi There"

// Number data type
let quantity = 10;
let price = 3.99;
let total = quantity * price;
console.log(total); // Output: 39.9

// String data type
let nameee = "John";
let message = "Hello, " + nameee + "!";
console.log(message); // Output: Hello, John!

// Boolean data type
let isSunny = true;
let isRaining = false;
if (isSunny) {
    console.log("It's a sunny day!");
} else if (isRaining) {
    console.log("It's a rainy day!");
} else {
    console.log("It's neither sunny nor rainy.");
}

// Undefined data type
let x;
console.log(x); // Output: undefined

// Null data type
let y = null;
console.log(y); // Output: null

// Object data type
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "swimming", "traveling"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(person.firstName); // Output: John
console.log(person.hobbies[1]); // Output: swimming
console.log(person.address.city); // Output: Anytown

// Symbol data type
let id = Symbol("id");
console.log(id); // Output: Symbol(id)

//Methods
let say = "hello world";
let messageeLength = say.length;
console.log(messageeLength); 
// Output: 11