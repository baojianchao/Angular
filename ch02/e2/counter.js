"use strict";
exports.__esModule = true;
var CounterImpl = /** @class */ (function () {
    function CounterImpl() {
        this.count = 0;
    }
    CounterImpl.prototype.inc = function () {
        this.count++;
    };
    CounterImpl.prototype.dec = function () {
        this.count--;
    };
    CounterImpl.prototype.currentCounter = function () {
        return "当前计数：" + this.count;
    };
    return CounterImpl;
}());
exports.CounterImpl = CounterImpl;
