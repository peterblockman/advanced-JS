let array = []
for (let i = 4; i> 0; i++) array.push(i-1)
// this fails memory heap. 

Global variable:
//if there are too many global variables, the memory will be used too much => leak
var a = 1
var b = 1
var c = 1




Event listener
// if you not remove event listener off the page, when user keep moving back and forth 
// between the pages, event listener keep being added to the page => leak
var element = document.getElementById('button')
element.addEventListener('click', onClick)


setInterval()
the function inside setInterval will keep running if you don't clear it