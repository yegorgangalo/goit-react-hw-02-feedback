(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(6),s=n.n(o),i=(n(18),n(7)),u=n(8),b=n(9),d=n(12),j=n(10);function l(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{children:t}),n]})}var h=n(4);function v(e){var t=e.options,n=e.onLeaveFeedback,c=Object(h.a)(Object.keys(t));return Object(a.jsx)(a.Fragment,{children:c.map((function(e){return Object(a.jsx)("button",{type:"button",className:"button",value:e,onClick:function(e){var t=e.target;return n(t.value)},children:e},e)}))})}var p=n(11);function O(e){var t=Object(h.a)(Object.entries(e));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Statistics"}),t.map((function(e){var t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{children:[n,":"]}),Object(a.jsx)("span",{children:c})]},n)}))]})}function k(e){var t=e.message;return Object(a.jsx)("p",{children:t})}var f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.addFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good;return 0===this.countTotalFeedback()?0:Math.round(e/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(a.jsxs)(l,{title:"Please leave Feedback",children:[Object(a.jsx)(v,{options:this.state,onLeaveFeedback:this.addFeedback}),0===this.countTotalFeedback()?Object(a.jsx)(k,{message:"No feedback given"}):Object(a.jsx)(O,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positive:"".concat(this.countPositiveFeedbackPercentage(),"%")})]})}}]),n}(c.Component);f.defaultProps={good:0,neutral:0,bad:0};var g=f,x=document.querySelector("#root");s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),x)}},[[19,1,2]]]);
//# sourceMappingURL=main.54d829f2.chunk.js.map