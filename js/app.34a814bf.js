(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)o=i[d],r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9f119f81"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=a);var n,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t),n=function(e){c.onerror=c.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");o.type=a,o.request=n,s[1](o)}r[t]=void 0}};var d=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"1e1e":function(t,e,s){"use strict";var a=s("36be"),r=s.n(a);r.a},"36be":function(t,e,s){},"3beb":function(t,e,s){},"4b3a":function(t,e,s){"use strict";var a=s("868c"),r=s.n(a);r.a},5636:function(t,e,s){"use strict";var a=s("f84d"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=s("9f7b"),n=(s("f9e3"),s("2dd8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MyNavbar",{attrs:{isNotLogin:t.isNotLogin()}}),s("router-view")],1)}),o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"MyNavbar"}},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),s("router-link",{attrs:{to:"/"}},[s("b-navbar-brand",[t._v("NavBar")])],1),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[this.$root.isLoggin?s("b-navbar-nav",[t.isAdmin()?s("b-nav-item",{attrs:{href:"#"},on:{click:function(e){t.resetData()}}},[t._v("Reset Data")]):t._e(),this.$root.isLoggin?s("b-nav-item",{attrs:{href:"#",to:"/planning"}},[t._v("Planning")]):t._e(),s("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),s("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1):t._e(),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-form-select",{attrs:{size:"sm",options:t.langs},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})],1),s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Search"}}),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),this.$root.isLoggin?s("b-nav-item-dropdown",{attrs:{right:""}},[s("template",{slot:"button-content"},[s("em",[t._v(t._s(this.$root.getLoggedUser().pseudo))])]),s("b-dropdown-item",{attrs:{to:"/profil"}},[t._v("Profile")]),s("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){t.logout()}}},[t._v("Signout")])],2):t._e()],1)],1)],1)],1)},l=[],c=s("ade3"),d=Object(c["a"])({name:"MyNavbar",props:{msg:String},data:function(){return{langs:[{value:"FR",text:"FR"},{value:"DE",text:"DE"},{value:"UK",text:"UK"},{value:"ES",text:"ES"}],lang:"FR"}},computed:{isLogin:function(){return console.log("NavBar isLogin computed : "+this.$root.isLogged()),this.$root.isLogged()}},created:function(){console.log("NavBar created"),this.$root.isLoggin=this.$root.isLogged()},methods:{logout:function(){console.log("logout"),this.$root.logout(),this.$root.isLoggin=!1,this.$router.push("login")},resetData:function(){this.$root.resetData(),alert("Data have been reseted")},isAdmin:function(){return this.$root.getLoggedUser().roles.indexOf("ADMIN")>-1}}},"props",{}),u=d,m=(s("6422"),s("2877")),f=Object(m["a"])(u,i,l,!1,null,"9b8b584a",null);f.options.__file="MyNavbar.vue";var p=f.exports,h={name:"app",data:function(){return{userName:"InitName",userRight:""}},methods:{isNotLogin:function(){return!this.$root.isLogged()}},components:{MyNavbar:p}},v=h,g=(s("034f"),Object(m["a"])(v,n,o,!1,null,null,null));g.options.__file="App.vue";var C=g.exports,_=s("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("br"),a("h1",[t._v("Welcome to your dashboard "+t._s(t.user.pseudo))]),a("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),a("div",{staticClass:"container"},[a("div",[a("b-form-group",[a("b-form-radio-group",{attrs:{buttons:"",options:t.options,name:"radiosBtnDefault"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),a("br"),a("br"),a("div",{staticClass:"row border border-dark border-bottom-0 rounded bold"},[a("div",{staticClass:"col-md-7"},[t._v("Titre")]),a("div",{staticClass:"col-md-1"},[t._v("---")]),a("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.selectedContract.titre)+" ")])]),a("div",{staticClass:"row border border-dark border-bottom-0 rounded"},[a("div",{staticClass:"col-md-7"},[t._v("Debut")]),a("div",{staticClass:"col-md-1"},[t._v("---")]),a("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.selectedContract.dateDebut)+" ")])]),a("div",{staticClass:"row border border-dark border-bottom-0 rounded"},[a("div",{staticClass:"col-md-7"},[t._v("Fin")]),a("div",{staticClass:"col-md-1"},[t._v("---")]),a("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.selectedContract.dateFin)+" ")])]),a("div",{staticClass:"row border border-dark border-bottom-0 rounded"},[a("div",{staticClass:"col-md-7"},[t._v("Nombre d'heure par semaine")]),a("div",{staticClass:"col-md-1"},[t._v("---")]),a("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.selectedContract.nbHeureSemaine)+" ")])]),a("div",{staticClass:"row border border-dark rounded"},[a("div",{staticClass:"col-md-7"},[t._v("Nombre de demande exceptionnel")]),a("div",{staticClass:"col-md-1"},[t._v("---")]),a("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.selectedContract.demandes.length)+" ")])])])])},x=[],D=(s("7514"),s("55dd"),{name:"dashboard",components:{},created:function(){console.log("Home created"),this.$root.isLogged()?(this.user=this.$root.getLoggedUser(),this.selected=this.getCurrentContract(this.user).id,this.user.contrats.sort(function(t,e){return t.dateDebut<=e.dateDebut})):this.$router.push("login")},mounted:function(){},updated:function(){},data:function(){return{user:{},selected:-1}},methods:{getCurrentContract:function(t){var e=this;return t.contrats.find(function(t){return t.dateDebut<=e.$root.formatDate(new Date)&&e.$root.formatDate(new Date)<=t.dateFin})||{id:-1}}},computed:{options:function(){return this.user.contrats.map(function(t){return{text:t.titre,value:t.id}})},selectedContract:function(){var t=this;return this.user.contrats.find(function(e){return e.id==t.selected})||{demandes:[]}}}}),U=D,y=Object(m["a"])(U,b,x,!1,null,null,null);y.options.__file="Dashboard.vue";var N=y.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),a("LoginForm")],1)},w=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginForm"}},[a("div",{staticClass:"wrapper fadeInDown"},[a("div",{attrs:{id:"formContent"}},[a("div",{staticClass:"fadeIn first"},[a("img",{attrs:{src:s("6aab"),id:"icon",alt:"User Icon"}}),a("h1",[t._v("Gestion des Temps et Activitées")]),t.hadLoginError?a("div",[a("div",{staticClass:"text-danger"},[t._v("/!\\ ------ mail/password don't match ------ /!\\")]),a("div",{staticClass:"text-danger"},[t._v("use admin/admin to get some fun ;)")])]):t._e()]),a("form",{on:{submit:function(e){return e.preventDefault(),t.doSubmit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"fadeIn second",attrs:{type:"mail",id:"login",name:"login",placeholder:"user@domain.com",required:"true"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"fadeIn third",attrs:{type:"password",id:"password",name:"password",placeholder:"password",required:"true"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("input",{staticClass:"fadeIn fourth",attrs:{type:"submit",value:"Log In"}})]),a("div",{attrs:{id:"formFooter"}},[a("router-link",{staticClass:"underlineHover",attrs:{to:"/about"}},[t._v("Go to the Site")])],1)])])])},S=[],P={name:"LoginForm",mounted:function(){},methods:{doSubmit:function(t){console.log(this.login+"/"+this.password);var e=this.$root.login(this.login,this.password);void 0==e?this.hadLoginError=!0:(console.log("user logged"),this.$root.user=e,this.$root.isLoggin=!0,this.$router.push("/"))}},data:function(){return{login:"",password:"",hadLoginError:!1}}},L=P,R=(s("77e7"),Object(m["a"])(L,$,S,!1,null,"06936ef0",null));R.options.__file="LoginForm.vue";var k=R.exports,A={name:"login",components:{LoginForm:k},created:function(){console.log("login created")}},F=A,O=Object(m["a"])(F,E,w,!1,null,null,null);O.options.__file="Login.vue";var T=O.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profil"},[s("div",{staticClass:"row main"},[t.canEditName?s("div",{staticClass:"col-xl-4"},[s("SearchUser",{on:{loadUser:t.loadUser}})],1):t._e(),s("div",{class:{"col-xl-8":t.canEditName,"main-login main-center":!t.canEditName}},[s("div",{class:{"main-login main-center":t.canEditName}},[s("h1",[t._v("Profil")]),s("h3",[t._v(t._s(t.user.pseudo)+" - "+t._s(t.user.firstName)+" "+t._s(t.user.lastName))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.doSubmit(e)}}},[t.canEditName?s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("First name")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.firstName,expression:"formUser.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your First Name"},domProps:{value:t.formUser.firstName},on:{input:function(e){e.target.composing||t.$set(t.formUser,"firstName",e.target.value)}}})])])]):t._e(),t.canEditName?s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("Last name")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.lastName,expression:"formUser.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your Last Name"},domProps:{value:t.formUser.lastName},on:{input:function(e){e.target.composing||t.$set(t.formUser,"lastName",e.target.value)}}})])])]):t._e(),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("Roles")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(2),s("v-select",{staticClass:"form-control",attrs:{id:"roles",multiple:"",options:this.$root.getRoles(),disabled:!t.canEditName},model:{value:t.formUser.roles,callback:function(e){t.$set(t.formUser,"roles",e)},expression:"formUser.roles"}})],1)])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("Team")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(3),s("v-select",{staticClass:"form-control",attrs:{id:"roles",multiple:"",options:this.$root.getTeams(),disabled:!t.canEditName,taggable:""},model:{value:t.formUser.teams,callback:function(e){t.$set(t.formUser,"teams",e)},expression:"formUser.teams"}})],1)])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("Pseudo")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.pseudo,expression:"formUser.pseudo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your Pseudo",autocomplete:"username"},domProps:{value:t.formUser.pseudo},on:{input:function(e){e.target.composing||t.$set(t.formUser,"pseudo",e.target.value)}}})])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"email"}},[t._v("Email")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(5),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.mail,expression:"formUser.mail"}],staticClass:"form-control",attrs:{type:"mail",placeholder:"Enter your Email"},domProps:{value:t.formUser.mail},on:{input:function(e){e.target.composing||t.$set(t.formUser,"mail",e.target.value)}}})])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"password"}},[t._v("Password")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(6),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your Password",autocomplete:"current-password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"username"}},[t._v("Phone number")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(7),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.tel,expression:"formUser.tel"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"Enter Phone Number"},domProps:{value:t.formUser.tel},on:{input:function(e){e.target.composing||t.$set(t.formUser,"tel",e.target.value)}}})])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"password"}},[t._v("Adresse")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(8),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.addresse.ville,expression:"formUser.addresse.ville"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your City"},domProps:{value:t.formUser.addresse.ville},on:{input:function(e){e.target.composing||t.$set(t.formUser.addresse,"ville",e.target.value)}}})])]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(9),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.addresse.cp,expression:"formUser.addresse.cp"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your Code Postal"},domProps:{value:t.formUser.addresse.cp},on:{input:function(e){e.target.composing||t.$set(t.formUser.addresse,"cp",e.target.value)}}})])]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(10),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.addresse.rue,expression:"formUser.addresse.rue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your Street"},domProps:{value:t.formUser.addresse.rue},on:{input:function(e){e.target.composing||t.$set(t.formUser.addresse,"rue",e.target.value)}}})])]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(11),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.addresse.complement,expression:"formUser.addresse.complement"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Something else ?"},domProps:{value:t.formUser.addresse.complement},on:{input:function(e){e.target.composing||t.$set(t.formUser.addresse,"complement",e.target.value)}}})])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"confirm"}},[t._v("Date de Naissance")]),s("div",{staticClass:"cols-sm-10"},[s("div",{staticClass:"input-group"},[t._m(12),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formUser.ddn,expression:"formUser.ddn"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Confirm your Date de Naissance"},domProps:{value:t.formUser.ddn},on:{input:function(e){e.target.composing||t.$set(t.formUser,"ddn",e.target.value)}}})])])]),s("div",{staticClass:"form-group "},[s("h2",[s("input",{staticClass:"my_button",attrs:{type:"submit",value:"Save Personal Data"}}),t.canCreateUser?s("span",[t._v(" - "),s("input",{staticClass:"my_button",attrs:{type:"button",value:"Create new User"},on:{click:function(e){t.createUser()}}})]):t._e()])])])])])])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-envelope fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-users fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])}],M=s("4a7a"),B=s.n(M),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"SearchUser"}},[s("div",{staticClass:"main-login main-center"},[s("h1",[t._v(" Rechercher ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.recherche,expression:"recherche"}],staticClass:"form-control",attrs:{type:"text",placeholder:"firstName, lastName, pseudo, mail"},domProps:{value:t.recherche},on:{input:function(e){e.target.composing||(t.recherche=e.target.value)}}}),s("br"),t.rechercheResult.firstName.length>0?s("div",[s("h3",[t._v("Find by FirstName :")]),t._l(t.rechercheResult.firstName,function(e){return s("div",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)+" ( "+t._s(e.mail)+" ) "),s("img",{staticClass:"imgLoadUser",attrs:{src:"https://static.thenounproject.com/png/370577-200.png"},on:{click:function(s){t.loadUser(e)}}})])})],2):t._e(),t.rechercheResult.lastName.length>0?s("div",[s("h3",[t._v("Find by LastName :")]),t._l(t.rechercheResult.lastName,function(e){return s("div",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)+" ( "+t._s(e.mail)+" ) "),s("img",{staticClass:"imgLoadUser",attrs:{src:"https://static.thenounproject.com/png/370577-200.png"},on:{click:function(s){t.loadUser(e)}}})])})],2):t._e(),t.rechercheResult.pseudo.length>0?s("div",[s("h3",[t._v("Find by Pseudo :")]),t._l(t.rechercheResult.pseudo,function(e){return s("div",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)+" ( "+t._s(e.mail)+" ) "),s("img",{staticClass:"imgLoadUser",attrs:{src:"https://static.thenounproject.com/png/370577-200.png"},on:{click:function(s){t.loadUser(e)}}})])})],2):t._e(),t.rechercheResult.mail.length>0?s("div",[s("h3",[t._v("Find by Mail :")]),t._l(t.rechercheResult.mail,function(e){return s("div",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)+" ( "+t._s(e.mail)+" ) "),s("img",{staticClass:"imgLoadUser",attrs:{src:"https://static.thenounproject.com/png/370577-200.png"},on:{click:function(s){t.loadUser(e)}}})])})],2):t._e()])])},J=[],V={name:"SearchUser",props:{},data:function(){return{recherche:"",rechercheResult:{firstName:[],lastName:[],pseudo:[],mail:[]}}},methods:{loadUser:function(t){this.$emit("loadUser",t)}},watch:{recherche:function(t){t.length>0?(console.log(t),this.rechercheResult=this.$root.findUser(t,t,t,t),console.log(this.rechercheResult)):this.rechercheResult={firstName:[],lastName:[],pseudo:[],mail:[]}}}},W=V,X=(s("a8ad"),Object(m["a"])(W,H,J,!1,null,"2a7d277c",null));X.options.__file="SearchUser.vue";var Y=X.exports,q={name:"profil",components:{vSelect:B.a,SearchUser:Y},created:function(){console.log("profil created"),this.user=this.$root.getLoggedUser(),this.formUser=this.$root.getLoggedUser(),this.canEditName=this.$root.isDRH(this.user)||this.$root.isAdmin(this.user),this.canCreateUser=this.$root.isDRH(this.user)||this.$root.isAdmin(this.user),this.isAdmin=this.$root.isAdmin(this.user)},data:function(){return{user:{},formUser:{},canEditName:!1,canCreateUser:!1,isAdmin:!1}},methods:{doSubmit:function(){this.$root.saveUser(this.formUser),alert("Personal Data Saved")},createUser:function(){this.formUser.mail!=this.formUser.mail&&(this.$root.createUser(this.formUser),alert("User Created"))},loadUser:function(t){this.user=t,this.formUser=t}},computed:{},watch:{}},z=q,G=(s("5636"),Object(m["a"])(z,I,j,!1,null,"f5803bfa",null));G.options.__file="Profil.vue";var K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"planning"},[s("div",{staticClass:"row main",attrs:{id:"planningContainer"}},[t.canEditName?s("div",{staticClass:"col-xl-4"},[s("SearchUser",{on:{loadUser:t.loadUser}})],1):t._e(),s("div",{class:{"col-xl-8":t.canEditName,container:!t.canEditName}},[s("h1",[t._v("Planning")]),s("div",{attrs:{id:"PlanningComponentFromPlanning"}},[s("PlanningComponent",{attrs:{user:t.user},on:{loadUser:t.loadUser}})],1)])]),s("div",{staticClass:"container"},[s("hr"),s("h2",[t._v("Demande en cours : ")]),s("div",{staticClass:"row title"},[s("div",{staticClass:"col-sm-2"},[t._v("User")]),s("div",{staticClass:"col-sm-2"},[t._v("Status")]),s("div",{staticClass:"col-sm-2"},[t._v("Date")]),s("div",{staticClass:"col-sm"},[t._v("Description")]),t.canAccept?s("div",{staticClass:"col-sm-1"},[t._v("Accep.")]):t._e(),t.canAccept?s("div",{staticClass:"col-sm-1"},[t._v("Refu.")]):t._e()]),t._l(t.demandesList,function(e){return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-2 border-top"},[t._v(t._s(e.user))]),s("div",{staticClass:"col-sm-2 border-top"},[t._v(t._s(e.status))]),s("div",{staticClass:"col-sm-2 border-top"},[t._v(t._s(e.date))]),s("div",{staticClass:"col-sm text-left border-top"},[t._v(t._s(e.text))]),t.canAccept&&"EN_COURS"==e.status?s("div",{staticClass:"col-sm-1 border-top"},[s("input",{attrs:{type:"button",name:"",value:"Accep."},on:{click:function(s){t.acceptDemande(e.userId,e.contractId,e.id)}}})]):t._e(),t.canAccept&&"EN_COURS"==e.status?s("div",{staticClass:"col-sm-1 border-top"},[s("input",{attrs:{type:"button",name:"",value:"Refu."},on:{click:function(s){t.refusDemande(e.userId,e.contractId,e.id)}}})]):t._e()])})],2)])},Z=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"PlanningComponent"}},[s("div",[s("b-form-group",[s("b-form-radio-group",{attrs:{buttons:"",options:t.options,name:"radiosBtnDefault"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-1 align-self-center"},[s("input",{staticClass:"switchSemaineBouton",attrs:{type:"button",name:"",value:"<",disabled:!t.canClickLeft},on:{click:function(e){t.previousWeek()}}})]),s("div",{staticClass:"col-10"},[t.selected>-1?s("div",{staticClass:"row"},t._l(t.selectedContract.horaire,function(e,a){return s("div",{staticClass:"col",attrs:{id:"myCalendar"}},[t.getCelDate(a)!=t.mondayDate?s("div",{staticClass:"cel title",on:{click:function(e){t.clickCol(a)}}},[t._v(" "+t._s(t.getCelDate(a))+" ")]):t._e(),t.getCelDate(a)==t.mondayDate?s("input",{directives:[{name:"model",rawName:"v-model",value:t.mondayDate,expression:"mondayDate"}],staticClass:"title",attrs:{type:"date",name:""},domProps:{value:t.mondayDate},on:{input:function(e){e.target.composing||(t.mondayDate=e.target.value)}}}):t._e(),t._l(t.dayToArray(e,a),function(e){return s("div",{staticClass:"cel",class:{active:e.active},on:{click:function(s){t.clickCel(e)}}},[t._v(t._s(e.horaire))])})],2)})):t._e(),t.selected<=-1?s("div",{staticClass:"row"},[s("h2",[t._v(" ! - Aucun contrat n'est selectionné / Actif - ! ")])]):t._e()]),s("div",{staticClass:"col-1 align-self-center"},[s("input",{staticClass:"switchSemaineBouton",attrs:{type:"button",name:"",value:">",disabled:!t.canClickRight},on:{click:function(e){t.nextWeek()}}})])]),s("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:"Creation de demande"}},[s("div",{staticClass:"d-block text-center"},[s("h3",[t._v("Entrer les informations nécessaires : ")]),s("h4",[t._v("Contrat selectionné : "+t._s((this.user.contrats.find(function(e){return e.id==t.selected})||{titre:"AUCUN CONTRAT SELECTIONNE"}).titre))]),s("b-form-select",{staticClass:"mb-3",attrs:{options:this.$root.getDefaultDemande()},model:{value:t.demandeFormValue,callback:function(e){t.demandeFormValue=e},expression:"demandeFormValue"}}),s("div",[s("label",[t._v("Jour demandé ")]),s("span",[t._v(" - ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.demandeForm.date,expression:"demandeForm.date"}],staticClass:"fadeIn fourth",attrs:{type:"date"},domProps:{value:t.demandeForm.date},on:{input:function(e){e.target.composing||t.$set(t.demandeForm,"date",e.target.value)}}})])],1),s("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-primary",block:""},on:{click:function(e){t.saveDemande()}}},[t._v("Faire la demande")])],1)],1)},et=[],st=(s("28a5"),s("c5f6"),{name:"PlanningComponent",created:function(){console.log("PlanningComponent created"),this.selected=this.$root.getCurrentContract(this.user).id,this.user.contrats.sort(function(t,e){return t.dateDebut<=e.dateDebut}),this.mondayDate=this.$root.formatDate(new Date((new Date).getTime()-24*((new Date).getDay()-1)*60*60*1e3))},mounted:function(){},methods:{isDateBetwin:function(t,e,s){var a=60*Number(t.split("h")[0])+Number(t.split("h")[1]),r=60*Number(e.split("h")[0])+Number(e.split("h")[1]),n=60*Number(s.split("h")[0])+Number(s.split("h")[1]);return r<=a&&a<n},dayToArray:function(t,e){for(var s=["h00","h30"],a=[],r=7;r<22;r++)for(var n=0;n<2;n++){var o={active:!1,horaire:r+s[n],day:this.getCelDate(e)};t.length>0&&this.selectedContract.dateDebut<=o.day&&o.day<=this.selectedContract.dateFin&&(this.isDateBetwin(o.horaire,t[0][0],t[0][1])||this.isDateBetwin(o.horaire,t[1][0],t[1][1]))&&(o.active=!0),a.push(o)}return a},updateUser:function(t){this.user=t},getCelDate:function(t){return this.$root.formatDate(new Date(new Date(this.mondayDate).getTime()+24*t*60*60*1e3))},clickCel:function(t){this.selectedCel=t,this.demandeFormValue="-1",this.$refs.myModalRef.show()},clickCol:function(t){this.selectedCel={day:this.getCelDate(t)},this.demandeFormValue="-1",this.$refs.myModalRef.show()},previousWeek:function(){this.mondayDate=this.$root.formatDate(new Date(new Date(this.mondayDate).getTime()-6048e5))},nextWeek:function(){this.mondayDate=this.$root.formatDate(new Date(new Date(this.mondayDate).getTime()+6048e5))},saveDemande:function(){this.$root.saveDemande(this.user.id,this.selected,this.demandeForm),this.$refs.myModalRef.hide(),this.$emit("loadUser",this.$root.getUser(this.user.id))}},data:function(){return{selected:"",mondayDate:"2018-11-19",demandeFormValue:"-1",demandeForm:{value:"-1",text:"Undefined",jourPayer:!1,status:"EN_COURS",date:"2018-01-01"},selectedCel:{day:this.$root.formatDate(new Date)}}},computed:{options:function(){return this.user.contrats.map(function(t){return{text:t.titre,value:t.id}})},selectedContract:function(){var t=this;return this.user.contrats.find(function(e){return e.id==t.selected})||{horaire:[[],[],[],[],[],[],[]]}},canClickLeft:function(){return new Date(this.selectedContract.dateDebut)<new Date(this.mondayDate)},canClickRight:function(){return new Date(new Date(this.mondayDate).getTime()+6048e5)<new Date(this.selectedContract.dateFin)}},watch:{user:{handler:function(t){this.selected=this.$root.getCurrentContract(this.user).id}},mondayDate:{handler:function(t){var e=new Date(t).getDay();1!=e&&(this.mondayDate=this.$root.formatDate(new Date(new Date(t).getTime()-24*(e-1)*60*60*1e3)))}},demandeFormValue:{handler:function(t){this.demandeForm=this.$root.getDefaultDemande().find(function(e){return e.value==t})||{date:""},this.demandeForm.date=this.selectedCel.day}}},props:{user:Object}}),at=st,rt=(s("4b3a"),Object(m["a"])(at,tt,et,!1,null,"387fe2cc",null));rt.options.__file="PlanningComponent.vue";var nt=rt.exports,ot={name:"planning",components:{SearchUser:Y,PlanningComponent:nt},created:function(){this.user=this.$root.getLoggedUser(),this.canEditName=this.$root.isDRH(this.user)||this.$root.isAdmin(this.user),this.demandesList=this.$root.getCurrentContract(this.user).demandes},data:function(){return{canEditName:!1,user:{},demandesList:[]}},methods:{loadUser:function(t){this.user=t},acceptDemande:function(t,e,s){this.$root.acceptDemande(t,e,s),this.refreshDemandeList()},refusDemande:function(t,e,s){this.$root.refusDemande(t,e,s),this.refreshDemandeList()},refreshDemandeList:function(){var t=this,e=this.$root.getLoggedUser(),s=this.$root.getCurrentContract(e).demandes.map(function(s){return s.user="Moi",s.userId=e.id,s.contractId=t.$root.getCurrentContract(e).id,s});this.demandesList=s.concat(this.$root.getYourTeamsDemandes(e.teams,e.id)).sort().reverse()}},computed:{canAccept:function(){return this.$root.isAdmin(this.$root.getLoggedUser())||this.$root.isDRH(this.$root.getLoggedUser())||this.$root.isTL(this.$root.getLoggedUser())}},watch:{user:function(t){this.refreshDemandeList()}}},it=ot,lt=(s("1e1e"),Object(m["a"])(it,Q,Z,!1,null,"5ae569fa",null));lt.options.__file="Planning.vue";var ct=lt.exports;a["a"].use(_["a"]);var dt=new _["a"]({routes:[{path:"/",name:"dashboard",component:N},{path:"/login",name:"login",component:T},{path:"/planning",name:"planning",component:ct},{path:"/profil",name:"profil",component:K},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),ut=(s("6762"),s("2fdb"),["USER","TEAM_LEADER","DIRECTEUR_DES_RESSOURCES_HUMAINES","ADMIN"]),mt=[{id:"xxxxxxxxx",value:"1",text:"Congé payé",jourPayer:!0,status:"EN_COURS",date:"2018-01-01"},{id:"xxxxxxxxx",value:"2",text:"Récupération",jourPayer:!0,status:"EN_COURS",date:"2018-01-01"},{id:"xxxxxxxxx",value:"3",text:"Aménagment d'horaire",jourPayer:!0,status:"EN_COURS",date:"2018-01-01"},{id:"xxxxxxxxx",value:"4",text:"Absence",jourPayer:!1,status:"EN_COURS",date:"2018-01-01"}],ft=function(){return JSON.parse(localStorage.getItem("data"))},pt=function(t){return localStorage.setItem("data",JSON.stringify(t))},ht=function(t){return(""+t).length<2?"0"+t:""+t},vt=function(t){return t.getFullYear()+"-"+ht(t.getMonth()+1)+"-"+ht(t.getDate())},gt=function(){null==ft()&&pt({users:[{id:0,password:"admin",pseudo:"Admin",firstName:"Matthieu",lastName:"Fournier",ddn:"1996-06-10",tel:"00 11 22 33 44",addresse:{cp:"44200",ville:"Nantes",rue:"XX rue de la rue",complement:"12em etage"},mail:"admin@domain.com",roles:["USER","TEAM_LEADER","DIRECTEUR_DES_RESSOURCES_HUMAINES","ADMIN"],teams:["Team 1"],contrats:[{id:0,titre:"Contrat test pour user",dateDebut:"2018-11-08",dateFin:"2018-11-16",nbHeureSemaine:35,horaire:[[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[],[]],demandes:[]},{id:1,titre:"Contrat 2",dateDebut:"2018-11-19",dateFin:"2019-11-30",nbHeureSemaine:35,horaire:[[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[],[]],demandes:[{id:"xxxx01xxx",value:"1",text:"Congé payé",jourPayer:!0,status:"ACCEPTE",date:"2018-11-12"}]}]},{id:1,password:"user",pseudo:"BenjaminBarsseur",firstName:"Benjamin",lastName:"Brasseur",ddn:"1996-06-10",tel:"00 11 22 33 44",addresse:{cp:"44200",ville:"Nantes",rue:"XX rue de la rue",complement:"12em etage"},mail:"user@domain.com",roles:["USER"],teams:["Team 1"],contrats:[{id:2,titre:"Contrat 2",nbHeureSemaine:35,horaire:[[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[["09h30","12h00"],["13h30","18h00"]],[],[]],dateDebut:"2018-11-08",dateFin:"2018-11-16",demandes:[{id:"xxx02xxxx",value:"1",text:"Congé payé",jourPayer:!0,status:"ACCEPTE",date:"2018-11-12"},{id:"xxx03xxxx",value:"2",text:"Récupération",jourPayer:!0,status:"ACCEPTE",date:"2018-11-13"},{id:"xxx04xxxx",value:"3",text:"Aménagment d'horaire",jourPayer:!0,status:"ACCEPTE",date:"2018-11-14"},{id:"xxx05xxxx",value:"4",text:"Absence",jourPayer:!1,status:"ACCEPTE",date:"2018-11-15"}]},{id:5456465,titre:"Contrat 2",dateDebut:"2018-11-19",dateFin:"2019-11-30",nbHeureSemaine:35,horaire:[[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[["08h30","12h00"],["13h30","17h00"]],[],[]],demandes:[{id:"xxxx08xxx",value:"1",text:"Congé payé",jourPayer:!0,status:"ACCEPTE",date:"2018-11-12"}]}]}]})},Ct={getData:function(){return ft()},setData:function(t){return pt(t)},resetData:function(){localStorage.removeItem("data"),sessionStorage.removeItem("user"),gt()},isLogged:function(){return null!=sessionStorage.getItem("user")},isLoggin:!1,getLoggedUser:function(){return JSON.parse(sessionStorage.getItem("user"))},logout:function(){return sessionStorage.removeItem("user")},login:function(t,e){gt();var s=ft().users.find(function(s){return s.mail==t&&s.password==e});return void 0!=s&&sessionStorage.setItem("user",JSON.stringify(s)),s},saveUser:function(t){var e=ft(),s=e.users.map(function(t){return t.id}).indexOf(t.id);e.users[s]=t,pt(e),JSON.parse(sessionStorage.getItem("user")).id==t.id&&sessionStorage.setItem("user",JSON.stringify(t))},isAdmin:function(t){return t.roles.indexOf("ADMIN")>-1},isDRH:function(t){return t.roles.indexOf("DIRECTEUR_DES_RESSOURCES_HUMAINES")>-1},isTL:function(t){return t.roles.indexOf("TEAM_LEADER")>-1},getRoles:function(){return ut},getTeams:function(){return ft().users.reduce(function(t,e){return t.push(e.teams),t},[]).reduce(function(t,e){return t.indexOf(-1==e)&&t.push(e),t},[])},createUser:function(t){var e=ft();t.id=(new Date).getTime(),e.users.push(t),pt(e)},findUser:function(t,e,s,a){var r=ft().users,n={firstName:r.filter(function(e){return e.firstName.toUpperCase().includes(t.toUpperCase())})||[],lastName:r.filter(function(t){return t.lastName.toUpperCase().includes(e.toUpperCase())})||[],pseudo:r.filter(function(t){return t.pseudo.toUpperCase().includes(s.toUpperCase())})||[],mail:r.filter(function(t){return t.mail.toUpperCase().includes(a.toUpperCase())})||[]};return n},getUser:function(t){return ft().users.find(function(e){return e.id==t})},formatDate:function(t){return t.getFullYear()+"-"+ht(t.getMonth()+1)+"-"+ht(t.getDate())},getDefaultDemande:function(){return mt},saveDemande:function(t,e,s){var a=ft();s.id=(new Date).getTime(),a.users.find(function(e){return e.id==t}).contrats.find(function(t){return t.id==e}).demandes.push(s),sessionStorage.setItem("user",JSON.stringify(a.users.find(function(t){return t.id==JSON.parse(sessionStorage.getItem("user")).id}))),pt(a)},getCurrentContract:function(t){return t.contrats.find(function(t){return t.dateDebut<=vt(new Date)&&vt(new Date)<=t.dateFin})||{id:-1}},getYourTeamsDemandes:function(t,e){return ft().users.map(function(s){var a=[];if(s.id!=e&&t.reduce(function(t,e){return-1!=s.teams.indexOf(e)&&(t=!0),t},!1)){var r=s.contrats.find(function(t){return t.dateDebut<=vt(new Date)&&vt(new Date)<=t.dateFin})||{demandes:[]};a=r.demandes.filter(function(t){return!0}).map(function(t){return t.user=s.pseudo,t.userId=s.id,t.contractId=r.id,t})}return a}).reduce(function(t,e){return t.concat(e)})},acceptDemande:function(t,e,s){var a=ft();a.users.find(function(e){return e.id==t}).contrats.find(function(t){return t.id==e}).demandes.find(function(t){return t.id==s}).status="ACCEPTE",pt(a)},refusDemande:function(t,e,s){var a=ft();a.users.find(function(e){return e.id==t}).contrats.find(function(t){return t.id==e}).demandes.find(function(t){return t.id==s}).status="REFUSE",pt(a)}};a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({router:dt,data:Ct,render:function(t){return t(C)}}).$mount("#app")},6422:function(t,e,s){"use strict";var a=s("3beb"),r=s.n(a);r.a},"64a9":function(t,e,s){},"6aab":function(t,e,s){t.exports=s.p+"img/login-img.333fd4c3.jpg"},"77e7":function(t,e,s){"use strict";var a=s("bf9a"),r=s.n(a);r.a},"868c":function(t,e,s){},"9d1f":function(t,e,s){},a8ad:function(t,e,s){"use strict";var a=s("9d1f"),r=s.n(a);r.a},bf9a:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},f84d:function(t,e,s){}});
//# sourceMappingURL=app.34a814bf.js.map