(this.webpackJsonp18127016_hw01=this.webpackJsonp18127016_hw01||[]).push([[0],{12:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var n=t(1),s=t.n(n),o=t(7),c=t.n(o),i=(t(12),t(2)),l=t(3),a=t(5),u=t(4),p=t(0),h=function(e){Object(a.a)(t,e);var r=Object(u.a)(t);function t(){return Object(i.a)(this,t),r.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(p.jsx)("button",{className:"square",onClick:function(){return e.props.onClick()},style:this.props.background?{background:"yellow"}:{background:"white"},children:this.props.value})}}]),t}(s.a.Component),d=h,j=function(e){Object(a.a)(t,e);var r=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=r.call.apply(r,[this].concat(s))).renderSquare=function(r){return Object(p.jsx)(d,{background:!!e.props.winLine&&!!e.props.winLine.includes(r),value:e.props.squares[r],onClick:function(){return e.props.onClick(r)}})},e.renderRow=function(r){for(var t=Array(e.props.col).fill(null),n=0;n<e.props.col;n++){var s=r*e.props.col+n;t[n]=e.renderSquare(s)}return t},e.renderBoard=function(){for(var r=Array(e.props.row).fill(null),t=0;t<e.props.row;t++)r[t]=Object(p.jsx)("div",{className:"board-row",children:e.renderRow(t)});return r},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{children:this.renderBoard()})}}]),t}(s.a.Component),b=j,f=function(e){Object(a.a)(t,e);var r=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=r.call(this,e)).handleClick=function(e){var r=n.state.history.slice(0,n.state.stepNumber+1),t=r[r.length-1],s=t.squares.slice();if(!(t.winner.length>0||s[e])){s[e]=n.state.xIsNext?"X":"O";var o=n.calculateWinner(s);console.log(o),console.log(n.state.history),n.setState({history:r.concat([{squares:s,colH:e%n.props.col===0?n.props.col-1:e%n.props.col-1,rowH:Math.ceil(e/n.props.col)-1,winLine:o?o.winLine:null,winner:o?o.winner:""}]),stepNumber:r.length,xIsNext:!n.state.xIsNext})}},n.jumpTo=function(e){n.setState({stepNumber:e,xIsNext:e%2===0})},n.selectedItem=function(e,r){return e===n.state.stepNumber?Object(p.jsx)("strong",{children:r}):r},n.sort=function(){n.setState({isDesc:!n.state.isDesc})},n.findWinLine=function(e){for(var r=[],t=0;t<n.props.row;t++)for(var s=0;s<n.props.col;s++){if(t+e<=n.props.row){for(var o=t,c=s,i=Array(e),l=0;l<e;l++)i[l]=o++*n.props.col+c;r.push(i.slice())}if(s+e<=n.props.col){for(var a=s,u=Array(e),p=0;p<e;p++)u[p]=t*n.props.col+a++;r.push(u.slice())}if(t+e<=n.props.row&&s+e<=n.props.col){for(var h=t,d=s,j=Array(e),b=0;b<e;b++)j[b]=h++*n.props.col+d++;r.push(j.slice())}if(t+e<=n.props.row&&s-(e-1)>=0){for(var f=t,v=s,w=Array(e),m=0;m<e;m++)w[m]=f++*n.props.col+v--;r.push(w.slice())}}return r},n.state={history:[{squares:Array(e.row*e.col).fill(null),winLine:Array(e.numStep).fill(null),winner:"",colH:Number(-1),rowH:Number(-1)}],lines:n.findWinLine(e.numStep),xIsNext:!0,isDesc:!0,stepNumber:0,moves:[]},n}return Object(l.a)(t,[{key:"calculateWinner",value:function(e){for(var r=0;r<this.state.lines.length;r++){var t=this.state.lines[r],n=t.map((function(r){return e[r]}));if(n.every((function(e,r,t){return e===t[0]&&e})))return{winner:n[0],winLine:t}}return null}},{key:"render",value:function(){var e,r=this,t=this.state.history,n=t[this.state.stepNumber],s=n.winner,o=t.map((function(e,n){var s=r.state.isDesc?n:r.state.history.length-n-1,o="Go to move #"+s+" ("+t[s].colH+", "+t[s].rowH+")";return Object(p.jsx)("li",{children:Object(p.jsx)("button",{onClick:function(){return r.jumpTo(s)},children:r.selectedItem(s,o)})},n)}));e=s.length>0?"Winner: "+s:this.state.stepNumber===this.props.col*this.props.row?"Draw":"Next player: "+(this.state.xIsNext?"X":"O");var c=this.state.isDesc?"Sort Descending":"Sort Acsending";return Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"column",children:Object(p.jsx)("div",{className:"game",children:Object(p.jsx)("div",{className:"game-board",children:Object(p.jsx)(b,{col:this.props.col,row:this.props.row,numStep:this.props.numStep,squares:n.squares,winLine:n.winLine,onClick:function(e){return r.handleClick(e)}})})})}),Object(p.jsx)("div",{class:"column",children:Object(p.jsxs)("div",{className:"game-info",children:[Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"column",children:Object(p.jsx)("div",{children:e})}),Object(p.jsx)("div",{class:"column",children:Object(p.jsx)("button",{onClick:function(){return r.sort()},children:c})})]}),Object(p.jsx)("ol",{children:o})]})})]})}}]),t}(s.a.Component);c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(f,{col:6,row:6,numStep:5})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.05f0c378.chunk.js.map