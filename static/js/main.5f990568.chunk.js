(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(2),l=r.n(n),c=(r(13),r(3)),i=r(4),m=r(6),u=r(5),s=r(7),d=(r(15),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).changeBgColor=function(t){t.preventDefault();var r=e.validateHexCode(e.refColorFrom.value.trim())?e.refColorFrom.value:e.state.colorFrom,a=e.validateHexCode(e.refColorTo.value.trim())?e.refColorTo.value:e.state.colorTo;e.setState({colorFrom:r,colorTo:a})},e.validateHexCode=function(e){return!!new RegExp(/^#[0-9A-Fa-f]{6}$/).test(e)&&e},e.state={colorFrom:"#ff22cc",colorTo:"#ffee33"},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="linear-gradient(".concat(this.state.colorFrom,", ").concat(this.state.colorTo,")"),r={backgroundImage:t},a={border:"5px solid transparent",borderImageSource:t,borderImageSlice:1,borderImageWidth:1};return o.a.createElement("div",{className:"App",style:r},o.a.createElement("header",{className:"App-header"},o.a.createElement("form",{id:"bg-page",className:"bg-page",onSubmit:this.changeBgColor},o.a.createElement("label",null,o.a.createElement("span",null,"FROM"),o.a.createElement("input",{type:"text",placeholder:"#FF22CC",name:"colorFrom",required:!0,ref:function(t){return e.refColorFrom=t}})),o.a.createElement("label",null,o.a.createElement("span",null,"TO"),o.a.createElement("input",{type:"text",placeholder:"#FFEE33",name:"colorTo",required:!0,ref:function(t){return e.refColorTo=t}})),o.a.createElement("button",{type:"submit",className:"btn-bg-page",style:a},"GO"))),o.a.createElement("main",null,o.a.createElement("div",{className:"gradient"})))}}]),t}(a.Component));l.a.render(o.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.5f990568.chunk.js.map