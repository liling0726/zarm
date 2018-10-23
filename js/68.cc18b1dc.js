(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{396:function(n,e,t){"use strict";t.r(e);var a=t(3),r=t.n(a),o=t(4),l=t.n(o),i=t(2),c=t.n(i),s=t(5),d=t.n(s),u=function(n){function e(){var n,a,o,i;l()(this,e);for(var s=arguments.length,d=Array(s),u=0;u<s;u++)d[u]=arguments[u];return a=o=c()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(d))),o.document=function(){return{document:t(441),className:"switch-page"}},i=a,c()(o,i)}return d()(e,n),e}(t(399).a);e.default=u},399:function(n,e,t){"use strict";var a=t(3),r=t.n(a),o=t(4),l=t.n(o),i=t(6),c=t.n(i),s=t(2),d=t.n(s),u=t(5),h=t.n(u),p=t(0),v=t.n(p),f=t(400),m=t.n(f),g=t(401),C=t.n(g),b=(t(402),function(n){function e(){return l()(this,e),d()(this,(e.__proto__||r()(e)).apply(this,arguments))}return h()(e,n),c()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var a=new m.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},a.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!C.a.getLanguage(e))?C.a.highlight(e,n).value:n)+"</code></pre>"},m.a.setOptions({renderer:a});var r=m()(e,{renderer:a});return v.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return v.a.createElement("span",null)}}]),e}(p.Component));e.a=b},441:function(n,e){n.exports="## 开关 Switch\n\n\n\n### 基本用法\n```jsx\nimport { Switch, Cell } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: true,\n    };\n  }\n\n  toggle(value) {\n    this.setState({\n      value,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Switch\n              checked={this.state.value}\n              onChange={(value) => {\n                this.setState({ value });\n              }}\n            />\n          }\n        >\n          普通\n        </Cell>\n        <Cell description={<Switch defaultChecked />}>默认开</Cell>\n        <Cell description={<Switch disabled />}>禁用的开关（默认关）</Cell>\n        <Cell description={<Switch defaultChecked disabled />}>禁用的开关（默认开）</Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| checked | boolean | - | 值 |\n| defaultChecked | boolean | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value: boolean) => void | - | 值变化时触发的回调函数 |\n"}}]);