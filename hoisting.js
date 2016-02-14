//Lecture 10
//What is hoisting?
/*
Hoisting is often explained as: 'variables and functions are moved to the top by the javascript engine.'
This however, is not true. The code isn't being moved.

What is really going on, is that the javascript engine tries to understand what's been written and translate it into machine code.
In order to do this, it goes through different phases.
The first phases is called "Creation phase".
In this phase, the execution context is created.
We get our Global Object, 'this' and Outer enrionment.

But what is also happening, is that the engine goes through the code, and finds variables and functions that needs memory space.
It's then allocating the needed memory space for the functions and variables. 
This is why our variables is undefined. They're not being assigned any value, only getting the needed memory space.

So before the engine runs any of our code, it allocates the memory needed to run the code.
*/


//A design rule:
/*
So functions are being declared and initialised, while variables are only being declared.
This can be confusing, and therefore it's a good idea to just keep to the simple rule, of always declaring your variables and functions at the top of the code.

*/


//EXAMPLE 1
//This works as expected. It will console.log "Called b!" and then "Hello World!" afterwards.
function hoistingEX1() {
    var a = 'Hello World!';

    function b() {
        console.log('Called b!');
    }
    b();
    console.log(a);
}




//EXAMPLE 2
//Normally, we would not expect this to work, because when we're calling the b function, it's not 'made' yet and the a variable hasn't been declared.
//But still this outputs: "Called b!", undefined.
//So b is both declared and initialized while a is only declared and therefor will have the 'undefined' value.
function hoistingEX2() {
    b();
    console.log(a);
    var a = 'Hello World!';

    function b() {
        console.log('Called b!');
    }
}



//EXAMPLE 3
//This will throw a ReferenceError, since a is never declared.
function hoistingEX3() {
    b();
    console.log(a);

    function b() {
        console.log('Called b!');
    }
}