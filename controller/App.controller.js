sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    // "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"

 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        //life cycle method - UI5 view -> controller 기본동작 메소드
        // onInit : view가 최초로 생겨날때 (화면이 처음 켜질때)
        // onAfterRendering  :
        // onBeforeRendering :
        // onExit : 화면을 나갈 때, 객체를 없앨때
        onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
      

        /*
         

        onInit : function () {
            // set data model on view

            //  1. JS 객체 생성 ( )
            var oData = {
               recipient : {
                  name : "World"
               }
            };

            // 2. JSONModel  생성
            var oModel = new JSONModel(oData);

            // 3. JSONModel - View 연결 (세팅)
            this.getView().setModel(oModel);

            // 컨트롤러에 등록한 메소드(펑션)은 컨트롤러 객체에서 실행
            // this = 이 펑션을 구동한 객체를 지시 
            // this - 이 컨트롤러
            // this.getView() : 이 컨트롤러에 연결된 뷰 

            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

         }, */

    //    onShowHello : function () {
    //       // show a native JavaScript alert
    //       // alert("Hello World");
    //       // MessageToast.show("Welcome");

    //     // read msg from i18n model
    //      var oBundle = this.getView().getModel("i18n").getResourceBundle();
    //      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
    //      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
    //      // show message
    //      MessageToast.show(sMsg);
    //    }

    });
 });

//  데이터 통신 규격, JS model , .json , 객체형태로 이루어진 모델 
