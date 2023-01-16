import { question } from 'readline-sync'

// 4 Skriv ett program som frågar användaren efter ett tal.Det ska skriva ut om talet är mindre än 100, lika med 100 eller större.
// 5a Använd följande kod för att generera ett slumpat tal mellan 1 och 100. Be användaren gissa vad talet är. Sedan ska programmet skriva ut om man gissade för högt, för lågt eller rätt.
const secret = Math.floor(Math.random() * 100) + 1
let guesses = 0
let input
console.log('Welcome to ** Guess the secret number **')

while( guesses < 10 ) {
	input = Number(question(`${guesses + 1} Enter your guess: `))
	guesses = guesses + 1
	
	if (input < secret ) {
		console.log('Your guess was too low! \n')
	}
	else if (input == secret ) {
		console.log(`You found the secret in ${guesses} guesses!`)
		break;  // hoppar ur en for- eller while-loop
	}
	else { // input > secret
		console.log('Your guess was too high! \n')
	}
}

if( input != secret ) {
	console.log('Bye! The secret was ' + secret)
} else {
	console.log('Bye! Come again')
}
