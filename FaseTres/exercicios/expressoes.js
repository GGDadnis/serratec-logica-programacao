var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12

/*M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
*/

var n1 = ((x - y) > a);
var n2 = ((x - y * a) > (c % y));
var n3 = (y != c);
var n4 = (x * y) != c
var n5 = ((c % y) <= (y % c))
var n6 = (a < b);
var n7 = ((z / a + x * y - 5) >= (b))
var n8 = ((c * z + 2) == (a * x + y))
var n9 = ((c) == (z + b))
var n10 = ((y * 2) != (7 - b))

console.log(n1, n2, n3, n4, n5, n6, n6, n7, n8, n9, n10)