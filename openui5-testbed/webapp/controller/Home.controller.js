sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel"
], function(Controller, formatter, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			let oData = {
				comments : {
					comment : ""
				}
			};
			let oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onSubmit: function () {
			let sComment = this.getView().getModel().getProperty("/comments/comment");
			eval(sComment);
			alert(sComment);
		}
	});
});
