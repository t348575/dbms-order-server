!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{oFOw:function(i,n,o){"use strict";o.r(n),o.d(n,"ViewOrderPageModule",(function(){return w}));var r=o("ofXK"),c=o("3Pt+"),b=o("TEn/"),s=o("tyNb"),a=o("he5r"),d=o("fXoL"),u=o("kVqo");function l(e,t){if(1&e&&(d.Kb(0,"ion-item"),d.Kb(1,"ion-grid"),d.Kb(2,"ion-row"),d.Kb(3,"ion-col",5),d.Ib(4,"img",11),d.Jb(),d.Kb(5,"ion-col",12),d.Kb(6,"ion-text"),d.fc(7),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e){var i=t.$implicit;d.xb(4),d.Xb("src",i.product.prod_img,d.cc),d.xb(3),d.gc(i.product.prod_name)}}function f(e,t){if(1&e&&(d.Kb(0,"ion-item"),d.Kb(1,"ion-grid"),d.Kb(2,"ion-row"),d.Kb(3,"ion-col",2),d.fc(4),d.Jb(),d.Kb(5,"ion-col",5),d.fc(6),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e){var i=t.$implicit;d.xb(4),d.ic(" ",i.product.prod_name," - ",i.count," "),d.xb(2),d.hc(" \u20b9",i.count*i.product.prod_price," ")}}var m,p,h,g=function(e){return["/shipping",e]},J=[{path:"",component:(m=function(){function i(t,n){var o=this;e(this,i),this.activateRoute=t,this.orderService=n,this.id="",this.order={ord_id:"",ord_prod:[],cust_id:"",ord_date:"",state:0,ord_summ:{items:[],total:0,details:{name:"",phone:"",address:{country:"",region:"",city:"",pinCode:0,address:""}}}},this.items=[],this.activateRoute.paramMap.subscribe((function(e){o.id=e.get("id"),o.orderService.getOrder(o.id).subscribe((function(e){o.order=e[0],o.items=e.slice(1)}))}))}var n,o,r;return n=i,(o=[{key:"getStatus",value:function(e){switch(e){case 0:return"Awaiting confirmation";case 1:return"Order being packaged";case 2:return"Shipment has been sent out";case 3:return"Shipment has reached final destination";case 4:return"Order has been delivered";case-1:return"Order cancelled"}}},{key:"toMysqlFormat",value:function(e){return Object(a.b)(e)}},{key:"ngOnInit",value:function(){}}])&&t(n.prototype,o),r&&t(n,r),i}(),m.\u0275fac=function(e){return new(e||m)(d.Hb(s.a),d.Hb(u.a))},m.\u0275cmp=d.Bb({type:m,selectors:[["app-view-order"]],decls:28,vars:9,consts:[[1,"full-height","full-width"],["size","8"],["size","10"],[1,"some-title"],[1,"some-small-title"],["size","2"],[1,"ion-float-right","shipping",3,"disabled","routerLink"],["size","12"],[4,"ngFor","ngForOf"],["size","4"],[1,"ion-float-end"],["onerror","this.src='assets/alt-img.jpg'",2,"width","100px",3,"src"],["size","7"]],template:function(e,t){1&e&&(d.Kb(0,"ion-content"),d.Kb(1,"ion-grid",0),d.Kb(2,"ion-row"),d.Kb(3,"ion-col",1),d.Kb(4,"ion-grid"),d.Kb(5,"ion-row"),d.Kb(6,"ion-col",2),d.Kb(7,"ion-title",3),d.fc(8),d.Jb(),d.Kb(9,"ion-title",4),d.fc(10),d.Jb(),d.Jb(),d.Kb(11,"ion-col",5),d.Kb(12,"ion-button",6),d.fc(13,"Shipping status"),d.Jb(),d.Jb(),d.Jb(),d.Kb(14,"ion-row"),d.Kb(15,"ion-col",7),d.Kb(16,"ion-list"),d.ec(17,l,8,2,"ion-item",8),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(18,"ion-col",9),d.Kb(19,"ion-card"),d.Kb(20,"ion-card-header"),d.Kb(21,"ion-card-title"),d.fc(22," Order summary "),d.Jb(),d.Jb(),d.Kb(23,"ion-card-content"),d.Kb(24,"ion-list"),d.ec(25,f,7,3,"ion-item",8),d.Jb(),d.Jb(),d.Kb(26,"h3",10),d.fc(27),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e&&(d.xb(8),d.hc("Status: ",t.getStatus(t.order.state),""),d.xb(2),d.hc("Order placed on: ",t.toMysqlFormat(t.order.ord_date),""),d.xb(2),d.Xb("disabled",t.order.state<2)("routerLink",d.Zb(7,g,t.order.ord_id)),d.xb(5),d.Xb("ngForOf",t.items),d.xb(8),d.Xb("ngForOf",t.items),d.xb(2),d.hc("Total: \u20b9",t.order.ord_summ.total,""))},directives:[b.l,b.o,b.z,b.k,b.F,b.e,b.N,s.h,b.x,r.i,b.g,b.i,b.j,b.h,b.v,b.D],styles:[".some-title[_ngcontent-%COMP%]{margin:1em;font-size:2em}.some-small-title[_ngcontent-%COMP%]{margin-left:2em;font-size:1em}.shipping[_ngcontent-%COMP%]{margin:2em}"]}),m)}],K=((h=function t(){e(this,t)}).\u0275mod=d.Fb({type:h}),h.\u0275inj=d.Eb({factory:function(e){return new(e||h)},imports:[[s.i.forChild(J)],s.i]}),h),w=((p=function t(){e(this,t)}).\u0275mod=d.Fb({type:p}),p.\u0275inj=d.Eb({factory:function(e){return new(e||p)},imports:[[r.b,c.f,b.I,K]]}),p)}}])}();