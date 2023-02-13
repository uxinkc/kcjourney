import{_ as E,d as c,f as l,r as a,c as w,w as V,o as x,h as P,a as D,e as r,b as t,i as g,g as d,u as L}from"./index.000e0750.js";import{u as R}from"./useNavigation.50be0438.js";const y=c(()=>l(()=>import("./BaseHeader.3d02ef23.js"),["assets/BaseHeader.3d02ef23.js","assets/index.000e0750.js","assets/index.496be95f.css","assets/useNavigation.50be0438.js"])),A=c(()=>l(()=>import("./BaseFooter.9caf8adf.js"),["assets/BaseFooter.9caf8adf.js","assets/index.000e0750.js","assets/index.496be95f.css"])),O=c(()=>l(()=>import("./PopularVideos.fdf76da7.js"),["assets/PopularVideos.fdf76da7.js","assets/index.000e0750.js","assets/index.496be95f.css","assets/useNavigation.50be0438.js"])),T=c(()=>l(()=>import("./MostRecentVideos.c83965ad.js"),["assets/MostRecentVideos.c83965ad.js","assets/index.000e0750.js","assets/index.496be95f.css","assets/useNavigation.50be0438.js"])),H={components:{baseHeader:y,baseFooter:A,popularVideos:O,mostRecentVideos:T},setup(b){a("/ux-journey/");const v=L(),{goto:f}=R(),o=a(!1),n=a("RGurnlgbuQ4");a("RGurnlgbuQ4-container");const _=a(""),i=w(()=>{let e=v.getters["videos/getVideos"];return e?e.videos:null}),u=()=>{let s=document.getElementById(n.value+"-container").parentElement;o.value?(s.classList.add("uxt-drawer__container-bg--hide"),s.classList.remove("uxt-drawer__container-bg--show"),o.value=!1):(s.classList.add("uxt-drawer__container-bg--show"),s.classList.remove("uxt-drawer__container-bg--hide"),o.value=!0)},m=e=>{let s=e.filter(j=>j.uid==n.value);p(s),h(s)},p=e=>{_.value=e[0].desc},h=e=>{let s=document.getElementById(n.value+"-container");s&&(s.innerHTML=e[0].transcript)};return V(i,e=>{m(e)}),x(()=>{}),{goto:f,videoId:n,videosData:i,videoDescription:_,showTranscript:o,toggleTranscriptDrawer:u}}},I={id:"main-content",tabindex:"-1"},C=g('<div class="fds-section"><div class="fds-section__bd"><div class="fds-m-t--s fds-m-b--m"><div class="fds-level@m fds-level--justify-between"><h1 class="sr-only">Home Page</h1><p class="fds-text--lead fds-m-t--m"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>&#39;s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation. </p></div></div></div></div>',1),F={class:"fds-section"},S={class:"fds-section__bd"},k={class:"ds-l-page"},B=g('<div class="ds-l-page__adjacent"><div id="jump-target"><div class="ds-jump"><ul class="ds-jump__list"><li class="ds-jump__item ds-jump__item--active"><a class="ds-jump__link" href="#main-content">Overview</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#most-recent">Most Recent Videos</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#popular-videos">Popular Videos</a></li></ul></div></div></div>',1),N={class:"ds-l-page__body"},$={class:"ds-article"},M=t("h2",{class:"sr-only"},"Overview",-1);function G(b,v,f,o,n,_){const i=d("baseHeader"),u=d("most-recent-videos"),m=d("popular-videos"),p=d("baseFooter");return P(),D("div",null,[r(i,{USE_SEARCH:"false"}),t("main",I,[C,t("div",F,[t("div",S,[t("div",k,[B,t("div",N,[t("article",$,[M,r(u),r(m)])])])])])]),r(p)])}const q=E(H,[["render",G]]);export{q as default};
