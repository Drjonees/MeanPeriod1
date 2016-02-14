var arguments = process.argv;

arguments = arguments.filter(function (element, index) {
    if (index > 1) {
        return element;
    }
});

function sum(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += Number(element);
    });
    return sum;
}

console.log(sum(arguments));