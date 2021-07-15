export class GameObject {
    constructor(x, y, name) {
        this._x = x;
        this._y = y;
        this.name = name;
        this._scale = 1;
    }
    get x() { return this._x; }
    set x(value) { this._x = value; }
    get y() { return this._y; }
    set y(value) { this._y = value; }
    get width() { return this._width; }
    set width(v) { this._width = v; }
    get height() { return this._height; }
    set height(v) { this._height = v; }
    get scale() { return this._scale; }
    set scale(value) { this._scale = value; }
    static get rootElement() {
        return document.querySelector("game");
    }
    update() {
    }
    draw() {
    }
}
//# sourceMappingURL=gameobject.js.map