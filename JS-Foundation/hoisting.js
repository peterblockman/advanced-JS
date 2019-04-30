console.log('=||=======||=')
/* JS engine allocates memory for variables and functions during creation phrase
	it bring them up
	var robot = undefined; // partially hoisted
	function say(){ // fully hoisted
		console.log('I am Optimus Prime.')
	}
	the rule is: it only hoist when it see var and function not const or let
 */
console.log(robot) // undefined
console.log(say()) // I am Optimus Prime.
console.log(repair()) // error ReferenceError: repair is not defined
console.log(copySay()) // TypeError: copySay is not a function
console.log(copySay) // undefine
var robot = 'Optimus'

function say(){
	console.log('I am Optimus Prime.')
}

let repair = () =>{
	console.log('Repairing...')
}
// function expression
var copySay = function () {
	console.log('I am Megatron')
}