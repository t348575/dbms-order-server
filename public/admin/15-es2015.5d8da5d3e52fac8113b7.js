(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WLUK:function(e,t,o){"use strict";o.r(t),o.d(t,"ProductsPageModule",(function(){return E}));var i=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),a=o("mrSG"),b=o("lDzL"),s=o("Ahj+"),l=o("2g2N"),d=o("fXoL"),u=o("S3Px");const p=["image"];function g(e,t){if(1&e){const e=d.Pb();d.Ob(0,"div"),d.Ob(1,"ion-item"),d.Ob(2,"ion-label",3),d.sc(3,"Weight"),d.Nb(),d.Ob(4,"ion-input",5),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().product.prod_dim=t})),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=d.Yb();d.xb(4),d.dc("disabled",e.edit)("ngModel",e.product.prod_dim)}}function h(e,t){if(1&e){const e=d.Pb();d.Ob(0,"div"),d.Ob(1,"ion-item"),d.Ob(2,"ion-label",3),d.sc(3,"Length"),d.Nb(),d.Ob(4,"ion-input",5),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().product.prod_dim.y=t})),d.Nb(),d.Nb(),d.Ob(5,"ion-item"),d.Ob(6,"ion-label",3),d.sc(7,"Width"),d.Nb(),d.Ob(8,"ion-input",5),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().product.prod_dim.x=t})),d.Nb(),d.Nb(),d.Ob(9,"ion-item"),d.Ob(10,"ion-label",3),d.sc(11,"Height"),d.Nb(),d.Ob(12,"ion-input",5),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().product.prod_dim.z=t})),d.Nb(),d.Nb(),d.Ob(13,"ion-item"),d.Ob(14,"ion-label",3),d.sc(15,"Weight"),d.Nb(),d.Ob(16,"ion-input",5),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().product.prod_dim.w=t})),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=d.Yb();d.xb(4),d.dc("disabled",e.edit)("ngModel",e.product.prod_dim.y),d.xb(4),d.dc("disabled",e.edit)("ngModel",e.product.prod_dim.x),d.xb(4),d.dc("disabled",e.edit)("ngModel",e.product.prod_dim.z),d.xb(4),d.dc("disabled",e.edit)("ngModel",e.product.prod_dim.w)}}function m(e,t){if(1&e){const e=d.Pb();d.Ob(0,"ion-grid"),d.Ob(1,"ion-row"),d.Ob(2,"ion-col",20),d.Ob(3,"ion-item"),d.Ob(4,"ion-label",3),d.sc(5,"Name"),d.Nb(),d.Ob(6,"ion-input",21),d.Wb("ngModelChange",(function(o){return d.jc(e),t.$implicit.name=o})),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-col",20),d.Ob(8,"ion-item"),d.Ob(9,"ion-label",3),d.sc(10,"Value"),d.Nb(),d.Ob(11,"ion-input",21),d.Wb("ngModelChange",(function(o){return d.jc(e),t.$implicit.value=o})),d.Nb(),d.Nb(),d.Nb(),d.Ob(12,"ion-col",22),d.Ob(13,"ion-button",23),d.Wb("click",(function(){d.jc(e);const o=t.index;return d.Yb().removeFeature(o)})),d.Kb(14,"ion-icon",24),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=t.$implicit,o=d.Yb();d.xb(6),d.dc("disabled",o.edit)("ngModel",e.name),d.xb(5),d.dc("disabled",o.edit)("ngModel",e.value)}}let f=(()=>{class e{constructor(e,t,o){this.productService=e,this.modalController=t,this.cdr=o,this.features=[],this.type="Single"}ngOnInit(){this.features=[];for(const e in this.product.prod_feat)this.features.push({name:e,value:this.product.prod_feat[e]});this.type=this.product.prod_type?"By weight":"Single",this.cdr.detectChanges()}change(e,t){if("number"!=typeof this.product.prod_dim)switch(e){case"w":this.product.prod_dim.w=t.target.value;break;case"x":this.product.prod_dim.x=t.target.value;break;case"y":this.product.prod_dim.y=t.target.value;break;case"z":this.product.prod_dim.z=t.target.value}}close(){this.modalController.dismiss()}swapType(){this.product.prod_type?(this.type="By weight",this.product.prod_dim=0):(this.type="Single",this.product.prod_dim={x:0,y:0,z:0,w:0})}upload(){this.image.nativeElement.files&&this.image.nativeElement.files[0]&&this.productService.uploadImage(this.image.nativeElement.files[0],this.product.prod_id).subscribe(()=>{this.image.nativeElement.value="",this.productService.getProductsByID([this.product.prod_id],1).subscribe(e=>{this.product=e[0],this.ngOnInit()})},()=>{l.a.toast("Image could not be uploaded!",3e3,"danger")})}addFeature(){this.features.push({name:"",value:""})}removeFeature(e){this.features.splice(e,1)}update(){this.product.prod_feat={};for(const e of this.features)this.product.prod_feat[e.name]=e.value;this.productService.updateProduct(this.product.prod_name,this.product.prod_desc,this.product.prod_stock,this.product.prod_dim,this.product.prod_feat,this.product.prod_price,this.product.prod_rating,"boolean"==typeof this.product.prod_type?+this.product.prod_type:this.product.prod_type,this.product.prod_id).subscribe(()=>{this.productService.getProductsByID([this.product.prod_id],1).subscribe(e=>{this.product=e[0],this.ngOnInit()})},()=>{l.a.toast("Could not update product!",3e3,"danger")})}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(u.a),d.Jb(r.I),d.Jb(d.h))},e.\u0275cmp=d.Db({type:e,selectors:[["app-view-detailed"]],viewQuery:function(e,t){var o;1&e&&d.wc(p,!0),2&e&&d.gc(o=d.Xb())&&(t.image=o.first)},inputs:{product:"product",edit:"edit"},decls:77,vars:21,consts:[["slot","end"],["fill","clear",1,"ion-float-right",3,"click"],["color","danger","slot","icon-only","name","close-circle-outline"],["position","floating"],["type","text","auto-grow","true",3,"disabled","ngModel","ngModelChange"],["type","number",3,"disabled","ngModel","ngModelChange"],[3,"ngModel","disabled","ngModelChange","ionChange"],[4,"ngIf"],["size","12"],[1,"full-width","full-height","center-middle"],["onerror","this.src='assets/alt-img.jpg'",2,"width","100px",3,"src"],["fill","outline",3,"disabled"],["lazy","true","slot","start","name","image"],["type","file","id","file-input","multiple","false","accept","image/png, image/jpeg",3,"disabled"],["image",""],[3,"disabled","click"],[4,"ngFor","ngForOf"],["fill","clear",1,"ion-float-right","margin-right",3,"disabled","click"],["name","add-circle","slot","icon-only","color","success"],[1,"ion-float-right","margin",3,"disabled","click"],["size","5"],["type","text",3,"disabled","ngModel","ngModelChange"],["size","2"],["fill","clear",3,"click"],["name","close-circle","slot","icon-only","color","danger"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3," Edit / View details "),d.Nb(),d.Ob(4,"ion-buttons",0),d.Ob(5,"ion-button",1),d.Wb("click",(function(){return t.close()})),d.Kb(6,"ion-icon",2),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-content"),d.Ob(8,"ion-item"),d.Ob(9,"ion-label"),d.sc(10),d.Nb(),d.Nb(),d.Kb(11,"br"),d.Ob(12,"ion-title"),d.sc(13,"Name"),d.Nb(),d.Ob(14,"ion-item"),d.Ob(15,"ion-label",3),d.sc(16,"Name"),d.Nb(),d.Ob(17,"ion-textarea",4),d.Wb("ngModelChange",(function(e){return t.product.prod_name=e})),d.Nb(),d.Nb(),d.Kb(18,"br"),d.Ob(19,"ion-title"),d.sc(20,"Description"),d.Nb(),d.Ob(21,"ion-item"),d.Ob(22,"ion-label",3),d.sc(23,"Description"),d.Nb(),d.Ob(24,"ion-textarea",4),d.Wb("ngModelChange",(function(e){return t.product.prod_desc=e})),d.Nb(),d.Nb(),d.Kb(25,"br"),d.Ob(26,"ion-title"),d.sc(27,"Stock"),d.Nb(),d.Ob(28,"ion-item"),d.Ob(29,"ion-label",3),d.sc(30,"Stock"),d.Nb(),d.Ob(31,"ion-input",5),d.Wb("ngModelChange",(function(e){return t.product.prod_stock=e})),d.Nb(),d.Nb(),d.Kb(32,"br"),d.Ob(33,"ion-title"),d.sc(34,"Price"),d.Nb(),d.Ob(35,"ion-item"),d.Ob(36,"ion-label",3),d.sc(37,"Price"),d.Nb(),d.Ob(38,"ion-input",5),d.Wb("ngModelChange",(function(e){return t.product.prod_price=e})),d.Nb(),d.Nb(),d.Kb(39,"br"),d.Ob(40,"ion-title"),d.sc(41,"Type"),d.Nb(),d.Ob(42,"ion-item"),d.Ob(43,"ion-label"),d.sc(44),d.Nb(),d.Ob(45,"ion-toggle",6),d.Wb("ngModelChange",(function(e){return t.product.prod_type=e}))("ionChange",(function(){return t.swapType()})),d.Nb(),d.Nb(),d.Kb(46,"br"),d.Ob(47,"ion-title"),d.sc(48,"Dimensions"),d.Nb(),d.qc(49,g,5,2,"div",7),d.qc(50,h,17,8,"div",7),d.Kb(51,"br"),d.Ob(52,"ion-title"),d.sc(53,"Image"),d.Nb(),d.Ob(54,"ion-item"),d.Ob(55,"ion-grid"),d.Ob(56,"ion-row"),d.Ob(57,"ion-col",8),d.Ob(58,"div",9),d.Kb(59,"img",10),d.Nb(),d.Nb(),d.Nb(),d.Ob(60,"ion-row"),d.Ob(61,"ion-col",8),d.Ob(62,"ion-button",11),d.Kb(63,"ion-icon",12),d.Kb(64,"input",13,14),d.Nb(),d.Ob(66,"ion-button",15),d.Wb("click",(function(){return t.upload()})),d.sc(67,"Change image"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Kb(68,"br"),d.Ob(69,"ion-title"),d.sc(70,"Features"),d.Nb(),d.Ob(71,"ion-list"),d.qc(72,m,15,4,"ion-grid",16),d.Ob(73,"ion-button",17),d.Wb("click",(function(){return t.addFeature()})),d.Kb(74,"ion-icon",18),d.Nb(),d.Nb(),d.Ob(75,"ion-button",19),d.Wb("click",(function(){return t.update()})),d.sc(76,"Update details"),d.Nb(),d.Nb()),2&e&&(d.xb(10),d.uc("ID: ",t.product.prod_id,""),d.xb(7),d.dc("disabled",t.edit)("ngModel",t.product.prod_name),d.xb(7),d.dc("disabled",t.edit)("ngModel",t.product.prod_desc),d.xb(7),d.dc("disabled",t.edit)("ngModel",t.product.prod_stock),d.xb(7),d.dc("disabled",t.edit)("ngModel",t.product.prod_price),d.xb(6),d.tc(t.type),d.xb(1),d.dc("ngModel",t.product.prod_type)("disabled",t.edit),d.xb(4),d.dc("ngIf",t.product.prod_type),d.xb(1),d.dc("ngIf",!t.product.prod_type),d.xb(9),d.dc("src",t.product.prod_img,d.lc),d.xb(3),d.dc("disabled",t.edit),d.xb(2),d.dc("disabled",t.edit),d.xb(2),d.dc("disabled",t.edit),d.xb(6),d.dc("ngForOf",t.features),d.xb(1),d.dc("disabled",t.edit),d.xb(2),d.dc("disabled",t.edit))},directives:[r.k,r.E,r.C,r.d,r.c,r.l,r.h,r.n,r.o,r.B,r.N,n.g,n.i,r.m,r.J,r.D,r.b,i.k,r.j,r.v,r.g,r.p,i.j],styles:[""]}),e})();var O=o("lGQG");const N=["table"];function x(e,t){if(1&e&&(d.Ob(0,"ion-select-option",39),d.sc(1),d.Nb()),2&e){const e=t.$implicit;d.dc("value",e.value),d.xb(1),d.tc(e.name)}}function v(e,t){if(1&e&&(d.Ob(0,"ion-select-option",39),d.sc(1),d.Nb()),2&e){const e=t.$implicit;d.dc("value",e.value),d.xb(1),d.tc(e.name)}}function _(e,t){if(1&e&&(d.Ob(0,"ion-select-option",39),d.sc(1),d.Nb()),2&e){const e=t.$implicit;d.dc("value",e),d.xb(1),d.tc(e)}}function w(e,t){if(1&e&&(d.Ob(0,"ion-select-option",39),d.sc(1),d.Nb()),2&e){const e=t.$implicit;d.dc("value",e.value),d.xb(1),d.tc(e.name)}}function y(e,t){if(1&e){const e=d.Pb();d.Ob(0,"ion-item"),d.Ob(1,"ion-label",16),d.sc(2,"Column"),d.Nb(),d.Ob(3,"ion-select",36),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().$implicit.operateValue=t})),d.qc(4,w,2,2,"ion-select-option",34),d.Nb(),d.Nb()}if(2&e){const e=d.Yb().$implicit,t=d.Yb();d.xb(3),d.dc("ngModel",e.operateValue),d.xb(1),d.dc("ngForOf",t.columns)}}function M(e,t){if(1&e){const e=d.Pb();d.Ob(0,"ion-item"),d.Ob(1,"ion-label",16),d.sc(2,"Value"),d.Nb(),d.Ob(3,"ion-input",40),d.Wb("ngModelChange",(function(t){return d.jc(e),d.Yb().$implicit.operateValue=t})),d.Nb(),d.Nb()}if(2&e){const e=d.Yb().$implicit;d.xb(3),d.dc("ngModel",e.operateValue)}}function C(e,t){if(1&e){const e=d.Pb();d.Ob(0,"ion-row"),d.Ob(1,"ion-col",31),d.Ob(2,"ion-item"),d.Ob(3,"ion-label"),d.sc(4),d.Nb(),d.Nb(),d.Nb(),d.Ob(5,"ion-col",32),d.Ob(6,"ion-item"),d.Ob(7,"ion-label",16),d.sc(8,"Column"),d.Nb(),d.Ob(9,"ion-select",33),d.Wb("ngModelChange",(function(o){return d.jc(e),t.$implicit.column=o}))("ionChange",(function(){d.jc(e);const o=t.index;return d.Yb().columnChange(o)})),d.qc(10,x,2,2,"ion-select-option",34),d.Nb(),d.Nb(),d.Nb(),d.Ob(11,"ion-col",35),d.Ob(12,"ion-item"),d.Ob(13,"ion-label",16),d.sc(14,"Operator"),d.Nb(),d.Ob(15,"ion-select",36),d.Wb("ngModelChange",(function(o){return d.jc(e),t.$implicit.operator=o})),d.qc(16,v,2,2,"ion-select-option",34),d.Nb(),d.Nb(),d.Nb(),d.Ob(17,"ion-col",32),d.Ob(18,"ion-item"),d.Ob(19,"ion-label",16),d.sc(20,"Type"),d.Nb(),d.Ob(21,"ion-select",36),d.Wb("ngModelChange",(function(o){return d.jc(e),t.$implicit.operateOn=o})),d.qc(22,_,2,2,"ion-select-option",34),d.Nb(),d.Nb(),d.Nb(),d.Ob(23,"ion-col",35),d.qc(24,y,5,2,"ion-item",37),d.qc(25,M,4,1,"ion-item",37),d.Nb(),d.Ob(26,"ion-col",31),d.Ob(27,"div",38),d.Ob(28,"ion-button",1),d.Wb("click",(function(){d.jc(e);const o=t.index;return d.Yb().removeQuery(o)})),d.Kb(29,"ion-icon",2),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&e){const e=t.$implicit,o=t.index,i=d.Yb();d.xb(4),d.tc(o+1),d.xb(5),d.dc("ngModel",e.column),d.xb(1),d.dc("ngForOf",i.columns),d.xb(5),d.dc("ngModel",e.operator),d.xb(1),d.dc("ngForOf",e.operators),d.xb(5),d.dc("ngModel",e.operateOn),d.xb(1),d.dc("ngForOf",e.operatesOn),d.xb(2),d.dc("ngIf","column"===e.operateOn),d.xb(1),d.dc("ngIf","value"===e.operateOn)}}function P(e,t){if(1&e){const e=d.Pb();d.Ob(0,"p",41),d.sc(1),d.Kb(2,"br"),d.sc(3),d.Kb(4,"br"),d.Ob(5,"ion-button",20),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().detailed(o)})),d.sc(6,"Edit / View detailed"),d.Nb(),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.uc(" Product ID: ",e.prod_id," "),d.xb(2),d.uc(" Product Name: ",e.prod_name," ")}}function k(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",42),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.prod_id)}}function q(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",42),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.prod_name)}}function W(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",42),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(0===e.prod_type?"Single":"Weight")}}function j(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",42),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.prod_price)}}function z(e,t){if(1&e){const e=d.Pb();d.Ob(0,"a",42),d.Wb("click",(function(){d.jc(e);const o=t.row;return d.Yb().toggleExpandRow(o)})),d.sc(1),d.Nb()}if(2&e){const e=t.row;d.xb(1),d.tc(e.prod_stock)}}const I=[{path:"",component:(()=>{class e{constructor(e,t,o,i){this.productsService=e,this.cdr=t,this.auth=o,this.modalController=i,this.products=[],this.columnMode=b.a.force,this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.role=s.a.Empty,this.search="",this.dir="asc",this.edit=!1,this.sortBy="prod_name",this.relations="",this.searchColumns=["prod_name","prod_desc"],this.queries=[],this.columns=[{name:"ID",value:"prod_id"},{name:"Name",value:"prod_name"},{name:"Description",value:"prod_desc"},{name:"Image",value:"prod_img"},{name:"Features",value:"prod_feat"},{name:"Dimensions",value:"prod_dim"},{name:"Type",value:"prod_type"},{name:"Price",value:"prod_price"},{name:"Stock",value:"prod_stock"},{name:"Rating",value:"prod_rating"}],this.setPage({offset:0}),this.role=this.auth.getRole(),this.edit=-1===[0,1,2,4,8].indexOf(this.role)}addQuery(){this.queries.push({column:"prod_name",operators:[{name:"Equals",value:"="},{name:"Not Equal",value:"!="},{name:"Contains",value:"%"},{name:"Does not contain",value:"!%"}],operator:"%",operatesOn:["value","column"],operateOn:"value",operateValue:""})}removeQuery(e){this.queries.splice(e,1)}ngOnInit(){}setPage(e){this.pageNumber=e.offset,this.loading=!0,this.queries.length>0?this.productsService.filterProducts(this.pageNumber,this.numPerPage,this.dir,this.sortBy,this.search,this.searchColumns,this.queries,this.relations).subscribe(e=>{this.products=e.data,this.products=[...this.products],this.total=e.total,this.loading=!1,this.cdr.detectChanges()}):this.productsService.getProducts(this.pageNumber,this.numPerPage,this.dir,this.sortBy,this.search,this.searchColumns).subscribe(e=>{this.products=e.data,this.products=[...this.products],this.total=e.total,this.loading=!1,this.cdr.detectChanges()})}reset(){this.pageNumber=0,this.numPerPage=25,this.loading=!1,this.total=0,this.search="",this.dir="asc",this.sortBy="prod_name",this.queries=[],this.searchColumns=["prod_name","prod_desc"],this.relations="",this.setPage({offset:0})}sort(e){this.loading=!0,this.sortBy=e.sorts[0].prop,this.dir=e.sorts[0].dir,this.setPage({offset:0})}toggleExpandRow(e){this.table.rowDetail.toggleExpandRow(e),this.cdr.detectChanges()}detailed(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:f,cssClass:"view-order",componentProps:{product:e,edit:!this.edit}});yield t.present()}))}columnChange(e){switch(this.queries[e].column){case"prod_id":case"prod_desc":case"prod_img":case"prod_name":this.queries[e].operators=[{name:"Equals",value:"="},{name:"Not Equal",value:"!="},{name:"Contains",value:"%"},{name:"Does not contain",value:"!%"}],this.queries[e].operator="%",this.queries[e].operatesOn=["value","column"],this.queries[e].operateOn="value",this.queries[e].operateValue="";break;case"prod_stock":case"prod_price":this.queries[e].operators=[{name:"Equals",value:"="},{name:"Not Equal",value:"!="},{name:"Greater than",value:">"},{name:"Less than",value:"<"},{name:"Greater than or equal",value:">="},{name:"Less than or equal",value:"<="},{name:"Range",value:"<>"}],this.queries[e].operator="=",this.queries[e].operatesOn=["value"],this.queries[e].operateOn="value",this.queries[e].operateValue=""}}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(u.a),d.Jb(d.h),d.Jb(O.a),d.Jb(r.I))},e.\u0275cmp=d.Db({type:e,selectors:[["app-products"]],viewQuery:function(e,t){var o;1&e&&d.wc(N,!0),2&e&&d.gc(o=d.Xb())&&(t.table=o.first)},decls:56,vars:28,consts:[["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only","color","danger"],["name","refresh","slot","icon-only"],[3,"keydown.enter"],["size","5"],["placeholder","Search",3,"ngModel","ngModelChange"],["size","4"],["placeholder","Search columns","multiple","true",3,"ngModel","ngModelChange"],["value","prod_id"],["value","prod_name"],["value","prod_desc"],["value","prod_price"],["value","prod_stock"],["value","prod_rating"],[4,"ngFor","ngForOf"],["position","floating"],[3,"ngModel","ngModelChange"],["size","7"],[1,"full-height","full-width","center-middle"],["fill","outline",3,"click"],[1,"material","expandable","margin",3,"rowHeight","rows","headerHeight","footerHeight","columnMode","trackByProp","count","externalPaging","offset","limit","externalSorting","loadingIndicator","scrollbarH","reorderable","page","sort"],["table",""],["rowHeight","auto"],["ngx-datatable-row-detail-template",""],["prop","prod_id","name","ID",3,"resizeable","sortable"],["ngx-datatable-cell-template",""],["prop","prod_name","name","Name",3,"resizeable","sortable"],["prop","prod_type","name","Type",3,"resizeable","sortable"],["prop","prod_price","name","Price",3,"resizeable","sortable"],["prop","prod_stock","name","Stock",3,"resizeable","sortable"],["size","1"],["size","2"],["interface","popover",3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","3"],["interface","popover",3,"ngModel","ngModelChange"],[4,"ngIf"],[1,"full-width","full-height","center-middle"],[3,"value"],["type","text",3,"ngModel","ngModelChange"],[2,"user-select","text","-webkit-user-select","text","margin","0.5em","width","100%"],[1,"table-link",3,"click"]],template:function(e,t){1&e&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.sc(3,"Products"),d.Nb(),d.Ob(4,"ion-buttons",0),d.Ob(5,"ion-button",1),d.Wb("click",(function(){return t.reset()})),d.Kb(6,"ion-icon",2),d.Nb(),d.Ob(7,"ion-button",1),d.Wb("click",(function(){return t.setPage({offset:0})})),d.Kb(8,"ion-icon",3),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(9,"ion-content",4),d.Wb("keydown.enter",(function(){return t.setPage({offset:0})})),d.Ob(10,"ion-grid"),d.Ob(11,"ion-row"),d.Ob(12,"ion-col",5),d.Ob(13,"ion-searchbar",6),d.Wb("ngModelChange",(function(e){return t.search=e})),d.Nb(),d.Nb(),d.Ob(14,"ion-col",7),d.Ob(15,"ion-select",8),d.Wb("ngModelChange",(function(e){return t.searchColumns=e})),d.Ob(16,"ion-select-option",9),d.sc(17,"ID"),d.Nb(),d.Ob(18,"ion-select-option",10),d.sc(19,"Name"),d.Nb(),d.Ob(20,"ion-select-option",11),d.sc(21,"Description"),d.Nb(),d.Ob(22,"ion-select-option",12),d.sc(23,"Price"),d.Nb(),d.Ob(24,"ion-select-option",13),d.sc(25,"Stock"),d.Nb(),d.Ob(26,"ion-select-option",14),d.sc(27,"Rating"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.qc(28,C,30,9,"ion-row",15),d.Ob(29,"ion-row"),d.Ob(30,"ion-col",5),d.Ob(31,"ion-item"),d.Ob(32,"ion-label",16),d.sc(33,"Relation between queries"),d.Nb(),d.Ob(34,"ion-textarea",17),d.Wb("ngModelChange",(function(e){return t.relations=e})),d.Nb(),d.Nb(),d.Nb(),d.Ob(35,"ion-col",18),d.Ob(36,"div",19),d.Ob(37,"ion-buttons"),d.Ob(38,"ion-button",20),d.Wb("click",(function(){return t.addQuery()})),d.sc(39," Add query "),d.Nb(),d.Ob(40,"ion-button",20),d.Wb("click",(function(){return t.setPage({offset:0})})),d.sc(41," Search "),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(42,"ngx-datatable",21,22),d.Wb("page",(function(e){return t.setPage(e)}))("sort",(function(e){return t.sort(e)})),d.Ob(44,"ngx-datatable-row-detail",23),d.qc(45,P,7,2,"ng-template",24),d.Nb(),d.Ob(46,"ngx-datatable-column",25),d.qc(47,k,2,1,"ng-template",26),d.Nb(),d.Ob(48,"ngx-datatable-column",27),d.qc(49,q,2,1,"ng-template",26),d.Nb(),d.Ob(50,"ngx-datatable-column",28),d.qc(51,W,2,1,"ng-template",26),d.Nb(),d.Ob(52,"ngx-datatable-column",29),d.qc(53,j,2,1,"ng-template",26),d.Nb(),d.Ob(54,"ngx-datatable-column",30),d.qc(55,z,2,1,"ng-template",26),d.Nb(),d.Nb(),d.Nb()),2&e&&(d.xb(13),d.dc("ngModel",t.search),d.xb(2),d.dc("ngModel",t.searchColumns),d.xb(13),d.dc("ngForOf",t.queries),d.xb(6),d.dc("ngModel",t.relations),d.xb(8),d.dc("rowHeight",50)("rows",t.products)("headerHeight",50)("footerHeight",50)("columnMode",t.columnMode)("trackByProp","updated")("count",t.total)("externalPaging",!0)("offset",t.pageNumber)("limit",t.numPerPage)("externalSorting",!0)("loadingIndicator",t.loading)("scrollbarH",!0)("reorderable",!0),d.xb(4),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0),d.xb(2),d.dc("resizeable",!0)("sortable",!0))},directives:[r.k,r.E,r.C,r.d,r.c,r.l,r.h,r.j,r.v,r.g,r.w,r.N,n.g,n.i,r.x,r.M,r.y,i.j,r.n,r.o,r.B,b.d,b.e,b.f,b.c,b.b,i.k,r.m],styles:["[_nghost-%COMP%]     ngx-datatable .datatable-scroll, [_nghost-%COMP%]     ngx-datatable .datatable-scroller{width:100%!important}"]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[c.j.forChild(I)],c.j]}),e})(),E=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[i.c,n.d,r.F,S,b.g]]}),e})()}}]);