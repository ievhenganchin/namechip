function Calc(val) {
    var value = val;

    this.add = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value += val;
        }
    }

    this.subs = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value -= val;
        }
    }

    this.getValue = function (val) {
        return value;
    }

    this.setValue = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            value = val;
        }
    }
}

function MathCalc(val) {
    Calc.call(this, val);

    this.cos = function (val) {
        if (typeof val == "number" && isFinite(val)) {
            this.setValue(Math.cos(val));
        }
    }

    this.sqrt = function() {
        this.setValue(Math.sqrt(this.getValue(value)));
    }
}

var c = new Calc(0);
var m = new MathCalc(0);