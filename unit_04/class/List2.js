class List2 extends List {
    constructor(arrayStr, cssClass) {
        super(arrayStr);
        this.cssClass = cssClass;
    }

    render() {
        const ul = super.render();

        ul.classList.add(this.cssClass);
        return ul;
    }
}

const counter2 = new List2(['one', 'two', 'three', 'four'], 'main');

document.body.prepend(counter2.render());