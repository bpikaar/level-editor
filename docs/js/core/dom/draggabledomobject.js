import { Game } from "../../game.js";
import { Settings } from "../../settings.js";
import { GameObject } from "../gameobject.js";
import { DOMObject } from "./domobject.js";
export class DraggableDomObject extends DOMObject {
    constructor(x, y, HTMLtagName, offsetX, offsetY, animated) {
        super(x, y, HTMLtagName, animated);
        this.offSetX = 0;
        this.offSetY = 0;
        this.htmlElement.classList.add('selectable');
        Game.instance.addObjectToExport(this);
        this.htmlElement.addEventListener("mousedown", (e) => this.drag(e));
        this.htmlElement.addEventListener("mouseup", (e) => this.drop(e));
        this.mouseMoveBind = (e) => this.updatePosition(e);
        this.offSetX = offsetX;
        this.offSetY = offsetY;
        window.addEventListener("mousemove", this.mouseMoveBind);
    }
    drag(event) {
        event.preventDefault();
        GameObject.rootElement.appendChild(this.htmlElement);
        if (event.altKey) {
            let go = new DraggableDomObject(this.x, this.y, this.htmlElement.tagName, event.offsetX, event.offsetY, this.animated);
        }
        else {
            this.offSetX = event.offsetX;
            this.offSetY = event.offsetY;
            window.addEventListener("mousemove", this.mouseMoveBind);
        }
    }
    updatePosition(event) {
        this.x = event.clientX - this.offSetX;
        this.y = event.clientY - this.offSetY;
        this.draw();
    }
    drop(event) {
        if (Settings.snapping) {
            this.x = Math.round(this.x / Settings.gridSize) * Settings.gridSize;
            this.y = Math.round(this.y / Settings.gridSize) * Settings.gridSize;
            Game.instance.sortObjectsInDom();
            this.draw();
        }
        window.removeEventListener("mousemove", this.mouseMoveBind);
    }
}
//# sourceMappingURL=draggabledomobject.js.map