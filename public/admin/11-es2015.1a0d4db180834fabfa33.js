(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PgJR:function(e,t,o){"use strict";o.r(t),o.d(t,"EmployeePageModule",(function(){return k}));var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),s=o("mrSG"),b=o("lDzL"),c=o("Ahj+"),l=o("he5r"),g=o("JsUE"),p=o("fXoL"),d=o("cr+I"),u=o("tk/3");let m=(()=>{class e{constructor(e){this.http=e}getEmployees(e,t,o,n,i,r){const a=d.stringify({page:e,pageSize:t,jobTitle:o,search:n,dir:i,sortBy:r});return this.http.get(`${l.a.server}/employee/getEmployees?${a}`)}}return e.\u0275fac=function(t){return new(t||e)(p.Sb(u.b))},e.\u0275prov=p.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=o("lGQG");const f=["table"];function y(e,t){if(1&e){const e=p.Pb();p.Ob(0,"p",21),p.sc(1),p.Kb(2,"br"),p.sc(3),p.Kb(4,"br"),p.sc(5),p.Kb(6,"br"),p.Ob(7,"ion-button",22),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().viewPayment(o)})),p.sc(8,"View Payment Details"),p.Nb(),p.Nb()}if(2&e){const e=t.row,o=p.Yb();p.xb(1),p.uc(" Employee ID: ",e.emp_id," "),p.xb(2),p.uc(" Employee Hours: ",e.emp_hours," "),p.xb(2),p.uc(" Employee email: ",e.emp_email," "),p.xb(2),p.dc("disabled",!o.canViewPayment)}}function N(e,t){if(1&e){const e=p.Pb();p.Ob(0,"a",23),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().toggleExpandRow(o)})),p.sc(1),p.Nb()}if(2&e){const e=t.row;p.xb(1),p.tc(e.emp_id)}}function O(e,t){if(1&e){const e=p.Pb();p.Ob(0,"a",23),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().toggleExpandRow(o)})),p.sc(1),p.Nb()}if(2&e){const e=t.row;p.xb(1),p.tc(e.emp_name)}}function w(e,t){if(1&e){const e=p.Pb();p.Ob(0,"a",23),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().toggleExpandRow(o)})),p.sc(1),p.Nb()}if(2&e){const e=t.row,o=p.Yb();p.xb(1),p.tc(o.getDate(e.emp_dob))}}function x(e,t){if(1&e){const e=p.Pb();p.Ob(0,"a",23),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().toggleExpandRow(o)})),p.sc(1),p.Nb()}if(2&e){const e=t.row;p.xb(1),p.tc(e.emp_job_title)}}function P(e,t){if(1&e){const e=p.Pb();p.Ob(0,"a",23),p.Wb("click",(function(){p.jc(e);const o=t.row;return p.Yb().toggleExpandRow(o)})),p.sc(1),p.Nb()}if(2&e){const e=t.row;p.xb(1),p.tc(e.emp_phone)}}const v=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.employeeService=e,this.cdr=t,this.auth=o,this.modalController=n,this.columnMode=b.a.force,this.orders=[],this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.dir="asc",this.sortBy="emp_name",this.jobTitle="Any Job Title",this.role=c.a.Empty,this.canViewPayment=!1,this.search="",this.setPage({offset:0}),this.role=this.auth.getRole(),this.canViewPayment=-1===[0,1,2,3,4,5].indexOf(this.role)}ngOnInit(){}setPage(e){this.pageNumber=e.offset,this.loading=!0,this.employeeService.getEmployees(this.pageNumber,this.numPerPage,this.jobTitle,this.search,this.dir,this.sortBy).subscribe(e=>{console.log(e),this.orders=e.data,this.orders=[...this.orders],this.total=e.total,this.loading=!1,this.cdr.detectChanges()})}reset(){}toggleExpandRow(e){console.log(e),this.table.rowDetail.toggleExpandRow(e),this.cdr.detectChanges()}getDate(e){return l.b.toMysqlFormat(new Date(e)).slice(0,10)}viewPayment(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:g.a,cssClass:"auto-height",componentProps:{payment:e.emp_payment}});yield t.present()}))}sort(e){this.loading=!0,this.sortBy=e.sorts[0].prop,this.dir=e.sorts[0].dir,this.setPage({offset:0})}}return e.\u0275fac=function(t){return new(t||e)(p.Jb(m),p.Jb(p.h),p.Jb(h.a),p.Jb(r.I))},e.\u0275cmp=p.Db({type:e,selectors:[["app-employee"]],viewQuery:function(e,t){var o;1&e&&p.wc(f,!0),2&e&&p.gc(o=p.Xb())&&(t.table=o.first)},decls:66,vars:32,consts:[["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only","color","danger"],["name","refresh","slot","icon-only"],["size","3"],["position","floating"],["type","text","debounce","500",3,"ngModel","ngModelChange","ionChange"],["size","4"],["interface","popover",3,"ngModel","value","ngModelChange","ionChange"],["size","1"],[3,"value"],[1,"material","expandable","margin",3,"rowHeight","rows","headerHeight","footerHeight","columnMode","trackByProp","count","externalPaging","offset","limit","externalSorting","loadingIndicator","scrollbarH","reorderable","page","sort"],["table",""],["rowHeight","auto"],["ngx-datatable-row-detail-template",""],["prop","emp_id","name","Employee ID",3,"resizeable","sortable"],["ngx-datatable-cell-template",""],["prop","emp_name","name","Employee Name",3,"resizeable","sortable"],["prop","emp_dob","name","Employee DOB",3,"resizeable","sortable"],["prop","emp_job_title","name","Employee Job title",3,"resizeable","sortable"],["prop","emp_phone","name","Employee Phone",3,"resizeable","sortable"],[2,"user-select","text","-webkit-user-select","text","margin","0.5em","width","100%"],["fill","outline",3,"disabled","click"],[1,"table-link",3,"click"]],template:function(e,t){1&e&&(p.Ob(0,"ion-header"),p.Ob(1,"ion-toolbar"),p.Ob(2,"ion-title"),p.sc(3,"Employee"),p.Nb(),p.Ob(4,"ion-buttons",0),p.Ob(5,"ion-button",1),p.Wb("click",(function(){return t.reset()})),p.Kb(6,"ion-icon",2),p.Nb(),p.Ob(7,"ion-button",1),p.Wb("click",(function(){return t.setPage({offset:0})})),p.Kb(8,"ion-icon",3),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-content"),p.Ob(10,"ion-grid"),p.Ob(11,"ion-row"),p.Ob(12,"ion-col",4),p.Ob(13,"ion-item"),p.Ob(14,"ion-label",5),p.sc(15,"Search"),p.Nb(),p.Ob(16,"ion-input",6),p.Wb("ngModelChange",(function(e){return t.search=e}))("ionChange",(function(){return t.setPage({offset:0})})),p.Nb(),p.Nb(),p.Nb(),p.Ob(17,"ion-col",7),p.Ob(18,"ion-item"),p.Ob(19,"ion-label",5),p.sc(20,"Order state"),p.Nb(),p.Ob(21,"ion-select",8),p.Wb("ngModelChange",(function(e){return t.jobTitle=e}))("ionChange",(function(){return t.setPage({offset:0})})),p.Ob(22,"ion-select-option"),p.sc(23,"Any Job Title"),p.Nb(),p.Ob(24,"ion-select-option"),p.sc(25,"Delivery Primary"),p.Nb(),p.Ob(26,"ion-select-option"),p.sc(27,"Delivery Assistant"),p.Nb(),p.Ob(28,"ion-select-option"),p.sc(29,"Warehouse Clerk"),p.Nb(),p.Ob(30,"ion-select-option"),p.sc(31,"Customer Service"),p.Nb(),p.Ob(32,"ion-select-option"),p.sc(33,"General Clerk"),p.Nb(),p.Ob(34,"ion-select-option"),p.sc(35,"General Manager"),p.Nb(),p.Ob(36,"ion-select-option"),p.sc(37,"WareHouse Manager"),p.Nb(),p.Ob(38,"ion-select-option"),p.sc(39,"Shipping Manager"),p.Nb(),p.Ob(40,"ion-select-option"),p.sc(41,"Admin"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(42,"ion-col",9),p.Ob(43,"ion-item"),p.Kb(44,"ion-label",5),p.Ob(45,"ion-select",8),p.Wb("ngModelChange",(function(e){return t.numPerPage=e}))("ionChange",(function(){return t.setPage({offset:0})})),p.Ob(46,"ion-select-option",10),p.sc(47,"25"),p.Nb(),p.Ob(48,"ion-select-option",10),p.sc(49,"50"),p.Nb(),p.Ob(50,"ion-select-option",10),p.sc(51,"100"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(52,"ngx-datatable",11,12),p.Wb("page",(function(e){return t.setPage(e)}))("sort",(function(e){return t.sort(e)})),p.Ob(54,"ngx-datatable-row-detail",13),p.qc(55,y,9,4,"ng-template",14),p.Nb(),p.Ob(56,"ngx-datatable-column",15),p.qc(57,N,2,1,"ng-template",16),p.Nb(),p.Ob(58,"ngx-datatable-column",17),p.qc(59,O,2,1,"ng-template",16),p.Nb(),p.Ob(60,"ngx-datatable-column",18),p.qc(61,w,2,1,"ng-template",16),p.Nb(),p.Ob(62,"ngx-datatable-column",19),p.qc(63,x,2,1,"ng-template",16),p.Nb(),p.Ob(64,"ngx-datatable-column",20),p.qc(65,P,2,1,"ng-template",16),p.Nb(),p.Nb(),p.Nb()),2&e&&(p.xb(16),p.dc("ngModel",t.search),p.xb(5),p.dc("ngModel",t.jobTitle)("value",0),p.xb(24),p.dc("ngModel",t.numPerPage)("value",25),p.xb(1),p.dc("value",25),p.xb(2),p.dc("value",50),p.xb(2),p.dc("value",100),p.xb(2),p.dc("rowHeight",50)("rows",t.orders)("headerHeight",50)("footerHeight",50)("columnMode",t.columnMode)("trackByProp","updated")("count",t.total)("externalPaging",!0)("offset",t.pageNumber)("limit",t.numPerPage)("externalSorting",!0)("loadingIndicator",t.loading)("scrollbarH",!0)("reorderable",!0),p.xb(4),p.dc("resizeable",!0)("sortable",!0),p.xb(2),p.dc("resizeable",!0)("sortable",!0),p.xb(2),p.dc("resizeable",!0)("sortable",!0),p.xb(2),p.dc("resizeable",!0)("sortable",!0),p.xb(2),p.dc("resizeable",!0)("sortable",!0))},directives:[r.k,r.E,r.C,r.d,r.c,r.l,r.h,r.j,r.v,r.g,r.n,r.o,r.m,r.N,i.g,i.i,r.x,r.M,r.y,b.d,b.e,b.f,b.c,b.b],styles:["[_nghost-%COMP%]     ngx-datatable .datatable-scroll, [_nghost-%COMP%]     ngx-datatable .datatable-scroller{width:100%!important}"]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(v)],a.j]}),e})(),k=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(t){return new(t||e)},imports:[[n.c,i.d,r.F,E,b.g]]}),e})()}}]);