// TODO: Find a way to do this properly
import * as marked from 'node_modules/marked/marked.min.js';
import { Injectable } from 'angular2/core';

@Injectable()
export class MarkdownConverter {
    private md:MarkedStatic;

    constructor() {
        this.md = marked;
    }

    convert(markdown: string): string {
        //return markdown;
        //return marked.parse("# h");
        return this.md.parse(markdown);
    }
}