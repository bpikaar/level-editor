import { Button } from "./button.js";
import { Game } from "../game.js";
export class ExportButton extends Button {
    constructor(x, y) {
        super(x, y, "exportbutton");
    }
    handleClick(event) {
        Game.instance.exportToJSON();
    }
}
//# sourceMappingURL=exportbutton.js.map