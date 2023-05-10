class List {
    constructor(arrayStr) {
        this.item = arrayStr;
    }

    render() {
        let menuList = document.createElement('ul');

        this.item.forEach(elem => {
            menuList.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
        });
        return menuList;
    }
}

const counter = new List(['one', 'two', 'three', 'four']);
document.body.prepend(counter.render());