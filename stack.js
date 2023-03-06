/*Stacks */

//functions : pop, peek, push, length
//array can be used as a stack.

//creating an array stack to find a pelindrom
const word = "racecar";
function checkPalendrone(word) {
  const stack = [];

  let revWord = "";

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  for (let i = 0; i < word.length; i++) {
    revWord += stack.pop();
  }
  if (revWord === word) return "It is a palendrone";
  return "Not a palemdrone";
}
//Using the stack function

let Stack = function(){
  this.count = 0;
  this.storage = {};

  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function(value){
    if(this.count === 0)return 0;
    this.count--;
    const val = this.storage[this.count];
    delete this.storage[this.count];
    return val;
  }

  this.size = function(){
    return this.count;
  }
   this.peek = function(){
    return this.storage[this.count-1];
   }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());

