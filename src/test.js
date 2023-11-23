async function main() {
	// Enter your code here!
	// To request a value per console you can use "readline()"
	const numbers = (await readline.next()).value
    console.log('solved - ', list)
}
 
/*
1,2,3/3,2,1
*/

/**
 * ⚠️WARNING⚠️
 * Do not manipulate the code below or your exercise might not work
 */
var _e = [], _i = 0;
const readline = () => (_i < _e.length ? _e[_i++] : undefined);
process.stdin.on('data', (_v) => {
	_e = _v.toString().split('\n').map((i) => i.trim());
	main();
	process.exit();
});