// 4 Skriv ett program som skriver ut de jämna talen 20 till 2 i den ordningen, med hjälp av en loop.

// "Vanlig" for-loop
// for( let i=0; i<10; i++ )


//  Alt. 1
for( let i=20; i>=2; i = i - 2 ) {
	console.log(i)
}
// Mindre kod. Loopen kör 10 gånger

// Alt. 2
/*for (let i = 20; i >= 2; i--) {
	if (i % 2 === 0) {
		console.log(i);
	}
}*/
// Loopen kör 19 gånger
