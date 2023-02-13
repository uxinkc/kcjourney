import{r as N,j as M,_ as H,c as L,w as R,o as D,k as I,h as l,a as t,b as s,F as S,l as k,n as P,t as _,m,p as x,q as U,v as w,u as O}from"./index.000e0750.js";import{u as F}from"./useNavigation.50be0438.js";function K(){let b=N(!1),d=M({}),u=M({});const a=o=>{b=o},v=(o,h)=>{d=o,u=h;let f=o.getAttribute("aria-controls");o.setAttribute("aria-expanded","true"),document.getElementById(f).setAttribute("aria-hidden","false"),a(!0)},g=(o,h=!1)=>{let f=o.getAttribute("aria-controls");f&&(o.setAttribute("aria-expanded","false"),document.getElementById(f).setAttribute("aria-hidden","true"),a(!1))},e=o=>{o.addEventListener("focus",r)},n=o=>{o.removeEventListener("focus",r)},r=o=>{o.currentTarget},E=o=>{if(b&&d)try{let h=d.contains(o.target),f=u.contains(o.target);!h&&!f&&(C("closeAllMenus"),a(!1))}catch{}},A=o=>{b&&o.keyCode==27&&(C("closeAllMenus"),a(!1))},C=(o,h=null)=>{let f=document.getElementsByClassName("fds-nav-global__link--has-sub-menu");for(let B=0;B<f.length;B++){let c=f[B];c.cb=C,T(o,c)}},T=(o,h)=>{o=="addFocusListeners"?e(h):o=="removeFocusListeners"?n(h):o=="closeAllMenus"&&g(h,!0)};return{isMenuOpen:b,theItem:d,theMenu:u,openMenu:v,closeMenu:g,loopItems:C,listenForKeys:A,documentClickHandler:E}}const j={props:{NAV_DATA:Object,EXTRA_CLASSES:String,USE_SEARCH:String,USE_SCOPED_SEARCH:String},setup(b,{emit:d}){const{openMenu:u,closeMenu:a,loopItems:v,listenForKeys:g,documentClickHandler:e}=K(),{goto:n}=F();let r="/ux-journey/".substring(0,12-1);const E=N(r),A=N({}),C=L(()=>b.NAV_DATA),T=c=>{let i=c.main,p=c.side?c.side:[];return i.forEach(y=>{y.uid&&(y.uid=w())}),p.forEach(y=>{y.uid&&(y.uid=w())}),{main:i,side:p}};function o(c){let i=document.getElementById(c),p=i.nextSibling,y=i.getAttribute("aria-expanded");v("closeAllMenus"),y=="true"?a(i,p):u(i,p)}const h=c=>{let i=document.getElementById("searchPhrase"),p=i.value;i.value="",d("emitSearch",{type:"default",phrase:p})},f=c=>{let i=document.getElementById("searchPhrase"),p=i.value;i.value="";let y=document.getElementById("scopedCategory").selected;d("emitSearch",{type:"scoped",scope:y,phrase:p})},B=(c,i)=>{o(c),n(i)};return R(C,c=>{A.value=T(c)}),D(()=>{window.addEventListener("keydown",g),document.addEventListener("click",e),v("addFocusListeners")}),I(()=>{window.removeEventListener("keydown",g),document.removeEventListener("click",e),v("removeFocusListeners")}),{navData:A,navigateTo:B,goto:n,basePath:E,openMenu:u,closeMenu:a,loopItems:v,listenForKeys:g,toggleMenu:o,doSearch:h,doScopedSearch:f}}},V={class:"fds-nav-global"},q={class:"fds-nav-global__bd"},z={class:"fds-nav-global__list","aria-label":"Primary Navigation",id:"primary-navigation"},G=["data-control-id"],X={key:0},J=["id","onClick","aria-controls"],Q=["id"],W=["id"],Y=["aria-labelledby"],Z=["id"],$=["aria-labelledby"],ee=["href","onClick"],se={key:1},ae=["id","onClick","aria-controls"],ne=["id"],le=["id"],te={class:"fds-nav-global__sub-menu-bd"},oe=["aria-labelledby"],de=["href","onClick"],re={key:2},ie=["id","onClick","aria-controls"],ce=["id"],_e=["id"],ue=["aria-labelledby"],he=["id"],be=["aria-labelledby"],fe=["href","onClick"],ve={key:3},ge=["id","onClick","aria-controls"],pe=["id"],ye=["id"],Se={class:"fds-nav-global__sub-menu-bd"},ke=["aria-labelledby"],Ce=["href","onClick"],me={key:4},Ee=["href","onClick"],Be={class:"fds-nav-global__text"},Ae={key:0,class:"fds-nav-global__aside"},xe={class:"fds-level"},Ne=["href","onClick"],Te={class:"fds-level fds-level--inline fds-level--gutter-xs"},Me=["d"],Pe={key:1,class:"fds-nav-global__search"},Ue={class:"fds-search fds-search--small",role:"search"},we={class:"fds-search__bd"},He={class:"fds-search__entry fds-search__entry--grow"},Le=s("label",{class:"fds-search__label fds-search__label--sr-only",for:"searchPhrase"},"Search [app-name]",-1),De={class:"fds-search__submit"},Fe=s("span",{class:"fds-search__text"},"Search",-1),Re=[Fe],Ie={key:2,class:"fds-nav-global__search"},Oe={class:"fds-search fds-search--small",role:"search"},Ke={class:"fds-search__bd"},je={class:"fds-search__entry fds-search__entry--grow"},Ve=s("label",{class:"fds-search__label fds-search__label--sr-only",for:"scopedSearchPhrase"},"Search [app-name]",-1),qe={class:"fds-search__entry"},ze=s("label",{class:"fds-search__label fds-search__label--sr-only",for:"scopedCategory"},"Search Category",-1),Ge={class:"fds-select fds-select--small fds-search__select",name:"scopedCategory",id:"scopedCategory"},Xe=["value","selected"],Je={class:"fds-search__submit"},Qe=s("span",{class:"fds-search__text"},"Search",-1),We=[Qe];function Ye(b,d,u,a,v,g){return l(),t("nav",null,[s("div",V,[s("div",q,[s("ul",z,[(l(!0),t(S,null,k(a.navData.main,e=>(l(),t("li",{key:e.uid,"data-control-id":e.uid,class:P("fds-nav-global__list-item "+e.columnClass)},[e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="true"?(l(),t("div",X,[s("button",{id:e.uid+"-BTN",onClick:n=>a.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},_(e.label),9,Q)],8,J),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",{class:"fds-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[(l(!0),t(S,null,k(e.children,n=>(l(),t("div",{key:n.uid,class:"fds-nav-global__sub-menu-group"},[s("h3",{class:"fds-nav-global__sub-menu-title",id:n.uid},_(n.header),9,Z),s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":n.uid},[(l(!0),t(S,null,k(n.group,r=>(l(),t("li",{key:r.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:a.basePath+r.path,onClick:m(E=>a.navigateTo(e.uid+"-BTN",r.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},_(r.label),9,ee)]))),128))],8,$)]))),128))],8,Y)],8,W)])):e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="false"?(l(),t("div",se,[s("button",{id:e.uid+"-BTN",onClick:n=>a.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},_(e.label),9,ne)],8,ae),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",te,[s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),t(S,null,k(e.children,n=>(l(),t("li",{key:n.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:a.basePath+n.path,onClick:m(r=>a.navigateTo(e.uid+"-BTN",n.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},_(n.label),9,de)]))),128))],8,oe)])],8,le)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="true"?(l(),t("div",re,[s("button",{id:e.uid+"-BTN",onClick:n=>a.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},_(e.label),9,ce)],8,ie),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[(l(!0),t(S,null,k(e.children,n=>(l(),t("div",{key:n.uid,class:"fds-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[s("h3",{class:"fds-nav-global__sub-menu-title",id:n.uid},_(n.header),9,he),s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":n.uid},[(l(!0),t(S,null,k(n.group,r=>(l(),t("li",{key:r.uid,class:"fds-nav-global__sub-menu-item"},[s("a",{href:a.basePath+r.path,onClick:m(E=>a.navigateTo(e.uid+"-BTN",r.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},_(r.label),9,fe)]))),128))],8,be)],8,ue))),128))],8,_e)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="false"?(l(),t("div",ve,[s("button",{id:e.uid+"-BTN",onClick:n=>a.toggleMenu(e.uid+"-BTN"),class:"fds-nav-global__link fds-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fds-nav-global__text",id:e.uid+"-SUB"},_(e.label),9,pe)],8,ge),s("div",{class:"fds-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",Se,[s("ul",{class:"fds-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(l(!0),t(S,null,k(e.children,n=>(l(),t("li",{key:n.id,class:"fds-nav-global__sub-menu-item"},[s("a",{href:a.basePath+n.path,onClick:m(r=>a.navigateTo(e.uid+"-BTN",n.path),["prevent"]),class:"fds-nav-global__sub-menu-link"},_(n.label),9,Ce)]))),128))],8,ke)])],8,ye)])):(l(),t("div",me,[s("a",{href:a.basePath+e.path,onClick:m(n=>a.goto(e.path),["prevent"]),class:"fds-nav-global__link"},[s("span",Be,_(e.label),1)],8,Ee)]))],10,G))),128))]),a.navData.side?(l(),t("div",Ae,[s("div",xe,[(l(!0),t(S,null,k(a.navData.side,e=>(l(),t("span",{key:e.uid},[s("a",{href:a.basePath+e.path,onClick:m(n=>a.goto(e.path),["prevent"])},[s("span",Te,[e.icon?(l(),t("svg",{key:0,class:P(e.icon.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:e.icon.path},null,8,Me)],2)):x("",!0),s("span",null,_(e.label),1)])],8,Ne)]))),128))])])):x("",!0),u.USE_SEARCH=="true"?(l(),t("div",Pe,[s("div",Ue,[s("div",we,[s("div",He,[Le,s("input",{onKeyup:d[0]||(d[0]=U((...e)=>a.doSearch&&a.doSearch(...e),["enter"])),placeholder:"Search",class:"fds-input fds-input--small fds-search__input",id:"searchPhrase",type:"search",name:"searchPhrase"},null,32)]),s("div",De,[s("button",{onClick:d[1]||(d[1]=(...e)=>a.doSearch&&a.doSearch(...e)),class:"fds-btn fds-btn--small fds-search__btn fds-search__btn--icon"},Re)])])])])):x("",!0),u.USE_SCOPED_SEARCH=="true"?(l(),t("div",Ie,[s("div",Oe,[s("div",Ke,[s("div",je,[Ve,s("input",{onKeyup:d[2]||(d[2]=U((...e)=>a.doScopedSearch&&a.doScopedSearch(...e),["enter"])),placeholder:"Search",class:"fds-input fds-input--small fds-search__input",id:"scopedSearchPhrase",type:"search",name:"scopedSearchPhrase"},null,32)]),s("div",qe,[ze,s("select",Ge,[(l(!0),t(S,null,k(b.SCOPED_SEARCH_CATEGORIES,e=>(l(),t("option",{key:e.label,value:e.val,selected:e.selected},_(e.label),9,Xe))),128))])]),s("div",Je,[s("button",{onClick:d[3]||(d[3]=(...e)=>a.doScopedSearch&&a.doScopedSearch(...e)),class:"fds-btn fds-btn--small fds-search__btn fds-search__btn--icon"},We)])])])])):x("",!0)])])])}const Ze=H(j,[["render",Ye]]),$e={components:{globalNav:Ze},props:{USE_SEARCH:String},setup(b,{emit:d}){const u=N("/ux-journey/"),a=O(),{goto:v}=F(),g=L(()=>a.getters["navigation/getNavigation"]),e=n=>{d("emitSearch",n),v("/search/"+n.phrase)};return D(()=>{console.log("USE_SEARCH",b.USE_SEARCH),a.dispatch("navigation/setNavigation")}),{baseUrl:u,navigationData:g,submitSearch:e}}};function es(b,d,u,a,v,g){return l(),t("header")}const ns=H($e,[["render",es]]);export{ns as default};
