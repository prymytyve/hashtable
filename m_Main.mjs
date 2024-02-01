import Bucket from "./m_Bucket.mjs";
import { SetNode, MapNode } from "./m_Nodes.mjs";

class HashMap {
  constructor() {
    this._capacity = 16; //change to 16 later
    this._loadFactor = 0.75;
    this._array = this.hashMapArr(this._capacity);
    this._itemCounter = 0;
  }
  #temp;

  hashMapArr = (capacity) => {
    const array = [];
    for (let i = 0; i < capacity; i++) {
      array.push(new Bucket());
    }
    return array;
  };

  get total() {
    let sum = 0;
    this._array.forEach((bucket) => {
      sum += bucket.count;
    });
    return sum;
  }

  sizeCheck = () => {
    return this.total / this._capacity >= this._loadFactor;
  };

  bucketSize = (index) => {
    return this._array[index].count();
  };

  sizeMap = () => {
    //creates a visual map of linked lists and amount of elements
    let total = [];
    this._array.forEach((bucket) => {
      total.push(bucket.count);
    });
    return total;
  };

  hash = (key) => {
    //hash function from https://www.theodinproject.com/lessons/javascript-hashmap-data-structure
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

  dblMapSize = () => {
    //rehash here
    console.log("rehashing");
    this._capacity *= 2;
    this.#temp = this.hashMapArr(this._capacity);
    this._array.forEach((bucket) => {
      if (bucket.head === null) return;
      let temp = bucket.head;
      while (temp !== null) {
        let index = this.hash(temp._key);
        const node = new MapNode(temp._key, ...temp._value);
        this.#temp[index].add(node);
        temp = temp.next;
      }
    });
    this._array = this.#temp;
  };

  set = (key, ...value) => {
    if (this.sizeCheck() === true) this.dblMapSize(); //checks and increases bucket size
    let index = this.hash(key);
    const node = new MapNode(key, ...value);
    this._array[index].add(node);
    // console.log(this._array[index]);
  };

  get itemCounter() {
    return this._itemCounter;
  }

  get values() {
    let arr = [];
    this._array.forEach((bucket) => {
      if (bucket._head !== null) {
        arr = arr.concat(bucket.listValuesInArray());
      }
    });
    return arr;
  }

  get capacity() {
    return this._capacity;
  }

  get = (key) => {
    let index = this.hash(key);
    let i = this._array[index].get(key);
    return i;
  };

  has = (key) => {
    let index = this.hash(key);
    let i = this._array[index].has(key);
    return i;
  };

  remove = (key) => {
    let index = this.hash(key);
    let i = this._array[index].remove(key);
    return i;
  };
}

////////////////////////////////////
const hashMap1 = new HashMap();
hashMap1.set("bob", "bob1");
hashMap1.set("Billy", "Billy1");
hashMap1.set("Boo", "Boo1"); //Boo and Bor cause collisions with Billy
hashMap1.set("jim", "jim1");
hashMap1.set("jam", "jam1");
hashMap1.set("jeffrey", "jeffrey1");
hashMap1.set("bob", "bob2");
hashMap1.set("Billy", "Billy2");
hashMap1.set("Boo", "boo2"); //Boo and Bor cause collisions with Billy
hashMap1.set("Jam", "jam2");
hashMap1.set("jim", "jim2");
hashMap1.set("jeffrey", "jeffrey2");
hashMap1.set("joe", "joe1");
hashMap1.set("Joe", "joe2");
console.log(
  hashMap1._capacity,
  hashMap1.total,
  // hashMap1.sizeMap(),
  // hashMap1.get("jom"),
  // hashMap1.has("bob"),
  // hashMap1.remove("jofff"),
  hashMap1.values
);
