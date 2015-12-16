System.register(['angular2/core', '../storage/localStorageService', '../conversion/markdownConverter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, localStorageService_1, markdownConverter_1;
    var EditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localStorageService_1_1) {
                localStorageService_1 = localStorageService_1_1;
            },
            function (markdownConverter_1_1) {
                markdownConverter_1 = markdownConverter_1_1;
            }],
        execute: function() {
            EditorComponent = (function () {
                function EditorComponent(converter, storage) {
                    this.converter = converter;
                    this.storage = storage;
                    this.html = '';
                    this.storageKey = 'markdown-app';
                    var text = this.storage.retrieve(this.storageKey);
                    this.initVal = text ? text.text : '';
                    this.updateValue(this.initVal);
                }
                EditorComponent.prototype.updateValue = function (val) {
                    this.storage.store(this.storageKey, { text: val });
                    this.html = this.converter.convert(val);
                };
                EditorComponent = __decorate([
                    core_1.Component({
                        selector: 'editor',
                        templateUrl: './app/editor/editor.html',
                        bindings: [markdownConverter_1.MarkdownConverter, localStorageService_1.LocalStoragePersistence]
                    }),
                    __param(0, core_1.Inject(markdownConverter_1.MarkdownConverter)),
                    __param(1, core_1.Inject(localStorageService_1.LocalStoragePersistence)), 
                    __metadata('design:paramtypes', [Object, Object])
                ], EditorComponent);
                return EditorComponent;
            })();
            exports_1("EditorComponent", EditorComponent);
        }
    }
});
//# sourceMappingURL=editor.component.js.map