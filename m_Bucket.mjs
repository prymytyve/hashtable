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
    } else {
      const navigateList = (head) => {
        if (head._key === node._key) {
          //replaces node
          let temp = head._next;
          head = node;
          head._next = temp;
          return;
        } else if (head._next === null) {
          //adds new node
          head._next = node;
          this.#elementCount += 1;
          return;
        } else {
          recursion(head._next);
        }
      };
      navigateList(this._head);
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
}
