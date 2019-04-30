let array = []
for (let i = 4; i> 0; i++) array.push(i-1)
// this fails memory heap. 

/* GLOBAL VARIBALE*/
//if there are too many global variables, the memory will be used too much => leak
var a = 1
var b = 1
var c = 1




/* EVENT LISTENER */
// if you not remove event listener off the page, when user keep moving back and forth 
// between the pages, event listener keep being added to the page => leak
var element = document.getElementById('button')
element.addEventListener('click', onClick)


/* setInterval() */
// the function inside setInterval will keep running if you don't clear it

/* EXAMPLE */
// this following code will cause memory leak
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    } 
};
 
removeItemsFromList();

// fix by sending it to webApi

const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        setTimeout(() =>{removeItemsFromList()}, 0);
    } 
};
 
removeItemsFromList();