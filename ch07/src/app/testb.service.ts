import { Injectable } from "@angular/core";

@Injectable()
export class TestBService {
    content: string;

    constructor() {
        this.content = 'hello!-B'
    }

    getTitle() {
        return this.content;
    }

    setTitle(t: string) {
        this.content = t;
    }
}