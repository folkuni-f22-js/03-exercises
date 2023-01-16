/*
2 FizzBuzz är en vanlig uppgift på programmeringsintervjuer.Skriv ett program som skriver ut talen 1 till 20, med en twist:
Om talet är jämnt delbart med 3, skriv i stället ut strängen 'Fizz'
Om talet är jämnt delbart med 5, skriv ut 'Buzz'
Om talet är delbart med både 3 och 5, skriv ut 'FizzBuzz'
Exempel: 1, 2, Fizz, 4, Buzz, Fizz, 7… 
*/

// for-loop från 1 till 20
for( let i=1; i<=20; i = i + 1 ) {
	const dividesBy3 = (i % 3 == 0)
	const dividesBy5 = i % 5 == 0
	
	if (dividesBy3 && dividesBy5 ) {
		console.log('FizzBuzz')
	} else if (dividesBy3 ) {
		console.log('Fizz')
	} else if (dividesBy5 ) {
		console.log('Buzz')
	} else {
		console.log(i)
	}
}
