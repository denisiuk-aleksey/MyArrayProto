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

  this.unshift = function unshift() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this[this.length - this.length + 1] = arguments[i];
      ++this.length;
    }
    return this.length;
    // this.reverse().push(arguments);
    // this.reverse();                                поинтересней решение)))
  };

  this.shift = function shift() {
    const firstElem = this[this.length - this.length + 1];
    delete this[this.length - this.length + 1];
    return firstElem;
  };

  this.concat = function concat() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < arguments.length; i++) {
      newArray.push(arguments[i]);
    }
    return newArray;
  };

  this.reverse = function reverse() {
    let newArray = [];
    let index;
    for (i = this.length; i > 0; i--) {
      index = this.length - i;
      newArray[i] = this[index];
    }
    return newArray; //можно ещё цикл чтобы перезаписывать в старый массив, но так очень медленно будет)
  };

  this.forEach = function forEach(cb){
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  //map() не осилил
}

function MyArray() {
  this.length = 0;
  if(this instanceof !MyArrayProto){
    return;
  }
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayProto();

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));
console.log(arr1.reverse());