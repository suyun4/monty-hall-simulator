(this.webpackJsonpmontyhall=this.webpackJsonpmontyhall||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(3),l=a.n(n),c=a(1),s=(a(9),function(){var e=Math.floor(3*Math.random());return 0===e?[!0,!1,!1]:1===e?[!1,!0,!1]:[!1,!1,!0]}),i=function(){var e=Object(o.useState)(!0),t=Object(c.a)(e,2),a=t[0],n=t[1],l=Object(o.useState)(null),i=Object(c.a)(l,2),m=(i[0],i[1],Object(o.useState)(0)),d=Object(c.a)(m,2),u=d[0],h=d[1],E=Object(o.useState)(s()),v=Object(c.a)(E,2),p=v[0],f=v[1],N=Object(o.useState)([!1,!1,!1]),b=Object(c.a)(N,2),g=b[0],w=b[1],y=Object(o.useState)(0),S=Object(c.a)(y,2),k=S[0],j=S[1],M=Object(o.useState)(0),O=Object(c.a)(M,2),A=O[0],x=O[1],C=Object(o.useState)(0),D=Object(c.a)(C,2),F=(D[0],D[1]),T=Object(o.useState)(!1),W=Object(c.a)(T,2),I=W[0],G=W[1],H=Object(o.useState)(1e3),R=Object(c.a)(H,2),L=R[0],B=R[1],J=Object(o.useState)(3),P=Object(c.a)(J,2),Y=P[0],q=P[1],z=Object(o.useState)(null),V=Object(c.a)(z,2),$=V[0],K=V[1];return Object(o.useEffect)((function(){var e=function(e){if(0===u&&"closed-door"===e.target.className){console.log(e.target.className),console.log(u);var t=[!1,!1,!1];if("App-game-door1"===e.target.className)if(p[0])t[Math.floor(2*Math.random())+1]=!0;else p[1]?t[2]=!0:t[1]=!0;else if("App-game-door2"===e.target.className){if(p[1])t[2*Math.floor(2*Math.random())]=!0;else p[0],t[2]=!0}else if("App-game-door3"===e.target.className){if(p[2])t[Math.floor(2*Math.random())]=!0;else p[0]?t[1]=!0:t[0]=!0}}u>=2&&(f(s()),w([!1,!1,!1]),h(0))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[g,u,p]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Monty Hall Problem Simulator")),r.a.createElement("div",{className:"App-body"},r.a.createElement("div",{className:"App-introduction"},r.a.createElement("div",{className:"accordian-header",onClick:function(){n(!a)}},r.a.createElement("div",{className:"App-triangle"}),"Introduction:",a&&r.a.createElement("div",{className:"accordian-text"},r.a.createElement("p",null,"The Monty Hall problem is an interesting statistical paradox based on the American TV game show, Let's make a Deal. The game show host would ask a contestant to choose 1 out of 3 doors, two doors which hid a goat each, and one that revealed a new car. The host will then reveal a door that the contestant did not pick and had a goat behind it, and then ask the contestant if they would like to switch their choice. Although many would say all doors had an equal chance to lead to the prize of a car, statisticians found that this was not the case. This site will simulate many times the outcomes to help show that switching is a more favorable choice than staying on an initial decision")))),r.a.createElement("div",{className:"App-game-intro"},"Try out the game! Choose a door then decide to stay or switch"),r.a.createElement("div",{className:"App-game-text"},0===u&&r.a.createElement("div",null,"Pick a door!"),1===u&&r.a.createElement("div",null,"You picked door ",k+1,". Monty has revealed a different door. Click a door to either stay or switch."),2===u&&r.a.createElement("div",null,"You picked door ",k+1,", decided to"," ",I?"stay":"switch",", and chose the"," ",p[A]?"winning":"losing"," door. Click to try again")),r.a.createElement("div",{className:"App-game-grid-container"},r.a.createElement("div",{className:"App-game-door1"},g[0]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[0]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 1",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{class:"door-knob"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 1 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{class:"door-knob"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[0]){var t=Math.floor(2*Math.random())+1;e[t]=!0,F(3-t)}else p[1]?(e[2]=!0,F(1)):(e[1]=!0,F(2));w(e),h(1),j(0)}else 1!==u||g[0]||(x(0),h(2),w([!0,!0,!0]),G(0===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"1"),1===u&&0===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&0!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{class:"door-knob"}))),r.a.createElement("div",{className:"App-game-door2"},g[1]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[1]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 2",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{class:"door-knob"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 2 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{class:"door-knob"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[1]){var t=2*Math.floor(2*Math.random());e[t]=!0,F(2-t)}else p[0]?(e[2]=!0,F(0)):(e[0]=!0,F(2));w(e),h(1),j(1)}else 1!==u||g[1]||(x(1),h(2),w([!0,!0,!0]),G(1===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"2"),1===u&&0===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&0!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{class:"door-knob"}))),r.a.createElement("div",{className:"App-game-door3"},g[2]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[2]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 3",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{class:"door-knob"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 3 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{class:"door-knob"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[2]){var t=Math.floor(2*Math.random());e[t]=!0,F(1-t)}else p[0]?(e[1]=!0,F(0)):(e[0]=!0,F(1));w(e),h(1),j(2)}else 1!==u||g[2]||(x(2),h(2),w([!0,!0,!0]),G(2===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"3"),1===u&&0===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&0!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{class:"door-knob"})))),r.a.createElement("div",{className:"App-form-grid"},r.a.createElement("div",{className:"App-form"},r.a.createElement("div",{className:"App-sim-select"},r.a.createElement("label",null,"How many simulations?",r.a.createElement("select",{value:L,onChange:function(e){return B(e.target.value)}},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"100"},"100"),r.a.createElement("option",{value:"1000"},"1000"),r.a.createElement("option",{value:"1000000"},"1000000"),r.a.createElement("option",{value:"1000000000"},"100000000")))),r.a.createElement("div",{className:"App-door-select"},r.a.createElement("label",null,"How many doors?",r.a.createElement("br",null),r.a.createElement("select",{value:Y,onChange:function(e){return q(e.target.value)}},r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10")))),r.a.createElement("button",{className:"button",onClick:function(){for(var e=[],t=0,a=0,o=1;o<=L;o++){for(var r=Math.floor(Math.random()*Y),n=Math.floor(Math.random()*Y),l=!1,c=!1,s=n;s===n||s===r;)s=Math.floor(Math.random()*Y);n===r&&(t++,l=!0);for(var i=n;i===n||i===s;)i=Math.floor(Math.random()*Y);if(i===r&&(a++,c=!0),o<=100){var m={winningDoor:r,initGuessDoor:n,revealedDoor:s,correctForSwitchingDoor:i,correctForSwitching:c,correctForStaying:l};e.push(m)}}K({simulations:L,doors:Y,iterations:e,correctForStayingCount:t,correctForSwitchingCount:a})}},"Start"))),$&&r.a.createElement("div",{className:"App-results"},r.a.createElement("h2",null,"Results"),r.a.createElement("div",null,$.simulations," completed for ",$.doors," doors"),r.a.createElement("div",null,$.correctForSwitchingCount,"/",$.simulations," (",($.correctForSwitchingCount/$.simulations*100).toFixed(2),"%) correct for switching."),r.a.createElement("div",null,$.correctForStayingCount,"/",$.simulations," (",($.correctForStayingCount/$.simulations*100).toFixed(2),"%) correct for staying."),r.a.createElement("div",{className:"App-table"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"first-column"},"#"),r.a.createElement("th",{className:"second-column"},"Winning Door"),r.a.createElement("th",null,"Initial Guess"),r.a.createElement("th",null,"Revealed Door"),r.a.createElement("th",null,"Second Guess"),r.a.createElement("th",null,"Switch Result"),r.a.createElement("th",null,"Stay Result"))),r.a.createElement("tbody",null,$.iterations.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"first-column"},t+1),r.a.createElement("td",{className:"second-column"},e.winningDoor+1),r.a.createElement("td",null,e.initGuessDoor+1),r.a.createElement("td",null,e.revealedDoor+1),r.a.createElement("td",null,e.correctForSwitchingDoor+1),r.a.createElement("td",null,e.correctForSwitching?"Correct":"Incorrect"),r.a.createElement("td",null,e.correctForStaying?"Correct":"Incorrect"))})))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.9c8843ef.chunk.js.map