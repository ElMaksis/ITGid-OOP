class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        let btn = document.createElement('button');
        btn.innerHTML = this.value;
        btn.style.cssText =
            `background: ${this.background}; 
        width: ${this.width}px; 
        height: ${this.height}px`;
        return btn;
    }
}

const retroBtn = new Button(100, 25, 'silver', 'Retro');
document.body.prepend(retroBtn.render());
