sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.sap-ui5.App", {
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // alert("Hell there");
        // Show Message
        MessageToast.show(sMsg);
        // MessageToast.show("Hello There!");
      },
    });
  }
);
