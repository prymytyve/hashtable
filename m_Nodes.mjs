export class SetNode {
  // use for hash set!!!
  constructor(key) {
    this._key = key || null;
  }
  _next = null;
  get next() {
    return this._next;
  }
  get key() {
    return this._key;
  }
}

export class MapNode extends SetNode {
  constructor(key, ...value) {
    super();
    this._key = key;
    this._value = value || null;
  }
}
