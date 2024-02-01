export default class Bucket {
  _head = null;
  #elementCount = 0;

  get head() {
    return this._head;
  }

  get count() {
    return this.#elementCount;
  }

  add = (node) => {
    if (this._head === null) {
      this._head = node; //adds new node to as head
      this.#elementCount += 1;
    } else if (this._head._key === node._key) {
      let tempNext = this._head._next;
      this._head = node;
      this._head._next = tempNext;
    } else if (this._head !== null) {
      let temp = this._head;
      while (
        temp._next !== null &&
        temp._key.toLowerCase() !== node._key.toLowerCase()
      ) {
        temp = temp._next;
      }
      if (temp._key.toLowerCase() === node._key.toLowerCase()) {
        temp._value = node._value;
        return;
      }
      temp._next = node;
      this.#elementCount += 1;
    }
  };

  listValuesInArray = () => {
    let values = [];
    let temp = this._head;
    if (this._head === undefined) return this._head;
    while (temp !== null) {
      values = values.concat(temp._value);
      temp = temp._next;
    }
    return values;
  };

  get = (key) => {
    if (this._head === null) {
      return null;
    } else {
      const navigate = (head) => {
        if (head._key.toLowerCase() === key.toLowerCase()) {
          return head._value;
        } else if (head._next === null) {
          return null;
        } else {
          return navigate(head._next);
        }
      };
      return navigate(this._head);
    }
  };

  has = (key) => {
    if (this._head === null) {
      return false;
    } else {
      const navigate = (head) => {
        if (head._key.toLowerCase() === key.toLowerCase()) {
          return true;
        } else if (head._next === null) {
          return false;
        } else {
          return navigate(head._next);
        }
      };
      return navigate(this._head);
    }
  };
}
