(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jPax:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return V})),n.d(t,"d",(function(){return F})),n.d(t,"e",(function(){return K}));var r=n("q1tI");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?f(e):t}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,i=t.allowMultipleExpanded,c=void 0!==i&&i,l=t.allowZeroExpanded,u=void 0!==l&&l;o(this,e),d(this,"expanded",void 0),d(this,"allowMultipleExpanded",void 0),d(this,"allowZeroExpanded",void 0),d(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(h(n.expanded),[e]):[e]})})),d(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),d(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),d(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),d(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),d(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),o=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":o,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),d(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),d(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),d(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=c,this.allowZeroExpanded=u},b=Object(r.createContext)(null),v=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(f(n=m(this,(e=u(t)).call.apply(e,[this].concat(a)))),"state",new g({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),d(f(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),d(f(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),d(f(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),d(f(n),"getPanelAttributes",(function(e,t){return n.state.getPanelAttributes(e,t)})),d(f(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),d(f(n),"getButtonAttributes",(function(e,t){return n.state.getButtonAttributes(e,t)})),n}return l(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(r.createElement)(b.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(r.PureComponent);d(v,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var E=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(f(n=m(this,(e=u(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return l(t,e),i(t,[{key:"render",value:function(){return Object(r.createElement)(b.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent),x=function(e){var t=e.className,n=void 0===t?"accordion":t,o=e.allowMultipleExpanded,a=e.allowZeroExpanded,i=e.onChange,d=e.preExpanded,l=p(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(v,{preExpanded:d,allowMultipleExpanded:o,allowZeroExpanded:a,onChange:i},Object(r.createElement)("div",c({"data-accordion-component":"Accordion",className:n},l)))},w=0,y=w;var A=/[\u0009\u000a\u000c\u000d\u0020]/g;function O(e){return""!==e&&!A.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var I=Object(r.createContext)(null),j=function(e){function t(){var e,n;o(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return d(f(n=m(this,(e=u(t)).call.apply(e,[this].concat(i)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),d(f(n),"renderChildren",(function(e){var t=n.props,o=t.uuid,a=t.dangerouslySetExpanded,i=null!==a&&void 0!==a?a:e.isItemExpanded(o),d=e.isItemDisabled(o),c=e.getPanelAttributes(o,a),l=e.getHeadingAttributes(o),u=e.getButtonAttributes(o,a);return Object(r.createElement)(I.Provider,{value:{uuid:o,expanded:i,disabled:d,toggleExpanded:n.toggleExpanded,panelAttributes:c,headingAttributes:l,buttonAttributes:u},children:n.props.children})})),n}return l(t,e),i(t,[{key:"render",value:function(){return Object(r.createElement)(E,null,this.renderChildren)}}]),t}(r.Component),P=function(e){return Object(r.createElement)(E,null,(function(t){return Object(r.createElement)(j,c({},e,{accordionContext:t}))}))},C=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(f(n=m(this,(e=u(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return l(t,e),i(t,[{key:"render",value:function(){return Object(r.createElement)(I.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent),D=function(e){var t=e.uuid,n=void 0===t?function(){var e=y;return y+=1,"raa-".concat(e)}():t,o=e.className,a=void 0===o?"accordion__item":o,i=e.activeClassName,d=e.dangerouslySetExpanded,l=p(e,["uuid","className","activeClassName","dangerouslySetExpanded"]);return l.id&&O(l.id),Object(r.createElement)(P,{uuid:n,dangerouslySetExpanded:d},Object(r.createElement)(C,null,(function(e){var t=e.expanded&&i?i:a;return Object(r.createElement)("div",c({"data-accordion-component":"AccordionItem",className:t},l))})))};function _(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}var M,k="40",B="35",N="13",S="36",Z="37",H="39",T="32",L="38",R=function(e){var t=e.toggleExpanded,n=e.className,o=void 0===n?"accordion__button":n,a=p(e,["toggleExpanded","className"]);return a.id&&O(a.id),Object(r.createElement)("div",c({className:o},a,{onClick:t,onKeyDown:function(e){var n=e.which.toString();if(n!==N&&n!==T||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case S:e.preventDefault(),function(e){var t=(_(e)||[])[0];t&&t.focus()}(e.target);break;case B:e.preventDefault(),function(e){var t=_(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case Z:case L:e.preventDefault(),function(e){var t=_(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case H:case k:e.preventDefault(),function(e){var t=_(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},V=function(e){return Object(r.createElement)(C,null,(function(t){var n=t.toggleExpanded,o=t.buttonAttributes;return Object(r.createElement)(R,c({toggleExpanded:n},e,o))}))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(M||(M={}));var q=M,J=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return d(f(n=m(this,(e=u(t)).call.apply(e,[this].concat(a)))),"ref",void 0),d(f(n),"setRef",(function(e){n.ref=e})),n}return l(t,e),i(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",c({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(r.PureComponent);d(J,"defaultProps",{className:"accordion__heading","aria-level":3});var F=function(e){return Object(r.createElement)(C,null,(function(t){var n=t.headingAttributes;return e.id&&O(e.id),Object(r.createElement)(J,c({},e,n))}))};F.displayName=q.AccordionItemHeading;var K=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,o=e.id,a=p(e,["className","id"]);return Object(r.createElement)(C,null,(function(e){var t=e.panelAttributes;return o&&O(o),Object(r.createElement)("div",c({"data-accordion-component":"AccordionItemPanel",className:n},a,t))}))}}}]);