import { ExportButton } from "../buttons/exportbutton.js";
import { SnapButton } from "../buttons/snapbutton.js";
import { DOMObject } from "../core/dom/domobject.js";
import { Settings } from "../settings.js";
import { MenuItem } from "./menuitem.js";

/**
 * Menu
 */
export class Menu extends DOMObject {
    
    private menuOffset: number = 50;
    
    private menuOptions: Array<string> = ["tent", "market", "market2", "tree", "fountain", "hay", "stump", "sign", "barrel1", "barrel2", "plant", "cross", "firepole", "logs", "heavyfence", "fence"];
    
    private animatedMenuOptions: Array<string> = ["bird"];
    
    private menuItems: Array<MenuItem> = new Array<MenuItem>();
    
    constructor(menuSpacing: number) {
        super(0, 0, "menu");
        
        let itemSize = Settings.sizeMenuItem + menuSpacing;
        
        // To continue counting menu items
        let itemNumber: number;
        for(let i = 0; i < this.menuOptions.length; i++) {
            this.menuItems.push(new MenuItem(i * itemSize + this.menuOffset , 10, this.menuOptions[i]));
            itemNumber = i;    
        }
        itemNumber++;
        for(let i = 0; i < this.animatedMenuOptions.length; i++) {
            this.menuItems.push(new MenuItem(itemNumber * itemSize + this.menuOffset , 10, this.animatedMenuOptions[i], true));   
        }
        
        let snapButton = new SnapButton(this.menuOptions.length * itemSize + this.menuOffset + 50, 16);
        let exporButton = new ExportButton(snapButton.x + snapButton.width + 50, 16);
    }
}