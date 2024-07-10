function greetings(){
    console.log('Hello Programmers');
    console.log('Hello Cydeo');
    console.log('Hello World');
}


greetings();
//greetings();
//greetings();

console.log('Test Completed successfully');

console.log('------------------------------------------------------------');


function displayValue(value = 'Unknown value'){
    console.log(`The value is ${value}`);
}


displayValue(100);

displayValue('JavaScript');

displayValue();

console.log('------------------------------------------------------------');

function square(number){
    let result = number * number;
    return result;
}

let num = square(10);

console.log(num);


