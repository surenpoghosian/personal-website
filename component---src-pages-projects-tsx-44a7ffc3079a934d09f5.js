(self.webpackChunktrekhleb_github_io=self.webpackChunktrekhleb_github_io||[]).push([[4317],{2585:function(e,t,l){var n=l(9720).w_;e.exports.z=function(e){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574-22.055 14.87-1.847 26.571-25.81 6.425-10.803 24.314-26.46-2.795-18.475 19.087L256 285.403l-23.902 11.677-18.475-19.15-26.46 2.795-10.803-24.313-25.81-6.363-1.847-26.534-22.118-14.92 7.348-25.573-15.594-21.544 15.644-21.52-7.398-25.523 22.068-14.87L150.5 73.03l25.86-6.362 10.803-24.313 26.46 2.794L232.098 26 256 37.677 279.902 26l18.475 19.149 26.46-2.794 10.803 24.313 25.81 6.425 1.847 26.534 22.055 14.87-7.347 25.574 15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242 72.355 72.355 0 0 0 72.242-72.242zm-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283 52.395 52.395 0 0 0-52.282-52.245z"}}]})(e)}},7439:function(e,t,l){"use strict";var n=l(7294),a=l(4519),r=l(1705);t.Z=e=>{const{children:t,link:l}=e;if(!t)return null;const s=n.createElement(a.Z,{level:a._.h3},t),c=l?n.createElement(r.Z,{link:l},s):null;return n.createElement("div",{className:"mb-3"},c||s)}},2648:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return G}});var n=l(7294),a=l(5785),r=l(3543),s=l(9211),c=l(7500),m=l(2585),u=l(3354),o=l(7966),i=l(9879),E=l(9048),d=l(3400),h=l(6945),v=l(7439),Z=l(5103);var p=e=>{const{children:t,className:l="px-6 pb-6"}=e;return t?n.createElement("div",{className:l},n.createElement(Z.Z,null,t)):null},f=l(630),g=l(4137),k=l(3734),D=l(1198),N=l(1705),y=l(3839);var b=e=>{var t;const{project:l}=e;if(!l)return null;const a=null!=l&&l.tags?n.createElement("div",null,n.createElement(d.Z,{tags:l.tags,numToShow:3})):null,b=n.createElement(u.Z,{startDate:l.startDate,endDate:l.endDate,className:"text-xs text-gray-500"}),x=(0,D.$_)(l),j={url:null==l||null===(t=l.srcURL)||void 0===t?void 0:t.url,caption:"Stars on GitHub"},w="number"==typeof x?n.createElement(k.Z,{stars:x,link:j,className:"text-xs text-gray-500 font-light"}):null,L=l.summary?l.summary.map(((e,t)=>n.createElement("p",{key:t},e))):null,S=L?n.createElement("div",{className:"mb-3 font-light"},L):null,z=l.archived?void 0:l.demoURL||l.srcURL,P=l.demoURL&&!l.archived?n.createElement(f.Z,{link:l.demoURL,startEnhancer:n.createElement(r.Z,null),className:"mr-4"},"Demo"):null,R=l.srcURL&&!l.archived?n.createElement(f.Z,{link:l.srcURL,startEnhancer:n.createElement(s.h,null)},"Source Code"):null,_=l.cover?n.createElement(h.Z,{image:l.cover}):null,U=null!=l&&l.archived?n.createElement(p,null,n.createElement(g.Z,null)):null,C=P||R?n.createElement(p,null,P,R):null,V=null!=l&&l.links&&null!=l&&l.links.length?null==l?void 0:l.links.map(((e,t)=>n.createElement("li",{key:t},n.createElement(N.Z,{link:e,className:"text-sm underline",separatorClassName:"w-1",startEnhancer:n.createElement(c.F,{size:14})},(null==e?void 0:e.caption)||"Read more")))):null,B=null!=l&&l.achievements&&l.achievements.length?n.createElement(Z.Z,{className:"mt-3"},n.createElement(N.Z,{link:(0,D.OL)(l.id),className:"text-sm underline",separatorClassName:"w-1",startEnhancer:n.createElement(m.z,{size:18})},"Achievements"),n.createElement(y.Z,{className:"ml-2"},n.createElement("small",null,l.achievements.length))):null,O=V?n.createElement("ul",{className:"mt-3"},V):null;return n.createElement(o.ZP,null,n.createElement(E.ZP,{link:z},_),n.createElement(i.ZP,null,n.createElement(v.Z,{link:z},l.name),n.createElement(Z.Z,{className:"mb-3 justify-between"},n.createElement("div",null,b),n.createElement("div",null,w)),S,a,B,O),C,U)},x=l(7307);var j=e=>{const{projects:t}=e,l=t.map((e=>n.createElement(b,{project:e,key:e.id})));return n.createElement(x.ZP,null,l)},w=l(578),L=l(9737),S=l(7943);const z="startDateAsc",P="startDateDesc",R="starsDesc",_={[P]:{title:"➘ start date"},[z]:{title:"➚ start date",hidden:!0},[R]:{title:"➘ stars"}},U=Object.keys(_).filter((e=>!_[e].hidden));var C=e=>{const{onSort:t,sortBy:l}=e,a=Object.keys(_).filter((e=>{const t=_[e];return!(null!=t&&t.hidden)})).map((e=>{const t=_[e];return n.createElement("option",{key:e,value:e},t.title)}));return n.createElement("div",null,n.createElement(Z.Z,null,n.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Sort by:"),n.createElement("div",null,n.createElement("select",{onChange:e=>{const l=e.target.value;t(l)},defaultValue:l,className:"text-sm"},a))))};const V="undefined"==typeof document,B=()=>{const e=V?"":document.location.search.substring(1);return new URLSearchParams(e)},O=e=>B().get(e),$="sort",A={[P]:{sort:(e,t)=>null!=e&&e.startDate&&t.startDate&&e.startDate!==t.startDate?e.startDate>t.startDate?-1:1:0},[z]:{sort:(e,t)=>null!=e&&e.startDate&&t.startDate&&e.startDate!==t.startDate?e.startDate<t.startDate?-1:1:0},[R]:{sort:(e,t)=>{const l=(0,D.$_)(e)||0,n=(0,D.$_)(t)||0;return l===n?0:l>n?-1:1}}},T=()=>{const e=P,t=((e,t)=>{const l=O(e);return null===l?t:l})($,e);return U.includes(t)?t:e};var q=e=>{const{projects:t}=e,{0:l,1:r}=(0,n.useState)(T()),{0:s,1:c}=(0,n.useState)((0,D.Ec)(t));(0,n.useEffect)((()=>{const e=(0,a.Z)(s).sort(A[l].sort);c(e)}),[l]);const m=s.length;return n.createElement(w.Z,null,n.createElement(S.ZP,{title:"Projects",description:"Projects and experiments that help people learn"}),n.createElement(Z.Z,null,n.createElement(L.Z,null,"Projects"),n.createElement(y.Z,{className:"ml-3 self-start"},m)),n.createElement(Z.Z,{className:"mb-6 justify-between"},n.createElement(C,{onSort:e=>{((e,t)=>{if(V)return;const l=B();l.set(e,t);const n="?"+l.toString()+document.location.hash;window.history.pushState(null,"",n)})($,e),r(e)},sortBy:l}),n.createElement(Z.Z,{className:"ml-3"},n.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Total stars:"),n.createElement(k.Z,{stars:(0,D.uf)(t)}))),n.createElement(j,{projects:s}))},F=l(742);var G=()=>n.createElement(q,{projects:F.q})}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-44a7ffc3079a934d09f5.js.map