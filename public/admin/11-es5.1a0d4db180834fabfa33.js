!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PgJR:function(t,o,i){"use strict";i.r(o),i.d(o,"EmployeePageModule",(function(){return W}));var a,c=i("ofXK"),l=i("3Pt+"),b=i("TEn/"),s=i("tyNb"),u=i("mrSG"),p=i("lDzL"),g=i("Ahj+"),d=i("he5r"),f=i("JsUE"),m=i("fXoL"),h=i("cr+I"),y=i("tk/3"),v=((a=function(){function e(t){n(this,e),this.http=t}return r(e,[{key:"getEmployees",value:function(e,t,n,o,r,i){var a=h.stringify({page:e,pageSize:t,jobTitle:n,search:o,dir:r,sortBy:i});return this.http.get("".concat(d.a.server,"/employee/getEmployees?").concat(a))}}]),e}()).\u0275fac=function(e){return new(e||a)(m.Sb(y.b))},a.\u0275prov=m.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),w=i("lGQG"),O=["table"];function N(e,t){if(1&e){var n=m.Pb();m.Ob(0,"p",21),m.sc(1),m.Kb(2,"br"),m.sc(3),m.Kb(4,"br"),m.sc(5),m.Kb(6,"br"),m.Ob(7,"ion-button",22),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().viewPayment(e)})),m.sc(8,"View Payment Details"),m.Nb(),m.Nb()}if(2&e){var o=t.row,r=m.Yb();m.xb(1),m.uc(" Employee ID: ",o.emp_id," "),m.xb(2),m.uc(" Employee Hours: ",o.emp_hours," "),m.xb(2),m.uc(" Employee email: ",o.emp_email," "),m.xb(2),m.dc("disabled",!r.canViewPayment)}}function x(e,t){if(1&e){var n=m.Pb();m.Ob(0,"a",23),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().toggleExpandRow(e)})),m.sc(1),m.Nb()}if(2&e){var o=t.row;m.xb(1),m.tc(o.emp_id)}}function P(e,t){if(1&e){var n=m.Pb();m.Ob(0,"a",23),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().toggleExpandRow(e)})),m.sc(1),m.Nb()}if(2&e){var o=t.row;m.xb(1),m.tc(o.emp_name)}}function k(e,t){if(1&e){var n=m.Pb();m.Ob(0,"a",23),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().toggleExpandRow(e)})),m.sc(1),m.Nb()}if(2&e){var o=t.row,r=m.Yb();m.xb(1),m.tc(r.getDate(o.emp_dob))}}function E(e,t){if(1&e){var n=m.Pb();m.Ob(0,"a",23),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().toggleExpandRow(e)})),m.sc(1),m.Nb()}if(2&e){var o=t.row;m.xb(1),m.tc(o.emp_job_title)}}function j(e,t){if(1&e){var n=m.Pb();m.Ob(0,"a",23),m.Wb("click",(function(){m.jc(n);var e=t.row;return m.Yb().toggleExpandRow(e)})),m.sc(1),m.Nb()}if(2&e){var o=t.row;m.xb(1),m.tc(o.emp_phone)}}var C,M,_,z=[{path:"",component:(C=function(){function t(e,o,r,i){n(this,t),this.employeeService=e,this.cdr=o,this.auth=r,this.modalController=i,this.columnMode=p.a.force,this.orders=[],this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.dir="asc",this.sortBy="emp_name",this.jobTitle="Any Job Title",this.role=g.a.Empty,this.canViewPayment=!1,this.search="",this.setPage({offset:0}),this.role=this.auth.getRole(),this.canViewPayment=-1===[0,1,2,3,4,5].indexOf(this.role)}return r(t,[{key:"ngOnInit",value:function(){}},{key:"setPage",value:function(t){var n=this;this.pageNumber=t.offset,this.loading=!0,this.employeeService.getEmployees(this.pageNumber,this.numPerPage,this.jobTitle,this.search,this.dir,this.sortBy).subscribe((function(t){console.log(t),n.orders=t.data,n.orders=e(n.orders),n.total=t.total,n.loading=!1,n.cdr.detectChanges()}))}},{key:"reset",value:function(){}},{key:"toggleExpandRow",value:function(e){console.log(e),this.table.rowDetail.toggleExpandRow(e),this.cdr.detectChanges()}},{key:"getDate",value:function(e){return d.b.toMysqlFormat(new Date(e)).slice(0,10)}},{key:"viewPayment",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:f.a,cssClass:"auto-height",componentProps:{payment:e.emp_payment}});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"sort",value:function(e){this.loading=!0,this.sortBy=e.sorts[0].prop,this.dir=e.sorts[0].dir,this.setPage({offset:0})}}]),t}(),C.\u0275fac=function(e){return new(e||C)(m.Jb(v),m.Jb(m.h),m.Jb(w.a),m.Jb(b.I))},C.\u0275cmp=m.Db({type:C,selectors:[["app-employee"]],viewQuery:function(e,t){var n;1&e&&m.wc(O,!0),2&e&&m.gc(n=m.Xb())&&(t.table=n.first)},decls:66,vars:32,consts:[["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only","color","danger"],["name","refresh","slot","icon-only"],["size","3"],["position","floating"],["type","text","debounce","500",3,"ngModel","ngModelChange","ionChange"],["size","4"],["interface","popover",3,"ngModel","value","ngModelChange","ionChange"],["size","1"],[3,"value"],[1,"material","expandable","margin",3,"rowHeight","rows","headerHeight","footerHeight","columnMode","trackByProp","count","externalPaging","offset","limit","externalSorting","loadingIndicator","scrollbarH","reorderable","page","sort"],["table",""],["rowHeight","auto"],["ngx-datatable-row-detail-template",""],["prop","emp_id","name","Employee ID",3,"resizeable","sortable"],["ngx-datatable-cell-template",""],["prop","emp_name","name","Employee Name",3,"resizeable","sortable"],["prop","emp_dob","name","Employee DOB",3,"resizeable","sortable"],["prop","emp_job_title","name","Employee Job title",3,"resizeable","sortable"],["prop","emp_phone","name","Employee Phone",3,"resizeable","sortable"],[2,"user-select","text","-webkit-user-select","text","margin","0.5em","width","100%"],["fill","outline",3,"disabled","click"],[1,"table-link",3,"click"]],template:function(e,t){1&e&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar"),m.Ob(2,"ion-title"),m.sc(3,"Employee"),m.Nb(),m.Ob(4,"ion-buttons",0),m.Ob(5,"ion-button",1),m.Wb("click",(function(){return t.reset()})),m.Kb(6,"ion-icon",2),m.Nb(),m.Ob(7,"ion-button",1),m.Wb("click",(function(){return t.setPage({offset:0})})),m.Kb(8,"ion-icon",3),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(9,"ion-content"),m.Ob(10,"ion-grid"),m.Ob(11,"ion-row"),m.Ob(12,"ion-col",4),m.Ob(13,"ion-item"),m.Ob(14,"ion-label",5),m.sc(15,"Search"),m.Nb(),m.Ob(16,"ion-input",6),m.Wb("ngModelChange",(function(e){return t.search=e}))("ionChange",(function(){return t.setPage({offset:0})})),m.Nb(),m.Nb(),m.Nb(),m.Ob(17,"ion-col",7),m.Ob(18,"ion-item"),m.Ob(19,"ion-label",5),m.sc(20,"Order state"),m.Nb(),m.Ob(21,"ion-select",8),m.Wb("ngModelChange",(function(e){return t.jobTitle=e}))("ionChange",(function(){return t.setPage({offset:0})})),m.Ob(22,"ion-select-option"),m.sc(23,"Any Job Title"),m.Nb(),m.Ob(24,"ion-select-option"),m.sc(25,"Delivery Primary"),m.Nb(),m.Ob(26,"ion-select-option"),m.sc(27,"Delivery Assistant"),m.Nb(),m.Ob(28,"ion-select-option"),m.sc(29,"Warehouse Clerk"),m.Nb(),m.Ob(30,"ion-select-option"),m.sc(31,"Customer Service"),m.Nb(),m.Ob(32,"ion-select-option"),m.sc(33,"General Clerk"),m.Nb(),m.Ob(34,"ion-select-option"),m.sc(35,"General Manager"),m.Nb(),m.Ob(36,"ion-select-option"),m.sc(37,"WareHouse Manager"),m.Nb(),m.Ob(38,"ion-select-option"),m.sc(39,"Shipping Manager"),m.Nb(),m.Ob(40,"ion-select-option"),m.sc(41,"Admin"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(42,"ion-col",9),m.Ob(43,"ion-item"),m.Kb(44,"ion-label",5),m.Ob(45,"ion-select",8),m.Wb("ngModelChange",(function(e){return t.numPerPage=e}))("ionChange",(function(){return t.setPage({offset:0})})),m.Ob(46,"ion-select-option",10),m.sc(47,"25"),m.Nb(),m.Ob(48,"ion-select-option",10),m.sc(49,"50"),m.Nb(),m.Ob(50,"ion-select-option",10),m.sc(51,"100"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(52,"ngx-datatable",11,12),m.Wb("page",(function(e){return t.setPage(e)}))("sort",(function(e){return t.sort(e)})),m.Ob(54,"ngx-datatable-row-detail",13),m.qc(55,N,9,4,"ng-template",14),m.Nb(),m.Ob(56,"ngx-datatable-column",15),m.qc(57,x,2,1,"ng-template",16),m.Nb(),m.Ob(58,"ngx-datatable-column",17),m.qc(59,P,2,1,"ng-template",16),m.Nb(),m.Ob(60,"ngx-datatable-column",18),m.qc(61,k,2,1,"ng-template",16),m.Nb(),m.Ob(62,"ngx-datatable-column",19),m.qc(63,E,2,1,"ng-template",16),m.Nb(),m.Ob(64,"ngx-datatable-column",20),m.qc(65,j,2,1,"ng-template",16),m.Nb(),m.Nb(),m.Nb()),2&e&&(m.xb(16),m.dc("ngModel",t.search),m.xb(5),m.dc("ngModel",t.jobTitle)("value",0),m.xb(24),m.dc("ngModel",t.numPerPage)("value",25),m.xb(1),m.dc("value",25),m.xb(2),m.dc("value",50),m.xb(2),m.dc("value",100),m.xb(2),m.dc("rowHeight",50)("rows",t.orders)("headerHeight",50)("footerHeight",50)("columnMode",t.columnMode)("trackByProp","updated")("count",t.total)("externalPaging",!0)("offset",t.pageNumber)("limit",t.numPerPage)("externalSorting",!0)("loadingIndicator",t.loading)("scrollbarH",!0)("reorderable",!0),m.xb(4),m.dc("resizeable",!0)("sortable",!0),m.xb(2),m.dc("resizeable",!0)("sortable",!0),m.xb(2),m.dc("resizeable",!0)("sortable",!0),m.xb(2),m.dc("resizeable",!0)("sortable",!0),m.xb(2),m.dc("resizeable",!0)("sortable",!0))},directives:[b.k,b.E,b.C,b.d,b.c,b.l,b.h,b.j,b.v,b.g,b.n,b.o,b.m,b.N,l.g,l.i,b.x,b.M,b.y,p.d,p.e,p.f,p.c,p.b],styles:["[_nghost-%COMP%]     ngx-datatable .datatable-scroll, [_nghost-%COMP%]     ngx-datatable .datatable-scroller{width:100%!important}"]}),C)}],S=((_=function e(){n(this,e)}).\u0275mod=m.Hb({type:_}),_.\u0275inj=m.Gb({factory:function(e){return new(e||_)},imports:[[s.j.forChild(z)],s.j]}),_),W=((M=function e(){n(this,e)}).\u0275mod=m.Hb({type:M}),M.\u0275inj=m.Gb({factory:function(e){return new(e||M)},imports:[[c.c,l.d,b.F,S,p.g]]}),M)}}])}();