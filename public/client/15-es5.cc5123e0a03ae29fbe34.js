!function(){function e(e,o){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,o){if(!e)return;if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,o)}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,b=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return b=e.done,e},e:function(e){c=!0,a=e},f:function(){try{b||null==n.return||n.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{x5bZ:function(t,i,r){"use strict";r.r(i),r.d(i,"RegisterPageModule",(function(){return N}));var a=r("ofXK"),b=r("3Pt+"),c=r("TEn/"),s=r("tyNb"),u=r("2g2N"),l=r("fXoL"),f=r("lGQG"),m=r("tk/3"),d=r("A1CT"),p=r("/oCc"),g=["datePicker"];function y(e,t){if(1&e&&(l.Kb(0,"ion-select-option",26),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.Xb("value",o.dial_code),l.xb(1),l.ic("",o.name,", ",o.dial_code,"")}}function h(e,t){if(1&e&&(l.Kb(0,"ion-select-option"),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.xb(1),l.gc(o.countryName)}}function v(e,t){if(1&e&&(l.Kb(0,"ion-select-option"),l.fc(1),l.Jb()),2&e){var o=t.$implicit;l.xb(1),l.gc(o.name)}}var J,K,C,w=function(){return{type:"num",mask:"999-999-9999"}},k=function(){return["/login"]},x=[{path:"",component:(J=function(){function t(n,i,r,a,c){var s=this;o(this,t),this.formBuilder=n,this.auth=i,this.http=r,this.cdr=a,this.utilityService=c,this.phoneCodes=[],this.countries=[],this.regions=[],this.form=n.group({email:["",[b.m.required,b.m.email]],name:["",b.m.required],dob:["",b.m.required],phone:["",b.m.required],password:["",b.m.required],rePassword:["",b.m.required],country:["",b.m.required],city:["",b.m.required],region:["",b.m.required],pinCode:["",b.m.required],address:["",b.m.required],code:["",b.m.required]},{validator:this.ConfirmedValidator("password","rePassword")}),this.utilityService.getCurrentCountryPhoneCode().subscribe((function(e){setTimeout((function(){s.utilityService.getPhoneCodeList().subscribe((function(t){s.phoneCodes=t,s.form.get("code").setValue(e)}))}),100)})),this.utilityService.getCountryRegionList().subscribe((function(t){s.countries=t,s.utilityService.getCurrentCountry().subscribe((function(t){var o,n=e(s.countries);try{var i=function(){var n=o.value;if(n.countryShortCode===t)return s.form.get("country").setValue(n.countryName),s.setRegions(),setTimeout((function(){var t,o=s.utilityService.getCurrentRegion(),i=e(n.regions);try{for(i.s();!(t=i.n()).done;)if(t.value.name===o){s.form.get("region").setValue(o);break}}catch(r){i.e(r)}finally{i.f()}}),100),s.utilityService.getCurrentCity().length>0&&s.form.get("city").setValue(s.utilityService.getCurrentCity()),"break"};for(n.s();!(o=n.n()).done&&"break"!==i(););}catch(r){n.e(r)}finally{n.f()}}))}))}var i,r,a;return i=t,(r=[{key:"setRegions",value:function(){var t=this.form.get("country").value;if(t.length>0){var o,n=e(this.countries);try{for(n.s();!(o=n.n()).done;){var i=o.value;if(i.countryName===t){this.regions=i.regions;break}}}catch(r){n.e(r)}finally{n.f()}}}},{key:"ngAfterViewInit",value:function(){var e=new Date((new Date).setFullYear((new Date).getFullYear()-18));this.datePicker.value="".concat(e.getDate(),"-").concat(e.getMonth(),"-").concat(e.getFullYear()),this.cdr.detectChanges()}},{key:"ConfirmedValidator",value:function(e,t){return function(o){var n=o.controls[t];n.errors&&!n.errors.confirmedValidator||n.setErrors(o.controls[e].value!==n.value?{confirmedValidator:!0}:null)}}},{key:"register",value:function(){if(this.form.valid){var e=this.form.getRawValue();e.phone=e.code.replace("+","")+e.phone.replace(/-/gi,"");var t=new Date(e.dob);e.dob="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate()),this.auth.register(e.email,e.password,e.name,e.dob,e.phone,e.address,e.country,e.region,e.city,e.pinCode).subscribe((function(e){e.status?u.a.toast(e.message,2500,"primary"):u.a.toast(e.message,3e3,"danger")}))}else this.form.get("rePassword").valid?u.a.toast("Form not filled out!",3e3,"danger"):u.a.toast("Passwords do not match!",3e3,"danger")}}])&&n(i.prototype,r),a&&n(i,a),t}(),J.\u0275fac=function(e){return new(e||J)(l.Hb(b.b),l.Hb(f.a),l.Hb(m.b),l.Hb(l.h),l.Hb(d.a))},J.\u0275cmp=l.Bb({type:J,selectors:[["app-register"]],viewQuery:function(e,t){var o;1&e&&l.jc(g,!0),2&e&&l.ac(o=l.Tb())&&(t.datePicker=o.first)},decls:70,vars:9,consts:[[1,"full-height","full-width"],["autocomplete","on",3,"formGroup","ngSubmit"],["size-sm","4","size","12","offset-sm","2","offset","0"],["position","floating"],["type","email","formControlName","email"],[1,"ion-no-padding"],["size","3"],["formControlName","code",3,"selectedText"],[3,"value",4,"ngFor","ngForOf"],["size","9"],["type","text","formControlName","phone",3,"brmasker"],["size-sm","4","size","12"],["type","text","formControlName","name"],["display-format","DD-MM-YYYY","formControlName","dob"],["datePicker",""],["type","password","formControlName","password"],["type","password","formControlName","rePassword"],["type","text","formControlName","address","rows","4"],["formControlName","country",3,"ionChange"],[4,"ngFor","ngForOf"],["formControlName","region"],["type","text","formControlName","city"],["type","number","max","9999999999","min","0","formControlName","pinCode"],[1,"center-middle"],["color","primary","fill","solid",1,"ion-float-end",3,"routerLink"],["color","danger","fill","solid","type","submit",1,"ion-float-end"],[3,"value"]],template:function(e,t){1&e&&(l.Kb(0,"ion-content"),l.Kb(1,"ion-grid",0),l.Kb(2,"form",1),l.Sb("ngSubmit",(function(){return t.register()})),l.Kb(3,"ion-row"),l.Kb(4,"ion-col",2),l.Kb(5,"ion-item"),l.Kb(6,"ion-label",3),l.fc(7,"Email"),l.Jb(),l.Ib(8,"ion-input",4),l.Jb(),l.Kb(9,"ion-grid",5),l.Kb(10,"ion-row"),l.Kb(11,"ion-col",6),l.Kb(12,"ion-item"),l.Kb(13,"ion-label",3),l.fc(14,"Code"),l.Jb(),l.Kb(15,"ion-select",7),l.ec(16,y,2,3,"ion-select-option",8),l.Jb(),l.Jb(),l.Jb(),l.Kb(17,"ion-col",9),l.Kb(18,"ion-item"),l.Kb(19,"ion-label",3),l.fc(20,"Phone"),l.Jb(),l.Ib(21,"ion-input",10),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(22,"ion-col",11),l.Kb(23,"ion-item"),l.Kb(24,"ion-label",3),l.fc(25,"Name"),l.Jb(),l.Ib(26,"ion-input",12),l.Jb(),l.Kb(27,"ion-item"),l.Kb(28,"ion-label",3),l.fc(29,"Date of birth"),l.Jb(),l.Ib(30,"ion-datetime",13,14),l.Jb(),l.Jb(),l.Jb(),l.Kb(32,"ion-row"),l.Kb(33,"ion-col",2),l.Kb(34,"ion-item"),l.Kb(35,"ion-label",3),l.fc(36,"Password"),l.Jb(),l.Ib(37,"ion-input",15),l.Jb(),l.Kb(38,"ion-item"),l.Kb(39,"ion-label",3),l.fc(40,"Repeat password"),l.Jb(),l.Ib(41,"ion-input",16),l.Jb(),l.Kb(42,"ion-item"),l.Kb(43,"ion-label",3),l.fc(44,"Address"),l.Jb(),l.Ib(45,"ion-textarea",17),l.Jb(),l.Jb(),l.Kb(46,"ion-col",11),l.Kb(47,"ion-item"),l.Kb(48,"ion-label",3),l.fc(49,"Country"),l.Jb(),l.Kb(50,"ion-select",18),l.Sb("ionChange",(function(){return t.setRegions()})),l.ec(51,h,2,1,"ion-select-option",19),l.Jb(),l.Jb(),l.Kb(52,"ion-item"),l.Kb(53,"ion-label",3),l.fc(54,"Region"),l.Jb(),l.Kb(55,"ion-select",20),l.ec(56,v,2,1,"ion-select-option",19),l.Jb(),l.Jb(),l.Kb(57,"ion-item"),l.Kb(58,"ion-label",3),l.fc(59,"City"),l.Jb(),l.Ib(60,"ion-input",21),l.Jb(),l.Kb(61,"ion-item"),l.Kb(62,"ion-label",3),l.fc(63,"PIN code"),l.Jb(),l.Ib(64,"ion-input",22),l.Jb(),l.Jb(),l.Jb(),l.Kb(65,"ion-row",23),l.Kb(66,"ion-button",24),l.fc(67,"Login"),l.Jb(),l.Kb(68,"ion-button",25),l.fc(69,"Sign Up"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(2),l.Xb("formGroup",t.form),l.xb(13),l.Xb("selectedText",t.form.get("code").value.split(",")[0]),l.xb(1),l.Xb("ngForOf",t.phoneCodes),l.xb(5),l.Xb("brmasker",l.Yb(7,w)),l.xb(30),l.Xb("ngForOf",t.countries),l.xb(5),l.Xb("ngForOf",t.regions),l.xb(10),l.Xb("routerLink",l.Yb(8,k)))},directives:[c.j,c.m,b.n,b.j,b.e,c.x,c.i,c.t,c.u,c.s,c.M,b.i,b.d,c.z,c.L,a.i,p.a,c.k,c.C,c.H,c.c,c.K,s.h,c.A],styles:[""]}),J)}],S=((C=function e(){o(this,e)}).\u0275mod=l.Fb({type:C}),C.\u0275inj=l.Eb({factory:function(e){return new(e||C)},imports:[[s.i.forChild(x)],s.i]}),C),N=((K=function e(){o(this,e)}).\u0275mod=l.Fb({type:K}),K.\u0275inj=l.Eb({factory:function(e){return new(e||K)},imports:[[a.b,b.f,b.l,c.F,S,p.b]]}),K)}}])}();