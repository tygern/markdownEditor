System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LocalStoragePersistence;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocalStoragePersistence = (function () {
                function LocalStoragePersistence() {
                    this.storage = localStorage;
                }
                LocalStoragePersistence.prototype.retrieve = function (key) {
                    var item = this.storage.getItem(key);
                    if (item !== null && item !== 'undefined') {
                        return JSON.parse(this.storage.getItem(key));
                    }
                    return;
                };
                LocalStoragePersistence.prototype.store = function (key, value) {
                    this.storage.setItem(key, JSON.stringify(value));
                };
                LocalStoragePersistence = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStoragePersistence);
                return LocalStoragePersistence;
            })();
            exports_1("LocalStoragePersistence", LocalStoragePersistence);
        }
    }
});
//# sourceMappingURL=localStorageService.js.map