/* INLINE CACHING */
function makeRobot(robot){
	return `made ${robot.name}, side ${robot.side}`
}

const robotData = {
	name: 'Optimus',
	side: 'Autobot'
}

makeRobot(robotData) // inline caching will replace this line
// by "made optimus, side Autobot" if the code run again and again

/* HIDDEN CLASS */
// Hidden class transitions are dependent on the order in which
// properties are added to an object.
// this code make the compiler slow due to the order 
function Robot(name, side) {
	this.name = name;
	this.side = side;
}
/* here robot1 and robot2 share the same hidden class
when Robot function get invoked to initialize Robot Object
a hidden object (C0) get created. Then when this.name = name
is executed, V8 creates a 2nd hidden class C1 which is based on C0.
C1 describes the location in memory (relative to the object pointer)
where the property name can be found. name is stored at offet 0. V8 also
update C0 with a class transition Which states that if a property name is added 
to a point object, the hidden class should switch to C1. The process is similar
when this.side = side is executed. we have a chain C0-C1-C2 
summary:
1) Robot object created: hidden classs C0 created
2) This.name = name is executed: hidden classs C1 created. transtiton class is added to C0
3) this.side = side  is executed: hidden classs C2 created. transtiton class is added to C1
*/
const robot1 = new Robot('Optimus','Autobot');
const robot2 = new Robot('Megatron','Decepticon');
/* assing new properties in different order
robot1 and robot2 end up with different hidden classes due to seperated path
 1) robot1.weapon is invoked, a new class C3a is created 
 2) robot1.side is invoked, a new class C4a is created 
 3) robot2.side is invoked, a new class C3b is created (sepration happen)
 4) robot2.weapon is invoked, a new class C3b is created 
 => slow
*/
robot1.weapon = 'sword';
robot1.saying = 'I am Optimus Prime';
robot2.saying = 'Kill them!';
robot2.weapon = 'axe';

/* DELETE */
// delete kw changes the hidden classes which lead to separation => slow
delete robot1.name
