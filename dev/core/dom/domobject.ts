import { Game } from "../../game.js";
import { GameObject } from "../gameobject.js";
import { Animation } from "../dom/animation.js";

export class DOMObject extends GameObject{

    private animation:  Animation;
    private _animated:   boolean;
    
    public htmlElement:  HTMLElement;

    public get animated() : boolean {
        return this._animated;
    }
    /**
     * Basic object to draw DOM elements
     */
    constructor(x: number, y: number, HTMLtagName: string, animated?: boolean) {
        super(x, y, HTMLtagName);
        this._animated = animated;
        
        this.htmlElement = document.createElement(HTMLtagName);
        GameObject.rootElement.appendChild(this.htmlElement);

        // breedte en hoogte uitlezen van dom elements!
        this.width = this.htmlElement.offsetWidth;
        this.height = this.htmlElement.offsetHeight;

        if(this._animated) {
            Game.instance.addElement(this);
            this.animation = new Animation(this.htmlElement, 28, 32, 15, 4);
        }
        else {
            this.draw();    
        }
    }
    
    public update() : void {
        if(this.animation) 
            this.animation.update();
    }
    
    /**
     * Draw to minipulate X and Y
     */
    public draw(): void {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
        
        if(this.animation) 
            this.animation.draw();
    }
    
    
}