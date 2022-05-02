const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.body = [];
    this.length = this.body.length;
  }
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.body.push(element);
    console.log(this.body);

  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.body);

    console.log(this.body[this.body.length - 1]);
    this.body.pop()
    
    return this.body[this.body.length - 1]
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.body[this.body.length - 1]);

    return this.body[this.body.length - 1];
  }
}

const stack = new Stack();
stack.push(1); // adds the element to the stack
stack.peek(); // returns the peek, but doesn't delete it, returns 1
stack.pop(); // returns the top element from stack and deletes it, returns 1
stack.pop(); // undefined

module.exports = {
  Stack
};
