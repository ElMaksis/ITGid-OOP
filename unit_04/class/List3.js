class List3 extends List {
    constructor(arrayStr, cssClass) {
        super(arrayStr);
        this.cssClass = cssClass;
    }

    render() {
        const ul = super.render();

        this.cssClass.forEach(item => {
            ul.classList.add(item);
        });
        return ul
    }
}

const counter3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);

document.body.prepend(counter3.render());
