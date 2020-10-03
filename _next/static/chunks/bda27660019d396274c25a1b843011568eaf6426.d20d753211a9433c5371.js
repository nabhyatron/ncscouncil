(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"60Bi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=i(n("q1tI")),a=i(n("Si88"));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return s.default.createElement(a.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?s.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},s.default.createElement("div",{className:e.props.classNames.modalVideoBody},s.default.createElement("div",{className:e.props.classNames.modalVideoInner},s.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},s.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||s.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(s.default.Component);t.default=l,l.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},ENSr:function(e,t,n){"use strict";var o=n("wx14"),s=n("ODXe"),a=n("q1tI"),i=n.n(a),l=n("a6RD"),r=n.n(l),u=i.a.createElement,c=r()((function(){return n.e(6).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),p={loop:!0,margin:30,nav:!1,mouseDrag:!0,dots:!1,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,center:!0,responsive:{0:{items:1},768:{items:2},992:{items:3}}};t.a=function(){var e=i.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return i.a.useEffect((function(){a(!0)}),[]),u("section",{className:"client-area ptb-100"},u("div",{className:"container"},u("div",{className:"section-title white-title"},u("h2",null,"What Client\u2019s Say About Us"),u("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")),n?u(c,Object(o.a)({className:"client-wrap owl-carousel owl-theme"},p),u("div",{className:"single-client"},u("i",{className:"quotes bx bxs-quote-alt-left"}),u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore."),u("ul",null,u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"}))),u("div",{className:"client-img"},u("img",{src:"/img/client-img/client1.jpg",alt:"Image"}),u("h3",null,"Alen Meair"),u("span",null,"Developer"))),u("div",{className:"single-client"},u("i",{className:"quotes bx bxs-quote-alt-left"}),u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore."),u("ul",null,u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"}))),u("div",{className:"client-img"},u("img",{src:"/img/client-img/client2.jpg",alt:"Image"}),u("h3",null,"Axon Detos"),u("span",null,"CEO"))),u("div",{className:"single-client"},u("i",{className:"quotes bx bxs-quote-alt-left"}),u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore."),u("ul",null,u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"}))),u("div",{className:"client-img"},u("img",{src:"/img/client-img/client3.jpg",alt:"Image"}),u("h3",null,"John Dona"),u("span",null,"Designer"))),u("div",{className:"single-client"},u("i",{className:"quotes bx bxs-quote-alt-left"}),u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore."),u("ul",null,u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"})),u("li",null,u("i",{className:"bx bxs-star"}))),u("div",{className:"client-img"},u("img",{src:"/img/client-img/client4.jpg",alt:"Image"}),u("h3",null,"Jon Smith"),u("span",null,"Developer")))):""))}},S3Uj:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("17x9")),s=l(n("q1tI")),a=l(n("i8i4")),i=n("VCL8");n("xfxO");function l(e){return e&&e.__esModule?e:{default:e}}var r="unmounted";t.UNMOUNTED=r;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var p="entered";t.ENTERED=p;t.EXITING="exiting";var d=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var s,a=n.transitionGroup,i=a&&!a.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(s=u,o.appearStatus=c):s=p:s=t.unmountOnExit||t.mountOnEnter?r:u,o.state={status:s},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===r?{status:u}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(t=c):n!==c&&n!==p||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=a.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:r})},i.performEnter=function(e,t){var n=this,o=this.props.enter,s=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,a=this.getTimeouts(),i=s?a.appear:a.enter;t||o?(this.props.onEnter(e,s),this.safeSetState({status:c},(function(){n.props.onEntering(e,s),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,s)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},i.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(e)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===r)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"===typeof n)return n(e,o);var a=s.default.Children.only(n);return s.default.cloneElement(a,o)},o}(s.default.Component);function m(){}d.contextTypes={transitionGroup:o.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var f=(0,i.polyfill)(d);t.default=f},Si88:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}t.default=e}(n("17x9"));var o=l(n("ycFn")),s=l(n("VOcB")),a=l(n("q1tI")),i=l(n("S3Uj"));n("xfxO");function l(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,s.default)(e,t)}))},p=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).onEnter=function(e,n){var o=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,o),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,o),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.getClassNames("appear").doneClassName,s=t.getClassNames("enter").doneClassName,a=n?o+" "+s:s;t.removeClasses(e,n?"appear":"enter"),u(e,a),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,o="string"===typeof n,s=o?(o&&n?n+"-":"")+e:n[e];return{className:s,activeClassName:o?s+"-active":n[e+"Active"],doneClassName:o?s+"-done":n[e+"Done"]}},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.removeClasses=function(e,t){var n=this.getClassNames(t),o=n.className,s=n.activeClassName,a=n.doneClassName;o&&c(e,o),s&&c(e,s),a&&c(e,a)},s.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},s.render=function(){var e=r({},this.props);return delete e.classNames,a.default.createElement(i.default,r({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(a.default.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p;t.default=d,e.exports=t.default},VCL8:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function s(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==l){var r=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+r+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=s),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),o.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},VOcB:function(e,t,n){"use strict";function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))}},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var o;(o=n("17x9"))&&o.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,s.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var s=o(n("yD6e"));e.exports=t.default}}]);