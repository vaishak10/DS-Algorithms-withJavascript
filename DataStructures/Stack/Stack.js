//Stack implementation using array

class Stack {

    constructor(){
        this.stack = [];
        this.top = 0;
    }

    // Adds a value to the Stack
    push(value) {
        this.stack.push(value)
        this.top += 1
    }

    // Returns and removes the last element of the Stack
    pop() {
        if (this.top !== 0) {
        this.top -= 1
        return this.stack.pop()
        }
        throw new Error('Stack Underflow')
    }

    // Returns the number of elements in the Stack
    get length() {
        return this.top;
    }

    // Returns true if stack is empty, false otherwise
    get isEmpty() {
        return this.top === 0
    }

    // Returns the last element without removing it
    get last() {
        if (this.top !== 0) {
        return this.stack[this.stack.length - 1]
        }
        return null
    }

    // Checks if an object is the instance os the Stack class
    static isStack(el) {
        return el instanceof Stack
    }

    get viewStack(){
        return this.stack;
    }
}

let newStack = new Stack();

console.log('instace of class status: '+ Stack.isStack(newStack));
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log(newStack.viewStack);
newStack.pop();
console.log(newStack.viewStack);
console.log('Last element in the stack: ' + newStack.last);
console.log('Is stack empty? Ans: ' + newStack.isEmpty);
console.log('length of the stack: ' + newStack.length);