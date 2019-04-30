/*
during creation phrase hello() is hoisted. JS engine locate some memory for it.
it recieve hello function in line 7 then replace with line 10 => print good bye not hello
*/

hello() // Good bye
function hello(){
	console.log('Hello')
}
function hello(){
	console.log('Good bye')
}
