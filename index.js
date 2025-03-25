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

{
    //block scope also known as compound statement
}

function x(){
    var a = 7 ;
    function y(){
        console.log(a);
    }   
    y();
}
x();