/*
6b			6c			6d			6e			6f			6g
#.......	#.......	..###...	..#.....	....##..	#....#..
#.......	.#......	..###...	..#.....	....#...	.#..#...
#.......	..#.....	..###...	########	...##...	..##....
#.......	...#....	..###...	..#.....	..#.#...	..##....
#.......	....#...	..###...	..#.....	.#..#...	.#..#...
#.......	.....#..	..###...	..#.....	#...#...	#....#..

6h			6i			6j			6k
#.#.#.#.	........	.#O.#O.#	..#..#..
#.#.#.#.	.######.	O.#O.#O.	..#..#..
#.#.#.#.	.#....#.	#O.#O.#O	..#..#..
#.#.#.#.	.#....#.	.#O.#O.#	........
#.#.#.#.	.######.	O.#O.#O.	.#.#.#.#
#.#.#.#.	........	#O.#O.#O	#.#.#.#.
*/
let text = ''
for (let y = 0; y < 6; y++) {
	for (let x = 0; x < 8; x++) {
		const xIs2Or5 = x === 2 || x === 5
		const everyOther = (x + y + 1) % 2 === 0
		if( xIs2Or5 && y <= 2 )
			text += '#'
		else if( everyOther && y >= 4 )
			text += '#'
		else
			text += '.'
	}
	text += '\n';
}
console.log(text);

/*
6g
		if (x + y === 5)
			text += '#'
		else if (x === y)
			text += '#'
		else
			text += '.'


6i
		// rader med toppen och botten på rektangeln
		const isTopOrBottomRow = y === 1 || y === 4
		const isMiddleRows = y === 2 || y === 3
		const xIsInside = x > 0 && x < 7
		const xIsLeftOrRightBorder = x === 1 || x === 6
		if (isTopOrBottomRow && xIsInside )
			text += '#'
		// rader med mitten av rektangeln
		else if( isMiddleRows && xIsLeftOrRightBorder )
			text += '#'
		else
			text += '.'

		if( (y===2 || y===3) && x >= 2 && x <= 5 )
			text += '.'
		else if ((y >= 1 && y <= 4) && (x >= 1 && x <= 6))
			text += '#'
		else
			text += '.'
*/