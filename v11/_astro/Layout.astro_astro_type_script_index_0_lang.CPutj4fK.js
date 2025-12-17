function Fd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Io={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Ud=Io.exports,_u;function jd(){return _u||(_u=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Ud,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,u=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,v={},w=v.toString,C=v.hasOwnProperty,x=C.toString,$=x.call(Object),z={},G=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},Q=function(c){return c!=null&&c===c.window},Z=e.document,pe={type:!0,src:!0,nonce:!0,noModule:!0};function ve(s,c,h){h=h||Z;var d,m,y=h.createElement("script");if(y.text=s,c)for(d in pe)m=c[d]||c.getAttribute&&c.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function xe(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[w.call(s)]||"object":typeof s}var Je="3.7.1",qe=/HTML$/i,l=function(s,c){return new l.fn.init(s,c)};l.fn=l.prototype={jquery:Je,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var c=l.merge(this.constructor(),s);return c.prevObject=this,c},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(c,h){return s.call(c,h,c)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,c){return(c+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,c){return c%2}))},eq:function(s){var c=this.length,h=+s+(s<0?c:0);return this.pushStack(h>=0&&h<c?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,c,h,d,m,y,E=arguments[0]||{},P=1,A=arguments.length,N=!1;for(typeof E=="boolean"&&(N=E,E=arguments[P]||{},P++),typeof E!="object"&&!G(E)&&(E={}),P===A&&(E=this,P--);P<A;P++)if((s=arguments[P])!=null)for(c in s)d=s[c],!(c==="__proto__"||E===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=E[c],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,E[c]=l.extend(N,y,d)):d!==void 0&&(E[c]=d));return E},l.extend({expando:"jQuery"+(Je+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var c,h;return!s||w.call(s)!=="[object Object]"?!1:(c=i(s),c?(h=C.call(c,"constructor")&&c.constructor,typeof h=="function"&&x.call(h)===$):!0)},isEmptyObject:function(s){var c;for(c in s)return!1;return!0},globalEval:function(s,c,h){ve(s,{nonce:c&&c.nonce},h)},each:function(s,c){var h,d=0;if(R(s))for(h=s.length;d<h&&c.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(c.call(s[d],d,s[d])===!1)break;return s},text:function(s){var c,h="",d=0,m=s.nodeType;if(!m)for(;c=s[d++];)h+=l.text(c);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,c){var h=c||[];return s!=null&&(R(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,c,h){return c==null?-1:_.call(c,s,h)},isXMLDoc:function(s){var c=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!qe.test(c||h&&h.nodeName||"HTML")},merge:function(s,c){for(var h=+c.length,d=0,m=s.length;d<h;d++)s[m++]=c[d];return s.length=m,s},grep:function(s,c,h){for(var d,m=[],y=0,E=s.length,P=!h;y<E;y++)d=!c(s[y],y),d!==P&&m.push(s[y]);return m},map:function(s,c,h){var d,m,y=0,E=[];if(R(s))for(d=s.length;y<d;y++)m=c(s[y],y,h),m!=null&&E.push(m);else for(y in s)m=c(s[y],y,h),m!=null&&E.push(m);return u(E)},guid:1,support:z}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,c){v["[object "+c+"]"]=c.toLowerCase()});function R(s){var c=!!s&&"length"in s&&s.length,h=xe(s);return G(s)||Q(s)?!1:h==="array"||c===0||typeof c=="number"&&c>0&&c-1 in s}function S(s,c){return s.nodeName&&s.nodeName.toLowerCase()===c.toLowerCase()}var V=r.pop,D=r.sort,L=r.splice,b="[\\x20\\t\\r\\n\\f]",We=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,c){var h=c&&c.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var cn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Ta(s,c){return c?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(cn,Ta)};var xt=Z,Pn=p;(function(){var s,c,h,d,m,y=Pn,E,P,A,N,q,H=l.expando,U=0,J=0,oe=fo(),Te=fo(),_e=fo(),Le=fo(),o=function(I,k){return I===k&&(m=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",g="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",T="\\["+b+"*("+g+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+g+"))|)"+b+"*\\]",M=":("+g+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+T+")*)|.*)\\)|)",O=new RegExp(b+"+","g"),Y=new RegExp("^"+b+"*,"+b+"*"),de=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Ue=new RegExp(b+"|>"),Ee=new RegExp(M),Fe=new RegExp("^"+g+"$"),$e={ID:new RegExp("^#("+g+")"),CLASS:new RegExp("^\\.("+g+")"),TAG:new RegExp("^("+g+"|[*])"),ATTR:new RegExp("^"+T),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},ut=/^(?:input|select|textarea|button)$/i,it=/^h\d$/i,He=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Hn=/[+~]/,wt=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),gn=function(I,k){var F="0x"+I.slice(1)-65536;return k||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},xd=function(){zn()},Dd=go(function(I){return I.disabled===!0&&S(I,"fieldset")},{dir:"parentNode",next:"legend"});function Nd(){try{return E.activeElement}catch{}}try{y.apply(r=a.call(xt.childNodes),xt.childNodes),r[xt.childNodes.length].nodeType}catch{y={apply:function(k,F){Pn.apply(k,a.call(F))},call:function(k){Pn.apply(k,a.call(arguments,1))}}}function Pe(I,k,F,j){var W,ee,ne,ae,re,we,fe,ge=k&&k.ownerDocument,Ie=k?k.nodeType:9;if(F=F||[],typeof I!="string"||!I||Ie!==1&&Ie!==9&&Ie!==11)return F;if(!j&&(zn(k),k=k||E,A)){if(Ie!==11&&(re=He.exec(I)))if(W=re[1]){if(Ie===9)if(ne=k.getElementById(W)){if(ne.id===W)return y.call(F,ne),F}else return F;else if(ge&&(ne=ge.getElementById(W))&&Pe.contains(k,ne)&&ne.id===W)return y.call(F,ne),F}else{if(re[2])return y.apply(F,k.getElementsByTagName(I)),F;if((W=re[3])&&k.getElementsByClassName)return y.apply(F,k.getElementsByClassName(W)),F}if(!Le[I+" "]&&(!N||!N.test(I))){if(fe=I,ge=k,Ie===1&&(Ue.test(I)||de.test(I))){for(ge=Hn.test(I)&&ka(k.parentNode)||k,(ge!=k||!z.scope)&&((ae=k.getAttribute("id"))?ae=l.escapeSelector(ae):k.setAttribute("id",ae=H)),we=ls(I),ee=we.length;ee--;)we[ee]=(ae?"#"+ae:":scope")+" "+po(we[ee]);fe=we.join(",")}try{return y.apply(F,ge.querySelectorAll(fe)),F}catch{Le(I,!0)}finally{ae===H&&k.removeAttribute("id")}}}return yu(I.replace(We,"$1"),k,F,j)}function fo(){var I=[];function k(F,j){return I.push(F+" ")>c.cacheLength&&delete k[I.shift()],k[F+" "]=j}return k}function Lt(I){return I[H]=!0,I}function Jr(I){var k=E.createElement("fieldset");try{return!!I(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function Vd(I){return function(k){return S(k,"input")&&k.type===I}}function Od(I){return function(k){return(S(k,"input")||S(k,"button"))&&k.type===I}}function gu(I){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===I:k.disabled===I:k.isDisabled===I||k.isDisabled!==!I&&Dd(k)===I:k.disabled===I:"label"in k?k.disabled===I:!1}}function Cr(I){return Lt(function(k){return k=+k,Lt(function(F,j){for(var W,ee=I([],F.length,k),ne=ee.length;ne--;)F[W=ee[ne]]&&(F[W]=!(j[W]=F[W]))})})}function ka(I){return I&&typeof I.getElementsByTagName<"u"&&I}function zn(I){var k,F=I?I.ownerDocument||I:xt;return F==E||F.nodeType!==9||!F.documentElement||(E=F,P=E.documentElement,A=!l.isXMLDoc(E),q=P.matches||P.webkitMatchesSelector||P.msMatchesSelector,P.msMatchesSelector&&xt!=E&&(k=E.defaultView)&&k.top!==k&&k.addEventListener("unload",xd),z.getById=Jr(function(j){return P.appendChild(j).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),z.disconnectedMatch=Jr(function(j){return q.call(j,"*")}),z.scope=Jr(function(){return E.querySelectorAll(":scope")}),z.cssHas=Jr(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),z.getById?(c.filter.ID=function(j){var W=j.replace(wt,gn);return function(ee){return ee.getAttribute("id")===W}},c.find.ID=function(j,W){if(typeof W.getElementById<"u"&&A){var ee=W.getElementById(j);return ee?[ee]:[]}}):(c.filter.ID=function(j){var W=j.replace(wt,gn);return function(ee){var ne=typeof ee.getAttributeNode<"u"&&ee.getAttributeNode("id");return ne&&ne.value===W}},c.find.ID=function(j,W){if(typeof W.getElementById<"u"&&A){var ee,ne,ae,re=W.getElementById(j);if(re){if(ee=re.getAttributeNode("id"),ee&&ee.value===j)return[re];for(ae=W.getElementsByName(j),ne=0;re=ae[ne++];)if(ee=re.getAttributeNode("id"),ee&&ee.value===j)return[re]}return[]}}),c.find.TAG=function(j,W){return typeof W.getElementsByTagName<"u"?W.getElementsByTagName(j):W.querySelectorAll(j)},c.find.CLASS=function(j,W){if(typeof W.getElementsByClassName<"u"&&A)return W.getElementsByClassName(j)},N=[],Jr(function(j){var W;P.appendChild(j).innerHTML="<a id='"+H+"' href='' disabled='disabled'></a><select id='"+H+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+f+")"),j.querySelectorAll("[id~="+H+"-]").length||N.push("~="),j.querySelectorAll("a#"+H+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),W=E.createElement("input"),W.setAttribute("type","hidden"),j.appendChild(W).setAttribute("name","D"),P.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),W=E.createElement("input"),W.setAttribute("name",""),j.appendChild(W),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),z.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),o=function(j,W){if(j===W)return m=!0,0;var ee=!j.compareDocumentPosition-!W.compareDocumentPosition;return ee||(ee=(j.ownerDocument||j)==(W.ownerDocument||W)?j.compareDocumentPosition(W):1,ee&1||!z.sortDetached&&W.compareDocumentPosition(j)===ee?j===E||j.ownerDocument==xt&&Pe.contains(xt,j)?-1:W===E||W.ownerDocument==xt&&Pe.contains(xt,W)?1:d?_.call(d,j)-_.call(d,W):0:ee&4?-1:1)}),E}Pe.matches=function(I,k){return Pe(I,null,null,k)},Pe.matchesSelector=function(I,k){if(zn(I),A&&!Le[k+" "]&&(!N||!N.test(k)))try{var F=q.call(I,k);if(F||z.disconnectedMatch||I.document&&I.document.nodeType!==11)return F}catch{Le(k,!0)}return Pe(k,E,null,[I]).length>0},Pe.contains=function(I,k){return(I.ownerDocument||I)!=E&&zn(I),l.contains(I,k)},Pe.attr=function(I,k){(I.ownerDocument||I)!=E&&zn(I);var F=c.attrHandle[k.toLowerCase()],j=F&&C.call(c.attrHandle,k.toLowerCase())?F(I,k,!A):void 0;return j!==void 0?j:I.getAttribute(k)},Pe.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},l.uniqueSort=function(I){var k,F=[],j=0,W=0;if(m=!z.sortStable,d=!z.sortStable&&a.call(I,0),D.call(I,o),m){for(;k=I[W++];)k===I[W]&&(j=F.push(W));for(;j--;)L.call(I,F[j],1)}return d=null,I},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},c=l.expr={cacheLength:50,createPseudo:Lt,match:$e,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(wt,gn),I[3]=(I[3]||I[4]||I[5]||"").replace(wt,gn),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||Pe.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&Pe.error(I[0]),I},PSEUDO:function(I){var k,F=!I[6]&&I[2];return $e.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":F&&Ee.test(F)&&(k=ls(F,!0))&&(k=F.indexOf(")",F.length-k)-F.length)&&(I[0]=I[0].slice(0,k),I[2]=F.slice(0,k)),I.slice(0,3))}},filter:{TAG:function(I){var k=I.replace(wt,gn).toLowerCase();return I==="*"?function(){return!0}:function(F){return S(F,k)}},CLASS:function(I){var k=oe[I+" "];return k||(k=new RegExp("(^|"+b+")"+I+"("+b+"|$)"))&&oe(I,function(F){return k.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(I,k,F){return function(j){var W=Pe.attr(j,I);return W==null?k==="!=":k?(W+="",k==="="?W===F:k==="!="?W!==F:k==="^="?F&&W.indexOf(F)===0:k==="*="?F&&W.indexOf(F)>-1:k==="$="?F&&W.slice(-F.length)===F:k==="~="?(" "+W.replace(O," ")+" ").indexOf(F)>-1:k==="|="?W===F||W.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(I,k,F,j,W){var ee=I.slice(0,3)!=="nth",ne=I.slice(-4)!=="last",ae=k==="of-type";return j===1&&W===0?function(re){return!!re.parentNode}:function(re,we,fe){var ge,Ie,ue,De,_t,lt=ee!==ne?"nextSibling":"previousSibling",St=re.parentNode,Yt=ae&&re.nodeName.toLowerCase(),Zr=!fe&&!ae,yt=!1;if(St){if(ee){for(;lt;){for(ue=re;ue=ue[lt];)if(ae?S(ue,Yt):ue.nodeType===1)return!1;_t=lt=I==="only"&&!_t&&"nextSibling"}return!0}if(_t=[ne?St.firstChild:St.lastChild],ne&&Zr){for(Ie=St[H]||(St[H]={}),ge=Ie[I]||[],De=ge[0]===U&&ge[1],yt=De&&ge[2],ue=De&&St.childNodes[De];ue=++De&&ue&&ue[lt]||(yt=De=0)||_t.pop();)if(ue.nodeType===1&&++yt&&ue===re){Ie[I]=[U,De,yt];break}}else if(Zr&&(Ie=re[H]||(re[H]={}),ge=Ie[I]||[],De=ge[0]===U&&ge[1],yt=De),yt===!1)for(;(ue=++De&&ue&&ue[lt]||(yt=De=0)||_t.pop())&&!((ae?S(ue,Yt):ue.nodeType===1)&&++yt&&(Zr&&(Ie=ue[H]||(ue[H]={}),Ie[I]=[U,yt]),ue===re)););return yt-=W,yt===j||yt%j===0&&yt/j>=0}}},PSEUDO:function(I,k){var F,j=c.pseudos[I]||c.setFilters[I.toLowerCase()]||Pe.error("unsupported pseudo: "+I);return j[H]?j(k):j.length>1?(F=[I,I,"",k],c.setFilters.hasOwnProperty(I.toLowerCase())?Lt(function(W,ee){for(var ne,ae=j(W,k),re=ae.length;re--;)ne=_.call(W,ae[re]),W[ne]=!(ee[ne]=ae[re])}):function(W){return j(W,0,F)}):j}},pseudos:{not:Lt(function(I){var k=[],F=[],j=Va(I.replace(We,"$1"));return j[H]?Lt(function(W,ee,ne,ae){for(var re,we=j(W,null,ae,[]),fe=W.length;fe--;)(re=we[fe])&&(W[fe]=!(ee[fe]=re))}):function(W,ee,ne){return k[0]=W,j(k,null,ne,F),k[0]=null,!F.pop()}}),has:Lt(function(I){return function(k){return Pe(I,k).length>0}}),contains:Lt(function(I){return I=I.replace(wt,gn),function(k){return(k.textContent||l.text(k)).indexOf(I)>-1}}),lang:Lt(function(I){return Fe.test(I||"")||Pe.error("unsupported lang: "+I),I=I.replace(wt,gn).toLowerCase(),function(k){var F;do if(F=A?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return F=F.toLowerCase(),F===I||F.indexOf(I+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(I){var k=e.location&&e.location.hash;return k&&k.slice(1)===I.id},root:function(I){return I===P},focus:function(I){return I===Nd()&&E.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:gu(!1),disabled:gu(!0),checked:function(I){return S(I,"input")&&!!I.checked||S(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!c.pseudos.empty(I)},header:function(I){return it.test(I.nodeName)},input:function(I){return ut.test(I.nodeName)},button:function(I){return S(I,"input")&&I.type==="button"||S(I,"button")},text:function(I){var k;return S(I,"input")&&I.type==="text"&&((k=I.getAttribute("type"))==null||k.toLowerCase()==="text")},first:Cr(function(){return[0]}),last:Cr(function(I,k){return[k-1]}),eq:Cr(function(I,k,F){return[F<0?F+k:F]}),even:Cr(function(I,k){for(var F=0;F<k;F+=2)I.push(F);return I}),odd:Cr(function(I,k){for(var F=1;F<k;F+=2)I.push(F);return I}),lt:Cr(function(I,k,F){var j;for(F<0?j=F+k:F>k?j=k:j=F;--j>=0;)I.push(j);return I}),gt:Cr(function(I,k,F){for(var j=F<0?F+k:F;++j<k;)I.push(j);return I})}},c.pseudos.nth=c.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[s]=Vd(s);for(s in{submit:!0,reset:!0})c.pseudos[s]=Od(s);function mu(){}mu.prototype=c.filters=c.pseudos,c.setFilters=new mu;function ls(I,k){var F,j,W,ee,ne,ae,re,we=Te[I+" "];if(we)return k?0:we.slice(0);for(ne=I,ae=[],re=c.preFilter;ne;){(!F||(j=Y.exec(ne)))&&(j&&(ne=ne.slice(j[0].length)||ne),ae.push(W=[])),F=!1,(j=de.exec(ne))&&(F=j.shift(),W.push({value:F,type:j[0].replace(We," ")}),ne=ne.slice(F.length));for(ee in c.filter)(j=$e[ee].exec(ne))&&(!re[ee]||(j=re[ee](j)))&&(F=j.shift(),W.push({value:F,type:ee,matches:j}),ne=ne.slice(F.length));if(!F)break}return k?ne.length:ne?Pe.error(I):Te(I,ae).slice(0)}function po(I){for(var k=0,F=I.length,j="";k<F;k++)j+=I[k].value;return j}function go(I,k,F){var j=k.dir,W=k.next,ee=W||j,ne=F&&ee==="parentNode",ae=J++;return k.first?function(re,we,fe){for(;re=re[j];)if(re.nodeType===1||ne)return I(re,we,fe);return!1}:function(re,we,fe){var ge,Ie,ue=[U,ae];if(fe){for(;re=re[j];)if((re.nodeType===1||ne)&&I(re,we,fe))return!0}else for(;re=re[j];)if(re.nodeType===1||ne)if(Ie=re[H]||(re[H]={}),W&&S(re,W))re=re[j]||re;else{if((ge=Ie[ee])&&ge[0]===U&&ge[1]===ae)return ue[2]=ge[2];if(Ie[ee]=ue,ue[2]=I(re,we,fe))return!0}return!1}}function xa(I){return I.length>1?function(k,F,j){for(var W=I.length;W--;)if(!I[W](k,F,j))return!1;return!0}:I[0]}function Md(I,k,F){for(var j=0,W=k.length;j<W;j++)Pe(I,k[j],F);return F}function mo(I,k,F,j,W){for(var ee,ne=[],ae=0,re=I.length,we=k!=null;ae<re;ae++)(ee=I[ae])&&(!F||F(ee,j,W))&&(ne.push(ee),we&&k.push(ae));return ne}function Da(I,k,F,j,W,ee){return j&&!j[H]&&(j=Da(j)),W&&!W[H]&&(W=Da(W,ee)),Lt(function(ne,ae,re,we){var fe,ge,Ie,ue,De=[],_t=[],lt=ae.length,St=ne||Md(k||"*",re.nodeType?[re]:re,[]),Yt=I&&(ne||!k)?mo(St,De,I,re,we):St;if(F?(ue=W||(ne?I:lt||j)?[]:ae,F(Yt,ue,re,we)):ue=Yt,j)for(fe=mo(ue,_t),j(fe,[],re,we),ge=fe.length;ge--;)(Ie=fe[ge])&&(ue[_t[ge]]=!(Yt[_t[ge]]=Ie));if(ne){if(W||I){if(W){for(fe=[],ge=ue.length;ge--;)(Ie=ue[ge])&&fe.push(Yt[ge]=Ie);W(null,ue=[],fe,we)}for(ge=ue.length;ge--;)(Ie=ue[ge])&&(fe=W?_.call(ne,Ie):De[ge])>-1&&(ne[fe]=!(ae[fe]=Ie))}}else ue=mo(ue===ae?ue.splice(lt,ue.length):ue),W?W(null,ae,ue,we):y.apply(ae,ue)})}function Na(I){for(var k,F,j,W=I.length,ee=c.relative[I[0].type],ne=ee||c.relative[" "],ae=ee?1:0,re=go(function(ge){return ge===k},ne,!0),we=go(function(ge){return _.call(k,ge)>-1},ne,!0),fe=[function(ge,Ie,ue){var De=!ee&&(ue||Ie!=h)||((k=Ie).nodeType?re(ge,Ie,ue):we(ge,Ie,ue));return k=null,De}];ae<W;ae++)if(F=c.relative[I[ae].type])fe=[go(xa(fe),F)];else{if(F=c.filter[I[ae].type].apply(null,I[ae].matches),F[H]){for(j=++ae;j<W&&!c.relative[I[j].type];j++);return Da(ae>1&&xa(fe),ae>1&&po(I.slice(0,ae-1).concat({value:I[ae-2].type===" "?"*":""})).replace(We,"$1"),F,ae<j&&Na(I.slice(ae,j)),j<W&&Na(I=I.slice(j)),j<W&&po(I))}fe.push(F)}return xa(fe)}function Ld(I,k){var F=k.length>0,j=I.length>0,W=function(ee,ne,ae,re,we){var fe,ge,Ie,ue=0,De="0",_t=ee&&[],lt=[],St=h,Yt=ee||j&&c.find.TAG("*",we),Zr=U+=St==null?1:Math.random()||.1,yt=Yt.length;for(we&&(h=ne==E||ne||we);De!==yt&&(fe=Yt[De])!=null;De++){if(j&&fe){for(ge=0,!ne&&fe.ownerDocument!=E&&(zn(fe),ae=!A);Ie=I[ge++];)if(Ie(fe,ne||E,ae)){y.call(re,fe);break}we&&(U=Zr)}F&&((fe=!Ie&&fe)&&ue--,ee&&_t.push(fe))}if(ue+=De,F&&De!==ue){for(ge=0;Ie=k[ge++];)Ie(_t,lt,ne,ae);if(ee){if(ue>0)for(;De--;)_t[De]||lt[De]||(lt[De]=V.call(re));lt=mo(lt)}y.apply(re,lt),we&&!ee&&lt.length>0&&ue+k.length>1&&l.uniqueSort(re)}return we&&(U=Zr,h=St),_t};return F?Lt(W):W}function Va(I,k){var F,j=[],W=[],ee=_e[I+" "];if(!ee){for(k||(k=ls(I)),F=k.length;F--;)ee=Na(k[F]),ee[H]?j.push(ee):W.push(ee);ee=_e(I,Ld(W,j)),ee.selector=I}return ee}function yu(I,k,F,j){var W,ee,ne,ae,re,we=typeof I=="function"&&I,fe=!j&&ls(I=we.selector||I);if(F=F||[],fe.length===1){if(ee=fe[0]=fe[0].slice(0),ee.length>2&&(ne=ee[0]).type==="ID"&&k.nodeType===9&&A&&c.relative[ee[1].type]){if(k=(c.find.ID(ne.matches[0].replace(wt,gn),k)||[])[0],k)we&&(k=k.parentNode);else return F;I=I.slice(ee.shift().value.length)}for(W=$e.needsContext.test(I)?0:ee.length;W--&&(ne=ee[W],!c.relative[ae=ne.type]);)if((re=c.find[ae])&&(j=re(ne.matches[0].replace(wt,gn),Hn.test(ee[0].type)&&ka(k.parentNode)||k))){if(ee.splice(W,1),I=j.length&&po(ee),!I)return y.apply(F,j),F;break}}return(we||Va(I,fe))(j,k,!A,F,!k||Hn.test(I)&&ka(k.parentNode)||k),F}z.sortStable=H.split("").sort(o).join("")===H,zn(),z.sortDetached=Jr(function(I){return I.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Pe,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Pe.compile=Va,Pe.select=yu,Pe.setDocument=zn,Pe.tokenize=ls,Pe.escape=l.escapeSelector,Pe.getText=l.text,Pe.isXML=l.isXMLDoc,Pe.selectors=l.expr,Pe.support=l.support,Pe.uniqueSort=l.uniqueSort})();var Dt=function(s,c,h){for(var d=[],m=h!==void 0;(s=s[c])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Ws=function(s,c){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==c&&h.push(s);return h},xi=l.expr.match.needsContext,Di=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Br(s,c,h){return G(c)?l.grep(s,function(d,m){return!!c.call(d,m,d)!==h}):c.nodeType?l.grep(s,function(d){return d===c!==h}):typeof c!="string"?l.grep(s,function(d){return _.call(c,d)>-1!==h}):l.filter(c,s,h)}l.filter=function(s,c,h){var d=c[0];return h&&(s=":not("+s+")"),c.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(c,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var c,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(c=0;c<d;c++)if(l.contains(m[c],this))return!0}));for(h=this.pushStack([]),c=0;c<d;c++)l.find(s,m[c],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Br(this,s||[],!1))},not:function(s){return this.pushStack(Br(this,s||[],!0))},is:function(s){return!!Br(this,typeof s=="string"&&xi.test(s)?l(s):s||[],!1).length}});var lr,Ni=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Vi=l.fn.init=function(s,c,h){var d,m;if(!s)return this;if(h=h||lr,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Ni.exec(s),d&&(d[1]||!c))if(d[1]){if(c=c instanceof l?c[0]:c,l.merge(this,l.parseHTML(d[1],c&&c.nodeType?c.ownerDocument||c:Z,!0)),Di.test(d[1])&&l.isPlainObject(c))for(d in c)G(this[d])?this[d](c[d]):this.attr(d,c[d]);return this}else return m=Z.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!c||c.jquery?(c||h).find(s):this.constructor(c).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(G(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Vi.prototype=l.fn,lr=l(Z);var Oi=/^(?:parents|prev(?:Until|All))/,Mi={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var c=l(s,this),h=c.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,c[d]))return!0})},closest:function(s,c){var h,d=0,m=this.length,y=[],E=typeof s!="string"&&l(s);if(!xi.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==c;h=h.parentNode)if(h.nodeType<11&&(E?E.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,c){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,c))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Li(s,c){for(;(s=s[c])&&s.nodeType!==1;);return s}l.each({parent:function(s){var c=s.parentNode;return c&&c.nodeType!==11?c:null},parents:function(s){return Dt(s,"parentNode")},parentsUntil:function(s,c,h){return Dt(s,"parentNode",h)},next:function(s){return Li(s,"nextSibling")},prev:function(s){return Li(s,"previousSibling")},nextAll:function(s){return Dt(s,"nextSibling")},prevAll:function(s){return Dt(s,"previousSibling")},nextUntil:function(s,c,h){return Dt(s,"nextSibling",h)},prevUntil:function(s,c,h){return Dt(s,"previousSibling",h)},siblings:function(s){return Ws((s.parentNode||{}).firstChild,s)},children:function(s){return Ws(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,c){l.fn[s]=function(h,d){var m=l.map(this,c,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(Mi[s]||l.uniqueSort(m),Oi.test(s)&&m.reverse()),this.pushStack(m)}});var It=/[^\x20\t\r\n\f]+/g;function wa(s){var c={};return l.each(s.match(It)||[],function(h,d){c[d]=!0}),c}l.Callbacks=function(s){s=typeof s=="string"?wa(s):l.extend({},s);var c,h,d,m,y=[],E=[],P=-1,A=function(){for(m=m||s.once,d=c=!0;E.length;P=-1)for(h=E.shift();++P<y.length;)y[P].apply(h[0],h[1])===!1&&s.stopOnFalse&&(P=y.length,h=!1);s.memory||(h=!1),c=!1,m&&(h?y=[]:y="")},N={add:function(){return y&&(h&&!c&&(P=y.length-1,E.push(h)),(function q(H){l.each(H,function(U,J){G(J)?(!s.unique||!N.has(J))&&y.push(J):J&&J.length&&xe(J)!=="string"&&q(J)})})(arguments),h&&!c&&A()),this},remove:function(){return l.each(arguments,function(q,H){for(var U;(U=l.inArray(H,y,U))>-1;)y.splice(U,1),U<=P&&P--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=E=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=E=[],!h&&!c&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,H){return m||(H=H||[],H=[q,H.slice?H.slice():H],E.push(H),c||A()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function un(s){return s}function kn(s){throw s}function Fi(s,c,h,d){var m;try{s&&G(m=s.promise)?m.call(s).done(c).fail(h):s&&G(m=s.then)?m.call(s,c,h):c.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var c=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(E){l.each(c,function(P,A){var N=G(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=N&&N.apply(this,arguments);q&&G(q.promise)?q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[A[0]+"With"](this,N?[q]:arguments)})}),y=null}).promise()},then:function(y,E,P){var A=0;function N(q,H,U,J){return function(){var oe=this,Te=arguments,_e=function(){var o,f;if(!(q<A)){if(o=U.apply(oe,Te),o===H.promise())throw new TypeError("Thenable self-resolution");f=o&&(typeof o=="object"||typeof o=="function")&&o.then,G(f)?J?f.call(o,N(A,H,un,J),N(A,H,kn,J)):(A++,f.call(o,N(A,H,un,J),N(A,H,kn,J),N(A,H,un,H.notifyWith))):(U!==un&&(oe=void 0,Te=[o]),(J||H.resolveWith)(oe,Te))}},Le=J?_e:function(){try{_e()}catch(o){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(o,Le.error),q+1>=A&&(U!==kn&&(oe=void 0,Te=[o]),H.rejectWith(oe,Te))}};q?Le():(l.Deferred.getErrorHook?Le.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Le.error=l.Deferred.getStackHook()),e.setTimeout(Le))}}return l.Deferred(function(q){c[0][3].add(N(0,q,G(P)?P:un,q.notifyWith)),c[1][3].add(N(0,q,G(y)?y:un)),c[2][3].add(N(0,q,G(E)?E:kn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(c,function(y,E){var P=E[2],A=E[5];d[E[1]]=P.add,A&&P.add(function(){h=A},c[3-y][2].disable,c[3-y][3].disable,c[0][2].lock,c[0][3].lock),P.add(E[3].fire),m[E[0]]=function(){return m[E[0]+"With"](this===m?void 0:this,arguments),this},m[E[0]+"With"]=P.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var c=arguments.length,h=c,d=Array(h),m=a.call(arguments),y=l.Deferred(),E=function(P){return function(A){d[P]=this,m[P]=arguments.length>1?a.call(arguments):A,--c||y.resolveWith(d,m)}};if(c<=1&&(Fi(s,y.done(E(h)).resolve,y.reject,!c),y.state()==="pending"||G(m[h]&&m[h].then)))return y.then();for(;h--;)Fi(m[h],E(h),y.reject);return y.promise()}});var Ia=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,c){e.console&&e.console.warn&&s&&Ia.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,c)},l.readyException=function(s){e.setTimeout(function(){throw s})};var hr=l.Deferred();l.fn.ready=function(s){return hr.then(s).catch(function(c){l.readyException(c)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&hr.resolveWith(Z,[l]))}}),l.ready.then=hr.then;function xn(){Z.removeEventListener("DOMContentLoaded",xn),e.removeEventListener("load",xn),l.ready()}Z.readyState==="complete"||Z.readyState!=="loading"&&!Z.documentElement.doScroll?e.setTimeout(l.ready):(Z.addEventListener("DOMContentLoaded",xn),e.addEventListener("load",xn));var At=function(s,c,h,d,m,y,E){var P=0,A=s.length,N=h==null;if(xe(h)==="object"){m=!0;for(P in h)At(s,c,P,h[P],!0,y,E)}else if(d!==void 0&&(m=!0,G(d)||(E=!0),N&&(E?(c.call(s,d),c=null):(N=c,c=function(q,H,U){return N.call(l(q),U)})),c))for(;P<A;P++)c(s[P],h,E?d:d.call(s[P],P,c(s[P],h)));return m?s:N?c.call(s):A?c(s[0],h):y},Ze=/^-ms-/,nt=/-([a-z])/g;function $r(s,c){return c.toUpperCase()}function bt(s){return s.replace(Ze,"ms-").replace(nt,$r)}var Dn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function fr(){this.expando=l.expando+fr.uid++}fr.uid=1,fr.prototype={cache:function(s){var c=s[this.expando];return c||(c={},Dn(s)&&(s.nodeType?s[this.expando]=c:Object.defineProperty(s,this.expando,{value:c,configurable:!0}))),c},set:function(s,c,h){var d,m=this.cache(s);if(typeof c=="string")m[bt(c)]=h;else for(d in c)m[bt(d)]=c[d];return m},get:function(s,c){return c===void 0?this.cache(s):s[this.expando]&&s[this.expando][bt(c)]},access:function(s,c,h){return c===void 0||c&&typeof c=="string"&&h===void 0?this.get(s,c):(this.set(s,c,h),h!==void 0?h:c)},remove:function(s,c){var h,d=s[this.expando];if(d!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(bt):(c=bt(c),c=c in d?[c]:c.match(It)||[]),h=c.length;h--;)delete d[c[h]];(c===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var c=s[this.expando];return c!==void 0&&!l.isEmptyObject(c)}};var se=new fr,rt=new fr,Gs=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ui=/[A-Z]/g;function Aa(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Gs.test(s)?JSON.parse(s):s}function Ks(s,c,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+c.replace(Ui,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=Aa(h)}catch{}rt.set(s,c,h)}else h=void 0;return h}l.extend({hasData:function(s){return rt.hasData(s)||se.hasData(s)},data:function(s,c,h){return rt.access(s,c,h)},removeData:function(s,c){rt.remove(s,c)},_data:function(s,c,h){return se.access(s,c,h)},_removeData:function(s,c){se.remove(s,c)}}),l.fn.extend({data:function(s,c){var h,d,m,y=this[0],E=y&&y.attributes;if(s===void 0){if(this.length&&(m=rt.get(y),y.nodeType===1&&!se.get(y,"hasDataAttrs"))){for(h=E.length;h--;)E[h]&&(d=E[h].name,d.indexOf("data-")===0&&(d=bt(d.slice(5)),Ks(y,d,m[d])));se.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){rt.set(this,s)}):At(this,function(P){var A;if(y&&P===void 0)return A=rt.get(y,s),A!==void 0||(A=Ks(y,s),A!==void 0)?A:void 0;this.each(function(){rt.set(this,s,P)})},null,c,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){rt.remove(this,s)})}}),l.extend({queue:function(s,c,h){var d;if(s)return c=(c||"fx")+"queue",d=se.get(s,c),h&&(!d||Array.isArray(h)?d=se.access(s,c,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,c){c=c||"fx";var h=l.queue(s,c),d=h.length,m=h.shift(),y=l._queueHooks(s,c),E=function(){l.dequeue(s,c)};m==="inprogress"&&(m=h.shift(),d--),m&&(c==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,E,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,c){var h=c+"queueHooks";return se.get(s,h)||se.access(s,h,{empty:l.Callbacks("once memory").add(function(){se.remove(s,[c+"queue",h])})})}}),l.fn.extend({queue:function(s,c){var h=2;return typeof s!="string"&&(c=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):c===void 0?this:this.each(function(){var d=l.queue(this,s,c);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,c){var h,d=1,m=l.Deferred(),y=this,E=this.length,P=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(c=s,s=void 0),s=s||"fx";E--;)h=se.get(y[E],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(P));return P(),m.promise(c)}});var ji=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Nn=new RegExp("^(?:([+-])=|)("+ji+")([a-z%]*)$","i"),mt=["Top","Right","Bottom","Left"],Nt=Z.documentElement,$t=function(s){return l.contains(s.ownerDocument,s)},ln={composed:!0};Nt.getRootNode&&($t=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ln)===s.ownerDocument});var dr=function(s,c){return s=c||s,s.style.display==="none"||s.style.display===""&&$t(s)&&l.css(s,"display")==="none"};function pr(s,c,h,d){var m,y,E=20,P=d?function(){return d.cur()}:function(){return l.css(s,c,"")},A=P(),N=h&&h[3]||(l.cssNumber[c]?"":"px"),q=s.nodeType&&(l.cssNumber[c]||N!=="px"&&+A)&&Nn.exec(l.css(s,c));if(q&&q[3]!==N){for(A=A/2,N=N||q[3],q=+A||1;E--;)l.style(s,c,q+N),(1-y)*(1-(y=P()/A||.5))<=0&&(E=0),q=q/y;q=q*2,l.style(s,c,q+N),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var qi={};function gr(s){var c,h=s.ownerDocument,d=s.nodeName,m=qi[d];return m||(c=h.body.appendChild(h.createElement(d)),m=l.css(c,"display"),c.parentNode.removeChild(c),m==="none"&&(m="block"),qi[d]=m,m)}function hn(s,c){for(var h,d,m=[],y=0,E=s.length;y<E;y++)d=s[y],d.style&&(h=d.style.display,c?(h==="none"&&(m[y]=se.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&dr(d)&&(m[y]=gr(d))):h!=="none"&&(m[y]="none",se.set(d,"display",h)));for(y=0;y<E;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return hn(this,!0)},hide:function(){return hn(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){dr(this)?l(this).show():l(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Bi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Vn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=Z.createDocumentFragment(),c=s.appendChild(Z.createElement("div")),h=Z.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),c.appendChild(h),z.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",z.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",z.option=!!c.lastChild})();var et={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};et.tbody=et.tfoot=et.colgroup=et.caption=et.thead,et.th=et.td,z.option||(et.optgroup=et.option=[1,"<select multiple='multiple'>","</select>"]);function ct(s,c){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(c||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(c||"*"):h=[],c===void 0||c&&S(s,c)?l.merge([s],h):h}function $i(s,c){for(var h=0,d=s.length;h<d;h++)se.set(s[h],"globalEval",!c||se.get(c[h],"globalEval"))}var On=/<|&#?\w+;/;function Qs(s,c,h,d,m){for(var y,E,P,A,N,q,H=c.createDocumentFragment(),U=[],J=0,oe=s.length;J<oe;J++)if(y=s[J],y||y===0)if(xe(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!On.test(y))U.push(c.createTextNode(y));else{for(E=E||H.appendChild(c.createElement("div")),P=(Bi.exec(y)||["",""])[1].toLowerCase(),A=et[P]||et._default,E.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)E=E.lastChild;l.merge(U,E.childNodes),E=H.firstChild,E.textContent=""}for(H.textContent="",J=0;y=U[J++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(N=$t(y),E=ct(H.appendChild(y),"script"),N&&$i(E),h)for(q=0;y=E[q++];)Vn.test(y.type||"")&&h.push(y)}return H}var Xs=/^([^.]*)(?:\.(.+)|)/;function Vt(){return!0}function fn(){return!1}function Hr(s,c,h,d,m,y){var E,P;if(typeof c=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(P in c)Hr(s,P,h,d,c[P],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=fn;else if(!m)return s;return y===1&&(E=m,m=function(A){return l().off(A),E.apply(this,arguments)},m.guid=E.guid||(E.guid=l.guid++)),s.each(function(){l.event.add(this,c,m,d,h)})}l.event={global:{},add:function(s,c,h,d,m){var y,E,P,A,N,q,H,U,J,oe,Te,_e=se.get(s);if(Dn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Nt,m),h.guid||(h.guid=l.guid++),(A=_e.events)||(A=_e.events=Object.create(null)),(E=_e.handle)||(E=_e.handle=function(Le){return typeof l<"u"&&l.event.triggered!==Le.type?l.event.dispatch.apply(s,arguments):void 0}),c=(c||"").match(It)||[""],N=c.length;N--;)P=Xs.exec(c[N])||[],J=Te=P[1],oe=(P[2]||"").split(".").sort(),J&&(H=l.event.special[J]||{},J=(m?H.delegateType:H.bindType)||J,H=l.event.special[J]||{},q=l.extend({type:J,origType:Te,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:oe.join(".")},y),(U=A[J])||(U=A[J]=[],U.delegateCount=0,(!H.setup||H.setup.call(s,d,oe,E)===!1)&&s.addEventListener&&s.addEventListener(J,E)),H.add&&(H.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,q):U.push(q),l.event.global[J]=!0)},remove:function(s,c,h,d,m){var y,E,P,A,N,q,H,U,J,oe,Te,_e=se.hasData(s)&&se.get(s);if(!(!_e||!(A=_e.events))){for(c=(c||"").match(It)||[""],N=c.length;N--;){if(P=Xs.exec(c[N])||[],J=Te=P[1],oe=(P[2]||"").split(".").sort(),!J){for(J in A)l.event.remove(s,J+c[N],h,d,!0);continue}for(H=l.event.special[J]||{},J=(d?H.delegateType:H.bindType)||J,U=A[J]||[],P=P[2]&&new RegExp("(^|\\.)"+oe.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=y=U.length;y--;)q=U[y],(m||Te===q.origType)&&(!h||h.guid===q.guid)&&(!P||P.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(U.splice(y,1),q.selector&&U.delegateCount--,H.remove&&H.remove.call(s,q));E&&!U.length&&((!H.teardown||H.teardown.call(s,oe,_e.handle)===!1)&&l.removeEvent(s,J,_e.handle),delete A[J])}l.isEmptyObject(A)&&se.remove(s,"handle events")}},dispatch:function(s){var c,h,d,m,y,E,P=new Array(arguments.length),A=l.event.fix(s),N=(se.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(P[0]=A,c=1;c<arguments.length;c++)P[c]=arguments[c];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(E=l.event.handlers.call(this,A,N),c=0;(m=E[c++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,P),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,c){var h,d,m,y,E,P=[],A=c.delegateCount,N=s.target;if(A&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(y=[],E={},h=0;h<A;h++)d=c[h],m=d.selector+" ",E[m]===void 0&&(E[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),E[m]&&y.push(d);y.length&&P.push({elem:N,handlers:y})}}return N=this,A<c.length&&P.push({elem:N,handlers:c.slice(A)}),P},addProp:function(s,c){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:G(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var c=this||s;return Be.test(c.type)&&c.click&&S(c,"input")&&Mn(c,"click",!0),!1},trigger:function(s){var c=this||s;return Be.test(c.type)&&c.click&&S(c,"input")&&Mn(c,"click"),!0},_default:function(s){var c=s.target;return Be.test(c.type)&&c.click&&S(c,"input")&&se.get(c,"click")||S(c,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Mn(s,c,h){if(!h){se.get(s,c)===void 0&&l.event.add(s,c,Vt);return}se.set(s,c,!1),l.event.add(s,c,{namespace:!1,handler:function(d){var m,y=se.get(this,c);if(d.isTrigger&1&&this[c]){if(y)(l.event.special[c]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),se.set(this,c,y),this[c](),m=se.get(this,c),se.set(this,c,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(se.set(this,c,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Vt)}})}l.removeEvent=function(s,c,h){s.removeEventListener&&s.removeEventListener(c,h)},l.Event=function(s,c){if(!(this instanceof l.Event))return new l.Event(s,c);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Vt:fn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,c&&l.extend(this,c),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:fn,isPropagationStopped:fn,isImmediatePropagationStopped:fn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Vt,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Vt,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Vt,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,c){function h(d){if(Z.documentMode){var m=se.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(c,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Mn(this,s,!0),Z.documentMode)d=se.get(this,c),d||this.addEventListener(c,h),se.set(this,c,(d||0)+1);else return!1},trigger:function(){return Mn(this,s),!0},teardown:function(){var d;if(Z.documentMode)d=se.get(this,c)-1,d?se.set(this,c,d):(this.removeEventListener(c,h),se.remove(this,c));else return!1},_default:function(d){return se.get(d.target,s)},delegateType:c},l.event.special[c]={setup:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=se.get(m,c);y||(Z.documentMode?this.addEventListener(c,h):d.addEventListener(s,h,!0)),se.set(m,c,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=se.get(m,c)-1;y?se.set(m,c,y):(Z.documentMode?this.removeEventListener(c,h):d.removeEventListener(s,h,!0),se.remove(m,c))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,c){l.event.special[s]={delegateType:c,bindType:c,handle:function(h){var d,m=this,y=h.relatedTarget,E=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=E.origType,d=E.handler.apply(this,arguments),h.type=c),d}}}),l.fn.extend({on:function(s,c,h,d){return Hr(this,s,c,h,d)},one:function(s,c,h,d){return Hr(this,s,c,h,d,1)},off:function(s,c,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,c,s[m]);return this}return(c===!1||typeof c=="function")&&(h=c,c=void 0),h===!1&&(h=fn),this.each(function(){l.event.remove(this,s,h,c)})}});var mr=/<script|<style|<link/i,ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ht=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Hi(s,c){return S(s,"table")&&S(c.nodeType!==11?c:c.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Ys(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function zi(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function zr(s,c){var h,d,m,y,E,P,A;if(c.nodeType===1){if(se.hasData(s)&&(y=se.get(s),A=y.events,A)){se.remove(c,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(c,m,A[m][h])}rt.hasData(s)&&(E=rt.access(s),P=l.extend({},E),rt.set(c,P))}}function Js(s,c){var h=c.nodeName.toLowerCase();h==="input"&&Be.test(s.type)?c.checked=s.checked:(h==="input"||h==="textarea")&&(c.defaultValue=s.defaultValue)}function Ln(s,c,h,d){c=u(c);var m,y,E,P,A,N,q=0,H=s.length,U=H-1,J=c[0],oe=G(J);if(oe||H>1&&typeof J=="string"&&!z.checkClone&&ba.test(J))return s.each(function(Te){var _e=s.eq(Te);oe&&(c[0]=J.call(this,Te,_e.html())),Ln(_e,c,h,d)});if(H&&(m=Qs(c,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(E=l.map(ct(m,"script"),Ys),P=E.length;q<H;q++)A=m,q!==U&&(A=l.clone(A,!0,!0),P&&l.merge(E,ct(A,"script"))),h.call(s[q],A,q);if(P)for(N=E[E.length-1].ownerDocument,l.map(E,zi),q=0;q<P;q++)A=E[q],Vn.test(A.type||"")&&!se.access(A,"globalEval")&&l.contains(N,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},N):ve(A.textContent.replace(Ht,""),A,N))}return s}function Wi(s,c,h){for(var d,m=c?l.filter(c,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(ct(d)),d.parentNode&&(h&&$t(d)&&$i(ct(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,c,h){var d,m,y,E,P=s.cloneNode(!0),A=$t(s);if(!z.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(E=ct(P),y=ct(s),d=0,m=y.length;d<m;d++)Js(y[d],E[d]);if(c)if(h)for(y=y||ct(s),E=E||ct(P),d=0,m=y.length;d<m;d++)zr(y[d],E[d]);else zr(s,P);return E=ct(P,"script"),E.length>0&&$i(E,!A&&ct(s,"script")),P},cleanData:function(s){for(var c,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(Dn(h)){if(c=h[se.expando]){if(c.events)for(d in c.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,c.handle);h[se.expando]=void 0}h[rt.expando]&&(h[rt.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Wi(this,s,!0)},remove:function(s){return Wi(this,s)},text:function(s){return At(this,function(c){return c===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,s,arguments.length)},append:function(){return Ln(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Hi(this,s);c.appendChild(s)}})},prepend:function(){return Ln(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Hi(this,s);c.insertBefore(s,c.firstChild)}})},before:function(){return Ln(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return Ln(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,c=0;(s=this[c])!=null;c++)s.nodeType===1&&(l.cleanData(ct(s,!1)),s.textContent="");return this},clone:function(s,c){return s=s??!1,c=c??s,this.map(function(){return l.clone(this,s,c)})},html:function(s){return At(this,function(c){var h=this[0]||{},d=0,m=this.length;if(c===void 0&&h.nodeType===1)return h.innerHTML;if(typeof c=="string"&&!mr.test(c)&&!et[(Bi.exec(c)||["",""])[1].toLowerCase()]){c=l.htmlPrefilter(c);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(ct(h,!1)),h.innerHTML=c);h=0}catch{}}h&&this.empty().append(c)},null,s,arguments.length)},replaceWith:function(){var s=[];return Ln(this,arguments,function(c){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(ct(this)),h&&h.replaceChild(c,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){l.fn[s]=function(h){for(var d,m=[],y=l(h),E=y.length-1,P=0;P<=E;P++)d=P===E?this:this.clone(!0),l(y[P])[c](d),p.apply(m,d.get());return this.pushStack(m)}});var Gi=new RegExp("^("+ji+")(?!px)[a-z%]+$","i"),Fn=/^--/,yr=function(s){var c=s.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(s)},Wr=function(s,c,h){var d,m,y={};for(m in c)y[m]=s.style[m],s.style[m]=c[m];d=h.call(s);for(m in c)s.style[m]=y[m];return d},_r=new RegExp(mt.join("|"),"i");(function(){function s(){if(N){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Nt.appendChild(A).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",P=c(q.marginLeft)===12,N.style.right="60%",y=c(q.right)===36,d=c(q.width)===36,N.style.position="absolute",m=c(N.offsetWidth/3)===12,Nt.removeChild(A),N=null}}function c(q){return Math.round(parseFloat(q))}var h,d,m,y,E,P,A=Z.createElement("div"),N=Z.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",z.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(z,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),P},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,H,U,J;return E==null&&(q=Z.createElement("table"),H=Z.createElement("tr"),U=Z.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",H.style.cssText="box-sizing:content-box;border:1px solid",H.style.height="1px",U.style.height="9px",U.style.display="block",Nt.appendChild(q).appendChild(H).appendChild(U),J=e.getComputedStyle(H),E=parseInt(J.height,10)+parseInt(J.borderTopWidth,10)+parseInt(J.borderBottomWidth,10)===H.offsetHeight,Nt.removeChild(q)),E}}))})();function Et(s,c,h){var d,m,y,E,P=Fn.test(c),A=s.style;return h=h||yr(s),h&&(E=h.getPropertyValue(c)||h[c],P&&E&&(E=E.replace(We,"$1")||void 0),E===""&&!$t(s)&&(E=l.style(s,c)),!z.pixelBoxStyles()&&Gi.test(E)&&_r.test(c)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=E,E=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),E!==void 0?E+"":E}function Gr(s,c){return{get:function(){if(s()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Zs=["Webkit","Moz","ms"],Ki=Z.createElement("div").style,Qi={};function eo(s){for(var c=s[0].toUpperCase()+s.slice(1),h=Zs.length;h--;)if(s=Zs[h]+c,s in Ki)return s}function vr(s){var c=l.cssProps[s]||Qi[s];return c||(s in Ki?s:Qi[s]=eo(s)||s)}var Xi=/^(none|table(?!-c[ea]).+)/,to={position:"absolute",visibility:"hidden",display:"block"},Yi={letterSpacing:"0",fontWeight:"400"};function Ji(s,c,h){var d=Nn.exec(c);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):c}function Zi(s,c,h,d,m,y){var E=c==="width"?1:0,P=0,A=0,N=0;if(h===(d?"border":"content"))return 0;for(;E<4;E+=2)h==="margin"&&(N+=l.css(s,h+mt[E],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+mt[E],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+mt[E]+"Width",!0,m))):(A+=l.css(s,"padding"+mt[E],!0,m),h!=="padding"?A+=l.css(s,"border"+mt[E]+"Width",!0,m):P+=l.css(s,"border"+mt[E]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+c[0].toUpperCase()+c.slice(1)]-y-A-P-.5))||0),A+N}function Ot(s,c,h){var d=yr(s),m=!z.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",E=y,P=Et(s,c,d),A="offset"+c[0].toUpperCase()+c.slice(1);if(Gi.test(P)){if(!h)return P;P="auto"}return(!z.boxSizingReliable()&&y||!z.reliableTrDimensions()&&S(s,"tr")||P==="auto"||!parseFloat(P)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",E=A in s,E&&(P=s[A])),P=parseFloat(P)||0,P+Zi(s,c,h||(y?"border":"content"),E,d,P)+"px"}l.extend({cssHooks:{opacity:{get:function(s,c){if(c){var h=Et(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,c,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,E,P=bt(c),A=Fn.test(c),N=s.style;if(A||(c=vr(P)),E=l.cssHooks[c]||l.cssHooks[P],h!==void 0){if(y=typeof h,y==="string"&&(m=Nn.exec(h))&&m[1]&&(h=pr(s,c,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[P]?"":"px")),!z.clearCloneStyle&&h===""&&c.indexOf("background")===0&&(N[c]="inherit"),(!E||!("set"in E)||(h=E.set(s,h,d))!==void 0)&&(A?N.setProperty(c,h):N[c]=h)}else return E&&"get"in E&&(m=E.get(s,!1,d))!==void 0?m:N[c]}},css:function(s,c,h,d){var m,y,E,P=bt(c),A=Fn.test(c);return A||(c=vr(P)),E=l.cssHooks[c]||l.cssHooks[P],E&&"get"in E&&(m=E.get(s,!0,h)),m===void 0&&(m=Et(s,c,d)),m==="normal"&&c in Yi&&(m=Yi[c]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,c){l.cssHooks[c]={get:function(h,d,m){if(d)return Xi.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Wr(h,to,function(){return Ot(h,c,m)}):Ot(h,c,m)},set:function(h,d,m){var y,E=yr(h),P=!z.scrollboxSize()&&E.position==="absolute",A=P||m,N=A&&l.css(h,"boxSizing",!1,E)==="border-box",q=m?Zi(h,c,m,N,E):0;return N&&P&&(q-=Math.ceil(h["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(E[c])-Zi(h,c,"border",!1,E)-.5)),q&&(y=Nn.exec(d))&&(y[3]||"px")!=="px"&&(h.style[c]=d,d=l.css(h,c)),Ji(h,d,q)}}}),l.cssHooks.marginLeft=Gr(z.reliableMarginLeft,function(s,c){if(c)return(parseFloat(Et(s,"marginLeft"))||s.getBoundingClientRect().left-Wr(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,c){l.cssHooks[s+c]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+mt[d]+c]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+c].set=Ji)}),l.fn.extend({css:function(s,c){return At(this,function(h,d,m){var y,E,P={},A=0;if(Array.isArray(d)){for(y=yr(h),E=d.length;A<E;A++)P[d[A]]=l.css(h,d[A],!1,y);return P}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,c,arguments.length>1)}});function Ve(s,c,h,d,m){return new Ve.prototype.init(s,c,h,d,m)}l.Tween=Ve,Ve.prototype={constructor:Ve,init:function(s,c,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=Ve.propHooks[this.prop];return s&&s.get?s.get(this):Ve.propHooks._default.get(this)},run:function(s){var c,h=Ve.propHooks[this.prop];return this.options.duration?this.pos=c=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=c=s,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Ve.propHooks._default.set(this),this}},Ve.prototype.init.prototype=Ve.prototype,Ve.propHooks={_default:{get:function(s){var c;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(c=l.css(s.elem,s.prop,""),!c||c==="auto"?0:c)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[vr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ve.propHooks.scrollTop=Ve.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Ve.prototype.init,l.fx.step={};var Ct,zt,es=/^(?:toggle|show|hide)$/,ke=/queueHooks$/;function Un(){zt&&(Z.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Un):e.setTimeout(Un,l.fx.interval),l.fx.tick())}function jn(){return e.setTimeout(function(){Ct=void 0}),Ct=Date.now()}function Wt(s,c){var h,d=0,m={height:s};for(c=c?1:0;d<4;d+=2-c)h=mt[d],m["margin"+h]=m["padding"+h]=s;return c&&(m.opacity=m.width=s),m}function no(s,c,h){for(var d,m=(Tt.tweeners[c]||[]).concat(Tt.tweeners["*"]),y=0,E=m.length;y<E;y++)if(d=m[y].call(h,c,s))return d}function ro(s,c,h){var d,m,y,E,P,A,N,q,H="width"in c||"height"in c,U=this,J={},oe=s.style,Te=s.nodeType&&dr(s),_e=se.get(s,"fxshow");h.queue||(E=l._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,P=E.empty.fire,E.empty.fire=function(){E.unqueued||P()}),E.unqueued++,U.always(function(){U.always(function(){E.unqueued--,l.queue(s,"fx").length||E.empty.fire()})}));for(d in c)if(m=c[d],es.test(m)){if(delete c[d],y=y||m==="toggle",m===(Te?"hide":"show"))if(m==="show"&&_e&&_e[d]!==void 0)Te=!0;else continue;J[d]=_e&&_e[d]||l.style(s,d)}if(A=!l.isEmptyObject(c),!(!A&&l.isEmptyObject(J))){H&&s.nodeType===1&&(h.overflow=[oe.overflow,oe.overflowX,oe.overflowY],N=_e&&_e.display,N==null&&(N=se.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(hn([s],!0),N=s.style.display||N,q=l.css(s,"display"),hn([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(A||(U.done(function(){oe.display=N}),N==null&&(q=oe.display,N=q==="none"?"":q)),oe.display="inline-block")),h.overflow&&(oe.overflow="hidden",U.always(function(){oe.overflow=h.overflow[0],oe.overflowX=h.overflow[1],oe.overflowY=h.overflow[2]})),A=!1;for(d in J)A||(_e?"hidden"in _e&&(Te=_e.hidden):_e=se.access(s,"fxshow",{display:N}),y&&(_e.hidden=!Te),Te&&hn([s],!0),U.done(function(){Te||hn([s]),se.remove(s,"fxshow");for(d in J)l.style(s,d,J[d])})),A=no(Te?_e[d]:0,d,U),d in _e||(_e[d]=A.start,Te&&(A.end=A.start,A.start=0))}}function Ca(s,c){var h,d,m,y,E;for(h in s)if(d=bt(h),m=c[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),E=l.cssHooks[d],E&&"expand"in E){y=E.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],c[h]=m)}else c[d]=m}function Tt(s,c,h){var d,m,y=0,E=Tt.prefilters.length,P=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var H=Ct||jn(),U=Math.max(0,N.startTime+N.duration-H),J=U/N.duration||0,oe=1-J,Te=0,_e=N.tweens.length;Te<_e;Te++)N.tweens[Te].run(oe);return P.notifyWith(s,[N,oe,U]),oe<1&&_e?U:(_e||P.notifyWith(s,[N,1,0]),P.resolveWith(s,[N]),!1)},N=P.promise({elem:s,props:l.extend({},c),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:c,originalOptions:h,startTime:Ct||jn(),duration:h.duration,tweens:[],createTween:function(H,U){var J=l.Tween(s,N.opts,H,U,N.opts.specialEasing[H]||N.opts.easing);return N.tweens.push(J),J},stop:function(H){var U=0,J=H?N.tweens.length:0;if(m)return this;for(m=!0;U<J;U++)N.tweens[U].run(1);return H?(P.notifyWith(s,[N,1,0]),P.resolveWith(s,[N,H])):P.rejectWith(s,[N,H]),this}}),q=N.props;for(Ca(q,N.opts.specialEasing);y<E;y++)if(d=Tt.prefilters[y].call(N,s,q,N.opts),d)return G(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,no,N),G(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(Tt,{tweeners:{"*":[function(s,c){var h=this.createTween(s,c);return pr(h.elem,s,Nn.exec(c),h),h}]},tweener:function(s,c){G(s)?(c=s,s=["*"]):s=s.match(It);for(var h,d=0,m=s.length;d<m;d++)h=s[d],Tt.tweeners[h]=Tt.tweeners[h]||[],Tt.tweeners[h].unshift(c)},prefilters:[ro],prefilter:function(s,c){c?Tt.prefilters.unshift(s):Tt.prefilters.push(s)}}),l.speed=function(s,c,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&c||G(s)&&s,duration:s,easing:h&&c||c&&!G(c)&&c};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){G(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,c,h,d){return this.filter(dr).css("opacity",0).show().end().animate({opacity:c},s,h,d)},animate:function(s,c,h,d){var m=l.isEmptyObject(s),y=l.speed(c,h,d),E=function(){var P=Tt(this,l.extend({},s),y);(m||se.get(this,"finish"))&&P.stop(!0)};return E.finish=E,m||y.queue===!1?this.each(E):this.queue(y.queue,E)},stop:function(s,c,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=c,c=s,s=void 0),c&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",E=l.timers,P=se.get(this);if(y)P[y]&&P[y].stop&&d(P[y]);else for(y in P)P[y]&&P[y].stop&&ke.test(y)&&d(P[y]);for(y=E.length;y--;)E[y].elem===this&&(s==null||E[y].queue===s)&&(E[y].anim.stop(h),m=!1,E.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var c,h=se.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,E=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),c=y.length;c--;)y[c].elem===this&&y[c].queue===s&&(y[c].anim.stop(!0),y.splice(c,1));for(c=0;c<E;c++)d[c]&&d[c].finish&&d[c].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,c){var h=l.fn[c];l.fn[c]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(Wt(c,!0),d,m,y)}}),l.each({slideDown:Wt("show"),slideUp:Wt("hide"),slideToggle:Wt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,c){l.fn[s]=function(h,d,m){return this.animate(c,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,c=0,h=l.timers;for(Ct=Date.now();c<h.length;c++)s=h[c],!s()&&h[c]===s&&h.splice(c--,1);h.length||l.fx.stop(),Ct=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){zt||(zt=!0,Un())},l.fx.stop=function(){zt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,c){return s=l.fx&&l.fx.speeds[s]||s,c=c||"fx",this.queue(c,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=Z.createElement("input"),c=Z.createElement("select"),h=c.appendChild(Z.createElement("option"));s.type="checkbox",z.checkOn=s.value!=="",z.optSelected=h.selected,s=Z.createElement("input"),s.value="t",s.type="radio",z.radioValue=s.value==="t"})();var io,Er=l.expr.attrHandle;l.fn.extend({attr:function(s,c){return At(this,l.attr,s,c,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,c,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,c,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[c.toLowerCase()]||(l.expr.match.bool.test(c)?io:void 0)),h!==void 0){if(h===null){l.removeAttr(s,c);return}return m&&"set"in m&&(d=m.set(s,h,c))!==void 0?d:(s.setAttribute(c,h+""),h)}return m&&"get"in m&&(d=m.get(s,c))!==null?d:(d=l.find.attr(s,c),d??void 0)}},attrHooks:{type:{set:function(s,c){if(!z.radioValue&&c==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",c),h&&(s.value=h),c}}}},removeAttr:function(s,c){var h,d=0,m=c&&c.match(It);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),io={set:function(s,c,h){return c===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,c){var h=Er[c]||l.find.attr;Er[c]=function(d,m,y){var E,P,A=m.toLowerCase();return y||(P=Er[A],Er[A]=E,E=h(d,m,y)!=null?A:null,Er[A]=P),E}});var Tr=/^(?:input|select|textarea|button)$/i,dn=/^(?:a|area)$/i;l.fn.extend({prop:function(s,c){return At(this,l.prop,s,c,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,c,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(c=l.propFix[c]||c,m=l.propHooks[c]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,c))!==void 0?d:s[c]=h:m&&"get"in m&&(d=m.get(s,c))!==null?d:s[c]},propHooks:{tabIndex:{get:function(s){var c=l.find.attr(s,"tabindex");return c?parseInt(c,10):Tr.test(s.nodeName)||dn.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),z.optSelected||(l.propHooks.selected={get:function(s){var c=s.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(s){var c=s.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Gt(s){var c=s.match(It)||[];return c.join(" ")}function Kt(s){return s.getAttribute&&s.getAttribute("class")||""}function Kr(s){return Array.isArray(s)?s:typeof s=="string"?s.match(It)||[]:[]}l.fn.extend({addClass:function(s){var c,h,d,m,y,E;return G(s)?this.each(function(P){l(this).addClass(s.call(this,P,Kt(this)))}):(c=Kr(s),c.length?this.each(function(){if(d=Kt(this),h=this.nodeType===1&&" "+Gt(d)+" ",h){for(y=0;y<c.length;y++)m=c[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");E=Gt(h),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var c,h,d,m,y,E;return G(s)?this.each(function(P){l(this).removeClass(s.call(this,P,Kt(this)))}):arguments.length?(c=Kr(s),c.length?this.each(function(){if(d=Kt(this),h=this.nodeType===1&&" "+Gt(d)+" ",h){for(y=0;y<c.length;y++)for(m=c[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");E=Gt(h),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,c){var h,d,m,y,E=typeof s,P=E==="string"||Array.isArray(s);return G(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,Kt(this),c),c)}):typeof c=="boolean"&&P?c?this.addClass(s):this.removeClass(s):(h=Kr(s),this.each(function(){if(P)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||E==="boolean")&&(d=Kt(this),d&&se.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":se.get(this,"__className__")||""))}))},hasClass:function(s){var c,h,d=0;for(c=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Gt(Kt(h))+" ").indexOf(c)>-1)return!0;return!1}});var so=/\r/g;l.fn.extend({val:function(s){var c,h,d,m=this[0];return arguments.length?(d=G(s),this.each(function(y){var E;this.nodeType===1&&(d?E=s.call(this,y,l(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(P){return P==null?"":P+""})),c=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,E,"value")===void 0)&&(this.value=E))})):m?(c=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],c&&"get"in c&&(h=c.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(so,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var c=l.find.attr(s,"value");return c??Gt(l.text(s))}},select:{get:function(s){var c,h,d,m=s.options,y=s.selectedIndex,E=s.type==="select-one",P=E?null:[],A=E?y+1:m.length;for(y<0?d=A:d=E?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(c=l(h).val(),E)return c;P.push(c)}return P},set:function(s,c){for(var h,d,m=s.options,y=l.makeArray(c),E=m.length;E--;)d=m[E],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,c){if(Array.isArray(c))return s.checked=l.inArray(l(s).val(),c)>-1}},z.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var qn=e.location,pn={guid:Date.now()},ts=/\?/;l.parseXML=function(s){var c,h;if(!s||typeof s!="string")return null;try{c=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=c&&c.getElementsByTagName("parsererror")[0],(!c||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),c};var oo=/^(?:focusinfocus|focusoutblur)$/,ao=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,c,h,d){var m,y,E,P,A,N,q,H,U=[h||Z],J=C.call(s,"type")?s.type:s,oe=C.call(s,"namespace")?s.namespace.split("."):[];if(y=H=E=h=h||Z,!(h.nodeType===3||h.nodeType===8)&&!oo.test(J+l.event.triggered)&&(J.indexOf(".")>-1&&(oe=J.split("."),J=oe.shift(),oe.sort()),A=J.indexOf(":")<0&&"on"+J,s=s[l.expando]?s:new l.Event(J,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=oe.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+oe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),c=c==null?[s]:l.makeArray(c,[s]),q=l.event.special[J]||{},!(!d&&q.trigger&&q.trigger.apply(h,c)===!1))){if(!d&&!q.noBubble&&!Q(h)){for(P=q.delegateType||J,oo.test(P+J)||(y=y.parentNode);y;y=y.parentNode)U.push(y),E=y;E===(h.ownerDocument||Z)&&U.push(E.defaultView||E.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)H=y,s.type=m>1?P:q.bindType||J,N=(se.get(y,"events")||Object.create(null))[s.type]&&se.get(y,"handle"),N&&N.apply(y,c),N=A&&y[A],N&&N.apply&&Dn(y)&&(s.result=N.apply(y,c),s.result===!1&&s.preventDefault());return s.type=J,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(U.pop(),c)===!1)&&Dn(h)&&A&&G(h[J])&&!Q(h)&&(E=h[A],E&&(h[A]=null),l.event.triggered=J,s.isPropagationStopped()&&H.addEventListener(J,ao),h[J](),s.isPropagationStopped()&&H.removeEventListener(J,ao),l.event.triggered=void 0,E&&(h[A]=E)),s.result}},simulate:function(s,c,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,c)}}),l.fn.extend({trigger:function(s,c){return this.each(function(){l.event.trigger(s,c,this)})},triggerHandler:function(s,c){var h=this[0];if(h)return l.event.trigger(s,c,h,!0)}});var Qt=/\[\]$/,co=/\r?\n/g,ns=/^(?:submit|button|image|reset|file)$/i,Qr=/^(?:input|select|textarea|keygen)/i;function Xr(s,c,h,d){var m;if(Array.isArray(c))l.each(c,function(y,E){h||Qt.test(s)?d(s,E):Xr(s+"["+(typeof E=="object"&&E!=null?y:"")+"]",E,h,d)});else if(!h&&xe(c)==="object")for(m in c)Xr(s+"["+m+"]",c[m],h,d);else d(s,c)}l.param=function(s,c){var h,d=[],m=function(y,E){var P=G(E)?E():E;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(P??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Xr(h,s[h],c,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Qr.test(this.nodeName)&&!ns.test(s)&&(this.checked||!Be.test(s))}).map(function(s,c){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:c.name,value:d.replace(co,`\r
`)}}):{name:c.name,value:h.replace(co,`\r
`)}}).get()}});var wr=/%20/g,Ir=/#.*$/,uo=/([?&])_=[^&]*/,rs=/^(.*?):[ \t]*([^\r\n]*)$/mg,Me=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Sa=/^(?:GET|HEAD)$/,Ra=/^\/\//,is={},Yr={},ss="*/".concat("*"),Bn=Z.createElement("a");Bn.href=qn.href;function Mt(s){return function(c,h){typeof c!="string"&&(h=c,c="*");var d,m=0,y=c.toLowerCase().match(It)||[];if(G(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function os(s,c,h,d){var m={},y=s===Yr;function E(P){var A;return m[P]=!0,l.each(s[P]||[],function(N,q){var H=q(c,h,d);if(typeof H=="string"&&!y&&!m[H])return c.dataTypes.unshift(H),E(H),!1;if(y)return!(A=H)}),A}return E(c.dataTypes[0])||!m["*"]&&E("*")}function as(s,c){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in c)c[h]!==void 0&&((m[h]?s:d||(d={}))[h]=c[h]);return d&&l.extend(!0,s,d),s}function Ar(s,c,h){for(var d,m,y,E,P=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||c.getResponseHeader("Content-Type"));if(d){for(m in P)if(P[m]&&P[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}E||(E=m)}y=y||E}if(y)return y!==A[0]&&A.unshift(y),h[y]}function lo(s,c,h,d){var m,y,E,P,A,N={},q=s.dataTypes.slice();if(q[1])for(E in s.converters)N[E.toLowerCase()]=s.converters[E];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=c),!A&&d&&s.dataFilter&&(c=s.dataFilter(c,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(E=N[A+" "+y]||N["* "+y],!E){for(m in N)if(P=m.split(" "),P[1]===y&&(E=N[A+" "+P[0]]||N["* "+P[0]],E)){E===!0?E=N[m]:N[m]!==!0&&(y=P[0],q.unshift(P[1]));break}}if(E!==!0)if(E&&s.throws)c=E(c);else try{c=E(c)}catch(H){return{state:"parsererror",error:E?H:"No conversion from "+A+" to "+y}}}}return{state:"success",data:c}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qn.href,type:"GET",isLocal:Me.test(qn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ss,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,c){return c?as(as(s,l.ajaxSettings),c):as(l.ajaxSettings,s)},ajaxPrefilter:Mt(is),ajaxTransport:Mt(Yr),ajax:function(s,c){typeof s=="object"&&(c=s,s=void 0),c=c||{};var h,d,m,y,E,P,A,N,q,H,U=l.ajaxSetup({},c),J=U.context||U,oe=U.context&&(J.nodeType||J.jquery)?l(J):l.event,Te=l.Deferred(),_e=l.Callbacks("once memory"),Le=U.statusCode||{},o={},f={},g="canceled",T={readyState:0,getResponseHeader:function(O){var Y;if(A){if(!y)for(y={};Y=rs.exec(m);)y[Y[1].toLowerCase()+" "]=(y[Y[1].toLowerCase()+" "]||[]).concat(Y[2]);Y=y[O.toLowerCase()+" "]}return Y==null?null:Y.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(O,Y){return A==null&&(O=f[O.toLowerCase()]=f[O.toLowerCase()]||O,o[O]=Y),this},overrideMimeType:function(O){return A==null&&(U.mimeType=O),this},statusCode:function(O){var Y;if(O)if(A)T.always(O[T.status]);else for(Y in O)Le[Y]=[Le[Y],O[Y]];return this},abort:function(O){var Y=O||g;return h&&h.abort(Y),M(0,Y),this}};if(Te.promise(T),U.url=((s||U.url||qn.href)+"").replace(Ra,qn.protocol+"//"),U.type=c.method||c.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(It)||[""],U.crossDomain==null){P=Z.createElement("a");try{P.href=U.url,P.href=P.href,U.crossDomain=Bn.protocol+"//"+Bn.host!=P.protocol+"//"+P.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),os(is,U,c,T),A)return T;N=l.event&&U.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!Sa.test(U.type),d=U.url.replace(Ir,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(wr,"+")):(H=U.url.slice(d.length),U.data&&(U.processData||typeof U.data=="string")&&(d+=(ts.test(d)?"&":"?")+U.data,delete U.data),U.cache===!1&&(d=d.replace(uo,"$1"),H=(ts.test(d)?"&":"?")+"_="+pn.guid+++H),U.url=d+H),U.ifModified&&(l.lastModified[d]&&T.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&T.setRequestHeader("If-None-Match",l.etag[d])),(U.data&&U.hasContent&&U.contentType!==!1||c.contentType)&&T.setRequestHeader("Content-Type",U.contentType),T.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+ss+"; q=0.01":""):U.accepts["*"]);for(q in U.headers)T.setRequestHeader(q,U.headers[q]);if(U.beforeSend&&(U.beforeSend.call(J,T,U)===!1||A))return T.abort();if(g="abort",_e.add(U.complete),T.done(U.success),T.fail(U.error),h=os(Yr,U,c,T),!h)M(-1,"No Transport");else{if(T.readyState=1,N&&oe.trigger("ajaxSend",[T,U]),A)return T;U.async&&U.timeout>0&&(E=e.setTimeout(function(){T.abort("timeout")},U.timeout));try{A=!1,h.send(o,M)}catch(O){if(A)throw O;M(-1,O)}}function M(O,Y,de,Ue){var Ee,Fe,$e,ut,it,He=Y;A||(A=!0,E&&e.clearTimeout(E),h=void 0,m=Ue||"",T.readyState=O>0?4:0,Ee=O>=200&&O<300||O===304,de&&(ut=Ar(U,T,de)),!Ee&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),ut=lo(U,ut,T,Ee),Ee?(U.ifModified&&(it=T.getResponseHeader("Last-Modified"),it&&(l.lastModified[d]=it),it=T.getResponseHeader("etag"),it&&(l.etag[d]=it)),O===204||U.type==="HEAD"?He="nocontent":O===304?He="notmodified":(He=ut.state,Fe=ut.data,$e=ut.error,Ee=!$e)):($e=He,(O||!He)&&(He="error",O<0&&(O=0))),T.status=O,T.statusText=(Y||He)+"",Ee?Te.resolveWith(J,[Fe,He,T]):Te.rejectWith(J,[T,He,$e]),T.statusCode(Le),Le=void 0,N&&oe.trigger(Ee?"ajaxSuccess":"ajaxError",[T,U,Ee?Fe:$e]),_e.fireWith(J,[T,He]),N&&(oe.trigger("ajaxComplete",[T,U]),--l.active||l.event.trigger("ajaxStop")))}return T},getJSON:function(s,c,h){return l.get(s,c,h,"json")},getScript:function(s,c){return l.get(s,void 0,c,"script")}}),l.each(["get","post"],function(s,c){l[c]=function(h,d,m,y){return G(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:c,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var c;for(c in s.headers)c.toLowerCase()==="content-type"&&(s.contentType=s.headers[c]||"")}),l._evalUrl=function(s,c,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,c,h)}})},l.fn.extend({wrapAll:function(s){var c;return this[0]&&(G(s)&&(s=s.call(this[0])),c=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return G(s)?this.each(function(c){l(this).wrapInner(s.call(this,c))}):this.each(function(){var c=l(this),h=c.contents();h.length?h.wrapAll(s):c.append(s)})},wrap:function(s){var c=G(s);return this.each(function(h){l(this).wrapAll(c?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var cs={0:200,1223:204},Xt=l.ajaxSettings.xhr();z.cors=!!Xt&&"withCredentials"in Xt,z.ajax=Xt=!!Xt,l.ajaxTransport(function(s){var c,h;if(z.cors||Xt&&!s.crossDomain)return{send:function(d,m){var y,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)E[y]=s.xhrFields[y];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)E.setRequestHeader(y,d[y]);c=function(P){return function(){c&&(c=h=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,P==="abort"?E.abort():P==="error"?typeof E.status!="number"?m(0,"error"):m(E.status,E.statusText):m(cs[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=c(),h=E.onerror=E.ontimeout=c("error"),E.onabort!==void 0?E.onabort=h:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){c&&h()})},c=c("abort");try{E.send(s.hasContent&&s.data||null)}catch(P){if(c)throw P}},abort:function(){c&&c()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var c,h;return{send:function(d,m){c=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){c.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),Z.head.appendChild(c[0])},abort:function(){h&&h()}}}});var us=[],$n=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=us.pop()||l.expando+"_"+pn.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,c,h){var d,m,y,E=s.jsonp!==!1&&($n.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&$n.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=G(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace($n,"$1"+d):s.jsonp!==!1&&(s.url+=(ts.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=c.jsonpCallback,us.push(d)),y&&G(m)&&m(y[0]),y=m=void 0}),"script"}),z.createHTMLDocument=(function(){var s=Z.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,c,h){if(typeof s!="string")return[];typeof c=="boolean"&&(h=c,c=!1);var d,m,y;return c||(z.createHTMLDocument?(c=Z.implementation.createHTMLDocument(""),d=c.createElement("base"),d.href=Z.location.href,c.head.appendChild(d)):c=Z),m=Di.exec(s),y=!h&&[],m?[c.createElement(m[1])]:(m=Qs([s],c,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,c,h){var d,m,y,E=this,P=s.indexOf(" ");return P>-1&&(d=Gt(s.slice(P)),s=s.slice(0,P)),G(c)?(h=c,c=void 0):c&&typeof c=="object"&&(m="POST"),E.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:c}).done(function(A){y=arguments,E.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,N){E.each(function(){h.apply(this,y||[A.responseText,N,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(c){return s===c.elem}).length},l.offset={setOffset:function(s,c,h){var d,m,y,E,P,A,N,q=l.css(s,"position"),H=l(s),U={};q==="static"&&(s.style.position="relative"),P=H.offset(),y=l.css(s,"top"),A=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,N?(d=H.position(),E=d.top,m=d.left):(E=parseFloat(y)||0,m=parseFloat(A)||0),G(c)&&(c=c.call(s,h,l.extend({},P))),c.top!=null&&(U.top=c.top-P.top+E),c.left!=null&&(U.left=c.left-P.left+m),"using"in c?c.using.call(s,U):H.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var c,h,d=this[0];if(d)return d.getClientRects().length?(c=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:c.top+h.pageYOffset,left:c.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,c,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")c=d.getBoundingClientRect();else{for(c=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:c.top-m.top-l.css(d,"marginTop",!0),left:c.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Nt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,c){var h=c==="pageYOffset";l.fn[s]=function(d){return At(this,function(m,y,E){var P;if(Q(m)?P=m:m.nodeType===9&&(P=m.defaultView),E===void 0)return P?P[c]:m[y];P?P.scrollTo(h?P.pageXOffset:E,h?E:P.pageYOffset):m[y]=E},s,d,arguments.length)}}),l.each(["top","left"],function(s,c){l.cssHooks[c]=Gr(z.pixelPosition,function(h,d){if(d)return d=Et(h,c),Gi.test(d)?l(h).position()[c]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,c){l.each({padding:"inner"+s,content:c,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var E=arguments.length&&(h||typeof m!="boolean"),P=h||(m===!0||y===!0?"margin":"border");return At(this,function(A,N,q){var H;return Q(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(H=A.documentElement,Math.max(A.body["scroll"+s],H["scroll"+s],A.body["offset"+s],H["offset"+s],H["client"+s])):q===void 0?l.css(A,N,P):l.style(A,N,q,P)},c,E?m:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,c){l.fn[c]=function(h){return this.on(c,h)}}),l.fn.extend({bind:function(s,c,h){return this.on(s,null,c,h)},unbind:function(s,c){return this.off(s,null,c)},delegate:function(s,c,h,d){return this.on(c,s,h,d)},undelegate:function(s,c,h){return arguments.length===1?this.off(s,"**"):this.off(c,s||"**",h)},hover:function(s,c){return this.on("mouseenter",s).on("mouseleave",c||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,c){l.fn[c]=function(h,d){return arguments.length>0?this.on(c,null,h,d):this.trigger(c)}});var Pa=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,c){var h,d,m;if(typeof c=="string"&&(h=s[c],c=s,s=h),!!G(s))return d=a.call(arguments,2),m=function(){return s.apply(c||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=G,l.isWindow=Q,l.camelCase=bt,l.type=xe,l.now=Date.now,l.isNumeric=function(s){var c=l.type(s);return(c==="number"||c==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Pa,"$1")};var ho=e.jQuery,br=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=br),s&&e.jQuery===l&&(e.jQuery=ho),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Io)),Io.exports}var qd=jd();const B=Fd(qd),Bd=()=>{};var vu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$d=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],u=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],u=i+1<n.length,p=u?n[i+1]:0,_=i+2<n.length,v=_?n[i+2]:0,w=a>>2,C=(a&3)<<4|p>>4;let x=(p&15)<<2|v>>6,$=v&63;_||($=64,u||(x=64)),r.push(t[w],t[C],t[x],t[$])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const C=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||C==null)throw new Hd;const x=a<<2|p>>4;if(r.push(x),v!==64){const $=p<<4&240|v>>2;if(r.push($),C!==64){const z=v<<6&192|C;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zd=function(n){const e=Ql(n);return Xl.encodeByteArray(e,!0)},Mo=function(n){return zd(n).replace(/\./g,"")},Yl=function(n){try{return Xl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>Wd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof vu>"u")return;const n=vu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yl(n[1]);return e&&JSON.parse(e)},na=()=>{try{return Bd()||Gd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jl=n=>na()?.emulatorHosts?.[n],Xd=n=>{const e=Jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zl=()=>na()?.config,eh=n=>na()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function th(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mo(JSON.stringify(t)),Mo(JSON.stringify(u)),""].join(".")}const ys={};function Zd(){const n={prod:[],emulator:[]};for(const e of Object.keys(ys))ys[e]?n.emulator.push(e):n.prod.push(e);return n}function ep(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Eu=!1;function nh(n,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||ys[n]===e||ys[n]||Eu)return;ys[n]=e;function t(x){return`__firebase__banner__${x}`}const r="__firebase__banner",a=Zd().prod.length>0;function u(){const x=document.getElementById(r);x&&x.remove()}function p(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function _(x,$){x.setAttribute("width","24"),x.setAttribute("id",$),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function v(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Eu=!0,u()},x}function w(x,$){x.setAttribute("id",$),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=ep(r),$=t("text"),z=document.getElementById($)||document.createElement("span"),G=t("learnmore"),Q=document.getElementById(G)||document.createElement("a"),Z=t("preprendIcon"),pe=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const ve=x.element;p(ve),w(Q,G);const xe=v();_(pe,Z),ve.append(pe,z,Q,xe),document.body.appendChild(ve)}a?(z.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",$)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function np(){const n=na()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ip(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ap(){return!np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cp(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="FirebaseError";class Sn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lp,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],u=a?hp(a,r):"Error",p=`${this.serviceName}: ${u} (${i}).`;return new Sn(i,p,r)}}function hp(n,e){return n.replace(fp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fp=/\{\$([^}]+)}/g;function dp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],u=e[i];if(Tu(a)&&Tu(u)){if(!xr(a,u))return!1}else if(a!==u)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Tu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pp(n,e){const t=new gp(n,e);return t.subscribe.bind(t)}class gp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vp(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&u.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(n){return n===Rr?void 0:n}function vp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const Tp={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},wp=Ae.INFO,Ip={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Ap=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ip[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=wp,this._logHandler=Ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const bp=(n,e)=>e.some(t=>n instanceof t);let wu,Iu;function Cp(){return wu||(wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sp(){return Iu||(Iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rh=new WeakMap,Ka=new WeakMap,ih=new WeakMap,Ma=new WeakMap,wc=new WeakMap;function Rp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Jn(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&rh.set(t,n)}).catch(()=>{}),wc.set(e,n),e}function Pp(n){if(Ka.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Ka.set(n,e)}let Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ka.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ih.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kp(n){Qa=n(Qa)}function xp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(La(this),e,...t);return ih.set(r,e.sort?e.sort():[e]),Jn(r)}:Sp().includes(n)?function(...e){return n.apply(La(this),e),Jn(rh.get(this))}:function(...e){return Jn(n.apply(La(this),e))}}function Dp(n){return typeof n=="function"?xp(n):(n instanceof IDBTransaction&&Pp(n),bp(n,Cp())?new Proxy(n,Qa):n)}function Jn(n){if(n instanceof IDBRequest)return Rp(n);if(Ma.has(n))return Ma.get(n);const e=Dp(n);return e!==n&&(Ma.set(n,e),wc.set(e,n)),e}const La=n=>wc.get(n);function Np(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const u=indexedDB.open(n,e),p=Jn(u);return r&&u.addEventListener("upgradeneeded",_=>{r(Jn(u.result),_.oldVersion,_.newVersion,Jn(u.transaction),_)}),t&&u.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const Vp=["get","getKey","getAll","getAllKeys","count"],Op=["put","add","delete","clear"],Fa=new Map;function Au(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Op.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(t)))return;const a=async function(u,...p){const _=this.transaction(u,i?"readwrite":"readonly");let v=_.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&_.done]))[0]};return Fa.set(e,a),a}kp(n=>({...n,get:(e,t,r)=>Au(e,t)||n.get(e,t,r),has:(e,t)=>!!Au(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Lp(n){return n.getComponent()?.type==="VERSION"}const Xa="@firebase/app",bu="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Tc("@firebase/app"),Fp="@firebase/app-compat",Up="@firebase/analytics-compat",jp="@firebase/analytics",qp="@firebase/app-check-compat",Bp="@firebase/app-check",$p="@firebase/auth",Hp="@firebase/auth-compat",zp="@firebase/database",Wp="@firebase/data-connect",Gp="@firebase/database-compat",Kp="@firebase/functions",Qp="@firebase/functions-compat",Xp="@firebase/installations",Yp="@firebase/installations-compat",Jp="@firebase/messaging",Zp="@firebase/messaging-compat",eg="@firebase/performance",tg="@firebase/performance-compat",ng="@firebase/remote-config",rg="@firebase/remote-config-compat",ig="@firebase/storage",sg="@firebase/storage-compat",og="@firebase/firestore",ag="@firebase/ai",cg="@firebase/firestore-compat",ug="firebase",lg="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",hg={[Xa]:"fire-core",[Fp]:"fire-core-compat",[jp]:"fire-analytics",[Up]:"fire-analytics-compat",[Bp]:"fire-app-check",[qp]:"fire-app-check-compat",[$p]:"fire-auth",[Hp]:"fire-auth-compat",[zp]:"fire-rtdb",[Wp]:"fire-data-connect",[Gp]:"fire-rtdb-compat",[Kp]:"fire-fn",[Qp]:"fire-fn-compat",[Xp]:"fire-iid",[Yp]:"fire-iid-compat",[Jp]:"fire-fcm",[Zp]:"fire-fcm-compat",[eg]:"fire-perf",[tg]:"fire-perf-compat",[ng]:"fire-rc",[rg]:"fire-rc-compat",[ig]:"fire-gcs",[sg]:"fire-gcs-compat",[og]:"fire-fst",[cg]:"fire-fst-compat",[ag]:"fire-vertex","fire-js":"fire-js",[ug]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,fg=new Map,Ja=new Map;function Cu(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pi(n){const e=n.name;if(Ja.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,n);for(const t of Lo.values())Cu(t,n);for(const t of fg.values())Cu(t,n);return!0}function Ic(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Os("app","Firebase",dg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=lg;function sh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ya,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(t||(t=Zl()),!t)throw Zn.create("no-options");const a=Lo.get(i);if(a){if(xr(t,a.options)&&xr(r,a.config))return a;throw Zn.create("duplicate-app",{appName:i})}const u=new Ep(i);for(const _ of Ja.values())u.addComponent(_);const p=new pg(t,r,u);return Lo.set(i,p),p}function oh(n=Ya){const e=Lo.get(n);if(!e&&n===Ya&&Zl())return sh();if(!e)throw Zn.create("no-app",{appName:n});return e}function er(n,e,t){let r=hg[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${r}" with version "${e}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(u.join(" "));return}pi(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebase-heartbeat-database",mg=1,bs="firebase-heartbeat-store";let Ua=null;function ah(){return Ua||(Ua=Np(gg,mg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zn.create("idb-open",{originalErrorMessage:n.message})})),Ua}async function yg(n){try{const t=(await ah()).transaction(bs),r=await t.objectStore(bs).get(ch(n));return await t.done,r}catch(e){if(e instanceof Sn)wn.warn(e.message);else{const t=Zn.create("idb-get",{originalErrorMessage:e?.message});wn.warn(t.message)}}}async function Su(n,e){try{const r=(await ah()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,ch(n)),await r.done}catch(t){if(t instanceof Sn)wn.warn(t.message);else{const r=Zn.create("idb-set",{originalErrorMessage:t?.message});wn.warn(r.message)}}}function ch(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=1024,vg=30;class Eg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ru();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>vg){const i=Ig(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){wn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ru(),{heartbeatsToSend:t,unsentEntries:r}=Tg(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return wn.warn(e),""}}}function Ru(){return new Date().toISOString().substring(0,10)}function Tg(n,e=_g){const t=[];let r=n.slice();for(const i of n){const a=t.find(u=>u.agent===i.agent);if(a){if(a.dates.push(i.date),Pu(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pu(n){return Mo(JSON.stringify({version:2,heartbeats:n})).length}function Ig(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){pi(new Dr("platform-logger",e=>new Mp(e),"PRIVATE")),pi(new Dr("heartbeat",e=>new Eg(e),"PRIVATE")),er(Xa,bu,n),er(Xa,bu,"esm2020"),er("fire-js","")}Ag("");var bg="firebase",Cg="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(bg,Cg,"app");function uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sg=uh,lh=new Os("auth","Firebase",uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Tc("@firebase/auth");function Rg(n,...e){Fo.logLevel<=Ae.WARN&&Fo.warn(`Auth (${Ii}): ${n}`,...e)}function Ao(n,...e){Fo.logLevel<=Ae.ERROR&&Fo.error(`Auth (${Ii}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...e){throw Ac(n,...e)}function Zt(n,...e){return Ac(n,...e)}function hh(n,e,t){const r={...Sg(),[e]:t};return new Os("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return hh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lh.create(n,...e)}function le(n,e,...t){if(!n)throw Ac(e,...t)}function _n(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ao(e),new Error(e)}function In(n,e){n||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return typeof self<"u"&&self.location?.href||""}function Pg(){return ku()==="http:"||ku()==="https:"}function ku(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pg()||ip()||"connection"in navigator)?navigator.onLine:!0}function xg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||sp()}get(){return kg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vg=new Ls(3e4,6e4);function Rn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function an(n,e,t,r,i={}){return dh(n,i,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const p=Ms({key:n.config.apiKey,...u}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:_,...a};return rp()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&wi(n.emulatorConfig.host)&&(v.credentials="include"),fh.fetch()(await ph(n,n.config.apiHost,t,p),v)})}async function dh(n,e,t){n._canInitEmulator=!1;const r={...Dg,...e};try{const i=new Mg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw yo(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const p=a.ok?u.errorMessage:u.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(n,"credential-already-in-use",u);if(_==="EMAIL_EXISTS")throw yo(n,"email-already-in-use",u);if(_==="USER_DISABLED")throw yo(n,"user-disabled",u);const w=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw hh(n,w,v);qt(n,w)}}catch(i){if(i instanceof Sn)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function Fs(n,e,t,r,i={}){const a=await an(n,e,t,r,i);return"mfaPendingCredential"in a&&qt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ph(n,e,t,r){const i=`${e}${t}?${r}`,a=n,u=a.config.emulator?bc(n.config,i):`${n.config.apiScheme}://${i}`;return Ng.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Og(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),Vg.get())})}}function yo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Zt(n,e,r);return i.customData._tokenResponse=t,i}function xu(n){return n!==void 0&&n.enterprise!==void 0}class Lg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Og(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fg(n,e){return an(n,"GET","/v2/recaptchaConfig",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(n,e){return an(n,"POST","/v1/accounts:delete",e)}async function Uo(n,e){return an(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jg(n,e=!1){const t=gt(n),r=await t.getIdToken(e),i=Cc(r);le(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,u=a?.sign_in_provider;return{claims:i,token:r,authTime:_s(ja(i.auth_time)),issuedAtTime:_s(ja(i.iat)),expirationTime:_s(ja(i.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function ja(n){return Number(n)*1e3}function Cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yl(t);return i?JSON.parse(i):(Ao("Failed to decode base64 JWT payload"),null)}catch(i){return Ao("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Du(n){const e=Cc(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Sn&&qg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n){const e=n.auth,t=await n.getIdToken(),r=await gi(n,Uo(e,{idToken:t}));le(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?gh(i.providerUserInfo):[],u=Hg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!u?.length,v=p?_:!1,w={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function $g(n){const e=gt(n);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(n,e){const t=await dh(n,{},async()=>{const r=Ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,u=await ph(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&wi(n.emulatorConfig.host)&&(_.credentials="include"),fh.fetch()(u,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wg(n,e){return an(n,"POST","/v2/accounts:revokeToken",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Du(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await zg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,u=new ci;return r&&(le(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),u.accessToken=i),a&&(le(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Bg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jg(this,e)}reload(){return $g(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await gi(this,Ug(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:C,emailVerified:x,isAnonymous:$,providerData:z,stsTokenManager:G}=t;le(C&&G,e,"internal-error");const Q=ci.fromJSON(this.name,G);le(typeof C=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),le(typeof x=="boolean",e,"internal-error"),le(typeof $=="boolean",e,"internal-error"),Wn(a,e.name),Wn(u,e.name),Wn(p,e.name),Wn(_,e.name),Wn(v,e.name),Wn(w,e.name);const Z=new Ft({uid:C,auth:e,email:i,emailVerified:x,displayName:r,isAnonymous:$,photoURL:u,phoneNumber:a,tenantId:p,stsTokenManager:Q,createdAt:v,lastLoginAt:w});return z&&Array.isArray(z)&&(Z.providerData=z.map(pe=>({...pe}))),_&&(Z._redirectEventId=_),Z}static async _fromIdTokenResponse(e,t,r=!1){const i=new ci;i.updateFromServerResponse(t);const a=new Ft({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jo(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];le(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?gh(i.providerUserInfo):[],u=!(i.email&&i.passwordHash)&&!a?.length,p=new ci;p.updateFromIdToken(r);const _=new Ft({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:u}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;function vn(n){In(n instanceof Function,"Expected a class definition");let e=Nu.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mh.type="NONE";const Vu=mh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e,t){return`firebase:${n}:${e}:${t}`}class ui{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=bo(this.userKey,i.apiKey,a),this.fullPersistenceKey=bo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uo(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ui(vn(Vu),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||vn(Vu);const u=bo(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(u);if(w){let C;if(typeof w=="string"){const x=await Uo(e,{idToken:w}).catch(()=>{});if(!x)break;C=await Ft._fromGetAccountInfoResponse(e,x,w)}else C=Ft._fromJSON(e,w);v!==a&&(p=C),a=v;break}}catch{}const _=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new ui(a,e,r):(a=_[0],p&&await a._set(u,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(u)}catch{}})),new ui(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ih(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||vh(e))&&!e.includes("edge/"))return"Chrome";if(Th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function yh(n=pt()){return/firefox\//i.test(n)}function _h(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vh(n=pt()){return/crios\//i.test(n)}function Eh(n=pt()){return/iemobile/i.test(n)}function Th(n=pt()){return/android/i.test(n)}function wh(n=pt()){return/blackberry/i.test(n)}function Ih(n=pt()){return/webos/i.test(n)}function Sc(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gg(n=pt()){return Sc(n)&&!!window.navigator?.standalone}function Kg(){return op()&&document.documentMode===10}function Ah(n=pt()){return Sc(n)||Th(n)||Ih(n)||wh(n)||/windows phone/i.test(n)||Eh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n,e=[]){let t;switch(n){case"Browser":t=Ou(pt());break;case"Worker":t=`${Ou(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,p)=>{try{const _=e(a);u(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e={}){return an(n,"GET","/v2/passwordPolicy",Rn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=6;class Jg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Yg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new Qg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uo(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===u)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(En(this));const t=e?gt(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xg(this),t=new Jg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(p,this,"internal-error"),p.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{u=!0,_()}}else{const _=e.addObserver(t);return()=>{u=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Rg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ur(n){return gt(n)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=pp(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function em(n){ra=n}function Ch(n){return ra.loadJS(n)}function tm(){return ra.recaptchaEnterpriseScript}function nm(){return ra.gapiScript}function rm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class im{constructor(){this.enterprise=new sm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const om="recaptcha-enterprise",Sh="NO_RECAPTCHA";class am{constructor(e){this.type=om,this.auth=ur(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,p)=>{Fg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new Lg(_);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,u(v.siteKey)}}).catch(_=>{p(_)})})}function i(a,u,p){const _=window.grecaptcha;xu(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(v=>{u(v)}).catch(()=>{u(Sh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new im().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(p=>{if(!t&&xu(window.grecaptcha))i(p,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let _=tm();_.length!==0&&(_+=p),Ch(_).then(()=>{i(p,a,u)}).catch(v=>{u(v)})}}).catch(p=>{u(p)})})}}async function Lu(n,e,t,r=!1,i=!1){const a=new am(n);let u;if(i)u=Sh;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:u}):Object.assign(p,{captchaResponse:u}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function qo(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Lu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Lu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n,e){const t=Ic(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(xr(a,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function um(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(vn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function lm(n,e,t){const r=ur(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Rh(e),{host:u,port:p}=hm(e),_=p===null?"":`:${p}`,v={url:`${a}//${u}${_}/`},w=Object.freeze({host:u,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(xr(v,r.config.emulator)&&xr(w,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=w,r.settings.appVerificationDisabledForTesting=!0,wi(u)?(th(`${a}//${u}${_}`),nh("Auth",!0)):fm()}function Rh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hm(n){const e=Rh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Fu(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Fu(u)}}}function Fu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,t){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function dm(n,e){return an(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,e){return Fs(n,"POST","/v1/accounts:signInWithPassword",Rn(n,e))}async function Ph(n,e){return an(n,"POST","/v1/accounts:sendOobCode",Rn(n,e))}async function gm(n,e){return Ph(n,e)}async function mm(n,e){return Ph(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(n,e){return Fs(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}async function _m(n,e){return Fs(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends Rc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Cs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Cs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qo(e,t,"signInWithPassword",pm);case"emailLink":return ym(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qo(e,r,"signUpPassword",dm);case"emailLink":return _m(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,e){return Fs(n,"POST","/v1/accounts:signInWithIdp",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="http://localhost";class Nr extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const u=new Nr(r,i);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return li(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,li(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,li(e,t)}buildRequest(){const e={requestUri:vm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tm(n){const e=hs(fs(n)).link,t=e?hs(fs(e)).deep_link_id:null,r=hs(fs(n)).deep_link_id;return(r?hs(fs(r)).link:null)||r||t||e||n}class Pc{constructor(e){const t=hs(fs(e)),r=t.apiKey??null,i=t.oobCode??null,a=Em(t.mode??null);le(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Tm(e);try{return new Pc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,t){return Cs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pc.parseLink(t);return le(r,"argument-error"),Cs._fromEmailAndCode(e,r.code,r.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Us{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Kn.credential(t,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Us{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Us{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Xn.credential(t,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(n,e){return Fs(n,"POST","/v1/accounts:signUp",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Ft._fromIdTokenResponse(e,r,i),u=Uu(r);return new Vr({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Uu(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Uu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Sn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Bo(e,t,r,i)}}function xh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(n,a,e,r):a})}async function Im(n,e,t=!1){const r=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,e,t=!1){const{auth:r}=n;if(Rt(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const a=await gi(n,xh(r,i,e,n),t);le(a.idToken,r,"internal-error");const u=Cc(a.idToken);le(u,r,"internal-error");const{sub:p}=u;return le(n.uid===p,r,"user-mismatch"),Vr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(n,e,t=!1){if(Rt(n.app))return Promise.reject(En(n));const r="signIn",i=await xh(n,r,e),a=await Vr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function bm(n,e){return Dh(ur(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(n){const e=ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cm(n,e,t){const r=ur(n);await qo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",mm)}async function Sm(n,e,t){if(Rt(n.app))return Promise.reject(En(n));const r=ur(n),u=await qo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wm).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&Nh(n),_}),p=await Vr._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(p.user),p}function Rm(n,e,t){return Rt(n.app)?Promise.reject(En(n)):bm(gt(n),Ai.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nh(n),r})}async function Pm(n,e){const t=gt(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await gm(t.auth,i);a!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e){return an(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=gt(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await gi(r,km(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Dm(n,e,t,r){return gt(n).onIdTokenChanged(e,t,r)}function Nm(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}function Vm(n,e,t,r){return gt(n).onAuthStateChanged(e,t,r)}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=1e3,Mm=10;class Oh extends Vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ah(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,p,_)=>{this.notifyListeners(u,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Kg()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Om)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oh.type="LOCAL";const Lm=Oh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mh.type="SESSION";const Lh=Mh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,u=this.handlersMap[i];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(u).map(async v=>v(t.origin,a)),_=await Fm(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,u;return new Promise((p,_)=>{const v=kc("",20);i.port1.start();const w=setTimeout(()=>{_(new Error("unsupported_event"))},r);u={messageChannel:i,onMessage(C){const x=C;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(w),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(x.data.response);break;default:clearTimeout(w),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(u),i.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function jm(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function qm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bm(){return navigator?.serviceWorker?.controller||null}function $m(){return Fh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="firebaseLocalStorageDb",Hm=1,Ho="firebaseLocalStorage",jh="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sa(n,e){return n.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function zm(){const n=indexedDB.deleteDatabase(Uh);return new js(n).toPromise()}function tc(){const n=indexedDB.open(Uh,Hm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ho,{keyPath:jh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await zm(),e(await tc()))})})}async function ju(n,e,t){const r=sa(n,!0).put({[jh]:e,value:t});return new js(r).toPromise()}async function Wm(n,e){const t=sa(n,!1).get(e),r=await new js(t).toPromise();return r===void 0?null:r.value}function qu(n,e){const t=sa(n,!0).delete(e);return new js(t).toPromise()}const Gm=800,Km=3;class qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance($m()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qm(),!this.activeServiceWorker)return;this.sender=new Um(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tc();return await ju(e,$o,"1"),await qu(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ju(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=sa(i,!1).getAll();return new js(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qh.type="LOCAL";const Qm=qh;new Ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n,e){return e?vn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ym(n){return Dh(n.auth,new xc(n),n.bypassAuthState)}function Jm(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Am(t,new xc(n),n.bypassAuthState)}async function Zm(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Im(t,new xc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:u,type:p}=e;if(u){this.reject(u);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ym;case"linkViaPopup":case"linkViaRedirect":return Zm;case"reauthViaPopup":case"reauthViaRedirect":return Jm;default:qt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Ls(2e3,1e4);class si extends Bh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ey.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="pendingRedirect",Co=new Map;class ny extends Bh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await ry(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ry(n,e){const t=oy(e),r=sy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function iy(n,e){Co.set(n._key(),e)}function sy(n){return vn(n._redirectPersistence)}function oy(n){return bo(ty,n.config.apiKey,n.name)}async function ay(n,e,t=!1){if(Rt(n.app))return Promise.reject(En(n));const r=ur(n),i=Xm(r,e),u=await new ny(r,i,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=600*1e3;class uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ly(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!$h(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Zt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bu(e))}saveEventToCache(e){this.cachedEventUids.add(Bu(e)),this.lastProcessedEventTime=Date.now()}}function Bu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $h({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ly(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $h(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n,e={}){return an(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dy=/^https?/;async function py(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hy(n);for(const t of e)try{if(gy(t))return}catch{}qt(n,"unauthorized-domain")}function gy(n){const e=Za(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!dy.test(t))return!1;if(fy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Ls(3e4,6e4);function $u(){const n=en().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yy(n){return new Promise((e,t)=>{function r(){$u(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$u(),t(Zt(n,"network-request-failed"))},timeout:my.get()})}if(en().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(en().gapi?.load)r();else{const i=rm("iframefcb");return en()[i]=()=>{gapi.load?r():t(Zt(n,"network-request-failed"))},Ch(`${nm()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw So=null,e})}let So=null;function _y(n){return So=So||yy(n),So}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Ls(5e3,15e3),Ey="__/auth/iframe",Ty="emulator/auth/iframe",wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ay(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bc(e,Ty):`https://${n.config.authDomain}/${Ey}`,r={apiKey:e.apiKey,appName:n.name,v:Ii},i=Iy.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ms(r).slice(1)}`}async function by(n){const e=await _y(n),t=en().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:Ay(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wy,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const u=Zt(n,"network-request-failed"),p=en().setTimeout(()=>{a(u)},vy.get());function _(){en().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sy=500,Ry=600,Py="_blank",ky="http://localhost";class Hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xy(n,e,t,r=Sy,i=Ry){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Cy,width:r.toString(),height:i.toString(),top:a,left:u},v=pt().toLowerCase();t&&(p=vh(v)?Py:t),yh(v)&&(e=e||ky,_.scrollbars="yes");const w=Object.entries(_).reduce((x,[$,z])=>`${x}${$}=${z},`,"");if(Gg(v)&&p!=="_self")return Dy(e||"",p),new Hu(null);const C=window.open(e||"",p,w);le(C,n,"popup-blocked");try{C.focus()}catch{}return new Hu(C)}function Dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="__/auth/handler",Vy="emulator/auth/handler",Oy=encodeURIComponent("fac");async function zu(n,e,t,r,i,a){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ii,eventId:i};if(e instanceof kh){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",dp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))u[w]=C}if(e instanceof Us){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(u.scopes=w.join(","))}n.tenantId&&(u.tid=n.tenantId);const p=u;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const _=await n._getAppCheckToken(),v=_?`#${Oy}=${encodeURIComponent(_)}`:"";return`${My(n)}?${Ms(p).slice(1)}${v}`}function My({config:n}){return n.emulator?bc(n,Vy):`https://${n.authDomain}/${Ny}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class Ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lh,this._completeRedirectFn=ay,this._overrideRedirectResult=iy}async _openPopup(e,t,r,i){In(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await zu(e,t,r,Za(),i);return xy(e,a,kc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await zu(e,t,r,Za(),i);return jm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(In(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await by(e),r=new uy(e);return t.register("authEvent",i=>(le(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qa,{type:qa},i=>{const a=i?.[0]?.[qa];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=py(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ah()||_h()||Sc()}}const Fy=Ly;var Wu="@firebase/auth",Gu="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qy(n){pi(new Dr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:p}=r.options;le(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:u,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bh(n)},v=new Zg(r,i,a,_);return um(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pi(new Dr("auth-internal",e=>{const t=ur(e.getProvider("auth").getImmediate());return(r=>new Uy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Wu,Gu,jy(n)),er(Wu,Gu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=300,$y=eh("authIdTokenMaxAge")||By;let Ku=null;const Hy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>$y)return;const i=t?.token;Ku!==i&&(Ku=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zy(n=oh()){const e=Ic(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cm(n,{popupRedirectResolver:Fy,persistence:[Qm,Lm,Lh]}),r=eh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Hy(a.toString());Nm(t,u,()=>u(t.currentUser)),Dm(t,p=>u(p))}}const i=Jl("auth");return i&&lm(t,`http://${i}`),t}function Wy(){return document.getElementsByTagName("head")?.[0]??document}em({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Zt("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Wy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qy("Browser");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,Hh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,R){function S(){}S.prototype=R.prototype,l.F=R.prototype,l.prototype=new S,l.prototype.constructor=l,l.D=function(V,D,L){for(var b=Array(arguments.length-2),We=2;We<arguments.length;We++)b[We-2]=arguments[We];return R.prototype[D].apply(V,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,R,S){S||(S=0);const V=Array(16);if(typeof R=="string")for(var D=0;D<16;++D)V[D]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(D=0;D<16;++D)V[D]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=l.g[0],S=l.g[1],D=l.g[2];let L=l.g[3],b;b=R+(L^S&(D^L))+V[0]+3614090360&4294967295,R=S+(b<<7&4294967295|b>>>25),b=L+(D^R&(S^D))+V[1]+3905402710&4294967295,L=R+(b<<12&4294967295|b>>>20),b=D+(S^L&(R^S))+V[2]+606105819&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(R^D&(L^R))+V[3]+3250441966&4294967295,S=D+(b<<22&4294967295|b>>>10),b=R+(L^S&(D^L))+V[4]+4118548399&4294967295,R=S+(b<<7&4294967295|b>>>25),b=L+(D^R&(S^D))+V[5]+1200080426&4294967295,L=R+(b<<12&4294967295|b>>>20),b=D+(S^L&(R^S))+V[6]+2821735955&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(R^D&(L^R))+V[7]+4249261313&4294967295,S=D+(b<<22&4294967295|b>>>10),b=R+(L^S&(D^L))+V[8]+1770035416&4294967295,R=S+(b<<7&4294967295|b>>>25),b=L+(D^R&(S^D))+V[9]+2336552879&4294967295,L=R+(b<<12&4294967295|b>>>20),b=D+(S^L&(R^S))+V[10]+4294925233&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(R^D&(L^R))+V[11]+2304563134&4294967295,S=D+(b<<22&4294967295|b>>>10),b=R+(L^S&(D^L))+V[12]+1804603682&4294967295,R=S+(b<<7&4294967295|b>>>25),b=L+(D^R&(S^D))+V[13]+4254626195&4294967295,L=R+(b<<12&4294967295|b>>>20),b=D+(S^L&(R^S))+V[14]+2792965006&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(R^D&(L^R))+V[15]+1236535329&4294967295,S=D+(b<<22&4294967295|b>>>10),b=R+(D^L&(S^D))+V[1]+4129170786&4294967295,R=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(R^S))+V[6]+3225465664&4294967295,L=R+(b<<9&4294967295|b>>>23),b=D+(R^S&(L^R))+V[11]+643717713&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^R&(D^L))+V[0]+3921069994&4294967295,S=D+(b<<20&4294967295|b>>>12),b=R+(D^L&(S^D))+V[5]+3593408605&4294967295,R=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(R^S))+V[10]+38016083&4294967295,L=R+(b<<9&4294967295|b>>>23),b=D+(R^S&(L^R))+V[15]+3634488961&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^R&(D^L))+V[4]+3889429448&4294967295,S=D+(b<<20&4294967295|b>>>12),b=R+(D^L&(S^D))+V[9]+568446438&4294967295,R=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(R^S))+V[14]+3275163606&4294967295,L=R+(b<<9&4294967295|b>>>23),b=D+(R^S&(L^R))+V[3]+4107603335&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^R&(D^L))+V[8]+1163531501&4294967295,S=D+(b<<20&4294967295|b>>>12),b=R+(D^L&(S^D))+V[13]+2850285829&4294967295,R=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(R^S))+V[2]+4243563512&4294967295,L=R+(b<<9&4294967295|b>>>23),b=D+(R^S&(L^R))+V[7]+1735328473&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^R&(D^L))+V[12]+2368359562&4294967295,S=D+(b<<20&4294967295|b>>>12),b=R+(S^D^L)+V[5]+4294588738&4294967295,R=S+(b<<4&4294967295|b>>>28),b=L+(R^S^D)+V[8]+2272392833&4294967295,L=R+(b<<11&4294967295|b>>>21),b=D+(L^R^S)+V[11]+1839030562&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^R)+V[14]+4259657740&4294967295,S=D+(b<<23&4294967295|b>>>9),b=R+(S^D^L)+V[1]+2763975236&4294967295,R=S+(b<<4&4294967295|b>>>28),b=L+(R^S^D)+V[4]+1272893353&4294967295,L=R+(b<<11&4294967295|b>>>21),b=D+(L^R^S)+V[7]+4139469664&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^R)+V[10]+3200236656&4294967295,S=D+(b<<23&4294967295|b>>>9),b=R+(S^D^L)+V[13]+681279174&4294967295,R=S+(b<<4&4294967295|b>>>28),b=L+(R^S^D)+V[0]+3936430074&4294967295,L=R+(b<<11&4294967295|b>>>21),b=D+(L^R^S)+V[3]+3572445317&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^R)+V[6]+76029189&4294967295,S=D+(b<<23&4294967295|b>>>9),b=R+(S^D^L)+V[9]+3654602809&4294967295,R=S+(b<<4&4294967295|b>>>28),b=L+(R^S^D)+V[12]+3873151461&4294967295,L=R+(b<<11&4294967295|b>>>21),b=D+(L^R^S)+V[15]+530742520&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^R)+V[2]+3299628645&4294967295,S=D+(b<<23&4294967295|b>>>9),b=R+(D^(S|~L))+V[0]+4096336452&4294967295,R=S+(b<<6&4294967295|b>>>26),b=L+(S^(R|~D))+V[7]+1126891415&4294967295,L=R+(b<<10&4294967295|b>>>22),b=D+(R^(L|~S))+V[14]+2878612391&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~R))+V[5]+4237533241&4294967295,S=D+(b<<21&4294967295|b>>>11),b=R+(D^(S|~L))+V[12]+1700485571&4294967295,R=S+(b<<6&4294967295|b>>>26),b=L+(S^(R|~D))+V[3]+2399980690&4294967295,L=R+(b<<10&4294967295|b>>>22),b=D+(R^(L|~S))+V[10]+4293915773&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~R))+V[1]+2240044497&4294967295,S=D+(b<<21&4294967295|b>>>11),b=R+(D^(S|~L))+V[8]+1873313359&4294967295,R=S+(b<<6&4294967295|b>>>26),b=L+(S^(R|~D))+V[15]+4264355552&4294967295,L=R+(b<<10&4294967295|b>>>22),b=D+(R^(L|~S))+V[6]+2734768916&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~R))+V[13]+1309151649&4294967295,S=D+(b<<21&4294967295|b>>>11),b=R+(D^(S|~L))+V[4]+4149444226&4294967295,R=S+(b<<6&4294967295|b>>>26),b=L+(S^(R|~D))+V[11]+3174756917&4294967295,L=R+(b<<10&4294967295|b>>>22),b=D+(R^(L|~S))+V[2]+718787259&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~R))+V[9]+3951481745&4294967295,l.g[0]=l.g[0]+R&4294967295,l.g[1]=l.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+D&4294967295,l.g[3]=l.g[3]+L&4294967295}r.prototype.v=function(l,R){R===void 0&&(R=l.length);const S=R-this.blockSize,V=this.C;let D=this.h,L=0;for(;L<R;){if(D==0)for(;L<=S;)i(this,l,L),L+=this.blockSize;if(typeof l=="string"){for(;L<R;)if(V[D++]=l.charCodeAt(L++),D==this.blockSize){i(this,V),D=0;break}}else for(;L<R;)if(V[D++]=l[L++],D==this.blockSize){i(this,V),D=0;break}}this.h=D,this.o+=R},r.prototype.A=function(){var l=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);l[0]=128;for(var R=1;R<l.length-8;++R)l[R]=0;R=this.o*8;for(var S=l.length-8;S<l.length;++S)l[S]=R&255,R/=256;for(this.v(l),l=Array(16),R=0,S=0;S<4;++S)for(let V=0;V<32;V+=8)l[R++]=this.g[S]>>>V&255;return l};function a(l,R){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=R(l)}function u(l,R){this.h=R;const S=[];let V=!0;for(let D=l.length-1;D>=0;D--){const L=l[D]|0;V&&L==R||(S[D]=L,V=!1)}this.g=S}var p={};function _(l){return-128<=l&&l<128?a(l,function(R){return new u([R|0],R<0?-1:0)}):new u([l|0],l<0?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return C;if(l<0)return Q(v(-l));const R=[];let S=1;for(let V=0;l>=S;V++)R[V]=l/S|0,S*=4294967296;return new u(R,0)}function w(l,R){if(l.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(l.charAt(0)=="-")return Q(w(l.substring(1),R));if(l.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=v(Math.pow(R,8));let V=C;for(let L=0;L<l.length;L+=8){var D=Math.min(8,l.length-L);const b=parseInt(l.substring(L,L+D),R);D<8?(D=v(Math.pow(R,D)),V=V.j(D).add(v(b))):(V=V.j(S),V=V.add(v(b)))}return V}var C=_(0),x=_(1),$=_(16777216);n=u.prototype,n.m=function(){if(G(this))return-Q(this).m();let l=0,R=1;for(let S=0;S<this.g.length;S++){const V=this.i(S);l+=(V>=0?V:4294967296+V)*R,R*=4294967296}return l},n.toString=function(l){if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(z(this))return"0";if(G(this))return"-"+Q(this).toString(l);const R=v(Math.pow(l,6));var S=this;let V="";for(;;){const D=xe(S,R).g;S=Z(S,D.j(R));let L=((S.g.length>0?S.g[0]:S.h)>>>0).toString(l);if(S=D,z(S))return L+V;for(;L.length<6;)L="0"+L;V=L+V}},n.i=function(l){return l<0?0:l<this.g.length?this.g[l]:this.h};function z(l){if(l.h!=0)return!1;for(let R=0;R<l.g.length;R++)if(l.g[R]!=0)return!1;return!0}function G(l){return l.h==-1}n.l=function(l){return l=Z(this,l),G(l)?-1:z(l)?0:1};function Q(l){const R=l.g.length,S=[];for(let V=0;V<R;V++)S[V]=~l.g[V];return new u(S,~l.h).add(x)}n.abs=function(){return G(this)?Q(this):this},n.add=function(l){const R=Math.max(this.g.length,l.g.length),S=[];let V=0;for(let D=0;D<=R;D++){let L=V+(this.i(D)&65535)+(l.i(D)&65535),b=(L>>>16)+(this.i(D)>>>16)+(l.i(D)>>>16);V=b>>>16,L&=65535,b&=65535,S[D]=b<<16|L}return new u(S,S[S.length-1]&-2147483648?-1:0)};function Z(l,R){return l.add(Q(R))}n.j=function(l){if(z(this)||z(l))return C;if(G(this))return G(l)?Q(this).j(Q(l)):Q(Q(this).j(l));if(G(l))return Q(this.j(Q(l)));if(this.l($)<0&&l.l($)<0)return v(this.m()*l.m());const R=this.g.length+l.g.length,S=[];for(var V=0;V<2*R;V++)S[V]=0;for(V=0;V<this.g.length;V++)for(let D=0;D<l.g.length;D++){const L=this.i(V)>>>16,b=this.i(V)&65535,We=l.i(D)>>>16,cn=l.i(D)&65535;S[2*V+2*D]+=b*cn,pe(S,2*V+2*D),S[2*V+2*D+1]+=L*cn,pe(S,2*V+2*D+1),S[2*V+2*D+1]+=b*We,pe(S,2*V+2*D+1),S[2*V+2*D+2]+=L*We,pe(S,2*V+2*D+2)}for(l=0;l<R;l++)S[l]=S[2*l+1]<<16|S[2*l];for(l=R;l<2*R;l++)S[l]=0;return new u(S,0)};function pe(l,R){for(;(l[R]&65535)!=l[R];)l[R+1]+=l[R]>>>16,l[R]&=65535,R++}function ve(l,R){this.g=l,this.h=R}function xe(l,R){if(z(R))throw Error("division by zero");if(z(l))return new ve(C,C);if(G(l))return R=xe(Q(l),R),new ve(Q(R.g),Q(R.h));if(G(R))return R=xe(l,Q(R)),new ve(Q(R.g),R.h);if(l.g.length>30){if(G(l)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var S=x,V=R;V.l(l)<=0;)S=Je(S),V=Je(V);var D=qe(S,1),L=qe(V,1);for(V=qe(V,2),S=qe(S,2);!z(V);){var b=L.add(V);b.l(l)<=0&&(D=D.add(S),L=b),V=qe(V,1),S=qe(S,1)}return R=Z(l,D.j(R)),new ve(D,R)}for(D=C;l.l(R)>=0;){for(S=Math.max(1,Math.floor(l.m()/R.m())),V=Math.ceil(Math.log(S)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),L=v(S),b=L.j(R);G(b)||b.l(l)>0;)S-=V,L=v(S),b=L.j(R);z(L)&&(L=x),D=D.add(L),l=Z(l,b)}return new ve(D,l)}n.B=function(l){return xe(this,l).h},n.and=function(l){const R=Math.max(this.g.length,l.g.length),S=[];for(let V=0;V<R;V++)S[V]=this.i(V)&l.i(V);return new u(S,this.h&l.h)},n.or=function(l){const R=Math.max(this.g.length,l.g.length),S=[];for(let V=0;V<R;V++)S[V]=this.i(V)|l.i(V);return new u(S,this.h|l.h)},n.xor=function(l){const R=Math.max(this.g.length,l.g.length),S=[];for(let V=0;V<R;V++)S[V]=this.i(V)^l.i(V);return new u(S,this.h^l.h)};function Je(l){const R=l.g.length+1,S=[];for(let V=0;V<R;V++)S[V]=l.i(V)<<1|l.i(V-1)>>>31;return new u(S,l.h)}function qe(l,R){const S=R>>5;R%=32;const V=l.g.length-S,D=[];for(let L=0;L<V;L++)D[L]=R>0?l.i(L+S)>>>R|l.i(L+S+1)<<32-R:l.i(L+S);return new u(D,l.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Hh=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=v,u.fromString=w,tr=u}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zh,ds,Wh,Ro,nc,Gh,Kh,Qh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _o=="object"&&_o];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var M=o[T];if(!(M in g))break e;g=g[M]}o=o[o.length-1],T=g[o],f=f(T),f!=T&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(f){var g=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&g.push([T,f[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function p(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function _(o,f,g){return o.call.apply(o.bind,arguments)}function v(o,f,g){return v=_,v.apply(null,arguments)}function w(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function C(o,f){function g(){}g.prototype=f.prototype,o.Z=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Ob=function(T,M,O){for(var Y=Array(arguments.length-2),de=2;de<arguments.length;de++)Y[de-2]=arguments[de];return f.prototype[M].apply(T,Y)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function $(o){const f=o.length;if(f>0){const g=Array(f);for(let T=0;T<f;T++)g[T]=o[T];return g}return[]}function z(o,f){for(let T=1;T<arguments.length;T++){const M=arguments[T];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=o.length||0;const O=M.length||0;o.length=g+O;for(let Y=0;Y<O;Y++)o[g+Y]=M[Y]}else o.push(M)}}class G{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Q(o){u.setTimeout(()=>{throw o},0)}function Z(){var o=l;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class pe{constructor(){this.h=this.g=null}add(f,g){const T=ve.get();T.set(f,g),this.h?this.h.next=T:this.g=T,this.h=T}}var ve=new G(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Je,qe=!1,l=new pe,R=()=>{const o=Promise.resolve(void 0);Je=()=>{o.then(S)}};function S(){for(var o;o=Z();){try{o.h.call(o.g)}catch(g){Q(g)}var f=ve;f.j(o),f.h<100&&(f.h++,o.next=f.g,f.g=o)}qe=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};u.addEventListener("test",g,f),u.removeEventListener("test",g,f)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function We(o,f){D.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,f)}C(We,D),We.prototype.init=function(o,f){const g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget,f||(g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),Ta=0;function xt(o,f,g,T,M){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!T,this.ha=M,this.key=++Ta,this.da=this.fa=!1}function Pn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Dt(o,f,g){for(const T in o)f.call(g,o[T],T,o)}function Ws(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function xi(o){const f={};for(const g in o)f[g]=o[g];return f}const Di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Br(o,f){let g,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(g in T)o[g]=T[g];for(let O=0;O<Di.length;O++)g=Di[O],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function lr(o){this.src=o,this.g={},this.h=0}lr.prototype.add=function(o,f,g,T,M){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const Y=Vi(o,f,T,M);return Y>-1?(f=o[Y],g||(f.fa=!1)):(f=new xt(f,this.src,O,!!T,M),f.fa=g,o.push(f)),f};function Ni(o,f){const g=f.type;if(g in o.g){var T=o.g[g],M=Array.prototype.indexOf.call(T,f,void 0),O;(O=M>=0)&&Array.prototype.splice.call(T,M,1),O&&(Pn(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Vi(o,f,g,T){for(let M=0;M<o.length;++M){const O=o[M];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==T)return M}return-1}var Oi="closure_lm_"+(Math.random()*1e6|0),Mi={};function Li(o,f,g,T,M){if(Array.isArray(f)){for(let O=0;O<f.length;O++)Li(o,f[O],g,T,M);return null}return g=At(g),o&&o[cn]?o.J(f,g,p(T)?!!T.capture:!1,M):It(o,f,g,!1,T,M)}function It(o,f,g,T,M,O){if(!f)throw Error("Invalid event type");const Y=p(M)?!!M.capture:!!M;let de=hr(o);if(de||(o[Oi]=de=new lr(o)),g=de.add(f,g,T,Y,O),g.proxy)return g;if(T=wa(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)L||(M=Y),M===void 0&&(M=!1),o.addEventListener(f.toString(),T,M);else if(o.attachEvent)o.attachEvent(Fi(f.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function wa(){function o(g){return f.call(o.src,o.listener,g)}const f=Ia;return o}function un(o,f,g,T,M){if(Array.isArray(f))for(var O=0;O<f.length;O++)un(o,f[O],g,T,M);else T=p(T)?!!T.capture:!!T,g=At(g),o&&o[cn]?(o=o.i,O=String(f).toString(),O in o.g&&(f=o.g[O],g=Vi(f,g,T,M),g>-1&&(Pn(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete o.g[O],o.h--)))):o&&(o=hr(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Vi(f,g,T,M)),(g=o>-1?f[o]:null)&&kn(g))}function kn(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[cn])Ni(f.i,o);else{var g=o.type,T=o.proxy;f.removeEventListener?f.removeEventListener(g,T,o.capture):f.detachEvent?f.detachEvent(Fi(g),T):f.addListener&&f.removeListener&&f.removeListener(T),(g=hr(f))?(Ni(g,o),g.h==0&&(g.src=null,f[Oi]=null)):Pn(o)}}}function Fi(o){return o in Mi?Mi[o]:Mi[o]="on"+o}function Ia(o,f){if(o.da)o=!0;else{f=new We(f,this);const g=o.listener,T=o.ha||o.src;o.fa&&kn(o),o=g.call(T,f)}return o}function hr(o){return o=o[Oi],o instanceof lr?o:null}var xn="__closure_events_fn_"+(Math.random()*1e9>>>0);function At(o){return typeof o=="function"?o:(o[xn]||(o[xn]=function(f){return o.handleEvent(f)}),o[xn])}function Ze(){V.call(this),this.i=new lr(this),this.M=this,this.G=null}C(Ze,V),Ze.prototype[cn]=!0,Ze.prototype.removeEventListener=function(o,f,g,T){un(this,o,f,g,T)};function nt(o,f){var g,T=o.G;if(T)for(g=[];T;T=T.G)g.push(T);if(o=o.M,T=f.type||f,typeof f=="string")f=new D(f,o);else if(f instanceof D)f.target=f.target||o;else{var M=f;f=new D(T,o),Br(f,M)}M=!0;let O,Y;if(g)for(Y=g.length-1;Y>=0;Y--)O=f.g=g[Y],M=$r(O,T,!0,f)&&M;if(O=f.g=o,M=$r(O,T,!0,f)&&M,M=$r(O,T,!1,f)&&M,g)for(Y=0;Y<g.length;Y++)O=f.g=g[Y],M=$r(O,T,!1,f)&&M}Ze.prototype.N=function(){if(Ze.Z.N.call(this),this.i){var o=this.i;for(const f in o.g){const g=o.g[f];for(let T=0;T<g.length;T++)Pn(g[T]);delete o.g[f],o.h--}}this.G=null},Ze.prototype.J=function(o,f,g,T){return this.i.add(String(o),f,!1,g,T)},Ze.prototype.K=function(o,f,g,T){return this.i.add(String(o),f,!0,g,T)};function $r(o,f,g,T){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();let M=!0;for(let O=0;O<f.length;++O){const Y=f[O];if(Y&&!Y.da&&Y.capture==g){const de=Y.listener,Ue=Y.ha||Y.src;Y.fa&&Ni(o.i,Y),M=de.call(Ue,T)!==!1&&M}}return M&&!T.defaultPrevented}function bt(o,f){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:u.setTimeout(o,f||0)}function Dn(o){o.g=bt(()=>{o.g=null,o.i&&(o.i=!1,Dn(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class fr extends V{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Dn(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(o){V.call(this),this.h=o,this.g={}}C(se,V);var rt=[];function Gs(o){Dt(o.g,function(f,g){this.g.hasOwnProperty(g)&&kn(f)},o),o.g={}}se.prototype.N=function(){se.Z.N.call(this),Gs(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=u.JSON.stringify,Aa=u.JSON.parse,Ks=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ji(){}function Nn(){}var mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nt(){D.call(this,"d")}C(Nt,D);function $t(){D.call(this,"c")}C($t,D);var ln={},dr=null;function pr(){return dr=dr||new Ze}ln.Ia="serverreachability";function qi(o){D.call(this,ln.Ia,o)}C(qi,D);function gr(o){const f=pr();nt(f,new qi(f))}ln.STAT_EVENT="statevent";function hn(o,f){D.call(this,ln.STAT_EVENT,o),this.stat=f}C(hn,D);function Be(o){const f=pr();nt(f,new hn(f,o))}ln.Ja="timingevent";function Bi(o,f){D.call(this,ln.Ja,o),this.size=f}C(Bi,D);function Vn(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},f)}function et(){this.g=!0}et.prototype.ua=function(){this.g=!1};function ct(o,f,g,T,M,O){o.info(function(){if(o.g)if(O){var Y="",de=O.split("&");for(let Ee=0;Ee<de.length;Ee++){var Ue=de[Ee].split("=");if(Ue.length>1){const Fe=Ue[0];Ue=Ue[1];const $e=Fe.split("_");Y=$e.length>=2&&$e[1]=="type"?Y+(Fe+"="+Ue+"&"):Y+(Fe+"=redacted&")}}}else Y=null;else Y=O;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+f+`
`+g+`
`+Y})}function $i(o,f,g,T,M,O,Y){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+f+`
`+g+`
`+O+" "+Y})}function On(o,f,g,T){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Xs(o,g)+(T?" "+T:"")})}function Qs(o,f){o.info(function(){return"TIMEOUT: "+f})}et.prototype.info=function(){};function Xs(o,f){if(!o.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var g=O[o];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Y=1;Y<T.length;Y++)T[Y]=""}}}}return Ui(O)}catch{return f}}var Vt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hr;function Mn(){}C(Mn,ji),Mn.prototype.g=function(){return new XMLHttpRequest},Hr=new Mn;function mr(o){return encodeURIComponent(String(o))}function ba(o){var f=1;o=o.split(":");const g=[];for(;f>0&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function Ht(o,f,g,T){this.j=o,this.i=f,this.l=g,this.S=T||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hi}function Hi(){this.i=null,this.g="",this.h=!1}var Ys={},zi={};function zr(o,f,g){o.M=1,o.A=Un(Ve(f)),o.u=g,o.R=!0,Js(o,null)}function Js(o,f){o.F=Date.now(),Fn(o),o.B=Ve(o.A);var g=o.B,T=o.S;Array.isArray(T)||(T=[String(T)]),so(g.i,"t",T),o.C=0,g=o.j.L,o.h=new Hi,o.g=H(o.j,g?f:null,!o.u),o.P>0&&(o.O=new fr(v(o.Y,o,o.g),o.P)),f=o.V,g=o.g,T=o.ba;var M="readystatechange";Array.isArray(M)||(M&&(rt[0]=M.toString()),M=rt);for(let O=0;O<M.length;O++){const Y=Li(g,M[O],T||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=o.J?xi(o.J):{},o.u?(o.v||(o.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,f)):(o.v="GET",o.g.ea(o.B,o.v,null,f)),gr(),ct(o.i,o.v,o.B,o.l,o.S,o.u)}Ht.prototype.ba=function(o){o=o.target;const f=this.O;f&&Mt(o)==3?f.j():this.Y(o)},Ht.prototype.Y=function(o){try{if(o==this.g)e:{const de=Mt(this.g),Ue=this.g.ya(),Ee=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||os(this.g)))){this.K||de!=4||Ue==7||(Ue==8||Ee<=0?gr(3):gr(2)),Wr(this);var f=this.g.ca();this.X=f;var g=Ln(this);if(this.o=f==200,$i(this.i,this.v,this.B,this.l,this.S,de,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var O=T;break t}}O=null}if(o=O)On(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Gr(this,o);else{this.o=!1,this.m=3,Be(12),Et(this),_r(this);break e}}if(this.R){o=!0;let Fe;for(;!this.K&&this.C<g.length;)if(Fe=Gi(this,g),Fe==zi){de==4&&(this.m=4,Be(14),o=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Ys){this.m=4,Be(15),On(this.i,this.l,g,"[Invalid Chunk]"),o=!1;break}else On(this.i,this.l,Fe,null),Gr(this,Fe);if(Wi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||g.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)On(this.i,this.l,g,"[Invalid Chunked Response]"),Et(this),_r(this);else if(g.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),d(Y),Y.P=!0,Be(11))}}else On(this.i,this.l,g,null),Gr(this,g);de==4&&Et(this),this.o&&!this.K&&(de==4?E(this.j,this):(this.o=!1,Fn(this)))}else as(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),Et(this),_r(this)}}}catch{}finally{}};function Ln(o){if(!Wi(o))return o.g.la();const f=os(o.g);if(f==="")return"";let g="";const T=f.length,M=Mt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Et(o),_r(o),"";o.h.i=new u.TextDecoder}for(let O=0;O<T;O++)o.h.h=!0,g+=o.h.i.decode(f[O],{stream:!(M&&O==T-1)});return f.length=0,o.h.g+=g,o.C=0,o.h.g}function Wi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Gi(o,f){var g=o.C,T=f.indexOf(`
`,g);return T==-1?zi:(g=Number(f.substring(g,T)),isNaN(g)?Ys:(T+=1,T+g>f.length?zi:(f=f.slice(T,T+g),o.C=T+g,f)))}Ht.prototype.cancel=function(){this.K=!0,Et(this)};function Fn(o){o.T=Date.now()+o.H,yr(o,o.H)}function yr(o,f){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Vn(v(o.aa,o),f)}function Wr(o){o.D&&(u.clearTimeout(o.D),o.D=null)}Ht.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qs(this.i,this.B),this.M!=2&&(gr(),Be(17)),Et(this),this.m=2,_r(this)):yr(this,this.T-o)};function _r(o){o.j.I==0||o.K||E(o.j,o)}function Et(o){Wr(o);var f=o.O;f&&typeof f.dispose=="function"&&f.dispose(),o.O=null,Gs(o.V),o.g&&(f=o.g,o.g=null,f.abort(),f.dispose())}function Gr(o,f){try{var g=o.j;if(g.I!=0&&(g.g==o||vr(g.h,o))){if(!o.L&&vr(g.h,o)&&g.I==3){try{var T=g.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<o.F)y(g),Xt(g);else break e;h(g),Be(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Vn(v(g.Va,g),6e3));eo(g.h)<=1&&g.ta&&(g.ta=void 0)}else A(g,11)}else if((o.L||g.g==o)&&y(g),!b(f))for(M=g.Ba.g.parse(f),f=0;f<M.length;f++){let Ee=M[f];const Fe=Ee[0];if(!(Fe<=g.K))if(g.K=Fe,Ee=Ee[1],g.I==2)if(Ee[0]=="c"){g.M=Ee[1],g.ba=Ee[2];const $e=Ee[3];$e!=null&&(g.ka=$e,g.j.info("VER="+g.ka));const ut=Ee[4];ut!=null&&(g.za=ut,g.j.info("SVER="+g.za));const it=Ee[5];it!=null&&typeof it=="number"&&it>0&&(T=1.5*it,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const He=o.g;if(He){const Hn=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var O=T.h;O.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Xi(O,O.h),O.h=null))}if(T.G){const wt=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;wt&&(T.wa=wt,ke(T.J,T.G,wt))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-o.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var Y=o;if(T.na=q(T,T.L?T.ba:null,T.W),Y.L){to(T.h,Y);var de=Y,Ue=T.O;Ue&&(de.H=Ue),de.D&&(Wr(de),Fn(de)),T.g=Y}else c(T);g.i.length>0&&$n(g)}else Ee[0]!="stop"&&Ee[0]!="close"||A(g,7);else g.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?A(g,7):cs(g):Ee[0]!="noop"&&g.l&&g.l.qa(Ee),g.A=0)}}gr(4)}catch{}}var Zs=class{constructor(o,f){this.g=o,this.map=f}};function Ki(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function eo(o){return o.h?1:o.g?o.g.size:0}function vr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Xi(o,f){o.g?o.g.add(f):o.h=f}function to(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Ki.prototype.cancel=function(){if(this.i=Yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yi(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.G);return f}return $(o.i)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zi(o,f){if(o){o=o.split("&");for(let g=0;g<o.length;g++){const T=o[g].indexOf("=");let M,O=null;T>=0?(M=o[g].substring(0,T),O=o[g].substring(T+1)):M=o[g],f(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ot(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;o instanceof Ot?(this.l=o.l,Ct(this,o.j),this.o=o.o,this.g=o.g,zt(this,o.u),this.h=o.h,es(this,qn(o.i)),this.m=o.m):o&&(f=String(o).match(Ji))?(this.l=!1,Ct(this,f[1]||"",!0),this.o=jn(f[2]||""),this.g=jn(f[3]||"",!0),zt(this,f[4]),this.h=jn(f[5]||"",!0),es(this,f[6]||"",!0),this.m=jn(f[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}Ot.prototype.toString=function(){const o=[];var f=this.j;f&&o.push(Wt(f,ro,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(Wt(f,ro,!0),"@"),o.push(mr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&o.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Wt(g,g.charAt(0)=="/"?Tt:Ca,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Wt(g,Er)),o.join("")},Ot.prototype.resolve=function(o){const f=Ve(this);let g=!!o.j;g?Ct(f,o.j):g=!!o.o,g?f.o=o.o:g=!!o.g,g?f.g=o.g:g=o.u!=null;var T=o.h;if(g)zt(f,o.u);else if(g=!!o.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=f.h.lastIndexOf("/");M!=-1&&(T=f.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const O=[];for(let Y=0;Y<M.length;){const de=M[Y++];de=="."?T&&Y==M.length&&O.push(""):de==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&Y==M.length&&O.push("")):(O.push(de),T=!0)}T=O.join("/")}else T=M}return g?f.h=T:g=o.i.toString()!=="",g?es(f,qn(o.i)):g=!!o.m,g&&(f.m=o.m),f};function Ve(o){return new Ot(o)}function Ct(o,f,g){o.j=g?jn(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function zt(o,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);o.u=f}else o.u=null}function es(o,f,g){f instanceof Tr?(o.i=f,ts(o.i,o.l)):(g||(f=Wt(f,io)),o.i=new Tr(f,o.l))}function ke(o,f,g){o.i.set(f,g)}function Un(o){return ke(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function jn(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wt(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,no),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function no(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ro=/[#\/\?@]/g,Ca=/[#\?:]/g,Tt=/[#\?]/g,io=/[#\?@]/g,Er=/#/g;function Tr(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&Zi(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Tr.prototype,n.add=function(o,f){dn(this),this.i=null,o=pn(this,o);let g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Gt(o,f){dn(o),f=pn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Kt(o,f){return dn(o),f=pn(o,f),o.g.has(f)}n.forEach=function(o,f){dn(this),this.g.forEach(function(g,T){g.forEach(function(M){o.call(f,M,T,this)},this)},this)};function Kr(o,f){dn(o);let g=[];if(typeof f=="string")Kt(o,f)&&(g=g.concat(o.g.get(pn(o,f))));else for(o=Array.from(o.g.values()),f=0;f<o.length;f++)g=g.concat(o[f]);return g}n.set=function(o,f){return dn(this),this.i=null,o=pn(this,o),Kt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=Kr(this,o),o.length>0?String(o[0]):f):f};function so(o,f,g){Gt(o,f),g.length>0&&(o.i=null,o.g.set(pn(o,f),$(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var g=f[T];const M=mr(g);g=Kr(this,g);for(let O=0;O<g.length;O++){let Y=M;g[O]!==""&&(Y+="="+mr(g[O])),o.push(Y)}}return this.i=o.join("&")};function qn(o){const f=new Tr;return f.i=o.i,o.g&&(f.g=new Map(o.g),f.h=o.h),f}function pn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function ts(o,f){f&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(g,T){const M=T.toLowerCase();T!=M&&(Gt(this,T),so(this,M,g))},o)),o.j=f}function oo(o,f){const g=new et;if(u.Image){const T=new Image;T.onload=w(Qt,g,"TestLoadImage: loaded",!0,f,T),T.onerror=w(Qt,g,"TestLoadImage: error",!1,f,T),T.onabort=w(Qt,g,"TestLoadImage: abort",!1,f,T),T.ontimeout=w(Qt,g,"TestLoadImage: timeout",!1,f,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else f(!1)}function ao(o,f){const g=new et,T=new AbortController,M=setTimeout(()=>{T.abort(),Qt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:T.signal}).then(O=>{clearTimeout(M),O.ok?Qt(g,"TestPingServer: ok",!0,f):Qt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Qt(g,"TestPingServer: error",!1,f)})}function Qt(o,f,g,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(g)}catch{}}function co(){this.g=new Ks}function ns(o){this.i=o.Sb||null,this.h=o.ab||!1}C(ns,ji),ns.prototype.g=function(){return new Qr(this.i,this.h)};function Qr(o,f){Ze.call(this),this.H=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Qr,Ze),n=Qr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=f,this.readyState=1,Ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(f.body=o),(this.H||u).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xr(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xr(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?wr(this):Ir(this),this.readyState==3&&Xr(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Na=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ir(o)}n.setRequestHeader=function(o,f){this.A.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function Ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uo(o){let f="";return Dt(o,function(g,T){f+=T,f+=":",f+=g,f+=`\r
`}),f}function rs(o,f,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=uo(g),typeof o=="string"?g!=null&&mr(g):ke(o,f,g))}function Me(o){Ze.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(Me,Ze);var Sa=/^https?$/i,Ra=["POST","PUT"];n=Me.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,f,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hr.g(),this.g.onreadystatechange=x(v(this.Ca,this));try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(O){is(this,O);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)g.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())g.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),M=u.FormData&&o instanceof u.FormData,!(Array.prototype.indexOf.call(Ra,f,void 0)>=0)||T||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Y]of g)this.g.setRequestHeader(O,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){is(this,O)}};function is(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.o=5,Yr(o),Bn(o)}function Yr(o){o.A||(o.A=!0,nt(o,"complete"),nt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,nt(this,"complete"),nt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),Me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ss(this):this.Xa())},n.Xa=function(){ss(this)};function ss(o){if(o.h&&typeof a<"u"){if(o.v&&Mt(o)==4)setTimeout(o.Ca.bind(o),0);else if(nt(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const O=o.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var T;if(T=O===0){let Y=String(o.D).match(Ji)[1]||null;!Y&&u.self&&u.self.location&&(Y=u.self.location.protocol.slice(0,-1)),T=!Sa.test(Y?Y.toLowerCase():"")}g=T}if(g)nt(o,"complete"),nt(o,"success");else{o.o=6;try{var M=Mt(o)>2?o.g.statusText:""}catch{M=""}o.l=M+" ["+o.ca()+"]",Yr(o)}}finally{Bn(o)}}}}function Bn(o,f){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const g=o.g;o.g=null,f||nt(o,"ready");try{g.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),Aa(f)}};function os(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function as(o){const f={};o=(o.g&&Mt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(b(o[T]))continue;var g=ba(o[T]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[M]||[];f[M]=O,O.push(g)}Ws(f,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function lo(o){this.za=0,this.i=[],this.j=new et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ki(o&&o.concurrentRequestLimit),this.Ba=new co,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=lo.prototype,n.ka=8,n.I=1,n.connect=function(o,f,g,T){Be(0),this.W=o,this.H=f||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=q(this,null,this.W),$n(this)};function cs(o){if(us(o),o.I==3){var f=o.V++,g=Ve(o.J);if(ke(g,"SID",o.M),ke(g,"RID",f),ke(g,"TYPE","terminate"),br(o,g),f=new Ht(o,o.j,f),f.M=2,f.A=Un(Ve(g)),g=!1,u.navigator&&u.navigator.sendBeacon)try{g=u.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&u.Image&&(new Image().src=f.A,g=!0),g||(f.g=H(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Fn(f)}N(o)}function Xt(o){o.g&&(d(o),o.g.cancel(),o.g=null)}function us(o){Xt(o),o.v&&(u.clearTimeout(o.v),o.v=null),y(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&u.clearTimeout(o.m),o.m=null)}function $n(o){if(!Qi(o.h)&&!o.m){o.m=!0;var f=o.Ea;Je||R(),qe||(Je(),qe=!0),l.add(f,o),o.D=0}}function Pa(o,f){return eo(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=f.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Vn(v(o.Ea,o,f),P(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const M=new Ht(this,this.j,o);let O=this.o;if(this.U&&(O?(O=xi(O),Br(O,this.U)):O=this.U),this.u!==null||this.R||(M.J=O,O=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=s(this,M,f),g=Ve(this.J),ke(g,"RID",o),ke(g,"CVER",22),this.G&&ke(g,"X-HTTP-Session-Id",this.G),br(this,g),O&&(this.R?f="headers="+mr(uo(O))+"&"+f:this.u&&rs(g,this.u,O)),Xi(this.h,M),this.Ra&&ke(g,"TYPE","init"),this.S?(ke(g,"$req",f),ke(g,"SID","null"),M.U=!0,zr(M,g,null)):zr(M,g,f),this.I=2}}else this.I==3&&(o?ho(this,o):this.i.length==0||Qi(this.h)||ho(this))};function ho(o,f){var g;f?g=f.l:g=o.V++;const T=Ve(o.J);ke(T,"SID",o.M),ke(T,"RID",g),ke(T,"AID",o.K),br(o,T),o.u&&o.o&&rs(T,o.u,o.o),g=new Ht(o,o.j,g,o.D+1),o.u===null&&(g.J=o.o),f&&(o.i=f.G.concat(o.i)),f=s(o,g,1e3),g.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xi(o.h,g),zr(g,T,f)}function br(o,f){o.H&&Dt(o.H,function(g,T){ke(f,T,g)}),o.l&&Dt({},function(g,T){ke(f,T,g)})}function s(o,f,g){g=Math.min(o.i.length,g);const T=o.l?v(o.l.Ka,o.l,o):null;e:{var M=o.i;let de=-1;for(;;){const Ue=["count="+g];de==-1?g>0?(de=M[0].g,Ue.push("ofs="+de)):de=0:Ue.push("ofs="+de);let Ee=!0;for(let Fe=0;Fe<g;Fe++){var O=M[Fe].g;const $e=M[Fe].map;if(O-=de,O<0)de=Math.max(0,M[Fe].g-100),Ee=!1;else try{O="req"+O+"_"||"";try{var Y=$e instanceof Map?$e:Object.entries($e);for(const[ut,it]of Y){let He=it;p(it)&&(He=Ui(it)),Ue.push(O+ut+"="+encodeURIComponent(He))}}catch(ut){throw Ue.push(O+"type="+encodeURIComponent("_badmap")),ut}}catch{T&&T($e)}}if(Ee){Y=Ue.join("&");break e}}Y=void 0}return o=o.i.splice(0,g),f.G=o,Y}function c(o){if(!o.g&&!o.v){o.Y=1;var f=o.Da;Je||R(),qe||(Je(),qe=!0),l.add(f,o),o.A=0}}function h(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Vn(v(o.Da,o),P(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Vn(v(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),Xt(this),m(this))};function d(o){o.B!=null&&(u.clearTimeout(o.B),o.B=null)}function m(o){o.g=new Ht(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var f=Ve(o.na);ke(f,"RID","rpc"),ke(f,"SID",o.M),ke(f,"AID",o.K),ke(f,"CI",o.F?"0":"1"),!o.F&&o.ia&&ke(f,"TO",o.ia),ke(f,"TYPE","xmlhttp"),br(o,f),o.u&&o.o&&rs(f,o.u,o.o),o.O&&(o.g.H=o.O);var g=o.g;o=o.ba,g.M=1,g.A=Un(Ve(f)),g.u=null,g.R=!0,Js(g,o)}n.Va=function(){this.C!=null&&(this.C=null,Xt(this),h(this),Be(19))};function y(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function E(o,f){var g=null;if(o.g==f){y(o),d(o),o.g=null;var T=2}else if(vr(o.h,f))g=f.G,to(o.h,f),T=1;else return;if(o.I!=0){if(f.o)if(T==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var M=o.D;T=pr(),nt(T,new Bi(T,g)),$n(o)}else c(o);else if(M=f.m,M==3||M==0&&f.X>0||!(T==1&&Pa(o,f)||T==2&&h(o)))switch(g&&g.length>0&&(f=o.h,f.i=f.i.concat(g)),M){case 1:A(o,5);break;case 4:A(o,10);break;case 3:A(o,6);break;default:A(o,2)}}}function P(o,f){let g=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(g*=2),g*f}function A(o,f){if(o.j.info("Error code "+f),f==2){var g=v(o.bb,o),T=o.Ua;const M=!T;T=new Ot(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ct(T,"https"),Un(T),M?oo(T.toString(),g):ao(T.toString(),g)}else Be(2);o.I=0,o.l&&o.l.pa(f),N(o),us(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function N(o){if(o.I=0,o.ja=[],o.l){const f=Yi(o.h);(f.length!=0||o.i.length!=0)&&(z(o.ja,f),z(o.ja,o.i),o.h.i.length=0,$(o.i),o.i.length=0),o.l.oa()}}function q(o,f,g){var T=g instanceof Ot?Ve(g):new Ot(g);if(T.g!="")f&&(T.g=f+"."+T.g),zt(T,T.u);else{var M=u.location;T=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;const O=new Ot(null);T&&Ct(O,T),f&&(O.g=f),M&&zt(O,M),g&&(O.h=g),T=O}return g=o.G,f=o.wa,g&&f&&ke(T,g,f),ke(T,"VER",o.ka),br(o,T),T}function H(o,f,g){if(f&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Aa&&!o.ma?new Me(new ns({ab:g})):new Me(o.ma),f.Fa(o.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function U(){}n=U.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function J(){}J.prototype.g=function(o,f){return new oe(o,f)};function oe(o,f){Ze.call(this),this.g=new lo(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(o?o["X-WebChannel-Client-Profile"]=f.sa:o={"X-WebChannel-Client-Profile":f.sa}),this.g.U=o,(o=f&&f.Qb)&&!b(o)&&(this.g.u=o),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Le(this)}C(oe,Ze),oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){cs(this.g)},oe.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.v&&(g={},g.__data__=Ui(o),o=g);f.i.push(new Zs(f.Ya++,o)),f.I==3&&$n(f)},oe.prototype.N=function(){this.g.l=null,delete this.j,cs(this.g),delete this.g,oe.Z.N.call(this)};function Te(o){Nt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}C(Te,Nt);function _e(){$t.call(this),this.status=1}C(_e,$t);function Le(o){this.g=o}C(Le,U),Le.prototype.ra=function(){nt(this.g,"a")},Le.prototype.qa=function(o){nt(this.g,new Te(o))},Le.prototype.pa=function(o){nt(this.g,new _e)},Le.prototype.oa=function(){nt(this.g,"b")},J.prototype.createWebChannel=J.prototype.g,oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,Qh=function(){return new J},Kh=function(){return pr()},Gh=ln,nc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vt.NO_ERROR=0,Vt.TIMEOUT=8,Vt.HTTP_ERROR=6,Ro=Vt,fn.COMPLETE="complete",Wh=fn,Nn.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Ze.prototype.listen=Ze.prototype.J,ds=Nn,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,zh=Me}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});const Xu="@firebase/firestore",Yu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Tc("@firebase/firestore");function ei(){return Or.logLevel}function ie(n,...e){if(Or.logLevel<=Ae.DEBUG){const t=e.map(Dc);Or.debug(`Firestore (${bi}): ${n}`,...t)}}function An(n,...e){if(Or.logLevel<=Ae.ERROR){const t=e.map(Dc);Or.error(`Firestore (${bi}): ${n}`,...t)}}function mi(n,...e){if(Or.logLevel<=Ae.WARN){const t=e.map(Dc);Or.warn(`Firestore (${bi}): ${n}`,...t)}}function Dc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Xh(n,r,t)}function Xh(n,e,t){let r=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw An(r),new Error(r)}function Re(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Xh(e,i,r)}function ye(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class Ky{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qy{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Tn,e.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Tn)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Yh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class Xy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Xy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ju{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=a=>{a.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ju(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ju(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Zy(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function rc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Ba(i)===Ba(a)?be(i,a):Ba(i)?1:-1}return be(n.length,e.length)}const e_=55296,t_=57343;function Ba(n){const e=n.charCodeAt(0);return e>=e_&&e<=t_}function yi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="__name__";class Jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&he(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Jt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return be(e.length,t.length)}static compareSegments(e,t){const r=Jt.isNumericId(e),i=Jt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Jt.extractNumericId(e).compare(Jt.extractNumericId(t)):rc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class Ne extends Jt{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Ne(t)}static emptyPath(){return new Ne([])}}const n_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Jt{construct(e,t,r){return new ot(e,t,r)}static isValidIdentifier(e){return n_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zu}static keyField(){return new ot([Zu])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new te(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new te(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(u=!u,i++):p!=="."||u?(r+=p,i++):(a(),i++)}if(a(),u)throw new te(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(t)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ne.fromString(e))}static fromName(e){return new ce(Ne.fromString(e).popFirst(5))}static empty(){return new ce(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e,t){if(!t)throw new te(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function r_(n,e,t,r){if(e===!0&&r===!0)throw new te(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function el(n){if(!ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tl(n){if(ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":he(12329,{type:typeof n})}function bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oa(n);throw new te(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){const t={typeString:n};return e&&(t.value=e),t}function qs(n,e){if(!Zh(n))throw new te(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new te(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=-62135596800,rl=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*rl);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nl)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rl}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qs(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Qe("string",Oe._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Oe(0,0))}static max(){return new me(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=-1;function i_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new rr(i,ce.empty(),e)}function s_(n){return new rr(n.readTime,n.key,Ss)}class rr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rr(me.min(),ce.empty(),Ss)}static max(){return new rr(me.max(),ce.empty(),Ss)}}function o_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==a_)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,r)=>{t(e)}))}static reject(e){return new X(((t,r)=>{r(e)}))}static waitFor(e){return new X(((t,r)=>{let i=0,a=0,u=!1;e.forEach((p=>{++i,p.next((()=>{++a,u&&a===i&&t()}),(_=>r(_)))})),u=!0,a===i&&t()}))}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next((i=>i?X.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new X(((r,i)=>{const a=e.length,u=new Array(a);let p=0;for(let _=0;_<a;_++){const v=_;t(e[v]).next((w=>{u[v]=w,++p,p===a&&r(u)}),(w=>i(w)))}}))}static doWhile(e,t){return new X(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function u_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Si(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}aa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=-1;function ca(n){return n==null}function zo(n){return n===0&&1/n==-1/0}function l_(n){return typeof n=="number"&&Number.isInteger(n)&&!zo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="";function h_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=il(e)),e=f_(n.get(t),e);return il(e)}function f_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case ef:t+="";break;default:t+=a}}return t}function il(n){return n+ef+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Lr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=a??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new st(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ol(this.data.getIterator())}getIteratorFrom(e){return new ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ye(this.comparator);return t.data=e,t}}class ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ut([])}unionWith(e){let t=new Ye(ot.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new nf("Invalid base64 string: "+a):a}})(e);return new at(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let u=0;u<i.length;++u)a+=String.fromCharCode(i[u]);return a})(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const d_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=d_.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="server_timestamp",sf="__type__",of="__previous_value__",af="__local_write_time__";function Oc(n){return(n?.mapValue?.fields||{})[sf]?.stringValue===rf}function ua(n){const e=n.mapValue.fields[of];return Oc(e)?ua(e):e}function Rs(n){const e=ir(n.mapValue.fields[af].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r,i,a,u,p,_,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=w}}const Wo="(default)";class Ps{constructor(e,t){this.projectId=e,this.database=t||Wo}static empty(){return new Ps("","")}get isDefaultDatabase(){return this.database===Wo}isEqual(e){return e instanceof Ps&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="__type__",g_="__max__",Eo={mapValue:{}},uf="__vector__",Go="value";function or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oc(n)?4:y_(n)?9007199254740991:m_(n)?10:11:he(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=or(n);if(t!==or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rs(n).isEqual(Rs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const u=ir(i.timestampValue),p=ir(a.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return sr(i.bytesValue).isEqual(sr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return ze(i.geoPointValue.latitude)===ze(a.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ze(i.integerValue)===ze(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const u=ze(i.doubleValue),p=ze(a.doubleValue);return u===p?zo(u)===zo(p):isNaN(u)&&isNaN(p)}return!1})(n,e);case 9:return yi(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return(function(i,a){const u=i.mapValue.fields||{},p=a.mapValue.fields||{};if(sl(u)!==sl(p))return!1;for(const _ in u)if(u.hasOwnProperty(_)&&(p[_]===void 0||!on(u[_],p[_])))return!1;return!0})(n,e);default:return he(52216,{left:n})}}function ks(n,e){return(n.values||[]).find((t=>on(t,e)))!==void 0}function _i(n,e){if(n===e)return 0;const t=or(n),r=or(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const p=ze(a.integerValue||a.doubleValue),_=ze(u.integerValue||u.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return al(n.timestampValue,e.timestampValue);case 4:return al(Rs(n),Rs(e));case 5:return rc(n.stringValue,e.stringValue);case 6:return(function(a,u){const p=sr(a),_=sr(u);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const p=a.split("/"),_=u.split("/");for(let v=0;v<p.length&&v<_.length;v++){const w=be(p[v],_[v]);if(w!==0)return w}return be(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const p=be(ze(a.latitude),ze(u.latitude));return p!==0?p:be(ze(a.longitude),ze(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return cl(n.arrayValue,e.arrayValue);case 10:return(function(a,u){const p=a.fields||{},_=u.fields||{},v=p[Go]?.arrayValue,w=_[Go]?.arrayValue,C=be(v?.values?.length||0,w?.values?.length||0);return C!==0?C:cl(v,w)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Eo.mapValue&&u===Eo.mapValue)return 0;if(a===Eo.mapValue)return 1;if(u===Eo.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),v=u.fields||{},w=Object.keys(v);_.sort(),w.sort();for(let C=0;C<_.length&&C<w.length;++C){const x=rc(_[C],w[C]);if(x!==0)return x;const $=_i(p[_[C]],v[w[C]]);if($!==0)return $}return be(_.length,w.length)})(n.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function al(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=ir(n),r=ir(e),i=be(t.seconds,r.seconds);return i!==0?i:be(t.nanos,r.nanos)}function cl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=_i(t[i],r[i]);if(a)return a}return be(t.length,r.length)}function vi(n){return ic(n)}function ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ir(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return sr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=ic(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const u of r)a?a=!1:i+=",",i+=`${u}:${ic(t.fields[u])}`;return i+"}"})(n.mapValue):he(61005,{value:n})}function Po(n){switch(or(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(n);return e?16+Po(e):16;case 5:return 2*n.stringValue.length;case 6:return sr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Po(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Lr(r.fields,((a,u)=>{i+=a.length+Po(u)})),i})(n.mapValue);default:throw he(13486,{value:n})}}function ul(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function Mc(n){return!!n&&"arrayValue"in n}function ll(n){return!!n&&"nullValue"in n}function hl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ko(n){return!!n&&"mapValue"in n}function m_(n){return(n?.mapValue?.fields||{})[cf]?.stringValue===uf}function vs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Lr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=vs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vs(n.arrayValue.values[t]);return e}return{...n}}function y_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===g_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ko(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(t)}setAll(e){let t=ot.emptyPath(),r={},i=[];e.forEach(((u,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}u?r[p.lastSegment()]=vs(u):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());ko(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ko(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Lr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Pt(vs(this.value))}}function lf(n){const e=[];return Lr(n.fields,((t,r)=>{const i=new ot([t]);if(ko(r)){const a=lf(r.mapValue).fields;if(a.length===0)e.push(i);else for(const u of a)e.push(i.child(u))}else e.push(i)})),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,i,a,u,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=u,this.documentState=p}static newInvalidDocument(e){return new dt(e,0,me.min(),me.min(),me.min(),Pt.empty(),0)}static newFoundDocument(e,t,r,i){return new dt(e,1,t,me.min(),r,i,0)}static newNoDocument(e,t){return new dt(e,2,t,me.min(),me.min(),Pt.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,me.min(),me.min(),Pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.position=e,this.inclusive=t}}function fl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],u=n.position[i];if(a.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=_i(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function dl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function __(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{}class Ke extends hf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new E_(e,t,r):t==="array-contains"?new I_(e,r):t==="in"?new A_(e,r):t==="not-in"?new b_(e,r):t==="array-contains-any"?new C_(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new T_(e,r):new w_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_i(t,this.value)):t!==null&&or(this.value)===or(t)&&this.matchesComparison(_i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends hf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Bt(e,t)}matches(e){return ff(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ff(n){return n.op==="and"}function df(n){return v_(n)&&ff(n)}function v_(n){for(const e of n.filters)if(e instanceof Bt)return!1;return!0}function oc(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+vi(n.value);if(df(n))return n.filters.map((e=>oc(e))).join(",");{const e=n.filters.map((t=>oc(t))).join(",");return`${n.op}(${e})`}}function pf(n,e){return n instanceof Ke?(function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)})(n,e):n instanceof Bt?(function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,u,p)=>a&&pf(u,i.filters[p])),!0):!1})(n,e):void he(19439)}function gf(n){return n instanceof Ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${vi(t.value)}`})(n):n instanceof Bt?(function(t){return t.op.toString()+" {"+t.getFilters().map(gf).join(" ,")+"}"})(n):"Filter"}class E_ extends Ke{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class T_ extends Ke{constructor(e,t){super(e,"in",t),this.keys=mf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class w_ extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=mf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mf(n,e){return(e.arrayValue?.values||[]).map((t=>ce.fromName(t.referenceValue)))}class I_ extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mc(t)&&ks(t.arrayValue,this.value)}}class A_ extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ks(this.value.arrayValue,t)}}class b_ extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ks(this.value.arrayValue,t)}}class C_ extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ks(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t=null,r=[],i=[],a=null,u=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=u,this.endAt=p,this.Te=null}}function pl(n,e=null,t=[],r=[],i=null,a=null,u=null){return new S_(n,e,t,r,i,a,u)}function Lc(n){const e=ye(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>oc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>vi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>vi(r))).join(",")),e.Te=t}return e.Te}function Fc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!__(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dl(n.startAt,e.startAt)&&dl(n.endAt,e.endAt)}function ac(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t=null,r=[],i=[],a=null,u="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=u,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function R_(n,e,t,r,i,a,u,p){return new Ri(n,e,t,r,i,a,u,p)}function Uc(n){return new Ri(n)}function gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yf(n){return n.collectionGroup!==null}function Es(n){const e=ye(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let p=new Ye(ot.comparator);return u.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new xs(a,r))})),t.has(ot.keyField().canonicalString())||e.Ie.push(new xs(ot.keyField(),r))}return e.Ie}function tn(n){const e=ye(n);return e.Ee||(e.Ee=P_(e,Es(n))),e.Ee}function P_(n,e){if(n.limitType==="F")return pl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new xs(i.field,a)}));const t=n.endAt?new Ko(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ko(n.startAt.position,n.startAt.inclusive):null;return pl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cc(n,e){const t=n.filters.concat([e]);return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uc(n,e,t){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function la(n,e){return Fc(tn(n),tn(e))&&n.limitType===e.limitType}function _f(n){return`${Lc(tn(n))}|lt:${n.limitType}`}function ti(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>gf(i))).join(", ")}]`),ca(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>vi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>vi(i))).join(",")),`Target(${r})`})(tn(n))}; limitType=${n.limitType})`}function ha(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ce.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of Es(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(u,p,_){const v=fl(u,p,_);return u.inclusive?v<=0:v<0})(r.startAt,Es(r),i)||r.endAt&&!(function(u,p,_){const v=fl(u,p,_);return u.inclusive?v>=0:v>0})(r.endAt,Es(r),i))})(n,e)}function k_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vf(n){return(e,t)=>{let r=!1;for(const i of Es(n)){const a=x_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function x_(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):(function(a,u,p){const _=u.data.field(a),v=p.data.field(a);return _!==null&&v!==null?_i(_,v):he(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return tf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new je(ce.comparator);function Cn(){return D_}const Ef=new je(ce.comparator);function ps(...n){let e=Ef;for(const t of n)e=e.insert(t.key,t);return e}function Tf(n){let e=Ef;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Pr(){return Ts()}function wf(){return Ts()}function Ts(){return new Fr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const N_=new je(ce.comparator),V_=new Ye(ce.comparator);function Ce(...n){let e=V_;for(const t of n)e=e.add(t);return e}const O_=new Ye(be);function M_(){return O_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function If(n){return{integerValue:""+n}}function L_(n,e){return l_(e)?If(e):jc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this._=void 0}}function F_(n,e,t){return n instanceof Ds?(function(i,a){const u={fields:{[sf]:{stringValue:rf},[af]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Oc(a)&&(a=ua(a)),a&&(u.fields[of]=a),{mapValue:u}})(t,e):n instanceof Ns?bf(n,e):n instanceof Vs?Cf(n,e):(function(i,a){const u=Af(i,a),p=ml(u)+ml(i.Ae);return sc(u)&&sc(i.Ae)?If(p):jc(i.serializer,p)})(n,e)}function U_(n,e,t){return n instanceof Ns?bf(n,e):n instanceof Vs?Cf(n,e):t}function Af(n,e){return n instanceof Qo?(function(r){return sc(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Ds extends fa{}class Ns extends fa{constructor(e){super(),this.elements=e}}function bf(n,e){const t=Sf(e);for(const r of n.elements)t.some((i=>on(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Vs extends fa{constructor(e){super(),this.elements=e}}function Cf(n,e){let t=Sf(e);for(const r of n.elements)t=t.filter((i=>!on(i,r)));return{arrayValue:{values:t}}}class Qo extends fa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ml(n){return ze(n.integerValue||n.doubleValue)}function Sf(n){return Mc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.field=e,this.transform=t}}function q_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof Vs&&i instanceof Vs?yi(r.elements,i.elements,on):r instanceof Qo&&i instanceof Qo?on(r.Ae,i.Ae):r instanceof Ds&&i instanceof Ds})(n.transform,e.transform)}class B_{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class da{}function Rf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qc(n.key,jt.none()):new Bs(n.key,n.data,jt.none());{const t=n.data,r=Pt.empty();let i=new Ye(ot.comparator);for(let a of e.fields)if(!i.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),i=i.add(a)}return new Ur(n.key,r,new Ut(i.toArray()),jt.none())}}function $_(n,e,t){n instanceof Bs?(function(i,a,u){const p=i.value.clone(),_=_l(i.fieldTransforms,a,u.transformResults);p.setAll(_),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Ur?(function(i,a,u){if(!xo(i.precondition,a))return void a.convertToUnknownDocument(u.version);const p=_l(i.fieldTransforms,a,u.transformResults),_=a.data;_.setAll(Pf(i)),_.setAll(p),a.convertToFoundDocument(u.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function ws(n,e,t,r){return n instanceof Bs?(function(a,u,p,_){if(!xo(a.precondition,u))return p;const v=a.value.clone(),w=vl(a.fieldTransforms,_,u);return v.setAll(w),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ur?(function(a,u,p,_){if(!xo(a.precondition,u))return p;const v=vl(a.fieldTransforms,_,u),w=u.data;return w.setAll(Pf(a)),w.setAll(v),u.convertToFoundDocument(u.version,w).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((C=>C.field)))})(n,e,t,r):(function(a,u,p){return xo(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):p})(n,e,t)}function H_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=Af(r.transform,i||null);a!=null&&(t===null&&(t=Pt.empty()),t.set(r.field,a))}return t||null}function yl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yi(r,i,((a,u)=>q_(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bs extends da{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends da{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Pf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function _l(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],u=a.transform,p=e.data.field(a.field);r.set(a.field,U_(u,p,t[i]))}return r}function vl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,u=t.data.field(i.field);r.set(i.field,F_(a,u,e))}return r}class qc extends da{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z_ extends da{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&$_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wf();return this.mutations.forEach((i=>{const a=e.get(i.key),u=a.overlayedDocument;let p=this.applyToLocalView(u,a.mutatedFields);p=t.has(i.key)?null:p;const _=Rf(u,p);_!==null&&r.set(i.key,_),u.isValidDocument()||u.convertToNoDocument(me.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,((t,r)=>yl(t,r)))&&yi(this.baseMutations,e.baseMutations,((t,r)=>yl(t,r)))}}class Bc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return N_})();const a=e.mutations;for(let u=0;u<a.length;u++)i=i.insert(a[u].key,r[u].version);return new Bc(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Se;function Q_(n){switch(n){case K.OK:return he(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return he(15467,{code:n})}}function kf(n){if(n===void 0)return An("GRPC error has no .code"),K.UNKNOWN;switch(n){case Ge.OK:return K.OK;case Ge.CANCELLED:return K.CANCELLED;case Ge.UNKNOWN:return K.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return K.INTERNAL;case Ge.UNAVAILABLE:return K.UNAVAILABLE;case Ge.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Ge.NOT_FOUND:return K.NOT_FOUND;case Ge.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Ge.ABORTED:return K.ABORTED;case Ge.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Ge.DATA_LOSS:return K.DATA_LOSS;default:return he(39323,{code:n})}}(Se=Ge||(Ge={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new tr([4294967295,4294967295],0);function El(n){const e=X_().encode(n),t=new Hh;return t.update(e),new Uint8Array(t.digest())}function Tl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new tr([t,r],0),new tr([i,a],0)]}class $c{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gs(`Invalid padding: ${t}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=tr.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(tr.fromNumber(r)));return i.compare(Y_)===1&&(i=new tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=El(e),[r,i]=Tl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new $c(a,i,t);return r.forEach((p=>u.insert(p))),u}insert(e){if(this.ge===0)return;const t=El(e),[r,i]=Tl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pa(me.min(),i,new je(be),Cn(),Ce())}}class $s{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $s(r,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class xf{constructor(e,t){this.targetId=e,this.Ce=t}}class Df{constructor(e,t,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class wl{constructor(){this.ve=0,this.Fe=Il(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),r=Ce();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:he(38017,{changeType:a})}})),new $s(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Il()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class J_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cn(),this.Je=To(),this.He=To(),this.Ye=new je(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(ac(a))if(r===0){const u=new ce(a.path);this.et(t,u,dt.newNoDocument(u,me.min()))}else Re(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const p=this.ut(e),_=p?this.ct(p,e,u):1;if(_!==0){this.it(t);const v=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let u,p;try{u=sr(r).toUint8Array()}catch(_){if(_ instanceof nf)return mi("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new $c(u,i,a)}catch(_){return mi(_ instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const u=this.Ge.ht(),p=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const p=this.ot(u);if(p){if(a.current&&ac(p.target)){const _=new ce(p.target.path);this.It(_).has(u)||this.Et(u,_)||this.et(u,_,dt.newNoDocument(_,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=Ce();this.He.forEach(((a,u)=>{let p=!0;u.forEachWhile((_=>{const v=this.ot(_);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const i=new pa(e,t,this.Ye,this.je,r);return this.je=Cn(),this.Je=To(),this.He=To(),this.Ye=new je(be),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new wl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ye(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ye(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function To(){return new je(ce.comparator)}function Il(){return new je(ce.comparator)}const Z_={asc:"ASCENDING",desc:"DESCENDING"},ev={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tv={and:"AND",or:"OR"};class nv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lc(n,e){return n.useProto3Json||ca(e)?e:{value:e}}function Xo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rv(n,e){return Xo(n,e.toTimestamp())}function nn(n){return Re(!!n,49232),me.fromTimestamp((function(t){const r=ir(t);return new Oe(r.seconds,r.nanos)})(n))}function Hc(n,e){return hc(n,e).canonicalString()}function hc(n,e){const t=(function(i){return new Ne(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Vf(n){const e=Ne.fromString(n);return Re(Uf(e),10190,{key:e.toString()}),e}function fc(n,e){return Hc(n.databaseId,e.path)}function $a(n,e){const t=Vf(e);if(t.get(1)!==n.databaseId.projectId)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(Mf(t))}function Of(n,e){return Hc(n.databaseId,e)}function iv(n){const e=Vf(n);return e.length===4?Ne.emptyPath():Mf(e)}function dc(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mf(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Al(n,e,t){return{name:fc(n,e),fields:t.value.mapValue.fields}}function sv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:he(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,w){return v.useProto3Json?(Re(w===void 0||typeof w=="string",58123),at.fromBase64String(w||"")):(Re(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),at.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,p=u&&(function(v){const w=v.code===void 0?K.UNKNOWN:kf(v.code);return new te(w,v.message||"")})(u);t=new Df(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$a(n,r.document.name),a=nn(r.document.updateTime),u=r.document.createTime?nn(r.document.createTime):me.min(),p=new Pt({mapValue:{fields:r.document.fields}}),_=dt.newFoundDocument(i,a,u,p),v=r.targetIds||[],w=r.removedTargetIds||[];t=new Do(v,w,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$a(n,r.document),a=r.readTime?nn(r.readTime):me.min(),u=dt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Do([],p,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$a(n,r.document),a=r.removedTargetIds||[];t=new Do([],a,i,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,u=new K_(i,a),p=r.targetId;t=new xf(p,u)}}return t}function ov(n,e){let t;if(e instanceof Bs)t={update:Al(n,e.key,e.value)};else if(e instanceof qc)t={delete:fc(n,e.key)};else if(e instanceof Ur)t={update:Al(n,e.key,e.data),updateMask:gv(e.fieldMask)};else{if(!(e instanceof z_))return he(16599,{Vt:e.type});t={verify:fc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const p=u.transform;if(p instanceof Ds)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ns)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Vs)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Qo)return{fieldPath:u.field.canonicalString(),increment:p.Ae};throw he(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:rv(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:he(27497)})(n,e.precondition)),t}function av(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map((t=>(function(i,a){let u=i.updateTime?nn(i.updateTime):nn(a);return u.isEqual(me.min())&&(u=nn(a)),new B_(u,i.transformResults||[])})(t,e)))):[]}function cv(n,e){return{documents:[Of(n,e.path)]}}function uv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Of(n,i);const a=(function(v){if(v.length!==0)return Ff(Bt.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(v){if(v.length!==0)return v.map((w=>(function(x){return{field:ni(x.field),direction:fv(x.dir)}})(w)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const p=lc(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function lv(n){let e=iv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Re(r===1,65062);const w=t.from[0];w.allDescendants?i=w.collectionId:e=e.child(w.collectionId)}let a=[];t.where&&(a=(function(C){const x=Lf(C);return x instanceof Bt&&df(x)?x.getFilters():[x]})(t.where));let u=[];t.orderBy&&(u=(function(C){return C.map((x=>(function(z){return new xs(ri(z.field),(function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(x)))})(t.orderBy));let p=null;t.limit&&(p=(function(C){let x;return x=typeof C=="object"?C.value:C,ca(x)?null:x})(t.limit));let _=null;t.startAt&&(_=(function(C){const x=!!C.before,$=C.values||[];return new Ko($,x)})(t.startAt));let v=null;return t.endAt&&(v=(function(C){const x=!C.before,$=C.values||[];return new Ko($,x)})(t.endAt)),R_(e,i,u,a,p,"F",_,v)}function hv(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ri(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(t.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ri(t.unaryFilter.field);return Ke.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ri(t.unaryFilter.field);return Ke.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ke.create(ri(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Bt.create(t.compositeFilter.filters.map((r=>Lf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(n):he(30097,{filter:n})}function fv(n){return Z_[n]}function dv(n){return ev[n]}function pv(n){return tv[n]}function ni(n){return{fieldPath:n.canonicalString()}}function ri(n){return ot.fromServerFormat(n.fieldPath)}function Ff(n){return n instanceof Ke?(function(t){if(t.op==="=="){if(hl(t.value))return{unaryFilter:{field:ni(t.field),op:"IS_NAN"}};if(ll(t.value))return{unaryFilter:{field:ni(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hl(t.value))return{unaryFilter:{field:ni(t.field),op:"IS_NOT_NAN"}};if(ll(t.value))return{unaryFilter:{field:ni(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(t.field),op:dv(t.op),value:t.value}}})(n):n instanceof Bt?(function(t){const r=t.getFilters().map((i=>Ff(i)));return r.length===1?r[0]:{compositeFilter:{op:pv(t.op),filters:r}}})(n):he(54877,{filter:n})}function gv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Uf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,r,i,a=me.min(),u=me.min(),p=at.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.yt=e}}function yv(n){const e=lv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.Cn=new vv}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(rr.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class vv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ye(Ne.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jf=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(jf,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ei(0)}static cr(){return new Ei(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="LruGarbageCollector",Ev=1048576;function Sl([n,e],[t,r]){const i=be(n,t);return i===0?be(e,r):i}class Tv{constructor(e){this.Ir=e,this.buffer=new Ye(Sl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Cl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Si(t)?ie(Cl,"Ignoring IndexedDB error during garbage collection: ",t):await Ci(t)}await this.Vr(3e5)}))}}class Iv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(aa.ce);const r=new Tv(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(bl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,u,p,_,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),i=this.params.maximumSequenceNumbersToCollect):i=C,u=Date.now(),this.nthSequenceNumber(e,i)))).next((C=>(r=C,p=Date.now(),this.removeTargets(e,r,t)))).next((C=>(a=C,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((C=>(v=Date.now(),ei()<=Ae.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-w}ms
	Determined least recently used ${i} in `+(p-u)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${C} documents in `+(v-_)+`ms
Total Duration: ${v-w}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:C}))))}}function Av(n,e){return new Iv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.changes=new Fr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&ws(r.mutation,i,Ut.empty(),Oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ce()){const i=Pr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let u=ps();return a.forEach(((p,_)=>{u=u.insert(p,_.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Pr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ce())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((u,p)=>{t.set(u,p)}))}))}computeViews(e,t,r,i){let a=Cn();const u=Ts(),p=(function(){return Ts()})();return t.forEach(((_,v)=>{const w=r.get(v.key);i.has(v.key)&&(w===void 0||w.mutation instanceof Ur)?a=a.insert(v.key,v):w!==void 0?(u.set(v.key,w.mutation.getFieldMask()),ws(w.mutation,v,w.mutation.getFieldMask(),Oe.now())):u.set(v.key,Ut.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((v,w)=>u.set(v,w))),t.forEach(((v,w)=>p.set(v,new Cv(w,u.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=Ts();let i=new je(((u,p)=>u-p)),a=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const p of u)p.keys().forEach((_=>{const v=t.get(_);if(v===null)return;let w=r.get(_)||Ut.empty();w=p.applyToLocalView(v,w),r.set(_,w);const C=(i.get(p.batchId)||Ce()).add(_);i=i.insert(p.batchId,C)}))})).next((()=>{const u=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,w=_.value,C=wf();w.forEach((x=>{if(!a.has(x)){const $=Rf(t.get(x),r.get(x));$!==null&&C.set(x,$),a=a.add(x)}})),u.push(this.documentOverlayCache.saveOverlays(e,v,C))}return X.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const u=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):X.resolve(Pr());let p=Ss,_=a;return u.next((v=>X.forEach(v,((w,C)=>(p<C.largestBatchId&&(p=C.largestBatchId),a.get(w)?X.resolve():this.remoteDocumentCache.getEntry(e,w).next((x=>{_=_.insert(w,x)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,_,v,Ce()))).next((w=>({batchId:p,changes:Tf(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((r=>{let i=ps();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let u=ps();return this.indexManager.getCollectionParents(e,a).next((p=>X.forEach(p,(_=>{const v=(function(C,x){return new Ri(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((w=>{w.forEach(((C,x)=>{u=u.insert(C,x)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((u=>{a.forEach(((_,v)=>{const w=v.getKey();u.get(w)===null&&(u=u.insert(w,dt.newInvalidDocument(w)))}));let p=ps();return u.forEach(((_,v)=>{const w=a.get(_);w!==void 0&&ws(w.mutation,v,Ut.empty(),Oe.now()),ha(t,v)&&(p=p.insert(_,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return X.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:yv(i.bundledQuery),readTime:nn(i.readTime)}})(t)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.overlays=new je(ce.comparator),this.qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pr();return X.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),X.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const i=Pr(),a=t.length+1,u=new ce(t.child("")),p=this.overlays.getIteratorFrom(u);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return X.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new je(((v,w)=>v-w));const u=this.overlays.getIterator();for(;u.hasNext();){const v=u.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let w=a.get(v.largestBatchId);w===null&&(w=Pr(),a=a.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Pr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,w)=>p.set(v,w))),!(p.size()>=i)););return X.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new G_(t,r));let a=this.qr.get(t);a===void 0&&(a=Ce(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.Qr=new Ye(tt.$r),this.Ur=new Ye(tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new tt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new tt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ce(new Ne([])),r=new tt(t,e),i=new tt(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ce(new Ne([])),r=new tt(t,e),i=new tt(t,e+1);let a=Ce();return this.Ur.forEachInRange([r,i],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new tt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ce.comparator(e.key,t.key)||be(e.Yr,t.Yr)}static Kr(e,t){return be(e.Yr,t.Yr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(tt.$r)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new W_(a,t,r,i);this.mutationQueue.push(u);for(const p of i)this.Zr=this.Zr.add(new tt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Vc:this.tr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new tt(t,0),i=new tt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(u=>{const p=this.Xr(u.Yr);a.push(p)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ye(be);return t.forEach((i=>{const a=new tt(i,0),u=new tt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(p=>{r=r.add(p.Yr)}))})),X.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ce.isDocumentKey(a)||(a=a.child(""));const u=new tt(new ce(a),0);let p=new Ye(be);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(_.Yr)),!0)}),u),X.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return X.forEach(t.mutations,(i=>{const a=new tt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new tt(t,0),i=this.Zr.firstAfterOrEqual(r);return X.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.ri=e,this.docs=(function(){return new je(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Cn();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():dt.newInvalidDocument(i))})),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Cn();const u=t.path,p=new ce(u.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:w}}=_.getNext();if(!u.isPrefixOf(v.path))break;v.path.length>u.length+1||o_(s_(w),r)<=0||(i.has(w.key)||ha(t,w))&&(a=a.insert(w.key,w.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,r,i){he(9500)}ii(e,t){return X.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Nv(this)}getSize(e){return X.resolve(this.size)}}class Nv extends bv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),X.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.persistence=e,this.si=new Fr((t=>Lc(t)),Fc),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.oi=0,this._i=new zc,this.targetCount=0,this.ai=Ei.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),X.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ei(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Pr(t),X.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((u,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),X.waitFor(a).next((()=>i))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((u=>{a.push(i.markPotentiallyOrphaned(e,u))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.ui={},this.overlays={},this.ci=new aa(0),this.li=!1,this.li=!0,this.hi=new kv,this.referenceDelegate=e(this),this.Pi=new Vv(this),this.indexManager=new _v,this.remoteDocumentCache=(function(i){return new Dv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new mv(t),this.Ii=new Rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Pv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new xv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const i=new Ov(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return X.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Ov extends c_{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Ri=new zc,this.Vi=null}static mi(e){return new Wc(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(r=>{const i=ce.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,me.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return X.or([()=>X.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Yo{constructor(e,t){this.persistence=e,this.pi=new Fr((r=>h_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Av(this,t)}static mi(e,t){return new Yo(e,t)}Ei(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return X.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?X.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(u=>this.br(e,u,t).next((p=>{p||(r++,a.removeEntry(u,me.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Po(e.data.value)),t}br(e,t,r){return X.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return X.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Ce(),i=Ce();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Gc(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ap()?8:u_(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Mv;return this.Ss(e,t,u).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,u,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(ei()<=Ae.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ti(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(ei()<=Ae.DEBUG&&ie("QueryEngine","Query:",ti(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ei()<=Ae.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ti(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(t))):X.resolve())}ys(e,t){if(gl(t))return X.resolve(null);let r=tn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=uc(t,null,"F"),r=tn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Ce(...a);return this.ps.getDocuments(e,u).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const v=this.Ds(t,p);return this.Cs(t,v,u,_.readTime)?this.ys(e,uc(t,null,"F")):this.vs(e,v,t,_)}))))})))))}ws(e,t,r,i){return gl(t)||i.isEqual(me.min())?X.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,i)?X.resolve(null):(ei()<=Ae.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ti(t)),this.vs(e,u,t,i_(i,Ss)).next((p=>p)))}))}Ds(e,t){let r=new Ye(vf(e));return t.forEach(((i,a)=>{ha(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return ei()<=Ae.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ti(t)),this.ps.getDocumentsMatchingQuery(e,t,rr.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="LocalStore",Fv=3e8;class Uv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new je(be),this.xs=new Fr((a=>Lc(a)),Fc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function jv(n,e,t,r){return new Uv(n,e,t,r)}async function Bf(n,e){const t=ye(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],p=[];let _=Ce();for(const v of i){u.push(v.batchId);for(const w of v.mutations)_=_.add(w.key)}for(const v of a){p.push(v.batchId);for(const w of v.mutations)_=_.add(w.key)}return t.localDocuments.getDocuments(r,_).next((v=>({Ls:v,removedBatchIds:u,addedBatchIds:p})))}))}))}function qv(n,e){const t=ye(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,w){const C=v.batch,x=C.keys();let $=X.resolve();return x.forEach((z=>{$=$.next((()=>w.getEntry(_,z))).next((G=>{const Q=v.docVersions.get(z);Re(Q!==null,48541),G.version.compareTo(Q)<0&&(C.applyToRemoteDocument(G,v),G.isValidDocument()&&(G.setReadTime(v.commitVersion),w.addEntry(G)))}))})),$.next((()=>p.mutationQueue.removeMutationBatch(_,C)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Ce();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function $f(n){const e=ye(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Bv(n,e){const t=ye(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((w,C)=>{const x=i.get(C);if(!x)return;p.push(t.Pi.removeMatchingKeys(a,w.removedDocuments,C).next((()=>t.Pi.addMatchingKeys(a,w.addedDocuments,C))));let $=x.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(C)!==null?$=$.withResumeToken(at.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&($=$.withResumeToken(w.resumeToken,r)),i=i.insert(C,$),(function(G,Q,Z){return G.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=Fv?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(x,$,w)&&p.push(t.Pi.updateTargetData(a,$))}));let _=Cn(),v=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,w))})),p.push($v(a,u,e.documentUpdates).next((w=>{_=w.ks,v=w.qs}))),!r.isEqual(me.min())){const w=t.Pi.getLastRemoteSnapshotVersion(a).next((C=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(w)}return X.waitFor(p).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,v))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function $v(n,e,t){let r=Ce(),i=Ce();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Cn();return t.forEach(((p,_)=>{const v=a.get(p);_.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(me.min())?(e.removeEntry(p,_.readTime),u=u.insert(p,_)):!v.isValidDocument()||_.version.compareTo(v.version)>0||_.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(_),u=u.insert(p,_)):ie(Kc,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",_.version)})),{ks:u,qs:i}}))}function Hv(n,e){const t=ye(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Vc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function zv(n,e){const t=ye(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,X.resolve(i)):t.Pi.allocateTargetId(r).next((u=>(i=new Yn(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function pc(n,e,t){const r=ye(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Si(u))throw u;ie(Kc,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Rl(n,e,t){const r=ye(n);let i=me.min(),a=Ce();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(_,v,w){const C=ye(_),x=C.xs.get(w);return x!==void 0?X.resolve(C.Ms.get(x)):C.Pi.getTargetData(v,w)})(r,u,tn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?i:me.min(),t?a:Ce()))).next((p=>(Wv(r,k_(e),p),{documents:p,Qs:a})))))}function Wv(n,e,t){let r=n.Os.get(e)||me.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class Pl{constructor(){this.activeTargetIds=M_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gv{constructor(){this.Mo=new Pl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="ConnectivityMonitor";class xl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(kl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(kl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=null;function gc(){return wo===null?wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():wo++,"0x"+wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="RestConnection",Qv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Wo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const u=gc(),p=this.zo(e,t.toUriEncodedString());ie(Ha,`Sending RPC '${e}' ${u}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:v}=new URL(p),w=wi(v);return this.Jo(e,p,_,r,w).then((C=>(ie(Ha,`Received RPC '${e}' ${u}: `,C),C)),(C=>{throw mi(Ha,`RPC '${e}' ${u} failed with error: `,C,"url: ",p,"request:",r),C}))}Ho(e,t,r,i,a,u){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=Qv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Jv extends Xv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const u=gc();return new Promise(((p,_)=>{const v=new zh;v.setWithCredentials(!0),v.listenOnce(Wh.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Ro.NO_ERROR:const C=v.getResponseJson();ie(ht,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(C)),p(C);break;case Ro.TIMEOUT:ie(ht,`RPC '${e}' ${u} timed out`),_(new te(K.DEADLINE_EXCEEDED,"Request time out"));break;case Ro.HTTP_ERROR:const x=v.getStatus();if(ie(ht,`RPC '${e}' ${u} failed with status:`,x,"response text:",v.getResponseText()),x>0){let $=v.getResponseJson();Array.isArray($)&&($=$[0]);const z=$?.error;if(z&&z.status&&z.message){const G=(function(Z){const pe=Z.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(pe)>=0?pe:K.UNKNOWN})(z.status);_(new te(G,z.message))}else _(new te(K.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new te(K.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:u,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ie(ht,`RPC '${e}' ${u} completed.`)}}));const w=JSON.stringify(i);ie(ht,`RPC '${e}' ${u} sending request:`,i),v.send(t,"POST",w,r,15)}))}T_(e,t,r){const i=gc(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Qh(),p=Kh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const w=a.join("");ie(ht,`Creating RPC '${e}' stream ${i}: ${w}`,_);const C=u.createWebChannel(w,_);this.I_(C);let x=!1,$=!1;const z=new Yv({Yo:Q=>{$?ie(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Q):(x||(ie(ht,`Opening RPC '${e}' stream ${i} transport.`),C.open(),x=!0),ie(ht,`RPC '${e}' stream ${i} sending:`,Q),C.send(Q))},Zo:()=>C.close()}),G=(Q,Z,pe)=>{Q.listen(Z,(ve=>{try{pe(ve)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return G(C,ds.EventType.OPEN,(()=>{$||(ie(ht,`RPC '${e}' stream ${i} transport opened.`),z.o_())})),G(C,ds.EventType.CLOSE,(()=>{$||($=!0,ie(ht,`RPC '${e}' stream ${i} transport closed`),z.a_(),this.E_(C))})),G(C,ds.EventType.ERROR,(Q=>{$||($=!0,mi(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Q.name,"Message:",Q.message),z.a_(new te(K.UNAVAILABLE,"The operation could not be completed")))})),G(C,ds.EventType.MESSAGE,(Q=>{if(!$){const Z=Q.data[0];Re(!!Z,16349);const pe=Z,ve=pe?.error||pe[0]?.error;if(ve){ie(ht,`RPC '${e}' stream ${i} received error:`,ve);const xe=ve.status;let Je=(function(R){const S=Ge[R];if(S!==void 0)return kf(S)})(xe),qe=ve.message;Je===void 0&&(Je=K.INTERNAL,qe="Unknown error status: "+xe+" with message "+ve.message),$=!0,z.a_(new te(Je,qe)),C.close()}else ie(ht,`RPC '${e}' stream ${i} received:`,Z),z.u_(Z)}})),G(p,Gh.STAT_EVENT,(Q=>{Q.stat===nc.PROXY?ie(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Q.stat===nc.NOPROXY&&ie(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){return new nv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="PersistentStream";class zf{constructor(e,t,r,i,a,u,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(An(t.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new te(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Dl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(Dl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Zv extends zf{constructor(e,t,r,i,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=sv(this.serializer,e),r=(function(a){if(!("targetChange"in a))return me.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?me.min():u.readTime?nn(u.readTime):me.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=dc(this.serializer),t.addTarget=(function(a,u){let p;const _=u.target;if(p=ac(_)?{documents:cv(a,_)}:{query:uv(a,_).ft},p.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){p.resumeToken=Nf(a,u.resumeToken);const v=lc(a,u.expectedCount);v!==null&&(p.expectedCount=v)}else if(u.snapshotVersion.compareTo(me.min())>0){p.readTime=Xo(a,u.snapshotVersion.toTimestamp());const v=lc(a,u.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=hv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=dc(this.serializer),t.removeTarget=e,this.q_(t)}}class eE extends zf{constructor(e,t,r,i,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=av(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=dc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ov(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{}class nE extends tE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,hc(t,r),i,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(K.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,p])=>this.connection.Ho(e,hc(t,r),i,u,p,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(K.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class rE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class iE{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{jr(this)&&(ie(Mr,"Restarting streams for network reachability change."),await(async function(_){const v=ye(_);v.Ea.add(4),await Hs(v),v.Ra.set("Unknown"),v.Ea.delete(4),await ma(v)})(this))}))})),this.Ra=new rE(r,i)}}async function ma(n){if(jr(n))for(const e of n.da)await e(!0)}async function Hs(n){for(const e of n.da)await e(!1)}function Wf(n,e){const t=ye(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Jc(t)?Yc(t):Pi(t).O_()&&Xc(t,e))}function Qc(n,e){const t=ye(n),r=Pi(t);t.Ia.delete(e),r.O_()&&Gf(t,e),t.Ia.size===0&&(r.O_()?r.L_():jr(t)&&t.Ra.set("Unknown"))}function Xc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(n).Y_(e)}function Gf(n,e){n.Va.Ue(e),Pi(n).Z_(e)}function Yc(n){n.Va=new J_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pi(n).start(),n.Ra.ua()}function Jc(n){return jr(n)&&!Pi(n).x_()&&n.Ia.size>0}function jr(n){return ye(n).Ea.size===0}function Kf(n){n.Va=void 0}async function sE(n){n.Ra.set("Online")}async function oE(n){n.Ia.forEach(((e,t)=>{Xc(n,e)}))}async function aE(n,e){Kf(n),Jc(n)?(n.Ra.ha(e),Yc(n)):n.Ra.set("Unknown")}async function cE(n,e,t){if(n.Ra.set("Online"),e instanceof Df&&e.state===2&&e.cause)try{await(async function(i,a){const u=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,u),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){ie(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jo(n,r)}else if(e instanceof Do?n.Va.Ze(e):e instanceof xf?n.Va.st(e):n.Va.tt(e),!t.isEqual(me.min()))try{const r=await $f(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const p=a.Va.Tt(u);return p.targetChanges.forEach(((_,v)=>{if(_.resumeToken.approximateByteSize()>0){const w=a.Ia.get(v);w&&a.Ia.set(v,w.withResumeToken(_.resumeToken,u))}})),p.targetMismatches.forEach(((_,v)=>{const w=a.Ia.get(_);if(!w)return;a.Ia.set(_,w.withResumeToken(at.EMPTY_BYTE_STRING,w.snapshotVersion)),Gf(a,_);const C=new Yn(w.target,_,v,w.sequenceNumber);Xc(a,C)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){ie(Mr,"Failed to raise snapshot:",r),await Jo(n,r)}}async function Jo(n,e,t){if(!Si(e))throw e;n.Ea.add(1),await Hs(n),n.Ra.set("Offline"),t||(t=()=>$f(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ie(Mr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ma(n)}))}function Qf(n,e){return e().catch((t=>Jo(n,t,e)))}async function ya(n){const e=ye(n),t=ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vc;for(;uE(e);)try{const i=await Hv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,lE(e,i)}catch(i){await Jo(e,i)}Xf(e)&&Yf(e)}function uE(n){return jr(n)&&n.Ta.length<10}function lE(n,e){n.Ta.push(e);const t=ar(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Xf(n){return jr(n)&&!ar(n).x_()&&n.Ta.length>0}function Yf(n){ar(n).start()}async function hE(n){ar(n).ra()}async function fE(n){const e=ar(n);for(const t of n.Ta)e.ea(t.mutations)}async function dE(n,e,t){const r=n.Ta.shift(),i=Bc.from(r,e,t);await Qf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ya(n)}async function pE(n,e){e&&ar(n).X_&&await(async function(r,i){if((function(u){return Q_(u)&&u!==K.ABORTED})(i.code)){const a=r.Ta.shift();ar(r).B_(),await Qf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await ya(r)}})(n,e),Xf(n)&&Yf(n)}async function Nl(n,e){const t=ye(n);t.asyncQueue.verifyOperationInProgress(),ie(Mr,"RemoteStore received new credentials");const r=jr(t);t.Ea.add(3),await Hs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ma(t)}async function gE(n,e){const t=ye(n);e?(t.Ea.delete(2),await ma(t)):e||(t.Ea.add(2),await Hs(t),t.Ra.set("Unknown"))}function Pi(n){return n.ma||(n.ma=(function(t,r,i){const a=ye(t);return a.sa(),new Zv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:sE.bind(null,n),t_:oE.bind(null,n),r_:aE.bind(null,n),H_:cE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Jc(n)?Yc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Kf(n))}))),n.ma}function ar(n){return n.fa||(n.fa=(function(t,r,i){const a=ye(t);return a.sa(),new eE(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:hE.bind(null,n),r_:pE.bind(null,n),ta:fE.bind(null,n),na:dE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ya(n)):(await n.fa.stop(),n.Ta.length>0&&(ie(Mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const u=Date.now()+r,p=new Zc(e,t,u,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(n,e){if(An("AsyncQueue",`${e}: ${n}`),Si(n))return new te(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static emptySet(e){return new hi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=ps(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.ga=new je(ce.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ti{constructor(e,t,r,i,a,u,p,_,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const u=[];return t.forEach((p=>{u.push({type:0,doc:p})})),new Ti(e,t,hi.emptySet(t),u,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class yE{constructor(){this.queries=Ol(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ye(t),a=i.queries;i.queries=Ol(),a.forEach(((u,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new te(K.ABORTED,"Firestore shutting down"))}}function Ol(){return new Fr((n=>_f(n)),la)}async function Jf(n,e){const t=ye(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new mE,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(u){const p=eu(u,`Initialization of query '${ti(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&tu(t)}async function Zf(n,e){const t=ye(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _E(n,e){const t=ye(n);let r=!1;for(const i of e){const a=i.query,u=t.queries.get(a);if(u){for(const p of u.Sa)p.Fa(i)&&(r=!0);u.wa=i}}r&&tu(t)}function vE(n,e,t){const r=ye(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function tu(n){n.Ca.forEach((e=>{e.next()}))}var mc,Ml;(Ml=mc||(mc={})).Ma="default",Ml.Cache="cache";class ed{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.key=e}}class nd{constructor(e){this.key=e}}class EE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=vf(e),this.tu=new hi(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Vl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((w,C)=>{const x=i.get(w),$=ha(this.query,C)?C:null,z=!!x&&this.mutatedKeys.has(x.key),G=!!$&&($.hasLocalMutations||this.mutatedKeys.has($.key)&&$.hasCommittedMutations);let Q=!1;x&&$?x.data.isEqual($.data)?z!==G&&(r.track({type:3,doc:$}),Q=!0):this.su(x,$)||(r.track({type:2,doc:$}),Q=!0,(_&&this.eu($,_)>0||v&&this.eu($,v)<0)&&(p=!0)):!x&&$?(r.track({type:0,doc:$}),Q=!0):x&&!$&&(r.track({type:1,doc:x}),Q=!0,(_||v)&&(p=!0)),Q&&($?(u=u.add($),a=G?a.add(w):a.delete(w)):(u=u.delete(w),a=a.delete(w)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const w=this.query.limitType==="F"?u.last():u.first();u=u.delete(w.key),a=a.delete(w.key),r.track({type:1,doc:w})}return{tu:u,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((w,C)=>(function($,z){const G=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:Q})}};return G($)-G(z)})(w.type,C.type)||this.eu(w.doc,C.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,v=_!==this.Za;return this.Za=_,u.length!==0||v?{snapshot:new Ti(this.query,e.tu,a,u,e.mutatedKeys,_===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new nd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new td(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ti.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nu="SyncEngine";class TE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class wE{constructor(e){this.key=e,this.hu=!1}}class IE{constructor(e,t,r,i,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Fr((p=>_f(p)),la),this.Iu=new Map,this.Eu=new Set,this.du=new je(ce.comparator),this.Au=new Map,this.Ru=new zc,this.Vu={},this.mu=new Map,this.fu=Ei.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AE(n,e,t=!0){const r=cd(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await rd(r,e,t,!0),i}async function bE(n,e){const t=cd(n);await rd(t,e,!0,!1)}async function rd(n,e,t,r){const i=await zv(n.localStore,tn(e)),a=i.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await CE(n,e,a,u==="current",i.resumeToken)),n.isPrimaryClient&&t&&Wf(n.remoteStore,i),p}async function CE(n,e,t,r,i){n.pu=(C,x,$)=>(async function(G,Q,Z,pe){let ve=Q.view.ru(Z);ve.Cs&&(ve=await Rl(G.localStore,Q.query,!1).then((({documents:l})=>Q.view.ru(l,ve))));const xe=pe&&pe.targetChanges.get(Q.targetId),Je=pe&&pe.targetMismatches.get(Q.targetId)!=null,qe=Q.view.applyChanges(ve,G.isPrimaryClient,xe,Je);return Fl(G,Q.targetId,qe.au),qe.snapshot})(n,C,x,$);const a=await Rl(n.localStore,e,!0),u=new EE(e,a.Qs),p=u.ru(a.documents),_=$s.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=u.applyChanges(p,n.isPrimaryClient,_);Fl(n,t,v.au);const w=new TE(e,t,u);return n.Tu.set(e,w),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function SE(n,e,t){const r=ye(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((u=>!la(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qc(r.remoteStore,i.targetId),yc(r,i.targetId)})).catch(Ci)):(yc(r,i.targetId),await pc(r.localStore,i.targetId,!0))}async function RE(n,e){const t=ye(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qc(t.remoteStore,r.targetId))}async function PE(n,e,t){const r=ME(n);try{const i=await(function(u,p){const _=ye(u),v=Oe.now(),w=p.reduce((($,z)=>$.add(z.key)),Ce());let C,x;return _.persistence.runTransaction("Locally write mutations","readwrite",($=>{let z=Cn(),G=Ce();return _.Ns.getEntries($,w).next((Q=>{z=Q,z.forEach(((Z,pe)=>{pe.isValidDocument()||(G=G.add(Z))}))})).next((()=>_.localDocuments.getOverlayedDocuments($,z))).next((Q=>{C=Q;const Z=[];for(const pe of p){const ve=H_(pe,C.get(pe.key).overlayedDocument);ve!=null&&Z.push(new Ur(pe.key,ve,lf(ve.value.mapValue),jt.exists(!0)))}return _.mutationQueue.addMutationBatch($,v,Z,p)})).next((Q=>{x=Q;const Z=Q.applyToLocalDocumentSet(C,G);return _.documentOverlayCache.saveOverlays($,Q.batchId,Z)}))})).then((()=>({batchId:x.batchId,changes:Tf(C)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(u,p,_){let v=u.Vu[u.currentUser.toKey()];v||(v=new je(be)),v=v.insert(p,_),u.Vu[u.currentUser.toKey()]=v})(r,i.batchId,t),await zs(r,i.changes),await ya(r.remoteStore)}catch(i){const a=eu(i,"Failed to persist write");t.reject(a)}}async function id(n,e){const t=ye(n);try{const r=await Bv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const u=t.Au.get(a);u&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?Re(u.hu,14607):i.removedDocuments.size>0&&(Re(u.hu,42227),u.hu=!1))})),await zs(t,r,e)}catch(r){await Ci(r)}}function Ll(n,e,t){const r=ye(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,u)=>{const p=u.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(u,p){const _=ye(u);_.onlineState=p;let v=!1;_.queries.forEach(((w,C)=>{for(const x of C.Sa)x.va(p)&&(v=!0)})),v&&tu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kE(n,e,t){const r=ye(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let u=new je(ce.comparator);u=u.insert(a,dt.newNoDocument(a,me.min()));const p=Ce().add(a),_=new pa(me.min(),new Map,new je(be),u,p);await id(r,_),r.du=r.du.remove(a),r.Au.delete(e),ru(r)}else await pc(r.localStore,e,!1).then((()=>yc(r,e,t))).catch(Ci)}async function xE(n,e){const t=ye(n),r=e.batch.batchId;try{const i=await qv(t.localStore,e);od(t,r,null),sd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zs(t,i)}catch(i){await Ci(i)}}async function DE(n,e,t){const r=ye(n);try{const i=await(function(u,p){const _=ye(u);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return _.mutationQueue.lookupMutationBatch(v,p).next((C=>(Re(C!==null,37113),w=C.keys(),_.mutationQueue.removeMutationBatch(v,C)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,w,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>_.localDocuments.getDocuments(v,w)))}))})(r.localStore,e);od(r,e,t),sd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zs(r,i)}catch(i){await Ci(i)}}function sd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function od(n,e,t){const r=ye(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function yc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||ad(n,r)}))}function ad(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Qc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ru(n))}function Fl(n,e,t){for(const r of t)r instanceof td?(n.Ru.addReference(r.key,e),NE(n,r)):r instanceof nd?(ie(nu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||ad(n,r.key)):he(19791,{wu:r})}function NE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ie(nu,"New document in limbo: "+t),n.Eu.add(r),ru(n))}function ru(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ce(Ne.fromString(e)),r=n.fu.next();n.Au.set(r,new wE(t)),n.du=n.du.insert(t,r),Wf(n.remoteStore,new Yn(tn(Uc(t.path)),r,"TargetPurposeLimboResolution",aa.ce))}}async function zs(n,e,t){const r=ye(n),i=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{u.push(r.pu(_,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const w=v?!v.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,w?"current":"not-current")}if(v){i.push(v);const w=Gc.As(_.targetId,v);a.push(w)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(_,v){const w=ye(_);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>X.forEach(v,(x=>X.forEach(x.Es,($=>w.persistence.referenceDelegate.addReference(C,x.targetId,$))).next((()=>X.forEach(x.ds,($=>w.persistence.referenceDelegate.removeReference(C,x.targetId,$)))))))))}catch(C){if(!Si(C))throw C;ie(Kc,"Failed to update sequence numbers: "+C)}for(const C of v){const x=C.targetId;if(!C.fromCache){const $=w.Ms.get(x),z=$.snapshotVersion,G=$.withLastLimboFreeSnapshotVersion(z);w.Ms=w.Ms.insert(x,G)}}})(r.localStore,a))}async function VE(n,e){const t=ye(n);if(!t.currentUser.isEqual(e)){ie(nu,"User change. New user:",e.toKey());const r=await Bf(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new te(K.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zs(t,r.Ls)}}function OE(n,e){const t=ye(n),r=t.Au.get(e);if(r&&r.hu)return Ce().add(r.key);{let i=Ce();const a=t.Iu.get(e);if(!a)return i;for(const u of a){const p=t.Tu.get(u);i=i.unionWith(p.view.nu)}return i}}function cd(n){const e=ye(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=id.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kE.bind(null,e),e.Pu.H_=_E.bind(null,e.eventManager),e.Pu.yu=vE.bind(null,e.eventManager),e}function ME(n){const e=ye(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DE.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return jv(this.persistence,new Lv,e.initialUser,this.serializer)}Cu(e){return new qf(Wc.mi,this.serializer)}Du(e){return new Gv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class LE extends Zo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Re(this.persistence.referenceDelegate instanceof Yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new qf((r=>Yo.mi(r,t)),this.serializer)}}class _c{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await gE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yE})()}createDatastore(e){const t=ga(e.databaseInfo.databaseId),r=(function(a){return new Jv(a)})(e.databaseInfo);return(function(a,u,p,_){return new nE(a,u,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,u,p){return new iE(r,i,a,u,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ll(this.syncEngine,t,0)),(function(){return xl.v()?new xl:new Kv})())}createSyncEngine(e,t){return(function(i,a,u,p,_,v,w){const C=new IE(i,a,u,p,_,v);return w&&(C.gu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ye(t);ie(Mr,"RemoteStore shutting down."),r.Ea.add(5),await Hs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="FirestoreClient";class FE{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Nc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ie(cr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ie(cr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=eu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Wa(n,e){n.asyncQueue.verifyOperationInProgress(),ie(cr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Bf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UE(n);ie(cr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Nl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Nl(e.remoteStore,i))),n._onlineComponents=e}async function UE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(cr,"Using user provided OfflineComponentProvider");try{await Wa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===K.FAILED_PRECONDITION||i.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;mi("Error using user provided cache. Falling back to memory cache: "+t),await Wa(n,new Zo)}}else ie(cr,"Using default OfflineComponentProvider"),await Wa(n,new LE(void 0));return n._offlineComponents}async function ld(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(cr,"Using user provided OnlineComponentProvider"),await Ul(n,n._uninitializedComponentsProvider._online)):(ie(cr,"Using default OnlineComponentProvider"),await Ul(n,new _c))),n._onlineComponents}function jE(n){return ld(n).then((e=>e.syncEngine))}async function hd(n){const e=await ld(n),t=e.eventManager;return t.onListen=AE.bind(null,e.syncEngine),t.onUnlisten=SE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RE.bind(null,e.syncEngine),t}function qE(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,v){const w=new ud({next:x=>{w.Nu(),u.enqueueAndForget((()=>Zf(a,C)));const $=x.docs.has(p);!$&&x.fromCache?v.reject(new te(K.UNAVAILABLE,"Failed to get document because the client is offline.")):$&&x.fromCache&&_&&_.source==="server"?v.reject(new te(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(x)},error:x=>v.reject(x)}),C=new ed(Uc(p.path),w,{includeMetadataChanges:!0,qa:!0});return Jf(a,C)})(await hd(n),n.asyncQueue,e,t,r))),r.promise}function BE(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,v){const w=new ud({next:x=>{w.Nu(),u.enqueueAndForget((()=>Zf(a,C))),x.fromCache&&_.source==="server"?v.reject(new te(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(x)},error:x=>v.reject(x)}),C=new ed(p,w,{includeMetadataChanges:!0,qa:!0});return Jf(a,C)})(await hd(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firestore.googleapis.com",ql=!0;class Bl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dd,this.ssl=ql}else this.host=e.host,this.ssl=e.ssl??ql;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ev)throw new te(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fd(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _a{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Gy;switch(r.type){case"firstParty":return new Yy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=jl.get(t);r&&(ie("ComponentProvider","Removing Datastore"),jl.delete(t),r.terminate())})(this),Promise.resolve()}}function $E(n,e,t,r={}){n=bn(n,_a);const i=wi(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(th(`https://${p}`),nh("Firestore",!0)),a.host!==dd&&a.host!==p&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!xr(_,u)&&(n._setSettings(_),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=ft.MOCK_USER;else{v=Jd(r.mockUserToken,n._app?.options.projectId);const C=r.mockUserToken.sub||r.mockUserToken.user_id;if(!C)throw new te(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ft(C)}n._authCredentials=new Ky(new Yh(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class Xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(qs(t,Xe._jsonSchema))return new Xe(e,r||null,new ce(Ne.fromString(t.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Qe("string",Xe._jsonSchemaVersion),referencePath:Qe("string")};class nr extends qr{constructor(e,t,r){super(e,t,Uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new ce(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function ea(n,e,...t){if(n=gt(n),Jh("collection","path",e),n instanceof _a){const r=Ne.fromString(e,...t);return tl(r),new nr(n,null,r)}{if(!(n instanceof Xe||n instanceof nr))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return tl(r),new nr(n.firestore,null,r)}}function oi(n,e,...t){if(n=gt(n),arguments.length===1&&(e=Nc.newId()),Jh("doc","path",e),n instanceof _a){const r=Ne.fromString(e,...t);return el(r),new Xe(n,null,new ce(r))}{if(!(n instanceof Xe||n instanceof nr))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return el(r),new Xe(n.firestore,n instanceof nr?n.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="AsyncQueue";class Hl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hf(this,"async_queue_retry"),this._c=()=>{const r=za();r&&ie($l,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=za();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=za();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Tn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Si(e))throw e;ie($l,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,An("INTERNAL UNHANDLED ERROR: ",zl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Zc.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&he(47125,{Pc:zl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function zl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ki extends _a{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Hl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hl(e),this._firestoreClient=void 0,await e}}}function HE(n,e){const t=typeof n=="object"?n:oh(),r=typeof n=="string"?n:Wo,i=Ic(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Xd("firestore");a&&$E(i,...a)}return i}function iu(n){if(n._terminated)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zE(n),n._firestoreClient}function zE(n){const e=n._freezeSettings(),t=(function(i,a,u,p){return new p_(i,a,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,fd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new FE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(at.fromBase64String(e))}catch(t){throw new te(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qs(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:Qe("string",kt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(qs(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:Qe("string",rn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qs(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new sn(e.vectorValues);throw new te(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Qe("string",sn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=/^__.*__$/;class GE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bs(e,this.data,t,this.fieldTransforms)}}function pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:n})}}class au{constructor(e,t,r,i,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new au({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ta(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(pd(this.Ac)&&WE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class KE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ga(e)}Cc(e,t,r,i=!1){return new au({Ac:e,methodName:t,Dc:r,path:ot.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cu(n){const e=n._freezeSettings(),t=ga(n._databaseId);return new KE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gd(n,e,t,r,i,a={}){const u=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);_d("Data must be an object, but it was:",u,r);const p=md(r,u);let _,v;if(a.merge)_=new Ut(u.fieldMask),v=u.fieldTransforms;else if(a.mergeFields){const w=[];for(const C of a.mergeFields){const x=XE(e,C,t);if(!u.contains(x))throw new te(K.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);JE(w,x)||w.push(x)}_=new Ut(w),v=u.fieldTransforms.filter((C=>_.covers(C.field)))}else _=null,v=u.fieldTransforms;return new GE(new Pt(p),_,v)}class uu extends ou{_toFieldTransform(e){return new j_(e.path,new Ds)}isEqual(e){return e instanceof uu}}function QE(n,e,t,r=!1){return lu(t,n.Cc(r?4:3,e))}function lu(n,e){if(yd(n=gt(n)))return _d("Unsupported field value:",e,n),md(n,e);if(n instanceof ou)return(function(r,i){if(!pd(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let u=0;for(const p of r){let _=lu(p,i.wc(u));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return L_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Oe.fromDate(r);return{timestampValue:Xo(i.serializer,a)}}if(r instanceof Oe){const a=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(i.serializer,a)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:Nf(i.serializer,r._byteString)};if(r instanceof Xe){const a=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Hc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sn)return(function(u,p){return{mapValue:{fields:{[cf]:{stringValue:uf},[Go]:{arrayValue:{values:u.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return jc(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${oa(r)}`)})(n,e)}function md(n,e){const t={};return tf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(n,((r,i)=>{const a=lu(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function yd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof rn||n instanceof kt||n instanceof Xe||n instanceof ou||n instanceof sn)}function _d(n,e,t){if(!yd(t)||!Zh(t)){const r=oa(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function XE(n,e,t){if((e=gt(e))instanceof su)return e._internalPath;if(typeof e=="string")return vd(n,e);throw ta("Field path arguments must be of type string or ",n,!1,void 0,t)}const YE=new RegExp("[~\\*/\\[\\]]");function vd(n,e,t){if(e.search(YE)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new su(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ta(n,e,t,r,i){const a=r&&!r.isEmpty(),u=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||u)&&(_+=" (found",a&&(_+=` in field ${r}`),u&&(_+=` in document ${i}`),_+=")"),new te(K.INVALID_ARGUMENT,p+n+_)}function JE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(va("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZE extends Ed{data(){return super.data()}}function va(n,e){return typeof e=="string"?vd(n,e):e instanceof su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class Td extends hu{}function vc(n,e,...t){let r=[];e instanceof hu&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((_=>_ instanceof fu)).length,p=a.filter((_=>_ instanceof Ea)).length;if(u>1||u>0&&p>0)throw new te(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Ea extends Td{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ea(e,t,r)}_apply(e){const t=this._parse(e);return wd(e._query,t),new qr(e.firestore,e.converter,cc(e._query,t))}_parse(e){const t=cu(e.firestore);return(function(a,u,p,_,v,w,C){let x;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Kl(C,w);const z=[];for(const G of C)z.push(Gl(_,a,G));x={arrayValue:{values:z}}}else x=Gl(_,a,C)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Kl(C,w),x=QE(p,u,C,w==="in"||w==="not-in");return Ke.create(v,w,x)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Wl(n,e,t){const r=e,i=va("where",n);return Ea._create(i,r,t)}class fu extends hu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Bt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let u=i;const p=a.getFlattenedFilters();for(const _ of p)wd(u,_),u=cc(u,_)})(e._query,t),new qr(e.firestore,e.converter,cc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class du extends Td{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new du(e,t)}_apply(e){const t=(function(i,a,u){if(i.startAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xs(a,u)})(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,(function(i,a){const u=i.explicitOrderBy.concat([a]);return new Ri(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function tT(n,e="asc"){const t=e,r=va("orderBy",n);return du._create(r,t)}function Gl(n,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new te(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yf(e)&&t.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!ce.isDocumentKey(r))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ul(n,new ce(r))}if(t instanceof Xe)return ul(n,t._key);throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(t)}.`)}function Kl(n,e){if(!Array.isArray(n)||n.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wd(n,e){const t=(function(i,a){for(const u of i)for(const p of u.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nT{convertValue(e,t="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Lr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Go].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new sn(t)}convertGeoPoint(e){return new rn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ua(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=ir(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Re(Uf(r),9688,{name:e});const i=new Ps(r.get(1),r.get(3)),a=new ce(r.popFirst(5));return i.isEqual(t)||An(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ms{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kr extends Ed{constructor(e,t,r,i,a,u){super(e,t,r,i,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(va("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=kr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",kr._jsonSchema={type:Qe("string",kr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class No extends kr{data(e={}){return super.data(e)}}class fi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new No(this._firestore,this._userDataWriter,r.key,r,new ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((p=>{const _=new No(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ms(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new No(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ms(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,w=-1;return p.type!==0&&(v=u.indexOf(p.doc.key),u=u.delete(p.doc.key)),p.type!==1&&(u=u.add(p.doc),w=u.indexOf(p.doc.key)),{type:rT(p.type),doc:_,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){n=bn(n,Xe);const e=bn(n.firestore,ki);return qE(iu(e),n._key).then((t=>aT(e,n,t)))}fi._jsonSchemaVersion="firestore/querySnapshot/1.0",fi._jsonSchema={type:Qe("string",fi._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Ad extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,t)}}function Ec(n){n=bn(n,qr);const e=bn(n.firestore,ki),t=iu(e),r=new Ad(e);return eT(n._query),BE(t,n._query).then((i=>new fi(e,r,n,i)))}function iT(n,e,t){n=bn(n,Xe);const r=bn(n.firestore,ki),i=Id(n.converter,e);return pu(r,[gd(cu(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,jt.none())])}function sT(n){return pu(bn(n.firestore,ki),[new qc(n._key,jt.none())])}function oT(n,e){const t=bn(n.firestore,ki),r=oi(n),i=Id(n.converter,e);return pu(t,[gd(cu(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then((()=>r))}function pu(n,e){return(function(r,i){const a=new Tn;return r.asyncQueue.enqueueAndForget((async()=>PE(await jE(r),i,a))),a.promise})(iu(n),e)}function aT(n,e,t){const r=t.docs.get(e._key),i=new Ad(n);return new kr(n,i,e._key,r,new ms(t.hasPendingWrites,t.fromCache),e.converter)}function bd(){return new uu("serverTimestamp")}(function(e,t=!0){(function(i){bi=i})(Ii),pi(new Dr("firestore",((r,{instanceIdentifier:i,options:a})=>{const u=r.getProvider("app").getImmediate(),p=new ki(new Qy(r.getProvider("auth-internal")),new Jy(u,r.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new te(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(v.options.projectId,w)})(u,i),u);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),er(Xu,Yu,e),er(Xu,Yu,"esm2020")})();const Vo={apiKey:"AIzaSyBjxEEEZ83B7wSwHlNNHjhdxna_XOyEWwU",authDomain:"wiihope.firebaseapp.com",projectId:"wiihope",storageBucket:"wiihope.firebasestorage.app",messagingSenderId:"966620743950",appId:"1:966620743950:web:0e7770708166ba08e66f5f"};console.log("🔥 Firebase Config:",{hasApiKey:!!Vo.apiKey,hasAuthDomain:!!Vo.authDomain,projectId:Vo.projectId});const Cd=sh(Vo),Is=zy(Cd),yn=HE(Cd),Sd=n=>{const e=B(`#${n}`);if(!e.length)return console.warn(`Modal #${n} no existe`);e.addClass("active"),B("body").addClass("modal-open"),setTimeout(()=>{e.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},Rd=n=>{B(`#${n}`).removeClass("active"),B(".modal.active").length||B("body").removeClass("modal-open")},Oo=()=>{B(".modal").removeClass("active"),B("body").removeClass("modal-open")};window.abrirModal=Sd;window.cerrarModal=Rd;window.cerrarTodos=Oo;(()=>{const n=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal,.close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover,.close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.btn-auth.loading{opacity:.85;cursor:not-allowed;pointer-events:none}.btn-auth.loading i{margin-right:6px}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}.btn-auth i{color:var(--F)}",e=B(".wiModalCss");e.length?e.text(n):B("head").append(`<style class="wiModalCss">${n}</style>`),B(document).off(".wimodal").on("click.wimodal",".close-modal",Oo).on("click.wimodal",".modal",t=>{B(t.target).is(".modal")&&Oo()}).on("keydown.wimodal",t=>{t.key==="Escape"&&Oo()})})();(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=B(r).data("tema").split("|");B("html").attr("data-theme",i),(B('meta[name="theme-color"]')[0]||B('<meta name="theme-color">').appendTo("head")[0]).content=a,ai("wiTema",`${i}|${a}`,720),B(".mtha").removeClass("mtha"),B(r).addClass("mtha")},t=()=>{B(".witemas").html(n.map(([a,u])=>`<div class="tema" data-tema="${a}|${u}" style="background:${u}"></div>`).join(""));const r=Pd("wiTema"),i=B(`[data-tema="${r}"]`)[0]||B(".tema").first()[0];i&&e(i),B(document).off("click.witema").on("click.witema",".tema",a=>e(a.currentTarget))};return B(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:1,subtree:1}),{set:e}})();const mn=(n,e=!0,t="")=>{const r=B(n);if(e){const i=t||r.text().trim();r.data("txt",i).prop("disabled",!0).html(`${i} <i class="fas fa-spinner fa-spin"></i>`)}else r.prop("disabled",!1).text(r.data("txt")||t||"Continuar")},cT=n=>{const e="smile.html";window.location.href=new URL(e,window.location.href).toString()};function di(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};B("#notificationsContainer").length||B("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=B(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);B("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const Sr=(n,e="success")=>{B(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:u}=t[e]||t.error,p=B(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${u}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function ai(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function Pd(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),uT(n),null}}function uT(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function ii(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,u=a?"top":t;if(B("#witip-styles").length||B('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return B(n).each((Je,qe)=>ii(qe,e,t,r)),B(n);const p=B(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),B(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=B("<div>",{class:`witip ${u} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),B("body").append(v);const{left:w,top:C,right:x,bottom:$,width:z,height:G}=p[0].getBoundingClientRect(),Q=v.outerWidth(),Z=v.outerHeight(),pe={top:{x:w+z/2-Q/2,y:C-Z-8},bottom:{x:w+z/2-Q/2,y:$+8},left:{x:w-Q-8,y:C+G/2-Z/2},right:{x:x+8,y:C+G/2-Z/2}};let{x:ve,y:xe}=pe[u];return ve=Math.max(8,Math.min(ve,window.innerWidth-Q-8)),xe=Math.max(8,Math.min(xe,window.innerHeight-Z-8)),v.css({left:ve,top:xe}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}function kd(){const n=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email o usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,e=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,t=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;B(function(){let r="smiles",i="wiAuthIn",a="wiAuthRol",u="usuario";B(document).on("click",".login",()=>abrirModal("loginModal")),B(document).on("click",".registrar",()=>abrirModal("registroModal")),B(".crearCuenta").click(()=>{abrirModal("registroModal"),cerrarModal("loginModal")}),B(".conCuenta").click(()=>{abrirModal("loginModal"),cerrarModal("registroModal")}),B(".olvidastePass").click(()=>{abrirModal("recuperarModal"),cerrarModal("loginModal")}),B(".volverLogin").click(()=>{abrirModal("loginModal"),cerrarModal("recuperarModal")}),B(".togglePass").click(function(){const w=B(this).siblings("input"),C=w.attr("type")==="password";w.attr("type",C?"text":"password"),B(this).toggleClass("fa-eye fa-eye-slash")}),B('.miauth input:not([type="checkbox"])').on("click",function(){ii(this,B(this).attr("placeholder"))}),B("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){B(this).val(B(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([w,C])=>{B(w).on("input keyup",x=>{B(C).removeClass("inactivo"),x.key==="Enter"&&(B(C).click(),B(C).addClass("inactivo"))})});const p={regEmail:[w=>w.toLowerCase(),w=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(w)||"Correo inválido"],regUsuario:[w=>w.toLowerCase().replace(/[^a-z0-9_]/g,""),w=>w.length>=4||"Usuario 4-20 caracteres"],regNombre:[w=>w.trim(),w=>w.length>0||"Ingrese nombre"],regApellidos:[w=>w.trim(),w=>w.length>0||"Ingrese apellidos"],regPassword:[w=>w,w=>w.length>=6||"Mínimo 6 caracteres"],regPassword1:[w=>w,w=>w===B("#regPassword").val()||"Contraseñas no coinciden"]};B.each(p,function(w,[C,x]){B(`#${w}`).on("blur",function(){const $=C(B(this).val());B(this).val($);const z=x($);z!==!0&&ii(this,z,"error")})});let _=!1;B("#regUsuario").on("blur focus",async function(){const w=B(this).val();if(w.length>=3)try{const x=(await Ga(oi(yn,r,w))).exists();_=!x,ii(this,`Usuario ${x?"no disponible":"disponible ✅"}`,x?"error":"success","top",7e3)}catch(C){console.error(C)}});let v=!1;B("#regEmail").on("blur focus",async function(){const w=B(this).val();if(w.length>=3)try{const x=!(await Ec(vc(ea(yn,r),Wl("email","==",w)))).empty;v=!x,ii(this,`Email ${x?"no disponible":"disponible ✅"}`,x?"error":"success","top",7e3)}catch(C){console.error(C)}}),B("#Registrar").click(async function(){mn(this,!0,"Registrando");const w=[[_,B("#regUsuario")[0],"Usuario no disponible"],[v,B("#regEmail")[0],"Email no disponible"],...Object.entries(p).map(([C,[x,$]])=>{const z=B(`#${C}`),G=x(z.val()),Q=$(G);return[Q===!0,z[0],Q!==!0?Q:""]})];for(const[C,x,$]of w)if(!C&&$&&(mn(this,!1),ii(x,$,"error"),x.focus(),!0))return;try{const C=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[x,$,z,G,Q]=C.map(ve=>B("#"+ve).val().trim()),{user:Z}=await Sm(Is,x,Q);await Promise.all([xm(Z,{displayName:$}),Pm(Z)]),console.log("Registro completo en Auth ✅"+Date());const pe=oi(yn,r,$);await iT(pe,{usuario:$,email:x,nombre:z,apellidos:G,rol:u,creacion:bd(),uid:Z.uid}),console.log("Registro completo en Firestore ✅"+Date()),Sr("Registro completado! ✅")}catch(C){Sr({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[C.code]||C.message)||console.error(C)}finally{ai(i,"wIn",24),ai(a,u,24),setTimeout(()=>cT(),3e3),cerrarModal("registroModal"),mn(this,!1)}}),B("#Login").click(async function(){mn(this,!0,"Iniciando sessión");try{const[w,C]=["#email","#password"].map(G=>B(G).val()),x=w.includes("@"),$=x?null:await Ga(oi(yn,r,w));if(!x&&!$.exists())throw new Error("Usuario no encontrado");const z=x?w:$.data().email;await Rm(Is,z,C),ai(i,"wIn",24),ai(a,$.data().rol,24)}catch(w){Sr({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[w.code]||w.message,"error"),console.error(w)}finally{cerrarModal("loginModal"),mn(this,!1)}}),B("#Recuperar").click(async function(){mn(this,!0,"Restablecer Contraseña");try{const[w,C]=["#recEmail","#recFechaNacimiento"].map(G=>B(G).val()),x=w.includes("@")?w:await(async()=>{const G=await Ga(oi(yn,r,w));return G.exists()?G.data().email:null})();if(!x)return Sr("Usuario no registrado","error");const $=await Ec(vc(ea(yn,r),Wl("email","==",x)));if($.empty)return Sr("Email incorrecto o no existe","error");if($.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==C)return Sr("Fecha de nacimiento incorrecta","error");await Cm(Is,x),Sr("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(w){console.error(w)}finally{mn(this,!1)}})}),B("body").append(n+e+t)}kd();B(()=>{B(".myr").text(new Date().getFullYear()),B(".myu").text(new Date().toLocaleString()),kd(),Vm(Is,n=>{if(n){B(".login").hide(),B(".logout, #btnAgregarCita").show();const e=n.displayName||n.email.split("@")[0];B(".logout").text(`Hola, ${e}`),window.usuarioActual=n,As()}else B(".login").show(),B(".logout, #btnAgregarCita").hide(),window.usuarioActual=null,As()}),B(window).on("scroll",()=>{const n=B(window).scrollTop()+B(window).height();B(".ani").each((e,t)=>{n>B(t).offset().top&&B(t).addClass("anip").css("transition-delay",e*.2+"s")})}).trigger("scroll"),B("head").append('<style>:root{--bgim:url("https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg")}.hd{background:var(--bgim),linear-gradient(to bottom,var(--co1),var(--co2))}</style>'),B(".lpx").html('<img width="600" height="400" alt="Dios es bueno" src="https://i.postimg.cc/W1LZ2Try/Dios-Es-Bueno.webp"/>'),lT(),As(),B("#btnAgregarCita").on("click",()=>Sd("citaModal")),B(document).on("submit","#citaForm",hT),B(document).on("click",".btn_eli_cita",fT)});const lT=()=>{const n={"San Mateo":28,"San Marcos":16,"San Lucas":24,"San Juan":21,Hechos:28,Romanos:16,"1 Corintios":16,"2 Corintios":13,Galatas:6,Efesios:6,Filipenses:4,Colosenses:4,"1 Tesalonicenses":5,"2 Tesalonicenses":3,"1 Timoteo":6,"2 Timoteo":4,Tito:3,Filemon:1,Hebreos:13,Santiago:5,"1 San Pedro":5,"2 San Pedro":3,"1 San Juan":5,"2 San Juan":1,"3 San Juan":1,Judas:1,Apocalipsis:22},e="https://raw.githubusercontent.com/geluksee/hope/main/",t=new Audio;let r=0,i=!1,a=!1,u=[];const p=B("#playlist");let _=0;for(const[Q,Z]of Object.entries(n))for(let pe=1;pe<=Z;pe++)_++,u.push({title:`${Q} - Capitulo ${pe}`,url:`${e}${_}_${Q.replace(/ /g,"_")}_${String(pe).padStart(2,"0")}.mp3`,index:_-1}),p.append(`<div class="playlist-item" data-index="${_-1}"><span class="number">${_}</span><span class="title">${Q} - Capitulo ${pe}</span></div>`);const v=Q=>isNaN(Q)?"0:00":`${Math.floor(Q/60)}:${String(Math.floor(Q%60)).padStart(2,"0")}`,w=Q=>{Q<0||Q>=u.length||(r=Q,t.src=u[Q].url,B("#currentTrack").text(u[Q].title),B(".playlist-item").removeClass("active"),B(`.playlist-item[data-index="${Q}"]`).addClass("active"))},C=()=>t.play().then(()=>{i=!0,B("#playBtn").html('<svg viewBox="0 0 24 24"><rect/><rect x="8" y="6" width="3" height="12"/><rect x="13" y="6" width="3" height="12"/></svg>')}).catch(console.log),x=()=>{t.pause(),i=!1,B("#playBtn").html('<svg viewBox="0 0 24 24"><rect/><polygon points="8,6 20,12 8,18"/></svg>')};B(t).on("timeupdate",()=>{B("#currentTime").text(v(t.currentTime)),B("#duration").text(v(t.duration)),B(".progress").css("width",t.currentTime/t.duration*100+"%")}),B(t).on("ended",()=>a?(w(r),C()):r<u.length-1&&(w(r+1),C())),B(t).on("loadedmetadata",()=>B("#duration").text(v(t.duration))),B("#playBtn").on("click",()=>{t.src||w(0),i?x():C()}),B("#prevBtn").on("click",()=>r>0&&(w(r-1),C())),B("#nextBtn").on("click",()=>r<u.length-1&&(w(r+1),C())),B("#repeatBtn").on("click",function(){a=!a,B(this).toggleClass("pya")}),B(".progress-bar").on("click",Q=>t.currentTime=Q.offsetX/B(Q.currentTarget).width()*t.duration);let $=!1;const z=Q=>B(".volume-level").css("width",Q*100+"%");t.volume=1,z(1),B(".volume-bar").on("click",Q=>{const Z=Q.offsetX/B(Q.currentTarget).width();t.volume=Z,$&&Z>0&&($=!1,t.muted=!1,B("#muteBtn").html('<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>')),z(Z)}),B("#muteBtn").on("click",()=>{$=!$,t.muted=$,B("#muteBtn").html($?'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/></svg>':'<svg viewBox="0 0 24 24"><rect/><polygon points="6,8 10,8 14,4 14,20 10,16 6,16"/><path d="M15 9a2 3 0 0 1 0 6" stroke-width="2"/><path d="M18 7.7a2 3 0 0 1 0 9" stroke-width="2"/></svg>'),z($?0:t.volume)}),B(document).on("click",".playlist-item",function(){w(parseInt(B(this).data("index"))),C(),ai("currentTrackIndex",r,168)}),B("#searchInput").on("input",function(){const Q=B(this).val().toLowerCase();B(".playlist-item").each(function(){B(this).toggle(B(this).text().toLowerCase().includes(Q))})});const G=Pd("currentTrackIndex");G!==null&&G>=0&&G<u.length&&w(G),B(".visualizer").on("click",()=>i?x():C()).html(`<div class="wave">${'<div class="wave-bar"></div>'.repeat(20)}</div>`)},As=async()=>{try{const n=vc(ea(yn,"wicitas"),tT("timestamp","desc")),e=await Ec(n),t=B("#frases");if(t.empty(),e.empty){t.html('<p class="hst_vac"><i class="fas fa-bible"></i>No hay citas disponibles</p>');return}e.forEach((r,i)=>{const{cita:a,contenido:u}=r.data(),p=window.usuarioActual?`<button class="btn_eli_cita" data-id="${r.id}" title="Eliminar"><i class="fas fa-trash"></i></button>`:"";t.append(`
        <div class="phr ph${i+1} ani" data-id="${r.id}">
          ${p}
          <blockquote class="sld">
            <p class="bqt">"${u}"</p>
            <cite class="bqa">- ${a}</cite>
          </blockquote>
        </div>
      `)}),B(window).trigger("scroll")}catch(n){console.error("Error al cargar citas:",n),di("Error al cargar las citas bíblicas","error")}},hT=async n=>{n.preventDefault();const e=B("#citaCita").val().trim(),t=B("#citaContenido").val().trim(),r=B("#btnCitaSubmit");if(!e||!t)return di("Completa todos los campos","error");mn(r,!0,"Guardando...");try{await oT(ea(yn,"wicitas"),{cita:e,contenido:t,timestamp:bd(),autor:Is.currentUser.email}),Rd("citaModal"),B("#citaForm")[0].reset(),di("Cita agregada correctamente","success"),As()}catch(i){console.error("Error al agregar cita:",i),di("Error al guardar la cita","error")}finally{mn(r,!1)}},fT=async function(){if(!confirm("¿Eliminar esta cita bíblica?"))return;const n=B(this).data("id");try{await sT(oi(yn,"wicitas",n)),di("Cita eliminada","success"),As()}catch(e){console.error("Error al eliminar:",e),di("Error al eliminar la cita","error")}};B(()=>{B("body").append(`
    <div class="modal" id="citaModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Agregar Nueva Cita Bíblica</h3>
          <button class="close-modal">&times;</button>
        </div>
        <form id="citaForm">
          <div class="form-group">
            <label>Referencia (ej: Juan 3:16)</label>
            <input type="text" id="citaCita" placeholder="Salmo 23:1" required>
          </div>
          <div class="form-group">
            <label>Contenido de la cita</label>
            <textarea id="citaContenido" rows="4" placeholder="El Señor es mi pastor..." required></textarea>
          </div>
          <button type="submit" class="btn-auth" id="btnCitaSubmit">Guardar Cita</button>
        </form>
      </div>
    </div>
  `)});
