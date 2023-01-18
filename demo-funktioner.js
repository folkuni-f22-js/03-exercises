console.log('Before definition')

// Här definieras funktionen
// Innehållet körs vid ett senare tillfälle - när funktionen anropas (kalla på)
function add(x, y) {
	console.log(`inside the add function: x==${x}, y==${y} `)
	return x + y
}
function add1520() {
	const x = 15
	const y = 20
	return x + y
}

console.log('After definition')

console.log(add(15, 20))
console.log(add(1, 200))
console.log(add(-5, 5))

let challenge = add(add(1, 2), add(3, 4))
console.log('Challenge==' + challenge)
// add( add(1, 2), add(3, 4) )
// add( 3, add(3, 4) )
// add( 3, 7 )
// 10
const left = add(1, 2)
const right = add(3, 4)
let challengeSimplified = add(left, right)


function f(x, y) {
	return (x + y - 1) * 2
	// x == 3, y == 1
	// (3 + 1 - 1) * 2
	// (4 - 1) * 2
	// 3 * 2
	// 6
}

console.log('F: ', f(1, 3))
console.log('F: ', f(f(10, 2), f(1, -2)))
// f( f(10, 2), f(1, -2) )
// f( (10 + 2 - 1) * 2, f(1, -2) )
// f( 11 * 2, f(1, -2) )
// f( 22, f(1, -2) )
// f( 22, (1 + -2 - 1) * 2 )
// f( 22, -2 * 2 )
// f( 22, -4 )
// (22 + -4 - 1) * 2
// (18 - 1) * 2
// 17 * 2
// 34


// Alt + Shift + F för att formatera markerad kod
let foo = function (i) {
	return 2 * i * i;
};
let goo = function (x, y) {
	return x(y);
};
let a = goo(foo, 3);
// goo(foo, 3);
// foo(3)
// 2 * 3 * 3
// 18
console.log(a);


console.log('Program end')
