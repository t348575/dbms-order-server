!function(){function e(e,o){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,o){if(!e)return;if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,o)}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,b=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){b=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(b)throw s}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jcJX:function(t,r,i){"use strict";i.r(r),i.d(r,"AccountPageModule",(function(){return x}));var s=i("ofXK"),a=i("3Pt+"),b=i("TEn/"),u=i("tyNb"),c=i("2g2N"),l=i("fXoL"),d=i("qfBg"),m=i("A1CT"),f=i("/oCc"),p=["datePicker"];function g(e,t){if(1&e&&(l.Kb(0,"ion-select-option"),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.xb(1),l.gc(o.countryName)}}function h(e,t){if(1&e&&(l.Kb(0,"ion-select-option"),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.xb(1),l.gc(o.name)}}function y(e,t){if(1&e&&(l.Kb(0,"ion-select-option",23),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.Xb("value",o.dial_code),l.xb(1),l.ic("",o.name,", ",o.dial_code,"")}}var v=function(){return{type:"num",mask:"999-999-9999"}};function J(e,t){if(1&e){var o=l.Lb();l.Kb(0,"ion-col",4),l.Kb(1,"ion-card"),l.Kb(2,"form",5),l.Sb("ngSubmit",(function(){return l.bc(o),l.Ub().updateDetails()})),l.Kb(3,"ion-row"),l.Kb(4,"ion-col",6),l.Kb(5,"ion-item"),l.Kb(6,"ion-label",7),l.fc(7,"Country"),l.Jb(),l.Kb(8,"ion-select",8),l.Sb("ionChange",(function(){return l.bc(o),l.Ub().setRegions()})),l.ec(9,g,2,1,"ion-select-option",9),l.Jb(),l.Jb(),l.Kb(10,"ion-item"),l.Kb(11,"ion-label",7),l.fc(12,"Region"),l.Jb(),l.Kb(13,"ion-select",10),l.ec(14,h,2,1,"ion-select-option",9),l.Jb(),l.Jb(),l.Kb(15,"ion-item"),l.Kb(16,"ion-label",7),l.fc(17,"City"),l.Jb(),l.Ib(18,"ion-input",11),l.Jb(),l.Kb(19,"ion-item"),l.Kb(20,"ion-label",7),l.fc(21,"PIN code"),l.Jb(),l.Ib(22,"ion-input",12),l.Jb(),l.Kb(23,"ion-item"),l.Kb(24,"ion-label",7),l.fc(25,"Email"),l.Jb(),l.Ib(26,"ion-input",13),l.Jb(),l.Jb(),l.Kb(27,"ion-col",6),l.Kb(28,"ion-item"),l.Kb(29,"ion-label",7),l.fc(30,"Name"),l.Jb(),l.Ib(31,"ion-input",14),l.Jb(),l.Kb(32,"ion-grid",15),l.Kb(33,"ion-row"),l.Kb(34,"ion-col",2),l.Kb(35,"ion-item"),l.Kb(36,"ion-label",7),l.fc(37,"Code"),l.Jb(),l.Kb(38,"ion-select",16),l.ec(39,y,2,3,"ion-select-option",17),l.Jb(),l.Jb(),l.Jb(),l.Kb(40,"ion-col",4),l.Kb(41,"ion-item"),l.Kb(42,"ion-label",7),l.fc(43,"Phone"),l.Jb(),l.Ib(44,"ion-input",18),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(45,"ion-item"),l.Kb(46,"ion-label",7),l.fc(47,"Address"),l.Jb(),l.Ib(48,"ion-textarea",19),l.Jb(),l.Kb(49,"ion-item"),l.Kb(50,"ion-label",7),l.fc(51,"Date of birth"),l.Jb(),l.Ib(52,"ion-datetime",20,21),l.Jb(),l.Jb(),l.Jb(),l.Kb(54,"ion-button",22),l.fc(55,"Update details"),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&e){var n=l.Ub();l.xb(2),l.Xb("formGroup",n.addressForm),l.xb(7),l.Xb("ngForOf",n.countries),l.xb(5),l.Xb("ngForOf",n.regions),l.xb(24),l.Xb("selectedText",n.addressForm.get("code").value.split(",")[0]),l.xb(1),l.Xb("ngForOf",n.phoneCodes),l.xb(5),l.Xb("brmasker",l.Yb(7,v)),l.xb(4),l.Xb("rows",4)}}function K(e,t){if(1&e){var o=l.Lb();l.Kb(0,"ion-col",4),l.Kb(1,"ion-card"),l.Kb(2,"form",5),l.Sb("ngSubmit",(function(){return l.bc(o),l.Ub().updatePassword()})),l.Kb(3,"ion-row"),l.Kb(4,"ion-col",24),l.Kb(5,"ion-item"),l.Kb(6,"ion-label",7),l.fc(7,"Current password"),l.Jb(),l.Ib(8,"ion-input",25),l.Jb(),l.Kb(9,"ion-item"),l.Kb(10,"ion-label",7),l.fc(11,"New password"),l.Jb(),l.Ib(12,"ion-input",26),l.Jb(),l.Kb(13,"ion-item"),l.Kb(14,"ion-label",7),l.fc(15,"Retype new password"),l.Jb(),l.Ib(16,"ion-input",27),l.Jb(),l.Jb(),l.Jb(),l.Kb(17,"ion-button",22),l.fc(18,"Change password"),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&e){var n=l.Ub();l.xb(2),l.Xb("formGroup",n.passForm)}}var C,w,F,P=[{path:"",component:(C=function(){function t(e,n,r,i){o(this,t),this.userService=e,this.formBuilder=n,this.utilityService=r,this.cdr=i,this.address="medium",this.useAddress=!0,this.pass="",this.usePass=!1,this.phoneCodes=[],this.countries=[],this.regions=[],this.addressForm=this.formBuilder.group({country:["",[a.m.required]],phone:["",[a.m.required]],name:["",a.m.required],address:["",a.m.required],city:["",a.m.required],region:["",a.m.required],pinCode:["",a.m.required],code:["",a.m.required],email:["",[a.m.required]],dob:["",a.m.required]}),this.passForm=this.formBuilder.group({oldPass:["",[a.m.required]],pass:["",[a.m.required]],rePass:["",[a.m.required]]}),this.getData()}var r,i,s;return r=t,(i=[{key:"getData",value:function(){var t=this;this.userService.addressDetails().subscribe((function(o){t.data=o,t.addressForm.get("name").setValue(o.name),t.addressForm.get("phone").setValue(o.phone.slice(-10)),t.addressForm.get("code").setValue("+"+o.phone.slice(0,o.phone.length-10)),t.addressForm.get("country").setValue(o.country),t.addressForm.get("region").setValue(o.region),t.addressForm.get("city").setValue(o.city),t.addressForm.get("address").setValue(o.address),t.addressForm.get("pinCode").setValue(o.pinCode),t.addressForm.get("email").setValue(o.email),t.addressForm.get("dob").setValue(o.dob),t.utilityService.getCurrentCountryPhoneCode().subscribe((function(e){t.utilityService.getPhoneCodeList().subscribe((function(e){t.phoneCodes=e}))})),t.utilityService.getCountryRegionList().subscribe((function(o){t.countries=o,t.utilityService.getCurrentCountry().subscribe((function(o){var n,r=e(t.countries);try{for(r.s();!(n=r.n()).done;)if(n.value.countryShortCode===o){t.setRegions();break}}catch(i){r.e(i)}finally{r.f()}}))}))}))}},{key:"setRegions",value:function(){var t=this.addressForm.get("country").value;if(t.length>0){var o,n=e(this.countries);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(r.countryName===t){this.regions=r.regions;break}}}catch(i){n.e(i)}finally{n.f()}}}},{key:"updateDetails",value:function(){var e=this;if(this.addressForm.valid){var t=new Date(this.addressForm.get("dob").value),o={name:this.addressForm.get("name").value,phone:this.addressForm.get("code").value.replace("+","")+this.addressForm.get("phone").value.replace(/-/gi,""),email:this.addressForm.get("email").value,dob:"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),address:{country:this.addressForm.get("country").value,city:this.addressForm.get("city").value,region:this.addressForm.get("region").value,pinCode:this.addressForm.get("pinCode").value,address:this.addressForm.get("address").value}};this.userService.updateDetails(o).subscribe((function(t){t?(c.a.toast("Details updated successfully!",3e3,"success"),e.getData()):c.a.toast("Could not update details!",3e3,"danger")}))}else c.a.toast("Fill out the form properly!",3e3,"danger")}},{key:"updatePassword",value:function(){var e=this;if(this.passForm.valid){if(this.passForm.get("pass").value!==this.passForm.get("rePass").value)return void c.a.toast("New passwords do not match!",3e3,"danger");this.userService.updatePassword(this.passForm.get("oldPass").value,this.passForm.get("pass").value).subscribe((function(t){e.passForm.reset(),t.status?c.a.toast("Password updated successfully!",3e3,"success"):c.a.toast(t.message,3e3,"danger")}))}else c.a.toast("Fill out the form properly!",3e3,"danger")}},{key:"ngAfterViewInit",value:function(){var e=new Date((new Date).setFullYear((new Date).getFullYear()-18));this.datePicker.value="".concat(e.getDate(),"-").concat(e.getMonth()+1,"-").concat(e.getFullYear()),this.cdr.detectChanges()}},{key:"goToAddress",value:function(){this.address="medium",this.pass="",this.useAddress=!0,this.usePass=!1}},{key:"goToPassword",value:function(){this.address="",this.pass="medium",this.useAddress=!1,this.usePass=!0}}])&&n(r.prototype,i),s&&n(r,s),t}(),C.\u0275fac=function(e){return new(e||C)(l.Hb(d.a),l.Hb(a.b),l.Hb(m.a),l.Hb(l.h))},C.\u0275cmp=l.Bb({type:C,selectors:[["app-account"]],viewQuery:function(e,t){var o;1&e&&l.kc(p,!0),2&e&&l.ac(o=l.Tb())&&(t.datePicker=o.first)},decls:14,vars:6,consts:[[1,"full-height","full-width"],["size","9",4,"ngIf"],["size","3"],["lines","none","detail","false","button","",3,"click"],["size","9"],[3,"formGroup","ngSubmit"],["size","6"],["position","floating"],["formControlName","country",3,"ionChange"],[4,"ngFor","ngForOf"],["formControlName","region"],["type","text","formControlName","city"],["type","number","max","9999999999","min","0","formControlName","pinCode"],["type","email","formControlName","email"],["type","text","formControlName","name"],[1,"ion-no-padding"],["formControlName","code",3,"selectedText"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","phone",3,"brmasker"],["type","text","formControlName","address",3,"rows"],["display-format","DD-MM-YYYY","formControlName","dob"],["datePicker",""],["type","submit",1,"ion-float-right"],[3,"value"],["size","6","offset","3"],["type","password","formControlName","oldPass"],["type","password","formControlName","pass"],["type","password","formControlName","rePass"]],template:function(e,t){1&e&&(l.Kb(0,"ion-content"),l.Kb(1,"ion-grid",0),l.Kb(2,"ion-row",0),l.ec(3,J,56,8,"ion-col",1),l.ec(4,K,19,1,"ion-col",1),l.Kb(5,"ion-col",2),l.Kb(6,"ion-card"),l.Kb(7,"ion-list"),l.Kb(8,"ion-item",3),l.Sb("click",(function(){return t.goToAddress()})),l.Kb(9,"ion-label"),l.fc(10,"Address details"),l.Jb(),l.Jb(),l.Kb(11,"ion-item",3),l.Sb("click",(function(){return t.goToPassword()})),l.Kb(12,"ion-label"),l.fc(13,"Change password"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(3),l.Xb("ngIf",t.useAddress),l.xb(1),l.Xb("ngIf",t.usePass),l.xb(4),l.zb("selected",t.useAddress),l.xb(3),l.zb("selected",t.usePass))},directives:[b.l,b.o,b.z,s.j,b.k,b.g,b.x,b.v,b.w,a.n,a.j,a.e,b.B,b.O,a.i,a.d,s.i,b.u,b.P,b.K,f.a,b.E,b.m,b.e,b.C],styles:["ion-item.selected[_ngcontent-%COMP%]{--background:rgba(var(--ion-color-dark-rgb),0.14)}ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-dark)}ion-item.selected[_ngcontent-%COMP%]{--color:var(--ion-color-dark)}"]}),C)}],k=((F=function e(){o(this,e)}).\u0275mod=l.Fb({type:F}),F.\u0275inj=l.Eb({factory:function(e){return new(e||F)},imports:[[u.i.forChild(P)],u.i]}),F),x=((w=function e(){o(this,e)}).\u0275mod=l.Fb({type:w}),w.\u0275inj=l.Eb({factory:function(e){return new(e||w)},imports:[[s.b,a.f,b.I,k,f.b,a.l]]}),w)}}])}();