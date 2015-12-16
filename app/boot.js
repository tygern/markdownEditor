System.register(['angular2/platform/browser', './editor/editor.component'], function(exports_1) {
    var browser_1, editor_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (editor_component_1_1) {
                editor_component_1 = editor_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(editor_component_1.EditorComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map