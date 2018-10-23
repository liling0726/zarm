(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{376:function(n,e,t){"use strict";t.r(e);var i=t(3),d=t.n(i),l=t(4),v=t.n(l),a=t(2),o=t.n(a),s=t(5),r=t.n(s),m=function(n){function e(){var n,i,l,a;v()(this,e);for(var s=arguments.length,r=Array(s),m=0;m<s;m++)r[m]=arguments[m];return i=l=o()(this,(n=e.__proto__||d()(e)).call.apply(n,[this].concat(r))),l.document=function(){return{document:t(421),className:"collapse-page"}},a=i,o()(l,a)}return r()(e,n),e}(t(399).a);e.default=m},399:function(n,e,t){"use strict";var i=t(3),d=t.n(i),l=t(4),v=t.n(l),a=t(6),o=t.n(a),s=t(2),r=t.n(s),m=t(5),p=t.n(m),c=t(0),C=t.n(c),u=t(400),y=t.n(u),I=t(401),f=t.n(I),k=(t(402),function(n){function e(){return v()(this,e),r()(this,(e.__proto__||d()(e)).apply(this,arguments))}return p()(e,n),o()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var i=new y.a.Renderer;i.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},i.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n)+"</code></pre>"},y.a.setOptions({renderer:i});var d=y()(e,{renderer:i});return C.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:d}})}return C.a.createElement("span",null)}}]),e}(c.Component));e.a=k},421:function(n,e){n.exports='## 折叠面板 Collapse\n\n\n\n### 基本用法\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse>\n          <Collapse.Item key="1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key={2} title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key="3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 手风琴模式\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse animated>\n          <Collapse.Item key="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 默认展开项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse defaultActiveKey={[\'test1\', \'test2\']}>\n          <Collapse.Item key=\'test1\' title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key=\'test2\' title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key=\'test3\' title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 允许展开多项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse multiple defaultActiveKey={[\'test1\', \'test3\']}>\n          <Collapse.Item key="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item key="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 禁用子项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse \n          multiple\n          activeKey={[\'test2\']}\n          onChange={key => console.log(key)}>\n          <Collapse.Item key="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item disabled key="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item disabled key="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n### Collapse\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| multiple | boolean | false | 是否可以同时展开多项 |\n| animated | boolean | false | 是否添加展开动画 |\n| activeKey | array &#124; string &#124; number | [] | 动态更新展开项的索引数组或字符串或数字 |\n| defaultActiveKey | array &#124; string &#124; number | [] | 初始化默认展开项的索引数组或字符串或数字 |\n| onChange | (key) => void | - | 点击某一项的回调函数 |\n\n### Collapse.Item\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | string | - | 每一项的名称 |\n| key | string &#124; number | - | 对应activeKey |\n| disabled | boolean | false | 是否禁用 |\n\n'}}]);