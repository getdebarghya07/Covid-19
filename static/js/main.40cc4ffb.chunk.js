(this.webpackJsonpcovidex=this.webpackJsonpcovidex||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){},45:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){},58:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(18),n=c.n(i),r=(c(45),c(30),c(3));c(23);function l(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.message.trim()||(t.message="Message required"),t}var j=c(20),d=c(14),o=function(e,t){var c=Object(s.useState)({username:"",email:"",message:""}),a=Object(r.a)(c,2),i=a[0],n=a[1],l=Object(s.useState)({}),o=Object(r.a)(l,2),b=o[0],u=o[1],h=Object(s.useState)(!1),O=Object(r.a)(h,2),m=O[0],x=O[1];return Object(s.useEffect)((function(){0===Object.keys(b).length&&m&&e()}),[b]),{handleChange:function(e){var t=e.target,c=t.name,s=t.value;n(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},c,s)))},handleSubmit:function(e){e.preventDefault(),u(t(i)),x(!0)},values:i,errors:b}},b=c(0),u=function(e){var t=e.submitForm,c=o(t,l),s=c.handleChange,a=c.handleSubmit,i=c.values,n=c.errors;return Object(b.jsx)("div",{className:"form-content-right",children:Object(b.jsxs)("form",{onSubmit:a,className:"form",noValidate:!0,children:[Object(b.jsx)("h1",{children:"Feel free to reach us"}),Object(b.jsxs)("div",{className:"form-inputs",children:[Object(b.jsx)("label",{className:"form--label",children:"Name"}),Object(b.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your name",value:i.username,onChange:s}),n.username&&Object(b.jsx)("p",{children:n.username})]}),Object(b.jsxs)("div",{className:"form-inputs",children:[Object(b.jsx)("label",{className:"form--label",children:"Email"}),Object(b.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:i.email,onChange:s}),n.email&&Object(b.jsx)("p",{children:n.email})]}),Object(b.jsxs)("div",{className:"form-inputs",children:[Object(b.jsx)("label",{className:"form--label",children:"Message"}),Object(b.jsx)("input",{className:"form-input",type:"text",name:"message",placeholder:"Enter your Message",value:i.message,onChange:s}),n.message&&Object(b.jsx)("p",{children:n.message})]}),Object(b.jsx)("button",{className:"form-input-btn",type:"submit",children:"Submit"})]})})},h=c.p+"static/media/img-3.5ebd0401.svg",O=function(){return Object(b.jsxs)("div",{className:"form-content-right",children:[Object(b.jsx)("h1",{className:"form-success",children:"We have received your request!"}),Object(b.jsx)("img",{className:"form-img-2",src:h,alt:"success-img"})]})},m=c.p+"static/media/img-2.b00d6c19.svg",x=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"formheader",children:Object(b.jsx)("h1",{className:"feedbackheader",children:"Contact Us"})}),Object(b.jsxs)("div",{id:"contact",className:"form-container",children:[Object(b.jsx)("div",{className:"form-content-left",children:Object(b.jsx)("img",{className:"form-img",src:m,alt:"spaceship"})}),c?Object(b.jsx)(O,{}):Object(b.jsx)(u,{submitForm:function(){a(!0)}})]})]})},f=c(10),v=c.n(f),g=c(12),p=(c(48),c(37)),N=c.n(p),k=function(){Object(s.useEffect)((function(){}),[]);var e=[{id:0,img:"",url:"",tit:" "},{id:1,img:"",url:"",tit:" "},{id:2,img:"",url:"",tit:" "},{id:3,img:"",url:"",tit:" "},{id:4,img:"",url:"",tit:" "},{id:5,img:"",url:"",tit:" "},{id:6,img:"",url:"",tit:" "},{id:7,img:"",url:"",tit:" "}],t=Object(s.useState)(e),c=Object(r.a)(t,2),a=c[0],i=c[1],n=Object(s.useState)(0),l=Object(r.a)(n,2),j=(l[0],l[1],[].concat(e));Object(s.useState)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(){var t,c,s,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gnews.io/api/v4/search?q=health&country=in&token=85ed0074e82e6b9570edff9b98132306");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c=e.sent,console.log(c),s=0;s<8;s++)n=c.articles[s],j[s].img=n.image,j[s].tit=n.title,j[s].url=n.url,j[s].id=n.source.name;i(j),console.log(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);a[0].img;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"news",className:"headerNews",children:[Object(b.jsx)("h1",{className:"mb-5",children:"\ud83d\udd34 LIVE"}),Object(b.jsx)("h1",{children:" Latest News Updates"})]}),Object(b.jsx)("div",{className:"mainnews",children:Object(b.jsxs)(N.a,{autoplay:!0,autoplay_speed:5e3,children:[Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[0].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[0].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[0].tit," ",Object(b.jsx)("br",{})," Source : ",a[0].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[1].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[1].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[1].tit," ",Object(b.jsx)("br",{})," Source : ",a[1].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[2].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[2].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[2].tit," ",Object(b.jsx)("br",{})," Source : ",a[2].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[3].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[3].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[3].tit," ",Object(b.jsx)("br",{})," Source : ",a[3].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[4].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:{pathname:a[4].url},children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[4].tit," ",Object(b.jsx)("br",{})," Source : ",a[4].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[5].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[5].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[5].tit," ",Object(b.jsx)("br",{})," Source : ",a[5].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[6].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[6].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[6].tit," ",Object(b.jsx)("br",{})," Source : ",a[6].id]})]})}),Object(b.jsx)("div",{className:"crd",style:{backgroundColor:"red",backgroundImage:"url('"+a[7].img+"')",backgroundSize:"cover"},children:Object(b.jsxs)("a",{className:"newsLink",href:a[7].url,children:[" ",Object(b.jsxs)("div",{className:"cntnws",children:[a[7].tit," ",Object(b.jsx)("br",{})," Source : ",a[7].id]})]})})]})})]})},S=(c(31),c(49),function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(){var e=Object(g.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c.statewise),a(c.statewise),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){i()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{id:"Covid-19",className:"container-fluid mt-5",children:Object(b.jsxs)("div",{className:"main-heading",children:[Object(b.jsx)("h1",{className:"mb-5",children:"\ud83d\udd34 LIVE"}),Object(b.jsxs)("h1",{className:"mb-5",children:[Object(b.jsx)("span",{className:"font-weight-bold",children:"INDIA"})," COVID-19 Dashboard"]}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table-hover table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"State"}),Object(b.jsx)("th",{children:"Confirmed"}),Object(b.jsx)("th",{children:"Recovered"}),Object(b.jsx)("th",{children:"Deaths"}),Object(b.jsx)("th",{children:"Active"}),Object(b.jsx)("th",{children:"Updated"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e.state}),Object(b.jsx)("td",{children:e.confirmed}),Object(b.jsx)("td",{children:e.recovered}),Object(b.jsx)("td",{children:e.deaths}),Object(b.jsx)("td",{children:e.active}),Object(b.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})})}),w=(c(50),c(40));var y=function(e){var t=Object(w.a)(e.dat),c=Object(s.useState)(t),a=Object(r.a)(c,2),i=(a[0],a[1],Object(s.useState)({})),n=Object(r.a)(i,2),l=n[0],j=n[1];return Object(s.useEffect)((function(){j(Object(d.a)({},e.dat[e.id]))}),[e.dat]),console.log(l),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"dta11",children:[Object(b.jsx)("div",{className:"statename",children:l.state}),Object(b.jsx)("div",{className:"stateBeds",children:l.totalBeds}),Object(b.jsx)("div",{className:"stateBeds",children:l.totalHospitals})]})})};var C=function(){var e=Object(s.useState)([null]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/hospitals/beds").then((function(e){return e.json()})).then((function(e){console.log(e.data.regional),a(e.data.regional)}))}),[]),Object(b.jsxs)("div",{id:"health",children:[Object(b.jsx)("h1",{className:"mb-5",children:"\ud83d\udd34 LIVE"}),Object(b.jsx)("h1",{className:"headBeds",children:"Number of Beds and Hospitals available"}),Object(b.jsxs)("div",{className:"tableHead",children:[Object(b.jsx)("div",{className:"statename",children:"State"}),Object(b.jsx)("div",{className:"stateBeds",children:"Total Beds"})," ",Object(b.jsx)("div",{className:"stateBeds",children:"Total Hospitals"})]}),Object(b.jsxs)("div",{className:"tble",children:[Object(b.jsx)(y,{dat:c,id:0}),Object(b.jsx)(y,{dat:c,id:1}),Object(b.jsx)(y,{dat:c,id:2}),Object(b.jsx)(y,{dat:c,id:3}),Object(b.jsx)(y,{dat:c,id:4}),Object(b.jsx)(y,{dat:c,id:5}),Object(b.jsx)(y,{dat:c,id:6}),Object(b.jsx)(y,{dat:c,id:7}),Object(b.jsx)(y,{dat:c,id:8}),Object(b.jsx)(y,{dat:c,id:9}),Object(b.jsx)(y,{dat:c,id:10}),Object(b.jsx)(y,{dat:c,id:11}),Object(b.jsx)(y,{dat:c,id:12}),Object(b.jsx)(y,{dat:c,id:13}),Object(b.jsx)(y,{dat:c,id:14}),Object(b.jsx)(y,{dat:c,id:15}),Object(b.jsx)(y,{dat:c,id:16}),Object(b.jsx)(y,{dat:c,id:17}),Object(b.jsx)(y,{dat:c,id:18}),Object(b.jsx)(y,{dat:c,id:19}),Object(b.jsx)(y,{dat:c,id:20}),Object(b.jsx)(y,{dat:c,id:21}),Object(b.jsx)(y,{dat:c,id:22}),Object(b.jsx)(y,{dat:c,id:23}),Object(b.jsx)(y,{dat:c,id:24}),Object(b.jsx)(y,{dat:c,id:25}),Object(b.jsx)(y,{dat:c,id:26}),Object(b.jsx)(y,{dat:c,id:27}),Object(b.jsx)(y,{dat:c,id:28}),Object(b.jsx)(y,{dat:c,id:36})]})]})},L=(c(51),function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(){var e=Object(g.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.rootnet.in/covid19-in/notifications");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c.data.notifications),a(c.data.notifications),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){i()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"Guidelines",className:"container-fluid mt-5",children:[Object(b.jsx)("h1",{className:"guideline-head",children:" Covid Guidelines "}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table-hover table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"No"}),Object(b.jsx)("th",{children:"Latest News"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:t+1}),Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:e.link,children:e.title})})]},t)}))})]})})]})})});var E=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(C,{}),Object(b.jsx)(k,{}),Object(b.jsx)(L,{}),Object(b.jsx)(x,{})]})},I=c(38),F=c.n(I);c(53);function B(){return Object(b.jsx)("div",{className:"herosec",children:Object(b.jsxs)("div",{className:"conthero",children:[" ",Object(b.jsx)(F.a,{onInit:function(e){e.typeString("Welcome to our Covid tracking application.").pauseFor(3e3).deleteAll().typeString("Stay Safe !! Stay Healthy !!").start()}})]})})}var T=c(2),H=c(4);var z=Object(H.f)((function(e){var t=e.history,c=e.children;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),Object(b.jsx)(s.Fragment,{children:c})}));c(58);var A=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("section",{className:"footer-subscription",children:[Object(b.jsx)("p",{className:"footer-subscription-heading",children:"Join our newsletter to receive current health related news"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(b.jsx)("div",{className:"input-areas",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(b.jsx)("button",{className:"footer--button",children:"Subscribe"})]})})]}),Object(b.jsxs)("div",{class:"footer-links",children:[Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{class:"footer-link-items",children:[Object(b.jsx)("h2",{children:"About Us"}),Object(b.jsx)(T.b,{to:"/Sign-up",children:"How it works"}),Object(b.jsx)(T.b,{to:"/",children:"Terms of Service"}),Object(b.jsx)(T.b,{to:"/",children:"Privacy Policy"})]}),Object(b.jsxs)("div",{class:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Contact Us"}),Object(b.jsx)(T.b,{to:"/Contact",children:"Contact"}),Object(b.jsx)(T.b,{to:"/",children:"Support"}),Object(b.jsx)(T.b,{to:"/",children:"Legal Notices"})]})]}),Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{class:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Our Services"}),Object(b.jsx)(T.b,{to:"/Sign-up",children:"Live Covid Tracker"}),Object(b.jsx)(T.b,{to:"/",children:"Covid Guidelines"}),Object(b.jsx)(T.b,{to:"/",children:"Current Health News"}),Object(b.jsx)(T.b,{to:"/",children:"Find Hospital Services"})]}),Object(b.jsxs)("div",{class:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Social Media"}),Object(b.jsx)(T.b,{to:"/",children:"Instagram"}),Object(b.jsx)(T.b,{to:"/",children:"Facebook"}),Object(b.jsx)(T.b,{to:"/",children:"Youtube"}),Object(b.jsx)(T.b,{to:"/",children:"Twitter"})]})]})]}),Object(b.jsx)("section",{class:"social-media",children:Object(b.jsxs)("div",{class:"social-media-wrap",children:[Object(b.jsx)("small",{class:"website-rights",children:"\xa9 Copyright CovidEX. All Rights Reserved"}),Object(b.jsxs)("div",{class:"social-icons",children:[Object(b.jsx)(T.b,{class:"social-icon-link facebook",to:"/","aria-label":"Facebook",children:Object(b.jsx)("i",{class:"fab fa-facebook-f"})}),Object(b.jsx)(T.b,{class:"social-icon-link instagram",to:"/","aria-label":"Instagram",children:Object(b.jsx)("i",{class:"fab fa-instagram"})}),Object(b.jsx)(T.b,{class:"social-icon-link youtube",to:"/","aria-label":"Youtube",children:Object(b.jsx)("i",{class:"fab fa-youtube"})}),Object(b.jsx)(T.b,{class:"social-icon-link twitter",to:"/","aria-label":"Twitter",children:Object(b.jsx)("i",{class:"fab fa-twitter"})}),Object(b.jsx)(T.b,{class:"social-icon-link twitter",to:"/","aria-label":"LinkedIn",children:Object(b.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})},D=c(15);c(66);var U=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{id:"bootstrap-overrides",className:"Navbar",children:Object(b.jsx)("div",{className:"Navbar-container",children:Object(b.jsxs)("ul",{className:c?"nav--menu active":"nav--menu",children:[Object(b.jsx)("li",{className:"nav--item",children:Object(b.jsx)(D.Link,{activeClass:"active",spy:!0,offset:0,duration:100,to:"Covid-19",smooth:!0,className:"nav--links",onClick:function(){return a(!1)},children:"Covid Tracker"})}),Object(b.jsx)("li",{className:"nav--item",children:Object(b.jsx)(D.Link,{activeClass:"active",spy:!0,offset:0,duration:100,to:"Guidelines",smooth:!0,className:"nav--links",children:"GuideLines"})}),Object(b.jsx)("li",{className:"nav--item",children:Object(b.jsx)(D.Link,{activeClass:"active",spy:!0,offset:0,duration:100,to:"health",smooth:!0,className:"nav--links",children:"Health and Beds"})}),Object(b.jsx)("li",{className:"nav--item",children:Object(b.jsx)(D.Link,{activeClass:"active",spy:!0,offset:0,duration:100,to:"news",smooth:!0,className:"nav--links",children:"News"})})]})})})})};var q=function(){return Object(b.jsx)(T.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(B,{}),Object(b.jsx)(U,{}),Object(b.jsx)(H.c,{children:Object(b.jsx)(H.a,{path:"/Covid-19",exact:!0,component:E})}),Object(b.jsx)(z,{}),Object(b.jsx)(A,{})]})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))},M=c(70);c(67);var V=function(){var e=Object(M.a)().y,t=Object(s.useState)(!1),c=Object(r.a)(t,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){i(e>400)}),[e]),!!a&&Object(b.jsx)("div",{className:"scroll-to-top cursor-pointer text-center",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(b.jsx)("i",{className:"icon fas fa-chevron-up"})})};n.a.render(Object(b.jsxs)(a.a.StrictMode,{children:[Object(b.jsx)(V,{}),Object(b.jsx)(q,{})]}),document.getElementById("root")),G()}},[[68,1,2]]]);
//# sourceMappingURL=main.40cc4ffb.chunk.js.map