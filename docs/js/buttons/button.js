import { DOMObject } from "../core/dom/domobject.js";
export class Button extends DOMObject {
    constructor(x, y, HTMLtagName) {
        super(x, y, HTMLtagName);
        this.htmlElement.addEventListener("click", (e) => this.handleClick(e));
    }
    handleClick(event) {
    }
}
//# sourceMappingURL=button.js.map