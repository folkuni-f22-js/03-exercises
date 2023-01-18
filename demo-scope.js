
let x = 10  // global

doStuff()

function doStuff() {
	let y = 20  // lokal variabel för funktionen
	let x = 500  // lokal variabel, skymmer den globala

	console.log('Inuti: x är ' + x)
	console.log('Inuti: y är ' + y)
}  // function doStuff

doStuff()

console.log('Utanför: x är ' + x)
// console.log('Utanför: y är ' + y) <- y finns inte utanför

console.log('--------------------------')

console.log('Före: ' + z)
z = 12
var z
console.log('Efter: ' + z)

console.log('--------------------------')

let a = 1
var b = 2

if( true ) {
	let a = 10  // lokal variabel (block scope)
	var b = 20  // global (function scope)
}

function f() {
	let a = 100  // lokal variabel
	var b = 200  // lokal variabel
}
f()

console.log('a: ' + a)
console.log('b: ' + b)

// IIFE "iffy" - immediately invoked function expression
// "något man gjorde förr"
;  // för att inte IIFE ska binda till föregående statement
(function() {
	var d = true  // function scope, utan att behöva ha koll på en extra funktion
})()


// Rekursion
function factorial(n) {
	if( n <= 2 ) {
		return 2
	} else {
		return n * factorial(n - 1)
	}
}
/*
!2 == 2
!3 == 3 * !2
!4 == 4 * !3
*/

console.log('Factorial !3 == ' + factorial(3))
