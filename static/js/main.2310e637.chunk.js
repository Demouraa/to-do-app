(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=(a(10),a(1)),l=a(2),u=(a(11),function(e){var t=e.todo,a=e.index,n=e.completeTodo,r=e.removeTodo;return o.a.createElement("div",{style:{textDecoration:t.isComplete?"line-through":""},className:"todo"},o.a.createElement("div",null,t.text),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:function(){return n(a)}},"Completo"),o.a.createElement("button",{onClick:function(){return r(a)}},"X")))}),m=function(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1];return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),i(""))}},o.a.createElement("label",null,"Digite uma Tarefa:"),o.a.createElement("input",{type:"text",className:"input",value:c,placeholder:"Digite aqui para adicionar uma tarefa",onChange:function(e){return i(e.target.value)}})))};var s=function(){var e=Object(n.useState)([{text:"Aprender Mais React",isComplete:!1},{text:"Ir para a Recode",isComplete:!1},{text:"Construir um App legal",isComplete:!1}]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=function(e){var t=Object(i.a)(a);t[e].isComplete=!0,r(t)},s=function(e){var t=Object(i.a)(a);t.splice(e,1),r(t)};return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"Lista de Afazeres"),o.a.createElement("div",{className:"todo-list"},a.map((function(e,t){return o.a.createElement(u,{key:t,index:t,todo:e,completeTodo:c,removeTodo:s})})),o.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(i.a)(a),[{text:e}]);r(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2310e637.chunk.js.map