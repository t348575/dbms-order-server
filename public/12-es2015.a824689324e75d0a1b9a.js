(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{x5bZ:function(e,t,r){"use strict";r.r(t),r.d(t,"RegisterPageModule",(function(){return $}));var n=r("ofXK"),i=r("3Pt+"),o=r("TEn/"),a=r("tyNb"),s=r("2g2N"),l=r("fXoL"),c=r("lGQG"),b=r("tk/3"),m=function(){return function(){this.type="alfa",this.decimal=2,this.decimalCaracter=",",this.userCaracters=!1,this.numberAndTousand=!1,this.moneyInitHasInt=!0}}(),p=function(){function e(e,t){this.controlContainer=e,this.elementRef=t,this.brmasker=new m}return e.prototype.inputKeyup=function(e){var t=this.returnValue(e.target.value);this.setValueInFormControl(t)},e.prototype.onNgModelChange=function(e){var t=this.returnValue(e);t&&this.setValueInFormControl(t,!1)},e.prototype.ngOnInit=function(){this.brmasker.type||(this.brmasker.type="all"),this.brmasker.decimal||(this.brmasker.decimal=2),void 0===this.brmasker.moneyInitHasInt&&(this.brmasker.moneyInitHasInt=!0),this.brmasker.decimalCaracter||(this.brmasker.decimalCaracter=","),this.controlContainer?this.formControlName?this.brmasker.form=this.controlContainer.control.get(this.formControlName):console.warn("Missing FormControlName directive from host element of the component"):console.warn("Can't find parent FormGroup directive"),this.initialValue()},e.prototype.initialValue=function(){var e=this.returnValue(this.elementRef.nativeElement.value);this.setValueInFormControl(e)},e.prototype.verifyFormControl=function(){return this.brmasker.form instanceof i.b},e.prototype.setValueInFormControl=function(e,t){this.verifyFormControl()?(this.brmasker.form.setValue(e,{emitViewToModelChange:t}),this.brmasker.form.updateValueAndValidity()):this.elementRef.nativeElement.value=e},e.prototype.writeCreateValue=function(e,t){return void 0===t&&(t=new m),e&&t.phone?e.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi,"$1 ($2) $3-$4"):e&&t.phoneNotDDD?this.phoneNotDDDMask(e):e&&t.money?this.writeValueMoney(e,t):e&&t.person?this.writeValuePerson(e):e&&t.percent?this.writeValuePercent(e):this.brmasker.userCaracters?this.usingSpecialCharacters(e,this.brmasker.mask,this.brmasker.len):e&&t.mask?(this.brmasker.mask=t.mask,t.len&&(this.brmasker.len=t.len),this.onInput(e)):e},e.prototype.writeValuePercent=function(e){return e.replace(/\D/gi,""),e.replace(/%/gi,""),e.replace(/([0-9]{0})$/gi,"%$1")},e.prototype.writeValuePerson=function(e){return e.length<=11?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi,"$1.$2.$3-$4"):e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi,"$1.$2.$3/$4-$5")},e.prototype.writeValueMoney=function(e,t){return void 0===t&&(t=new m),this.moneyMask(e,t)},e.prototype.returnValue=function(e){if(this.brmasker.mask||(this.brmasker.mask=""),e){var t=e;return"alfa"===this.brmasker.type&&(t=t.replace(/\d/gi,"")),"num"===this.brmasker.type&&(t=t.replace(/\D/gi,"")),this.brmasker.money?this.moneyMask(this.onInput(t),this.brmasker):this.brmasker.phone?this.phoneMask(t):this.brmasker.phoneNotDDD?this.phoneNotDDDMask(t):this.brmasker.person?this.peapollMask(t):this.brmasker.percent?this.percentMask(t):this.brmasker.numberAndTousand?this.thousand(t):this.brmasker.userCaracters?this.usingSpecialCharacters(t,this.brmasker.mask,this.brmasker.len):this.onInput(t)}return""},e.prototype.applyCpfMask=function(e){return(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d{1,2})$/gi,"$1-$2")},e.prototype.applyCnpjMask=function(e){return(e=(e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1/$2")).replace(/(\d{4})(\d{1,4})$/gi,"$1-$2")).replace(/(\d{2})(\d{1,2})$/gi,"$1$2")},e.prototype.percentMask=function(e){return e.replace(/\D/gi,"").replace(/%/gi,"").replace(/([0-9]{0})$/gi,"%$1")},e.prototype.phoneMask=function(e){var t=e;return t.length>14||11===t.length?(this.brmasker.len=15,this.brmasker.mask="(99) 99999-9999",t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="(99) 9999-9999",t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(t)},e.prototype.phoneNotDDDMask=function(e){var t=e;return t.length>9?(this.brmasker.len=10,this.brmasker.mask="99999-9999",t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=9,this.brmasker.mask="9999-9999",t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(t)},e.prototype.peapollMask=function(e){var t=e;return t.length>=14?14===t.length&&t.indexOf("-")>0?(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",t=this.applyCpfMask(t)):(this.brmasker.len=18,this.brmasker.mask="99.999.999/9999-99",t=this.applyCnpjMask(t)):(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",t=this.applyCpfMask(t)),this.onInput(t)},e.prototype.moneyMask=function(e,t){var r=t.decimal||this.brmasker.decimal;if(1===(e=e.replace(/\D/gi,"").replace(new RegExp("([0-9]{"+r+"})$","g"),t.decimalCaracter+"$1")).length&&!this.brmasker.moneyInitHasInt){var n=Array(r-1).fill(0);return"0"+t.decimalCaracter+n.join("")+e}return e.length===r+1?"0"+e:e.length>r+2&&"0"===e.charAt(0)?e.substr(1):(t.thousand&&e.length>Number(4)+Number(t.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+t.decimalCaracter+"([0-9]{"+t.decimal+"}$)","g"),t.thousand+"$1"+t.decimalCaracter+"$2")),t.thousand&&e.length>Number(8)+Number(t.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+t.thousand+"([0-9]{3})"+t.decimalCaracter+"([0-9]{"+t.decimal+"}$)","g"),t.thousand+"$1"+t.thousand+"$2"+t.decimalCaracter+"$3")),e)},e.prototype.onInput=function(e){return this.formatField(e,this.brmasker.mask,this.brmasker.len)},e.prototype.usingSpecialCharacters=function(e,t,r){r||(r=99999999999);for(var n=e.toString().replace(/\-|\.|\,| /gi,""),i=0,o="",a=n.length,s=0;s<a;s++)s<r&&("-"===t.charAt(s)||"."===t.charAt(s)||","===t.charAt(s)?(o+=t.charAt(s),a++):(o+=n.charAt(i),i++));return o},e.prototype.thousand=function(e){var t=e.replace(/\D/gi,"").toString().split("").reverse().join("").match(/\d{1,3}/g);if(t)return t.join(""+(this.brmasker.thousand||".")).split("").reverse().join("")},e.prototype.formatField=function(e,t,r){r||(r=99999999999);for(var n=e.toString().replace(/\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi,""),i=0,o="",a=n.length,s=0;s<a;s++)s<r&&("-"===t.charAt(s)||"."===t.charAt(s)||"/"===t.charAt(s)||"_"===t.charAt(s)||"("===t.charAt(s)||")"===t.charAt(s)||" "===t.charAt(s)||","===t.charAt(s)||"*"===t.charAt(s)||"+"===t.charAt(s)||"@"===t.charAt(s)||"#"===t.charAt(s)||":"===t.charAt(s)||"$"===t.charAt(s)||"&"===t.charAt(s)||"%"===t.charAt(s)?(o+=t.charAt(s),a++):(o+=n.charAt(i),i++));return o},e.\u0275fac=function(t){return new(t||e)(l.Hb(i.d,13),l.Hb(l.l))},e.\u0275dir=l.Cb({type:e,selectors:[["","brmasker",""]],hostBindings:function(e,t){1&e&&l.Rb("keyup",(function(e){return t.inputKeyup(e)}))("ngModelChange",(function(e){return t.onNgModelChange(e)}))},inputs:{brmasker:"brmasker",formControlName:"formControlName"}}),e.\u0275prov=l.Db({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),u=function(){function e(){}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e}();const h=["datePicker"];function d(e,t){if(1&e&&(l.Kb(0,"ion-select-option",21),l.bc(1),l.Jb()),2&e){const e=t.$implicit;l.Vb("value",e.dial_code),l.xb(1),l.dc("",e.name,", ",e.dial_code,"")}}const f=function(){return{type:"num",mask:"999-999-9999"}},g=function(){return["/login"]},k=[{path:"",component:(()=>{class e{constructor(e,t,r,n){this.formBuilder=e,this.auth=t,this.http=r,this.cdr=n,this.countries=[],this.form=e.group({email:["",[i.k.required,i.k.email]],name:["",i.k.required],dob:["",i.k.required],phone:["",i.k.required],password:["",i.k.required],rePassword:["",i.k.required],address:["",i.k.required],code:["",i.k.required]},{validator:this.ConfirmedValidator("password","rePassword")}),this.http.get("./assets/countries.json").subscribe(e=>{this.countries=e,this.countries=this.countries.filter(e=>null!==e.dial_code&&e.dial_code.length<5),this.http.get("https://extreme-ip-lookup.com/json/").subscribe(e=>{this.form.get("code").setValue(this.countries[this.countries.findIndex(t=>t.code===e.countryCode)].dial_code)})})}ngAfterViewInit(){const e=new Date((new Date).setFullYear((new Date).getFullYear()-18));this.datePicker.value=`${e.getDate()}-${e.getMonth()}-${e.getFullYear()}`,this.cdr.detectChanges()}ConfirmedValidator(e,t){return r=>{const n=r.controls[t];n.errors&&!n.errors.confirmedValidator||n.setErrors(r.controls[e].value!==n.value?{confirmedValidator:!0}:null)}}register(){if(console.log(this.form.valid),this.form.valid){const e=this.form.getRawValue();e.phone=e.code.replace("+","")+e.phone.replace(/-/gi,"");const t=new Date(e.dob);e.dob=`${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`,this.auth.register(e.email,e.password,e.name,e.dob,e.phone,e.address).subscribe(e=>{e.status?s.a.toast(e.message,2500,"primary"):s.a.toast(e.message,3e3,"danger")})}else this.form.get("rePassword").valid?s.a.toast("Form not filled out!",3e3,"danger"):s.a.toast("Passwords do not match!",3e3,"danger")}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(i.a),l.Hb(c.a),l.Hb(b.b),l.Hb(l.h))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-register"]],viewQuery:function(e,t){var r;1&e&&l.ec(h,!0),2&e&&l.Xb(r=l.Sb())&&(t.datePicker=r.first)},decls:55,vars:7,consts:[[1,"full-height"],["autocomplete","on",3,"formGroup","ngSubmit"],["size-sm","4","size","12","offset-sm","2","offset","0"],["position","floating"],["type","email","formControlName","email"],[1,"ion-no-padding"],["size","3"],["formControlName","code",3,"selectedText"],[3,"value",4,"ngFor","ngForOf"],["size","9"],["type","text","formControlName","phone",3,"brmasker"],["size-sm","4","size","12"],["type","text","formControlName","name"],["display-format","DD-MM-YYYY","formControlName","dob"],["datePicker",""],["size-sm","4","size","12","offset-sm","4","offset","0"],["type","password","formControlName","password"],["type","password","formControlName","rePassword"],["type","text","formControlName","address"],["color","danger","fill","outline","type","submit",1,"ion-float-end"],["color","primary","fill","outline",1,"ion-float-end",3,"routerLink"],[3,"value"]],template:function(e,t){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.bc(3,"Sign Up"),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content"),l.Kb(5,"ion-grid",0),l.Kb(6,"form",1),l.Rb("ngSubmit",(function(){return t.register()})),l.Kb(7,"ion-row"),l.Kb(8,"ion-col",2),l.Kb(9,"ion-item"),l.Kb(10,"ion-label",3),l.bc(11,"Email"),l.Jb(),l.Ib(12,"ion-input",4),l.Jb(),l.Kb(13,"ion-grid",5),l.Kb(14,"ion-row"),l.Kb(15,"ion-col",6),l.Kb(16,"ion-item"),l.Kb(17,"ion-label",3),l.bc(18,"Code"),l.Jb(),l.Kb(19,"ion-select",7),l.ac(20,d,2,3,"ion-select-option",8),l.Jb(),l.Jb(),l.Jb(),l.Kb(21,"ion-col",9),l.Kb(22,"ion-item"),l.Kb(23,"ion-label",3),l.bc(24,"Phone"),l.Jb(),l.Ib(25,"ion-input",10),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(26,"ion-col",11),l.Kb(27,"ion-item"),l.Kb(28,"ion-label",3),l.bc(29,"Name"),l.Jb(),l.Ib(30,"ion-input",12),l.Jb(),l.Kb(31,"ion-item"),l.Kb(32,"ion-label",3),l.bc(33,"Date of birth"),l.Jb(),l.Ib(34,"ion-datetime",13,14),l.Jb(),l.Jb(),l.Jb(),l.Kb(36,"ion-row"),l.Kb(37,"ion-col",15),l.Kb(38,"ion-item"),l.Kb(39,"ion-label",3),l.bc(40,"Password"),l.Jb(),l.Ib(41,"ion-input",16),l.Jb(),l.Kb(42,"ion-item"),l.Kb(43,"ion-label",3),l.bc(44,"Repeat password"),l.Jb(),l.Ib(45,"ion-input",17),l.Jb(),l.Kb(46,"ion-item"),l.Kb(47,"ion-label",3),l.bc(48,"Address"),l.Jb(),l.Ib(49,"ion-textarea",18),l.Jb(),l.Ib(50,"br"),l.Kb(51,"ion-button",19),l.bc(52,"Sign Up"),l.Jb(),l.Kb(53,"ion-button",20),l.bc(54,"Login"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(6),l.Vb("formGroup",t.form),l.xb(13),l.Vb("selectedText",t.form.get("code").value.split(",")[0]),l.xb(1),l.Vb("ngForOf",t.countries),l.xb(5),l.Vb("brmasker",l.Wb(5,f)),l.xb(28),l.Vb("routerLink",l.Wb(6,g)))},directives:[o.k,o.y,o.x,o.h,o.j,i.l,i.i,i.d,o.s,o.g,o.o,o.p,o.n,o.F,i.h,i.c,o.u,o.E,n.h,p,o.i,o.w,o.a,o.D,a.h,o.v],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(k)],a.i]}),e})(),$=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[n.b,i.e,i.j,o.z,y,u]]}),e})()}}]);