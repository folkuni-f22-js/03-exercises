/*
9a Skriv en funktion som returnerar de tre första tecknen i en sträng. Använd funktionen substring(startindex, endindex), som plockar ut en del av en sträng. Exempel:
'programmering'.substring(0,3) === 'pro'
'programmering'.substring(3,7) === 'gram'
*/
/*
9b Skriv en funktion som du kallar year som plockar ut året från en sträng i datumformat. Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2016-11-02') och få talet 2016 som resultat.
*/
function firstThree(str) {
	return str.substring(0, 3)
}
console.log(firstThree('abcdefg'))


/*
9c Skriv två funktioner med namnen month och day, som plockar ut månad respektive dag ur en datumsträng. Skriv med hjälp av dem en funktion med namnet daysBetween som räknar ut hur många dagar det är mellan två datum. Du kan förenkla funktionen genom att låtsas att alla månader har 30 dagar.
Exempel: daysBetween('2017-08-30', '2017-09-02') == 4 
*/

function year(date) {
	return Number(date.substring(0, 4))
}
function month(date) {
	// '2017-08-30'
	//  0123456789
	return Number(date.substring(5, 7))
}
function day(date) {
	return Number(date.substring(8))  // eller (8,10)
}

const now = '2023-01-23'
console.log('Året är ' + year(now))
console.log('Månaden är ' + month(now))
console.log('Dagen är ' + day(now))

function daysBetween(date1, date2) {
	// Var börjar man?
	// Dela upp problemet i mindre delar:
	// 1. samma år och månad, bara dagarna skiljer
	// 2. månad och dag skiljer  -> det som är kvar i första månaden, plus dagarna från sista månaden, plus alla hela månader däremellan
	// 3. år, månad och dag skiljer
	const year1 = year(date1), month1 = month(date1), day1 = day(date1)
	const year2 = year(date2), month2 = month(date2), day2 = day(date2)

	if( year1 === year2 && month1 === month2 ) {
		return day2 - day1 + 1  // +1 för att räkna med första dagen
	}
	else if( year1 === year2 ) {
		const leftFromFirstMonth = 30 - day1
		const wholeMonths = month2 - month1 - 1
		const daysLastMonth = day2
		// console.log(typeof leftFromFirstMonth, typeof (wholeMonths * 30), typeof daysLastMonth)
		return leftFromFirstMonth + wholeMonths * 30 + daysLastMonth
	}
	else {
		// exempel: '2020-10-25' - exempel gör det lättare att skriva koden
		const leftFromFirstYear = (30 - day1) + (12 - month1) * 30
		const wholeYears = year2 - year1 - 1
		const daysLastYear = day2 + (month2 - 1) * 30
		return leftFromFirstYear + wholeYears * 365 + daysLastYear
	}
}

// Idag är det 23/1. Hur långt är det till 27/1?
// Vi räknar ut 27-23, alltså skillnaden i dagar. (Decomposition: del 1 är när det handlar om samma år och månad.)

// Idag är det 23/1. Hur långt är det till 10/2? (svar 18 dagar)

console.log('Idag är det 23/1. Hur långt är det till 27/1? Svar: ' + daysBetween('2023-01-23', '2023-01-27'))
console.log('Hur långt är det mellan 23/1 och 10/2? Svar: ' + daysBetween('2023-01-23', '2023-02-10'))
console.log('Hur långt är det mellan 2020-11-30 och 2022-01-02? Svar: ' + daysBetween('2020-11-30', '2022-01-05'))
