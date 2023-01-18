/*
3 Skriv ett program som loopar och frågar användaren efter en sträng. Så länge som strängen inte är en tom sträng så ska programmet lägga ihop den med tidigare strängar, med ett mellanrum. Om användaren t.ex. har skrivit "ord1" tidigare och skriver "ord2" ska den nya strängen bli "ord1 ord2". Fortsätt loopa tills användaren skickar en tom sträng eller en punkt.
*/

import { question } from 'readline-sync'

console.log('Welcome to the sentence builder')

// fråga efter sträng
// sätt ihop med tidigare ord
// är det tom sträng eller punkt?
// om inte, fråga igen (upprepa från början)

let sentence = ''
let input = null
while( input !== '' && input !== '.' ) {
	input = question('Please enter a word: ')
	sentence = sentence + ' ' + input
}
console.log('>> ' + sentence)
