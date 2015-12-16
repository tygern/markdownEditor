import {Component, Inject} from 'angular2/core';

import { LocalStoragePersistence } from '../storage/localStorageService';
import { MarkdownConverter } from '../conversion/markdownConverter';

interface Persistence {
    retrieve(key:string):any
    store(key:string, value:any)
}

interface Converter {
    convert(message:string):string
}

@Component({
    selector: 'editor',
    templateUrl: './app/editor/editor.html',
    bindings: [MarkdownConverter, LocalStoragePersistence]
})
export class EditorComponent {
    public html:string;
    public initVal:string;

    private storageKey:string;

    constructor(@Inject(MarkdownConverter) private converter:Converter,
                @Inject(LocalStoragePersistence) private storage:Persistence) {
        this.html = '';
        this.storageKey = 'markdown-app';

        var text = this.storage.retrieve(this.storageKey);
        this.initVal = text ? text.text : '';

        this.updateValue(this.initVal);
    }

    public updateValue(val) {
        this.storage.store(this.storageKey, {text: val});
        this.html = this.converter.convert(val);
    }
}