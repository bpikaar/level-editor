import { Button } from "./button.js";
import { Settings } from "../settings.js";
export class SnapButton extends Button {
    constructor(x, y) {
        super(x, y, "snapbutton");
    }
    handleClick(event) {
        Settings.snapping = !Settings.snapping;
        this.htmlElement.style.backgroundImage = (Settings.snapping) ? "url(images/snapbutton_on.png)" : "url(images/snapbutton_off.png)";
    }
}
//# sourceMappingURL=snapbutton.js.map