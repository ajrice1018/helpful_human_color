(window.webpackJsonphelpful_human_color=window.webpackJsonphelpful_human_color||[]).push([[0],{120:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(75),a(36)),i=a.n(o),u=a(69),s=a.n(u),m=a(35),d=a.n(m),f=a(68),E=a.n(f),h=function(){return r.a.createElement(i.a,{className:"justify-content-between",bg:"dark",variant:"dark"},r.a.createElement(i.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"/logo-symbol.svg",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(E.a.Item,null,r.a.createElement(s.a,{inline:!0},r.a.createElement(d.a,{type:"text",placeholder:"Search"}))))},p=a(16),b=a.n(p),g=a(24),v=a(8),j=function(e){for(var t=e.colorsPerPage,a=e.totalColors,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("a",{className:"pagination"},c.map(function(e){return r.a.createElement("a",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))}))},y=a(25),k=a.n(y),C=(a(120),a(18)),w=a.n(C),O=a(17),x=a.n(O),N=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},S=a(20),F=a.n(S),B=a(9),H=a.n(B),P=function(e){var t=e.colors,a=e.loading,c=Object(n.useState)(!1),l=Object(v.a)(c,2),o=l[0],i=l[1],u=function(){return i(!1)},s=function(){return i(!0)};return a?r.a.createElement("h2",null,"Loading...."):r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(x.a,{style:{justifyContent:"center"}},t.map(function(e){return r.a.createElement(w.a,{id:e.hex,onClick:s,style:{backgroundColor:e.hex}},r.a.createElement(w.a.Header,{style:{backgroundColor:"#FFFFFF"}},e.hex))}))),t.map(function(e){return r.a.createElement(H.a,{show:o,onHide:u},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,e.color)),r.a.createElement(w.a,{id:e.hex,style:{backgroundColor:e.hex}}),r.a.createElement(H.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:u},"Close")))}))},_=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)},M=(a(32),function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1],l=function(){return c(!1)},o=Object(n.useState)([]),i=Object(v.a)(o,2),u=i[0],s=i[1];return Object(n.useEffect)(function(){var e=Math.ceil(1054*Math.random());(function(){var t=Object(g.a)(b.a.mark(function t(){var a,n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("api/colors/".concat(e));case 2:a=t.sent,n=a.data,s(n);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[]),r.a.createElement("div",{style:{backgroundColor:"grey"}},r.a.createElement(F.a,{variant:"primary",className:"randomColorButton",onClick:function(){return c(!0)}},"Random Color"),r.a.createElement(H.a,{show:a,onHide:l},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement(H.a.Title,null,u.color)),r.a.createElement(w.a,{style:{backgroundColor:u.hex}}),r.a.createElement(H.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:l},"Close"))))}),z=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(v.a)(l,2),i=o[0],u=o[1],s=Object(n.useState)(1),m=Object(v.a)(s,2),d=m[0],f=m[1],E=Object(n.useState)(104),h=Object(v.a)(E,1)[0],p=Object(n.useState)(!1),y=Object(v.a)(p,1)[0];Object(n.useEffect)(function(){(function(){var e=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,k.a.get("api/colors");case 3:t=e.sent,c(t.data),u(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var C=d*h,w=C-h,O=a.slice(w,C);return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(x.a,{className:"randomNumber"},r.a.createElement(_,{style:{backgroundColor:"grey"},size:"md-3 sm-6"},r.a.createElement(M,null))),r.a.createElement(x.a,{style:{justifyContent:"right"}},r.a.createElement(P,{onClick:function(){return y(!0)},colors:O,loading:i}))),r.a.createElement(N,null,r.a.createElement(x.a,{style:{justifyContent:"right"}},r.a.createElement(j,{colorsPerPage:h,totalColors:a.length,paginate:function(e){return f(e)}}," "))))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,a){},70:function(e,t,a){e.exports=a(146)},75:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.ed532bba.chunk.js.map