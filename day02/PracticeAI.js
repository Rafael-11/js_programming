// create an array of string and add 10 student names to it

let students = ['John', 'Jane', 'Tom', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'];

// display all students in the console.log

console.log(students);

console.log('-----------------------------------------');

// set the first name to Rafael in the students array

students[0] = 'Rafael';

console.log(students);

// add new student name to the end of the array

students.push('Max');

console.log(students);

console.log('-----------------------------------------');

// display all the array value in reverse order

for(let i = students.length - 1; i >= 0; i--){
    console.log(students[i]);
}

console.log('-----------------------------------------');

// sort the students array in alphabetical order

students.sort();

console.log(students);

console.log('-----------------------------------------');

let email = 'Cydeoschool@gmail.com';

// check if the email address contains @ symbol

if(email.includes('@')){
    console.log('Email address is valid');
} else {
    console.log('Email address is invalid');
}

console.log('-----------------------------------------');

//create an array of integers and add 7 numbers to it

let numbers = [1, 2, 3, 4, 5, 6];

// user for of loop to print each number in the array

for(let number of numbers){
    console.log(number);
}


console.log('-----------------------------------------');

// write a program that can display the max and min values in an array of integers

let array = [10, 5, 15, 8, 20];

let max = array[0];
let min = array[0]; 

for(let i = 1; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
    if(array[i] < min){
        min = array[i];
    }
}

console.log('Maximum value:', max);
console.log('Minimum value:', min);

console.log('-----------------------------------------');

// create an array of integers with 10 intergers in arrays is in an unsorted order 

let randomNumbers = [3, 8, 5, 2, 10, 7, 4, 1, 9, 6];

//write a program that can sort the unsorted array in ascending order. Don't use any built-in sorting functions.

for(let i = 0; i < randomNumbers.length; i++){
    for(let j = 0; j < randomNumbers.length - i - 1; j++){
        if(randomNumbers[j] > randomNumbers[j + 1]){
            let temp = randomNumbers[j];
            randomNumbers[j] = randomNumbers[j + 1];
            randomNumbers[j + 1] = temp;
        }
    }
}   

console.log('Sorted array:', randomNumbers);

console.log('-----------------------------------------');

/*
Create a class named Item with the following requirements:
    Attributes:
        name, price, quantity

    Methods:
        constructor: to initalize all attributes
        calculateTotalPrice: to calculate and return the total price of the item (price * quantity)
        toString:
*/

class Item {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calculateTotalPrice(){
        return this.price * this.quantity;
    }

    toString(){
        return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Total Price: ${this.calculateTotalPrice()}`;
    }
}