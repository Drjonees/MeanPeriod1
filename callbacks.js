var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
var aArray = [1, 2, 3];
var bArray = [1, 2, 3];
var fake = {};

/*
1) Using existing functions that takes a callback as an argument
Using the filter method:
Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
*/

function callbackFilter() {
    var namesFiltered = names.filter(function (name) {
        return name.length <= 3;
    });

    console.log(namesFiltered);
    $('#result').html(namesFiltered.toString());
}


/*
Using the map method:
Use the names-array created above, and, using its map method, create a new array with all names uppercased.
*/
function callbackMap() {
    var namesMapped = names.map(function (name) {
        return name.toUpperCase();
    });

    console.log(namesMapped);
    $('#result').html(namesMapped.toString());
}


/*
Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (that is with the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/
function CustomFilter() {
    var namesFiltered = myFilter(names, function (name) {
        return name.length <= 3;
    });

    console.log(namesFiltered);
    $('#result').html(namesFiltered.toString());
}

/*
Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
*/
function CustomMap() {
    var namesMapped = myMap(names, function (name) {
        return name.toUpperCase();
    });
    console.log(namesMapped);
    $('#result').html(namesMapped.toString());
}



function AddArrays() {
    handleNumArrays(aArray, bArray, function (res) {
        console.log(res.join(","));
        $('#result').html(res.join(','));
    });
}


function handleNumArrays(a, b, callback) {
    var tempArray = [];
    for (var x = 0; x < a.length; x++) {
        var tempVal = a[x] + b[x];
        tempArray.push(tempVal);
    }
    callback(tempArray);
}






function myMap(array, callback) {
    if (!Array.isArray(array)) throw new TypeError();
    if (!callback instanceof Function) throw new TypeError();
    var tempArray = [];
    for (var x = 0; x < array.length; x++) {
        tempArray.push(callback(array[x]));
    }
    return tempArray;
}



function myFilter(array, callback) {
    if (!Array.isArray(array)) throw new TypeError();
    if (!callback instanceof Function) throw new TypeError();

    var tempArray = [];
    for (var x = 0; x < array.length; x++) {
        var val = array[x];
        if (callback(val)) {
            tempArray.push(val);
        }
    }
    return tempArray;
}