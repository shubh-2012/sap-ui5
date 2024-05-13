sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],function(Controller,MessageToast,JSONModel){
    "use strict"
    return Controller.extend("sap.ui.sap-ui5.App",{
        
        onInit: function (){
            var oData = {
                recipient: {
                    name: "John"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function(){
            // alert("Hell there");
            MessageToast.show("Hello There!");
        }
    });
});