# js

# "Everything in javascript happens inside an execution context (exc)"

->Two components of this ececution context:

1.variable environment (memory where all the variables are stored as key value pairs) 
2.Thread of execution (whole code is coded and executed one by one) 

# Lecture 1 :

How javascript works?

# "javascript is a synchronous single-threaded language"

->which means it will execute the code line by line (one line at a time) in a specific sequence.


# Lecture 2 : 

What happens when you run javascript code?

-> there are two phase through which the js code will be executed by creating a global exc. 

in phase 1 the exc go through the whole and assign memmory 
in phase 2 the exc run the code line by line 
 
->first a global exc is created for both these phase and the exe do its job as we go inside the code execution phase when the function is invocked a new exc is created and the same procedure of both the phase will happen.
->when the function return anything in the function that value will be stored to the respected variable and that exc that was created temprorly created gets deleted.

-> when the whole code is executed the global exc will also get terminated or deleted.

-> for the complete excution of the javascript code it uses a callstack where at the bottom of the stack we have global execution context and when the function is invoked the temprorily created exc is push into the stack and after its execution it gets pop out. 
And after all the code is executed the global exc will also get pop out.

# "Call stack maintains the order of execution of execution contexts."
various names of the call stack:
1. Execution context stack
2. Program stack
3. Control stack
4. Runtime stack
5. Machine stack

# Lecture 3 

Hoisting in javascript:
-> it is a phenomena in javascript through which one can access the funcition or variables even before initializing it.
->this concept uses the execution context technique as in that we first give memory to each variable because of that we are able to access the vairable and function even before initializing it.

# Lecture 4

How function works in javascript:
-> refer the code from the index.js nad try to run the code by dry running the whole code by the use of the execution context with the help of the callstack and try to get the output as 10 100 1 in this order 

-> function also behave as same type as of the standard javascript by the use of execution context and call stack.

# Lecture 5

Shortest javascript program:
-> the empty file 
the js create the global execution context and create something called as window and this object that refer to the window only. 

window -> is the global object which can be accessed anywhere in the javascript 
this === window will return true.

->Anything that is not inside the function is called as a global space and these will get attached to the window. 


# Lecture 6

Undefined vs not defined in js:
-> js is a loosly type language means if the variable type is assigned that we can add another type of the variable in it also after sometime.
-> undefined is use by the js for the memory assigned to the variable till it gets a value of its own it does not means null it has its own memory.


# Lecture 7

The Scope Chain,Scope & Lexical Environment :
-> Scope define where you can access the variable in the whole code.
->scope is directly dependent on the lexical environment
whenever a execution context is created a lexical environment is also created.
->lexical(in a Hierarchy ) environment is the local memory along with the lexical environment of its parent.
-> scope chain is nothing but the searching of the variable by the use of lexcial environment from child to the parent if it dont found the variable in the child and search till it gets the variable or get the null value which result in the variable is not defined in the scope 


# Lecture 8

Temporal dead zone :
-> let and const declarations are hoisted in the temporal dead zone for a time beign. they are stored in separate memory space then global.
cant access these before initializing
->from the point it get assign to the point it get accessed is the temporal dead zone.
->cannot redeclare the same variable in let as it is strict then it give syntax error 
->const is more strict it then let it want to be declared in the same line only.

typeerror:cannot give the error to the const if it inilitized before in the line.
keep var aside use only let and const as they are strict and avoid unexpected error.

# Lecture 9

Block and Block scope:
->Block is defined by the curly brackets {}.
block scope also known as compound statement.
group multiple statement as one because js is expecting only one statement.
->block scope means what all variables and functions we can access inside the block.
let and const are block scoped not var as it is in global scope

showding in javascript:
->var will be showded in the global and block scope but let will get shadow in the block scope only not in the global scope.

this is all about lecture 9

# Lecture 10

Closures:
-> function that binds with its lexical envirnoment is called as closures.
-> we can return a function inside a funtion.
->function remeber its lexical scope in the whole code that is help of closure.

uses of closures:
-module design pattern
-currying
-functions like once
-memoize
-maintaining state in async world
-setTimeouts
-Iterators
-and many more

# Lecture 11

setTimeout+Closures:
->In settimeout the function that is attach to it is the closure.
->the javascript dont wait for anyone it run in the same manner and the set timeout function will wait for the time it is assigned to and when that time expires the function return back to the main memory for execution.

# Lecture 13

First class functions:
->the difference between the function statement and the function expression is of hoisting. As function statement allow hoisting and function expression didnot allow hoisting.
->anonymous function are the function that came into picture when function is used as value.
->we can pass function inside a funciton as a arguments, values and can return from another function this ability is called as a first class function.


# Lecture 14

callback functions:
->passing one function into another function as a value that allow asynchronous nature in the javascript
->garbage collection and remove event listener. eventlisteners are heavy thats why we remove the event listeners and if the code carry many event listeners and when we remove that all those values get garbage collected.
