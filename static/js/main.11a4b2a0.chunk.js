(this.webpackJsonpmontyhall=this.webpackJsonpmontyhall||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),r=a.n(l),c=(a(9),a(1)),i=(a(10),function(){var e=Object(n.useState)(1e3),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(3),i=Object(c.a)(r,2),s=i[0],m=i[1],u=Object(n.useState)(null),h=Object(c.a)(u,2),d=h[0],E=h[1];return console.log(d),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Monty Hall Paradox"),o.a.createElement("div",null,o.a.createElement("div",{className:"App-introduction"},o.a.createElement("p",null,"The Monty Hall problem is an interesting statistical paradox based on the American TV game show, Let's make a Deal. The game show host would ask a contestant to choose 1 out of 3 doors, two doors which hid a goat each, and one that revealed a new car. The host will then reveal a door that the contestant did not pick and had a goat behind it, and then ask the contestant if they would like to switch their choice. Although many would say all doors had an equal chance to lead to the prize of a car, statisticians found that this was not the case. This site will simulate many times the outcomes to help show that switching is a more favorable choice than staying on an initial decision")),o.a.createElement("div",{className:"App-form"},o.a.createElement("div",null,o.a.createElement("label",null,"How many simulations?",o.a.createElement("select",{value:a,onChange:function(e){return l(e.target.value)}},o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"100"},"100"),o.a.createElement("option",{value:"1000"},"1000"),o.a.createElement("option",{value:"1000000"},"1000000"),o.a.createElement("option",{value:"1000000000"},"100000000")))),o.a.createElement("div",null,o.a.createElement("label",null,"How many doors?",o.a.createElement("select",{value:s,onChange:function(e){return m(e.target.value)}},o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"10"},"10")))),o.a.createElement("button",{onClick:function(){for(var e=[],t=0,n=0,o=1;o<=a;o++){for(var l=Math.floor(Math.random()*s),r=Math.floor(Math.random()*s),c=!1,i=!1,m=r;m===r||m===l;)m=Math.floor(Math.random()*s);r===l&&(t++,c=!0);for(var u=r;u===r||u===m;)u=Math.floor(Math.random()*s);if(u===l&&(n++,i=!0),o<=100){var h={winningDoor:l,initGuessDoor:r,revealedDoor:m,correctForSwitchingDoor:u,correctForSwitching:i,correctForStaying:c};e.push(h)}}E({iterations:e,correctForStayingCount:t,correctForSwitchingCount:n})}},"Start")),d&&o.a.createElement("div",{className:"App-results"},o.a.createElement("h2",null,"Results"),o.a.createElement("div",null,a," completed for ",s," doors"),o.a.createElement("div",null,d.correctForSwitchingCount,"/",a," (",(d.correctForSwitchingCount/a*100).toFixed(2),"%) correct for switching."),o.a.createElement("div",null,d.correctForStayingCount,"/",a," (",(d.correctForStayingCount/a*100).toFixed(2),"%) correct for staying."),o.a.createElement("div",{className:"App-table"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"first-column"},"#"),o.a.createElement("th",{className:"second-column"},"Winning Door"),o.a.createElement("th",null,"Initial Guess"),o.a.createElement("th",null,"Revealed Door"),o.a.createElement("th",null,"Second Guess"),o.a.createElement("th",null,"Switch Result"),o.a.createElement("th",null,"Stay Result"))),o.a.createElement("tbody",null,d.iterations.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"first-column"},t+1),o.a.createElement("td",{className:"second-column"},e.winningDoor+1),o.a.createElement("td",null,e.initGuessDoor+1),o.a.createElement("td",null,e.revealedDoor+1),o.a.createElement("td",null,e.correctForSwitchingDoor+1),o.a.createElement("td",null,e.correctForSwitching?"Correct":"Incorrect"),o.a.createElement("td",null,e.correctForStaying?"Correct":"Incorrect"))}))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.11a4b2a0.chunk.js.map