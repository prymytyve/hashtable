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
}

////////////////////////////////////
const hashMap1 = new HashMap();
console.log(hashMap1.array);
