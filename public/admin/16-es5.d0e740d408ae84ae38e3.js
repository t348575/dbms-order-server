!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{WKwQ:function(e,i,a){"use strict";a.r(i),a.d(i,"ShippingPageModule",(function(){return A}));var r=a("ofXK"),s=a("3Pt+"),c=a("TEn/"),b=a("tyNb"),l=a("mrSG"),u=a("lDzL"),d=a("Ahj+"),h=a("he5r"),g=a("2g2N"),f=a("fXoL"),p=a("XjXr");function m(t,e){1&t&&(f.Ob(0,"ion-title"),f.sc(1," View / Add states "),f.Nb())}function v(t,e){if(1&t){var n=f.Pb();f.Ob(0,"ion-title"),f.Ob(1,"ion-button",4),f.Wb("click",(function(){f.jc(n);var t=f.Yb();return t.add=!t.add})),f.Kb(2,"ion-icon",5),f.Nb(),f.sc(3," View / Add states "),f.Nb()}}function O(t,e){if(1&t){var n=f.Pb();f.Ob(0,"ion-grid"),f.Ob(1,"ion-row"),f.Ob(2,"ion-col",9),f.sc(3),f.Nb(),f.Ob(4,"ion-col",10),f.Ob(5,"ion-button",11),f.Wb("click",(function(){f.jc(n);var t=e.index;return f.Yb(2).removeStatus(t)})),f.Kb(6,"ion-icon",12),f.Nb(),f.Nb(),f.Nb(),f.Nb()}if(2&t){var i=e.$implicit,o=f.Yb(2);f.xb(3),f.vc(" ",i.value," at ",o.getDate(i.time)," ")}}function N(t,e){if(1&t){var n=f.Pb();f.Ob(0,"ion-content"),f.Ob(1,"ion-list"),f.qc(2,O,7,2,"ion-grid",6),f.Nb(),f.Ob(3,"ion-button",7),f.Wb("click",(function(){f.jc(n);var t=f.Yb();return t.add=!t.add})),f.sc(4," Add status "),f.Kb(5,"ion-icon",8),f.Nb(),f.Nb()}if(2&t){var i=f.Yb();f.xb(2),f.dc("ngForOf",i.states)}}function x(t,e){if(1&t){var n=f.Pb();f.Ob(0,"ion-content"),f.Ob(1,"ion-grid"),f.Ob(2,"ion-row"),f.Ob(3,"ion-col",13),f.Ob(4,"ion-item"),f.Ob(5,"ion-label",14),f.sc(6,"Status text"),f.Nb(),f.Ob(7,"ion-input",15),f.Wb("ngModelChange",(function(t){return f.jc(n),f.Yb().statusText=t})),f.Nb(),f.Nb(),f.Ob(8,"ion-item"),f.Ob(9,"ion-label"),f.sc(10,"Update order"),f.Nb(),f.Ob(11,"ion-toggle",16),f.Wb("ngModelChange",(function(t){return f.jc(n),f.Yb().updateOrder=t}))("ionChange",(function(){return f.jc(n),f.Yb().setStatus()})),f.Nb(),f.Nb(),f.Ob(12,"ion-item",17),f.Ob(13,"ion-label",14),f.sc(14,"Select preset order status"),f.Nb(),f.Ob(15,"ion-select",18),f.Wb("ngModelChange",(function(t){return f.jc(n),f.Yb().orderStatus=t}))("ionChange",(function(){return f.jc(n),f.Yb().setStatus()})),f.Ob(16,"ion-select-option",19),f.sc(17,"Shipment reached"),f.Nb(),f.Ob(18,"ion-select-option",19),f.sc(19,"Shipment delivered"),f.Nb(),f.Ob(20,"ion-select-option",19),f.sc(21,"Shipment cancelled"),f.Nb(),f.Nb(),f.Nb(),f.Ob(22,"ion-item"),f.Ob(23,"ion-label",14),f.sc(24,"Status time"),f.Nb(),f.Ob(25,"ion-datetime",20),f.Wb("ngModelChange",(function(t){return f.jc(n),f.Yb().statusDate=t})),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Ob(26,"ion-row"),f.Ob(27,"ion-col",21),f.Ob(28,"ion-buttons"),f.Ob(29,"ion-button",22),f.Wb("click",(function(){return f.jc(n),f.Yb().setNow()})),f.sc(30," Set datetime to now "),f.Nb(),f.Ob(31,"ion-button",23),f.Wb("click",(function(){return f.jc(n),f.Yb().addStatus()})),f.sc(32," Add status "),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Nb()}if(2&t){var i=f.Yb();f.xb(7),f.dc("ngModel",i.statusText),f.xb(4),f.dc("ngModel",i.updateOrder),f.xb(1),f.dc("disabled",!i.updateOrder),f.xb(3),f.dc("ngModel",i.orderStatus),f.xb(1),f.dc("value",3)("disabled",i.shipment.state>=3||-1===i.shipment.state),f.xb(2),f.dc("value",4)("disabled",i.shipment.state>=4||-1===i.shipment.state),f.xb(2),f.dc("value",-1)("disabled",-1===i.shipment.state),f.xb(5),f.dc("ngModel",i.statusDate)}}var w,y=((w=function(){function t(e,i,o){n(this,t),this.shipping=e,this.modalController=i,this.alertController=o,this.add=!1,this.statusText="",this.updateOrder=!1,this.orderStatus=3}return o(t,[{key:"ngOnInit",value:function(){this.states=this.shipment.ship_status,this.orderStatus=this.shipment.state+1,-1===this.shipment.state&&(this.orderStatus=-1)}},{key:"close",value:function(){this.modalController.dismiss()}},{key:"getDate",value:function(t){return h.b.toMysqlFormat(new Date(t))}},{key:"setStatus",value:function(){if(this.updateOrder)switch(this.orderStatus){case 3:this.statusText="Shipment reached";break;case 4:this.statusText="Shipment delivered";break;case 5:this.statusText="Shipment cancelled"}}},{key:"getShipment",value:function(){var t=this;this.shipping.getShipment(this.shipment.ship_id).subscribe((function(e){t.shipment=e,t.states=t.shipment.ship_status}))}},{key:"addStatus",value:function(){var t=this;this.shipping.addStatus({time:h.b.toMysqlFormat(new Date(this.statusDate)),value:this.statusText},this.shipment.ship_id,this.updateOrder,this.shipment.ord_id,this.orderStatus).subscribe((function(){t.statusDate=void 0,t.statusText="",t.add=!t.add,t.getShipment()}),(function(){t.statusDate=void 0,t.statusText="",t.add=!t.add,t.getShipment(),g.a.toast("Could not add status!",3e3,"danger")}))}},{key:"setNow",value:function(){this.statusDate=h.b.toMysqlFormat(new Date)}},{key:"removeStatus",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Confirm!",message:"Delete status: "+this.states[t].value,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Delete",handler:function(){i.shipping.removeStatus(t,i.shipment.ship_id).subscribe((function(){i.getShipment()}),(function(){i.getShipment(),g.a.toast("Could not remove status!",3e3,"danger")}))}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}}]),t}()).\u0275fac=function(t){return new(t||w)(f.Jb(p.a),f.Jb(c.I),f.Jb(c.a))},w.\u0275cmp=f.Db({type:w,selectors:[["app-shipping-states"]],inputs:{shipment:"shipment"},decls:9,vars:4,consts:[[4,"ngIf"],["slot","end"],["fill","clear",1,"ion-float-right",3,"click"],["color","danger","slot","icon-only","name","close-circle-outline"],["fill","clear",3,"click"],["name","arrow-back-outline","slot","icon-only","color","dark"],[4,"ngFor","ngForOf"],["fill","outline",1,"ion-float-right","margin",3,"click"],["name","add","slot","end"],["size","10"],["size","2",1,"center-middle"],["fill","outline","color","danger",3,"click"],["name","close","slot","icon-only","color","danger"],["size","10","offset","1"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange","ionChange"],[3,"disabled"],["interface","popover",3,"ngModel","ngModelChange","ionChange"],[3,"value","disabled"],["display-format","YYYY-MM-DD HH:mm:ss",3,"ngModel","ngModelChange"],["size","12",1,"center-middle"],["fill","outline",1,"ion-float-left",3,"click"],["fill","outline",1,"ion-float-right",3,"click"]],template:function(t,e){1&t&&(f.Ob(0,"ion-header"),f.Ob(1,"ion-toolbar"),f.qc(2,m,2,0,"ion-title",0),f.qc(3,v,4,0,"ion-title",0),f.Ob(4,"ion-buttons",1),f.Ob(5,"ion-button",2),f.Wb("click",(function(){return e.close()})),f.Kb(6,"ion-icon",3),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.qc(7,N,6,1,"ion-content",0),f.qc(8,x,33,11,"ion-content",0)),2&t&&(f.xb(2),f.dc("ngIf",!e.add),f.xb(1),f.dc("ngIf",e.add),f.xb(4),f.dc("ngIf",!e.add),f.xb(1),f.dc("ngIf",e.add))},directives:[c.k,c.E,r.k,c.d,c.c,c.l,c.C,c.h,c.p,r.j,c.j,c.v,c.g,c.n,c.o,c.m,c.N,s.g,s.i,c.D,c.b,c.x,c.M,c.y,c.i],styles:[""]}),w),k=a("lGQG"),S=["table"];function C(t,e){if(1&t){var n=f.Pb();f.Ob(0,"p",23),f.sc(1),f.Kb(2,"br"),f.sc(3),f.Kb(4,"br"),f.sc(5),f.Kb(6,"br"),f.sc(7),f.Kb(8,"br"),f.Ob(9,"ion-button",24),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().stateControl(t)})),f.sc(10,"View / Add status"),f.Nb(),f.Nb()}if(2&t){var i=e.row,o=f.Yb();f.xb(1),f.uc(" Shipping ID: ",i.ship_id," "),f.xb(2),f.uc(" Order ID: ",i.ord_id," "),f.xb(2),f.uc(" Customer ID: ",i.cust_id," "),f.xb(2),f.uc(" Delivery email: ",i.emp_email," "),f.xb(2),f.dc("disabled",!o.viewStates)}}function M(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row;f.xb(1),f.tc(i.ship_id)}}function D(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row;f.xb(1),f.tc(i.ord_id)}}function P(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row;f.xb(1),f.tc(i.cust_id)}}function j(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row,o=f.Yb();f.xb(1),f.tc(o.getDate(i.ord_date))}}function Y(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row,o=f.Yb();f.xb(1),f.tc(o.getDate(i.ship_est_date))}}function W(t,e){if(1&t){var n=f.Pb();f.Ob(0,"a",25),f.Wb("click",(function(){f.jc(n);var t=e.row;return f.Yb().toggleExpandRow(t)})),f.sc(1),f.Nb()}if(2&t){var i=e.row,o=f.Yb();f.xb(1),f.tc(o.getPhone(i.emp_phone))}}var _,z,I,q=[{path:"",component:(_=function(){function e(t,i,o,a){n(this,e),this.shippingService=t,this.auth=i,this.modalController=o,this.cdr=a,this.columnMode=u.a.force,this.shipments=[],this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.role=d.a.Empty,this.search="",this.viewStates=!1,this.setPage({offset:0}),this.role=this.auth.getRole(),this.viewStates=-1===[0,3,5,7].indexOf(this.role)}return o(e,[{key:"ngOnInit",value:function(){}},{key:"reset",value:function(){this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.search="",this.startDate=void 0,this.endDate=void 0,this.viewStates=!1,this.setPage({offset:0})}},{key:"setPage",value:function(e){var n=this;this.pageNumber=e.offset,this.loading=!0,this.shippingService.getShipments(this.pageNumber,this.numPerPage,this.search,this.startDate,this.endDate).subscribe((function(e){n.shipments=e.data,n.shipments=t(n.shipments),n.total=e.total,n.loading=!1,n.cdr.detectChanges()}))}},{key:"toggleExpandRow",value:function(t){this.table.rowDetail.toggleExpandRow(t),this.cdr.detectChanges()}},{key:"getDate",value:function(t){return h.b.toMysqlFormat(new Date(t))}},{key:"getPhone",value:function(t){var e=t.slice(-10);return"+".concat(t.slice(0,t.length-10)," ").concat(e.slice(0,3),"-").concat(e.slice(3,6),"-").concat(e.slice(6))}},{key:"stateControl",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:y,cssClass:"view-order",componentProps:{shipment:t}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.next=7,n.onWillDismiss();case 7:this.setPage({offset:0});case 8:case"end":return e.stop()}}),e,this)})))}}]),e}(),_.\u0275fac=function(t){return new(t||_)(f.Jb(p.a),f.Jb(k.a),f.Jb(c.I),f.Jb(f.h))},_.\u0275cmp=f.Db({type:_,selectors:[["app-shipping"]],viewQuery:function(t,e){var n;1&t&&f.wc(S,!0),2&t&&f.gc(n=f.Xb())&&(e.table=n.first)},decls:53,vars:34,consts:[["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only","color","danger"],["name","refresh","slot","icon-only"],["size","5"],["position","floating"],["type","text","debounce","500",3,"ngModel","ngModelChange","ionChange"],["size","3"],["display-format","DD-MM-YYYY",3,"ngModel","ionChange","ngModelChange"],["size","1"],["interface","popover",3,"ngModel","value","ngModelChange","ionChange"],[3,"value"],[1,"material","expandable","margin",3,"rowHeight","rows","headerHeight","footerHeight","columnMode","trackByProp","count","externalPaging","offset","limit","externalSorting","loadingIndicator","scrollbarH","reorderable","page"],["table",""],["rowHeight","auto"],["ngx-datatable-row-detail-template",""],["prop","ship_id","name","Shipping ID",3,"resizeable","sortable"],["ngx-datatable-cell-template",""],["prop","ord_id","name","Order ID",3,"resizeable","sortable"],["prop","cust_id","name","Customer ID",3,"resizeable","sortable"],["prop","ord_date","name","Order Date",3,"resizeable","sortable"],["prop","ship_est_date","name","Estimated Date",3,"resizeable","sortable"],["prop","emp_phone","name","Delivery phone",3,"resizeable","sortable"],[2,"user-select","text","-webkit-user-select","text","margin","0.5em","width","100%"],["fill","outline",3,"disabled","click"],[1,"table-link",3,"click"]],template:function(t,e){1&t&&(f.Ob(0,"ion-header"),f.Ob(1,"ion-toolbar"),f.Ob(2,"ion-title"),f.sc(3,"Shipments"),f.Nb(),f.Ob(4,"ion-buttons",0),f.Ob(5,"ion-button",1),f.Wb("click",(function(){return e.reset()})),f.Kb(6,"ion-icon",2),f.Nb(),f.Ob(7,"ion-button",1),f.Wb("click",(function(){return e.setPage({offset:0})})),f.Kb(8,"ion-icon",3),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Ob(9,"ion-content"),f.Ob(10,"ion-grid"),f.Ob(11,"ion-row"),f.Ob(12,"ion-col",4),f.Ob(13,"ion-item"),f.Ob(14,"ion-label",5),f.sc(15,"Search"),f.Nb(),f.Ob(16,"ion-input",6),f.Wb("ngModelChange",(function(t){return e.search=t}))("ionChange",(function(){return e.setPage({offset:0})})),f.Nb(),f.Nb(),f.Nb(),f.Ob(17,"ion-col",7),f.Ob(18,"ion-item"),f.Ob(19,"ion-label",5),f.sc(20,"Start date"),f.Nb(),f.Ob(21,"ion-datetime",8),f.Wb("ionChange",(function(){return e.setPage({offset:0})}))("ngModelChange",(function(t){return e.startDate=t})),f.Nb(),f.Nb(),f.Nb(),f.Ob(22,"ion-col",7),f.Ob(23,"ion-item"),f.Ob(24,"ion-label",5),f.sc(25,"End date"),f.Nb(),f.Ob(26,"ion-datetime",8),f.Wb("ionChange",(function(){return e.setPage({offset:0})}))("ngModelChange",(function(t){return e.endDate=t})),f.Nb(),f.Nb(),f.Nb(),f.Ob(27,"ion-col",9),f.Ob(28,"ion-item"),f.Kb(29,"ion-label",5),f.Ob(30,"ion-select",10),f.Wb("ngModelChange",(function(t){return e.numPerPage=t}))("ionChange",(function(){return e.setPage({offset:0})})),f.Ob(31,"ion-select-option",11),f.sc(32,"25"),f.Nb(),f.Ob(33,"ion-select-option",11),f.sc(34,"50"),f.Nb(),f.Ob(35,"ion-select-option",11),f.sc(36,"100"),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Ob(37,"ngx-datatable",12,13),f.Wb("page",(function(t){return e.setPage(t)})),f.Ob(39,"ngx-datatable-row-detail",14),f.qc(40,C,11,5,"ng-template",15),f.Nb(),f.Ob(41,"ngx-datatable-column",16),f.qc(42,M,2,1,"ng-template",17),f.Nb(),f.Ob(43,"ngx-datatable-column",18),f.qc(44,D,2,1,"ng-template",17),f.Nb(),f.Ob(45,"ngx-datatable-column",19),f.qc(46,P,2,1,"ng-template",17),f.Nb(),f.Ob(47,"ngx-datatable-column",20),f.qc(48,j,2,1,"ng-template",17),f.Nb(),f.Ob(49,"ngx-datatable-column",21),f.qc(50,Y,2,1,"ng-template",17),f.Nb(),f.Ob(51,"ngx-datatable-column",22),f.qc(52,W,2,1,"ng-template",17),f.Nb(),f.Nb(),f.Nb()),2&t&&(f.xb(16),f.dc("ngModel",e.search),f.xb(5),f.dc("ngModel",e.startDate),f.xb(5),f.dc("ngModel",e.endDate),f.xb(4),f.dc("ngModel",e.numPerPage)("value",25),f.xb(1),f.dc("value",25),f.xb(2),f.dc("value",50),f.xb(2),f.dc("value",100),f.xb(2),f.dc("rowHeight",50)("rows",e.shipments)("headerHeight",50)("footerHeight",50)("columnMode",e.columnMode)("trackByProp","updated")("count",e.total)("externalPaging",!0)("offset",e.pageNumber)("limit",e.numPerPage)("externalSorting",!0)("loadingIndicator",e.loading)("scrollbarH",!0)("reorderable",!0),f.xb(4),f.dc("resizeable",!0)("sortable",!0),f.xb(2),f.dc("resizeable",!0)("sortable",!0),f.xb(2),f.dc("resizeable",!0)("sortable",!0),f.xb(2),f.dc("resizeable",!0)("sortable",!0),f.xb(2),f.dc("resizeable",!0)("sortable",!0),f.xb(2),f.dc("resizeable",!0)("sortable",!0))},directives:[c.k,c.E,c.C,c.d,c.c,c.l,c.h,c.j,c.v,c.g,c.n,c.o,c.m,c.N,s.g,s.i,c.i,c.M,c.x,c.y,u.d,u.e,u.f,u.c,u.b],styles:["[_nghost-%COMP%]     ngx-datatable .datatable-scroll, [_nghost-%COMP%]     ngx-datatable .datatable-scroller{width:100%!important}"]}),_)}],E=((I=function t(){n(this,t)}).\u0275mod=f.Hb({type:I}),I.\u0275inj=f.Gb({factory:function(t){return new(t||I)},imports:[[b.j.forChild(q)],b.j]}),I),A=((z=function t(){n(this,t)}).\u0275mod=f.Hb({type:z}),z.\u0275inj=f.Gb({factory:function(t){return new(t||z)},imports:[[r.c,s.d,c.F,E,u.g]]}),z)}}])}();