class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

const test = new Test;
test.testProp = 15;
console.log(test);

console.log(test.testProp);