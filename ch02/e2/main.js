"use strict";
exports.__esModule = true;
var counter_1 = require("./counter");
var MyCounter = /** @class */ (function () {
    function MyCounter(pEle) {
        this.pEle = pEle;
        this.conster = new counter_1.CounterImpl();
    }
    MyCounter.prototype.inc = function () {
        this.conster.inc();
        this.refresh();
    };
    MyCounter.prototype.dec = function () {
        this.conster.dec();
        this.refresh();
    };
    MyCounter.prototype.refresh = function () {
        this.pEle.innerText = this.conster.currentCounter();
    };
    return MyCounter;
}());
window.onload = function () {
    var pEle = document.getElementById('counter');
    var myCounter = new MyCounter(pEle);
    var buttons = document.getElementsByTagName('input');
    buttons[0].addEventListener('click', function (evt) {
        myCounter.inc();
    });
    buttons[1].addEventListener('click', function () {
        myCounter.dec();
    });
};
