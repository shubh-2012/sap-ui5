sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],function(Controller,MessageToast){
    "use strict"
    return Controller.extend("sap.ui.sap-ui5.App",{
        onShowHello: function(){
            // alert("Hell there");
            MessageToast.show("Hello There!");
        }
    });
});