import { DOMObject } from "../core/dom/domobject.js";
import { DraggableDomObject } from "../core/dom/draggabledomobject.js";
import { Settings } from "../settings.js";
export class MenuItem extends DOMObject {
    constructor(x, y, HTMLtagName, animated) {
        super(x, y, HTMLtagName, animated);
        this.x = x;
        this.y = y;
        this.HTMLtagName = HTMLtagName;
        this.htmlElement.classList.add('selectable');
        this.htmlElement.classList.add('menuItem');
        this.scale = Math.min(1, Settings.sizeMenuItem / this.height, Settings.sizeMenuItem / this.width);
        this.htmlElement.addEventListener("mousedown", (e) => this.createElement(e));
        this.draw();
    }
    createElement(event) {
        let x = event.clientX - event.offsetX;
        let y = event.clientY - event.offsetY;
        this.gameObject = new DraggableDomObject(x, y, this.HTMLtagName, event.offsetX, event.offsetY, this.animated);
    }
}
//# sourceMappingURL=menuitem.js.map