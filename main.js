function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastElem = this[this.length - 1];
    delete this[--this.length];
    return lastElem;
  };

  this.unshift = function unshift(...args) {
    this.reverse().push(...args);
    this.reverse();
    return this.length;
  };

  this.shift = function shift() {
    const firstElem = this[this.length - this.length + 1];
    delete this[this.length - this.length + 1];
    this.length--;
    return firstElem;
  };

  this.concat = function concat(secondArr) { // у вас точно такое же решение этого метода
    let newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < secondArr.length; i++) {
      newArray.push(secondArr[i]);
    }
    return newArray;
  };

  this.reverse = function reverse() {
    let newArray = new MyArray(); 
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = newArray.pop();
    }
  };

  this.forEach = function forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  this.map = function map(cb) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      res.push(cb(this[i], i, this));
    }
    return res;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
};

MyArray.prototype = new MyArrayProto();
