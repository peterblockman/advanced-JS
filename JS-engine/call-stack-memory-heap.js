/* memory heap */
const number = 444; // allocate memory for a number
const string = 'the cube'  // allocate memory for a string
const robot = { // allocate memory for an object and its' values
	name: 'Optimus Prime',
	side: 'Autobot'
}

/* CALL STACK*/
function cube(side) {
	const name = 'Megatron'
	return name + ' ' + side
}
function makeRobot(){
	const side = 'Decepticon'
	return cube(side)
}

makeRobot()
/*call stack is a region in memory which operates in fist in and last out
when we run makeRobot(), it adds the function to the top of call stacks and 
when the function finishes, it remove the function out of call stack /*

/* STACK OVERFLOW */
/*Wif we keep calling functions nested inside of each other 
over and over and over, the functions are push to the call stack
until we can do it anymore*/
function inception(){
	inception()
}
// => error VM713:1 Uncaught RangeError: Maximum call stack size exceeded

