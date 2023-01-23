// 11 Skriv en funktion som returnerar summan av de 100 första heltalen. Använd en loop. Förbättra sedan funktionen så att den tar en parameter, som är hur många tal som ska läggas ihop.

// Hur skulle jag lösa uppgiften med papper och penna? (eller med huvudräkning)
// Hur skulle jag lösa en mindre uppgift? (Summan av de 50 första, de 20 första, 10 första osv.)

// Vad är 1 + 2 + 3?
// Antingen: (1 + 2) + 3
// Eller:    1 + (2 + 3)
// En addition i taget
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5

function sum100() {
	// 1 + 2 + ... + 100
	let sum = 0
	for( let n = 1; n <= 100; n = n + 1 ) {
		sum = sum + n
	}
	return sum
}
// Bonus: Eulers metod
// 1   + 2  + 3
// 100 + 99 + 98
// 101 + 101+ 101
// 50 * 101 == 5050

console.log( sum100() )
