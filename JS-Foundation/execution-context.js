/*
deployRobot() when JS engine see () it creates an execution context on the call stack. 
If another function testRobot() is pushed to the call stack, it creates another execution context。
the same for getRobot()
*/
function getRobot() {
	return 'Optimus Prime'
}
function testRobot(){
	return getRobot()
}
function deployRobot() {
	return testRobot()
}

deployRobot()
/*
Global execution context
two things is given: Global Object and this
for browser this === window : true
*/
