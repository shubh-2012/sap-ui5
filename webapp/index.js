sap.ui.define([
//    "sap/m/Text"

    "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    'use strict';
    // alert('Ui5 display ready');
   XMLView.create({
    viewName:"sap.ui.sap-ui5.view.App"
   }).then( function (oView){
        oView.placeAt("content");
   });
});
// ], function(Text) {
//     'use strict';
//     // alert('Ui5 display ready');
//     new Text({
//         text : "Hello UI5" 
//     }).placeAt("content")
// });