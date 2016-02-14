//Lecture 37 && 50


//How this in JavaScript differ from this in Java
/*
In java, 'this' refers to the current object.
In javascript, 'this' refers to the object that a function is a method of.

*/


//Why we (because we did not explain about this) followed a pattern in our third semester controller and stored a reference to this (var self = this)
/*
We did this to avoid issues of dealing with 'this'.
By creating 'self', we ensured that 'this' refered to the currect context.
This could cause trouble:

*/

var a = {
    name: 'Hi',
    log: function () {

        this.name = 'Hi updated'; //This 'this' will point to the a object.

        var setName = function (newName) {
            this.name = newName; //This 'this' will point to the global object.
        }
        setName('New name');
    }
}


//Instead we do this:

var b = {
    name: 'Hi',
    log: function () {
        var self = this; //Since 'self' and 'this' are objects. It's going to be set equal to 'by reference'. So self will be pointing to the same place in memory as 'this'.

        self.name = 'Hi updated'; //Now the name variable will be attached to the self object.

        var setName = function (newName) {
            self.name = newName; //This will change the current name variable.
        }
        setName('New name');
    }
}


console.log(a.name);
a.log();
console.log(a.name);

console.log(b.name);
b.log();
console.log(b.name);



//The purpose of the methods call(), apply() and bind()
/*



*/