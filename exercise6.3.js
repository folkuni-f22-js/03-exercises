/*
3a Skriv en funktion med namnet add som lägger ihop två tal och returnerar resultatet.
3b Skriv en funktion med namnet multi som multiplicerar tre tal och returnerar resultatet.Vad händer om man anropar funktionen med färre än tre parametrar ?
3c Skriv en funktion som tar fyra tal som parametrar.Den ska multiplicera de tre första och lägga ihop resultatet med den fjärde.Använd funktionerna add och multi.
*/

function add(x, y) {
	const sum = x + y
	return sum
}

// z=1 är ett "defaultvärde" på parametern
// Om man glömmer skicka med ett värde, så används 1
function multi(x, y, z=1) {
	console.log('inuti multi', x, y, z)
	return x * y * z
}

function calculate(a, b, c, d) {
	const product = multi(a, b, c)  // a * b * c
	const sum = add(product, d)
	return sum
	// return add(multi(a, b, c), d)
}

console.log('Summan av 10 och 20 är: ' + add(10, 20))
console.log('Produkten av 2, 3 och 4 är: ' + multi(2, 3, 4))
console.log('Färre parametrar - 5 * 4: ' + multi(5, 4))
console.log('Räkna ut 5*4*3 + 2', calculate(5, 4, 3, 2))
