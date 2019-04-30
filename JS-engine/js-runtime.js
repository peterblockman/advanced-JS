/*
JS is a single threaded language. 

It has only 1 call stack.

It can only do 1 thing at a time

The problem with synchronous code 
it makes thing difficult if we have long running tasks. 
it means that when we do some task that take let's say 5 seconds to complete. We cannot do anything else. Alert() is one example.
*/

/*
WEB API
it comes with browser. Web Api can do plenty of things: sending HTTP request, creating click event, listening to the DOM...
window object has many methods that we can use such as fetch, alert...
it uses use low level programming languages like C++ to perform those methods
it is asynchronous that means you can instruct these API to do something in
the background and return data once it's done. Meanwhile we can just continue working on our javascript call stack and execute functions
*/
console.log('Before time begins') // add to the call stack, log the string, remove from the call stack

setTimeout(()=> {console.log('there was a cube.')}, 1000); // add to the call stack, setTimeout is sent to the WEB API. now web api
// is running in the background meanwhile we move to the 3rd console.log
// when web api has done, event loop send the call back to call stack when call stack is empty
console.log('We not know where it comes from');  // this is printed while waiting for the web api

/*
output: 
Before time begins
We not know where it comes from
undefined
there was a cube.
*/

console.log('Before time begins') 
setTimeout(()=> {console.log('there was a cube.')}, 0); 
console.log('We not know where it comes from'); 

// the output will be the same because setTimeout still get sent to the web api

