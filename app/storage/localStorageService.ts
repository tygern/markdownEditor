import { Injectable } from 'angular2/core';

@Injectable()
export class LocalStoragePersistence {
    private storage:any;

    constructor() {
        this.storage = localStorage;
    }

    public retrieve(key:string):any {
        var item = this.storage.getItem(key);

        if (item !== null && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    public store(key:string, value:any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

}
