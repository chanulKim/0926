sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = []; // 검색조건(필터)는 다건일 수 있음, 배열로 전달
			var sQuery = oEvent.getParameter("query"); //입력 검색어 추출
			if (sQuery) { //검색어가 있을때만
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList"); // sap.m.List 객체를 불러옴
			var oBinding = oList.getBinding("items"); //aggregation binding
			oBinding.filter(aFilter); //필터 배열을 바인딩 정보에 추가 
		},

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			}
			); // detail의 이름을 가진 route로 이동 ( manifest 로 이동)
		}
	});
});

