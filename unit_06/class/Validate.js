class Validate {
    constructor(a) {
        this.a = a;
    }

    static isNumber(arg) {
        return typeof arg == 'number' ? true : false;
    }

    static isInt(arg) {
        return Number.isInteger(arg);
    }

    static isFloat(arg) {
        return !Number.isInteger(arg);
    }

    static isChar(arg) {
        return (typeof arg == 'string' && arg.length == 1) ? true : false;
    }

    static isString(arg) {
        return typeof arg == 'string' ? true : false;
    }
    static isBoolean(arg) {
        return typeof arg == 'boolean' ? true : false;
    }

    static isArray(arg) {
        return Array.isArray(arg);
    }

    static toMoney(num) {
        let temp = Array.from(String(num));

        temp.splice(-3, 0, ' ');
        temp.push('.', '0', '0');
        return temp.join('');
    }
}
