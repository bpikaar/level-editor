import { DOMObject } from "./core/dom/domobject.js";
import { GameObject } from "./core/gameobject.js";
import { Menu } from "./menu/menu.js";
export class Game {
    constructor() {
        Game.instance = this;
        this.gameObjects = new Array();
        this.objectsToExport = new Array();
        this.startGame();
        requestAnimationFrame(() => this.update());
    }
    startGame() {
        new Menu(10);
        new DOMObject(700, 300, "castle");
    }
    update() {
        for (let o of this.gameObjects) {
            o.update();
        }
        this.draw();
    }
    draw() {
        for (let o of this.gameObjects) {
            o.draw();
        }
        requestAnimationFrame(() => this.update());
    }
    addElement(gameObject) {
        this.gameObjects.push(gameObject);
    }
    addObjectToExport(gameObject) {
        this.objectsToExport.push(gameObject);
    }
    exportToJSON() {
        let outputString;
        outputString = JSON.stringify(this.objectsToExport, ['name', 'x', 'y'], '\t');
        console.log(outputString);
    }
    sortObjectsInDom() {
        this.objectsToExport.sort(function (a, b) {
            return (a.y + a.height > b.y + b.height) ? 1 : ((b.y + b.height > a.y + a.height) ? -1 : 0);
        });
        this.objectsToExport.forEach(elem => GameObject.rootElement.appendChild(elem.htmlElement));
    }
}
new Game();
//# sourceMappingURL=game.js.map