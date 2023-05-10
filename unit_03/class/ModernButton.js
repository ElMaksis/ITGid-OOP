class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        let btn = super.render();
        btn.borderRadius = this.borderRadius;
        btn.style.borderRadius = `${this.borderRadius}px`;
        return btn;
    }
}

const modernBtn = new ModernButton(100, 25, 'gold', 'Modern', 50);
document.body.append(modernBtn.render());
