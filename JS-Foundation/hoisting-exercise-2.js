/*	hositing...
	var robot = undefined;
	var battle = undefined;
	robot = 'Megatron'
	battle = function () {
		hoisting...
		var robot = undefined
		console.log('battle begin ' + robot) // battle begin undefined
		var robot = 'Bumblebee'
		console.log('battle begin ' + robot) // battle begin Bumblebee
	}

*/


var robot = 'Megatron'

var battle = function () {
	console.log('battle begin ' + robot) // battle begin undefined
	var robot = 'Bumblebee'
	console.log('battle begin ' + robot) // battle begin Bumblebee
}
battle()

// hoisting bigBrother()
function bigBrother(){
  //hositing litteBrother()
  // even if we return littleBrother()
  // hositing still replace the 2nd littleBrother() to the hosted littleBrother()
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
bigBrother();