class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a * 10;
    }

    get testValue() {
        if (!this.testValue && this.testValue > 100) {
            return this.testValue;
        }
    }
}

const test4 = new Test4();
