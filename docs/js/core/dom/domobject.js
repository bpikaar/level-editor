import { Game } from "../../game.js";
import { GameObject } from "../gameobject.js";
import { Animation } from "../dom/animation.js";
export class DOMObject extends GameObject {
    constructor(x, y, HTMLtagName, animated) {
        super(x, y, HTMLtagName);
        this._animated = animated;
        this.htmlElement = document.createElement(HTMLtagName);
        GameObject.rootElement.appendChild(this.htmlElement);
        this.width = this.htmlElement.offsetWidth;
        this.height = this.htmlElement.offsetHeight;
        if (this._animated) {
            Game.instance.addElement(this);
            this.animation = new Animation(this.htmlElement, 28, 32, 15, 4);
        }
        else {
            this.draw();
        }
    }
    get animated() {
        return this._animated;
    }
    update() {
        if (this.animation)
            this.animation.update();
    }
    draw() {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
        if (this.animation)
            this.animation.draw();
    }
}
//# sourceMappingURL=domobject.js.map