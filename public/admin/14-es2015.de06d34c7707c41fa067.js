(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{h9W5:function(e,t,o){"use strict";o.r(t),o.d(t,"OrdersPageModule",(function(){return z}));var n=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),a=o("tyNb"),s=o("mrSG"),c=o("lDzL"),l=o("he5r"),b=o("Ahj+"),d=o("fXoL"),u=o("S3Px");function g(e,t){if(1&e&&(d.Ob(0,"ion-row"),d.Ob(1,"ion-col",5),d.Kb(2,"img",6),d.Nb(),d.Ob(3,"ion-col",5),d.Ob(4,"ion-text",7),d.sc(5),d.Nb(),d.Kb(6,"br"),d.Ob(7,"ion-text",7),d.sc(8),d.Nb(),d.Nb(),d.Nb()),2&e){const e=t.$implicit;d.xb(2),d.dc("src",e.product.prod_img,d.lc),d.xb(3),d.tc(e.product.prod_name),d.xb(3),d.uc("\u20b9",e.product.prod_price*e.count,"")}}let h=(()=>{class e{constructor(e,t,o){this.productsService=e,this.cdr=t,this.modalController=o}ngOnInit(){const e=this.order.ord_prod.map(e=>e.product.prod_id);this.productsService.getProductsByID(e).subscribe(e=>{for(const t of e)this.order.ord_prod[this.order.ord_prod.findIndex(e=>e.product.prod_id===t.prod_id)].product=t;this.cdr.detectChanges()})}close(){this.modalController.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(u.a),d.Jb(d.h),d.Jb(i.H))},e.\u0275cmp=d.Db({type:e,selectors:[["app-view-order"]],inputs:{order:"order"},decls:10,vars:2,consts:[["translucent",""],["slot","end"],["fill","clear",1,"ion-float-right",3,"click"],["color","danger","slot","icon-only","name","close-circle-outline"],[4,"ngFor","ngForOf"],["size","6"],["onerror","this.src='assets/alt-img.jpg'",2,"width","100px",3,"src"],["color","dark"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header",0),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3),d.Nb(),d.Ob(4,"ion-buttons",1),d.Ob(5,"ion-button",2),d.Wb("click",(function(){return t.close()})),d.Kb(6,"ion-icon",3),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-content"),d.Ob(8,"ion-grid"),d.qc(9,g,9,3,"ion-row",4),d.Nb(),d.Nb()),2&e&&(d.xb(3),d.uc(" Cart Items\xa0 Total: \u20b9",t.order.ord_summ.total," "),d.xb(6),d.dc("ngForOf",t.order.ord_prod))},directives:[i.k,i.D,i.B,i.d,i.c,i.l,i.h,i.j,n.j,i.v,i.g,i.z],styles:[""]}),e})();var p=o("2g2N"),m=o("cr+I"),f=o("tk/3");let O=(()=>{class e{constructor(e){this.http=e}getOrders(e,t,o,n,r,i){const a=m.stringify({page:e,pageSize:t,state:o,search:n,startDate:r,endDate:i});return this.http.get(`${l.a.server}/order/getOrders?${a}`)}changeOrderState(e,t){return this.http.post(l.a.server+"/order/changeState",{ordId:e,newState:t})}updateStock(e,t){return this.http.post(l.a.server+"/order/updateStock",{ordId:e,products:t})}}return e.\u0275fac=function(t){return new(t||e)(d.Sb(f.b))},e.\u0275prov=d.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var N=o("XjXr");function v(e,t){if(1&e&&(d.Ob(0,"ion-select-option",7),d.sc(1),d.Nb()),2&e){const e=t.$implicit;d.dc("disabled",e.disabled)("value",e.value),d.xb(1),d.tc(e.name)}}let x=(()=>{class e{constructor(e,t,o,n){this.modalController=e,this.orderService=t,this.alertController=o,this.shipping=n,this.states=[{name:"Awaiting confirmation",value:0,disabled:!0},{name:"Packaging",value:1,disabled:!0},{name:"Shipment sent",value:2,disabled:!0},{name:"Shipment reached",value:3,disabled:!0},{name:"Delivered",value:4,disabled:!0},{name:"Cancelled",value:-1,disabled:!0}]}ngOnInit(){this.currentState=this.order.state,this.originalState=this.currentState;for(const e of this.states)e.value===this.currentState&&(e.disabled=!1),e.disabled=e.value<this.currentState&&-1!==e.value}close(){this.modalController.dismiss()}confirm(){return Object(s.a)(this,void 0,void 0,(function*(){if(this.currentState!==this.originalState)switch(this.currentState){case 1:{let e=!1;const t=yield this.alertController.create({header:"Confirm!",message:"Automatically update inventory?",buttons:[{text:"Do not auto update",role:"cancel",cssClass:"secondary"},{text:"Perform auto update",handler:()=>{const t=[];for(const e of this.order.ord_prod)t.push({prod_id:e.product.prod_id,count:e.count});this.orderService.updateStock(this.order.ord_id,t).subscribe(t=>{e=t.status,console.log(t.status),t.status?(p.a.toast("Inventory updated successfully!"),this.changeState()):p.a.toast(`Update failed for ${t.failed.length} products!`,3e3,"danger")})}}]});yield t.present();break}case 2:this.shipping.addShipment(this.order.ord_id).subscribe(e=>{e.status?(p.a.toast("Shipment added successfully!"),this.changeState()):p.a.toast("Could not add shipment!",3e3,"danger")});break;default:this.changeState()}else this.modalController.dismiss(),p.a.toast("Same state selected!",3e3,"warning")}))}changeState(){this.orderService.changeOrderState(this.order.ord_id,this.currentState).subscribe(()=>{p.a.toast("Order state change successful!"),this.modalController.dismiss()},()=>{p.a.toast("Unsuccessful state change!",3e3,"danger"),this.modalController.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(i.H),d.Jb(O),d.Jb(i.a),d.Jb(N.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-change-order-state"]],inputs:{order:"order"},decls:14,vars:2,consts:[["slot","end"],["fill","clear",1,"ion-float-right",3,"click"],["color","danger","slot","icon-only","name","close-circle-outline"],["position","floating"],["interface","popover",3,"ngModel","ngModelChange"],[3,"disabled","value",4,"ngFor","ngForOf"],[3,"click"],[3,"disabled","value"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3," Change order state "),d.Nb(),d.Ob(4,"ion-buttons",0),d.Ob(5,"ion-button",1),d.Wb("click",(function(){return t.close()})),d.Kb(6,"ion-icon",2),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-item"),d.Ob(8,"ion-label",3),d.sc(9,"Select state"),d.Nb(),d.Ob(10,"ion-select",4),d.Wb("ngModelChange",(function(e){return t.currentState=e})),d.qc(11,v,2,3,"ion-select-option",5),d.Nb(),d.Nb(),d.Ob(12,"ion-button",6),d.Wb("click",(function(){return t.confirm()})),d.sc(13,"Confirm change"),d.Nb()),2&e&&(d.xb(10),d.dc("ngModel",t.currentState),d.xb(1),d.dc("ngForOf",t.states))},directives:[i.k,i.D,i.B,i.d,i.c,i.l,i.n,i.o,i.w,i.L,r.g,r.i,n.j,i.x],styles:[""]}),e})(),w=(()=>{class e{constructor(e){this.modalController=e}ngOnInit(){}close(){this.modalController.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(i.H))},e.\u0275cmp=d.Db({type:e,selectors:[["app-view-payment"]],inputs:{order:"order"},decls:27,vars:4,consts:[["translucent",""],["slot","end"],["fill","clear",1,"ion-float-right",3,"click"],["color","danger","slot","icon-only","name","close-circle-outline"],["size","6"],["position","floating"],["disabled","true","type","text",3,"value"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header",0),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3," Payment "),d.Nb(),d.Ob(4,"ion-buttons",1),d.Ob(5,"ion-button",2),d.Wb("click",(function(){return t.close()})),d.Kb(6,"ion-icon",3),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-grid"),d.Ob(8,"ion-row"),d.Ob(9,"ion-col",4),d.Ob(10,"ion-item"),d.Ob(11,"ion-label",5),d.sc(12,"Card"),d.Nb(),d.Kb(13,"ion-input",6),d.Nb(),d.Ob(14,"ion-item"),d.Ob(15,"ion-label",5),d.sc(16,"Name"),d.Nb(),d.Kb(17,"ion-input",6),d.Nb(),d.Nb(),d.Ob(18,"ion-col",4),d.Ob(19,"ion-item"),d.Ob(20,"ion-label",5),d.sc(21,"Expiry"),d.Nb(),d.Kb(22,"ion-input",6),d.Nb(),d.Ob(23,"ion-item"),d.Ob(24,"ion-label",5),d.sc(25,"CVC"),d.Nb(),d.Kb(26,"ion-input",6),d.Nb(),d.Nb(),d.Nb(),d.Nb()),2&e&&(d.xb(13),d.dc("value",t.order.ord_payment.card),d.xb(4),d.dc("value",t.order.ord_payment.name),d.xb(5),d.dc("value",t.order.ord_payment.exp),d.xb(4),d.dc("value",t.order.ord_payment.cvc))},directives:[i.k,i.D,i.B,i.d,i.c,i.l,i.j,i.v,i.g,i.n,i.o,i.m,i.M],styles:[""]}),e})();var C=o("lGQG");const y=["table"];function S(e,t){if(1&e){const e=d.Pb();d.Ob(0,"p",24),d.sc(1),d.Kb(2,"br"),d.sc(3),d.Kb(4,"br"),d.Ob(5,"ion-button",25),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().viewOrder(o)})),d.sc(6,"View Items"),d.Nb(),d.Ob(7,"ion-button",26),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().changeOrderState(o)})),d.sc(8,"Change State"),d.Nb(),d.Ob(9,"ion-button",27),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().viewPayment(o)})),d.sc(10,"View Payment"),d.Nb(),d.Nb()}if(2&e){const e=t.row,o=d.Yb();d.xb(1),d.uc(" Order ID: ",e.ord_id," "),d.xb(2),d.uc(" Customer ID: ",e.cust_id," "),d.xb(4),d.dc("disabled",!o.canChangeState),d.xb(2),d.dc("disabled",!o.canViewPayment)}}function P(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",28),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.ord_id)}}function k(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",28),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.cust_id)}}function D(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",28),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row,o=d.Yb();d.xb(1),d.tc(o.getDate(e.ord_date))}}function M(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",30),d.Wb("click",(function(){d.jc(e);const t=d.Yb().row;return d.Yb().changeOrderState(t)})),d.Kb(1,"ion-icon",31),d.Nb()}}function _(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",28),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb(),d.qc(2,M,2,0,"a",29)}if(2&e){const e=t.row,o=d.Yb();d.xb(1),d.tc(o.getState(e.state)),d.xb(1),d.dc("ngIf",o.canChangeState)}}function j(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",28),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.ord_summ.total)}}const W=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.orderService=e,this.cdr=t,this.auth=o,this.modalController=n,this.columnMode=c.a.force,this.orders=[],this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.state=0,this.role=b.a.Empty,this.canChangeState=!1,this.canViewPayment=!1,this.search="",this.setPage({offset:0}),this.role=this.auth.getRole(),this.canChangeState=-1===[0,2,5].indexOf(this.role),this.canViewPayment=-1===[0,1,2,3,5].indexOf(this.role)}ngOnInit(){}setPage(e){this.pageNumber=e.offset,this.loading=!0,this.orderService.getOrders(this.pageNumber,this.numPerPage,this.state,this.search,this.startDate,this.endDate).subscribe(e=>{this.orders=e.data,this.orders=[...this.orders],this.total=e.total,this.loading=!1,this.cdr.detectChanges()})}getDate(e){return l.b.toMysqlFormat(new Date(e))}toggleExpandRow(e){this.table.rowDetail.toggleExpandRow(e),this.cdr.detectChanges()}getState(e){switch(e){case 0:return"Awaiting confirmation";case 1:return"Packaging";case 2:return"Shipment sent";case 3:return"Shipment reached";case 4:return"Delivered";case-1:return"Cancelled"}}viewOrder(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:h,cssClass:"view-order",componentProps:{order:e}});yield t.present()}))}changeOrderState(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:x,cssClass:"auto-height",componentProps:{order:e}});yield t.present(),yield t.onWillDismiss(),this.setPage({offset:0})}))}viewPayment(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:w,cssClass:"auto-height",componentProps:{order:e}});yield t.present()}))}reset(){this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.state=0,this.search="",this.startDate=void 0,this.endDate=void 0,this.setPage({offset:0})}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(O),d.Jb(d.h),d.Jb(C.a),d.Jb(i.H))},e.\u0275cmp=d.Db({type:e,selectors:[["app-orders"]],viewQuery:function(e,t){var o;1&e&&d.wc(y,!0),2&e&&d.gc(o=d.Xb())&&(t.table=o.first)},decls:70,vars:41,consts:[["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only","color","danger"],["name","refresh","slot","icon-only"],["size","3"],["position","floating"],["type","text","debounce","500",3,"ngModel","ngModelChange","ionChange"],["size","4"],["interface","popover",3,"ngModel","value","ngModelChange","ionChange"],[3,"value"],["size","2"],["display-format","DD-MM-YYYY",3,"ngModel","ionChange","ngModelChange"],["size","1"],[1,"material","expandable","margin",3,"rowHeight","rows","headerHeight","footerHeight","columnMode","trackByProp","count","externalPaging","offset","limit","externalSorting","loadingIndicator","scrollbarH","reorderable","page"],["table",""],["rowHeight","auto"],["ngx-datatable-row-detail-template",""],["prop","ord_id","name","Order ID",3,"resizeable","sortable"],["ngx-datatable-cell-template",""],["prop","cust_id","name","Customer ID",3,"resizeable","sortable"],["prop","ord_date","name","Order Date",3,"resizeable","sortable"],["prop","state","name","State",3,"resizeable","sortable"],["ngx-datatable-cell-template","","class","row-center"],["prop","total","name","Total",3,"resizeable","sortable"],[2,"user-select","text","-webkit-user-select","text","margin","0.5em","width","100%"],["fill","outline",3,"click"],["fill","outline","color","danger",3,"disabled","click"],["fill","outline","color","warning",3,"disabled","click"],[1,"table-link",3,"click"],["class","middle-link",3,"click",4,"ngIf"],[1,"middle-link",3,"click"],["name","pencil-outline","color","dark","slot","end"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3,"Orders"),d.Nb(),d.Ob(4,"ion-buttons",0),d.Ob(5,"ion-button",1),d.Wb("click",(function(){return t.reset()})),d.Kb(6,"ion-icon",2),d.Nb(),d.Ob(7,"ion-button",1),d.Wb("click",(function(){return t.setPage({offset:0})})),d.Kb(8,"ion-icon",3),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(9,"ion-content"),d.Ob(10,"ion-grid"),d.Ob(11,"ion-row"),d.Ob(12,"ion-col",4),d.Ob(13,"ion-item"),d.Ob(14,"ion-label",5),d.sc(15,"Search"),d.Nb(),d.Ob(16,"ion-input",6),d.Wb("ngModelChange",(function(e){return t.search=e}))("ionChange",(function(){return t.setPage({offset:0})})),d.Nb(),d.Nb(),d.Nb(),d.Ob(17,"ion-col",7),d.Ob(18,"ion-item"),d.Ob(19,"ion-label",5),d.sc(20,"Order state"),d.Nb(),d.Ob(21,"ion-select",8),d.Wb("ngModelChange",(function(e){return t.state=e}))("ionChange",(function(){return t.setPage({offset:0})})),d.Ob(22,"ion-select-option",9),d.sc(23,"Any state"),d.Nb(),d.Ob(24,"ion-select-option",9),d.sc(25,"New orders"),d.Nb(),d.Ob(26,"ion-select-option",9),d.sc(27,"Packaging"),d.Nb(),d.Ob(28,"ion-select-option",9),d.sc(29,"Shipment sent"),d.Nb(),d.Ob(30,"ion-select-option",9),d.sc(31,"Shipment reached"),d.Nb(),d.Ob(32,"ion-select-option",9),d.sc(33,"Delivered"),d.Nb(),d.Ob(34,"ion-select-option",9),d.sc(35,"Cancelled"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(36,"ion-col",10),d.Ob(37,"ion-item"),d.Ob(38,"ion-label",5),d.sc(39,"Start date"),d.Nb(),d.Ob(40,"ion-datetime",11),d.Wb("ionChange",(function(){return t.setPage({offset:0})}))("ngModelChange",(function(e){return t.startDate=e})),d.Nb(),d.Nb(),d.Nb(),d.Ob(41,"ion-col",10),d.Ob(42,"ion-item"),d.Ob(43,"ion-label",5),d.sc(44,"End date"),d.Nb(),d.Ob(45,"ion-datetime",11),d.Wb("ionChange",(function(){return t.setPage({offset:0})}))("ngModelChange",(function(e){return t.endDate=e})),d.Nb(),d.Nb(),d.Nb(),d.Ob(46,"ion-col",12),d.Ob(47,"ion-item"),d.Kb(48,"ion-label",5),d.Ob(49,"ion-select",8),d.Wb("ngModelChange",(function(e){return t.numPerPage=e}))("ionChange",(function(){return t.setPage({offset:0})})),d.Ob(50,"ion-select-option",9),d.sc(51,"25"),d.Nb(),d.Ob(52,"ion-select-option",9),d.sc(53,"50"),d.Nb(),d.Ob(54,"ion-select-option",9),d.sc(55,"100"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(56,"ngx-datatable",13,14),d.Wb("page",(function(e){return t.setPage(e)})),d.Ob(58,"ngx-datatable-row-detail",15),d.qc(59,S,11,4,"ng-template",16),d.Nb(),d.Ob(60,"ngx-datatable-column",17),d.qc(61,P,2,1,"ng-template",18),d.Nb(),d.Ob(62,"ngx-datatable-column",19),d.qc(63,k,2,1,"ng-template",18),d.Nb(),d.Ob(64,"ngx-datatable-column",20),d.qc(65,D,2,1,"ng-template",18),d.Nb(),d.Ob(66,"ngx-datatable-column",21),d.qc(67,_,3,2,"ng-template",22),d.Nb(),d.Ob(68,"ngx-datatable-column",23),d.qc(69,j,2,1,"ng-template",18),d.Nb(),d.Nb(),d.Nb()),2&e&&(d.xb(16),d.dc("ngModel",t.search),d.xb(5),d.dc("ngModel",t.state)("value",0),d.xb(1),d.dc("value",-2),d.xb(2),d.dc("value",0),d.xb(2),d.dc("value",1),d.xb(2),d.dc("value",2),d.xb(2),d.dc("value",3),d.xb(2),d.dc("value",4),d.xb(2),d.dc("value",-1),d.xb(6),d.dc("ngModel",t.startDate),d.xb(5),d.dc("ngModel",t.endDate),d.xb(4),d.dc("ngModel",t.numPerPage)("value",25),d.xb(1),d.dc("value",25),d.xb(2),d.dc("value",50),d.xb(2),d.dc("value",100),d.xb(2),d.dc("rowHeight",50)("rows",t.orders)("headerHeight",50)("footerHeight",50)("columnMode",t.columnMode)("trackByProp","updated")("count",t.total)("externalPaging",!0)("offset",t.pageNumber)("limit",t.numPerPage)("externalSorting",!0)("loadingIndicator",t.loading)("scrollbarH",!0)("reorderable",!0),d.xb(4),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0))},directives:[i.k,i.D,i.B,i.d,i.c,i.l,i.h,i.j,i.v,i.g,i.n,i.o,i.m,i.M,r.g,r.i,i.w,i.L,i.x,i.i,c.d,c.e,c.f,c.c,c.b,n.k],styles:["[_nghost-%COMP%]     ngx-datatable .datatable-scroll, [_nghost-%COMP%]     ngx-datatable .datatable-scroller{width:100%!important}"]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(W)],a.j]}),e})(),z=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[n.c,r.d,i.E,I,c.g]]}),e})()}}]);