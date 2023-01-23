/*
7a Skriv en funktion med namnet paragraph, som tar en parameter. Den ska returnera en sträng enligt det här exemplet: paragraph('hej') == '<p>hej</p>' 

7b Skriv en funktion med namnet tag, som tar två parametrar. Den ska returnera en sträng som ser ut som en HTML-tag. Exempel: tag('banan', 'content') === '<banan>content</banan>
*/

function paragraph(content) {
	// return '<p>' + content + '</p>'
	return `<p>${content}</p>`
}

function tag(name, content) {
	return `<${name}>${content}</${name}>`
}

console.log( paragraph('Pandan är en svartvit björn') )
console.log( tag('fact', 'Januari har 31 dagar.') )
