import { Button } from "./button.js";
import { Game } from "../game.js";

/**
 * ExportButton
 */
export class ExportButton extends Button {
    constructor(x: number, y: number) {
        super(x, y, "exportbutton");
    }
    
    protected handleClick(event: MouseEvent) : void {
        Game.instance.exportToJSON();
    }
}