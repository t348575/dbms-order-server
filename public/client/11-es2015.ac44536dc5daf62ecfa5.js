(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{X3zk:function(o,t,i){"use strict";i.r(t),i.d(t,"LoginPageModule",(function(){return p}));var n=i("ofXK"),e=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("2g2N"),l=i("fXoL"),b=i("lGQG"),u=i("c14U");const c=function(){return["/register"]},m=[{path:"",component:(()=>{class o{constructor(o,t,i,n){this.formBuilder=o,this.auth=t,this.router=i,this.cart=n,this.form=o.group({username:["",[e.l.email,e.l.nullValidator,e.l.required]],password:["",[e.l.nullValidator]]})}ngOnInit(){}login(){this.form.valid?this.auth.login(this.form.get("username").value,this.form.get("password").value).subscribe(o=>{o?(this.router.navigate(["/home"]).then().catch(),setTimeout(()=>{this.cart.getCart()},1)):a.a.toast("Improper login or password",3e3,"danger")}):a.a.toast("Fill in the details correctly!",3e3,"danger")}}return o.\u0275fac=function(t){return new(t||o)(l.Hb(e.a),l.Hb(b.a),l.Hb(s.g),l.Hb(u.a))},o.\u0275cmp=l.Bb({type:o,selectors:[["app-login"]],decls:23,vars:3,consts:[[1,"full-height","full-width"],["size-sm","6",1,"center-middle","disappear-phone"],["src","./assets/logo.png",2,"max-width","625px","height","auto"],["size","12","size-sm","6",1,"center-middle"],["size-sm","5","size","12","offset","0","offset-sm","4"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","username","type","email"],["formControlName","password","type","password"],["color","primary","fill","solid","type","submit",1,"ion-float-end"],["color","danger","fill","solid",1,"ion-float-end",3,"routerLink"]],template:function(o,t){1&o&&(l.Kb(0,"ion-content"),l.Kb(1,"ion-grid",0),l.Kb(2,"ion-row",0),l.Kb(3,"ion-col",1),l.Ib(4,"ion-img",2),l.Jb(),l.Kb(5,"ion-col",3),l.Kb(6,"ion-grid"),l.Kb(7,"ion-row"),l.Kb(8,"ion-col",4),l.Kb(9,"form",5),l.Sb("ngSubmit",(function(){return t.login()})),l.Kb(10,"ion-item"),l.Kb(11,"ion-label",6),l.fc(12,"Email"),l.Jb(),l.Ib(13,"ion-input",7),l.Jb(),l.Kb(14,"ion-item"),l.Kb(15,"ion-label",6),l.fc(16,"Password"),l.Jb(),l.Ib(17,"ion-input",8),l.Jb(),l.Ib(18,"br"),l.Kb(19,"ion-button",9),l.fc(20,"Login"),l.Jb(),l.Kb(21,"ion-button",10),l.fc(22,"Sign Up"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&o&&(l.xb(9),l.Xb("formGroup",t.form),l.xb(12),l.Xb("routerLink",l.Yb(2,c)))},directives:[r.i,r.l,r.u,r.h,r.o,e.m,e.i,e.d,r.q,r.r,r.p,r.H,e.h,e.c,r.b,r.F,s.h],styles:[""]}),o})()}];let f=(()=>{class o{}return o.\u0275mod=l.Fb({type:o}),o.\u0275inj=l.Eb({factory:function(t){return new(t||o)},imports:[[s.i.forChild(m)],s.i]}),o})(),p=(()=>{class o{}return o.\u0275mod=l.Fb({type:o}),o.\u0275inj=l.Eb({factory:function(t){return new(t||o)},imports:[[n.b,e.e,r.B,f,e.k]]}),o})()}}]);