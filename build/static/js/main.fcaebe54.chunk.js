(this.webpackJsonpnutricalc=this.webpackJsonpnutricalc||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(36),r=a.n(c),o=a(4),i=a(7),m=a(5),u=Object(n.createContext)(),s=function(e){var t=e.reducer,a=e.initialState,c=e.children;return l.a.createElement(u.Provider,{value:Object(n.useReducer)(t,a)},c)},d=function(){return Object(n.useContext)(u)},p=(a(47),a(85));var E=function(){return l.a.createElement("div",null,l.a.createElement(p.a,{elevation:3}))},b=function(){var e=d().cood;return Object(n.useEffect)((function(){}),[e]),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"home-container"},l.a.createElement("h6",null,"Its easy! Click on new farm input, choose the type of crop, the type of fertilizer input, the land acreage"," "),l.a.createElement("h6",null,"weather"),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement(E,null)))},g=(a(51),function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-page"},l.a.createElement("h1",null,"About US"),l.a.createElement("p",null,"About US page body content")))}),h=(a(52),function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"contact-page"},l.a.createElement("h1",null,"Contact US"),l.a.createElement("p",null,"Contact US page body content")))}),v=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Error: Page does not exist!"))},f=(a(53),function(){var e=d(),t=Object(o.a)(e,1)[0].user;return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("h1",null,"NutriCalc"),l.a.createElement("h5",null,"Your farm inputs calculator")),l.a.createElement(i.c,{classname:"nav-link",to:"/"},"Home"),l.a.createElement(i.c,{classname:"nav-link",to:"/about"},"About"),l.a.createElement(i.c,{classname:"nav-link",to:"/contact"},"Contact"),l.a.createElement(i.c,{classname:"nav-link",to:t?"/logout":"/login"},t?"Logout":"Login"))}),N=(a(55),a(40)),y=a.n(N),j=a(28),O=a.n(j);O.a.initializeApp({apiKey:"AIzaSyAPlp8cdax4s5bm8NifmmcVW8AoJVGQby8",authDomain:"nutricalc-dca46.firebaseapp.com",databaseURL:"https://nutricalc-dca46.firebaseio.com",projectId:"nutricalc-dca46",storageBucket:"nutricalc-dca46.appspot.com",messagingSenderId:"375679745437",appId:"1:375679745437:web:08ef675f8ed19509768374",measurementId:"G-KZZLP7LBBZ"});var w=O.a.auth(),x=new O.a.auth.FacebookAuthProvider,k=a(21),S="SET_USER",C="SET_COOD",B=function(e,t){switch(console.log(t),t.type){case S:return Object(k.a)(Object(k.a)({},e),{},{user:t.user});case C:return Object(k.a)(Object(k.a)({},e),{},{cood:t.cood});default:return e}},H=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),s=u[0],p=u[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),g=b[0],h=b[1],v=d(),f=Object(o.a)(v,2),N=f[0].user,j=f[1],O=function(e){console.log(g,s),j({type:S,user:{email:g,password:s}}),c(!0)};return a?l.a.createElement(m.a,{to:"/"}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Sign In to NutriCalc")),l.a.createElement("div",{className:"form-body"},l.a.createElement("form",{onSubmit:O},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"emailField",className:"form-control",id:"emailInput",placeholder:"your@example.com",value:g,onChange:function(e){h(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordField",className:"form-control",id:"passwordInput",placeholder:"enter your password",value:s,onChange:function(e){p(e.target.value)}})),l.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-success btn-sm btn-block"},"Login"),l.a.createElement(i.b,{to:"/register",onClick:function(e){j({type:S,user:{name:"guest"}})}},"dont have an account? Register here")),l.a.createElement("hr",null),l.a.createElement("div",{class:"or-text d-flex align-items-center justify-content-center"},l.a.createElement("span",null,"or")),l.a.createElement("hr",null),l.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),console.log(N),w.signInWithPopup(x).then((function(e){console.log(e);var t=e.user;j({type:S,user:t}),null===t||void 0===t||t.isNewUser})).catch((function(e){alert(e.message)})),c(!0)},className:"btn btn-primary btn-sm btn-block",id:"facebookBtn"},l.a.createElement("span",null,l.a.createElement(y.a,null)," ")," SIGN IN WITH FACEBOOK")))},K=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),s=u[0],p=u[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),g=b[0],h=b[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),N=f[0],y=f[1],j=Object(n.useState)(null),O=Object(o.a)(j,2),w=O[0],x=O[1],k=d(),C=Object(o.a)(k,2),B=C[0].user,H=C[1];return w?l.a.createElement(m.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Sign Up ")),l.a.createElement("div",{className:"form-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x(!0)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email address"},"Username"),l.a.createElement("input",{type:"email",class:"form-control",id:"usernameField",placeholder:"your username",value:N,onChange:function(e){y(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"emailField",className:"form-control",id:"emailInput",placeholder:"your@example.com",value:a,onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordField",className:"form-control",id:"passwordInput",placeholder:"enter your password",value:s,onChange:function(e){p(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordConfirmField",className:"form-control",id:"passwordConfirmInput",placeholder:"enter your password",value:g,onChange:function(e){h(e.target.value)}})),l.a.createElement("button",{type:"submit",class:"btn btn-primary btn-sm btn-block"},"Register"),l.a.createElement(i.b,{to:"/login",onClick:function(e){"guest"===(null===B||void 0===B?void 0:B.name)&&H({type:S,user:{}})}},"already have an account? Login here")))))},Z=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(o.a)(r,2),u=m[0],s=m[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),E=p[0],b=p[1],g=Object(n.useState)(!1),h=Object(o.a)(g,2),v=h[0],f=h[1],N=Object(n.useState)(!1),y=Object(o.a)(N,2),j=y[0],O=y[1];return l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar-content"},l.a.createElement("div",{className:"list-group"},l.a.createElement(i.b,{className:"list-group-item list-group-item-action ".concat(a?"active":""),to:"/",onClick:function(){c(!0),s(!1),b(!1),f(!1),O(!1)}},"Home"),l.a.createElement(i.b,{className:"list-group-item list-group-item-action ".concat(v?"active":""),to:"/farm",onClick:function(){f(!0),c(!1),s(!1),b(!1),O(!1)}},"My Farm"),l.a.createElement(i.b,{className:"list-group-item list-group-item-action ".concat(u?"active":""),to:"/new_farm_input",onClick:function(){s(!0),c(!1),b(!1),f(!1),O(!1)}},"New farm input"),l.a.createElement(i.b,{className:"list-group-item list-group-item-action ".concat(j?"active":""),to:"/soil_assesment",onClick:function(){O(!0),c(!1),b(!1),f(!1),s(!1)}},"New Soil Assesment"),l.a.createElement(i.b,{className:"list-group-item list-group-item-action ".concat(E?"active":""),to:"/schedule_farm_input",onClick:function(){b(!0),c(!1),s(!1),f(!1),O(!1)}},"My schedule"))))},X=function(){return l.a.createElement("div",{className:"right-bar"},l.a.createElement("h6",null,"rightbar"))};a(68);var z=function(){return l.a.createElement("div",null,l.a.createElement("h6",null,"My Farm"))};a(69);var G=function(){return l.a.createElement("div",null,l.a.createElement("h6",null,"New Farm input"))};a(70);var J=function(){return l.a.createElement("div",null,l.a.createElement("h6",null,"New Soil Assesment"))};var I=function(){return l.a.createElement("div",null,l.a.createElement("h6",null,"My Schedule"))};a(71);var q=function(){var e=d(),t=Object(o.a)(e,2),a=t[0],c=a.user,r=a.cood,u=t[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.longitude,a=e.coords.latitude;console.log("longitude: ".concat(a," | latitude: ").concat(t)),u({type:C,cood:{lat:t,long:a}})}))}),[u]),console.log(r),"guest"===(null===c||void 0===c?void 0:c.name)?l.a.createElement(K,null):c?l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"side-bar"},l.a.createElement(Z,null)),l.a.createElement("div",{className:"mid"},l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",component:b,exact:!0}),l.a.createElement(m.b,{path:"/about",component:g}),l.a.createElement(m.b,{path:"/contact",component:h}),l.a.createElement(m.b,{path:"/login",component:H}),l.a.createElement(m.b,{path:"/register",component:K}),l.a.createElement(m.b,{path:"/new_farm_input",component:G}),l.a.createElement(m.b,{path:"/farm",component:z}),l.a.createElement(m.b,{path:"/soil_assesment",component:J}),l.a.createElement(m.b,{path:"/schedule_farm_input",component:I}),l.a.createElement(m.b,{component:v}))),l.a.createElement("div",{className:"right-bar"},l.a.createElement(X,null))),l.a.createElement("div",null,l.a.createElement("h5",null,"Footer area")))):l.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,{initialState:{user:null},reducer:B},l.a.createElement(i.a,null,l.a.createElement(q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.fcaebe54.chunk.js.map