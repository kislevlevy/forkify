var e,t,r,n,i,o,a,s,c,u,l,p,f,d,h,v,m,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire94c2;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire94c2=E),(0,E.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),E("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.9bd27192.js","eyyUD","icons.c5b0f01c.svg"]'));var S={},O={},F=function(e){return e&&e.Math===Math&&e};O=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||F("object"==typeof self&&self)||F("object"==typeof b&&b)||F("object"==typeof O&&O)||function(){return this}()||Function("return this")();var x={},L={};x=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},M={};M=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;j=M?$.bind($):function(){return $.apply($,arguments)};var T={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;o=P&&!T.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:T;var N={};N=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},q={},D={},R=Function.prototype,C=R.call,U=M&&R.bind.bind(C,C),A={},H=(D=M?U:function(e){return function(){return C.apply(e,arguments)}})({}.toString),z=D("".slice);A=function(e){return z(H(e),8,-1)};var B=Object,W=D("".split);q=L(function(){return!B("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?W(e,""):B(e)}:B;var Q={},G={};G=function(e){return null==e};var J=TypeError;Q=function(e){if(G(e))throw new J("Can't call method on "+e);return e},I=function(e){return q(Q(e))};var V={},Y={},K={},X={},Z="object"==typeof document&&document.all;X=void 0===Z&&void 0!==Z?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e},K=function(e){return"object"==typeof e?null!==e:X(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=O[e],X(r)?r:void 0):O[e]&&O[e][t]};var er={};er=D({}.isPrototypeOf);var en={},ei={},eo={},ea={},es=O.navigator,ec=es&&es.userAgent;ea=ec?String(ec):"";var eu=O.process,el=O.Deno,ep=eu&&eu.versions||el&&el.version,ef=ep&&ep.v8;ef&&(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ea&&(!(a=ea.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ea.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ed=O.String;en=(ei=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ed(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return X(t)&&er(t.prototype,eh(e))};var ev={},em={},eg={},ey=String;eg=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;em=function(e){if(X(e))return e;throw new eb(eg(e)+" is not a function")},ev=function(e,t){var r=e[t];return G(r)?void 0:em(r)};var e_={},ew=TypeError;e_=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=j(r,e))||X(r=e.valueOf)&&!K(n=j(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=j(r,e)))return n;throw new ew("Can't convert object to primitive value")};var ek={},eE={},eS={};eS=!1;var eO={},eF=Object.defineProperty;eO=function(e,t){try{eF(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var ex="__core-js_shared__",eL=eE=O[ex]||eO(ex,{});(eL.versions||(eL.versions=[])).push({version:"3.40.0",mode:eS?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ek=function(e,t){return eE[e]||(eE[e]=t||{})};var ej={},eM={},e$=Object;eM=function(e){return e$(Q(e))};var eT=D({}.hasOwnProperty);ej=Object.hasOwn||function(e,t){return eT(eM(e),t)};var eP={},eN=0,eI=Math.random(),eq=D(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eN+eI,36)};var eD=O.Symbol,eR=ek("wks"),eC=en?eD.for||eD:eD&&eD.withoutSetter||eP,eU=TypeError,eA=(ej(eR,e="toPrimitive")||(eR[e]=ei&&ej(eD,e)?eD[e]:eC("Symbol."+e)),eR[e]);Y=function(e,t){if(!K(e)||ee(e))return e;var r,n=ev(e,eA);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!K(r)||ee(r))return r;throw new eU("Can't convert object to primitive value")}return void 0===t&&(t="number"),e_(e,t)},V=function(e){var t=Y(e,"string");return ee(t)?t:t+""};var eH={},ez={},eB=O.document,eW=K(eB)&&K(eB.createElement);ez=function(e){return eW?eB.createElement(e):{}},eH=!x&&!L(function(){return 7!==Object.defineProperty(ez("div"),"a",{get:function(){return 7}}).a});var eQ=Object.getOwnPropertyDescriptor;i=x?eQ:function(e,t){if(e=I(e),t=V(t),eH)try{return eQ(e,t)}catch(e){}if(ej(e,t))return N(!j(o,e,t),e[t])};var eG={},eJ={};eJ=x&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eY=String,eK=TypeError;eV=function(e){if(K(e))return e;throw new eK(eY(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e4="writable";c=x?eJ?function(e,t,r){if(eV(e),t=V(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e0(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eV(e),t=V(t),eV(r),eH)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=x?function(e,t,r){return c(e,t,N(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e7={},e9=Function.prototype,e8=x&&Object.getOwnPropertyDescriptor,e5=ej(e9,"name")&&(!x||x&&e8(e9,"name").configurable),e6={},te=D(Function.toString);X(eE.inspectSource)||(eE.inspectSource=function(e){return te(e)}),e6=eE.inspectSource;var tt={},tr={},tn=O.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=ek("keys");ti=function(e){return to[e]||(to[e]=eP(e))};var ta={};ta={};var ts="Object already initialized",tc=O.TypeError,tu=O.WeakMap;if(tr||eE.state){var tl=eE.state||(eE.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,u=function(e,t){if(tl.has(e))throw new tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},p=function(e){return tl.has(e)}}else{var tp=ti("state");ta[tp]=!0,u=function(e,t){if(ej(e,tp))throw new tc(ts);return t.facade=e,eG(e,tp,t),t},l=function(e){return ej(e,tp)?e[tp]:{}},p=function(e){return ej(e,tp)}}var tf=(tt={set:u,get:l,has:p,enforce:function(e){return p(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tm=Object.defineProperty,tg=D("".slice),ty=D("".replace),tb=D([].join),t_=x&&!L(function(){return 8!==tm(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tg(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e5&&e.name!==t)&&(x?tm(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&ej(r,"arity")&&e.length!==r.arity&&tm(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?x&&tm(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return ej(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};Function.prototype.toString=tk(function(){return X(this)&&th(this).source||e6(this)},"toString"),e3=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tO={},tF={},tx={},tL={},tj=Math.ceil,tM=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tM:tj)(t)},tx=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var t$=Math.max,tT=Math.min;tF=function(e,t){var r=tx(e);return r<0?t$(r+t,0):tT(r,t)};var tP={},tN={},tI=Math.min;tN=function(e){var t=tx(e);return t>0?tI(t,0x1fffffffffffff):0},tP=function(e){return tN(e.length)};var tq=function(e){return function(t,r,n){var i,o=I(t),a=tP(o);if(0===a)return!e&&-1;var s=tF(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tD={includes:tq(!0),indexOf:tq(!1)}.indexOf,tR=D([].push);tO=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!ej(ta,r)&&ej(n,r)&&tR(o,r);for(;t.length>i;)ej(n,r=t[i++])&&(~tD(o,r)||tR(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tO(e,tC)},d=Object.getOwnPropertySymbols;var tU=D([].concat);tS=et("Reflect","ownKeys")||function(e){var t=f(eV(e));return d?tU(t,d(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];ej(e,a)||r&&ej(r,a)||c(e,a,i(t,a))}};var tA={},tH=/#|\.prototype\./,tz=function(e,t){var r=tW[tB(e)];return r===tG||r!==tQ&&(X(t)?L(t):!!t)},tB=tz.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tW=tz.data={},tQ=tz.NATIVE="N",tG=tz.POLYFILL="P";tA=tz,S=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[c]||eO(c,{}):O[c]&&O[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tA(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e3(r,n,a,e)}};var tJ={},tV={},tY=Function.prototype,tK=tY.apply,tX=tY.call;tV="object"==typeof Reflect&&Reflect.apply||(M?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){if("Function"===A(e))return D(e)})(t0.bind);tZ=function(e,t){return em(e),void 0===t?e:M?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=et("document","documentElement");var t4={};t4=D([].slice);var t3={},t7=TypeError;t3=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t8={},t5={},t6=function(e){return ea.slice(0,e.length)===e};t8="NODE"==(t5=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":O.Bun&&"string"==typeof Bun.version?"BUN":O.Deno&&"object"==typeof Deno.version?"DENO":"process"===A(O.process)?"NODE":O.window&&O.document?"BROWSER":"REST");var re=O.setImmediate,rt=O.clearImmediate,rr=O.process,rn=O.Dispatch,ri=O.Function,ro=O.MessageChannel,ra=O.String,rs=0,rc={},ru="onreadystatechange";L(function(){h=O.location});var rl=function(e){if(ej(rc,e)){var t=rc[e];delete rc[e],t()}},rp=function(e){return function(){rl(e)}},rf=function(e){rl(e.data)},rd=function(e){O.postMessage(ra(e),h.protocol+"//"+h.host)};re&&rt||(re=function(e){t3(arguments.length,1);var t=X(e)?e:ri(e),r=t4(arguments,1);return rc[++rs]=function(){tV(t,void 0,r)},v(rs),rs},rt=function(e){delete rc[e]},t8?v=function(e){rr.nextTick(rp(e))}:rn&&rn.now?v=function(e){rn.now(rp(e))}:ro&&!t9?(g=(m=new ro).port2,m.port1.onmessage=rf,v=tZ(g.postMessage,g)):O.addEventListener&&X(O.postMessage)&&!O.importScripts&&h&&"file:"!==h.protocol&&!L(rd)?(v=rd,O.addEventListener("message",rf,!1)):v=ru in ez("script")?function(e){t2.appendChild(ez("script"))[ru]=function(){t2.removeChild(this),rl(e)}}:function(e){setTimeout(rp(e),0)});var rh=(tJ={set:re,clear:rt}).clear;S({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rh},{clearImmediate:rh});var rv=tJ.set,rm={},rg=O.Function,ry=/MSIE .\./.test(ea)||"BUN"===t5&&((t=O.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rm=function(e,t){var r=t?2:1;return ry?function(n,i){var o=t3(arguments.length,1)>r,a=X(n)?n:rg(n),s=o?t4(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rb=O.setImmediate?rm(rv,!1):rv;S({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==rb},{setImmediate:rb});const r_="https://forkify-api.herokuapp.com/api/v2/recipes/",rw="e2dc4e19-f010-4498-b226-adafe7519574",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (Code- ${n.status})`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rS=function(e){return{id:e.id,title:e.title,publisher:e.publisher,sourceURL:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key?{key:e.key}:{}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t.data.recipe),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1}catch(e){throw e}},rF=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}?key=${rw}`);rE.search.results=t.data.recipes.map(rS)}catch(e){throw e}},rx=function(e=rE.search.page){return rE.search.page=e,rE.search.results.slice((e-1)*10,10*e)},rL=function(e){if(-1===e&1===rE.recipe.servings)return;let t=rE.recipe.servings+e;rE.recipe.ingredients.forEach(e=>e.quantity=e.quantity/rE.recipe.servings*t),rE.recipe.servings=t},rj=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),r$()},rM=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),r$()},r$=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rT=async function(e){try{let t=Object.fromEntries(e),r=e.filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(function(e){let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r,unit:n,description:i}}),n={title:t.title,publisher:t.publisher,source_url:t.sourceUrl,image_url:t.image,servings:+t.servings,cooking_time:+t.cookingTime,ingredients:r},i=await rk(`${r_}?key=${rw}`,n);rE.recipe=rS(i.data.recipe),rj(rE.recipe)}catch(e){throw e}};var rP={};rP=new URL("icons.c5b0f01c.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rN{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._ToDOM(t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._perentElement.querySelectorAll("*"));r.forEach(function(e,t){let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._perentElement.innerHTML=""}_ToDOM(e){this._clear(),this._perentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){let e=`
    <div class="spinner">
        <svg>
            <use href="${_(rP)}#icon-loader"></use>
        </svg>
    </div>
    `;this._ToDOM(e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._ToDOM(t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rP)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._ToDOM(t)}}class rI extends rN{_perentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try a different one.";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e,t,r){["hashchange","load"].forEach(t=>window.addEventListener(t,e)),this._perentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--tiny");if(r){if(r.classList.contains("btn--increase-servings"))return t(1);if(r.classList.contains("btn--decrease-servings"))return t(-1)}}),this._perentElement.addEventListener("click",function(e){e.target.closest(".btn--bookmark")&&r()})}_generateMarkup(){return`
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img"/>
        <h1 class="recipe__title">
            <span>${this._data.title}</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime} </span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
                <svg>
                    <use href="${_(rP)}#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
                <svg>
                    <use href="${_(rP)}#icon-plus-circle"></use>
                </svg>
            </button>
        </div>
    </div>
    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${_(rP)}#icon-user"></use>
      </svg>
    </div>
        <button class="btn--round btn--bookmark">
            <svg class="">
                <use href="${_(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._getIngredientMarkup.bind(this)).join(" ")}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href="${this._data.sourceURL}"
        target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-right"></use>
            </svg>
        </a>
    </div>
`}_getIngredientMarkup(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${_(rP)}#icon-check"></use>
        </svg>
        ${e.quantity?`<div class="recipe__quantity">${this._getIngredientQuantity(e.quantity)}</div>`:""}
        ${e.unit?` <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
                </div>`:` <div class="recipe__description">${e.description.trim()}</div>`}
    </li>
            `}_getIngredientQuantity(e){let t=Number((e-Math.floor(e)).toFixed(2));return Math.trunc(e)===e?e:.33===t?`${Math.trunc(e)} 1/3`:.66===t?`${Math.trunc(e)} 2/3`:new y(e).toString()}}var rq=new rI;class rD{_perentElement=document.querySelector(".search");_searchField=document.querySelector(".search__field");getQuery(){let e=this._searchField.value;return this._clearInput(),e}_clearInput(){this._searchField.value="",this._searchField.blur()}addHandlerSearch(e){this._perentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rR=new rD;class rC extends rN{_perentElement="";_generateMarkupPriview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
            <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                <div class="recipe__user-generated ${e.key?"":"hidden"}">
                  <svg>
                    <use href="${_(rP)}#icon-user"></use>
                  </svg>
              </div>
            </div>
        </a>
    </li>
    `}}class rU extends rC{_perentElement=document.querySelector(".results");_errorMessage="No recipes found!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPriview).join("")}}var rA=new rU;class rH extends rN{_perentElement=document.querySelector(".pagination");addHandlerClick(e){this._perentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(r){if(r.classList.contains("pagination__btn--prev"))return e(-1);if(r.classList.contains("pagination__btn--next"))return e(1)}})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._generateNextBTN(t):1===t&&1===e?"":t===e&&e>1?this._generatePreviousBTN(t):t>1&&t<e?this._generateNextBTN(t)+this._generatePreviousBTN(t):void 0}_generatePreviousBTN(e){return`
    <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-left"></use>
        </svg>
        <span>${e-1}</span>
    </button>
    `}_generateNextBTN(e){return`
    <button class="btn--inline pagination__btn--next">
        <span>${e+1}</span>
        <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-right"></use>
        </svg>
    </button>
    `}}var rz=new rH;class rB extends rC{_perentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPriview).join("")}}var rW=new rB;class rQ extends rN{_message="Recipe was upload successfully!";_perentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_btnUpload=document.querySelector(".upload__btn");constructor(){super(),this._addHandler()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),setTimeout((function(){this.render(" ")}).bind(this),2500)}uploadRecipe(e){this._perentElement.addEventListener("submit",function(t){t.preventDefault(),e([...new FormData(this)])})}_addHandler(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this)),this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}_generateMarkup(){return`
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="" required name="title" type="text" />
          <label>URL</label>
          <input value="" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="" required name="image" type="text" />
          <label>Publisher</label>
          <input value="" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value=""
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value=""
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${_(rP)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `}}var rG=new rQ,rJ=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new x(o||[]),s=f,function(r,i){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rJ}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rJ:Function("r","regeneratorRuntime = r")(rJ)}const rV=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rA.update(rx()),rW.update(rE.bookmarks),rq.renderSpinner(),await rO(e),rq.render(rE.recipe)}catch(e){rq.renderError()}},rY=function(e){rA.render(rx(e)),rz.render(rE.search)},rK=async function(){try{let e=rR.getQuery();if(!e)return;rA.renderSpinner(),await rF(e),rY(1)}catch(e){rq.renderError()}},rX=async function(e){try{rG.renderSpinner(),await rT(e),rq.render(rE.recipe),rW.render(rE.bookmarks),rG.renderMessage(),setTimeout(function(){rG.toggleWindow()},2500),window.history.pushState(null,"",`#${rE.recipe.id}`)}catch(e){rG.renderError(e.message)}};rq.addHandlerRender(rV,function(e){rL(e),rq.update(rE.recipe)},function(){rE.recipe.bookmarked?rM(rE.recipe.id):rj(rE.recipe),rq.update(rE.recipe),rW.render(rE.bookmarks)}),rR.addHandlerSearch(rK),rz.addHandlerClick(function(e){rY(rE.search.page+=e)}),rG.uploadRecipe(rX),function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}(),rW.render(rE.bookmarks);
//# sourceMappingURL=index.9bd27192.js.map
