(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.jQuery;var n=t.n(e),r=function(){function t(t){var e=this;this._insertTag=function(t){var n;n=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,n),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{n.insertRule(t,n.cssRules.length)}catch(t){}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)})),this.tags=[],this.ctr=0},t}(),o=Math.abs,s=String.fromCharCode,a=Object.assign;function i(t){return t.trim()}function l(t,e,n){return t.replace(e,n)}function c(t,e){return t.indexOf(e)}function d(t,e){return 0|t.charCodeAt(e)}function u(t,e,n){return t.slice(e,n)}function y(t){return t.length}function g(t){return t.length}function p(t,e){return e.push(t),t}var h=1,f=1,m=0,b=0,$=0,v="";function w(t,e,n,r,o,s,a){return{value:t,root:e,parent:n,type:r,props:o,children:s,line:h,column:f,length:a,return:""}}function k(t,e){return a(w("",null,null,"",null,null,0),t,{length:-t.length},e)}function x(){return $=b>0?d(v,--b):0,f--,10===$&&(f=1,h--),$}function C(){return $=b<m?d(v,b++):0,f++,10===$&&(f=1,h++),$}function S(){return d(v,b)}function B(){return b}function A(t,e){return u(v,t,e)}function F(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(t){return h=f=1,m=y(v=t),b=0,[]}function I(t){return v="",t}function _(t){return i(A(b-1,H(91===t?t+2:40===t?t+1:t)))}function j(t){for(;($=S())&&$<33;)C();return F(t)>2||F($)>3?"":" "}function E(t,e){for(;--e&&C()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return A(t,B()+(e<6&&32==S()&&32==C()))}function H(t){for(;C();)switch($){case t:return b;case 34:case 39:34!==t&&39!==t&&H($);break;case 40:41===t&&H(t);break;case 92:C()}return b}function R(t,e){for(;C()&&t+$!==57&&(t+$!==84||47!==S()););return"/*"+A(e,b-1)+"*"+s(47===t?t:C())}function z(t){for(;!F(S());)C();return A(t,b)}var P="-ms-",L="-moz-",N="-webkit-",D="comm",G="rule",M="decl",T="@keyframes";function W(t,e){for(var n="",r=g(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function q(t,e,n,r){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case M:return t.return=t.return||t.value;case D:return"";case T:return t.return=t.value+"{"+W(t.children,r)+"}";case G:t.value=t.props.join(",")}return y(n=W(t.children,r))?t.return=t.value+"{"+n+"}":""}function V(t){return I(Q("",null,null,null,[""],t=O(t),0,[0],t))}function Q(t,e,n,r,o,a,i,u,g){for(var h=0,f=0,m=i,b=0,$=0,v=0,w=1,k=1,A=1,F=0,O="",I=o,H=a,P=r,L=O;k;)switch(v=F,F=C()){case 40:if(108!=v&&58==d(L,m-1)){-1!=c(L+=l(_(F),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:L+=_(F);break;case 9:case 10:case 13:case 32:L+=j(v);break;case 92:L+=E(B()-1,7);continue;case 47:switch(S()){case 42:case 47:p(Z(R(C(),B()),e,n),g);break;default:L+="/"}break;case 123*w:u[h++]=y(L)*A;case 125*w:case 59:case 0:switch(F){case 0:case 125:k=0;case 59+f:-1==A&&(L=l(L,/\f/g,"")),$>0&&y(L)-m&&p($>32?J(L+";",r,n,m-1):J(l(L," ","")+";",r,n,m-2),g);break;case 59:L+=";";default:if(p(P=U(L,e,n,h,f,o,u,O,I=[],H=[],m),a),123===F)if(0===f)Q(L,e,P,P,I,a,m,u,H);else switch(99===b&&110===d(L,3)?100:b){case 100:case 108:case 109:case 115:Q(t,P,P,r&&p(U(t,P,P,0,0,o,u,O,o,I=[],m),H),o,H,m,u,r?I:H);break;default:Q(L,P,P,P,[""],H,0,u,H)}}h=f=$=0,w=A=1,O=L="",m=i;break;case 58:m=1+y(L),$=v;default:if(w<1)if(123==F)--w;else if(125==F&&0==w++&&125==x())continue;switch(L+=s(F),F*w){case 38:A=f>0?1:(L+="\f",-1);break;case 44:u[h++]=(y(L)-1)*A,A=1;break;case 64:45===S()&&(L+=_(C())),b=S(),f=m=y(O=L+=z(B())),F++;break;case 45:45===v&&2==y(L)&&(w=0)}}return a}function U(t,e,n,r,s,a,c,d,y,p,h){for(var f=s-1,m=0===s?a:[""],b=g(m),$=0,v=0,k=0;$<r;++$)for(var x=0,C=u(t,f+1,f=o(v=c[$])),S=t;x<b;++x)(S=i(v>0?m[x]+" "+C:l(C,/&\f/g,m[x])))&&(y[k++]=S);return w(t,e,n,0===s?G:d,y,p,h)}function Z(t,e,n){return w(t,e,n,D,s($),u(t,2,-2),0)}function J(t,e,n,r){return w(t,e,n,M,u(t,0,r),u(t,r+1,-1),r)}var K=function(t,e,n){for(var r=0,o=0;r=o,o=S(),38===r&&12===o&&(e[n]=1),!F(o);)C();return A(t,b)},X=new WeakMap,Y=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,n=t.parent,r=t.column===n.column&&t.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||X.get(n))&&!r){X.set(t,!0);for(var o=[],a=function(t,e){return I(function(t,e){var n=-1,r=44;do{switch(F(r)){case 0:38===r&&12===S()&&(e[n]=1),t[n]+=K(b-1,e,n);break;case 2:t[n]+=_(r);break;case 4:if(44===r){t[++n]=58===S()?"&\f":"",e[n]=t[n].length;break}default:t[n]+=s(r)}}while(r=C());return t}(O(t),e))}(e,o),i=n.props,l=0,c=0;l<a.length;l++)for(var d=0;d<i.length;d++,c++)t.props[c]=o[l]?a[l].replace(/&\f/g,i[d]):i[d]+" "+a[l]}}},tt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function et(t,e){switch(function(t,e){return 45^d(t,0)?(((e<<2^d(t,0))<<2^d(t,1))<<2^d(t,2))<<2^d(t,3):0}(t,e)){case 5103:return N+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return N+t+L+t+P+t+t;case 6828:case 4268:return N+t+P+t+t;case 6165:return N+t+P+"flex-"+t+t;case 5187:return N+t+l(t,/(\w+).+(:[^]+)/,N+"box-$1$2"+P+"flex-$1$2")+t;case 5443:return N+t+P+"flex-item-"+l(t,/flex-|-self/,"")+t;case 4675:return N+t+P+"flex-line-pack"+l(t,/align-content|flex-|-self/,"")+t;case 5548:return N+t+P+l(t,"shrink","negative")+t;case 5292:return N+t+P+l(t,"basis","preferred-size")+t;case 6060:return N+"box-"+l(t,"-grow","")+N+t+P+l(t,"grow","positive")+t;case 4554:return N+l(t,/([^-])(transform)/g,"$1"+N+"$2")+t;case 6187:return l(l(l(t,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),t,"")+t;case 5495:case 3959:return l(t,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return l(l(t,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+P+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+t+t;case 4095:case 3583:case 4068:case 2532:return l(t,/(.+)-inline(.+)/,N+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(t)-1-e>6)switch(d(t,e+1)){case 109:if(45!==d(t,e+4))break;case 102:return l(t,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+L+(108==d(t,e+3)?"$3":"$2-$3"))+t;case 115:return~c(t,"stretch")?et(l(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==d(t,e+1))break;case 6444:switch(d(t,y(t)-3-(~c(t,"!important")&&10))){case 107:return l(t,":",":"+N)+t;case 101:return l(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===d(t,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+P+"$2box$3")+t}break;case 5936:switch(d(t,e+11)){case 114:return N+t+P+l(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return N+t+P+l(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return N+t+P+l(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return N+t+P+t+t}return t}var nt=[function(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case M:t.return=et(t.value,t.length);break;case T:return W([k(t,{value:l(t.value,"@","@"+N)})],r);case G:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t){return(t=/(::plac\w+|:read-\w+)/.exec(t))?t[0]:t}(e)){case":read-only":case":read-write":return W([k(t,{props:[l(e,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return W([k(t,{props:[l(e,/:(plac\w+)/,":"+N+"input-$1")]}),k(t,{props:[l(e,/:(plac\w+)/,":-moz-$1")]}),k(t,{props:[l(e,/:(plac\w+)/,P+"input-$1")]})],r)}return""}))}}],rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ot(t){var e=Object.create(null);return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}var st=!1,at=/[A-Z]|^ms/g,it=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lt=function(t){return 45===t.charCodeAt(1)},ct=function(t){return null!=t&&"boolean"!=typeof t},dt=ot((function(t){return lt(t)?t:t.replace(at,"-$&").toLowerCase()})),ut=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(it,(function(t,e,n){return pt={name:e,styles:n,next:pt},e}))}return 1===rt[t]||lt(t)||"number"!=typeof e||0===e?e:e+"px"},yt="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function gt(t,e,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return pt={name:o.name,styles:o.styles,next:pt},o.name;var s=n;if(void 0!==s.styles){var a=s.next;if(void 0!==a)for(;void 0!==a;)pt={name:a.name,styles:a.styles,next:pt},a=a.next;return s.styles+";"}return function(t,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=gt(t,e,n[o])+";";else for(var s in n){var a=n[s];if("object"!=typeof a){var i=a;null!=e&&void 0!==e[i]?r+=s+"{"+e[i]+"}":ct(i)&&(r+=dt(s)+":"+ut(s,i)+";")}else{if("NO_COMPONENT_SELECTOR"===s&&st)throw new Error(yt);if(!Array.isArray(a)||"string"!=typeof a[0]||null!=e&&void 0!==e[a[0]]){var l=gt(t,e,a);switch(s){case"animation":case"animationName":r+=dt(s)+":"+l+";";break;default:r+=s+"{"+l+"}"}}else for(var c=0;c<a.length;c++)ct(a[c])&&(r+=dt(s)+":"+ut(s,a[c])+";")}}return r}(t,e,n);case"function":if(void 0!==t){var i=pt,l=n(t);return pt=i,gt(t,e,l)}}var c=n;if(null==e)return c;var d=e[c];return void 0!==d?d:c}var pt,ht=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function ft(t,e,n){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var r=!0,o="";pt=void 0;var s=t[0];null==s||void 0===s.raw?(r=!1,o+=gt(n,e,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=gt(n,e,t[a]),r&&(o+=s[a]);ht.lastIndex=0;for(var i,l="";null!==(i=ht.exec(o));)l+="-"+i[1];var c=function(t){for(var e,n=0,r=0,o=t.length;o>=4;++r,o-=4)e=1540483477*(65535&(e=255&t.charCodeAt(r)|(255&t.charCodeAt(++r))<<8|(255&t.charCodeAt(++r))<<16|(255&t.charCodeAt(++r))<<24))+(59797*(e>>>16)<<16),n=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&t.charCodeAt(r+2))<<16;case 2:n^=(255&t.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+l;return{name:c,styles:o,next:pt}}function mt(t,e,n){var r="";return n.split(" ").forEach((function(n){void 0!==t[n]?e.push(t[n]+";"):r+=n+" "})),r}function bt(t,e){if(void 0===t.inserted[e.name])return t.insert("",e,t.sheet,!0)}function $t(t,e,n){var r=[],o=mt(t,r,n);return r.length<2?n:o+e(r)}var vt=function t(e){for(var n="",r=0;r<e.length;r++){var o=e[r];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var a in s="",o)o[a]&&a&&(s&&(s+=" "),s+=a);break;default:s=o}s&&(n&&(n+=" "),n+=s)}}return n},wt=function(){var t=function(t){var e=t.key;if("css"===e){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var o,s,a=t.stylisPlugins||nt,i={},l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),n=1;n<e.length;n++)i[e[n]]=!0;l.push(t)}));var c,d,u,y,p=[q,(y=function(t){c.insert(t)},function(t){t.root||(t=t.return)&&y(t)})],h=(d=[Y,tt].concat(a,p),u=g(d),function(t,e,n,r){for(var o="",s=0;s<u;s++)o+=d[s](t,e,n,r)||"";return o});s=function(t,e,n,r){c=n,W(V(t?t+"{"+e.styles+"}":e.styles),h),r&&(f.inserted[e.name]=!0)};var f={key:e,sheet:new r({key:e,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return f.sheet.hydrate(l),f}({key:"css"});t.sheet.speedy=function(t){this.isSpeedy=t},t.compat=!0;var e=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=ft(n,t.registered,void 0);return function(t,e){!function(t,e){var n=t.key+"-"+e.name;void 0===t.registered[n]&&(t.registered[n]=e.styles)}(t,e);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var r=e;do{t.insert(e===r?"."+n:"",r,t.sheet,!0),r=r.next}while(void 0!==r)}}(t,o),t.key+"-"+o.name};return{css:e,cx:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return $t(t.registered,e,vt(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=ft(n,t.registered);bt(t,o)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=ft(n,t.registered),s="animation-"+o.name;return bt(t,{name:o.name,styles:"@keyframes "+s+"{"+o.styles+"}"}),s},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:mt.bind(null,t.registered),merge:$t.bind(null,t.registered,e)}}();wt.flush,wt.hydrate,wt.cx,wt.merge,wt.getRegisteredStyles,wt.injectGlobal,wt.keyframes,wt.css,wt.sheet,wt.cache;const kt=(t={},e="",n=!1)=>{let r="";for(const[o,s]of Object.entries(t))r+=`${e}${o}: ${s} ${n?"!important":""}; `;return r},xt=t=>{let e="";return"string"==typeof t?.width&&(e+=`border-width: ${t?.width};`),t?.style||(e+="border-style: solid;"),"string"==typeof t?.style&&t?.style&&(e+=`border-style: ${t?.style};`),"string"==typeof t?.color&&t?.color&&(e+=`border-color: ${t?.color};`),t?.top?.width&&(e+=`border-top-width: ${t?.top?.width};`),t?.right?.width&&(e+=`border-right-width: ${t?.right?.width};`),t?.bottom?.width&&(e+=`border-bottom-width: ${t?.bottom?.width};`),t?.left?.width&&(e+=`border-left-width: ${t?.left?.width};`),t?.top?.color&&(e+=`border-top-color: ${t?.top?.color};`),t?.right?.color&&(e+=`border-right-color: ${t?.right?.color};`),t?.bottom?.color&&(e+=`border-bottom-color: ${t?.bottom?.color};`),t?.left?.color&&(e+=`border-left-color: ${t?.left?.color};`),t?.top?.style&&(e+=`border-top-style: ${t?.top?.style};`),t?.right?.style&&(e+=`border-right-style: ${t?.right?.style};`),t?.bottom?.style&&(e+=`border-bottom-style: ${t?.bottom?.style};`),t?.left?.style&&(e+=`border-left-style: ${t?.left?.style};`),e},Ct=t=>{let e="";return"string"==typeof t&&(e+=`border-radius: ${t};`),t?.topLeft&&(e+=`border-top-left-radius: ${t?.topLeft};`),t?.topRight&&(e+=`border-top-right-radius: ${t?.topRight};`),t?.bottomRight&&(e+=`border-bottom-right-radius: ${t?.bottomRight};`),t?.bottomLeft&&(e+=`border-bottom-left-radius: ${t?.bottomLeft};`),e};n()((function(t){function e(e){const n=window?.alpc_vars?.site_url;if(e.origin!==n)return!1;const r=e.data;let o="";if(r?.styles?.eyeIcon&&(o+=`.alpc-body  .wp-hide-pw span{\n\t\t\t\tcolor: ${r?.styles?.eyeIcon?.textColor};\n\t\t\t}`),r?.styles?.eyeIcon&&(o+=`.alpc-body  .button.wp-hide-pw{\n\t\t\t${"before"===r?.styles?.eyeIcon?.eyeIconPosition?"left: 0px;":""}\n\t\t\t${r?.styles?.eyeIcon?.backgroundColor?`\n\t\t\t\tbackground: ${r?.styles?.eyeIcon?.backgroundColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.eyeIcon?.width?`\n\t\t\t\twidth: ${r?.styles?.eyeIcon?.width}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.eyeIcon?.minHeight?`\n\t\t\t\tmin-height: ${r?.styles?.eyeIcon?.minHeight}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.eyeIcon?.padding?kt(r?.styles?.eyeIcon?.padding,"padding-"):""}\n\n\t\t\t${r?.styles?.eyeIcon?.margin?kt(r?.styles?.eyeIcon?.margin,"margin-"):""}\n\t\t\t}`,o+=`.alpc-body .wp-pwd input.password-input{\n\t\t\t\t${"before"===r?.styles?.eyeIcon?.eyeIconPosition?"padding-left: 2.5rem; padding-right: 0;":""}\n\t\t\t}`),r?.styles?.dropdown&&(o+=`\n\t\t\tbody.alpc-body select, body.alpc-body #language-switcher select{\n\t\t\t${r?.styles?.dropdown?.textColor?`\n\t\t\t\tcolor: ${r?.styles?.dropdown?.textColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.dropdown?.backgroundColor?`\n\t\t\t\tbackground-color: ${r?.styles?.dropdown?.backgroundColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.dropdown?.width?`\n\t\t\t\twidth: ${r?.styles?.dropdown?.width}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.dropdown?.minHeight?`\n\t\t\t\tmin-height: ${r?.styles?.dropdown?.minHeight}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.dropdown?.padding?kt(r?.styles?.dropdown?.padding,"padding-"):""}\n\n\t\t\t${r?.styles?.dropdown?.margin?kt(r?.styles?.dropdown?.margin,"margin-"):""}\n\n\t\t\t${r?.styles?.dropdown?.borders?xt(r?.styles?.dropdown?.borders):""}\n\n\t\t\t${r?.styles?.dropdown?.radius?Ct(r?.styles?.dropdown?.radius):""}\n\t\t\t}`),r?.styles?.checkboxField){o+=`body.alpc-body input[type=checkbox] {\n\t\t\t${r?.styles?.checkboxField?.backgroundColor?`\n\t\t\t\tbackground: ${r?.styles?.checkboxField?.backgroundColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.checkboxField?.width?`\n\t\t\t\twidth: ${r?.styles?.checkboxField?.width}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.checkboxField?.minHeight?`\n\t\t\t\tmin-height: ${r?.styles?.checkboxField?.minHeight}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.checkboxField?.padding?kt(r?.styles?.checkboxField?.padding,"padding-",!0):""}\n\n\t\t\t${r?.styles?.checkboxField?.margin?kt(r?.styles?.checkboxField?.margin,"margin-"):""}\n\n\t\t\t${r?.styles?.checkboxField?.borders?xt(r?.styles?.checkboxField?.borders):""}\n\n\t\t\t${r?.styles?.checkboxField?.radius?Ct(r?.styles?.checkboxField?.radius):""}\n\t\t\t}`;const t=encodeURIComponent(`\n\t\t\t\t<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>\n\t\t\t\t\t<path d='M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z' fill='${r?.styles?.checkboxField?.iconColor}' color='${r?.styles?.checkboxField?.iconColor}'/>\n\t\t\t\t</svg>\n\t\t\t`);r?.styles?.checkboxField?.iconColor&&(o+=`\n\t\t\t\tinput[type=checkbox]:checked::before {\n\t\t\t\t\tbackground-image: url("data:image/svg+xml;utf8,${t}");\n\t\t\t\t\tcontent: " ";\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tbackground-size: 100% 100%;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tpadding: 3px;\n\t\t\t\t}`)}r?.styles?.secondaryButton?.normal&&(o+=`\n\t\t\t.alpc-body .button:not(.button-primary, .wp-hide-pw ) {\n\t\t\t${r?.styles?.secondaryButton?.normal?.textColor?`\n\t\t\t\tcolor: ${r?.styles?.secondaryButton?.normal?.textColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.color?`\n\t\t\t\tbackground-color: ${r?.styles?.secondaryButton?.normal?.color};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.width?`\n\t\t\t\twidth: ${r?.styles?.secondaryButton?.normal?.width}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.minHeight?`\n\t\t\t\tmin-height: ${r?.styles?.secondaryButton?.normal?.minHeight}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.padding?kt(r?.styles?.secondaryButton?.normal?.padding,"padding-"):""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.margin?kt(r?.styles?.secondaryButton?.normal?.margin,"margin-"):""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.borders?xt(r?.styles?.secondaryButton?.normal?.borders):""}\n\n\t\t\t${r?.styles?.secondaryButton?.normal?.radius?Ct(r?.styles?.secondaryButton?.normal?.radius):""}\n\t\t\t}`),r?.styles?.primaryButton?.normal&&(o+=`\n\t\t\t.alpc-body .button.button-primary {\n\t\t\t${r?.styles?.primaryButton?.normal?.textColor?`\n\t\t\t\tcolor: ${r?.styles?.primaryButton?.normal?.textColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.color?`\n\t\t\t\tbackground: ${r?.styles?.primaryButton?.normal?.color};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.width?`\n\t\t\t\twidth: ${r?.styles?.primaryButton?.normal?.width}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.minHeight?`\n\t\t\t\tmin-height: ${r?.styles?.primaryButton?.normal?.minHeight}px;\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.padding?kt(r?.styles?.primaryButton?.normal?.padding,"padding-"):""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.margin?kt(r?.styles?.primaryButton?.normal?.margin,"margin-"):""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.borders?xt(r?.styles?.primaryButton?.normal?.borders):""}\n\n\t\t\t${r?.styles?.primaryButton?.normal?.radius?Ct(r?.styles?.primaryButton?.normal?.radius):""}\n\t\t\t}`),r?.styles?.textField&&(o+=`.alpc-body input[type=text], .alpc-body input[type=password], .alpc-body input[type=email], .alpc-body .input{\n\t\t\t${r?.styles?.textField?.backgroundColor?`\n\t\t\t\tbackground-color: ${r?.styles?.textField?.backgroundColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.textField?.textColor?`\n\t\t\t\tcolor: ${r?.styles?.textField?.textColor};\n\t\t\t\t`:""}\n\n\t\t\t${r?.styles?.textField?.padding?kt(r?.styles?.textField?.padding,"padding-"):""}\n\n\t\t\t${r?.styles?.textField?.margin?kt(r?.styles?.textField?.margin,"margin-"):""}\n\n\t\t\t${r?.styles?.textField?.borders?xt(r?.styles?.textField?.borders):""}\n\n\t\t\t${r?.styles?.textField?.radius?Ct(r?.styles?.textField?.radius):""}\n\t\t\t}`),r?.styles?.form&&(o+=`\n\t\t\t.alpc-body #login{\n\t\t\t\t${r?.styles?.form?.width?`width: ${r?.styles?.form?.width}px;`:""}\n\t\t\t}\n\t\t\t`,o+=`\n\t\t\t.alpc-body #login > form{\n\t\t\t\t${r?.styles?.form?.color?`background: ${r?.styles?.form?.color};`:""}\n\n\t\t\t\t${r?.styles?.form?.textColor?`color: ${r?.styles?.form?.textColor};`:""}\n\n\t\t\t\t${r?.styles?.form?.minHeight?`min-height: ${r?.styles?.form?.minHeight}px;`:""}\n\n\t\t\t\t${r?.styles?.form?.borders?xt(r?.styles?.form?.borders):""}\n\n\t\t\t\t${r?.styles?.form?.radius?Ct(r?.styles?.form?.radius):""}\n\n\t\t\t\t${r?.styles?.form?.padding?kt(r?.styles?.form?.padding,"padding-"):""}\n\n\t\t\t\t${r?.styles?.form?.margin?kt(r?.styles?.form?.margin,"margin-"):""}\n\t\t\t}\n\t\t\t`),r?.styles?.logo?.disabled&&(o+="\n\t\t\t.alpc-body #login h1 a{\n\t\t\tdisplay:none;\n\t\t\t}\n\t\t\t"),r?.styles?.logo?.enableSiteLogo&&window?.alpc_vars?.site_logo&&(o+=`\n\t\t\t.alpc-body #login h1 a{\n\t\t\tbackground-image:url(${window?.alpc_vars?.site_logo});\n\t\t\t}\n\t\t\t`),!r?.styles?.logo?.enableSiteLogo&&r?.styles?.logo?.logoData?.url&&(o+=`\n\t\t\t.alpc-body #login h1 a{\n\t\t\tbackground-image:url(${r?.styles?.logo?.logoData?.url});\n\t\t\t}\n\t\t\t`),r?.styles?.logo&&(o+=`\n\t\t\t.alpc-body #login h1 a{\n\t\t\t\t${r?.styles?.logo?.width?`width: ${r?.styles?.logo?.width}px;`:""}\n\t\t\t\t${r?.styles?.logo?.minHeight?`height: ${r?.styles?.logo?.minHeight}px;`:""}\n\t\t\t\t${r?.styles?.logo?.margin?.top?`margin-top: ${r?.styles?.logo?.margin?.top};`:""}\n\t\t\t\t${r?.styles?.logo?.margin?.right?`margin-right: ${r?.styles?.logo?.margin?.right};`:""}\n\t\t\t\t${r?.styles?.logo?.margin?.bottom?`margin-bottom: ${r?.styles?.logo?.margin?.bottom};`:""}\n\t\t\t\t${r?.styles?.logo?.margin?.left?`margin-left: ${r?.styles?.logo?.margin?.left};`:""}\n\n\n\t\t\t\t${r?.styles?.logo?.padding?.top?`padding-top: ${r?.styles?.logo?.padding?.top};`:""}\n\t\t\t\t${r?.styles?.logo?.padding?.right?`padding-right: ${r?.styles?.logo?.padding?.right};`:""}\n\t\t\t\t${r?.styles?.logo?.padding?.bottom?`padding-bottom: ${r?.styles?.logo?.padding?.bottom};`:""}\n\t\t\t\t${r?.styles?.logo?.padding?.left?`padding-left: ${r?.styles?.logo?.padding?.left};`:""}\n\t\t\t}\n\t\t\t`),r?.styles?.background&&(o+=`\n\t\t\tbody:before,\n\t\t\t.alpc-body .alpc-login-wrap:before{\n\t\t\t\t${r?.styles?.background?.color?`background: ${r?.styles?.background?.color};`:""}\n\t\t\t\t${"number"==typeof r?.styles?.background?.backgroundOpacity?`opacity: ${r?.styles?.background?.backgroundOpacity};`:""}\n\t\t\t}\n\t\t\t`,r?.styles?.background?.enabledBackgroundImage&&(o+=`\n\t\t\t\tbody{\n\t\t\t\t\t${r?.styles?.background?.imageData?.url?`background-image: url( ${r?.styles?.background?.imageData?.url} );`:""}\n\t\t\t\t\t${r?.styles?.background?.repeat?`background-repeat: ${r?.styles?.background?.repeat} ;`:""}\n\t\t\t\t\t${r?.styles?.background?.size?`background-size:  ${r?.styles?.background?.size} ;`:""}\n\t\t\t\t\t${r?.styles?.background?.position?`background-position:  ${r?.styles?.background?.position} ;`:""}\n\t\t\t\t}\n\t\t\t\t`),r?.styles?.background?.enabledBackgroundVideo&&"media"===r?.styles?.background?.videoSource&&r?.styles?.background?.videoData?.url&&(o+=`\n\t\t\t\t\t#alpc-video-background {\n\t\t\t\t\t\t${r?.styles?.background?.videoSize?`object-fit:  ${r?.styles?.background?.videoSize} ;`:""}\n\n\t\t\t\t\t\t${r?.styles?.background?.videoObjectPosition?`object-position:  ${r?.styles?.background?.videoObjectPosition} ;`:""}\n\t\t\t\t\t}\n\t\t\t\t\t`)),r?.styles?.pageOptionsStyle?.textColor&&(o+=`\n\t\t\tbody.alpc-body{\n\t\t\tcolor:${r?.styles?.pageOptionsStyle?.textColor};\n\t\t\t}\n\t\t\t`),r?.styles?.pageOptionsStyle?.linkColor&&(o+=`\n\t\t\t#login #backtoblog a,\n\t\t\t#login #nav a, #login #nav a{\n\t\t\tcolor:${r?.styles?.pageOptionsStyle?.linkColor};\n\t\t\t}\n\t\t\t`),r?.styles?.pageOptionsStyle?.linkHoverColor&&(o+=`\n\t\t\t#login #backtoblog a:hover,\n\t\t\t#login #nav a:hover, #login #nav a:hover{\n\t\t\tcolor:${r?.styles?.pageOptionsStyle?.linkHoverColor};\n\t\t\t}\n\t\t\t`),t("style#alpc-login-ui-inline-inline-css").html(""),t("style#alpc-preview-style").html(o),t("style#alpc-custom-login-style-inline-css").html("");const s=r?.settings?.customScripts?.css?r?.settings?.customScripts?.css:"";t("style#alpc-preview-custom-style").html(s),t("#alpc-youtube-video-background").remove(),t("#alpc-video-background").remove(),r?.styles?.background?.enabledBackgroundVideo&&("youtube"===r?.styles?.background?.videoSource&&r?.styles?.background?.youtubeId&&t("body").append(`<iframe id="alpc-youtube-video-background" width="420" height="315" src="https://www.youtube.com/embed/${r?.styles?.background?.youtubeId}?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;playsinline=1"></iframe>`),"media"!==r?.styles?.background?.videoSource&&r?.styles?.background?.videoSource||!r?.styles?.background?.videoData?.url||t("body").append(`<video autoplay="" loop="" id="alpc-video-background" playsinline="" muted="">\n\t\t\t<source src="${r?.styles?.background?.videoData?.url}" type="video/mp4">\n\t\t\t</video>`))}t("head").append('<style id="alpc-preview-style"></style>'),t("head").append('<style id="alpc-preview-custom-style"></style>'),t("#alpc-youtube-video-background, #alpc-video-background").remove(),t(document).on("click","a",(()=>!1)),t(document).on("submit","form",(()=>!1)),window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e)}))})();