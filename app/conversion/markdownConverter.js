System.register(['node_modules/marked/marked.min.js', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var marked, core_1;
    var MarkdownConverter;
    return {
        setters:[
            function (marked_1) {
                marked = marked_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MarkdownConverter = (function () {
                function MarkdownConverter() {
                    this.md = marked;
                }
                MarkdownConverter.prototype.convert = function (markdown) {
                    //return markdown;
                    //return marked.parse("# h");
                    return this.md.parse(markdown);
                };
                MarkdownConverter = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MarkdownConverter);
                return MarkdownConverter;
            })();
            exports_1("MarkdownConverter", MarkdownConverter);
        }
    }
});
//# sourceMappingURL=markdownConverter.js.map