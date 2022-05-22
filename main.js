(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),a=t.n(i),d=t(645),r=t.n(d),o=t(667),s=t.n(o),c=new URL(t(604),t.b),l=r()(a()),p=s()(c);l.push([e.id,':root{\n    --darkest-color : "#012E40"; \n    --mid-dark-color: "#0378A6";\n    --medium-color: "#049DBF";\n    --mid-light-color: "#04C4D9";\n    --lighest-color:"#05F2F2";\n\n}\n\nhtml, body {\n    /* height: 100%; */\n    min-height: 100vh;\n    width: 100%;\n    margin: 0;\n}\n\nh2{\n    margin: 0;\n}\n\n#content{\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-image: url('+p+');\n    background-repeat:repeat-y;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\nheader{\n    width: 100%;\n    height: 7vh;\n    background-color: rgba(4, 157, 191, 0.6);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\nbutton{\n    aspect-ratio: 3;\n    border-radius: 25px;\n    height: 70%;\n    font-weight: bolder;\n    font-size: larger;\n    border-style: outset;\n    background-color: #05F2F2;\n    text-decoration: none;\n\n}\nbutton a{\n    text-decoration: none;\n    color: #012E40;\n}\n\nbutton:hover{\n    border-style:inset;\n    background-color: #71e0e0;\n    cursor: pointer;\n}\n\n#centerdiv{\n    min-height: 85vh;\n    width: 50%;\n    background-color: rgba(4, 196, 217,1);\n    color: #012E40;\n    border-radius: 20px;\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    gap: 20px;\n}\n.bubble{\n    border: double #0378A6 10px;\n    background-color: hsl(180, 52%, 75%);\n    border-radius: 50%;\n    margin: 20px;\n    padding: 10px;\n    width: 60%;\n    font-weight: bold;\n    aspect-ratio: 1;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#coastal_town{\n    height: 300px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n}\n#sushi{\n    height: 100px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    border: 1px solid darkblue;\n}\n\n#praise{\n    aspect-ratio: 1;\n}\n\n.text{\n    font-size: normal;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n/* menu page */\n#menu{\n    font-weight: bolder;\n    font-size: xx-large;\n}\n\n#breakfastdiv, #lunchdiv, #dinnerdiv, #drinksdiv{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.drinks{\n    background-color: rgb(204, 229, 252);\n    border: solid 3px darkblue;\n    border-radius: 10px;\n    width: 100%;\n    line-height: 2rem;\n}\n.drinks li{\n    display: grid;\n    grid-template-columns: 10% 50%;\n    font-style: italic;\n}\n.drinkprice{\n    font-weight: bold;\n}\n\n.dish{\n    background-color: rgb(204, 229, 252);\n    border: solid 3px darkblue;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(4, 6vh);\n    grid-template-areas: \n    "fn fn fn fn fn . fp fp"\n    "fd fd fd fd fd . fp fp"\n    "fd fd fd fd fd . fp2 fp2"\n    "fc fc fc fc fc . fp2 fp2";\n    padding: 10px;\n}\n.foodname{\n    grid-area: fn;\n}\n\n.fooddescript{\n    grid-area: fd;\n    font-size: large;\n}\n\n.foodprice{\n    grid-area: fc;\n    font-weight: bold;\n    font-size: x-large;\n}\n\n.foodpic{\n    grid-area: fp;\n    width: 100%;\n}\n.foodpic2{\n    grid-area: fp2;\n    width: 100%;\n}\n\n#breakfastdiv img, #lunchdiv img, #dinnerdiv img{\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: cover;\n    border-radius: 10px;\n}\n\n/* contact */\n.contactbetty{\n    background-color: rgb(204, 229, 252);\n    border: solid 3px darkblue;\n    border-radius: 50%;\n    aspect-ratio: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 30px;\n}\n.contactbetty p{\n    font-weight: bold;\n}\n\n.contactbetty img{\n    border-radius: 50%;\n    aspect-ratio: 1;\n    width: 50%;\n}\n\n\n/* media queries */\n\n@media only screen and (max-width: 1500px){\n    #centerdiv{\n        width: 60%;\n    }\n}\n@media only screen and (max-width: 1300px){\n    #centerdiv{\n        width: 70%;\n    }\n}\n@media only screen and (max-width: 1100px){\n    #centerdiv{\n        width: 80%;\n    }\n}\n@media only screen and (max-width: 1000px){\n    #centerdiv{\n        width: 90%;\n    }\n}\n@media only screen and (max-width: 900px){\n    #centerdiv{\n        width: 100%;\n    }\n    .dish{\n        grid-template-columns: repeat(8, 1fr);\n        grid-template-rows: repeat(4, 6vh);\n        grid-template-areas: \n        "fn fn fn fn fn . fp fp"\n        "fd fd fd fd fd fd fp fp"\n        "fd fd fd fd fd fd fp fp"\n        "fc fc fc fc fc . fp fp";\n    }\n}\n@media only screen and (max-width: 800px){\n    .bubble{\n        width: 70%;\n    }\n    #breakfastdiv, #lunchdiv, #dinnerdiv, #drinksdiv{\n        width: 90%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 20px;\n    }\n\n}\n@media only screen and (max-width: 700px){\n    .bubble{\n        width: 80%;\n    }\n    .drinks li{\n        display: grid;\n        grid-template-columns: 20% 90%;\n        font-style: italic;\n    }\n}\n\n@media only screen and (max-width: 650px){\n    #breakfastdiv, #lunchdiv, #dinnerdiv, #drinksdiv{\n        width: 98%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 20px;\n    }\n    .dish{\n        grid-template-rows: repeat(4,7vh);\n    }\n}\n\n@media only screen and (max-width: 500px){\n    .bubble{\n        width: 91%;\n    }\n    #sushi{\n        height: 50px;\n    }\n    #coastal_town{\n        height: 150px;\n    }\n    .drinks li{\n        display: grid;\n        grid-template-columns: 40% 60%;\n        font-style: italic;\n    }\n}\n@media only screen and (max-width: 450px){\n    .bubble{\n        width: 90%;\n    }\n    #sushi{\n        display: none;\n    }\n    #coastal_town{\n        height: 150px;\n    }\n    .dish{\n        grid-template-rows: repeat(4,9vh);\n    }\n}\n@media only screen and (max-width: 350px){\n    .dish{\n        grid-template-rows: repeat(3,13vh);\n        grid-template-areas: \n        "fn fn fn fn fn . fp fp"\n        "fd fd fd fd fd fd . fc"\n        "fd fd fd fd fd fd . fc";\n    }\n}',""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,a,d){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&r[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var d={},r=[],o=0;o<e.length;o++){var s=e[o],c=i.base?s[0]+i.base:s[0],l=d[c]||0,p="".concat(c," ").concat(l);d[c]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,i);i.byIndex=o,n.splice(o,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var d=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<d.length;r++){var o=t(d[r]);n[o].references--}for(var s=i(e,a),c=0;c<d.length;c++){var l=t(d[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}d=s}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},604:(e,n,t)=>{e.exports=t.p+"b13c8ba35c7f9d48e90e.jpg"}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var d=n[i]={id:i,exports:{}};return e[i](d,d.exports,t),d.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=function(){const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","centerdiv");const t=document.createElement("h1");t.textContent="Aunt Betty's C-Food Dishes",t.setAttribute("id","restaurantname");const i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div");i.classList.add("bubble"),a.classList.add("bubble"),d.classList.add("bubble");const r=document.createElement("p");r.classList.add("text"),r.textContent="Aunt Betty's C-Food Dishes is here to serve you the most delicious sea food meals for breakfast, lunch, and dinner! Aunt Betty serves the most mouth watering dishes. She can cook you anything, from sushi to King Crab. Tell a friend or better yet bring them with you! If you have no friends, just scooch onto our stranger-danger dining table where you'll meet others like you! Sharing the fun of fishing turns strangers into friends in a few hours!",i.appendChild(r);let o=document.createElement("img");o.src="./images/sushi-svgrepo-com.svg",o.alt="sushi svg",o.setAttribute("id","sushi"),i.appendChild(o),i.appendChild,n.appendChild(i);const s=document.createElement("h2");s.classList.add("title"),s.textContent="Hours";const c=document.createElement("p");c.classList.add("text"),c.innerHTML="Monday: 8am- 8pm </br> Tuesday: 8am- 8pm </br> Wednesday: 8am- 8pm </br> Thursday: 8am- 8pm </br> Friday: 8am- 10pm </br> Saturday: 10am- 10pm </br> Sunday: 12am- 8pm </br>",n.appendChild(a),a.appendChild(s),a.appendChild(c);const l=document.createElement("h2");l.classList.add("title"),l.textContent="Location";const p=document.createElement("p");p.classList.add("text"),p.innerHTML=" 1234 Eldham Cove, at The Ethereal Water Shores</br> <img src='./images/noah-mayer-BWSDI-6YLW4-unsplash.jpg' alt='coastal town' id='coastal_town'>",n.appendChild(d),d.appendChild(l),d.appendChild(p),e.appendChild(n)},n=function(){const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","centerdiv");const t=document.createElement("h1");t.textContent="Menu",t.setAttribute("id","menu"),n.appendChild(t);const d=document.createElement("div");d.setAttribute("id","breakfastdiv");const r=document.createElement("h2");r.textContent="Breakfast";const o=i("breakfast1","Smoked Salmon Avocado Toast","A delicious and healthy breakfast, comprised of avocado, smoked salmon, goat cheese, and capers.","$3","./images/pexels-geraud-pfeiffer-6605207.png"),s=i("breakfast2","Easy Egg and Crab Cake","A breakfast and a snack! Filled with protein and taste! This easy egg and crab cake will fill you up easily.","$5","./images/aliet-kitchen-t7yR_y3IENE-unsplash.jpg"),c=i("breakfast3","Seafood Fritatta","A warm and yummy breakfast. Our seafood fritatta will surely keep you energized throughout the day! This meal is big enough to share between two people.","$7","./images/pexels-kristina-gain-4103221.jpg");d.appendChild(r),d.appendChild(o),d.appendChild(s),d.appendChild(c),n.appendChild(d);const l=document.createElement("div");l.setAttribute("id","lunchdiv");const p=document.createElement("h2");p.textContent="Lunch";const u=i("lunch1","Sushi Plate","A plate of 7 pieces of sushi Of your choice!","$3","./images/vinicius-benedit--1GEAA8q3wk-unsplash.jpg"),h=i("lunch2","Fish and Chips","What does the Lochness monster call his favorite dish? Fish & Ships. So 'ave some fish and chips, mate.","$2","./images/julia-karnavusha-zWdBRmh8Gv8-unsplash.jpg"),m=i("lunch1","Crab Sandwich","A delicious crab sandwich with a sweet homemade sauce and freshly caught crab. Aunt Betty goes out swimming every night to catch the freshest crabs for you!","$3","./images/youjeen-cho-sBKLiRiunK0-unsplash.jpg","./images/olga-tsai-IQMCYVVa2Wc-unsplash.jpg");l.appendChild(p),l.appendChild(u),l.appendChild(h),l.appendChild(m),n.appendChild(l);const f=document.createElement("div");f.setAttribute("id","dinnerdiv");const g=document.createElement("h2");g.textContent="Dinner";const b=i("dinner1","Paella","A lovely paella big enough for 2 people! This delicious dish will warm you up from the inside.","$7","./images/kaitlin-dowis-VjM2t7VH9Uo-unsplash.jpg"),v=i("dinner2","Sushi Boat","A mouth wateringly delicious boat filled with sushi.","$6","./images/riccardo-bergamini-O2yNzXdqOu0-unsplash.jpg"),y=i("dinner3","Grilled Sardines","A sizzling plate of grilled sardines with a side of baked potatoes and a bowl of veggies","$7","./images/alex-teixeira-N8-bMqUMS8g-unsplash.jpg");f.appendChild(g),f.appendChild(b),f.appendChild(v),f.appendChild(y),n.appendChild(f);const x=document.createElement("div");x.setAttribute("id","drinksdiv");const C=document.createElement("h2");C.textContent="Drinks";const w=document.createElement("div");w.classList.add("drinks");const E=document.createElement("ul"),k=a("Water (0.5L)","$0.50"),L=a("Sparkling Water (0.5L)","$1"),A=a("Coke (0.5L)","$1"),S=a("Ginger Ale (0.5L)","$1");E.appendChild(k),E.appendChild(L),E.appendChild(A),E.appendChild(S),w.appendChild(E),x.appendChild(C),x.appendChild(w),n.appendChild(x),e.appendChild(n)};function i(e,n,t,i,a,d){const r=document.createElement("div"),o=document.createElement("h3"),s=document.createElement("p"),c=document.createElement("span"),l=document.createElement("img");if(l.setAttribute("src",a),l.classList.add("foodpic"),c.textContent=i,c.classList.add("foodprice"),s.textContent=t,s.classList.add("fooddescript"),o.textContent=n,o.classList.add("foodname"),r.setAttribute("id",e),r.classList.add("dish"),r.appendChild(o),r.appendChild(s),r.appendChild(c),r.appendChild(l),d){const e=document.createElement("img");e.setAttribute("src",d),e.classList.add("foodpic2"),r.appendChild(e)}return r.appendChild(s),r}function a(e,n){const t=document.createElement("li"),i=document.createElement("span"),a=document.createElement("span");return i.classList.add("drinkprice"),a.classList.add("drinkname"),i.textContent=n,a.textContent=e,t.appendChild(i),t.appendChild(a),t}var d=t(379),r=t.n(d),o=t(795),s=t.n(o),c=t(569),l=t.n(c),p=t(565),u=t.n(p),h=t(216),m=t.n(h),f=t(589),g=t.n(f),b=t(426),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),r()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const y=document.getElementById("content"),x=document.createElement("header"),C=document.createElement("button"),w=document.createElement("button"),E=document.createElement("button");C.innerHTML="Main",w.innerHTML="<a href='#'>Menu</a>",E.innerHTML="<a href='#'>Contact</a>",x.appendChild(C),x.appendChild(w),x.appendChild(E),y.appendChild(x);let k="main";function L(){switch(k){case"main":null!==document.getElementById("centerdiv")&&(centerdiv=document.getElementById("centerdiv"),centerdiv.remove()),e();break;case"menu":null!==document.getElementById("centerdiv")&&(centerdiv=document.getElementById("centerdiv"),centerdiv.remove()),n();break;case"contact":null!==document.getElementById("centerdiv")&&(centerdiv=document.getElementById("centerdiv"),centerdiv.remove()),function(){const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","centerdiv");const t=document.createElement("h1");t.textContent="Contact Info",t.setAttribute("id","contact");const i=document.createElement("div");i.classList.add("contactbetty");const a=document.createElement("h2");a.textContent="Aunt Betty";const d=document.createElement("p");d.innerHTML="Chef, Manager, Waiter & Therapist </br>123-456-7890 </br> fishyFishesILoveFish@reallyRealMail.com";const r=document.createElement("img");r.setAttribute("src","./images/Betty.svg"),i.appendChild(a),i.appendChild(d),i.appendChild(r),n.appendChild(t),n.appendChild(i),e.appendChild(n)}();break;default:console.log("Switch case error!!")}}function A(){null!==document.getElementById("centerdiv")&&(centerdiv=document.getElementById("centerdiv"),centerdiv.remove())}L(),C.addEventListener("click",(()=>{A(),k="main",e(),L()})),w.addEventListener("click",(()=>{A(),k="menu",n(),L()})),E.addEventListener("click",(()=>{A(),k="contact",n(),L()}))})()})();