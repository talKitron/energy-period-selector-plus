function t(t,e,o,n){var i,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(s<3?i(a):s>3?i(e,o,a):i(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new s(o,t,n)},r=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var c;const l=window,d=l.trustedTypes,u=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:m},y="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Ep(o,e);void 0!==n&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{o?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(o=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=o.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=_){var n;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var o;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=i,this[i]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var f;g[y]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const v=window,b=v.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,S="?"+$,z=`<${S}>`,k=document,E=()=>k.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,M=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,O=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(t,...e)=>({_$litType$:1,strings:t,values:e}),I=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),R=new WeakMap,U=k.createTreeWalker(k,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,s=0;const a=t.length-1,r=this.parts,[c,l]=((t,e)=>{const o=t.length-1,n=[];let i,s=2===e?"<svg>":"",a=C;for(let e=0;e<o;e++){const o=t[e];let r,c,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===C?"!--"===c[1]?a=P:void 0!==c[1]?a=M:void 0!==c[2]?(L.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=H):void 0!==c[3]&&(a=H):a===H?">"===c[0]?(a=null!=i?i:C,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?H:'"'===c[3]?O:N):a===O||a===N?a=H:a===P||a===M?a=C:(a=H,i=void 0);const u=a===H&&t[e+1].startsWith("/>")?" ":"";s+=a===C?o+z:l>=0?(n.push(r),o.slice(0,l)+x+o.slice(l)+$+u):o+$+(-2===l?(n.push(void 0),e):u)}return[V(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),n]})(t,e);if(this.el=F.createElement(c,o),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=U.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(x)||e.startsWith($)){const o=l[s++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+x).split($),e=/([.?@])?(.*)/.exec(o);r.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?J:"@"===e[1]?Q:Z})}else r.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(L.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],E()),U.nextNode(),r.push({type:2,index:++i});n.append(t[e],E())}}}else if(8===n.nodeType)if(n.data===S)r.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)r.push({type:7,index:i}),t+=$.length-1}i++}}static createElement(t,e){const o=k.createElement("template");return o.innerHTML=t,o}}function K(t,e,o=t,n){var i,s,a,r;if(e===I)return e;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=A(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,o,n)),void 0!==n?(null!==(a=(r=o)._$Co)&&void 0!==a?a:r._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(e=K(t,c._$AS(t,e.values),c,n)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(o,!0);U.currentNode=i;let s=U.nextNode(),a=0,r=0,c=n[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new Y(s,s.nextSibling,this,t):1===c.type?e=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(e=new X(s,this,t)),this._$AV.push(e),c=n[++r]}a!==(null==c?void 0:c.index)&&(s=U.nextNode(),a++)}return U.currentNode=k,i}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{constructor(t,e,o,n){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),A(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&A(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=F.createElement(V(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(o);else{const t=new W(i,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new F(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new Y(this.k(E()),this.k(E()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,o,n,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let s=!1;if(void 0===i)t=K(this,t,e,0),s=!A(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const n=t;let a,r;for(t=i[0],a=0;a<i.length-1;a++)r=K(this,n[o+a],e,a),r===I&&(r=this._$AH[a]),s||(s=!A(r)||r!==this._$AH[a]),r===B?t=B:t!==B&&(t+=(null!=r?r:"")+i[a+1]),this._$AH[a]=r}s&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const G=b?b.emptyScript:"";class J extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Q extends Z{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=K(this,t,e,0))&&void 0!==o?o:B)===I)return;const n=this._$AH,i=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const tt=v.litHtmlPolyfillSupport;var et,ot;null==tt||tt(F,Y),(null!==(f=v.litHtmlVersions)&&void 0!==f?f:v.litHtmlVersions=[]).push("2.8.0");class nt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let a=s._$litPart$;if(void 0===a){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=a=new Y(e.insertBefore(E(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}nt.finalized=!0,nt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:nt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:nt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function rt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):at(t,e)}function ct(t){return rt({...t,state:!0})}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;var dt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";function ut(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function pt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ht(t){return ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(t)}function mt(t){pt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===ht(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function _t(t,e){pt(2,arguments);var o=mt(t),n=ut(e);return isNaN(n)?new Date(NaN):n?(o.setDate(o.getDate()+n),o):o}function yt(t,e){pt(2,arguments);var o=mt(t),n=ut(e);if(isNaN(n))return new Date(NaN);if(!n)return o;var i=o.getDate(),s=new Date(o.getTime());return s.setMonth(o.getMonth()+n+1,0),i>=s.getDate()?s:(o.setFullYear(s.getFullYear(),s.getMonth(),i),o)}function gt(t,e){pt(2,arguments);var o=mt(t).getTime(),n=ut(e);return new Date(o+n)}function ft(t,e){return pt(2,arguments),gt(t,36e5*ut(e))}var vt={};function bt(){return vt}function wt(t,e){var o,n,i,s,a,r,c,l;pt(1,arguments);var d=bt(),u=ut(null!==(o=null!==(n=null!==(i=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(a=e.locale)||void 0===a||null===(r=a.options)||void 0===r?void 0:r.weekStartsOn)&&void 0!==i?i:d.weekStartsOn)&&void 0!==n?n:null===(c=d.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=mt(t),h=p.getDay(),m=(h<u?7:0)+h-u;return p.setDate(p.getDate()-m),p.setHours(0,0,0,0),p}function xt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function $t(t){pt(1,arguments);var e=mt(t);return e.setHours(0,0,0,0),e}function St(t,e){return pt(2,arguments),_t(t,7*ut(e))}function zt(t,e){return pt(2,arguments),yt(t,12*ut(e))}function kt(t,e){var o=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return o<0?-1:o>0?1:o}function Et(t,e){pt(2,arguments);var o=mt(t),n=mt(e),i=kt(o,n),s=Math.abs(function(t,e){pt(2,arguments);var o=$t(t),n=$t(e),i=o.getTime()-xt(o),s=n.getTime()-xt(n);return Math.round((i-s)/864e5)}(o,n));o.setDate(o.getDate()-i*s);var a=i*(s-Number(kt(o,n)===-i));return 0===a?0:a}function At(t){pt(1,arguments);var e=mt(t);return e.setHours(23,59,59,999),e}function Dt(t){pt(1,arguments);var e=mt(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Tt(t){pt(1,arguments);var e=mt(t),o=new Date(0);return o.setFullYear(e.getFullYear(),0,1),o.setHours(0,0,0,0),o}function Ct(){return At(Date.now())}function Pt(){return $t(Date.now())}var Mt,Ht,Nt,Ot={en:"US",hi:"IN",deva:"IN",te:"IN",mr:"IN",ta:"IN",gu:"IN",kn:"IN",or:"IN",ml:"IN",pa:"IN",bho:"IN",awa:"IN",as:"IN",mwr:"IN",mai:"IN",mag:"IN",bgc:"IN",hne:"IN",dcc:"IN",bn:"BD",beng:"BD",rkt:"BD",dz:"BT",tibt:"BT",tn:"BW",am:"ET",ethi:"ET",om:"ET",quc:"GT",id:"ID",jv:"ID",su:"ID",mad:"ID",ms_arab:"ID",he:"IL",hebr:"IL",jam:"JM",ja:"JP",jpan:"JP",km:"KH",khmr:"KH",ko:"KR",kore:"KR",lo:"LA",laoo:"LA",mh:"MH",my:"MM",mymr:"MM",mt:"MT",ne:"NP",fil:"PH",ceb:"PH",ilo:"PH",ur:"PK",pa_arab:"PK",lah:"PK",ps:"PK",sd:"PK",skr:"PK",gn:"PY",th:"TH",thai:"TH",tts:"TH",zh_hant:"TW",hant:"TW",sm:"WS",zu:"ZA",sn:"ZW",arq:"DZ",ar:"EG",arab:"EG",arz:"EG",fa:"IR",az_arab:"IR",dv:"MV",thaa:"MV"},Lt={AG:0,ATG:0,28:0,AS:0,ASM:0,16:0,BD:0,BGD:0,50:0,BR:0,BRA:0,76:0,BS:0,BHS:0,44:0,BT:0,BTN:0,64:0,BW:0,BWA:0,72:0,BZ:0,BLZ:0,84:0,CA:0,CAN:0,124:0,CO:0,COL:0,170:0,DM:0,DMA:0,212:0,DO:0,DOM:0,214:0,ET:0,ETH:0,231:0,GT:0,GTM:0,320:0,GU:0,GUM:0,316:0,HK:0,HKG:0,344:0,HN:0,HND:0,340:0,ID:0,IDN:0,360:0,IL:0,ISR:0,376:0,IN:0,IND:0,356:0,JM:0,JAM:0,388:0,JP:0,JPN:0,392:0,KE:0,KEN:0,404:0,KH:0,KHM:0,116:0,KR:0,KOR:0,410:0,LA:0,LA0:0,418:0,MH:0,MHL:0,584:0,MM:0,MMR:0,104:0,MO:0,MAC:0,446:0,MT:0,MLT:0,470:0,MX:0,MEX:0,484:0,MZ:0,MOZ:0,508:0,NI:0,NIC:0,558:0,NP:0,NPL:0,524:0,PA:0,PAN:0,591:0,PE:0,PER:0,604:0,PH:0,PHL:0,608:0,PK:0,PAK:0,586:0,PR:0,PRI:0,630:0,PT:0,PRT:0,620:0,PY:0,PRY:0,600:0,SA:0,SAU:0,682:0,SG:0,SGP:0,702:0,SV:0,SLV:0,222:0,TH:0,THA:0,764:0,TT:0,TTO:0,780:0,TW:0,TWN:0,158:0,UM:0,UMI:0,581:0,US:0,USA:0,840:0,VE:0,VEN:0,862:0,VI:0,VIR:0,850:0,WS:0,WSM:0,882:0,YE:0,YEM:0,887:0,ZA:0,ZAF:0,710:0,ZW:0,ZWE:0,716:0,AE:6,ARE:6,784:6,AF:6,AFG:6,4:6,BH:6,BHR:6,48:6,DJ:6,DJI:6,262:6,DZ:6,DZA:6,12:6,EG:6,EGY:6,818:6,IQ:6,IRQ:6,368:6,IR:6,IRN:6,364:6,JO:6,JOR:6,400:6,KW:6,KWT:6,414:6,LY:6,LBY:6,434:6,OM:6,OMN:6,512:6,QA:6,QAT:6,634:6,SD:6,SDN:6,729:6,SY:6,SYR:6,760:6,MV:5,MDV:5,462:5};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Mt||(Mt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ht||(Ht={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Nt||(Nt={}));const jt=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],It=t=>t.first_weekday===Nt.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(t.language).weekInfo.firstDay%7:function(t){return function(t,e,o){if(t){var n,i=t.toLowerCase().split(/[-_]/),s=i[0],a=s;if(i[1]&&4===i[1].length?(a+="_"+i[1],n=i[2]):n=i[1],n||(n=e[a]||e[s]),n)return function(t,e){var o=e["string"==typeof t?t.toUpperCase():t];return"number"==typeof o?o:1}(n.match(/^\d+$/)?Number(n):n,o)}return 1}(t,Ot,Lt)}(t.language)%7:jt.includes(t.first_weekday)?jt.indexOf(t.first_weekday):1;var Bt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Rt(t,e){return t===e||!(!Bt(t)||!Bt(e))}function Ut(t,e){if(t.length!==e.length)return!1;for(var o=0;o<t.length;o++)if(!Rt(t[o],e[o]))return!1;return!0}function Vt(t,e){void 0===e&&(e=Ut);var o=null;function n(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(o&&o.lastThis===this&&e(n,o.lastArgs))return o.lastResult;var s=t.apply(this,n);return o={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){o=null},n}Vt(t=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"}));const Ft=Vt(t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}));Vt(t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"}));const Kt=(t,e)=>Wt(e).format(t),Wt=Vt(t=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})),Yt=Vt(t=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"}));Vt(t=>new Intl.DateTimeFormat(t.language,{month:"long"}));const Zt=Vt(t=>new Intl.DateTimeFormat(t.language,{year:"numeric"}));Vt(t=>new Intl.DateTimeFormat(t.language,{weekday:"long"}));const qt=t=>{let e=[];function o(o,n){t=n?o:Object.assign(Object.assign({},t),o);let i=e;for(let e=0;e<i.length;e++)i[e](t)}return{get state(){return t},action(e){function n(t){o(t,!1)}return function(){let o=[t];for(let t=0;t<arguments.length;t++)o.push(arguments[t]);let i=e.apply(this,o);if(null!=i)return i instanceof Promise?i.then(n):n(i)}},setState:o,subscribe:t=>(e.push(t),()=>{!function(t){let o=[];for(let n=0;n<e.length;n++)e[n]===t?t=null:o.push(e[n]);e=o}(t)})}},Gt=(t,e)=>{const o={};return e&&(e.type&&(o.type_filter=e.type),e.domain&&(o.domain=e.domain)),t.callWS(Object.assign({type:"config_entries/get"},o))},Jt=(t,e,o,n,i="hour",s,a)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==o?void 0:o.toISOString(),statistic_ids:n,period:i,units:s,types:a}),Qt=[],Xt=t=>t.callWS({type:"energy/info"}),te=async(t,e,o,n,i,s="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==i?void 0:i.toISOString(),energy_statistic_ids:o,co2_statistic_id:n,period:s}),ee=(t,e,o)=>{const n=[];for(const i of t.energy_sources)if(!o||o.includes(i.type))if("solar"!==i.type){if("gas"===i.type||"water"===i.type){n.push(i.stat_energy_from),i.stat_cost&&n.push(i.stat_cost);const t=e.cost_sensors[i.stat_energy_from];t&&n.push(t);continue}if("battery"!==i.type){if(i.flow_from&&i.flow_from.length)for(const t of i.flow_from){n.push(t.stat_energy_from),t.stat_cost&&n.push(t.stat_cost);const o=e.cost_sensors[t.stat_energy_from];o&&n.push(o)}else if(i.stat_energy_from){n.push(i.stat_energy_from),i.stat_cost&&n.push(i.stat_cost);const t=e.cost_sensors[i.stat_energy_from];t&&n.push(t)}if(i.flow_to&&i.flow_to.length)for(const t of i.flow_to){n.push(t.stat_energy_to),t.stat_compensation&&n.push(t.stat_compensation);const o=e.cost_sensors[t.stat_energy_to];o&&n.push(o)}else if(i.stat_energy_to){n.push(i.stat_energy_to),i.stat_compensation&&n.push(i.stat_compensation);const t=e.cost_sensors[i.stat_energy_to];t&&n.push(t)}}else n.push(i.stat_energy_from),n.push(i.stat_energy_to)}else n.push(i.stat_energy_from);return n},oe=(t,e={})=>{let o="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");o=`_${e.key}`}if(t.connection[o])return t.connection[o];Qt.push(e.key);const n=((t,e,o,n)=>{if(t[e])return t[e];let i,s,a=0,r=qt();const c=()=>{if(!o)throw new Error("Collection does not support refresh");return o(t).then(t=>r.setState(t,!0))},l=()=>c().catch(e=>{if(t.connected)throw e}),d=()=>{s=void 0,i&&i.then(t=>{t()}),t.removeEventListener("ready",c),t.removeEventListener("disconnected",u)},u=()=>{s&&(clearTimeout(s),d())};return t[e]={get state(){return r.state},refresh:c,subscribe(e){a++,1===a&&(()=>{if(void 0!==s)return clearTimeout(s),void(s=void 0);n&&(i=n(t,r)),o&&(t.addEventListener("ready",l),l()),t.addEventListener("disconnected",u)})();const c=r.subscribe(e);return void 0!==r.state&&setTimeout(()=>e(r.state),0),()=>{c(),a--,a||(s=setTimeout(d,5e3))}}},t[e]})(t.connection,o,async()=>{if(n.prefs||(n.prefs=await(t=>t.callWS({type:"energy/get_prefs"}))(t)),n._refreshTimeout&&clearTimeout(n._refreshTimeout),n._active&&(!n.end||n.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),n._refreshTimeout=window.setTimeout(()=>n.refresh(),t.getTime()-Date.now())}return(async(t,e,o,n,i)=>{const[s,a]=await Promise.all([Gt(t,{domain:"co2signal"}),Xt(t)]),r=s.length?s[0]:void 0;let c;if(r)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const o=t.states[e.entity_id];if(o&&"%"===o.attributes.unit_of_measurement){c=o.entity_id;break}}const l=[];for(const t of e.energy_sources)if("grid"===t.type)if(t.flow_from&&t.flow_from.length)for(const e of t.flow_from)l.push(e.stat_energy_from);else t.stat_energy_from&&l.push(t.stat_energy_from);const d=ee(e,a,["grid","solar","battery","gas"]),u=ee(e,a,["water"]),p=[...d,...u],h=Et(n||new Date,o),m=h>35?"month":h>2?"day":"hour",_=ft(o,-1),y=t.config.unit_system.length||"",g={energy:"kWh",volume:"km"===y?"m³":"ft³"},f={volume:"km"===y?"L":"gal"},v=d.length?Jt(t,_,n,d,m,g,["change"]):{},b=u.length?Jt(t,_,n,u,m,f,["change"]):{};let w,x,$,S,z,k={},E={};if(i){x=h>27&&h<32?yt(o,-1):_t(o,-1*(h+1));const e=ft(x,-1);$=gt(o,-1),d.length&&(k=Jt(t,e,$,d,m,g,["sum"])),u.length&&(E=Jt(t,e,$,u,m,f,["sum"]))}void 0!==c&&(S=te(t,o,l,c,n,h>35?"month":h>2?"day":"hour"),i&&(z=te(t,x,l,c,$,h>35?"month":h>2?"day":"hour")));const A={},D=p.length?((t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}))(t,p):[],[T,C,P,M,H,N,O]=await Promise.all([v,b,k,E,D,S,z]),L=Object.assign(Object.assign({},T),C);return i&&(w=Object.assign(Object.assign({},P),M)),p.length&&H.forEach(t=>{A[t.statistic_id]=t}),Object.values(L).forEach(t=>{t.length&&new Date(t[0].start)>_&&t.unshift(Object.assign(Object.assign({},t[0]),{start:_.getTime(),end:_.getTime(),sum:0,state:0}))}),{start:o,end:n,startCompare:x,endCompare:$,info:a,prefs:e,stats:L,statsMetadata:A,statsCompare:w,co2SignalConfigEntry:r,co2SignalEntity:c,fossilEnergyConsumption:N,fossilEnergyConsumptionCompare:O}})(t,n.prefs,n.start,n.end,n.compare)}),i=n.subscribe;n.subscribe=t=>{const e=i(t);return n._active++,()=>{n._active--,n._active<1&&(clearTimeout(n._refreshTimeout),n._refreshTimeout=void 0),e()}},n._active=0,n.prefs=e.prefs;const s=new Date;n.start=s.getHours()>0?Pt():function(){var t=new Date,e=t.getFullYear(),o=t.getMonth(),n=t.getDate(),i=new Date(0);return i.setFullYear(e,o,n-1),i.setHours(0,0,0,0),i}(),n.end=s.getHours()>0?Ct():function(){var t=new Date,e=t.getFullYear(),o=t.getMonth(),n=t.getDate(),i=new Date(0);return i.setFullYear(e,o,n-1),i.setHours(23,59,59,999),i}();const a=()=>{n._updatePeriodTimeout=window.setTimeout(()=>{n.start=Pt(),n.end=Ct(),a()},ft(Ct(),1).getTime()-Date.now())};return a(),n.clearPrefs=()=>{n.prefs=void 0},n.setPeriod=(t,e)=>{var o;n.start=t,n.end=e,n.start.getTime()!==Pt().getTime()||(null===(o=n.end)||void 0===o?void 0:o.getTime())!==Ct().getTime()||n._updatePeriodTimeout?n._updatePeriodTimeout&&(clearTimeout(n._updatePeriodTimeout),n._updatePeriodTimeout=void 0):a()},n.setCompare=t=>{n.compare=t},n},ne=e=>{class o extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){super.disconnectedCallback(),this.hassUnsubscribe()}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}resetSubscriptions(){this.hassUnsubscribe(),this.__checkSubscribed()}hassSubscribe(){return[]}hassUnsubscribe(){if(this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([rt({attribute:!1})],o.prototype,"hass",void 0),o};var ie={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_found:"Entity state not found",missing_child:"Missing child entity",loading:"Loading..."},se={custom:"Custom",today:"Today"},ae={sync_mutual_exclusion_warning:"Use either Sync Date Entity or Sync Start/End Date Entity, not both.",yaml_disclaimer:"Please use yaml mode for the other options",docs:"Documentation",sections:"Sections",section:"Section",add_section:"+ Add section",add_entity:"+ Add entity",entity_editor:"Entity editor",decimals:"decimals",fields:{card_background:"Card Background",prev_next_buttons:"Show Previous/Next Buttons",compare_button_type:"Compare Button Type",custom_period_label:"Custom Period Label",compare_button_options:{icon:"Icon",text:"Text"},period_buttons:"Period Buttons",today_button_type:"Today Button Type",compare_button_label:"Compare Button Label",period_buttons_options:{day:"Day",week:"Week",month:"Month",year:"Year",custom:"Custom"},sync_entity:"Sync Date Entity",sync_clear:"Clear",sync_direction:"Sync Direction",sync_start_entity:"Sync Start Date Entity",sync_end_entity:"Sync End Date Entity",sync_direction_options:{both:"Bi-directional",to_entity:"To Entity Only",from_entity:"From Entity Only"},layout_mode:"Layout Mode",layout_mode_options:{standard:"Standard",compact:"Compact",wide:"Wide"},density:"Density",density_options:{normal:"Normal",compact:"Compact",comfortable:"Comfortable"},button_group_width:"Button Group Width",button_group_width_options:{auto:"Auto",full:"Full"},advanced_appearance_section:"Advanced appearance",button_font_size:"Button Font Size (px)",date_font_size:"Date Font Size (px)",button_min_width:"Button Min Width (px)",gap:"Gap (px)",icon_button_size:"Icon Button Size (px)",button_type_options:{none:"None"}},entity_types:{entity:"Entity",remaining_parent_state:"Remaining parent state",remaining_child_state:"Remaining child state",passthrough:"Passthrough"}},re={common:ie,toggleButtons:se,editor:ae},ce={version:"Version",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung anzeigen",entity_not_found:"Entitätsstatus nicht gefunden",missing_child:"Fehlende Kind-Entität",loading:"Laden..."},le={custom:"Benutzerdefiniert",today:"Heute"},de={sync_mutual_exclusion_warning:"Nur entweder Sync-Datums-Entität oder Sync-Start-/End-Entität verwenden, nicht beides.",yaml_disclaimer:"Bitte verwenden Sie den YAML-Modus für die anderen Optionen",docs:"Dokumentation",sections:"Abschnitte",section:"Abschnitt",add_section:"+ Abschnitt hinzufügen",add_entity:"+ Entität hinzufügen",entity_editor:"Entitätseditor",decimals:"Nachkommastellen",fields:{card_background:"Kartenhintergrund",prev_next_buttons:"Vorherige/Nächste Schaltflächen anzeigen",compare_button_type:"Vergleichstyp der Schaltfläche",custom_period_label:"Benutzerdefiniertes Zeitraster-Label",compare_button_options:{icon:"Symbol",text:"Text"},period_buttons:"Zeitraumschaltflächen",today_button_type:"Heutiger Schaltflächentyp",compare_button_label:"Beschriftung der Vergleichsschaltfläche",period_buttons_options:{day:"Tag",week:"Woche",month:"Monat",year:"Jahr",custom:"Benutzerdefiniert"},sync_entity:"Sync-Datums-Entität",sync_clear:"Löschen",sync_direction:"Sync-Richtung",sync_start_entity:"Sync-Entität Startdatum",sync_end_entity:"Sync-Entität Enddatum",sync_direction_options:{both:"Bidirektional",to_entity:"Nur zur Entität",from_entity:"Nur von Entität"},layout_mode:"Layout-Modus",layout_mode_options:{standard:"Standard (Standard)",compact:"Kompakt",wide:"Breit"},density:"Dichte",density_options:{normal:"Normal",compact:"Kompakt",comfortable:"Komfortabel"},button_group_width:"Button-Gruppenbreite",button_group_width_options:{auto:"Auto",full:"Voll"},advanced_appearance_section:"Erweiterte Darstellung",button_font_size:"Button-Schriftgröße (px)",date_font_size:"Datums-Schriftgröße (px)",button_min_width:"Button-Mindestbreite (px)",gap:"Abstand (px)",icon_button_size:"Symbol-Schaltflächengröße (px)",button_type_options:{none:"Keine"}},entity_types:{entity:"Entität",remaining_parent_state:"Verbleibender Elternstatus",remaining_child_state:"Verbleibender Kindstatus",passthrough:"Durchleitung"}},ue={common:ce,toggleButtons:le,editor:de},pe={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Mostrar Aviso",entity_not_found:"Estado da entidade não encontrado",missing_child:"Entidade filha em falta",loading:"A carregar..."},he={custom:"Personalizado",today:"Hoje"},me={sync_mutual_exclusion_warning:"Use apenas Entidade de Data de Sincronização ou Entidades de Início/Fim de Sincronização, não ambas.",yaml_disclaimer:"Por favor, utilize o modo yaml para as outras opções",docs:"Documentação",sections:"Secções",section:"Secção",add_section:"+ Adicionar secção",add_entity:"+ Adicionar entidade",entity_editor:"Editor de entidades",decimals:"casas decimais",fields:{card_background:"Fundo do cartão",prev_next_buttons:"Mostrar Botões de controle",compare_button_type:"Tipo de Botão para Comparar",custom_period_label:"Rótulo do Período Personalizado",compare_button_options:{icon:"Ícone",text:"Texto"},period_buttons:"Botões de Período",today_button_type:"Tipo de Botão Hoje",compare_button_label:"Rótulo do Botão Comparar",period_buttons_options:{day:"Dia",week:"Semana",month:"Mês",year:"Ano",custom:"Personalizado"},sync_entity:"Entidade de Data de Sincronização",sync_clear:"Limpar",sync_direction:"Direção de Sincronização",sync_start_entity:"Entidade de Data de Início de Sincronização",sync_end_entity:"Entidade de Data de Fim de Sincronização",sync_direction_options:{both:"Bidireccional",to_entity:"Apenas para Entidade",from_entity:"Apenas da Entidade"},layout_mode:"Modo de Layout",layout_mode_options:{standard:"Padrão (Padrão)",compact:"Compacto",wide:"Largo"},density:"Densidade",density_options:{normal:"Normal",compact:"Compacto",comfortable:"Confortável"},button_group_width:"Largura do grupo de botões",button_group_width_options:{auto:"Auto",full:"Completo"},advanced_appearance_section:"Aparência avançada",button_font_size:"Tamanho da fonte do botão (px)",date_font_size:"Tamanho da fonte da data (px)",button_min_width:"Largura mínima do botão (px)",gap:"Espaçamento (px)",icon_button_size:"Tamanho do botão de ícone (px)",button_type_options:{none:"Nenhum"}},entity_types:{entity:"Entidade",remaining_parent_state:"Estado pai restante",remaining_child_state:"Estado filho restante",passthrough:"Encaminhar"}},_e={common:pe,toggleButtons:he,editor:me},ye={version:"Versión",invalid_configuration:"Configuración inválida",show_warning:"Mostrar advertencia",entity_not_found:"Estado de entidad no encontrado",missing_child:"Entidad secundaria faltante",loading:"Cargando..."},ge={custom:"Personalizado",today:"Hoy"},fe={sync_mutual_exclusion_warning:"Usa solo Entidad de Fecha de Sincronización o Entidades de Inicio/Fin de Sincronización, no ambas.",yaml_disclaimer:"Por favor, utiliza el modo YAML para las otras opciones",docs:"Documentación",sections:"Secciones",section:"Sección",add_section:"+ Agregar sección",add_entity:"+ Agregar entidad",entity_editor:"Editor de entidades",decimals:"decimales",fields:{card_background:"Fondo de tarjeta",prev_next_buttons:"Mostrar botones Anterior/Siguiente",compare_button_type:"Tipo de botón de comparación",custom_period_label:"Etiqueta de período personalizada",compare_button_options:{icon:"Ícono",text:"Texto"},period_buttons:"Botones de período",today_button_type:"Tipo de botón Hoy",compare_button_label:"Etiqueta del botón de comparación",period_buttons_options:{day:"Día",week:"Semana",month:"Mes",year:"Año",custom:"Personalizado"},sync_entity:"Entidad de Fecha de Sincronización",sync_clear:"Borrar",sync_direction:"Dirección de Sincronización",sync_start_entity:"Entidad de Fecha de Inicio de Sincronización",sync_end_entity:"Entidad de Fecha de Fin de Sincronización",sync_direction_options:{both:"Bidireccional",to_entity:"Solo a Entidad",from_entity:"Solo desde Entidad"},layout_mode:"Modo de Diseño",layout_mode_options:{standard:"Estándar (Predeterminado)",compact:"Compacto",wide:"Ancho"},density:"Densidad",density_options:{normal:"Normal",compact:"Compacto",comfortable:"Cómodo"},button_group_width:"Ancho del grupo de botones",button_group_width_options:{auto:"Auto",full:"Completo"},advanced_appearance_section:"Apariencia avanzada",button_font_size:"Tamaño de fuente de botón (px)",date_font_size:"Tamaño de fuente de fecha (px)",button_min_width:"Ancho mínimo de botón (px)",gap:"Espacio (px)",icon_button_size:"Tamaño del botón de icono (px)",button_type_options:{none:"Ninguno"}},entity_types:{entity:"Entidad",remaining_parent_state:"Estado del padre restante",remaining_child_state:"Estado del hijo restante",passthrough:"Pasar a través"}},ve={common:ye,toggleButtons:ge,editor:fe},be={version:"Verzia",invalid_configuration:"Neplatná konfigurácia",show_warning:"Zobraziť upozornenie",entity_not_found:"Stav entity sa nenašiel",missing_child:"Chýbajúca podradená entita",loading:"Načítava sa..."},we={custom:"Vlastné",today:"Dnes"},xe={sync_mutual_exclusion_warning:"Použite len entitu synchronizácie dátumu alebo entity začiatku/konca, nie obe.",yaml_disclaimer:"Pre ostatné možnosti použite yaml mód",docs:"Dokumentácia",sections:"Sekcie",section:"Sekcia",add_section:"+ Pridať sekciu",add_entity:"+ Pridať entitu",entity_editor:"Editor entít",decimals:"desatinné miesta",fields:{card_background:"Pozadie karty",prev_next_buttons:"Zobraziť tlačidlá Predchádzajúce/Ďalšie",compare_button_type:"Typ tlačidla porovnania",custom_period_label:"Štítok vlastného obdobia",compare_button_options:{icon:"Ikona",text:"Text"},period_buttons:"Tlačidlá obdobia",today_button_type:"Typ tlačidla dnes",compare_button_label:"Štítok tlačidla porovnania",period_buttons_options:{day:"Deň",week:"Týždeň",month:"Mesiac",year:"Rok",custom:"Vlastné"},sync_entity:"Entita synchronizácie dátumu",sync_clear:"Vymazať",sync_direction:"Smer synchronizácie",sync_start_entity:"Entita synchronizácie dátumu začiatku",sync_end_entity:"Entita synchronizácie dátumu konca",sync_direction_options:{both:"Obojsmerne",to_entity:"Len do entity",from_entity:"Len z entity"},layout_mode:"Režim rozloženia",layout_mode_options:{standard:"Štandardné (Predvolené)",compact:"Kompaktné",wide:"Široké"},density:"Hustota",density_options:{normal:"Normálna",compact:"Kompaktná",comfortable:"Pohodlná"},button_group_width:"Šírka skupiny tlačidiel",button_group_width_options:{auto:"Auto",full:"Plná"},advanced_appearance_section:"Rozšírený vzhľad",button_font_size:"Veľkosť písma tlačidla (px)",date_font_size:"Veľkosť písma dátumu (px)",button_min_width:"Min. šírka tlačidla (px)",gap:"Medzera (px)",icon_button_size:"Veľkosť tlačidla s ikonou (px)",button_type_options:{none:"Žiadne"}},entity_types:{entity:"Entita",remaining_parent_state:"Zostávajúci stav nadradenej entity",remaining_child_state:"Zostávajúci stav podradenej entity",passthrough:"Prenos"}},$e={common:be,toggleButtons:we,editor:xe};const Se={en:Object.freeze({__proto__:null,common:ie,toggleButtons:se,editor:ae,default:re}),de:Object.freeze({__proto__:null,common:ce,toggleButtons:le,editor:de,default:ue}),pt:Object.freeze({__proto__:null,common:pe,toggleButtons:he,editor:me,default:_e}),es:Object.freeze({__proto__:null,common:ye,toggleButtons:ge,editor:fe,default:ve}),sk:Object.freeze({__proto__:null,common:be,toggleButtons:we,editor:xe,default:$e})};function ze(t,e="",o=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let i;try{i=t.split(".").reduce((t,e)=>t[e],Se[n])}catch(e){i=t.split(".").reduce((t,e)=>t[e],Se.en)}return void 0===i&&(i=t.split(".").reduce((t,e)=>t&&t[e],Se.en)),""!==e&&""!==o&&(i=null==i?void 0:i.replace(e,o)),i}const ke=a`
  ha-card {
    padding: 1rem;
  }
  h1 {
    padding: 0;
    padding-bottom: 1rem;
  }
`,Ee=a`
  .date-range-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 342px;
    gap: 1rem;
  }
  
  /* Compact layout mode: padding and row overrides (gap comes from --epsp-gap). */
  .energy-period-selector.compact-mode {
    padding: 0;
  }
  
  .energy-period-selector.compact-mode .period-buttons-row {
    margin-bottom: 0;
    align-items: center;
  }
  
  .energy-period-selector.compact-mode .date-controls-row {
    margin-top: 0;
  }
  
  
  /* Common compact button sizing */
  .compact-button-18px {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
    vertical-align: middle;
  }

  /* Compact button sizing: uses --epsp-* vars; only layout tweaks here. */
  .energy-period-selector.compact-mode .period-button-custom,
  .energy-period-selector.compact-mode .today-button-custom {
    vertical-align: middle;
  }
  
  .energy-period-selector.compact-mode .compare-button-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
    vertical-align: middle;
  }
  
  /* Compact navigation controls */
  .energy-period-selector.compact-mode .navigation-controls {
    gap: 0.125rem;
    align-items: center;
    display: flex;
  }
  
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button,
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button-prev,
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button-next {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
  }
  
  /* Common icon button sizing - 20px */
  .icon-button-20px {
    --mdc-icon-button-size: 20px !important;
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: 20px !important;
  }

  /* Compact today and compare icons */
  .energy-period-selector.compact-mode .today-icon,
  .energy-period-selector.compact-mode .compare {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Date display base styling */
  .date-display {
    color: var(--primary-text-color, #000000) !important;
  }

  /* Compact date display (font-size from --epsp-date-font-size). */
  .energy-period-selector.compact-mode .date-display {
    font-weight: 400;
  }
  
  .mdc-text-field__icon .mdc-text-field__icon--trailing {
    padding-left: 0;
  }

  /* Layout tokens: presets set these; shared rules use var(). Standard baseline. */
  .energy-period-selector {
    --epsp-button-font-size: 11px;
    --epsp-date-font-size: 16px;
    --epsp-button-min-width: 40px;
    --epsp-button-padding: 4px 8px;
    --epsp-control-height: 20px;
    --epsp-gap: 0.5rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
    display: flex;
    flex-direction: column;
    gap: var(--epsp-gap);
    width: 100%;
  }

  /* Compact: tighter spacing and smaller controls (unchanged from previous behavior). */
  .energy-period-selector.compact-mode {
    --epsp-button-font-size: 10px;
    --epsp-date-font-size: 12px;
    --epsp-button-min-width: 35px;
    --epsp-button-padding: 2px 6px;
    --epsp-control-height: 18px;
    --epsp-gap: 0.25rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
  }

  /* Wide: more horizontal breathing room and slightly larger controls for wider dashboards. */
  .energy-period-selector.wide-mode {
    --epsp-button-font-size: 13px;
    --epsp-date-font-size: 18px;
    --epsp-button-min-width: 56px;
    --epsp-button-padding: 6px 12px;
    --epsp-control-height: 28px;
    --epsp-gap: 0.75rem;
    --epsp-nav-icon-size: 26px;
    --epsp-period-buttons-row-height: 28px;
  }

  /* Density: overrides preset tokens. Applied after layout_mode. */
  .energy-period-selector.density-compact {
    --epsp-button-font-size: 10px;
    --epsp-date-font-size: 12px;
    --epsp-button-min-width: 35px;
    --epsp-button-padding: 2px 6px;
    --epsp-control-height: 18px;
    --epsp-gap: 0.25rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
  }
  .energy-period-selector.density-comfortable {
    --epsp-button-font-size: 14px;
    --epsp-date-font-size: 18px;
    --epsp-button-min-width: 60px;
    --epsp-button-padding: 6px 14px;
    --epsp-control-height: 30px;
    --epsp-gap: 1rem;
    --epsp-nav-icon-size: 28px;
    --epsp-period-buttons-row-height: 30px;
  }

  /* Button group width: full stretches the period selector row and inner group across available space. */
  .energy-period-selector.button-group-full .period-buttons-row {
    width: 100%;
  }
  .energy-period-selector.button-group-full .period-buttons-custom {
    flex: 1 1 auto;
    min-width: 0;
  }
  .energy-period-selector.button-group-full .period-button-custom {
    flex: 1 1 0%;
    min-width: var(--epsp-button-min-width);
  }

  .period-buttons-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--epsp-gap);
    flex-wrap: wrap;
    height: var(--epsp-period-buttons-row-height);
  }
  .date-controls-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--epsp-gap);
  }
  .date-display {
    font-size: var(--epsp-date-font-size);
    font-weight: 500;
  }
  
  .navigation-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
  }
  
  /* Arrow button alignment and sizing - most specific selectors */
  .energy-period-selector .navigation-controls ha-icon-button-prev,
  .energy-period-selector .navigation-controls ha-icon-button-next,
  .navigation-controls ha-icon-button-prev,
  .navigation-controls ha-icon-button-next {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    position: relative !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Target mwc-icon-button elements specifically */
  .navigation-controls ha-icon-button-prev mwc-icon-button,
  .navigation-controls ha-icon-button-next mwc-icon-button {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
  }
  
  /* Today icon button (all layout modes) - same sizing as nav chevrons so it scales with Button Font Size */
  .navigation-controls .today-icon {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Custom HTML button group - full control */
  .period-buttons-custom {
    display: flex;
    gap: 0;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  
  .period-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color, #000000);
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
    position: relative;
  }
  
  /* First button - rounded left */
  .period-button-custom:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
  /* Last button - rounded right */
  .period-button-custom:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  
  /* Remove right border from all except last */
  .period-button-custom:not(:last-child) {
    border-right: none;
  }
  
  /* Hover state */
  .period-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    color: var(--primary-text-color, #000000);
  }
  
  /* Active/selected state */
  .period-button-custom.active {
    background-color: var(--primary-color, #03a9f4) !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    border-color: var(--primary-color, #03a9f4) !important;
  }
  
  /* Focus state */
  .period-button-custom:focus {
    outline: none;
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .period-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
    
    .period-button-custom:hover {
      background-color: var(--divider-color, #404040);
    }
  }


  
  /* Custom Today button - matches period buttons */
  .today-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
  }
  
  .today-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    border-color: var(--divider-color, #e0e0e0);
  }
  
  .today-button-custom:focus {
    outline: none;
  }
  
  /* Dark mode support for Today button */
  @media (prefers-color-scheme: dark) {
    .today-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
  }
  
  /* Today button fallback styling - more native */
  .today-button-fallback {
    background: var(--secondary-background-color, #f0f0f0);
    border: 1px solid #202124;
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
  }
  
  .today-button-fallback:hover {
    background-color: var(--divider-color, #404040);
    border-color: var(--divider-color, #404040);
  }
  
  /* Dark mode support for Today button */
  @media (prefers-color-scheme: dark) {
    .today-button-fallback {
      background: var(--secondary-background-color, #505050);
      border-color: var(--divider-color, #404040);
    }
  }
  
  .today-button-fallback:focus {
    outline: none;
  }
  
  .today-button-fallback:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  
  /* Style ha-button to match the design */
  ha-button {
    --mdc-theme-primary: var(--primary-color);
    --mdc-theme-on-primary: var(--primary-text-color);
    --mdc-button-outline-color: var(--divider-color, #404040);
    --mdc-button-disabled-outline-color: var(--disabled-text-color);
    --mdc-button-disabled-ink-color: var(--disabled-text-color);
  }
  
  /* Ensure ha-button has proper styling */
  ha-button[outlined] {
    border: 1px solid var(--divider-color, #404040);
    background: transparent;
    color: var(--primary-text-color);
  }
  
  ha-button[outlined]:hover {
    background-color: var(--divider-color, #404040);
  }
  
  /* Style today button to match period buttons size - more native */
  .navigation-controls ha-button {
    --mdc-button-height: var(--epsp-control-height) !important;
    --mdc-button-min-width: var(--epsp-button-min-width) !important;
    --mdc-typography-button-font-size: var(--epsp-button-font-size) !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-typography-button-letter-spacing: 0.0892857143em !important;
    --mdc-shape-small: 4px !important;
    --mdc-button-outline-color: #202124 !important;
    background: var(--secondary-background-color, #f0f0f0) !important;
    border: 1px solid #202124 !important;
    border-radius: 4px !important;
    height: var(--epsp-control-height) !important;
    min-width: var(--epsp-button-min-width) !important;
    font-size: var(--epsp-button-font-size) !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Force override for ha-button internal elements */
  .navigation-controls ha-button mwc-button {
    --mdc-button-height: var(--epsp-control-height) !important;
    --mdc-button-min-width: var(--epsp-button-min-width) !important;
    --mdc-typography-button-font-size: var(--epsp-button-font-size) !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-button-outline-color: #202124 !important;
    height: var(--epsp-control-height) !important;
    min-width: var(--epsp-button-min-width) !important;
    font-size: var(--epsp-button-font-size) !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Text compare button - positioned above button group */
  .compare-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
    vertical-align: middle;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }
  
  .compare-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    border-color: var(--divider-color, #e0e0e0);
  }
  
  .compare-button-custom:focus {
    outline: none;
  }
  
  /* Compare button active state */
  .compare-button-custom.active {
    background: var(--primary-color, #03a9f4) !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    border-color: var(--primary-color, #03a9f4) !important;
  }
  
  /* Dark mode support for Compare button */
  @media (prefers-color-scheme: dark) {
    .compare-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
  }
  
  /* Responsive design for mobile devices */
  @media (max-width: 768px) {
    .period-buttons-row {
      justify-content: flex-end;
    }
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
    .date-controls-row {
      flex-direction: row;
      justify-content: flex-end;
    }
    .date-display {
      text-align: right;
      flex: 1;
    }
  }
  
  @media (max-width: 480px) {
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
  }
  
  mwc-button {
    margin-left: 8px;
  }
  /* Removed conflicting ha-icon-button rule */
  ha-icon-button.active::before,
  mwc-button.active::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--primary-color);
    opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
    pointer-events: none;
    content: '';
    transition: opacity 15ms linear, background-color 15ms linear;
  }
  ha-icon-button.active::before {
    border-radius: 50%;
  }
  .compare {
    position: relative;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  :host {
    --mdc-button-outline-color: currentColor;
    --mdc-theme-primary: currentColor;
    --mdc-theme-on-primary: currentColor;
    --mdc-button-disabled-outline-color: var(--disabled-text-color);
    --mdc-button-disabled-ink-color: var(--disabled-text-color);
    --mdc-icon-button-ripple-opacity: 0.2;
  }
  /* Remove this rule as it conflicts with our arrow button sizing */
  ha-button-toggle-group {
    direction: var(--direction);
    /* Let native component handle all styling */
  }
  mwc-button {
    flex-shrink: 0;
  }
`;let Ae=class extends(ne(nt)){constructor(){super(...arguments),this._compare=!1,this._lastSyncToEntityTimestamp=0,this._lastSyncFromEntityTimestamp=0,this._userActionTimestamp=0,this._isUserAction=!1,this._isProcessingClick=!1,this._lastClickId=0,this._clickDebounceTimer=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async firstUpdated(){const t=await window.loadCardHelpers();t.importMoreInfoControl("input_datetime");try{await t.importMoreInfoControl("button")}catch(t){console.warn("Failed to load ha-button component:",t)}try{await t.importMoreInfoControl("selector")}catch(t){console.warn("Failed to load ha-selector component:",t)}const e=["button-toggle-group","ha-button-toggle-group","selector-button-toggle","ha-selector-button-toggle"];for(const o of e)try{await t.importMoreInfoControl(o);break}catch(t){console.warn(`Failed to load ${o}:`,t)}try{await t.importMoreInfoControl("button")}catch(t){console.warn("Failed to load ha-button component:",t)}setTimeout(()=>{this._forceButtonStyling()},1e3)}hassSubscribe(){var t;const e=[oe(this.hass,{key:this.collectionKey}).subscribe(t=>this._updateDates(t))];return(null===(t=this._config)||void 0===t?void 0:t.sync_entity)&&e.push(this.hass.connection.subscribeEvents(t=>this._handleEntityStateChange(t),"state_changed")),e}render(){var t,e,o,n,i,s,a,r,c,l,d,u,p,h,m,_,y,g,f,v,b;if(!this.hass||!this._startDate)return B;const w=t=>{var e;return"custom"===t?(null===(e=this._config)||void 0===e?void 0:e.custom_period_label)||ze(`toggleButtons.${t}`)||t:this.hass.localize(`ui.components.calendar.event.rrule.${t}`)},x=(null===(t=this._config)||void 0===t?void 0:t.period_buttons)?this._config.period_buttons.map(t=>({label:w(t),value:t})):[{label:this.hass.localize("ui.components.calendar.event.rrule.day"),value:"day"},{label:this.hass.localize("ui.components.calendar.event.rrule.week"),value:"week"},{label:this.hass.localize("ui.components.calendar.event.rrule.month"),value:"month"},{label:this.hass.localize("ui.components.calendar.event.rrule.year"),value:"year"}],$=(null===(e=this._config)||void 0===e?void 0:e.layout_mode)||"standard",S=j`
      <div class="date-range-container">
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${(null===(o=this._startDate)||void 0===o?void 0:o.toISOString())||""}
          .label=${this.hass.localize("ui.components.date-range-picker.start_date")}
          @value-changed=${this._startDateChanged}
          .required=${!0}
          .min=${"2019-01-01"}
          .max=${(null===(n=this._endDate)||void 0===n?void 0:n.toISOString())||Ct().toISOString()}
        >
        </ha-date-input>
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${(null===(i=this._endDate)||void 0===i?void 0:i.toISOString())||""}
          .label=${this.hass.localize("ui.components.date-range-picker.end_date")}
          @value-changed=${this._endDateChanged}
          .required=${!0}
          .min=${this._startDate.toISOString()}
          .max=${Ct().toISOString()}
        >
        </ha-date-input>
      </div>
    `,z=j` <button class="today-button-custom" @click=${this._pickToday}>
      ${(null===(s=this._config)||void 0===s?void 0:s.today_button_label)||ze("toggleButtons.today")}
    </button>`;j` <button class="today-button-fallback" @click=${this._pickToday}>
      ${(null===(a=this._config)||void 0===a?void 0:a.today_button_label)||ze("toggleButtons.today")}
    </button>`;const k=j` <ha-icon-button
      @click=${this._pickToday}
      class="today-icon"
      .label=${(null===(r=this._config)||void 0===r?void 0:r.today_button_label)||ze("toggleButtons.today")}
      .path=${"M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7"}
    >
    </ha-icon-button>`,E=null===(c=this._config)||void 0===c?void 0:c.today_button_type,A=!1===E||"none"===E?B:"icon"===E?k:z,D="icon"===(null===(l=this._config)||void 0===l?void 0:l.compare_button_type)?j`
      <ha-icon-button
        class="compare ${this._compare?"active":""}"
        .path=${this._compare?"M19 5H14V3H19C20.1 3 21 3.9 21 5V13.4C20.4 13.2 19.7 13 19 13V5M10 1H12V23H10V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10V1M10 12L5 18H10V12M15.7 14L14 12V15.7C14.4 15 15 14.5 15.7 14M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z":"M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"}
        @click=${this._toggleCompare}
      >
        ${null!==(d=this._config.compare_button_label)&&void 0!==d?d:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
      </ha-icon-button>
    `:B,T="text"===(null===(u=this._config)||void 0===u?void 0:u.compare_button_type)?j`
      <button class="compare-button-custom ${this._compare?"active":""}" @click=${this._toggleCompare}>
        ${null!==(p=this._config.compare_button_label)&&void 0!==p?p:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
      </button>
    `:B,C=j`
      <div class="period-buttons-row">
        ${this._renderPeriodButtons(x)}
        ${D}
      </div>
    `,P=j`
      <div class="date-controls-row">
        ${"custom"===this._period?S:j`
              <div class="date-display">
                ${"day"===this._period?(M=this._startDate,H=this.hass.locale,Ft(H).format(M)):"month"===this._period?((t,e)=>Yt(e).format(t))(this._startDate,this.hass.locale):"year"===this._period?((t,e)=>Zt(e).format(t))(this._startDate,this.hass.locale):`${Kt(this._startDate,this.hass.locale)} – ${Kt(this._endDate||new Date,this.hass.locale)}`}
              </div>
              <div class="navigation-controls">
                ${!1!==(null===(h=this._config)||void 0===h?void 0:h.prev_next_buttons)?j`
                      <ha-icon-button-prev
                        .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}
                        @click=${this._pickPrevious}
                      ></ha-icon-button-prev>
                      <ha-icon-button-next
                        .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}
                        @click=${this._pickNext}
                      ></ha-icon-button-next>
                    `:B}
                ${A}
              </div>
            `}
      </div>
    `;var M,H;const N="compact"===$?"compact-mode":"wide"===$?"wide-mode":"standard-mode",O=(null===(m=this._config)||void 0===m?void 0:m.density)||"normal",L=["energy-period-selector",N,"compact"===O?"density-compact":"comfortable"===O?"density-comfortable":"","full"===((null===(_=this._config)||void 0===_?void 0:_.button_group_width)||"auto")?"button-group-full":""].filter(Boolean).join(" "),I=t=>{const e="number"==typeof t?t:Number(t);return Number.isNaN(e)?void 0:e},R=[],U=I(null===(y=this._config)||void 0===y?void 0:y.button_font_size);if(null!=U){R.push(`--epsp-button-font-size: ${U}px`);const t=Math.round(U+8);R.push(`--epsp-control-height: ${t}px`)}const V=I(null===(g=this._config)||void 0===g?void 0:g.icon_button_size);null!=V&&R.push(`--epsp-nav-icon-size: ${V}px`);const F=I(null===(f=this._config)||void 0===f?void 0:f.date_font_size);null!=F&&R.push(`--epsp-date-font-size: ${F}px`);const K=I(null===(v=this._config)||void 0===v?void 0:v.button_min_width);null!=K&&R.push(`--epsp-button-min-width: ${K}px`);const W=I(null===(b=this._config)||void 0===b?void 0:b.gap);null!=W&&R.push(`--epsp-gap: ${W}px`);const Y=R.length>0?R.join("; "):void 0;return j`
      <div class="${L}" style="${null!=Y?Y:""}">
        ${T}
        ${C}
        ${P}
      </div>
    `}_startDateChanged(t){this._setDate(new Date(t.detail.value))}_endDateChanged(t){this._startDate&&new Date(t.detail.value)>this._startDate&&this._setDate(this._startDate,new Date(t.detail.value))}_handleView(t){this._period=t.detail.value;const e=Pt(),o=!this._startDate||function(t,e){pt(2,arguments);var o=mt(t).getTime(),n=mt(e.start).getTime(),i=mt(e.end).getTime();if(!(n<=i))throw new RangeError("Invalid interval");return o>=n&&o<=i}(e,{start:this._startDate,end:this._endDate||Ct()})?e:this._startDate,n=It(this.hass.locale);this._setDate("day"===this._period?$t(o):"week"===this._period?wt(o,{weekStartsOn:n}):"month"===this._period?Dt(o):"year"===this._period?Tt(o):this._startDate||Pt(),"custom"===this._period?this._endDate:void 0)}_pickToday(){const t=It(this.hass.locale);this._setDate("day"===this._period?Pt():"week"===this._period?wt(new Date,{weekStartsOn:t}):"month"===this._period?Dt(new Date):Tt(new Date))}_pickPrevious(){const t=++this._lastClickId;this._clickDebounceTimer&&clearTimeout(this._clickDebounceTimer),this._clickDebounceTimer=window.setTimeout(()=>{this._processPickPrevious(t)},300)}_processPickPrevious(t){if(this._isProcessingClick)return;this._isProcessingClick=!0;const e="day"===this._period?_t(this._startDate,-1):"week"===this._period?St(this._startDate,-1):"month"===this._period?yt(this._startDate,-1):"year"===this._period?zt(this._startDate,-1):_t(this._startDate,-1);this._startDate&&Math.abs(e.getTime()-this._startDate.getTime())<1e3?this._isProcessingClick=!1:(this._userActionTimestamp=Date.now(),this._isUserAction=!0,this._setDate(e),setTimeout(()=>{this._isProcessingClick=!1},500))}_pickNext(){const t=++this._lastClickId;this._clickDebounceTimer&&clearTimeout(this._clickDebounceTimer),this._clickDebounceTimer=window.setTimeout(()=>{this._processPickNext(t)},300)}_processPickNext(t){if(this._isProcessingClick)return;this._isProcessingClick=!0;const e="day"===this._period?_t(this._startDate,1):"week"===this._period?St(this._startDate,1):"month"===this._period?yt(this._startDate,1):"year"===this._period?zt(this._startDate,1):_t(this._startDate,1);this._startDate&&Math.abs(e.getTime()-this._startDate.getTime())<1e3?this._isProcessingClick=!1:(this._userActionTimestamp=Date.now(),this._isUserAction=!0,this._setDate(e),setTimeout(()=>{this._isProcessingClick=!1},500))}_setDate(t,e,o=!1){this._startDate=t;const n=It(this.hass.locale),i="day"===this._period?At(t):"week"===this._period?function(t,e){var o,n,i,s,a,r,c,l;pt(1,arguments);var d=bt(),u=ut(null!==(o=null!==(n=null!==(i=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(a=e.locale)||void 0===a||null===(r=a.options)||void 0===r?void 0:r.weekStartsOn)&&void 0!==i?i:d.weekStartsOn)&&void 0!==n?n:null===(c=d.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=mt(t),h=p.getDay(),m=6+(h<u?-7:0)-(h-u);return p.setDate(p.getDate()+m),p.setHours(23,59,59,999),p}(t,{weekStartsOn:n}):"month"===this._period?function(t){pt(1,arguments);var e=mt(t),o=e.getMonth();return e.setFullYear(e.getFullYear(),o+1,0),e.setHours(23,59,59,999),e}(t):"year"===this._period?function(t){pt(1,arguments);var e=mt(t),o=e.getFullYear();return e.setFullYear(o+1,0,0),e.setHours(23,59,59,999),e}(t):"custom"===this._period&&e?At(e):this._endDate||Ct(),s=oe(this.hass,{key:this.collectionKey});s.setPeriod(t,i),s.refresh(),o||(this._syncToEntity(),this._syncRangeToEntities(t,i))}_updateDates(t){this._compare=void 0!==t.startCompare,this._startDate=t.start,this._endDate=t.end||Ct();const e=Et(this._endDate,this._startDate||Ct());this._period="custom"!==this._period?e<1?"day":6===e?"week":e>26&&e<31?"month":364===e||365===e?"year":"custom":"custom"}_toggleCompare(){this._compare=!this._compare;const t=oe(this.hass,{key:this.collectionKey});t.setCompare(this._compare),t.refresh()}_handleEntityStateChange(t){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.sync_entity)||t.data.entity_id!==this._config.sync_entity)return;const o=this._config.sync_direction||"both";if("from-entity"!==o&&"both"!==o)return;const n=Date.now();if(n-this._lastSyncFromEntityTimestamp<500)return;if(n-this._userActionTimestamp<1e3)return;if(this._isUserAction)return;const i=t.data.new_state;if(!i||!i.attributes)return;const s=this._parseEntityDateTime(i);s&&(this._startDate&&Math.abs(s.getTime()-this._startDate.getTime())<1e3||(this._lastSyncFromEntityTimestamp=n,this._setDate(s,void 0,!0)))}_parseEntityDateTime(t){try{if(t.attributes.has_date&&t.attributes.has_time){const e=t.attributes.year+"-"+String(t.attributes.month).padStart(2,"0")+"-"+String(t.attributes.day).padStart(2,"0"),o=String(t.attributes.hour).padStart(2,"0")+":"+String(t.attributes.minute).padStart(2,"0")+":00";return new Date(e+"T"+o)}if(t.attributes.has_date){const e=t.attributes.year+"-"+String(t.attributes.month).padStart(2,"0")+"-"+String(t.attributes.day).padStart(2,"0");return new Date(e+"T00:00:00")}if("string"==typeof t.state){const e=new Date(t.state);if(!isNaN(e.getTime()))return e}return null}catch(t){return console.warn("Failed to parse entity date:",t),null}}_syncToEntity(){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.sync_entity)||!this._startDate)return;const e=this._config.sync_direction||"both";if("to-entity"!==e&&"both"!==e)return;const o=Date.now();if(o-this._lastSyncToEntityTimestamp<500)return;this._lastSyncToEntityTimestamp=o;const n=this._formatDateForEntity(this._startDate);n&&this.hass.callService("input_datetime","set_datetime",Object.assign({entity_id:this._config.sync_entity},n)).then(()=>{setTimeout(()=>{this._isUserAction=!1},2e3)}).catch(t=>{console.warn("Failed to sync date to entity:",t),this._isUserAction=!1})}_syncRangeToEntities(t,e){var o,n;const i=null===(o=this._config)||void 0===o?void 0:o.sync_start_entity,s=null===(n=this._config)||void 0===n?void 0:n.sync_end_entity;if(!i&&!s)return;const a=[];if(i){const e=this._formatDateForEntity(t);e&&a.push(this._setDateEntityValue(i,e))}if(s){const t=this._formatDateForEntity(e);t&&a.push(this._setDateEntityValue(s,t))}a.length&&Promise.all(a.map(t=>t.catch(t=>t))).catch(t=>{console.warn("Failed to sync range dates to entities:",t)})}_setDateEntityValue(t,e){return this.hass.callService("input_datetime","set_datetime",Object.assign({entity_id:t},e))}_formatDateForEntity(t){try{const e=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return{datetime:`${e}-${o}-${n} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:00`}}catch(t){return console.warn("Failed to format date for entity:",t),null}}_renderPeriodButtons(t){return j`
      <div class="period-buttons-custom">
        ${t.map(t=>j`
          <button
            .value=${t.value}
            @click=${()=>this._handleView({detail:{value:t.value}})}
            class="period-button-custom ${this._period===t.value?"active":""}"
          >
            ${t.label}
          </button>
        `)}
      </div>
    `}_onSelectorUpdated(){this._forceButtonStyling(),setTimeout(()=>{this._forceButtonStyling()},500)}_forceButtonStyling(){setTimeout(()=>{var t,e;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-selector");o&&o.querySelectorAll("mwc-button").forEach(t=>{t.style.setProperty("--mdc-button-height","20px","important"),t.style.setProperty("--mdc-button-min-width","40px","important"),t.style.setProperty("--mdc-typography-button-font-size","11px","important"),t.style.setProperty("--mdc-typography-button-font-weight","500","important"),t.style.setProperty("--mdc-typography-button-text-transform","uppercase","important"),t.style.setProperty("--mdc-button-outline-color","#202124","important"),t.style.setProperty("--mdc-theme-primary","#d2d3d3","important"),t.style.height="20px",t.style.minWidth="40px",t.style.fontSize="11px",t.style.fontWeight="500",t.style.textTransform="uppercase",t.style.border="1px solid #202124"});const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".navigation-controls ha-icon-button, .navigation-controls ha-icon-button-prev, .navigation-controls ha-icon-button-next");null==n||n.forEach(t=>{t.style.setProperty("--mdc-icon-button-size","20px","important"),t.style.height="20px",t.style.width="20px",t.style.minHeight="20px",t.style.minWidth="20px",t.style.maxHeight="20px",t.style.maxWidth="20px",t.style.padding="0",t.style.margin="0",t.style.lineHeight="20px",t.style.display="inline-flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.verticalAlign="middle",t.style.position="relative",t.style.top="0",t.style.transform="none",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.querySelectorAll("button, mwc-icon-button, .mdc-icon-button").forEach(t=>{t.style.height="20px",t.style.width="20px",t.style.minHeight="20px",t.style.minWidth="20px",t.style.maxHeight="20px",t.style.maxWidth="20px",t.style.padding="0",t.style.margin="0",t.style.display="inline-flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.verticalAlign="middle",t.style.setProperty("--mdc-icon-button-size","20px","important")})})},100)}updated(t){super.updated(t),this._onSelectorUpdated()}};var De,Te;Ae.styles=Ee,t([rt({attribute:!1})],Ae.prototype,"hass",void 0),t([ct()],Ae.prototype,"_config",void 0),t([rt()],Ae.prototype,"collectionKey",void 0),t([ct()],Ae.prototype,"_startDate",void 0),t([ct()],Ae.prototype,"_endDate",void 0),t([ct()],Ae.prototype,"_period",void 0),t([ct()],Ae.prototype,"_compare",void 0),t([ct()],Ae.prototype,"_lastSyncToEntityTimestamp",void 0),t([ct()],Ae.prototype,"_lastSyncFromEntityTimestamp",void 0),t([ct()],Ae.prototype,"_userActionTimestamp",void 0),t([ct()],Ae.prototype,"_isUserAction",void 0),t([ct()],Ae.prototype,"_isProcessingClick",void 0),Ae=t([st("energy-period-selector-base")],Ae),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(De||(De={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Te||(Te={}));var Ce=function(t,e,o,n){n=n||{},o=null==o?{}:o;var i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=o,t.dispatchEvent(i),i},Pe="0.2.9-beta.1";console.groupCollapsed(`%c⚡ Energy Period Selector Plus v${Pe} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/talKitron/energy-period-selector-plus"),console.groupEnd();const Me=function(t,e,o){var n;return void 0===o&&(o=!1),function(){var e=[].slice.call(arguments),i=this,s=o&&!n;clearTimeout(n),n=setTimeout(function(){n=null,o||t.apply(i,e)},6e4),s&&t.apply(i,e)}}(t=>{console.log(`%c⚡ Energy Period Selector Plus v${Pe} %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")});!function(){const t=window;t.customCards=t.customCards||[],t.customCards.push(Object.assign(Object.assign({},{type:"energy-period-selector-plus",name:"Energy Period Selector Plus",description:"A custom card to change the Energy Period of your Energy Data."}),{preview:!0,documentationURL:"https://github.com/talKitron/energy-period-selector-plus"}))}();let He=class extends nt{getCardSize(){return 1}static async getConfigElement(){return await Promise.resolve().then(function(){return Xe}),document.createElement("energy-period-selector-editor")}setConfig(t){this._config=t}_hasSyncConflict(t){var e,o,n;const i=""!==(null!==(e=t.sync_entity)&&void 0!==e?e:"").trim(),s=""!==(null!==(o=t.sync_start_entity)&&void 0!==o?o:"").trim()||""!==(null!==(n=t.sync_end_entity)&&void 0!==n?n:"").trim();return i&&s}render(){var t,e,o,n;if(!this.hass||!this._config)return Me(ze("common.invalid_configuration")||"Invalid configuration"),B;if(this._hasSyncConflict(this._config))return j`
        <hui-error-card
          .hass=${this.hass}
          .config=${{type:"error",error:ze("editor.sync_mutual_exclusion_warning")||"Use either Sync Date Entity or Sync Start/End Date Entity, not both.",origConfig:this._config}}
        ></hui-error-card>
      `;const i="compact"===((null===(t=this._config)||void 0===t?void 0:t.layout_mode)||"standard"),s=j` <energy-period-selector-base .hass=${this.hass} ._config=${this._config} .collectionKey=${null===(e=this._config)||void 0===e?void 0:e.collection_key}></energy-period-selector-base> `;return i?s:(null===(o=this._config)||void 0===o?void 0:o.card_background)?j` <ha-card .header=${null===(n=this._config)||void 0===n?void 0:n.title}> ${s}</ha-card> `:j` ${s} `}};He.styles=ke,t([rt({attribute:!1})],He.prototype,"hass",void 0),t([rt({attribute:!1})],He.prototype,"locale",void 0),t([ct()],He.prototype,"_config",void 0),He=t([st("energy-period-selector-plus")],He);class Ne extends TypeError{constructor(t,e){let o;const{message:n,explanation:i,...s}=t,{path:a}=t,r=0===a.length?n:`At path: ${a.join(".")} -- ${n}`;super(i??r),null!=i&&(this.cause=r),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>o??(o=[t,...e()])}}function Oe(t){return"object"==typeof t&&null!=t}function Le(t){return Oe(t)&&!Array.isArray(t)}function je(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function Ie(t,e,o,n){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:i,branch:s}=e,{type:a}=o,{refinement:r,message:c=`Expected a value of type \`${a}\`${r?` with refinement \`${r}\``:""}, but received: \`${je(n)}\``}=t;return{value:n,type:a,refinement:r,key:i[i.length-1],path:i,branch:s,...t,message:c}}function*Be(t,e,o,n){(function(t){return Oe(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const i of t){const t=Ie(i,e,o,n);t&&(yield t)}}function*Re(t,e,o={}){const{path:n=[],branch:i=[t],coerce:s=!1,mask:a=!1}=o,r={path:n,branch:i,mask:a};s&&(t=e.coercer(t,r));let c="valid";for(const n of e.validator(t,r))n.explanation=o.message,c="not_valid",yield[n,void 0];for(let[l,d,u]of e.entries(t,r)){const e=Re(d,u,{path:void 0===l?n:[...n,l],branch:void 0===l?i:[...i,d],coerce:s,mask:a,message:o.message});for(const o of e)o[0]?(c=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):s&&(d=o[1],void 0===l?t=d:t instanceof Map?t.set(l,d):t instanceof Set?t.add(d):Oe(t)&&(void 0!==d||l in t)&&(t[l]=d))}if("not_valid"!==c)for(const n of e.refiner(t,r))n.explanation=o.message,c="not_refined",yield[n,void 0];"valid"===c&&(yield[void 0,t])}class Ue{constructor(t){const{type:e,schema:o,validator:n,refiner:i,coercer:s=t=>t,entries:a=function*(){}}=t;this.type=e,this.schema=o,this.entries=a,this.coercer=s,this.validator=n?(t,e)=>Be(n(t,e),e,this,t):()=>[],this.refiner=i?(t,e)=>Be(i(t,e),e,this,t):()=>[]}assert(t,e){return Ve(t,this,e)}create(t,e){return function(t,e,o){const n=Fe(t,e,{coerce:!0,message:o});if(n[0])throw n[0];return n[1]}(t,this,e)}is(t){return function(t,e){return!Fe(t,e)[0]}(t,this)}mask(t,e){return function(t,e,o){const n=Fe(t,e,{coerce:!0,mask:!0,message:o});if(n[0])throw n[0];return n[1]}(t,this,e)}validate(t,e={}){return Fe(t,this,e)}}function Ve(t,e,o){const n=Fe(t,e,{message:o});if(n[0])throw n[0]}function Fe(t,e,o={}){const n=Re(t,e,o),i=function(t){const{done:e,value:o}=t.next();return e?void 0:o}(n);if(i[0]){return[new Ne(i[0],function*(){for(const t of n)t[0]&&(yield t[0])}),void 0]}return[void 0,i[1]]}function Ke(t,e){return new Ue({type:t,schema:null,validator:e})}function We(){return Ke("any",()=>!0)}function Ye(){return Ke("boolean",t=>"boolean"==typeof t)}function Ze(t){const e=t?Object.keys(t):[],o=Ke("never",()=>!1);return new Ue({type:"object",schema:t||null,*entries(n){if(t&&Oe(n)){const i=new Set(Object.keys(n));for(const o of e)i.delete(o),yield[o,n[o],t[o]];for(const t of i)yield[t,n[t],o]}},validator:t=>Le(t)||`Expected an object, but received: ${je(t)}`,coercer(e,o){if(!Le(e))return e;const n={...e};if(o.mask&&t)for(const e in n)void 0===t[e]&&delete n[e];return n}})}function qe(t){return new Ue({...t,validator:(e,o)=>void 0===e||t.validator(e,o),refiner:(e,o)=>void 0===e||t.refiner(e,o)})}function Ge(){return Ke("string",t=>"string"==typeof t||`Expected a string, but received: ${je(t)}`)}const Je=async()=>{var t,e;if(customElements.get("ha-form"))return;const o=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));if(!o)return;const n=await o.createCardElement({type:"entity"});n&&await n.getConfigElement()};let Qe=class extends nt{constructor(){super(...arguments),this._schema=Vt((t,e)=>[{type:"grid",name:"",schema:[{name:"card_background",selector:{boolean:{}}},{name:"prev_next_buttons",selector:{boolean:{}}}]},{name:"density",required:!0,selector:{select:{options:[{value:"normal",label:ze("editor.fields.density_options.normal")},{value:"compact",label:ze("editor.fields.density_options.compact")},{value:"comfortable",label:ze("editor.fields.density_options.comfortable")}],mode:"dropdown"}}},{name:"button_group_width",required:!0,selector:{select:{options:[{value:"auto",label:ze("editor.fields.button_group_width_options.auto")},{value:"full",label:ze("editor.fields.button_group_width_options.full")}],mode:"dropdown"}}},{type:"grid",name:"",schema:[{name:"button_font_size",required:!0,selector:{number:{min:1,mode:"box"}}},{name:"icon_button_size",required:!0,selector:{number:{min:1,mode:"box"}}},{name:"date_font_size",required:!0,selector:{number:{min:1,mode:"box"}}},{name:"button_min_width",required:!0,selector:{number:{min:1,mode:"box"}}},{name:"gap",required:!0,selector:{number:{min:0,mode:"box"}}}]},{type:"grid",name:"",schema:[{name:"compare_button_type",required:!0,selector:{select:{options:[{value:"none",label:ze("editor.fields.button_type_options.none")},{value:"icon",label:ze("editor.fields.compare_button_options.icon")},{value:"text",label:ze("editor.fields.compare_button_options.text")}],mode:"dropdown"}}},...t?[{name:"compare_button_label",selector:{text:{}}}]:[]]},{name:"today_button_type",required:!0,selector:{select:{options:[{value:"none",label:ze("editor.fields.button_type_options.none")},{value:"icon",label:ze("editor.fields.compare_button_options.icon")},{value:"text",label:ze("editor.fields.compare_button_options.text")}],mode:"dropdown"}}},{type:"grid",name:"",schema:[{type:"multi_select",options:{day:ze("editor.fields.period_buttons_options.day"),week:ze("editor.fields.period_buttons_options.week"),month:ze("editor.fields.period_buttons_options.month"),year:ze("editor.fields.period_buttons_options.year"),custom:ze("editor.fields.period_buttons_options.custom")},name:"period_buttons",default:["day","week","month","year"]},...e?[{name:"custom_period_label",selector:{text:{}}}]:[]]}]),this._computeLabelCallback=t=>ze(`editor.fields.${t.name}`)||`not found: ${t.name}`}async setConfig(t){Ve(t,function(...t){const e="type"===t[0].type,o=t.map(t=>t.schema),n=Object.assign({},...o);return e?function(t){const e=Object.keys(t);return new Ue({type:"type",schema:t,*entries(o){if(Oe(o))for(const n of e)yield[n,o[n],t[n]]},validator:t=>Le(t)||`Expected an object, but received: ${je(t)}`,coercer:t=>Le(t)?{...t}:t})}(n):Ze(n)}(Ze({type:Ge(),view_layout:qe(Ge())}),Ze({card_background:qe(Ye()),today_button:qe(Ye()),prev_next_buttons:qe(Ye()),compare_button_type:qe(Ge()),today_button_type:qe(We()),period_buttons:qe(We()),custom_period_label:qe(Ge()),compare_button_label:qe(Ge()),sync_entity:qe(Ge()),sync_direction:qe(Ge()),sync_start_entity:qe(Ge()),sync_end_entity:qe(Ge()),layout_mode:qe(Ge()),density:qe(Ge()),button_group_width:qe(Ge()),button_font_size:qe(We()),icon_button_size:qe(We()),date_font_size:qe(We()),button_min_width:qe(We()),gap:qe(We())}))),this._config=t}connectedCallback(){super.connectedCallback(),Je()}render(){var t,e,o,n,i,s,a,r,c,l,d,u,p,h,m,_,y,g,f,v,b;if(!this.hass||!this._config)return B;const w=Object.assign(Object.assign({},this._config),{card_background:null!==(t=this._config.card_background)&&void 0!==t&&t,today_button:null===(e=this._config.today_button)||void 0===e||e,prev_next_buttons:null===(o=this._config.prev_next_buttons)||void 0===o||o,compare_button_type:null!==(n=this._config.compare_button_type)&&void 0!==n?n:"",today_button_type:null!==(i=this._config.today_button_type)&&void 0!==i?i:"text",period_buttons:null!==(s=this._config.period_buttons)&&void 0!==s?s:["day","week","month","year"],sync_entity:null!==(a=this._config.sync_entity)&&void 0!==a?a:"",sync_direction:null!==(r=this._config.sync_direction)&&void 0!==r?r:"both",sync_start_entity:null!==(c=this._config.sync_start_entity)&&void 0!==c?c:"",sync_end_entity:null!==(l=this._config.sync_end_entity)&&void 0!==l?l:"",layout_mode:null!==(d=this._config.layout_mode)&&void 0!==d?d:"standard",density:null!==(u=this._config.density)&&void 0!==u?u:"normal",button_group_width:null!==(p=this._config.button_group_width)&&void 0!==p?p:"auto",button_font_size:null!==(h=this._config.button_font_size)&&void 0!==h?h:void 0,icon_button_size:null!==(m=this._config.icon_button_size)&&void 0!==m?m:void 0,date_font_size:null!==(_=this._config.date_font_size)&&void 0!==_?_:void 0,button_min_width:null!==(y=this._config.button_min_width)&&void 0!==y?y:void 0,gap:null!==(g=this._config.gap)&&void 0!==g?g:void 0}),x=this._schema("text"===w.compare_button_type,(null!==(f=w.period_buttons)&&void 0!==f?f:[]).includes("custom")),[$,...S]=x;return j`
      <!-- Top switches: card_background + prev_next_buttons -->
      <ha-form
        .hass=${this.hass}
        .data=${w}
        .schema=${[$]}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <!-- Layout preset selector + reload, directly under top switches -->
      <div class="layout-row">
        <ha-selector
          .hass=${this.hass}
          .selector=${{select:{options:[{value:"standard",label:ze("editor.fields.layout_mode_options.standard")},{value:"compact",label:ze("editor.fields.layout_mode_options.compact")},{value:"wide",label:ze("editor.fields.layout_mode_options.wide")}],mode:"dropdown"}}}
          .label=${ze("editor.fields.layout_mode")||"Layout Mode"}
          .value=${null!==(b=null===(v=this._config)||void 0===v?void 0:v.layout_mode)&&void 0!==b?b:"standard"}
          @value-changed=${t=>this._onLayoutModeChanged(t.detail.value)}
        ></ha-selector>
        <ha-icon-button
          class="layout-reset-button"
          .label=${"Reload Layout Mode"}
          .path=${"M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"}
          @click=${this._resetAdvancedAppearance}
        ></ha-icon-button>
      </div>

      <!-- Rest of the config fields -->
      <ha-form
        .hass=${this.hass}
        .data=${w}
        .schema=${S}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="sync-container">
        ${this._renderSyncRow(w)}
      </div>
    `}_valueChanged(t){const e=null==t?void 0:t.detail.value;Ce(this,"config-changed",{config:e})}_renderSyncRow(t){var e,o,n,i,s,a,r;const c=(null!==(e=t.sync_entity)&&void 0!==e?e:"").trim(),l=(null!==(o=t.sync_start_entity)&&void 0!==o?o:"").trim(),d=(null!==(n=t.sync_end_entity)&&void 0!==n?n:"").trim(),u=""!==c,p=""!==l||""!==d,h=u||p,m=u&&p;return j`
      <div class="two-col">
        <div class="field">
          <div class="caption">${ze("editor.fields.sync_entity")}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_datetime"]}}}
              .value=${null!==(i=t.sync_entity)&&void 0!==i?i:""}
              ?disabled=${p}
              @value-changed=${t=>this._patch("sync_entity",t.detail.value||"")}
            ></ha-selector>
            ${c?j`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${ze("editor.fields.sync_clear")}
                    .path=${dt}
                    @click=${t=>{t.stopPropagation(),this._patch("sync_entity","")}}
                  ></ha-icon-button>
                `:B}
          </div>
        </div>

        <div class="field">
          <div class="caption">${ze("editor.fields.sync_direction")}</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{options:[{value:"both",label:ze("editor.fields.sync_direction_options.both")},{value:"to-entity",label:ze("editor.fields.sync_direction_options.to_entity")},{value:"from-entity",label:ze("editor.fields.sync_direction_options.from_entity")}],mode:"dropdown"}}}
            .value=${null!==(s=t.sync_direction)&&void 0!==s?s:"both"}
            ?disabled=${p||!u}
            @value-changed=${t=>this._patch("sync_direction",t.detail.value)}
          ></ha-selector>
        </div>
      </div>

      ${h?j`
            <div class="sync-warning ${m?"sync-warning--conflict":""}" role="alert">
              ${ze("editor.sync_mutual_exclusion_warning")}
            </div>
          `:B}

      <div class="two-col">
        <div class="field">
          <div class="caption">${ze("editor.fields.sync_start_entity")}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_datetime"]}}}
              .value=${null!==(a=t.sync_start_entity)&&void 0!==a?a:""}
              ?disabled=${u}
              @value-changed=${t=>this._patch("sync_start_entity",t.detail.value||"")}
            ></ha-selector>
            ${l?j`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${ze("editor.fields.sync_clear")}
                    .path=${dt}
                    @click=${t=>{t.stopPropagation(),this._patch("sync_start_entity","")}}
                  ></ha-icon-button>
                `:B}
          </div>
        </div>

        <div class="field">
          <div class="caption">${ze("editor.fields.sync_end_entity")}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{entity:{domain:["input_datetime"]}}}
              .value=${null!==(r=t.sync_end_entity)&&void 0!==r?r:""}
              ?disabled=${u}
              @value-changed=${t=>this._patch("sync_end_entity",t.detail.value||"")}
            ></ha-selector>
            ${d?j`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${ze("editor.fields.sync_clear")}
                    .path=${dt}
                    @click=${t=>{t.stopPropagation(),this._patch("sync_end_entity","")}}
                  ></ha-icon-button>
                `:B}
          </div>
        </div>
      </div>
    `}_onLayoutModeChanged(t){if(!this._config)return;const e=this._getLayoutDefaults(t),o=Object.assign(Object.assign({},this._config),{layout_mode:t,button_font_size:e.button_font_size,icon_button_size:e.icon_button_size,date_font_size:e.date_font_size,button_min_width:e.button_min_width,gap:e.gap});this._config=o,Ce(this,"config-changed",{config:o})}_getLayoutDefaults(t){return"compact"===t?{button_font_size:10,icon_button_size:20,date_font_size:12,button_min_width:35,gap:4}:"wide"===t?{button_font_size:13,icon_button_size:26,date_font_size:18,button_min_width:56,gap:12}:{button_font_size:11,icon_button_size:20,date_font_size:16,button_min_width:40,gap:8}}_resetAdvancedAppearance(){var t;if(!this._config)return;const e=null!==(t=this._config.layout_mode)&&void 0!==t?t:"standard",o=this._getLayoutDefaults(e),n=Object.assign(Object.assign({},this._config),{button_font_size:o.button_font_size,icon_button_size:o.icon_button_size,date_font_size:o.date_font_size,button_min_width:o.button_min_width,gap:o.gap});Ce(this,"config-changed",{config:n})}_patch(t,e){this._config=Object.assign(Object.assign({},this._config),{[t]:e}),Ce(this,"config-changed",{config:this._config})}static get styles(){return a`
      ha-form {
        width: 100%;
      }

      ha-icon-button {
        align-self: center;
      }

      .card-config {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .config-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .config-header.sub-header {
        margin-top: 24px;
      }

      ha-icon {
        padding-bottom: 2px;
        position: relative;
        top: -4px;
        right: 1px;
      }

      /* Custom row layout */
      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 12px;
      }
      .field {
        width: 100%;
      }
      .caption {
        font-size: var(--mdc-typography-caption-font-size, 0.875rem);
        color: var(--secondary-text-color);
        margin: 0 0 6px 0;
      }
      .entity-selector-with-clear {
        position: relative;
        width: 100%;
      }
      .entity-selector-with-clear .entity-selector {
        width: 100%;
      }
      .entity-selector-with-clear .selector-clear {
        position: absolute;
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
        --mdc-icon-button-size: 28px;
        color: var(--secondary-text-color);
      }
      .sync-warning {
        margin-top: 12px;
        padding: 0;
        background: none;
        color: var(--warning-color, #f9a825);
        font-size: 0.875rem;
      }
      .sync-warning.sync-warning--conflict {
        color: var(--error-color, #f44336);
      }
      ha-select,
      ha-entity-picker {
        width: 100%;
      }
      .layout-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
      }
      .layout-row ha-selector {
        flex: 1;
      }
      .layout-reset-button {
        flex: 0 0 auto;
      }
      .sync-container {
        min-height: 180px;
      }
    `}};t([rt({attribute:!1})],Qe.prototype,"hass",void 0),t([ct()],Qe.prototype,"_config",void 0),Qe=t([st("energy-period-selector-editor")],Qe);var Xe=Object.freeze({__proto__:null,loadHaForm:Je,get EnergyPeriodSelectorEditor(){return Qe}});export{He as EnergyPeriodSelectorPlus};
