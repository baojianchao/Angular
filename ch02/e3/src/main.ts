import { CounterImpl } from './counter';
import './style.css'

class MyCounter {
    pEle: HTMLAnchorElement;

    conster: CounterImpl;

    constructor(pEle: HTMLAnchorElement) {
        this.pEle = pEle;
        this.conster = new CounterImpl();
    }

    inc() {
        this.conster.inc();
        this.refresh();
    }

    dec() {
        this.conster.dec();
        this.refresh();
    }

    refresh() {
        this.pEle.innerText = this.conster.currentCounter();
    }
}

window.onload = function () {
    const pEle = <HTMLAnchorElement>document.getElementById('counter');
    const myCounter = new MyCounter(pEle);
    const buttons = document.getElementsByTagName('input');
    buttons[0].addEventListener('click', function (evt) {
        myCounter.inc();
    });
    buttons[1].addEventListener('click', function () {
        myCounter.dec();
    });
}