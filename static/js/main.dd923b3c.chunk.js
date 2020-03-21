(this.webpackJsonpmontyhall=this.webpackJsonpmontyhall||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),l=t(3),n=t.n(l),c=t(1),s=(t(9),function(){var e=Math.floor(3*Math.random());return 0===e?[!0,!1,!1]:1===e?[!1,!0,!1]:[!1,!1,!0]}),i=function(){var e=Object(o.useState)(!0),a=Object(c.a)(e,2),t=a[0],l=a[1],n=Object(o.useState)(null),i=Object(c.a)(n,2),m=(i[0],i[1],Object(o.useState)(0)),d=Object(c.a)(m,2),u=d[0],E=d[1],v=Object(o.useState)(s()),h=Object(c.a)(v,2),p=h[0],N=h[1],f=Object(o.useState)([!1,!1,!1]),b=Object(c.a)(f,2),g=b[0],w=b[1],S=Object(o.useState)(0),y=Object(c.a)(S,2),k=y[0],j=y[1],M=Object(o.useState)(0),O=Object(c.a)(M,2),A=O[0],x=O[1],C=Object(o.useState)(0),D=Object(c.a)(C,2),F=(D[0],D[1]),T=Object(o.useState)(!1),W=Object(c.a)(T,2),I=W[0],G=W[1],H=Object(o.useState)(1e3),R=Object(c.a)(H,2),L=R[0],B=R[1],J=Object(o.useState)(3),P=Object(c.a)(J,2),Y=P[0],q=P[1],z=Object(o.useState)(null),V=Object(c.a)(z,2),$=V[0],K=V[1];return Object(o.useEffect)((function(){var e=function(e){if(0===u&&"closed-door"===e.target.className){console.log(e.target.className),console.log(u);var a=[!1,!1,!1];if("App-game-door1"===e.target.className)if(p[0])a[Math.floor(2*Math.random())+1]=!0;else p[1]?a[2]=!0:a[1]=!0;else if("App-game-door2"===e.target.className){if(p[1])a[2*Math.floor(2*Math.random())]=!0;else p[0],a[2]=!0}else if("App-game-door3"===e.target.className){if(p[2])a[Math.floor(2*Math.random())]=!0;else p[0]?a[1]=!0:a[0]=!0}}u>=2&&(N(s()),w([!1,!1,!1]),E(0))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[g,u,p]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Monty Hall Problem Simulator")),r.a.createElement("div",{className:"App-body"},r.a.createElement("div",{className:"App-introduction"},r.a.createElement("div",{className:"accordian-header",onClick:function(){l(!t)}},r.a.createElement("div",{className:"App-triangle"}),"Introduction:",t&&r.a.createElement("div",{className:"accordian-text"},r.a.createElement("p",null,"The Monty Hall problem is an interesting statistical paradox based on the American TV game show, Let's make a Deal. The game show host would ask a contestant to choose 1 out of 3 doors, two doors which hid a goat each, and one that revealed a new car. The host will then reveal a door that the contestant did not pick and had a goat behind it, and then ask the contestant if they would like to switch their choice. Although many would say all doors had an equal chance to lead to the prize of a car, statisticians found that this was not the case. This site will simulate many times the outcomes to help show that switching is a more favorable choice than staying on an initial decision")))),r.a.createElement("div",{className:"App-game-text-container"},r.a.createElement("div",{className:"App-game-intro"},"Try out the game or run a simulation!"),r.a.createElement("div",{className:"App-game-text"},0===u&&r.a.createElement("div",null,"Pick a door!"),1===u&&r.a.createElement("div",null,"You picked door ",k+1,". Monty has revealed a different door. Click a door to either stay or switch."),2===u&&r.a.createElement("div",null,"You picked door ",k+1,", decided to"," ",I?"stay":"switch",", and chose the"," ",p[A]?"winning":"losing"," door. Click to try again"))),r.a.createElement("div",{className:"App-game-grid-container"},r.a.createElement("div",{className:"App-game-door1"},g[0]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[0]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 1",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 1 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[0]){var a=Math.floor(2*Math.random())+1;e[a]=!0,F(3-a)}else p[1]?(e[2]=!0,F(1)):(e[1]=!0,F(2));w(e),E(1),j(0)}else 1!==u||g[0]||(x(0),E(2),w([!0,!0,!0]),G(0===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"1"),1===u&&0===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&0!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"}))),r.a.createElement("div",{className:"App-game-door2"},g[1]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[1]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 2",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 2 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[1]){var a=2*Math.floor(2*Math.random());e[a]=!0,F(2-a)}else p[0]?(e[2]=!0,F(0)):(e[0]=!0,F(2));w(e),E(1),j(1)}else 1!==u||g[1]||(x(1),E(2),w([!0,!0,!0]),G(1===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"2"),1===u&&1===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&1!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"}))),r.a.createElement("div",{className:"App-game-door3"},g[2]?r.a.createElement("div",{className:"door-object"},r.a.createElement("div",{className:"door-way"},p[2]?r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},r.a.createElement("div",{className:"door-panel"}),"Door 3",r.a.createElement("br",null),"Wins!"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})):r.a.createElement("div",{className:"door-door"},r.a.createElement("div",{className:"door-text"},"Door 3 is",r.a.createElement("br",null),"incorrect!"),r.a.createElement("div",{className:"door-knob"})))):r.a.createElement("div",{className:"door-option",onClick:function(){if(0===u){var e=[!1,!1,!1];if(p[2]){var a=Math.floor(2*Math.random());e[a]=!0,F(1-a)}else p[0]?(e[1]=!0,F(0)):(e[0]=!0,F(1));w(e),E(1),j(2)}else 1!==u||g[2]||(x(2),E(2),w([!0,!0,!0]),G(2===k))}},0===u&&r.a.createElement("div",{className:"door-text"},"3"),1===u&&2===k&&r.a.createElement("div",{className:"door-text"},"Stay"),1===u&&2!==k&&r.a.createElement("div",{className:"door-text"},"Switch"),r.a.createElement("div",{className:"door-knob"}),r.a.createElement("div",{className:"door-panel"})))),r.a.createElement("div",{className:"App-form-grid"},r.a.createElement("div",{className:"App-form"},r.a.createElement("div",{className:"App-sim-select"},r.a.createElement("label",null,"How many simulations? ",r.a.createElement("br",null),r.a.createElement("select",{value:L,onChange:function(e){return B(e.target.value)}},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"100"},"100"),r.a.createElement("option",{value:"1000"},"1000"),r.a.createElement("option",{value:"1000000"},"1000000"),r.a.createElement("option",{value:"1000000000"},"100000000")))),r.a.createElement("div",{className:"App-door-select"},r.a.createElement("label",null,"How many doors?",r.a.createElement("br",null),r.a.createElement("select",{value:Y,onChange:function(e){return q(e.target.value)}},r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10")))),r.a.createElement("button",{className:"button",onClick:function(){for(var e=[],a=0,t=0,o=1;o<=L;o++){for(var r=Math.floor(Math.random()*Y),l=Math.floor(Math.random()*Y),n=!1,c=!1,s=l;s===l||s===r;)s=Math.floor(Math.random()*Y);l===r&&(a++,n=!0);for(var i=l;i===l||i===s;)i=Math.floor(Math.random()*Y);if(i===r&&(t++,c=!0),o<=100){var m={winningDoor:r,initGuessDoor:l,revealedDoor:s,correctForSwitchingDoor:i,correctForSwitching:c,correctForStaying:n};e.push(m)}}K({simulations:L,doors:Y,iterations:e,correctForStayingCount:a,correctForSwitchingCount:t})}},"Start"))),$&&r.a.createElement("div",{className:"App-results"},r.a.createElement("h2",null,"Results"),r.a.createElement("div",null,$.simulations," completed for ",$.doors," doors"),r.a.createElement("div",null,$.correctForSwitchingCount,"/",$.simulations," (",($.correctForSwitchingCount/$.simulations*100).toFixed(2),"%) correct for switching."),r.a.createElement("div",null,$.correctForStayingCount,"/",$.simulations," (",($.correctForStayingCount/$.simulations*100).toFixed(2),"%) correct for staying."),r.a.createElement("div",{className:"App-table"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"first-column"},"#"),r.a.createElement("th",{className:"second-column"},"Winning Door"),r.a.createElement("th",null,"Initial Guess"),r.a.createElement("th",null,"Revealed Door"),r.a.createElement("th",null,"Second Guess"),r.a.createElement("th",null,"Switch Result"),r.a.createElement("th",null,"Stay Result"))),r.a.createElement("tbody",null,$.iterations.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"first-column"},a+1),r.a.createElement("td",{className:"second-column"},e.winningDoor+1),r.a.createElement("td",null,e.initGuessDoor+1),r.a.createElement("td",null,e.revealedDoor+1),r.a.createElement("td",null,e.correctForSwitchingDoor+1),r.a.createElement("td",null,e.correctForSwitching?"Correct":"Incorrect"),r.a.createElement("td",null,e.correctForStaying?"Correct":"Incorrect"))})))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.dd923b3c.chunk.js.map