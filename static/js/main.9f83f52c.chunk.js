(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bridge.8d404906.jpg"},function(e,t,a){e.exports=a.p+"static/media/stairs.9d21066b.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/bird.dc3ab31a.jpg"},function(e,t,a){e.exports=a.p+"static/media/night.3c976dbb.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/cm.1c66e0d4.jpg"},function(e,t,a){e.exports=a.p+"static/media/obi-wan.841d7bce.jpg"},function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(29),a(30),a(2)),o=a(6),u=(a(31),a(11)),m=a.n(u),s=a(18),p=a.n(s),d=a(19),E=a.n(d),f=a(12),h=a.n(f),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:m.a,alt:"bridge"})}}),r.a.createElement(o.c,{path:"/product",render:function(){return r.a.createElement("img",{src:p.a,alt:"bird"})}}),r.a.createElement(o.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:E.a,alt:"night"})}}),r.a.createElement(o.c,{path:"/login",render:function(){return r.a.createElement("img",{src:h.a,alt:"stairs"})}}),r.a.createElement(o.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:h.a,alt:"stairs"})}}),r.a.createElement(o.c,{render:function(){return r.a.createElement("img",{src:m.a,alt:"bridge"})}})))},b=function(e){return r.a.createElement("div",null,r.a.createElement(o.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Info")}}),r.a.createElement(o.c,{path:"/:page",render:function(e){return r.a.createElement("p",null,"You are on ",r.a.createElement("span",null,e.match.params.page))}}),r.a.createElement(o.c,{path:"/:page/:idProduct",render:function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e.match.params.idProduct)," page")}}))},x=(a(37),function(e){return r.a.createElement("div",{className:"article_box"},r.a.createElement("h3",{className:"article_title"},e.title),r.a.createElement("span",{className:"article_author"},e.author),r.a.createElement("p",{className:"article_text"},e.text))}),v=[{id:1,title:"What is love?",author:"John Snow",text:"Lorem ipsum dolor sit amet consectetur. Atque amet, vitae consequatur exercitationem ratione voluptatibus?"},{id:2,title:"Baby don't hurt me",author:"John Snow",text:"Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad."},{id:3,title:"Don't hurt me",author:"John Snow",text:"Bleade d'hoine, app er arse."},{id:3,title:"No more",author:"John Wather",text:"Animi cumque accusantium sapiente error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."}],N=function(){var e=v.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},y=(a(38),["Time","Love","Happiness","Money"]),_=function(){var e=y.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Product List:"),r.a.createElement("ul",null,e))},j=a(9),k=(a(39),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"contact_box"},r.a.createElement(o.a,{when:a,message:"Nice try Sauron! You didn't send them :("}),r.a.createElement("form",{className:"contact_form"},r.a.createElement("label",{className:"contact_label"},"Send hobbits to Mordor!"),r.a.createElement("textarea",{className:"contact_textarea fancy_input",placeholder:"Write message...",required:!0,onSubmit:function(e){return e.preventDefault()},onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"contact_button",onClick:function(){return alert("Good job! You saved Middle-earth!")}},"Send")))}),w=a(22),S=a.n(w),q=function(){return r.a.createElement(o.c,{render:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Admin panel"),r.a.createElement("img",{src:S.a,alt:"cm"}))}})},J=a(23),O=a.n(J),P=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"These aren't the pages you're looking for..."),r.a.createElement("img",{src:O.a,alt:"Jedi says no"}))},A=(a(40),function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1];return r.a.createElement(o.c,{render:function(){return a?r.a.createElement(o.b,{to:"/admin"}):r.a.createElement("div",null,r.a.createElement("label",null,"Login:",r.a.createElement("input",{className:"fancy_input",type:"text",required:!0})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{className:"fancy_input",type:"password",required:!0})),r.a.createElement("button",{onClick:function(e){return c(!0)},className:"login_button"},"Qapla'"))}})}),L=(a(41),function(e){return r.a.createElement("div",null,r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id)))}),B=function(e){var t=e.match;return console.log(t),r.a.createElement("div",null,r.a.createElement("h2",null,"Page of product:"),r.a.createElement(L,{id:t.params.id}),r.a.createElement(i.b,{to:"/product"},"Go back"))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,component:N}),r.a.createElement(o.c,{path:"/product",exact:!0,component:_}),r.a.createElement(o.c,{path:"/contact",exact:!0,component:k}),r.a.createElement(o.c,{path:"/admin",exact:!0,component:q}),r.a.createElement(o.c,{path:"/login",exact:!0,component:A}),r.a.createElement(o.c,{path:"/product/:id",exact:!0,component:B}),r.a.createElement(o.c,{component:P})))},M=(a(42),[{name:"start",path:"/",exact:!0},{name:"products",path:"/product"},{name:"contact",path:"/contact"},{name:"login",path:"/login"}]),W=function(){var e=M.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(i.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))};var Y=function(){return r.a.createElement(i.a,{basename:""},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(g,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(W,null)),r.a.createElement("section",{className:"page"},r.a.createElement(C,null))),r.a.createElement("footer",null,r.a.createElement(b,null))))};l.a.render(r.a.createElement(Y,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.9f83f52c.chunk.js.map