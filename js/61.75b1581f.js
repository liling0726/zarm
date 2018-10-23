(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{389:function(e,n,t){"use strict";t.r(n);var r=t(3),s=t.n(r),a=t(4),l=t.n(a),c=t(2),i=t.n(c),o=t(5),p=t.n(o),u=function(e){function n(){var e,r,a,c;l()(this,n);for(var o=arguments.length,p=Array(o),u=0;u<o;u++)p[u]=arguments[u];return r=a=i()(this,(e=n.__proto__||s()(n)).call.apply(e,[this].concat(p))),a.document=function(){return{document:t(434),className:"progress-page"}},c=r,i()(a,c)}return p()(n,e),n}(t(399).a);n.default=u},399:function(e,n,t){"use strict";var r=t(3),s=t.n(r),a=t(4),l=t.n(a),c=t(6),i=t.n(c),o=t(2),p=t.n(o),u=t(5),h=t.n(u),d=t(0),m=t.n(d),g=t(400),v=t.n(g),w=t(401),f=t.n(w),N=(t(402),function(e){function n(){return l()(this,n),p()(this,(n.__proto__||s()(n)).apply(this,arguments))}return h()(n,e),i()(n,[{key:"render",value:function(){var e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),n=e.document,t=e.className;if("string"==typeof n){var r=new v.a.Renderer;r.table=function(e,n){return'<div class="grid-container"><table class="grid"><thead>'+e+"</thead><tbody>"+n+"</tbody></table></div>"},r.code=function(e,n){return'<pre><code class="hljs '+n+'">'+(!(!n||!f.a.getLanguage(n))?f.a.highlight(n,e).value:e)+"</code></pre>"},v.a.setOptions({renderer:r});var s=v()(n,{renderer:r});return m.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:s}})}return m.a.createElement("span",null)}}]),n}(d.Component));n.a=N},434:function(e,n){e.exports="## 进度条 Progress\n\n\n\n### 基本用法\n```jsx\nimport { Progress, Cell, Select, Stepper } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      percent: 10,\n      theme: 'primary',\n      shape: 'round',\n      weight: 'normal'\n    };\n  }\n\n  render() {\n    const { percent, theme, shape, weight } = this.state;\n\n    return (\n      <div>\n        <div className=\"progress\">\n          <Progress\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            {percent}%\n          </Progress>\n        </div>\n        <div className=\"progress\">\n          <Progress\n            type=\"circle\"\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            <div className=\"progress-content\">\n              <span className=\"progress-text\">{percent}</span>\n              <span className=\"progress-percent\">%</span>\n            </div>\n          </Progress>\n        </div>\n        <div className=\"progress\">\n          <Progress\n            type=\"semi-circle\"\n            percent={percent}\n            theme={theme}\n            shape={shape}\n            weight={weight}\n          >\n            <div className=\"progress-content\">\n              <span className=\"progress-text\">{percent}</span>\n              <span className=\"progress-percent\">%</span>\n            </div>\n          </Progress>\n        </div>\n\n        <Cell title=\"进度\">\n          <Stepper\n            shape=\"radius\"\n            step={10}\n            min={0}\n            max={100}\n            value={percent}\n            onChange={(value) => {\n              if (Number.isNaN(Number(value))) return;\n              this.setState({\n                percent: value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell title=\"主题\">\n          <Select\n            value={theme}\n            dataSource={[\n              { value: 'primary', label: 'primary' },\n              { value: 'success', label: 'success' },\n              { value: 'warning', label: 'warning' },\n              { value: 'error', label: 'error' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                theme: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell title=\"线条形状\">\n          <Select\n            value={shape}\n            dataSource={[\n              { value: 'round', label: 'round' },\n              { value: 'rect', label: 'rect' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                shape: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell title=\"线条粗细\">\n          <Select\n            value={weight}\n            dataSource={[\n              { value: 'normal', label: 'normal' },\n              { value: 'thin', label: 'thin' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                weight: selected[0].value,\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'primary' | 主题，可选值 `default`, `primary`, `info`, `success`, `warning`, `error` |\n| percent | number | 0 | 进度百分比（范围：0～100） |\n| type | string | 'line' | 类型，可选值 `line`, `circle`, `semi-circle` |\n| shape | string | 'round' | 线条形状，可选值 `round`, `rect` |\n| weight | string | 'normal' | 线条粗细，可选值 `normal`, `thin` |\n"}}]);