(this.webpackJsonpreactexer=this.webpackJsonpreactexer||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(10),a=n.n(r),i=(n(30),n.p,n(31),n(44)),l=n(43),o=n(45),d=(n(32),n(11)),j=n(12),h=n(17),u=n(15),b=n(13),O=n(21),x=(n(22),n(1)),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state=Object(O.a)({},e.object()),e.handleInputChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddOrEdit(e.state)},e.reset=function(t){e.setState("")},e}return Object(j.a)(n,[{key:"object",value:function(){return-1===this.props.currentIndex?{Name:"",Cocktail:"",points:""}:this.props.list[this.props.currentIndex]}},{key:"componentDidUpdate",value:function(e){e.currentIndex===this.props.currentIndex&&e.list===this.props.list||(this.setState(Object(O.a)({},this.object())),console.log(e,this.props))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"catch",children:[Object(x.jsx)("h1",{children:"Add Entry"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(x.jsx)("label",{className:"ride",children:"Name"}),Object(x.jsx)("input",{name:"Name",placeholder:"Enter your name",className:"restau",onChange:this.handleInputChange,value:this.state.Name}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"ride",children:"Select cocktail"}),Object(x.jsx)("input",{name:"Cocktail",placeholder:"Cocktail",className:"restau",onChange:this.handleInputChange,value:this.state.Cocktail}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"ride",children:"Points(0 to 10)"}),Object(x.jsx)("input",{name:"points",placeholder:"enter points",className:"restau",onChange:this.handleInputChange,value:this.state.points}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",className:"btn",children:"Submit"}),Object(x.jsx)("button",{type:"submit",className:"btn1",onclick:function(){e.reset()},children:"Reset"})]})]})}}]),n}(c.Component),m=n(42),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={currentIndex:-1,list:e.returnList()},e.handleEdit=function(t){e.setState({currentIndex:t})},e.handleDelete=function(t){var n=e.returnList();n.splice(t,1),localStorage.setItem("check",JSON.stringify(n)),e.setState({list:n,currentIndex:-1})},e.onAddOrEdit=function(t){var n=e.returnList();-1==e.state.currentIndex?n.push(t):n[e.state.currentIndex]=t,localStorage.setItem("check",JSON.stringify(n)),e.setState({list:n,currentIndex:-1})},e}return Object(j.a)(n,[{key:"returnList",value:function(){return null==localStorage.getItem("check")&&localStorage.setItem("check",JSON.stringify([])),JSON.parse(localStorage.getItem("check"))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(p,{currentIndex:this.state.currentIndex,list:this.state.list,onAddOrEdit:this.onAddOrEdit}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"body",children:[Object(x.jsx)("h1",{children:"Entries"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:" Name"}),Object(x.jsx)("th",{children:"cocktail"}),Object(x.jsx)("th",{children:"points"}),Object(x.jsx)("th",{children:"action"})]})}),Object(x.jsx)("tbody",{children:this.state.list.map((function(t,n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.Name}),Object(x.jsx)("td",{children:t.Cocktail}),Object(x.jsx)("td",{children:t.points}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{onClick:function(){return e.handleEdit(n)},children:"Edit"})," ",Object(x.jsx)("button",{onClick:function(){return e.handleDelete(n)},children:"Delete"})]})]},n)}))})]})]})]})}}]),n}(c.Component);var v=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(i.a.Brand,{href:"#home",children:"FE Task"}),Object(x.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsx)(o.a,{className:"me-auto"}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(o.a.Link,{href:"#deets",children:"info"}),Object(x.jsx)(o.a.Link,{eventKey:2,href:"#memes",children:"task"})]})]})]})}),Object(x.jsx)(f,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.d6d032e5.chunk.js.map