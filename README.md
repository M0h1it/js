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
this concept uses the execution context technique as in that we first give memory to each variable because of that we are able to access the vairable and function even before initializing it.

# Lecture 4

How function works in javascript:
-> refer the code from the index.js nad try to run the code by dry running the whole code by the use of the execution context with the help of the callstack and try to get the output as 10 100 1 in this order 

-> function also behave as same type as of the standard javascript by the use of execution context and call stack.




