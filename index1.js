//Function Statement
function a(){
    console.log("a called");
}

//Function Expression
var b = function(){
    console.log("b called");
}

//Anonymous Function
// function(){
//     console.log("Anonymous function called");
// }

//named function expression
function d(){
    console.log("d called");
}
d(); //it is not created as a local variable, so it cannot be called outside of the function

//first class function
function c(fn){
    fn();
}//function are first class citizens in JS, they can be passed as arguments to other functions, returned from other functions, and assigned to variables.

//arrow function
const e = () => {
    console.log("e called");
}