(this.webpackJsonpstudent=this.webpackJsonpstudent||[]).push([[0],{11:function(e,t,c){e.exports={header:"MainNavigation_header__3oHbF",logo:"MainNavigation_logo__1lVgE",active:"MainNavigation_active__iCymT",badge:"MainNavigation_badge__3f5Uu",uniTag:"MainNavigation_uniTag__3-5Rm"}},25:function(e,t,c){e.exports={card:"Card_card__3JjFR"}},26:function(e,t,c){e.exports={list:"Tutors_list__20w70"}},27:function(e,t,c){e.exports={main:"Layout_main__1sp6C"}},33:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(23),s=c.n(a),i=c(6),r=(c(32),c(33),c(2)),j=c(0);var o=function(){return Object(j.jsx)("div",{children:"Home"})},l=c(13),u=c.n(l),d=c(24),b=c(5),h=c(25),x=c.n(h);var O=function(e){return Object(j.jsx)("div",{className:x.a.card,children:e.children})},m=c(7),p=c.n(m);var v=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("li",{className:p.a.item,children:Object(j.jsxs)(O,{children:[Object(j.jsx)("div",{className:p.a.image,children:Object(j.jsx)("img",{src:e.image,alt:e.name})}),Object(j.jsxs)("div",{className:p.a.content,children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("p",{children:["Subjects:- ",e.subjects]}),Object(j.jsxs)("p",{children:["Ratings:- ",e.ratings]}),Object(j.jsxs)("p",{children:["Price:- ",e.price]})]}),Object(j.jsx)("div",{className:p.a.actions,children:Object(j.jsx)("button",{children:"View Profile"})})]})})})},f=c(26),_=c.n(f);var g=function(e){return Object(j.jsx)("ul",{className:_.a.list,children:e.tutors.map((function(e){return Object(j.jsx)(v,{id:e.TUTOR_ID,image:e.image,name:e.FIRST_NAME+" "+e.LAST_NAME,subjects:e.SUBJECT_ID,price:e.PRICE},e.TUTOR_ID)}))})};var N=function(){return Object(j.jsx)("div",{className:"spinner-border text-danger position-absolute top-50 start-50",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},T=c(14),w=c.n(T);var y=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){w.a.get("http://52.166.194.129/api/tutors/").then((function(e){for(var t=0;t<e.data.length;t++)e.data[t].image="https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg";a(e)}))}),[]);var s=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://52.166.194.129/api/tutors/?=&subjectName=".concat(t.target.value));case 2:for(c=e.sent,n=c,s=0;s<n.data.length;s++)n.data[s].image="https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg";a(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("section",{children:c?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Search Tutors"}),Object(j.jsx)("div",{className:"wrap",children:Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("input",{type:"text",className:"searchTerm",placeholder:"Which Subjects are you looking Tutor for?",onKeyUp:s})})}),Object(j.jsx)(g,{tutors:c.data})]}):Object(j.jsx)(N,{})})};var I=function(){return Object(j.jsx)("div",{children:"About Us"})};var S=function(){return Object(j.jsx)("div",{children:"Contact Us"})},U=c(27),M=c.n(U),C=c(11),E=c.n(C);var k=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:E.a.uniTag,children:[Object(j.jsx)("p",{children:"Fulda University of Applied Sciences Software"}),Object(j.jsx)("p",{children:"Engineering Project Fall 2021 for Demonstration Only"})]}),Object(j.jsxs)("header",{className:E.a.header,children:[Object(j.jsx)("div",{className:E.a.logo,children:"Mentor Me"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/search-tutors",children:"Search Tutors"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about-us",children:"About Us"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/contact-us",children:"Contact Us"})})]})})]})]})};var D=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{}),Object(j.jsx)("main",{className:M.a.main,children:e.children})]})};var R=function(){return Object(j.jsx)(D,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/search-tutors",element:Object(j.jsx)(y,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/about-us",element:Object(j.jsx)(I,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/contact-us",element:Object(j.jsx)(S,{})})]})})};s.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))},7:function(e,t,c){e.exports={item:"TutorItem_item__3fLkD",image:"TutorItem_image__39i2D",content:"TutorItem_content__Dp1eP",actions:"TutorItem_actions__3ChNg"}}},[[54,1,2]]]);
//# sourceMappingURL=main.9d71328b.chunk.js.map