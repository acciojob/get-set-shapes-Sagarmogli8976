class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // getters
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // method
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // call parent constructor
    super(side, side);
  }

  // method
  getPerimeter() {
    return this.width * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;