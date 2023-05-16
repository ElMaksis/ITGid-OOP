class GridView {
    /**
     * properties
     * @param [array] _tableClass - классы оформления
     * @param [array] data - вызходные данные
     * @param [array] attribute - управляем что и куда выводим
     * @param [array] _element - куда выводить таблицу
     * @param [array] _header - заголовок таблицы
     * @param [array] _headerClass - классы заголовка
     * @param [array] data
     */

    constructor() {
        this._header = '';
        this.headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
     * Methods of Class
     */

    setHeader(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    setHeaderClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    render(data) {
        this.setElement(data.element);
        this.setHeader(data.header);
        this.setHeaderClass(data.headerClass);
        this.attribute = data.attribute;
        this.data = data.data;

        // show header

        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        //show table

        const table = document.createElement('table');
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });

        //create header table

        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }

        table.append(trHeader);

        //draw table

        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i];  //одна строка данных
            let tr = document.createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArr[key];

                // check function in value

                if (this.attribute[key].value) {
                    value = this.attribute[key].value(dataArr);
                }

                //check src

                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);
    }

}