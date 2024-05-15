sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.sap-ui5.component", {
      metadata: {
        manifest: "json",
        // rootView: {
        //   viewName: "sap.ui.sap-ui5.view.App",
        //   type: "XML",
        //   async: true,
        //   id: "app",
        // },
      },
      init: function () {
        // call the init function of parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data models
        var oData = {
          recipient: {
            name: "John",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model

        // var i18nModel = new ResourceModel({
        //   bundleName: "sap.ui.sap-ui5.i18n.i18n",
        //   supportLocales: [""],
        //   fallbackLocale: "",
        // });
        // this.setModel(i18nModel, "i18n");
      },
    });
  }
);
