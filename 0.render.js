exports.ids=[0],exports.modules={345:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  <Header activeTab="Job Search" authenticationStatus="authenticated" userName="Olivia" />\n\n  <PageBlock>\n    <Section header>\n      <Text hero>Style Guide Sandbox</Text>\n    </Section>\n  </PageBlock>\n\n  <Footer />\n'],['\n  <Header activeTab="Job Search" authenticationStatus="authenticated" userName="Olivia" />\n\n  <PageBlock>\n    <Section header>\n      <Text hero>Style Guide Sandbox</Text>\n    </Section>\n  </PageBlock>\n\n  <Footer />\n']),c=r(0),f=n(c),s=r(1),d=n(s),p=r(346),y=n(p),h=r(347),b=n(h),m=r(348),v=n(m),_=r(142),g=n(_),O=r(349),w=n(O),j=r(350),C=r(357),P=n(C);r(364),r(365);var E=r(366),S=n(E),x="undefined"==typeof window?null:function(){var e=r(355);return r(356),e}(),k=(0,y.default)(l)+"\n",R=w.default.createInstance({name:"sandbox",version:1}),T=function(e){function t(){var e,r,n,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={codeReady:!1,code:null,renderCode:null},n.storeCodeMirrorRef=function(e){n.cmRef=e},n.initialiseCode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;n.setState({codeReady:!0,code:e,renderCode:e})},n.updateCode=function(e){var t=n.props.history;n.setState({code:e}),t.replace(e?{hash:"?code="+v.default.encode(e)}:{}),R.setItem("code",e),n.validateCode(e)},n.revertCode=function(){n.updateCode(n.state.renderCode);var e=n.cmRef.codeMirror.getDoc();e.setValue(n.state.renderCode),e.setCursor(n.state.cursor)},n.validateCode=function(e){var t=n.cmRef.codeMirror;t.clearGutter(S.default.gutter);try{new j.Parser({plugins:{jsx:!0}},"<div>"+e+"</div>").parse();var r=t.getDoc().getCursor();n.setState({renderCode:e,cursor:r})}catch(e){var o=e&&(e.message||""),a=o.match(/\(([0-9]+):/),i=a&&a.length>=2&&a[1]&&parseInt(a[1],10)-1;if(!i)return;var u=document.createElement("div");u.classList.add(S.default.marker),u.setAttribute("title",e.message),u.addEventListener("click",n.revertCode),t.setGutterMarker(i,S.default.gutter,u)}},n.handleChange=(0,g.default)(n.updateCode,200),i=r,a(n,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.getCode().then(function(t){var r=t||k;e.initialiseCode(r),e.validateCode(r)})}},{key:"getCode",value:function(){var e=this.props.location,t=e.hash.replace(/^#/,""),r=b.default.parse(t);return r.code?Promise.resolve(v.default.decode(r.code)):R.getItem("code")}},{key:"render",value:function(){var e=this.state,t=e.codeReady,r=e.code,n=e.renderCode;return t?f.default.createElement("div",null,f.default.createElement("div",{className:S.default.previewContainer},f.default.createElement(P.default,{code:n})),f.default.createElement("div",{className:S.default.editorContainer},f.default.createElement(x,{ref:this.storeCodeMirrorRef,value:r,onChange:this.handleChange,options:{mode:"jsx",theme:"material",lineNumbers:!0,gutters:[S.default.gutter]}}))):null}}]),t}(c.Component);T.propTypes={location:d.default.object.isRequired,history:d.default.object.isRequired},T.displayName="Sandbox",t.default=T},357:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),c=n(l),f=r(1),s=n(f),d=r(351),p=n(d),y=r(358),h=n(y),b=r(359),m=n(b),v=r(360),_=n(v),g=r(362),O=n(g),w=r(3),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(w),C=r(363),P=n(C),E=j.StyleGuideProvider,S=[320,414,740,1024,1280],x=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.code;return c.default.createElement("div",{className:P.default.root},c.default.createElement(h.default,{baseHref:"/seek-style-guide/"},function(t){return S.map(function(r,n){return c.default.createElement("div",{key:r,className:P.default.frameContainer},c.default.createElement(p.default,{head:c.default.createElement("base",{href:"/seek-style-guide/"}),className:P.default.frame,style:{width:r}},c.default.createElement("div",{className:P.default.frameContents},t,t&&c.default.createElement(m.default,{delay:50*(n+1)},c.default.createElement(E,{title:"SEEK Style Guide Sandbox"},c.default.createElement(_.default,{key:e},c.default.createElement(O.default,{jsx:e,initialState:{},scope:j})))))))})}))}}]),t}(l.Component);x.propTypes={code:s.default.string.isRequired},x.displayName="Preview",t.default=x},358:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),c=n(l),f=r(1),s=n(f),d=r(352),p=n(d),y=function(e){var t=document.querySelectorAll('style, link[rel="stylesheet"]'),r=Array.from(t).map(function(t){if("STYLE"===t.nodeName)return Promise.resolve(t.innerHTML);var r=t.getAttribute("href"),n=(0,p.default)(e,r);return fetch(n).then(function(e){return e.text()}).catch(function(e){return console.error("Failed to load CSS from "+n,e),""})});return Promise.all(r).then(function(e){return e.join("\n")})},h=function(e){function t(){var e,r,n,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={styleContent:""},i=r,a(n,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.baseHref;y(t).then(function(t){e.setState({styleContent:t})})}},{key:"render",value:function(){var e=this.state.styleContent;return e?this.props.children(c.default.createElement("style",{type:"text/css"},e)):this.props.children(null)}}]),t}(l.Component);h.propTypes={baseHref:s.default.string,children:s.default.func.isRequired},h.defaultProps={baseHref:"/"},h.displayName="CollectStyles",t.default=h},359:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),c=n(l),f=r(1),s=n(f),d=function(e){function t(){var e,r,n,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},i=r,a(n,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({visible:!0})},0)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.delay,n=this.state.visible,o={transition:"opacity 200ms ease",transitionDelay:r+"ms",opacity:n?1:0};return c.default.createElement("div",{style:o},t)}}]),t}(l.Component);d.propTypes={children:s.default.node.isRequired,delay:s.default.number},d.defaultProps={delay:0},d.displayName="Fade",t.default=d},360:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),c=n(l),f=r(1),s=n(f),d=r(3),p=r(361),y=n(p),h=function(e){function t(){var e,r,n,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={error:null,info:null},i=r,a(n,i)}return i(t,e),u(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.error,r=e.info,n=this.props.children;if(!t)return n;var o=r.componentStack.split("\n").filter(function(e){return/RenderJsx/.test(e)}).map(function(e){return e.replace(/ \(created by .*/g,"")}),a=o.slice(0,o.length-1);return c.default.createElement("div",{className:y.default.root},c.default.createElement(d.Section,null,c.default.createElement(d.Alert,{level:"primary",tone:"critical",message:c.default.createElement(l.Fragment,null,c.default.createElement(d.Strong,null,t.message),a.map(function(e,t){return c.default.createElement("div",{key:t},e)}))})))}}]),t}(l.Component);h.propTypes={children:s.default.node.isRequired},h.displayName="CatchErrors",t.default=h},361:function(e,t){e.exports={root:"CatchErrors__root___pWG_d"}},362:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),f=n(c),s=r(1),d=n(s),p=r(353),y=r(354),h=n(y),b=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=r.props.initialState,r}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.jsx,r=e.scope,n="<React.Fragment>"+(t.trim()||"<React.Fragment />")+"</React.Fragment>",o=(0,p.transform)(n),a=o.code;return(0,h.default)(a,u({},r,{React:f.default,this:this}))}}]),t}(c.Component);b.displayName="RenderJsx",b.propTypes={jsx:d.default.string.isRequired,scope:d.default.object,initialState:d.default.object},b.defaultProps={scope:{},initialState:{}},b.displayName="RenderJsx",t.default=b},363:function(e,t){e.exports={root:"Preview__root___3YBFl",frameContainer:"Preview__frameContainer___3D1uZ",frame:"Preview__frame___3U0HN",frameContents:"Preview__frameContents___8Etlt"}},364:function(e,t){},365:function(e,t){},366:function(e,t){e.exports={previewContainer:"Sandbox__previewContainer___1j1gL",editorContainer:"Sandbox__editorContainer___2ayaD",gutter:"Sandbox__gutter___1o76I",marker:"Sandbox__marker___21uq_"}}};