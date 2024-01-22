export class Node {
  constructor(value, next) {
    this._value = value || null;
    this._next = next || null;
  }

  get next() {
    return this._next;
  }
}

export class Bucket {
  //linked list
  _head = null;

  traversal = () => {
    let temp = this._head;
    while (temp._next !== null) {
      temp = temp._next;
    }
    return temp;
  };

  append = (node) => {
    if (this._head === null) {
      this._head = node;
    } else if (this._head !== null) {
      let tail = this.traversal();
      tail._next = node;
    }
  };

  prepend = (node) => {
    let temp = this._head;
    this._head = node;
    this._head._next = temp;
  };

  size = () => {
    if (this._head === null) return 0;
    let count = 1;
    let temp = this._head;
    while (temp._next !== null) {
      count++;
      temp = temp._next;
    }
    return count;
  };

  get head() {
    return this._head;
  }

  tail = () => {
    return this.traversal();
  };

  at = (index) => {
    if (this._head === null) return "Empty List";
    if (index <= 0) return "Invalid";
    let temp = this._head;
    let i = 1;
    while (i < index) {
      if (temp._next === null) {
        return temp._value + " at index " + i + ". End of List";
      }
      temp = temp._next;
      i++;
    }
    return temp._value;
  };

  pop = () => {
    let node1 = this._head;
    let node2 = node1._next;
    let node3 = node1._next._next;
    while (node3 !== null) {
      node1 = node2;
      node2 = node3;
      node3 = node2._next;
    }
    node1._next = null;
    return node2;
  };

  contains = (val) => {
    let temp = this._head;
    while (temp._value !== val && temp._next !== null) {
      temp = temp._next;
    }
    return temp._value === val ? true : false;
  };

  find = (val) => {
    let temp = this._head;
    let i = 1;
    while (temp._value !== val && temp._next !== null) {
      temp = temp._next;
      i += 1;
    }
    return temp._value === val ? "Found at index: " + i : "Not found :(";
  };

  toString = () => {
    if (this._head === null) return "Empty";
    let temp = this._head;
    let string = "(" + temp._value + ") -> ";
    let i = 0;
    while (temp._next !== null) {
      temp = temp._next;
      let string2 = "(" + temp._value + ") -> ";
      string += string2;
    }
    return string.concat(temp._next);
  };

  insertAt = (node, index) => {
    if (this._head === null) return "Empty List"; // add different method of error handling later
    if (index <= 0) return "Invalid";
    let temp = this._head;
    if (index === 1) {
      this._head = node;
      node._next = temp;
    }
    let temp2 = temp._next;
    let i = 2;
    while (i < index && temp2 !== null) {
      temp = temp2;
      temp2 = temp2._next;
      i++;
    }

    temp._next = node;
    node._next = temp2;
  };

  removeAt = (index) => {
    if (this._head === null) return "Empty List"; // add different method of error handling later
    if (index <= 0) return "Invalid";
    let temp = this._head;
    let temp2 = temp._next;
    if (index === 1) {
      this._head = temp2;
    }
    let i = 2;
    while (i < index && temp2 !== null) {
      temp = temp2;
      temp2 = temp2._next;
      i++;
    }
    if (temp2 !== null) temp._next = temp2._next || null;
  };
}
