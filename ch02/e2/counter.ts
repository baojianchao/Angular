interface Counter {
    count: number;
    inc(): void;//增加
    dec(): void;//减少
    currentCounter(): string;
}

export class CounterImpl implements Counter {
    count: number;
    constructor() {
        this.count = 0;
    }
    inc(): void {
        this.count++;
    }
    dec(): void {
        this.count--;
    }
    currentCounter(): string {
        return "当前计数：" + this.count;
    }

}