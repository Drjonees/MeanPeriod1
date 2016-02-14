var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

/*
Create a new version of the two functions (without the array argument) which you should add to the Array prototype property so they can be called on any array as sketched below:
var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.myFilter(function(name) {…});
*/

Array.prototype.myFilter = function (callback) {
    if (!callback instanceof Function) throw new TypeError();
    var array = this;
    var tempArray = [];
    for (var x = 0; x < array.length; x++) {
        var val = array[x];
        if (callback(val)) {
            tempArray.push(val);
        }
    }
    return tempArray;
}

function PrototypeCustomFilter() {
    var namesFiltered = names.myFilter(function (name) {
        return name.length <= 3;
    });

    console.log(namesFiltered);
    $('#result').html(namesFiltered.toString());
}


Array.prototype.myMap = function (callback) {
    if (!callback instanceof Function) throw new TypeError();
    var result = [];
    var array = this;

    for (var x = 0; x < array.length; x++) {
        result.push(callback(array[x]));
    }
    return result;
}

function PrototypeCustomMap() {
    var namesMapped = names.myMap(function (name) {
        return name.toUpperCase();
    });

    console.log(namesMapped);
    $('#result').html(namesMapped.toString());
}