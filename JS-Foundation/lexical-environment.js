function getRobot() {
	return 'Optimus Prime'
}
function testRobot(){
	function x(){
		return 'x'
	}
	// x function is lexically inside testRobot
	return getRobot()
}
function deployRobot() {
	return testRobot()
}

window.deployRobot() // the same as deployRobot() because it belongs to window object