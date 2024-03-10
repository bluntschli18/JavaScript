function sortSquares(arr) {
    let num = arr.length;

    for (i = 0; i < num; i++)
        arr[i] = arr[i] ** 2;

    arr.sort(function (a, b) { return a - b });
}

var arr = [-5, -1, 0, 4, 10]
var num = arr.length;

for (var i = 0; i < num; i++);

console.log(arr + ' Before sorting');

sortSquares(arr);
for (var i = 0; i < num; i++);

console.log(arr + ' After sorting');
