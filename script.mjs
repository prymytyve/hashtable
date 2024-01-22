import { Node, Bucket } from "./linked_list.mjs";

class HashMap {
  constructor() {
    this._capacity = 4; //change to 16 later
    this._loadFactor = 0.75;
    this._array = this.hashMapArr(this._capacity);
  }

  get array() {
    return this._array.toString();
  }

  hashMapArr = (capacity) => {
    const array = [];
    for (let i = 0; i < capacity; i++) {
      array.push(new Bucket());
    }
    return array;
  };

  hash = (key) => {
    //hash function from https://www.theodinproject.com/lessons/javascript-hashmap-data-structure
    if (typeof key !== String) return "Not a string";
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    const index = hashCode % this._capacity;
    if (index < 0 || index >= this._capacity) {
      throw new Error("Trying to access index out of bound");
    } else {
      return index;
    }
  };
}

////////////////////////////////////
const hashMap1 = new HashMap();
console.log(hashMap1.array);
