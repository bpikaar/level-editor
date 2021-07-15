export class Animation {
    constructor(htmlElement, frameWidth, frameHeight, animationSpeed, maxFrames) {
        this.frameWidth = 0;
        this.frameHeight = 0;
        this.animationSpeed = 0;
        this.currentFrame = 0;
        this.maxFrames = 0;
        this.timer = 0;
        this.htmlElement = htmlElement;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.animationSpeed = animationSpeed;
        this.maxFrames = maxFrames;
    }
    update() {
        this.timer++;
        if (this.timer % this.animationSpeed == 0)
            this.currentFrame++;
        if (this.currentFrame > this.maxFrames - 1)
            this.currentFrame = 0;
    }
    draw() {
        this.htmlElement.style.backgroundPosition = (this.currentFrame * -this.frameWidth) + "px 0px";
    }
}
//# sourceMappingURL=animation.js.map