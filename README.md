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

# Lecture 15

Asynchronous JavaScript & EVENT LOOP:
-> callstack is inside js engine and that js engine is inside the browser. browser uses web APIs for the data rendering on the pages like setTimeout, DOM APIs, fetch, local storage, console,location.
-> the callback function in the code will wait for the time to expire when the timer expire that callback function goes into callback queue and from there that the eventloop came into picture that that eventloop push that function into the call stack to execute that function.
-> the main function of the event loop is to monitor the callback queue and the callstack. so that if call stack is empty then it send that callback function into callstack one by one.
-> same as of callback queue we have a microtask queue that has higher priority than the callback queue. in that the function that contain promises will take palace for execution.
-> promises function and the mutation observer goes inside microtask queue.

# Lecture 16

Js Engine:
->javascript runtime environment has js engine , APIS and many other to execute many things.
->first js engine is spidermonkey that is used in firefox
->js engine has 3 phase for executing the code in that
1. Parsing - code is broken down into tokens, there is also a syntax parser that convert the code into abstract syntax tree(AST).
2. compilation - just in time compilation, js can behave as both interpretter as well as compiler based on js engine. 
3. execution - both 2 and 3 step work hand in hand 2 major requirements are memory heap and call stack. 
-> mark and sweep algo is used by garbage collectors.
->we can do both functional and object oriented progamming in javascript.

# Lecture 17

Issues with setTimeout:
->if there s million line of code that take 10sec and the callback function wait for 5 sec but still it will execute after 10 sec becz the call stack is not free and the event loop wait for it to free.
->dont block your main thread.
->even if the timeout is 0 ms still it have to go through the callback queue.

# Lecture 18

Higher order function:
->the function that take another function as a argument is known as higher order function.
-> if we use a map function that map function will map the whole function.
->Array.prototype.calculate will we avilable for all the array in the code not just limited to one array.

# Lecture 19

map, filter and reduce:
->map function is use to transform the array like you transform it into double of the array or triple of the array.
->filter function is use to filter in the array like all the even numbers etc.
->reduce function is used when you take multiple value from the array and come up with the single value for it.


# SEASON 2

# Lecture 1

Callback:
->callback help to access multiple api to work together. then these api are to large in dependecy it leads to callback hell.
->this structure is pyramid of doom.
->inversion of control: when you loose the control of the code while using the code.

# Lecture 2

Promises:
->promise is empty object that get fill after some time and after that the function in the promise get the data and execute its function.
->in this we attach a function to the promise object rather than passing the object that leads to inversion of control.
->promise has 2 thing 
1. promiseState- it tells the state of the promise
2. promiseResult- will store the data that the fectch will get 

-> promise is object representing the eventual completion of an asynchronous operation.

# Lecture 3 

creating a promise, chaining and error handling:
->you are attaching a failure callback function using catch to the promise function.

# Lecture 4

Promise APIs:

1. Promise.all-> it is used to handle multiple api calls.
->it take array of promise as a input.
->it will wait for all of them to finish even when all the promise are working parallely.
->if anyone of the promise error the final output is also a error and also not wait for other promises to complete.

2. Promise.allSetteled-> it is used for the 3rd point of the promise,all it will wait for the success promise to execute and ignore the failure one. the final array contain all the sccuss and the failure also.

3. Promise.race-> first one to complete is the winner.
-> the first setteld promise value will be returned 

4. Promise.any -> first promise is success then it will return its value until then it will wait.
-> if all fails it gives aggregate error an array of all the errors.


# Lecture 5

Async await:
->Async function :- this function will always return a promise, even if we return a value then it automatically wrap that into a promise.
->async and await are used to handle promises.
->await can only be used only inside the async function.
->in promises the js engine is not waiting for it to be resolved but in await it wait for the promise to get resolved and once the data get filled with promise then it will execute the rest of the code but not in promise function.
->in await the execution is suspended js engine is doing its work but once the execution suspended it cant do anything about that.
-> in this we use try catch block.


# Lecture 6

this keyword:
->value of this keyword depand on how it been called.
->it depends on strict and non strict mode of this keyword.
->can be called inside object method 


