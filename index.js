var x = 1;
a(); //global space 
b(); //global space 
console.log(x);

function a(){
    var x= 10; // not global space 
    console.log(x);
}

function b(){
    var x =100;
    conssole.log(x);
}