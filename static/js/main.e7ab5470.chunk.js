(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{39:function(e,c,s){},46:function(e,c,s){},51:function(e,c,s){},52:function(e,c,s){},53:function(e,c,s){},54:function(e,c,s){},55:function(e,c,s){},56:function(e,c,s){},57:function(e,c,s){"use strict";s.r(c);var t=s(3),a=s(32),n=s.n(a),i=(s(39),s(20)),j=s(9),l=s(15),r=s(2),d=Object(t.createContext)(null);var b=s(24),h=(s(23),s(45),b.a.initializeApp({apiKey:"AIzaSyDIMQ8WQuustekZaX3RtGVLxpD3e7257YE",authDomain:"olx-clone-66175.firebaseapp.com",projectId:"olx-clone-66175",storageBucket:"olx-clone-66175.appspot.com",messagingSenderId:"297820106204",appId:"1:297820106204:web:1f01f25054fb1acc14b319",measurementId:"G-W5HB2D9ZJB"})),x=s.p+"static/media/olx-logo.b3f099a2.png";s(46);function O(){var e=Object(j.e)(),c=Object(t.useState)(""),s=Object(l.a)(c,2),a=s[0],n=s[1],i=Object(t.useState)(""),b=Object(l.a)(i,2),h=b[0],O=b[1],o=Object(t.useState)(""),u=Object(l.a)(o,2),m=u[0],p=u[1],v=Object(t.useState)(""),f=Object(l.a)(v,2),N=f[0],g=f[1],w=Object(t.useContext)(d).firebase;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"signupParentDiv",children:[Object(r.jsx)("img",{width:"200px",height:"200px",src:x,alt:"Image here"}),Object(r.jsxs)("form",{onSubmit:function(c){c.preventDefault(),w.auth().createUserWithEmailAndPassword(h,N).then((function(c){c.user.updateProfile({displayName:a}).then((function(){w.firestore().collection("users").add({id:c.user.uid,username:a,phone:m}).then((function(){e.push("/login")}))}))})),console.log(a)},children:[Object(r.jsx)("label",{htmlFor:"fname",children:"Username"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"text",value:a,onChange:function(e){return n(e.target.value)},id:"fname",name:"name",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"email",value:h,onChange:function(e){return O(e.target.value)},id:"fname",name:"email",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Phone"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"number",value:m,onChange:function(e){return p(e.target.value)},id:"lname",name:"phone",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"password",value:N,onChange:function(e){return g(e.target.value)},id:"lname",name:"password",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Signup"})]}),Object(r.jsx)("a",{children:"Login"})]})})}var o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(O,{})})},u=s(34);s(51);var m=function(){var e=Object(t.useState)(""),c=Object(l.a)(e,2),s=(c[0],c[1],Object(t.useState)("")),a=Object(l.a)(s,2),n=(a[0],a[1],Object(t.useContext)(d).firebase,Object(t.useContext)(d));return Object(u.a)(n),Object(j.e)(),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"loginParentDiv",children:[Object(r.jsx)("img",{width:"200px",height:"200px",src:x}),Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"email",id:"fname",name:"email",defaultValue:"John"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",type:"password",id:"lname",name:"password",defaultValue:"Doe"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Login"})]}),Object(r.jsx)("a",{children:"Signup"})]})})};var p=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(m,{})})};s(52);function v(){return Object(r.jsx)("svg",{width:"48px",height:"48px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"})})}function f(e){return Object(r.jsx)("svg",{width:"25px",height:"25px",viewBox:"0 0 1024 1024","data-aut-id":"icon",color:e.color?e.color:"",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"})})}function N(){return Object(r.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"})})}function g(){return Object(r.jsx)("svg",{width:104,height:48,viewBox:"0 0 1603 768",className:"_3V9PS",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{className:"all",d:"M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"}),Object(r.jsx)("path",{className:"left",d:"M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"}),Object(r.jsx)("path",{className:"top",d:"M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"}),Object(r.jsx)("path",{className:"right",d:"M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"})]})})}function w(e){return Object(r.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-367TP",d:"M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"})})}var M=function(){return Object(r.jsx)("div",{className:"headerParentDiv",children:Object(r.jsxs)("div",{className:"headerChildDiv",children:[Object(r.jsx)("div",{className:"brandName",children:Object(r.jsx)(v,{})}),Object(r.jsxs)("div",{className:"placeSearch",children:[Object(r.jsx)(f,{}),Object(r.jsx)("input",{type:"text"}),Object(r.jsx)(N,{})]}),Object(r.jsxs)("div",{className:"productSearch",children:[Object(r.jsx)("div",{className:"input",children:Object(r.jsx)("input",{type:"text",placeholder:"Find car,mobile phone and more..."})}),Object(r.jsx)("div",{className:"searchAction",children:Object(r.jsx)(f,{color:"#ffffff"})})]}),Object(r.jsxs)("div",{className:"language",children:[Object(r.jsx)("span",{children:" ENGLISH "}),Object(r.jsx)(N,{})]}),Object(r.jsxs)("div",{className:"loginPage",children:[Object(r.jsx)("span",{children:"Login"}),Object(r.jsx)("hr",{})]}),Object(r.jsxs)("div",{className:"sellMenu",children:[Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"sellMenuContent",children:[Object(r.jsx)(w,{}),Object(r.jsx)("span",{children:"SELL"})]})]})]})})};s(53);var P=function(){return Object(r.jsx)("div",{className:"bannerParentDiv",children:Object(r.jsxs)("div",{className:"bannerChildDiv",children:[Object(r.jsxs)("div",{className:"menuBar",children:[Object(r.jsxs)("div",{className:"categoryMenu",children:[Object(r.jsx)("span",{children:"ALL CATEGORIES"}),Object(r.jsx)(N,{})]}),Object(r.jsxs)("div",{className:"otherQuickOptions",children:[Object(r.jsx)("span",{children:"Cars"}),Object(r.jsx)("span",{children:"Motorcy..."}),Object(r.jsx)("span",{children:"Mobile Ph..."}),Object(r.jsx)("span",{children:"For Sale:Houses & Apart..."}),Object(r.jsx)("span",{children:"Scoot..."}),Object(r.jsx)("span",{children:"Commercial & Other Ve..."}),Object(r.jsx)("span",{children:"For Rent: House & Apart..."})]})]}),Object(r.jsx)("div",{className:"banner",children:Object(r.jsx)("img",{src:"../../../Images/banner copy.png",alt:""})})]})})};s(54);function S(){return Object(r.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(r.jsx)("path",{className:"rui-77aaa",d:"M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"})})}s(55);var C=function(){return Object(r.jsxs)("div",{className:"postParentDiv",children:[Object(r.jsxs)("div",{className:"moreView",children:[Object(r.jsxs)("div",{className:"heading",children:[Object(r.jsx)("span",{children:"Quick Menu"}),Object(r.jsx)("span",{children:"View more"})]}),Object(r.jsx)("div",{className:"cards",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"favorite",children:Object(r.jsx)(S,{})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:"../../../Images/R15V3.jpg",alt:""})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{className:"rate",children:"\u20b9 250000"}),Object(r.jsx)("span",{className:"kilometer",children:"Two Wheeler"}),Object(r.jsx)("p",{className:"name",children:" YAMAHA R15V3"})]}),Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("span",{children:"Tue May 04 2021"})})]})})]}),Object(r.jsxs)("div",{className:"recommendations",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("span",{children:"Fresh recommendations"})}),Object(r.jsx)("div",{className:"cards",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"favorite",children:Object(r.jsx)(S,{})}),Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:"../../../Images/R15V3.jpg",alt:""})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{className:"rate",children:"\u20b9 250000"}),Object(r.jsx)("span",{className:"kilometer",children:"Two Wheeler"}),Object(r.jsx)("p",{className:"name",children:" YAMAHA R15V3"})]}),Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("span",{children:"10/5/2021"})})]})})]})]})};s(56);var A=function(){return Object(r.jsxs)("div",{className:"footerParentDiv",children:[Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"POPULAR LOCATIONS"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"kolkata"}),Object(r.jsx)("li",{children:"Mumbai"}),Object(r.jsx)("li",{children:"Chennai"}),Object(r.jsx)("li",{children:"Pune"})]})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"ABOUT US"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"About OLX Group"}),Object(r.jsx)("li",{children:"Careers"}),Object(r.jsx)("li",{children:"Contact Us"}),Object(r.jsx)("li",{children:"OLXPeople"})]})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("p",{children:"OLX"})}),Object(r.jsx)("div",{className:"list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Help"}),Object(r.jsx)("li",{children:"Sitemap"}),Object(r.jsx)("li",{children:"Legal & Privacy information"})]})})]})]}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("p",{children:"Other Countries Pakistan - South Africa - Indonesia"}),Object(r.jsx)("p",{children:"Free Classifieds in India. \xa9 2006-2021 OLX"})]})]})};var y=function(e){return Object(r.jsxs)("div",{className:"homeParentDiv",children:[Object(r.jsx)(M,{}),Object(r.jsx)(P,{}),Object(r.jsx)(C,{}),Object(r.jsx)(A,{})]})};var D=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(y,{})}),Object(r.jsx)(j.a,{path:"/signup",children:Object(r.jsx)(o,{})}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(p,{})})]})})};n.a.render(Object(r.jsx)(d.Provider,{value:{firebase:h},children:Object(r.jsx)(D,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e7ab5470.chunk.js.map