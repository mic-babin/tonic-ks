export default class Observer {
  constructor(el, callback, options = {}) {
    this._el = el;
    this._callback = callback;
    this._options = options;

    this.init();
  }

  init = () => {
    return new IntersectionObserver(this._callback, this._options).observe(this._el);
  };
}
