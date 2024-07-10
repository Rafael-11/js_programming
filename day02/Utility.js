
function square(x){
    return x * x;
}

function cube(x){
    return x * x * x;
}

module.exports = {
    square, cube
}

/*
In order to be able to use the members of one js file in another, 
first we export them and then import them into another file
*/