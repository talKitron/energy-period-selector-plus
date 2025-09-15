function t(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new r(o,t,i)},s=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var c;const l=window,d=l.trustedTypes,u=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:m},y="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{o?t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):i.forEach(o=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,t.appendChild(i)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=g){var i;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;f[y]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const b=window,v=b.trustedTypes,x=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,k="?"+$,S=`<${k}>`,E=document,A=()=>E.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,C="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,z=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,O=/"/g,I=/^(?:script|style|textarea|title)$/i,j=(t,...e)=>({_$litType$:1,strings:t,values:e}),R=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,U=E.createTreeWalker(E,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[c,l]=((t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=P;for(let e=0;e<o;e++){const o=t[e];let s,c,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===P?"!--"===c[1]?a=M:void 0!==c[1]?a=H:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=null!=n?n:P,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?z:'"'===c[3]?O:N):a===O||a===N?a=z:a===M||a===H?a=P:(a=z,n=void 0);const u=a===z&&t[e+1].startsWith("/>")?" ":"";r+=a===P?o+S:l>=0?(i.push(s),o.slice(0,l)+w+o.slice(l)+$+u):o+$+(-2===l?(i.push(void 0),e):u)}return[V(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=F.createElement(c,o),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(w)||e.startsWith($)){const o=l[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+w).split($),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?q:"@"===e[1]?Q:Z})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(I.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],A()),U.nextNode(),s.push({type:2,index:++n});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===k)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)s.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function W(t,e,o=t,i){var n,r,a,s;if(e===R)return e;let c=void 0!==i?null===(n=o._$Co)||void 0===n?void 0:n[i]:o._$Cl;const l=D(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Co)&&void 0!==a?a:s._$Co=[])[i]=c:o._$Cl=c),void 0!==c&&(e=W(t,c._$AS(t,e.values),c,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(o,!0);U.currentNode=n;let r=U.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new Y(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new X(r,this,t)),this._$AV.push(e),c=i[++s]}a!==(null==c?void 0:c.index)&&(r=U.nextNode(),a++)}return U.currentNode=E,n}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{constructor(t,e,o,i){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),D(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(V(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(o);else{const t=new K(n,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new F(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Y(this.k(A()),this.k(A()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,o,i,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=W(this,i[o+a],e,a),s===R&&(s=this._$AH[a]),r||(r=!D(s)||s!==this._$AH[a]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const J=v?v.emptyScript:"";class q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Q extends Z{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=W(this,t,e,0))&&void 0!==o?o:L)===R)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=b.litHtmlPolyfillSupport;var et,ot;null==tt||tt(F,Y),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new Y(e.insertBefore(A(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}it.finalized=!0,it._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:it});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:it}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function st(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):at(t,e)}function ct(t){return st({...t,state:!0})}var lt;function dt(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ut(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function ht(t){ut(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===pt(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function mt(t,e){ut(2,arguments);var o=ht(t),i=dt(e);return isNaN(i)?new Date(NaN):i?(o.setDate(o.getDate()+i),o):o}function gt(t,e){ut(2,arguments);var o=ht(t),i=dt(e);if(isNaN(i))return new Date(NaN);if(!i)return o;var n=o.getDate(),r=new Date(o.getTime());return r.setMonth(o.getMonth()+i+1,0),n>=r.getDate()?r:(o.setFullYear(r.getFullYear(),r.getMonth(),n),o)}function yt(t,e){ut(2,arguments);var o=ht(t).getTime(),i=dt(e);return new Date(o+i)}function ft(t,e){return ut(2,arguments),yt(t,36e5*dt(e))}null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;var _t={};function bt(){return _t}function vt(t,e){var o,i,n,r,a,s,c,l;ut(1,arguments);var d=bt(),u=dt(null!==(o=null!==(i=null!==(n=null!==(r=null==e?void 0:e.weekStartsOn)&&void 0!==r?r:null==e||null===(a=e.locale)||void 0===a||null===(s=a.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:d.weekStartsOn)&&void 0!==i?i:null===(c=d.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=ht(t),h=p.getDay(),m=(h<u?7:0)+h-u;return p.setDate(p.getDate()-m),p.setHours(0,0,0,0),p}function xt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function wt(t){ut(1,arguments);var e=ht(t);return e.setHours(0,0,0,0),e}function $t(t,e){return ut(2,arguments),mt(t,7*dt(e))}function kt(t,e){return ut(2,arguments),gt(t,12*dt(e))}function St(t,e){var o=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return o<0?-1:o>0?1:o}function Et(t,e){ut(2,arguments);var o=ht(t),i=ht(e),n=St(o,i),r=Math.abs(function(t,e){ut(2,arguments);var o=wt(t),i=wt(e),n=o.getTime()-xt(o),r=i.getTime()-xt(i);return Math.round((n-r)/864e5)}(o,i));o.setDate(o.getDate()-n*r);var a=n*(r-Number(St(o,i)===-n));return 0===a?0:a}function At(t){ut(1,arguments);var e=ht(t);return e.setHours(23,59,59,999),e}function Dt(t){ut(1,arguments);var e=ht(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Tt(t){ut(1,arguments);var e=ht(t),o=new Date(0);return o.setFullYear(e.getFullYear(),0,1),o.setHours(0,0,0,0),o}function Ct(){return At(Date.now())}function Pt(){return wt(Date.now())}var Mt,Ht,zt,Nt={en:"US",hi:"IN",deva:"IN",te:"IN",mr:"IN",ta:"IN",gu:"IN",kn:"IN",or:"IN",ml:"IN",pa:"IN",bho:"IN",awa:"IN",as:"IN",mwr:"IN",mai:"IN",mag:"IN",bgc:"IN",hne:"IN",dcc:"IN",bn:"BD",beng:"BD",rkt:"BD",dz:"BT",tibt:"BT",tn:"BW",am:"ET",ethi:"ET",om:"ET",quc:"GT",id:"ID",jv:"ID",su:"ID",mad:"ID",ms_arab:"ID",he:"IL",hebr:"IL",jam:"JM",ja:"JP",jpan:"JP",km:"KH",khmr:"KH",ko:"KR",kore:"KR",lo:"LA",laoo:"LA",mh:"MH",my:"MM",mymr:"MM",mt:"MT",ne:"NP",fil:"PH",ceb:"PH",ilo:"PH",ur:"PK",pa_arab:"PK",lah:"PK",ps:"PK",sd:"PK",skr:"PK",gn:"PY",th:"TH",thai:"TH",tts:"TH",zh_hant:"TW",hant:"TW",sm:"WS",zu:"ZA",sn:"ZW",arq:"DZ",ar:"EG",arab:"EG",arz:"EG",fa:"IR",az_arab:"IR",dv:"MV",thaa:"MV"},Ot={AG:0,ATG:0,28:0,AS:0,ASM:0,16:0,BD:0,BGD:0,50:0,BR:0,BRA:0,76:0,BS:0,BHS:0,44:0,BT:0,BTN:0,64:0,BW:0,BWA:0,72:0,BZ:0,BLZ:0,84:0,CA:0,CAN:0,124:0,CO:0,COL:0,170:0,DM:0,DMA:0,212:0,DO:0,DOM:0,214:0,ET:0,ETH:0,231:0,GT:0,GTM:0,320:0,GU:0,GUM:0,316:0,HK:0,HKG:0,344:0,HN:0,HND:0,340:0,ID:0,IDN:0,360:0,IL:0,ISR:0,376:0,IN:0,IND:0,356:0,JM:0,JAM:0,388:0,JP:0,JPN:0,392:0,KE:0,KEN:0,404:0,KH:0,KHM:0,116:0,KR:0,KOR:0,410:0,LA:0,LA0:0,418:0,MH:0,MHL:0,584:0,MM:0,MMR:0,104:0,MO:0,MAC:0,446:0,MT:0,MLT:0,470:0,MX:0,MEX:0,484:0,MZ:0,MOZ:0,508:0,NI:0,NIC:0,558:0,NP:0,NPL:0,524:0,PA:0,PAN:0,591:0,PE:0,PER:0,604:0,PH:0,PHL:0,608:0,PK:0,PAK:0,586:0,PR:0,PRI:0,630:0,PT:0,PRT:0,620:0,PY:0,PRY:0,600:0,SA:0,SAU:0,682:0,SG:0,SGP:0,702:0,SV:0,SLV:0,222:0,TH:0,THA:0,764:0,TT:0,TTO:0,780:0,TW:0,TWN:0,158:0,UM:0,UMI:0,581:0,US:0,USA:0,840:0,VE:0,VEN:0,862:0,VI:0,VIR:0,850:0,WS:0,WSM:0,882:0,YE:0,YEM:0,887:0,ZA:0,ZAF:0,710:0,ZW:0,ZWE:0,716:0,AE:6,ARE:6,784:6,AF:6,AFG:6,4:6,BH:6,BHR:6,48:6,DJ:6,DJI:6,262:6,DZ:6,DZA:6,12:6,EG:6,EGY:6,818:6,IQ:6,IRQ:6,368:6,IR:6,IRN:6,364:6,JO:6,JOR:6,400:6,KW:6,KWT:6,414:6,LY:6,LBY:6,434:6,OM:6,OMN:6,512:6,QA:6,QAT:6,634:6,SD:6,SDN:6,729:6,SY:6,SYR:6,760:6,MV:5,MDV:5,462:5};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Mt||(Mt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ht||(Ht={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(zt||(zt={}));const It=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],jt=t=>t.first_weekday===zt.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(t.language).weekInfo.firstDay%7:function(t){return function(t,e,o){if(t){var i,n=t.toLowerCase().split(/[-_]/),r=n[0],a=r;if(n[1]&&4===n[1].length?(a+="_"+n[1],i=n[2]):i=n[1],i||(i=e[a]||e[r]),i)return function(t,e){var o=e["string"==typeof t?t.toUpperCase():t];return"number"==typeof o?o:1}(i.match(/^\d+$/)?Number(i):i,o)}return 1}(t,Nt,Ot)}(t.language)%7:It.includes(t.first_weekday)?It.indexOf(t.first_weekday):1;var Rt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Lt(t,e){return t===e||!(!Rt(t)||!Rt(e))}function Bt(t,e){if(t.length!==e.length)return!1;for(var o=0;o<t.length;o++)if(!Lt(t[o],e[o]))return!1;return!0}function Ut(t,e){void 0===e&&(e=Bt);var o=null;function i(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];if(o&&o.lastThis===this&&e(i,o.lastArgs))return o.lastResult;var r=t.apply(this,i);return o={lastResult:r,lastArgs:i,lastThis:this},r}return i.clear=function(){o=null},i}Ut(t=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"}));const Vt=Ut(t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}));Ut(t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"}));const Ft=(t,e)=>Wt(e).format(t),Wt=Ut(t=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})),Kt=Ut(t=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"}));Ut(t=>new Intl.DateTimeFormat(t.language,{month:"long"}));const Yt=Ut(t=>new Intl.DateTimeFormat(t.language,{year:"numeric"}));Ut(t=>new Intl.DateTimeFormat(t.language,{weekday:"long"}));const Zt=t=>{let e=[];function o(o,i){t=i?o:Object.assign(Object.assign({},t),o);let n=e;for(let e=0;e<n.length;e++)n[e](t)}return{get state(){return t},action(e){function i(t){o(t,!1)}return function(){let o=[t];for(let t=0;t<arguments.length;t++)o.push(arguments[t]);let n=e.apply(this,o);if(null!=n)return n instanceof Promise?n.then(i):i(n)}},setState:o,subscribe:t=>(e.push(t),()=>{!function(t){let o=[];for(let i=0;i<e.length;i++)e[i]===t?t=null:o.push(e[i]);e=o}(t)})}},Gt=(t,e)=>{const o={};return e&&(e.type&&(o.type_filter=e.type),e.domain&&(o.domain=e.domain)),t.callWS(Object.assign({type:"config_entries/get"},o))},Jt=(t,e,o,i,n="hour",r,a)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==o?void 0:o.toISOString(),statistic_ids:i,period:n,units:r,types:a}),qt=[],Qt=t=>t.callWS({type:"energy/info"}),Xt=async(t,e,o,i,n,r="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:o,co2_statistic_id:i,period:r}),te=(t,e,o)=>{const i=[];for(const n of t.energy_sources)if(!o||o.includes(n.type))if("solar"!==n.type){if("gas"===n.type||"water"===n.type){i.push(n.stat_energy_from),n.stat_cost&&i.push(n.stat_cost);const t=e.cost_sensors[n.stat_energy_from];t&&i.push(t);continue}if("battery"!==n.type){for(const t of n.flow_from){i.push(t.stat_energy_from),t.stat_cost&&i.push(t.stat_cost);const o=e.cost_sensors[t.stat_energy_from];o&&i.push(o)}for(const t of n.flow_to){i.push(t.stat_energy_to),t.stat_compensation&&i.push(t.stat_compensation);const o=e.cost_sensors[t.stat_energy_to];o&&i.push(o)}}else i.push(n.stat_energy_from),i.push(n.stat_energy_to)}else i.push(n.stat_energy_from);return i},ee=(t,e={})=>{let o="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");o=`_${e.key}`}if(t.connection[o])return t.connection[o];qt.push(e.key);const i=((t,e,o,i)=>{if(t[e])return t[e];let n,r,a=0,s=Zt();const c=()=>{if(!o)throw new Error("Collection does not support refresh");return o(t).then(t=>s.setState(t,!0))},l=()=>c().catch(e=>{if(t.connected)throw e}),d=()=>{r=void 0,n&&n.then(t=>{t()}),t.removeEventListener("ready",c),t.removeEventListener("disconnected",u)},u=()=>{r&&(clearTimeout(r),d())};return t[e]={get state(){return s.state},refresh:c,subscribe(e){a++,1===a&&(()=>{if(void 0!==r)return clearTimeout(r),void(r=void 0);i&&(n=i(t,s)),o&&(t.addEventListener("ready",l),l()),t.addEventListener("disconnected",u)})();const c=s.subscribe(e);return void 0!==s.state&&setTimeout(()=>e(s.state),0),()=>{c(),a--,a||(r=setTimeout(d,5e3))}}},t[e]})(t.connection,o,async()=>{if(i.prefs||(i.prefs=await(t=>t.callWS({type:"energy/get_prefs"}))(t)),i._refreshTimeout&&clearTimeout(i._refreshTimeout),i._active&&(!i.end||i.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),i._refreshTimeout=window.setTimeout(()=>i.refresh(),t.getTime()-Date.now())}return(async(t,e,o,i,n)=>{const[r,a]=await Promise.all([Gt(t,{domain:"co2signal"}),Qt(t)]),s=r.length?r[0]:void 0;let c;if(s)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const o=t.states[e.entity_id];if(o&&"%"===o.attributes.unit_of_measurement){c=o.entity_id;break}}const l=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)l.push(e.stat_energy_from);const d=te(e,a,["grid","solar","battery","gas"]),u=te(e,a,["water"]),p=[...d,...u],h=Et(i||new Date,o),m=h>35?"month":h>2?"day":"hour",g=ft(o,-1),y=t.config.unit_system.length||"",f={energy:"kWh",volume:"km"===y?"m³":"ft³"},_={volume:"km"===y?"L":"gal"},b=d.length?Jt(t,g,i,d,m,f,["change"]):{},v=u.length?Jt(t,g,i,u,m,_,["change"]):{};let x,w,$,k,S,E={},A={};if(n){w=h>27&&h<32?gt(o,-1):mt(o,-1*(h+1));const e=ft(w,-1);$=yt(o,-1),d.length&&(E=Jt(t,e,$,d,m,f,["sum"])),u.length&&(A=Jt(t,e,$,u,m,_,["sum"]))}void 0!==c&&(k=Xt(t,o,l,c,i,h>35?"month":h>2?"day":"hour"),n&&(S=Xt(t,w,l,c,$,h>35?"month":h>2?"day":"hour")));const D={},T=p.length?((t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}))(t,p):[],[C,P,M,H,z,N,O]=await Promise.all([b,v,E,A,T,k,S]),I=Object.assign(Object.assign({},C),P);return n&&(x=Object.assign(Object.assign({},M),H)),p.length&&z.forEach(t=>{D[t.statistic_id]=t}),Object.values(I).forEach(t=>{t.length&&new Date(t[0].start)>g&&t.unshift(Object.assign(Object.assign({},t[0]),{start:g.getTime(),end:g.getTime(),sum:0,state:0}))}),{start:o,end:i,startCompare:w,endCompare:$,info:a,prefs:e,stats:I,statsMetadata:D,statsCompare:x,co2SignalConfigEntry:s,co2SignalEntity:c,fossilEnergyConsumption:N,fossilEnergyConsumptionCompare:O}})(t,i.prefs,i.start,i.end,i.compare)}),n=i.subscribe;i.subscribe=t=>{const e=n(t);return i._active++,()=>{i._active--,i._active<1&&(clearTimeout(i._refreshTimeout),i._refreshTimeout=void 0),e()}},i._active=0,i.prefs=e.prefs;const r=new Date;i.start=r.getHours()>0?Pt():function(){var t=new Date,e=t.getFullYear(),o=t.getMonth(),i=t.getDate(),n=new Date(0);return n.setFullYear(e,o,i-1),n.setHours(0,0,0,0),n}(),i.end=r.getHours()>0?Ct():function(){var t=new Date,e=t.getFullYear(),o=t.getMonth(),i=t.getDate(),n=new Date(0);return n.setFullYear(e,o,i-1),n.setHours(23,59,59,999),n}();const a=()=>{i._updatePeriodTimeout=window.setTimeout(()=>{i.start=Pt(),i.end=Ct(),a()},ft(Ct(),1).getTime()-Date.now())};return a(),i.clearPrefs=()=>{i.prefs=void 0},i.setPeriod=(t,e)=>{var o;i.start=t,i.end=e,i.start.getTime()!==Pt().getTime()||(null===(o=i.end)||void 0===o?void 0:o.getTime())!==Ct().getTime()||i._updatePeriodTimeout?i._updatePeriodTimeout&&(clearTimeout(i._updatePeriodTimeout),i._updatePeriodTimeout=void 0):a()},i.setCompare=t=>{i.compare=t},i},oe=e=>{class o extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){super.disconnectedCallback(),this.hassUnsubscribe()}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}resetSubscriptions(){this.hassUnsubscribe(),this.__checkSubscribed()}hassSubscribe(){return[]}hassUnsubscribe(){if(this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([st({attribute:!1})],o.prototype,"hass",void 0),o};var ie={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_found:"Entity state not found",missing_child:"Missing child entity",loading:"Loading..."},ne={custom:"Custom",today:"Today"},re={yaml_disclaimer:"Please use yaml mode for the other options",docs:"Documentation",sections:"Sections",section:"Section",add_section:"+ Add section",add_entity:"+ Add entity",entity_editor:"Entity editor",decimals:"decimals",fields:{card_background:"Card Background",prev_next_buttons:"Show Previous/Next Buttons",compare_button_type:"Compare Button Type",custom_period_label:"Custom Period Label",compare_button_options:{icon:"Icon",text:"Text"},period_buttons:"Period Buttons",today_button_type:"Today Button Type",compare_button_label:"Compare Button Label",period_buttons_options:{day:"Day",week:"Week",month:"Month",year:"Year",custom:"Custom"},sync_entity:"Sync Date Entity",sync_direction:"Sync Direction",sync_direction_options:{both:"Both Ways",to_entity:"To Entity Only",from_entity:"From Entity Only"},layout_mode:"Layout Mode",layout_mode_options:{standard:"Standard (Default)",compact:"Compact"}},entity_types:{entity:"Entity",remaining_parent_state:"Remaining parent state",remaining_child_state:"Remaining child state",passthrough:"Passthrough"}},ae={common:ie,toggleButtons:ne,editor:re},se={version:"Version",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung anzeigen",entity_not_found:"Entitätsstatus nicht gefunden",missing_child:"Fehlende Kind-Entität",loading:"Laden..."},ce={custom:"Benutzerdefiniert",today:"Heute"},le={yaml_disclaimer:"Bitte verwenden Sie den YAML-Modus für die anderen Optionen",docs:"Dokumentation",sections:"Abschnitte",section:"Abschnitt",add_section:"+ Abschnitt hinzufügen",add_entity:"+ Entität hinzufügen",entity_editor:"Entitätseditor",decimals:"Nachkommastellen",fields:{card_background:"Kartenhintergrund",prev_next_buttons:"Vorherige/Nächste Schaltflächen anzeigen",compare_button_type:"Vergleichstyp der Schaltfläche",custom_period_label:"Benutzerdefiniertes Zeitraster-Label",compare_button_options:{icon:"Symbol",text:"Text"},period_buttons:"Zeitraumschaltflächen",today_button_type:"Heutiger Schaltflächentyp",compare_button_label:"Beschriftung der Vergleichsschaltfläche",period_buttons_options:{day:"Tag",week:"Woche",month:"Monat",year:"Jahr",custom:"Benutzerdefiniert"},sync_entity:"Sync-Datums-Entität",sync_direction:"Sync-Richtung",sync_direction_options:{both:"Beide Richtungen",to_entity:"Nur zur Entität",from_entity:"Nur von Entität"},layout_mode:"Layout-Modus",layout_mode_options:{standard:"Standard (Standard)",compact:"Kompakt"}},entity_types:{entity:"Entität",remaining_parent_state:"Verbleibender Elternstatus",remaining_child_state:"Verbleibender Kindstatus",passthrough:"Durchleitung"}},de={common:se,toggleButtons:ce,editor:le},ue={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Mostrar Aviso",entity_not_found:"Estado da entidade não encontrado",missing_child:"Entidade filha em falta",loading:"A carregar..."},pe={custom:"Personalizado",today:"Hoje"},he={yaml_disclaimer:"Por favor, utilize o modo yaml para as outras opções",docs:"Documentação",sections:"Secções",section:"Secção",add_section:"+ Adicionar secção",add_entity:"+ Adicionar entidade",entity_editor:"Editor de entidades",decimals:"casas decimais",fields:{card_background:"Fundo do cartão",prev_next_buttons:"Mostrar Botões de controle",compare_button_type:"Tipo de Botão para Comparar",custom_period_label:"Rótulo do Período Personalizado",compare_button_options:{icon:"Ícone",text:"Texto"},period_buttons:"Botões de Período",today_button_type:"Tipo de Botão Hoje",compare_button_label:"Rótulo do Botão Comparar",period_buttons_options:{day:"Dia",week:"Semana",month:"Mês",year:"Ano",custom:"Personalizado"},sync_entity:"Entidade de Data de Sincronização",sync_direction:"Direção de Sincronização",sync_direction_options:{both:"Ambas as Direções",to_entity:"Apenas para Entidade",from_entity:"Apenas da Entidade"},layout_mode:"Modo de Layout",layout_mode_options:{standard:"Padrão (Padrão)",compact:"Compacto"}},entity_types:{entity:"Entidade",remaining_parent_state:"Estado pai restante",remaining_child_state:"Estado filho restante",passthrough:"Encaminhar"}},me={common:ue,toggleButtons:pe,editor:he},ge={version:"Versión",invalid_configuration:"Configuración inválida",show_warning:"Mostrar advertencia",entity_not_found:"Estado de entidad no encontrado",missing_child:"Entidad secundaria faltante",loading:"Cargando..."},ye={custom:"Personalizado",today:"Hoy"},fe={yaml_disclaimer:"Por favor, utiliza el modo YAML para las otras opciones",docs:"Documentación",sections:"Secciones",section:"Sección",add_section:"+ Agregar sección",add_entity:"+ Agregar entidad",entity_editor:"Editor de entidades",decimals:"decimales",fields:{card_background:"Fondo de tarjeta",prev_next_buttons:"Mostrar botones Anterior/Siguiente",compare_button_type:"Tipo de botón de comparación",custom_period_label:"Etiqueta de período personalizada",compare_button_options:{icon:"Ícono",text:"Texto"},period_buttons:"Botones de período",today_button_type:"Tipo de botón Hoy",compare_button_label:"Etiqueta del botón de comparación",period_buttons_options:{day:"Día",week:"Semana",month:"Mes",year:"Año",custom:"Personalizado"},sync_entity:"Entidad de Fecha de Sincronización",sync_direction:"Dirección de Sincronización",sync_direction_options:{both:"Ambas Direcciones",to_entity:"Solo a Entidad",from_entity:"Solo desde Entidad"},layout_mode:"Modo de Diseño",layout_mode_options:{standard:"Estándar (Predeterminado)",compact:"Compacto"}},entity_types:{entity:"Entidad",remaining_parent_state:"Estado del padre restante",remaining_child_state:"Estado del hijo restante",passthrough:"Pasar a través"}},_e={common:ge,toggleButtons:ye,editor:fe},be={version:"Verzia",invalid_configuration:"Neplatná konfigurácia",show_warning:"Zobraziť upozornenie",entity_not_found:"Stav entity sa nenašiel",missing_child:"Chýbajúca podradená entita",loading:"Načítava sa..."},ve={custom:"Vlastné",today:"Dnes"},xe={yaml_disclaimer:"Pre ostatné možnosti použite yaml mód",docs:"Dokumentácia",sections:"Sekcie",section:"Sekcia",add_section:"+ Pridať sekciu",add_entity:"+ Pridať entitu",entity_editor:"Editor entít",decimals:"desatinné miesta",fields:{card_background:"Pozadie karty",prev_next_buttons:"Zobraziť tlačidlá Predchádzajúce/Ďalšie",compare_button_type:"Typ tlačidla porovnania",custom_period_label:"Štítok vlastného obdobia",compare_button_options:{icon:"Ikona",text:"Text"},period_buttons:"Tlačidlá obdobia",today_button_type:"Typ tlačidla dnes",compare_button_label:"Štítok tlačidla porovnania",period_buttons_options:{day:"Deň",week:"Týždeň",month:"Mesiac",year:"Rok",custom:"Vlastné"},sync_entity:"Entita synchronizácie dátumu",sync_direction:"Smer synchronizácie",sync_direction_options:{both:"Obojsmerne",to_entity:"Len do entity",from_entity:"Len z entity"},layout_mode:"Režim rozloženia",layout_mode_options:{standard:"Štandardné (Predvolené)",compact:"Kompaktné"}},entity_types:{entity:"Entita",remaining_parent_state:"Zostávajúci stav nadradenej entity",remaining_child_state:"Zostávajúci stav podradenej entity",passthrough:"Prenos"}},we={common:be,toggleButtons:ve,editor:xe};const $e={en:Object.freeze({__proto__:null,common:ie,toggleButtons:ne,editor:re,default:ae}),de:Object.freeze({__proto__:null,common:se,toggleButtons:ce,editor:le,default:de}),pt:Object.freeze({__proto__:null,common:ue,toggleButtons:pe,editor:he,default:me}),es:Object.freeze({__proto__:null,common:ge,toggleButtons:ye,editor:fe,default:_e}),sk:Object.freeze({__proto__:null,common:be,toggleButtons:ve,editor:xe,default:we})};function ke(t,e="",o=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],$e[i])}catch(e){n=t.split(".").reduce((t,e)=>t[e],$e.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t&&t[e],$e.en)),""!==e&&""!==o&&(n=null==n?void 0:n.replace(e,o)),n}const Se=a`
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
  
  /* Compact layout mode */
  .energy-period-selector.compact-mode {
    gap: 0.25rem;
    padding: 0;
  }
  
  .energy-period-selector.compact-mode .period-buttons-row {
    margin-bottom: 0;
  }
  
  .energy-period-selector.compact-mode .date-controls-row {
    margin-top: 0;
  }
  
  
  /* Compact button sizing */
  .energy-period-selector.compact-mode .period-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
  }
  
  .energy-period-selector.compact-mode .today-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
  }
  
  .energy-period-selector.compact-mode .compare-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
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
  }
  
  /* Compact date display */
  .energy-period-selector.compact-mode .date-display {
    font-size: 12px;
    font-weight: 400;
    color: var(--primary-text-color, #000000) !important;
  }
  
  /* Ensure date display uses theme colors in all modes */
  .date-display {
    color: var(--primary-text-color, #000000) !important;
  }
  
  .mdc-text-field__icon .mdc-text-field__icon--trailing {
    padding-left: 0;
  }
  .energy-period-selector {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  .period-buttons-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .date-controls-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .date-display {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .compare-button-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.5rem;
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
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
    --mdc-icon-button-size: 20px !important;
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
    line-height: 20px !important;
  }
  
  /* Target mwc-icon-button elements specifically */
  .navigation-controls ha-icon-button-prev mwc-icon-button,
  .navigation-controls ha-icon-button-next mwc-icon-button {
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
    --mdc-icon-button-size: 20px !important;
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
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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

  .period-buttons {
    display: flex;
    gap: 0;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  .period-button {
    background: var(--card-background-color, #ffffff);
    border: 1px solid #000000;
    color: var(--primary-text-color);
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    flex: 1;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: inherit;
  }
  .period-button:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .period-button:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .period-button:not(:last-child) {
    border-right: 1px solid #000000;
  }
  .period-button.active {
    background-color: #f0f0f0 !important;
    color: var(--primary-text-color) !important;
    z-index: 1;
  }
  
  /* Dark mode support for selected button */
  @media (prefers-color-scheme: dark) {
    .period-button.active {
      background-color: #505050 !important;
      color: var(--primary-text-color) !important;
    }
  }
  
  /* More specific selector to override any conflicting styles */
  .period-buttons .period-button.active {
    background-color: #f0f0f0 !important;
    color: var(--primary-text-color) !important;
  }
  
  /* Force override for any inherited text color */
  .period-button.active * {
    color: var(--primary-text-color) !important;
  }
  
  /* Most specific selector possible */
  .energy-period-selector .period-buttons .period-button.active {
    background-color: #f0f0f0 !important;
    color: var(--primary-text-color) !important;
  }
  
  /* Override any potential inherited styles */
  .energy-period-selector .period-buttons .period-button.active,
  .energy-period-selector .period-buttons .period-button.active:hover,
  .energy-period-selector .period-buttons .period-button.active:focus {
    color: var(--primary-text-color) !important;
    background-color: #f0f0f0 !important;
  }
  
  /* Dark mode support for all selectors */
  @media (prefers-color-scheme: dark) {
    .period-buttons .period-button.active,
    .period-button.active *,
    .energy-period-selector .period-buttons .period-button.active,
    .energy-period-selector .period-buttons .period-button.active:hover,
    .energy-period-selector .period-buttons .period-button.active:focus {
      background-color: #505050 !important;
      color: var(--primary-text-color) !important;
    }
  }
  .period-button:hover:not(.active) {
    background-color: var(--divider-color, #404040);
  }
  .period-button:focus {
    outline: none;
  }
  .period-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Native fallback styling using Home Assistant theme variables */
  .period-buttons-native {
    display: flex;
    gap: 0;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  .period-button-native {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #000000);
    color: var(--primary-text-color);
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    flex: 1;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: inherit;
  }
  .period-button-native:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .period-button-native:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .period-button-native:not(:last-child) {
    border-right: 1px solid var(--divider-color, #000000);
  }
  .period-button-native.active {
    background-color: var(--primary-color) !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    z-index: 1;
  }
  .period-button-native:hover:not(.active) {
    background-color: var(--divider-color, #404040);
  }
  .period-button-native:focus {
    outline: none;
  }
  .period-button-native:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Native ha-button toggle group styling */
  .period-buttons-ha {
    display: flex;
    gap: 0;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  .period-button-ha {
    --mdc-button-height: 24px;
    --mdc-button-min-width: 50px;
    --mdc-typography-button-font-size: 12px;
    --mdc-typography-button-font-weight: 500;
    --mdc-typography-button-text-transform: uppercase;
    --mdc-typography-button-letter-spacing: 0.0892857143em;
    --mdc-typography-button-line-height: 1.75;
    --mdc-typography-button-font-family: var(--mdc-typography-font-family, "Roboto", sans-serif);
    --mdc-shape-small: 0px;
    border-radius: 0 !important;
    margin: 0 !important;
    flex: 1;
  }
  .period-button-ha:first-child {
    border-top-left-radius: 2px !important;
    border-bottom-left-radius: 2px !important;
  }
  .period-button-ha:last-child {
    border-top-right-radius: 2px !important;
    border-bottom-right-radius: 2px !important;
  }
  .period-button-ha:not(:last-child) {
    border-right: 1px solid #202124 !important;
  }
  .period-button-ha[outlined] {
    --mdc-button-outline-color: #202124;
    --mdc-button-outline-width: 1px;
    background: var(--card-background-color, #ffffff) !important;
    color: var(--primary-text-color) !important;
    border: 1px solid #202124 !important;
  }
  .period-button-ha[raised] {
    background: #d2d3d3 !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    --mdc-button-outline-width: 0px;
    border: 1px solid #d2d3d3 !important;
    z-index: 1;
  }
  .period-button-ha:hover:not([raised]) {
    background-color: var(--divider-color, #404040) !important;
  }
  .period-button:active {
    transform: translateY(1px);
  }
  
  /* Custom Today button - matches period buttons */
  .today-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    --mdc-button-height: 20px !important;
    --mdc-button-min-width: 40px !important;
    --mdc-typography-button-font-size: 11px !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-typography-button-letter-spacing: 0.0892857143em !important;
    --mdc-shape-small: 4px !important;
    --mdc-button-outline-color: #202124 !important;
    background: var(--secondary-background-color, #f0f0f0) !important;
    border: 1px solid #202124 !important;
    border-radius: 4px !important;
    height: 20px !important;
    min-width: 40px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Force override for ha-button internal elements */
  .navigation-controls ha-button mwc-button {
    --mdc-button-height: 20px !important;
    --mdc-button-min-width: 40px !important;
    --mdc-typography-button-font-size: 11px !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-button-outline-color: #202124 !important;
    height: 20px !important;
    min-width: 40px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Custom Compare button - matches Today button */
  .compare-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
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
    .energy-period-selector {
      gap: 0.5rem;
    }
    .period-buttons-row {
      justify-content: flex-end;
      gap: 0.25rem;
    }
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
    .period-button-custom {
      flex: 0 0 auto;
      min-width: 50px;
      padding: 3px 8px;
      font-size: 11px;
      height: 20px;
    }
    .period-button-custom.active {
      background-color: var(--primary-color, #03a9f4) !important;
      color: var(--text-primary-on-color, #ffffff) !important;
      border-color: var(--primary-color, #03a9f4) !important;
    }
    .date-controls-row {
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .date-display {
      font-size: 14px;
      text-align: right;
      flex: 1;
    }
    .today-button-custom,
    .today-button-fallback {
      min-width: 40px;
      height: 20px;
      padding: 3px 8px;
      font-size: 11px;
    }
    .compare-button-custom {
      min-width: 40px;
      height: 20px;
      padding: 3px 8px;
      font-size: 11px;
    }
    .navigation-controls ha-button {
      --mdc-button-height: 20px;
      --mdc-button-min-width: 40px;
      font-size: 11px;
      padding: 3px 8px;
    }
    
  }
  
  @media (max-width: 480px) {
    .period-button-custom {
      min-width: 40px;
      padding: 2px 6px;
      font-size: 10px;
      height: 18px;
    }
    .date-display {
      font-size: 12px;
    }
    .today-button-custom,
    .today-button-fallback {
      min-width: 35px;
      height: 18px;
      padding: 2px 6px;
      font-size: 10px;
    }
    .compare-button-custom {
      min-width: 35px;
      height: 18px;
      padding: 2px 6px;
      font-size: 10px;
    }
    .navigation-controls ha-button {
      --mdc-button-height: 18px;
      --mdc-button-min-width: 35px;
      font-size: 10px;
      padding: 2px 6px;
    }
    
    /* Ultra-compact mode for very narrow spaces */
    .energy-period-selector.compact-mode .period-button-custom {
      min-width: 30px;
      padding: 1px 4px;
      font-size: 9px;
      height: 16px;
    }
    
    .energy-period-selector.compact-mode .today-button-custom {
      min-width: 30px;
      height: 16px;
      padding: 1px 4px;
      font-size: 9px;
    }
    
    .energy-period-selector.compact-mode .compare-button-custom {
      min-width: 30px;
      height: 16px;
      padding: 1px 4px;
      font-size: 9px;
    }
    
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button,
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button-prev,
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button-next {
      --mdc-icon-button-size: 20px !important;
      height: 20px !important;
      width: 20px !important;
      min-height: 20px !important;
      min-width: 20px !important;
      max-height: 20px !important;
      max-width: 20px !important;
    }
    
    .energy-period-selector.compact-mode .date-display {
      font-size: 10px;
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
`;let Ae=class extends(oe(it)){constructor(){super(...arguments),this._compare=!1,this._lastSyncToEntityTimestamp=0,this._lastSyncFromEntityTimestamp=0,this._userActionTimestamp=0,this._isUserAction=!1,this._isProcessingClick=!1,this._lastClickId=0,this._clickDebounceTimer=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async firstUpdated(){const t=await window.loadCardHelpers();t.importMoreInfoControl("input_datetime");try{await t.importMoreInfoControl("button")}catch(t){console.warn("Failed to load ha-button component:",t)}try{await t.importMoreInfoControl("selector")}catch(t){console.warn("Failed to load ha-selector component:",t)}const e=["button-toggle-group","ha-button-toggle-group","selector-button-toggle","ha-selector-button-toggle"];for(const o of e)try{await t.importMoreInfoControl(o);break}catch(t){console.warn(`Failed to load ${o}:`,t)}try{await t.importMoreInfoControl("button")}catch(t){console.warn("Failed to load ha-button component:",t)}setTimeout(()=>{this._forceButtonStyling()},1e3)}hassSubscribe(){var t;const e=[ee(this.hass,{key:this.collectionKey}).subscribe(t=>this._updateDates(t))];return(null===(t=this._config)||void 0===t?void 0:t.sync_entity)&&e.push(this.hass.connection.subscribeEvents(t=>this._handleEntityStateChange(t),"state_changed")),e}render(){var t,e,o,i,n,r,a,s,c,l,d,u,p,h,m,g;if(!this.hass||!this._startDate)return L;const y=t=>{var e;return"custom"===t?(null===(e=this._config)||void 0===e?void 0:e.custom_period_label)||ke(`toggleButtons.${t}`)||t:this.hass.localize(`ui.components.calendar.event.rrule.${t}`)},f=(null===(t=this._config)||void 0===t?void 0:t.period_buttons)?this._config.period_buttons.map(t=>({label:y(t),value:t})):[{label:this.hass.localize("ui.components.calendar.event.rrule.day"),value:"day"},{label:this.hass.localize("ui.components.calendar.event.rrule.week"),value:"week"},{label:this.hass.localize("ui.components.calendar.event.rrule.month"),value:"month"},{label:this.hass.localize("ui.components.calendar.event.rrule.year"),value:"year"}],_=(null===(e=this._config)||void 0===e?void 0:e.layout_mode)||"standard",b=j`
      <div class="date-range-container">
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${(null===(o=this._startDate)||void 0===o?void 0:o.toISOString())||""}
          .label=${this.hass.localize("ui.components.date-range-picker.start_date")}
          @value-changed=${this._startDateChanged}
          .required=${!0}
          .min=${"2019-01-01"}
          .max=${(null===(i=this._endDate)||void 0===i?void 0:i.toISOString())||Ct().toISOString()}
        >
        </ha-date-input>
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${(null===(n=this._endDate)||void 0===n?void 0:n.toISOString())||""}
          .label=${this.hass.localize("ui.components.date-range-picker.end_date")}
          @value-changed=${this._endDateChanged}
          .required=${!0}
          .min=${this._startDate.toISOString()}
          .max=${Ct().toISOString()}
        >
        </ha-date-input>
      </div>
    `,v=j` <button class="today-button-custom" @click=${this._pickToday}>
      ${(null===(r=this._config)||void 0===r?void 0:r.today_button_label)||ke("toggleButtons.today")}
    </button>`;j` <button class="today-button-fallback" @click=${this._pickToday}>
      ${(null===(a=this._config)||void 0===a?void 0:a.today_button_label)||ke("toggleButtons.today")}
    </button>`;const x=j` <ha-icon-button
      @click=${this._pickToday}
      class="today-icon"
      .label=${(null===(s=this._config)||void 0===s?void 0:s.today_button_label)||ke("toggleButtons.today")}
      .path=${"M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7"}
    >
    </ha-icon-button>`,w=!1===(null===(c=this._config)||void 0===c?void 0:c.today_button_type)?L:"icon"===(null===(l=this._config)||void 0===l?void 0:l.today_button_type)?x:v,$=(null===(d=this._config)||void 0===d?void 0:d.compare_button_type)?j`
      <div class="compare-button-row">
        ${"icon"===(null===(u=this._config)||void 0===u?void 0:u.compare_button_type)?j`<ha-icon-button
              class="compare ${this._compare?"active":""}"
              .path=${this._compare?"M19 5H14V3H19C20.1 3 21 3.9 21 5V13.4C20.4 13.2 19.7 13 19 13V5M10 1H12V23H10V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10V1M10 12L5 18H10V12M15.7 14L14 12V15.7C14.4 15 15 14.5 15.7 14M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z":"M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"}
              @click=${this._toggleCompare}
              dense
              outlined
            >
              ${null!==(p=this._config.compare_button_label)&&void 0!==p?p:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
            </ha-icon-button>`:"text"===(null===(h=this._config)||void 0===h?void 0:h.compare_button_type)?j`<button class="compare-button-custom ${this._compare?"active":""}" @click=${this._toggleCompare}>
                  ${null!==(m=this._config.compare_button_label)&&void 0!==m?m:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")}
                </button>`:L}
      </div>
    `:L,k=j`
      <div class="period-buttons-row">
        ${this._renderPeriodButtons(f)}
      </div>
    `,S=j`
      <div class="date-controls-row">
        ${"custom"===this._period?b:j`
              <div class="date-display">
                ${"day"===this._period?(E=this._startDate,A=this.hass.locale,Vt(A).format(E)):"month"===this._period?((t,e)=>Kt(e).format(t))(this._startDate,this.hass.locale):"year"===this._period?((t,e)=>Yt(e).format(t))(this._startDate,this.hass.locale):`${Ft(this._startDate,this.hass.locale)} – ${Ft(this._endDate||new Date,this.hass.locale)}`}
              </div>
              <div class="navigation-controls">
                ${!1!==(null===(g=this._config)||void 0===g?void 0:g.prev_next_buttons)?j`
                      <ha-icon-button-prev
                        .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}
                        @click=${this._pickPrevious}
                      ></ha-icon-button-prev>
                      <ha-icon-button-next
                        .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}
                        @click=${this._pickNext}
                      ></ha-icon-button-next>
                    `:L}
                ${w}
              </div>
            `}
      </div>
    `;var E,A;const D=["energy-period-selector","compact"===_?"compact-mode":"standard-mode"].filter(Boolean).join(" ");return j`
      <div class="${D}">
        ${$}
        ${k}
        ${S}
      </div>
    `}_startDateChanged(t){this._setDate(new Date(t.detail.value))}_endDateChanged(t){this._startDate&&new Date(t.detail.value)>this._startDate&&this._setDate(this._startDate,new Date(t.detail.value))}_handleView(t){this._period=t.detail.value;const e=Pt(),o=!this._startDate||function(t,e){ut(2,arguments);var o=ht(t).getTime(),i=ht(e.start).getTime(),n=ht(e.end).getTime();if(!(i<=n))throw new RangeError("Invalid interval");return o>=i&&o<=n}(e,{start:this._startDate,end:this._endDate||Ct()})?e:this._startDate,i=jt(this.hass.locale);this._setDate("day"===this._period?wt(o):"week"===this._period?vt(o,{weekStartsOn:i}):"month"===this._period?Dt(o):"year"===this._period?Tt(o):this._startDate||Pt(),"custom"===this._period?this._endDate:void 0)}_pickToday(){const t=jt(this.hass.locale);this._setDate("day"===this._period?Pt():"week"===this._period?vt(new Date,{weekStartsOn:t}):"month"===this._period?Dt(new Date):Tt(new Date))}_pickPrevious(){const t=++this._lastClickId;this._clickDebounceTimer&&clearTimeout(this._clickDebounceTimer),this._clickDebounceTimer=window.setTimeout(()=>{this._processPickPrevious(t)},300)}_processPickPrevious(t){if(this._isProcessingClick)return;this._isProcessingClick=!0;const e="day"===this._period?mt(this._startDate,-1):"week"===this._period?$t(this._startDate,-1):"month"===this._period?gt(this._startDate,-1):"year"===this._period?kt(this._startDate,-1):mt(this._startDate,-1);this._startDate&&Math.abs(e.getTime()-this._startDate.getTime())<1e3?this._isProcessingClick=!1:(this._userActionTimestamp=Date.now(),this._isUserAction=!0,this._setDate(e),setTimeout(()=>{this._isProcessingClick=!1},500))}_pickNext(){const t=++this._lastClickId;this._clickDebounceTimer&&clearTimeout(this._clickDebounceTimer),this._clickDebounceTimer=window.setTimeout(()=>{this._processPickNext(t)},300)}_processPickNext(t){if(this._isProcessingClick)return;this._isProcessingClick=!0;const e="day"===this._period?mt(this._startDate,1):"week"===this._period?$t(this._startDate,1):"month"===this._period?gt(this._startDate,1):"year"===this._period?kt(this._startDate,1):mt(this._startDate,1);this._startDate&&Math.abs(e.getTime()-this._startDate.getTime())<1e3?this._isProcessingClick=!1:(this._userActionTimestamp=Date.now(),this._isUserAction=!0,this._setDate(e),setTimeout(()=>{this._isProcessingClick=!1},500))}_setDate(t,e,o=!1){this._startDate=t;const i=jt(this.hass.locale),n="day"===this._period?At(t):"week"===this._period?function(t,e){var o,i,n,r,a,s,c,l;ut(1,arguments);var d=bt(),u=dt(null!==(o=null!==(i=null!==(n=null!==(r=null==e?void 0:e.weekStartsOn)&&void 0!==r?r:null==e||null===(a=e.locale)||void 0===a||null===(s=a.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:d.weekStartsOn)&&void 0!==i?i:null===(c=d.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=ht(t),h=p.getDay(),m=6+(h<u?-7:0)-(h-u);return p.setDate(p.getDate()+m),p.setHours(23,59,59,999),p}(t,{weekStartsOn:i}):"month"===this._period?function(t){ut(1,arguments);var e=ht(t),o=e.getMonth();return e.setFullYear(e.getFullYear(),o+1,0),e.setHours(23,59,59,999),e}(t):"year"===this._period?function(t){ut(1,arguments);var e=ht(t),o=e.getFullYear();return e.setFullYear(o+1,0,0),e.setHours(23,59,59,999),e}(t):"custom"===this._period&&e?At(e):this._endDate||Ct(),r=ee(this.hass,{key:this.collectionKey});r.setPeriod(t,n),r.refresh(),o||this._syncToEntity()}_updateDates(t){this._compare=void 0!==t.startCompare,this._startDate=t.start,this._endDate=t.end||Ct();const e=Et(this._endDate,this._startDate||Ct());this._period="custom"!==this._period?e<1?"day":6===e?"week":e>26&&e<31?"month":364===e||365===e?"year":"custom":"custom"}_toggleCompare(){this._compare=!this._compare;const t=ee(this.hass,{key:this.collectionKey});t.setCompare(this._compare),t.refresh()}_handleEntityStateChange(t){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.sync_entity)||t.data.entity_id!==this._config.sync_entity)return;const o=this._config.sync_direction||"both";if("from-entity"!==o&&"both"!==o)return;const i=Date.now();if(i-this._lastSyncFromEntityTimestamp<500)return;if(i-this._userActionTimestamp<1e3)return;if(this._isUserAction)return;const n=t.data.new_state;if(!n||!n.attributes)return;const r=this._parseEntityDateTime(n);r&&(this._startDate&&Math.abs(r.getTime()-this._startDate.getTime())<1e3||(this._lastSyncFromEntityTimestamp=i,this._setDate(r,void 0,!0)))}_parseEntityDateTime(t){try{if(t.attributes.has_date&&t.attributes.has_time){const e=t.attributes.year+"-"+String(t.attributes.month).padStart(2,"0")+"-"+String(t.attributes.day).padStart(2,"0"),o=String(t.attributes.hour).padStart(2,"0")+":"+String(t.attributes.minute).padStart(2,"0")+":00";return new Date(e+"T"+o)}if(t.attributes.has_date){const e=t.attributes.year+"-"+String(t.attributes.month).padStart(2,"0")+"-"+String(t.attributes.day).padStart(2,"0");return new Date(e+"T00:00:00")}if("string"==typeof t.state){const e=new Date(t.state);if(!isNaN(e.getTime()))return e}return null}catch(t){return console.warn("Failed to parse entity date:",t),null}}_syncToEntity(){var t;if(!(null===(t=this._config)||void 0===t?void 0:t.sync_entity)||!this._startDate)return;const e=this._config.sync_direction||"both";if("to-entity"!==e&&"both"!==e)return;const o=Date.now();if(o-this._lastSyncToEntityTimestamp<500)return;this._lastSyncToEntityTimestamp=o;const i=this._formatDateForEntity(this._startDate);i&&this.hass.callService("input_datetime","set_datetime",Object.assign({entity_id:this._config.sync_entity},i)).then(()=>{setTimeout(()=>{this._isUserAction=!1},2e3)}).catch(t=>{console.warn("Failed to sync date to entity:",t),this._isUserAction=!1})}_formatDateForEntity(t){try{const e=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return{datetime:`${e}-${o}-${i} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:00`}}catch(t){return console.warn("Failed to format date for entity:",t),null}}_renderPeriodButtons(t){return j`
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
    `}_onSelectorUpdated(){this._forceButtonStyling(),setTimeout(()=>{this._forceButtonStyling()},500)}_forceButtonStyling(){setTimeout(()=>{var t,e;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-selector");o&&o.querySelectorAll("mwc-button").forEach(t=>{t.style.setProperty("--mdc-button-height","20px","important"),t.style.setProperty("--mdc-button-min-width","40px","important"),t.style.setProperty("--mdc-typography-button-font-size","11px","important"),t.style.setProperty("--mdc-typography-button-font-weight","500","important"),t.style.setProperty("--mdc-typography-button-text-transform","uppercase","important"),t.style.setProperty("--mdc-button-outline-color","#202124","important"),t.style.setProperty("--mdc-theme-primary","#d2d3d3","important"),t.style.height="20px",t.style.minWidth="40px",t.style.fontSize="11px",t.style.fontWeight="500",t.style.textTransform="uppercase",t.style.border="1px solid #202124"});const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".navigation-controls ha-icon-button, .navigation-controls ha-icon-button-prev, .navigation-controls ha-icon-button-next");null==i||i.forEach(t=>{t.style.setProperty("--mdc-icon-button-size","20px","important"),t.style.height="20px",t.style.width="20px",t.style.minHeight="20px",t.style.minWidth="20px",t.style.maxHeight="20px",t.style.maxWidth="20px",t.style.padding="0",t.style.margin="0",t.style.lineHeight="20px",t.style.display="inline-flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.verticalAlign="middle",t.style.position="relative",t.style.top="0",t.style.transform="none",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.querySelectorAll("button, mwc-icon-button, .mdc-icon-button").forEach(t=>{t.style.height="20px",t.style.width="20px",t.style.minHeight="20px",t.style.minWidth="20px",t.style.maxHeight="20px",t.style.maxWidth="20px",t.style.padding="0",t.style.margin="0",t.style.display="inline-flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.verticalAlign="middle",t.style.setProperty("--mdc-icon-button-size","20px","important")})})},100)}updated(t){super.updated(t),this._onSelectorUpdated()}};var De,Te;Ae.styles=Ee,t([st({attribute:!1})],Ae.prototype,"hass",void 0),t([ct()],Ae.prototype,"_config",void 0),t([st()],Ae.prototype,"collectionKey",void 0),t([ct()],Ae.prototype,"_startDate",void 0),t([ct()],Ae.prototype,"_endDate",void 0),t([ct()],Ae.prototype,"_period",void 0),t([ct()],Ae.prototype,"_compare",void 0),t([ct()],Ae.prototype,"_lastSyncToEntityTimestamp",void 0),t([ct()],Ae.prototype,"_lastSyncFromEntityTimestamp",void 0),t([ct()],Ae.prototype,"_userActionTimestamp",void 0),t([ct()],Ae.prototype,"_isUserAction",void 0),t([ct()],Ae.prototype,"_isProcessingClick",void 0),Ae=t([rt("energy-period-selector-base")],Ae),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(De||(De={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Te||(Te={}));var Ce=function(t,e,o,i){i=i||{},o=null==o?{}:o;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=o,t.dispatchEvent(n),n},Pe="0.2.4";console.groupCollapsed(`%c⚡ Energy Period Selector Plus v${Pe} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/flixlix/energy-period-selector-plus"),console.groupEnd();const Me=function(t,e,o){var i;return void 0===o&&(o=!1),function(){var e=[].slice.call(arguments),n=this,r=o&&!i;clearTimeout(i),i=setTimeout(function(){i=null,o||t.apply(n,e)},6e4),r&&t.apply(n,e)}}(t=>{console.log(`%c⚡ Energy Period Selector Plus v${Pe} %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")});!function(){const t=window;t.customCards=t.customCards||[],t.customCards.push(Object.assign(Object.assign({},{type:"energy-period-selector-plus",name:"Energy Period Selector Plus",description:"A custom card to change the Energy Period of your Energy Data."}),{preview:!0,documentationURL:"https://github.com/flixlix/energy-period-selector-plus"}))}();let He=class extends it{getCardSize(){return 1}static async getConfigElement(){return await Promise.resolve().then(function(){return Qe}),document.createElement("energy-period-selector-editor")}setConfig(t){this._config=t}render(){var t,e,o,i;if(!this.hass||!this._config)return Me(ke("common.invalid_configuration")||"Invalid configuration"),L;const n="compact"===((null===(t=this._config)||void 0===t?void 0:t.layout_mode)||"standard"),r=j` <energy-period-selector-base .hass=${this.hass} ._config=${this._config} .collectionKey=${null===(e=this._config)||void 0===e?void 0:e.collection_key}></energy-period-selector-base> `;return n?r:(null===(o=this._config)||void 0===o?void 0:o.card_background)?j` <ha-card .header=${null===(i=this._config)||void 0===i?void 0:i.title}> ${r}</ha-card> `:j` ${r} `}};He.styles=Se,t([st({attribute:!1})],He.prototype,"hass",void 0),t([st({attribute:!1})],He.prototype,"locale",void 0),t([ct()],He.prototype,"_config",void 0),He=t([rt("energy-period-selector-plus")],He);class ze extends TypeError{constructor(t,e){let o;const{message:i,explanation:n,...r}=t,{path:a}=t,s=0===a.length?i:`At path: ${a.join(".")} -- ${i}`;super(n??s),null!=n&&(this.cause=s),Object.assign(this,r),this.name=this.constructor.name,this.failures=()=>o??(o=[t,...e()])}}function Ne(t){return"object"==typeof t&&null!=t}function Oe(t){return Ne(t)&&!Array.isArray(t)}function Ie(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function je(t,e,o,i){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:r}=e,{type:a}=o,{refinement:s,message:c=`Expected a value of type \`${a}\`${s?` with refinement \`${s}\``:""}, but received: \`${Ie(i)}\``}=t;return{value:i,type:a,refinement:s,key:n[n.length-1],path:n,branch:r,...t,message:c}}function*Re(t,e,o,i){(function(t){return Ne(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=je(n,e,o,i);t&&(yield t)}}function*Le(t,e,o={}){const{path:i=[],branch:n=[t],coerce:r=!1,mask:a=!1}=o,s={path:i,branch:n,mask:a};r&&(t=e.coercer(t,s));let c="valid";for(const i of e.validator(t,s))i.explanation=o.message,c="not_valid",yield[i,void 0];for(let[l,d,u]of e.entries(t,s)){const e=Le(d,u,{path:void 0===l?i:[...i,l],branch:void 0===l?n:[...n,d],coerce:r,mask:a,message:o.message});for(const o of e)o[0]?(c=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):r&&(d=o[1],void 0===l?t=d:t instanceof Map?t.set(l,d):t instanceof Set?t.add(d):Ne(t)&&(void 0!==d||l in t)&&(t[l]=d))}if("not_valid"!==c)for(const i of e.refiner(t,s))i.explanation=o.message,c="not_refined",yield[i,void 0];"valid"===c&&(yield[void 0,t])}class Be{constructor(t){const{type:e,schema:o,validator:i,refiner:n,coercer:r=t=>t,entries:a=function*(){}}=t;this.type=e,this.schema=o,this.entries=a,this.coercer=r,this.validator=i?(t,e)=>Re(i(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>Re(n(t,e),e,this,t):()=>[]}assert(t,e){return Ue(t,this,e)}create(t,e){return function(t,e,o){const i=Ve(t,e,{coerce:!0,message:o});if(i[0])throw i[0];return i[1]}(t,this,e)}is(t){return function(t,e){return!Ve(t,e)[0]}(t,this)}mask(t,e){return function(t,e,o){const i=Ve(t,e,{coerce:!0,mask:!0,message:o});if(i[0])throw i[0];return i[1]}(t,this,e)}validate(t,e={}){return Ve(t,this,e)}}function Ue(t,e,o){const i=Ve(t,e,{message:o});if(i[0])throw i[0]}function Ve(t,e,o={}){const i=Le(t,e,o),n=function(t){const{done:e,value:o}=t.next();return e?void 0:o}(i);if(n[0]){return[new ze(n[0],function*(){for(const t of i)t[0]&&(yield t[0])}),void 0]}return[void 0,n[1]]}function Fe(t,e){return new Be({type:t,schema:null,validator:e})}function We(){return Fe("any",()=>!0)}function Ke(){return Fe("boolean",t=>"boolean"==typeof t)}function Ye(t){const e=t?Object.keys(t):[],o=Fe("never",()=>!1);return new Be({type:"object",schema:t||null,*entries(i){if(t&&Ne(i)){const n=new Set(Object.keys(i));for(const o of e)n.delete(o),yield[o,i[o],t[o]];for(const t of n)yield[t,i[t],o]}},validator:t=>Oe(t)||`Expected an object, but received: ${Ie(t)}`,coercer(e,o){if(!Oe(e))return e;const i={...e};if(o.mask&&t)for(const e in i)void 0===t[e]&&delete i[e];return i}})}function Ze(t){return new Be({...t,validator:(e,o)=>void 0===e||t.validator(e,o),refiner:(e,o)=>void 0===e||t.refiner(e,o)})}function Ge(){return Fe("string",t=>"string"==typeof t||`Expected a string, but received: ${Ie(t)}`)}const Je=async()=>{var t,e;if(customElements.get("ha-form"))return;const o=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));if(!o)return;const i=await o.createCardElement({type:"entity"});i&&await i.getConfigElement()};let qe=class extends it{constructor(){super(...arguments),this._schema=Ut((t,e)=>[{type:"grid",name:"",schema:[{name:"card_background",selector:{boolean:{}}},{name:"prev_next_buttons",selector:{boolean:{}}}]},{name:"layout_mode",selector:{select:{options:[{value:"standard",label:ke("editor.fields.layout_mode_options.standard")},{value:"compact",label:ke("editor.fields.layout_mode_options.compact")}],mode:"dropdown"}}},{type:"grid",name:"",schema:[{name:"compare_button_type",selector:{select:{options:[{value:"",label:""},{value:"icon",label:ke("editor.fields.compare_button_options.icon")},{value:"text",label:ke("editor.fields.compare_button_options.text")}],mode:"dropdown"}}},...t?[{name:"compare_button_label",selector:{text:{}}}]:[]]},{name:"today_button_type",selector:{select:{options:[{value:!1,label:""},{value:"icon",label:ke("editor.fields.compare_button_options.icon")},{value:"text",label:ke("editor.fields.compare_button_options.text")}],mode:"dropdown"}}},{type:"grid",name:"",schema:[{type:"multi_select",options:{day:ke("editor.fields.period_buttons_options.day"),week:ke("editor.fields.period_buttons_options.week"),month:ke("editor.fields.period_buttons_options.month"),year:ke("editor.fields.period_buttons_options.year"),custom:ke("editor.fields.period_buttons_options.custom")},name:"period_buttons",default:["day","week","month","year"]},...e?[{name:"custom_period_label",selector:{text:{}}}]:[]]}]),this._computeLabelCallback=t=>ke(`editor.fields.${t.name}`)||`not found: ${t.name}`}async setConfig(t){Ue(t,function(...t){const e="type"===t[0].type,o=t.map(t=>t.schema),i=Object.assign({},...o);return e?function(t){const e=Object.keys(t);return new Be({type:"type",schema:t,*entries(o){if(Ne(o))for(const i of e)yield[i,o[i],t[i]]},validator:t=>Oe(t)||`Expected an object, but received: ${Ie(t)}`,coercer:t=>Oe(t)?{...t}:t})}(i):Ye(i)}(Ye({type:Ge(),view_layout:Ze(Ge())}),Ye({card_background:Ze(Ke()),today_button:Ze(Ke()),prev_next_buttons:Ze(Ke()),compare_button_type:Ze(Ge()),today_button_type:Ze(We()),period_buttons:Ze(We()),custom_period_label:Ze(Ge()),compare_button_label:Ze(Ge()),sync_entity:Ze(Ge()),sync_direction:Ze(Ge()),layout_mode:Ze(Ge())}))),this._config=t}connectedCallback(){super.connectedCallback(),Je()}render(){var t,e,o,i,n,r,a,s,c,l;if(!this.hass||!this._config)return L;const d=Object.assign(Object.assign({},this._config),{card_background:null!==(t=this._config.card_background)&&void 0!==t&&t,today_button:null===(e=this._config.today_button)||void 0===e||e,prev_next_buttons:null===(o=this._config.prev_next_buttons)||void 0===o||o,compare_button_type:null!==(i=this._config.compare_button_type)&&void 0!==i?i:"",today_button_type:null!==(n=this._config.today_button_type)&&void 0!==n?n:"text",period_buttons:null!==(r=this._config.period_buttons)&&void 0!==r?r:["day","week","month","year"],sync_entity:null!==(a=this._config.sync_entity)&&void 0!==a?a:"",sync_direction:null!==(s=this._config.sync_direction)&&void 0!==s?s:"both",layout_mode:null!==(c=this._config.layout_mode)&&void 0!==c?c:"standard"}),u=this._schema("text"===d.compare_button_type,(null!==(l=d.period_buttons)&&void 0!==l?l:[]).includes("custom"));return j`
      <ha-form
        .hass=${this.hass}
        .data=${d}
        .schema=${u}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${this._renderSyncRow(d)}
    `}_valueChanged(t){const e=null==t?void 0:t.detail.value;Ce(this,"config-changed",{config:e})}_renderSyncRow(t){var e,o;return j`
      <div class="two-col">
        <div class="field">
          <div class="caption">${ke("editor.fields.sync_entity")}</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{domain:["input_datetime"]}}}
            .value=${null!==(e=t.sync_entity)&&void 0!==e?e:""}
            @value-changed=${t=>this._patch("sync_entity",t.detail.value||"")}
          ></ha-selector>
        </div>

        <div class="field">
          <div class="caption">${ke("editor.fields.sync_direction")}</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{options:[{value:"both",label:ke("editor.fields.sync_direction_options.both")},{value:"to-entity",label:ke("editor.fields.sync_direction_options.to_entity")},{value:"from-entity",label:ke("editor.fields.sync_direction_options.from_entity")}],mode:"dropdown"}}}
            .value=${null!==(o=t.sync_direction)&&void 0!==o?o:"both"}
            @value-changed=${t=>this._patch("sync_direction",t.detail.value)}
          ></ha-selector>
        </div>
      </div>
    `}_patch(t,e){this._config=Object.assign(Object.assign({},this._config),{[t]:e}),Ce(this,"config-changed",{config:this._config})}static get styles(){return a`
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
      ha-select,
      ha-entity-picker {
        width: 100%;
      }
    `}};t([st({attribute:!1})],qe.prototype,"hass",void 0),t([ct()],qe.prototype,"_config",void 0),qe=t([rt("energy-period-selector-editor")],qe);var Qe=Object.freeze({__proto__:null,loadHaForm:Je,get EnergyPeriodSelectorEditor(){return qe}});export{He as EnergyPeriodSelectorPlus};
