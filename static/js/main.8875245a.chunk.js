(this["webpackJsonpsurvey-app"]=this["webpackJsonpsurvey-app"]||[]).push([[0],{172:function(e,t,c){},173:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(59),r=c.n(n),j=c(15),i=c(3),l=c(1),d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"headerItems",children:[Object(l.jsx)("div",{className:"verticalBar"}),Object(l.jsx)("span",{children:"Ankete"})]})})})},o=c(28),b=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(o.a.Item,{href:"#",children:"Ankete"}),Object(l.jsx)(o.a.Item,{active:!0,children:"Nova anketa"})]})})},O=c(17),x=c(12),h=c(27),u=c.n(h),p=function(e){var t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],n=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("form",{children:Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"text",placeholder:"Nova anketa",style:{color:"#FFD954",border:"none",borderRadius:50,padding:"10px",minWidth:300},value:a,onChange:function(e){return n(e.target.value)}})})}),Object(l.jsx)(x.Icon,{className:"headerIcon",icon:u.a,style:{color:"#aaaaaa",fontSize:"28px",margin:5}})]})})},m=c(60),v=c.n(m),f=function(){var e=Object(s.useState)("#fff"),t=Object(O.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("#aaaaaa"),r=Object(O.a)(n,2),i=r[0],d=r[1],o=Object(s.useState)(),b=Object(O.a)(o,2),h=b[0],p=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"stepSelector",children:[Object(l.jsx)(j.b,{to:"/newsurvey",children:Object(l.jsx)(x.Icon,{className:"icon",icon:u.a,style:{background:c,color:i,border:h,fontSize:"32px"},onClick:function(){a("#ffda544b"),d("#FFD954"),p("none")}})}),Object(l.jsx)("div",{className:"hr"}),Object(l.jsx)(j.b,{to:"/results",children:Object(l.jsx)(x.Icon,{className:"icon",icon:v.a,style:{background:c,color:i,border:h,fontSize:"32px"},onClick:function(){a("#ffda544b"),d("#FFD954"),p("none")}})})]}),Object(l.jsxs)("div",{className:"stepSelectorText",children:[Object(l.jsx)("span",{style:{color:i},onClick:function(){d("#FFD954")},children:"Ure\u0111ivanje"}),Object(l.jsx)("span",{children:"Pregled"}),Object(l.jsx)("span",{children:"Slanje"}),Object(l.jsx)("span",{style:{color:i},onClick:function(){d("#FFD954")},children:"Rezultati"})]})]})},g=c(62),y=c(63),k=c(69),N=c(68),F=c(64),z=function(e){Object(k.a)(c,e);var t=Object(N.a)(c);function c(){var e;Object(g.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={dataHorizontal:{labels:["Po preporuci","Svidio mi se sadr\u017eaj","\u017delim produbiti postoje\u0107e znanje o tematici","Po zahtjevu poslodavca","Mislim da \u0107e mi pomo\u0107i u razvoju karijere","Drugi razlozi"],datasets:[{label:[],data:[25.49,16.81,18.12,32,13,4],fill:!1,backgroundColor:["rgba(11, 144, 197, 0.986)","rgba(42, 167, 47, 0.986)","rgba(255, 217, 54)","rgba(255,\t0,\t0)","rgba(186, 63, 211, 0.986)","rgba(73, 213, 255, 0.986)"],borderColor:[],borderWidth:1}]}},e}return Object(y.a)(c,[{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(F.a,{data:this.state.dataHorizontal,options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1}}]}}})})}}]),c}(a.a.Component),S=c(67),I=c(66),C=c.n(I),D=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"excel",children:[Object(l.jsx)(x.Icon,{icon:C.a,style:{fontSize:"32px"}})," Preuzmi excel datoteku"]}),Object(l.jsx)("div",{className:"surveyHeader",children:"Upitnik o zadovoljstvu provedenom edukacijom"}),Object(l.jsxs)("div",{className:"resultsContainer",children:[Object(l.jsxs)("div",{className:"resultsQuestion",children:[Object(l.jsx)("span",{children:"1."}),Object(l.jsx)("span",{children:"Zbog \u010dega ste se odlu\u010dili poha\u0111ati ovu edukaciju?"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(z,{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(S.a,{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"tableHeader",children:[Object(l.jsx)("th",{children:"OPCIJE"}),Object(l.jsx)("th",{children:"ODGOVORI"}),Object(l.jsx)("th",{})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{width:500},children:"Po preporuci"}),Object(l.jsx)("td",{children:"25.49%"}),Object(l.jsx)("td",{children:"9"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Svidio mi se sadr\u017eaj"}),Object(l.jsx)("td",{children:"16.81%"}),Object(l.jsx)("td",{children:"6"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\u017delim produbiti postoje\u0107e znanje o tematici"}),Object(l.jsx)("td",{children:"18.12%"}),Object(l.jsx)("td",{children:"8"})]})]})]})]})]})})};c(171),c(172);var P=function(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsx)(f,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/results",children:Object(l.jsx)(D,{})}),Object(l.jsx)(i.a,{path:"/",children:Object(l.jsx)(p,{})})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.8875245a.chunk.js.map