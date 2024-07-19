(function(T,Q){typeof exports=="object"&&typeof module<"u"?Q(require("yargs"),require("util"),require("path"),require("fs"),require("assert"),require("url"),require("@vue/compiler-sfc")):typeof define=="function"&&define.amd?define(["yargs","util","path","fs","assert","url","@vue/compiler-sfc"],Q):(T=typeof globalThis<"u"?globalThis:T||self,Q(T.yargs,T.util,T.path,T.fs,T.assert,T.url,T.compilerSfc))})(this,function(T,Q,N,B,Qe,yt,Et){"use strict";var Ke=typeof document<"u"?document.currentScript:null;class H extends Error{constructor(t){super(t||"yargs error"),this.name="YError",Error.captureStackTrace&&Error.captureStackTrace(this,H)}}function Ye(){return At()?0:1}function At(){return _t()&&!process.defaultApp}function _t(){return!!process.versions.electron}function Ct(e){return e.slice(Ye()+1)}function wt(){return process.argv[Ye()]}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function J(e){if(e!==e.toLowerCase()&&e!==e.toUpperCase()||(e=e.toLowerCase()),e.indexOf("-")===-1&&e.indexOf("_")===-1)return e;{let n="",r=!1;const c=e.match(/^-+/);for(let a=c?c[0].length:0;a<e.length;a++){let h=e.charAt(a);r&&(r=!1,h=h.toUpperCase()),a!==0&&(h==="-"||h==="_")?r=!0:h!=="-"&&h!=="_"&&(n+=h)}return n}}function Xe(e,t){const n=e.toLowerCase();t=t||"-";let r="";for(let c=0;c<e.length;c++){const a=n.charAt(c),h=e.charAt(c);a!==h&&c>0?r+=`${t}${n.charAt(c)}`:r+=h}return r}function He(e){return e==null?!1:typeof e=="number"||/^0x[0-9a-f]+$/i.test(e)?!0:/^0[^.]/.test(e)?!1:/^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function Ot(e){if(Array.isArray(e))return e.map(h=>typeof h!="string"?h+"":h);e=e.trim();let t=0,n=null,r=null,c=null;const a=[];for(let h=0;h<e.length;h++){if(n=r,r=e.charAt(h),r===" "&&!c){n!==" "&&t++;continue}r===c?c=null:(r==="'"||r==='"')&&!c&&(c=r),a[t]||(a[t]=""),a[t]+=r}return a}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var W;(function(e){e.BOOLEAN="boolean",e.STRING="string",e.NUMBER="number",e.ARRAY="array"})(W||(W={}));/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */let M;class St{constructor(t){M=t}parse(t,n){const r=Object.assign({alias:void 0,array:void 0,boolean:void 0,config:void 0,configObjects:void 0,configuration:void 0,coerce:void 0,count:void 0,default:void 0,envPrefix:void 0,narg:void 0,normalize:void 0,string:void 0,number:void 0,__:void 0,key:void 0},n),c=Ot(t),a=typeof t=="string",h=vt(Object.assign(Object.create(null),r.alias)),g=Object.assign({"boolean-negation":!0,"camel-case-expansion":!0,"combine-arrays":!1,"dot-notation":!0,"duplicate-arguments-array":!0,"flatten-duplicate-arrays":!0,"greedy-arrays":!0,"halt-at-non-option":!1,"nargs-eats-options":!1,"negation-prefix":"no-","parse-numbers":!0,"parse-positional-numbers":!0,"populate--":!1,"set-placeholder-key":!1,"short-option-groups":!0,"strip-aliased":!1,"strip-dashed":!1,"unknown-options-as-args":!1},r.configuration),_=Object.assign(Object.create(null),r.default),L=r.configObjects||[],S=r.envPrefix,D=g["populate--"],K=D?"--":"_",xe=Object.create(null),pt=Object.create(null),Y=r.__||M.format,u={aliases:Object.create(null),arrays:Object.create(null),bools:Object.create(null),strings:Object.create(null),numbers:Object.create(null),counts:Object.create(null),normalize:Object.create(null),configs:Object.create(null),nargs:Object.create(null),coercions:Object.create(null),keys:[]},I=/^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,Ve=new RegExp("^--"+g["negation-prefix"]+"(.+)");[].concat(r.array||[]).filter(Boolean).forEach(function(s){const i=typeof s=="object"?s.key:s,f=Object.keys(s).map(function(l){return{boolean:"bools",string:"strings",number:"numbers"}[l]}).filter(Boolean).pop();f&&(u[f][i]=!0),u.arrays[i]=!0,u.keys.push(i)}),[].concat(r.boolean||[]).filter(Boolean).forEach(function(s){u.bools[s]=!0,u.keys.push(s)}),[].concat(r.string||[]).filter(Boolean).forEach(function(s){u.strings[s]=!0,u.keys.push(s)}),[].concat(r.number||[]).filter(Boolean).forEach(function(s){u.numbers[s]=!0,u.keys.push(s)}),[].concat(r.count||[]).filter(Boolean).forEach(function(s){u.counts[s]=!0,u.keys.push(s)}),[].concat(r.normalize||[]).filter(Boolean).forEach(function(s){u.normalize[s]=!0,u.keys.push(s)}),typeof r.narg=="object"&&Object.entries(r.narg).forEach(([s,i])=>{typeof i=="number"&&(u.nargs[s]=i,u.keys.push(s))}),typeof r.coerce=="object"&&Object.entries(r.coerce).forEach(([s,i])=>{typeof i=="function"&&(u.coercions[s]=i,u.keys.push(s))}),typeof r.config<"u"&&(Array.isArray(r.config)||typeof r.config=="string"?[].concat(r.config).filter(Boolean).forEach(function(s){u.configs[s]=!0}):typeof r.config=="object"&&Object.entries(r.config).forEach(([s,i])=>{(typeof i=="boolean"||typeof i=="function")&&(u.configs[s]=i)})),os(r.key,h,r.default,u.arrays),Object.keys(_).forEach(function(s){(u.aliases[s]||[]).forEach(function(i){_[i]=_[s]})});let P=null;us();let Ne=[];const v=Object.assign(Object.create(null),{_:[]}),dt={};for(let s=0;s<c.length;s++){const i=c[s],f=i.replace(/^-{3,}/,"---");let l,o,d,p,m,x;if(i!=="--"&&/^-/.test(i)&&Le(i))De(i);else if(f.match(/^---+(=|$)/)){De(i);continue}else if(i.match(/^--.+=/)||!g["short-option-groups"]&&i.match(/^-.+=/))p=i.match(/^--?([^=]+)=([\s\S]*)$/),p!==null&&Array.isArray(p)&&p.length>=3&&(b(p[1],u.arrays)?s=Fe(s,p[1],c,p[2]):b(p[1],u.nargs)!==!1?s=je(s,p[1],c,p[2]):A(p[1],p[2],!0));else if(i.match(Ve)&&g["boolean-negation"])p=i.match(Ve),p!==null&&Array.isArray(p)&&p.length>=2&&(o=p[1],A(o,b(o,u.arrays)?[!1]:!1));else if(i.match(/^--.+/)||!g["short-option-groups"]&&i.match(/^-[^-]+/))p=i.match(/^--?(.+)/),p!==null&&Array.isArray(p)&&p.length>=2&&(o=p[1],b(o,u.arrays)?s=Fe(s,o,c):b(o,u.nargs)!==!1?s=je(s,o,c):(m=c[s+1],m!==void 0&&(!m.match(/^-/)||m.match(I))&&!b(o,u.bools)&&!b(o,u.counts)||/^(true|false)$/.test(m)?(A(o,m),s++):A(o,X(o))));else if(i.match(/^-.\..+=/))p=i.match(/^-([^=]+)=([\s\S]*)$/),p!==null&&Array.isArray(p)&&p.length>=3&&A(p[1],p[2]);else if(i.match(/^-.\..+/)&&!i.match(I))m=c[s+1],p=i.match(/^-(.\..+)/),p!==null&&Array.isArray(p)&&p.length>=2&&(o=p[1],m!==void 0&&!m.match(/^-/)&&!b(o,u.bools)&&!b(o,u.counts)?(A(o,m),s++):A(o,X(o)));else if(i.match(/^-[^-]+/)&&!i.match(I)){d=i.slice(1,-1).split(""),l=!1;for(let F=0;F<d.length;F++){if(m=i.slice(F+2),d[F+1]&&d[F+1]==="="){x=i.slice(F+3),o=d[F],b(o,u.arrays)?s=Fe(s,o,c,x):b(o,u.nargs)!==!1?s=je(s,o,c,x):A(o,x),l=!0;break}if(m==="-"){A(d[F],m);continue}if(/[A-Za-z]/.test(d[F])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(m)&&b(m,u.bools)===!1){A(d[F],m),l=!0;break}if(d[F+1]&&d[F+1].match(/\W/)){A(d[F],m),l=!0;break}else A(d[F],X(d[F]))}o=i.slice(-1)[0],!l&&o!=="-"&&(b(o,u.arrays)?s=Fe(s,o,c):b(o,u.nargs)!==!1?s=je(s,o,c):(m=c[s+1],m!==void 0&&(!/^(-|--)[^-]/.test(m)||m.match(I))&&!b(o,u.bools)&&!b(o,u.counts)||/^(true|false)$/.test(m)?(A(o,m),s++):A(o,X(o))))}else if(i.match(/^-[0-9]$/)&&i.match(I)&&b(i.slice(1),u.bools))o=i.slice(1),A(o,X(o));else if(i==="--"){Ne=c.slice(s+1);break}else if(g["halt-at-non-option"]){Ne=c.slice(s);break}else De(i)}mt(v,!0),mt(v,!1),es(v),ts(),$t(v,u.aliases,_,!0),ns(v),g["set-placeholder-key"]&&ss(v),Object.keys(u.counts).forEach(function(s){Ae(v,s.split("."))||A(s,0)}),D&&Ne.length&&(v[K]=[]),Ne.forEach(function(s){v[K].push(s)}),g["camel-case-expansion"]&&g["strip-dashed"]&&Object.keys(v).filter(s=>s!=="--"&&s.includes("-")).forEach(s=>{delete v[s]}),g["strip-aliased"]&&[].concat(...Object.keys(h).map(s=>h[s])).forEach(s=>{g["camel-case-expansion"]&&s.includes("-")&&delete v[s.split(".").map(i=>J(i)).join(".")],delete v[s]});function De(s){const i=Re("_",s);(typeof i=="string"||typeof i=="number")&&v._.push(i)}function je(s,i,f,l){let o,d=b(i,u.nargs);if(d=typeof d!="number"||isNaN(d)?1:d,d===0)return G(l)||(P=Error(Y("Argument unexpected for: %s",i))),A(i,X(i)),s;let p=G(l)?0:1;if(g["nargs-eats-options"])f.length-(s+1)+p<d&&(P=Error(Y("Not enough arguments following: %s",i))),p=d;else{for(o=s+1;o<f.length&&(!f[o].match(/^-[^0-9]/)||f[o].match(I)||Le(f[o]));o++)p++;p<d&&(P=Error(Y("Not enough arguments following: %s",i)))}let m=Math.min(p,d);for(!G(l)&&m>0&&(A(i,l),m--),o=s+1;o<m+s+1;o++)A(i,f[o]);return s+m}function Fe(s,i,f,l){let o=[],d=l||f[s+1];const p=b(i,u.nargs);if(b(i,u.bools)&&!/^(true|false)$/.test(d))o.push(!0);else if(G(d)||G(l)&&/^-/.test(d)&&!I.test(d)&&!Le(d)){if(_[i]!==void 0){const m=_[i];o=Array.isArray(m)?m:[m]}}else{G(l)||o.push(Ge(i,l,!0));for(let m=s+1;m<f.length&&!(!g["greedy-arrays"]&&o.length>0||p&&typeof p=="number"&&o.length>=p||(d=f[m],/^-/.test(d)&&!I.test(d)&&!Le(d)));m++)s=m,o.push(Ge(i,d,a))}return typeof p=="number"&&(p&&o.length<p||isNaN(p)&&o.length===0)&&(P=Error(Y("Not enough arguments following: %s",i))),A(i,o),s}function A(s,i,f=a){if(/-/.test(s)&&g["camel-case-expansion"]){const d=s.split(".").map(function(p){return J(p)}).join(".");gt(s,d)}const l=Ge(s,i,f),o=s.split(".");_e(v,o,l),u.aliases[s]&&u.aliases[s].forEach(function(d){const p=d.split(".");_e(v,p,l)}),o.length>1&&g["dot-notation"]&&(u.aliases[o[0]]||[]).forEach(function(d){let p=d.split(".");const m=[].concat(o);m.shift(),p=p.concat(m),(u.aliases[s]||[]).includes(p.join("."))||_e(v,p,l)}),b(s,u.normalize)&&!b(s,u.arrays)&&[s].concat(u.aliases[s]||[]).forEach(function(p){Object.defineProperty(dt,p,{enumerable:!0,get(){return i},set(m){i=typeof m=="string"?M.normalize(m):m}})})}function gt(s,i){u.aliases[s]&&u.aliases[s].length||(u.aliases[s]=[i],xe[i]=!0),u.aliases[i]&&u.aliases[i].length||gt(i,s)}function Ge(s,i,f){f&&(i=xt(i)),(b(s,u.bools)||b(s,u.counts))&&typeof i=="string"&&(i=i==="true");let l=Array.isArray(i)?i.map(function(o){return Re(s,o)}):Re(s,i);return b(s,u.counts)&&(G(l)||typeof l=="boolean")&&(l=Te()),b(s,u.normalize)&&b(s,u.arrays)&&(Array.isArray(i)?l=i.map(o=>M.normalize(o)):l=M.normalize(i)),l}function Re(s,i){return!g["parse-positional-numbers"]&&s==="_"||!b(s,u.strings)&&!b(s,u.bools)&&!Array.isArray(i)&&(He(i)&&g["parse-numbers"]&&Number.isSafeInteger(Math.floor(parseFloat(`${i}`)))||!G(i)&&b(s,u.numbers))&&(i=Number(i)),i}function es(s){const i=Object.create(null);$t(i,u.aliases,_),Object.keys(u.configs).forEach(function(f){const l=s[f]||i[f];if(l)try{let o=null;const d=M.resolve(M.cwd(),l),p=u.configs[f];if(typeof p=="function"){try{o=p(d)}catch(m){o=m}if(o instanceof Error){P=o;return}}else o=M.require(d);Ze(o)}catch(o){o.name==="PermissionDenied"?P=o:s[f]&&(P=Error(Y("Invalid JSON config file: %s",l)))}})}function Ze(s,i){Object.keys(s).forEach(function(f){const l=s[f],o=i?i+"."+f:f;typeof l=="object"&&l!==null&&!Array.isArray(l)&&g["dot-notation"]?Ze(l,o):(!Ae(v,o.split("."))||b(o,u.arrays)&&g["combine-arrays"])&&A(o,l)})}function ts(){typeof L<"u"&&L.forEach(function(s){Ze(s)})}function mt(s,i){if(typeof S>"u")return;const f=typeof S=="string"?S:"",l=M.env();Object.keys(l).forEach(function(o){if(f===""||o.lastIndexOf(f,0)===0){const d=o.split("__").map(function(p,m){return m===0&&(p=p.substring(f.length)),J(p)});(i&&u.configs[d.join(".")]||!i)&&!Ae(s,d)&&A(d.join("."),l[o])}})}function ns(s){let i;const f=new Set;Object.keys(s).forEach(function(l){if(!f.has(l)&&(i=b(l,u.coercions),typeof i=="function"))try{const o=Re(l,i(s[l]));[].concat(u.aliases[l]||[],l).forEach(d=>{f.add(d),s[d]=o})}catch(o){P=o}})}function ss(s){return u.keys.forEach(i=>{~i.indexOf(".")||typeof s[i]>"u"&&(s[i]=void 0)}),s}function $t(s,i,f,l=!1){Object.keys(f).forEach(function(o){Ae(s,o.split("."))||(_e(s,o.split("."),f[o]),l&&(pt[o]=!0),(i[o]||[]).forEach(function(d){Ae(s,d.split("."))||_e(s,d.split("."),f[o])}))})}function Ae(s,i){let f=s;g["dot-notation"]||(i=[i.join(".")]),i.slice(0,-1).forEach(function(o){f=f[o]||{}});const l=i[i.length-1];return typeof f!="object"?!1:l in f}function _e(s,i,f){let l=s;g["dot-notation"]||(i=[i.join(".")]),i.slice(0,-1).forEach(function(x){x=Je(x),typeof l=="object"&&l[x]===void 0&&(l[x]={}),typeof l[x]!="object"||Array.isArray(l[x])?(Array.isArray(l[x])?l[x].push({}):l[x]=[l[x],{}],l=l[x][l[x].length-1]):l=l[x]});const o=Je(i[i.length-1]),d=b(i.join("."),u.arrays),p=Array.isArray(f);let m=g["duplicate-arguments-array"];!m&&b(o,u.nargs)&&(m=!0,(!G(l[o])&&u.nargs[o]===1||Array.isArray(l[o])&&l[o].length===u.nargs[o])&&(l[o]=void 0)),f===Te()?l[o]=Te(l[o]):Array.isArray(l[o])?m&&d&&p?l[o]=g["flatten-duplicate-arrays"]?l[o].concat(f):(Array.isArray(l[o][0])?l[o]:[l[o]]).concat([f]):!m&&!!d==!!p?l[o]=f:l[o]=l[o].concat([f]):l[o]===void 0&&d?l[o]=p?f:[f]:m&&!(l[o]===void 0||b(o,u.counts)||b(o,u.bools))?l[o]=[l[o],f]:l[o]=f}function os(...s){s.forEach(function(i){Object.keys(i||{}).forEach(function(f){u.aliases[f]||(u.aliases[f]=[].concat(h[f]||[]),u.aliases[f].concat(f).forEach(function(l){if(/-/.test(l)&&g["camel-case-expansion"]){const o=J(l);o!==f&&u.aliases[f].indexOf(o)===-1&&(u.aliases[f].push(o),xe[o]=!0)}}),u.aliases[f].concat(f).forEach(function(l){if(l.length>1&&/[A-Z]/.test(l)&&g["camel-case-expansion"]){const o=Xe(l,"-");o!==f&&u.aliases[f].indexOf(o)===-1&&(u.aliases[f].push(o),xe[o]=!0)}}),u.aliases[f].forEach(function(l){u.aliases[l]=[f].concat(u.aliases[f].filter(function(o){return l!==o}))}))})})}function b(s,i){const f=[].concat(u.aliases[s]||[],s),l=Object.keys(i),o=f.find(d=>l.includes(d));return o?i[o]:!1}function bt(s){const i=Object.keys(u);return[].concat(i.map(l=>u[l])).some(function(l){return Array.isArray(l)?l.includes(s):l[s]})}function rs(s,...i){return[].concat(...i).some(function(l){const o=s.match(l);return o&&bt(o[1])})}function is(s){if(s.match(I)||!s.match(/^-[^-]+/))return!1;let i=!0,f;const l=s.slice(1).split("");for(let o=0;o<l.length;o++){if(f=s.slice(o+2),!bt(l[o])){i=!1;break}if(l[o+1]&&l[o+1]==="="||f==="-"||/[A-Za-z]/.test(l[o])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(f)||l[o+1]&&l[o+1].match(/\W/))break}return i}function Le(s){return g["unknown-options-as-args"]&&cs(s)}function cs(s){return s=s.replace(/^-{3,}/,"--"),s.match(I)||is(s)?!1:!rs(s,/^-+([^=]+?)=[\s\S]*$/,Ve,/^-+([^=]+?)$/,/^-+([^=]+?)-$/,/^-+([^=]+?\d+)$/,/^-+([^=]+?)\W+.*$/)}function X(s){return!b(s,u.bools)&&!b(s,u.counts)&&`${s}`in _?_[s]:ls(as(s))}function ls(s){return{[W.BOOLEAN]:!0,[W.STRING]:"",[W.NUMBER]:void 0,[W.ARRAY]:[]}[s]}function as(s){let i=W.BOOLEAN;return b(s,u.strings)?i=W.STRING:b(s,u.numbers)?i=W.NUMBER:b(s,u.bools)?i=W.BOOLEAN:b(s,u.arrays)&&(i=W.ARRAY),i}function G(s){return s===void 0}function us(){Object.keys(u.counts).find(s=>b(s,u.arrays)?(P=Error(Y("Invalid configuration: %s, opts.count excludes opts.array.",s)),!0):b(s,u.nargs)?(P=Error(Y("Invalid configuration: %s, opts.count excludes opts.narg.",s)),!0):!1)}return{aliases:Object.assign({},u.aliases),argv:Object.assign(dt,v),configuration:g,defaulted:Object.assign({},pt),error:P,newAliases:Object.assign({},xe)}}}function vt(e){const t=[],n=Object.create(null);let r=!0;for(Object.keys(e).forEach(function(c){t.push([].concat(e[c],c))});r;){r=!1;for(let c=0;c<t.length;c++)for(let a=c+1;a<t.length;a++)if(t[c].filter(function(g){return t[a].indexOf(g)!==-1}).length){t[c]=t[c].concat(t[a]),t.splice(a,1),r=!0;break}}return t.forEach(function(c){c=c.filter(function(h,g,_){return _.indexOf(h)===g});const a=c.pop();a!==void 0&&typeof a=="string"&&(n[a]=c)}),n}function Te(e){return e!==void 0?e+1:1}function Je(e){return e==="__proto__"?"___proto___":e}function xt(e){return typeof e=="string"&&(e[0]==="'"||e[0]==='"')&&e[e.length-1]===e[0]?e.substring(1,e.length-1):e}/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var We,ze,Pe;const ke=process&&process.env&&process.env.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12,et=(ze=(We=process==null?void 0:process.versions)===null||We===void 0?void 0:We.node)!==null&&ze!==void 0?ze:(Pe=process==null?void 0:process.version)===null||Pe===void 0?void 0:Pe.slice(1);if(et&&Number(et.match(/^([^.]+)/)[1])<ke)throw Error(`yargs parser supports a minimum Node.js version of ${ke}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);const Nt=process?process.env:{},tt=new St({cwd:process.cwd,env:()=>Nt,format:Q.format,normalize:N.normalize,resolve:N.resolve,require:e=>{if(typeof require<"u")return require(e);if(e.match(/\.json$/))return JSON.parse(B.readFileSync(e,"utf8"));throw Error("only .json config files are supported in ESM")}}),k=function(t,n){return tt.parse(t.slice(),n).argv};k.detailed=function(e,t){return tt.parse(e.slice(),t)},k.camelCase=J,k.decamelize=Xe,k.looksLikeNumber=He;const jt={right:zt,center:Pt},Ft=0,Ce=1,Rt=2,we=3;class Lt{constructor(t){var n;this.width=t.width,this.wrap=(n=t.wrap)!==null&&n!==void 0?n:!0,this.rows=[]}span(...t){const n=this.div(...t);n.span=!0}resetOutput(){this.rows=[]}div(...t){if(t.length===0&&this.div(""),this.wrap&&this.shouldApplyLayoutDSL(...t)&&typeof t[0]=="string")return this.applyLayoutDSL(t[0]);const n=t.map(r=>typeof r=="string"?this.colFromString(r):r);return this.rows.push(n),n}shouldApplyLayoutDSL(...t){return t.length===1&&typeof t[0]=="string"&&/[\t\n]/.test(t[0])}applyLayoutDSL(t){const n=t.split(`
`).map(c=>c.split("	"));let r=0;return n.forEach(c=>{c.length>1&&R.stringWidth(c[0])>r&&(r=Math.min(Math.floor(this.width*.5),R.stringWidth(c[0])))}),n.forEach(c=>{this.div(...c.map((a,h)=>({text:a.trim(),padding:this.measurePadding(a),width:h===0&&c.length>1?r:void 0})))}),this.rows[this.rows.length-1]}colFromString(t){return{text:t,padding:this.measurePadding(t)}}measurePadding(t){const n=R.stripAnsi(t);return[0,n.match(/\s*$/)[0].length,0,n.match(/^\s*/)[0].length]}toString(){const t=[];return this.rows.forEach(n=>{this.rowToString(n,t)}),t.filter(n=>!n.hidden).map(n=>n.text).join(`
`)}rowToString(t,n){return this.rasterize(t).forEach((r,c)=>{let a="";r.forEach((h,g)=>{const{width:_}=t[g],L=this.negatePadding(t[g]);let S=h;if(L>R.stringWidth(h)&&(S+=" ".repeat(L-R.stringWidth(h))),t[g].align&&t[g].align!=="left"&&this.wrap){const K=jt[t[g].align];S=K(S,L),R.stringWidth(S)<L&&(S+=" ".repeat((_||0)-R.stringWidth(S)-1))}const D=t[g].padding||[0,0,0,0];D[we]&&(a+=" ".repeat(D[we])),a+=nt(t[g],S,"| "),a+=S,a+=nt(t[g],S," |"),D[Ce]&&(a+=" ".repeat(D[Ce])),c===0&&n.length>0&&(a=this.renderInline(a,n[n.length-1]))}),n.push({text:a.replace(/ +$/,""),span:t.span})}),n}renderInline(t,n){const r=t.match(/^ */),c=r?r[0].length:0,a=n.text,h=R.stringWidth(a.trimRight());return n.span?this.wrap?c<h?t:(n.hidden=!0,a.trimRight()+" ".repeat(c-h)+t.trimLeft()):(n.hidden=!0,a+t):t}rasterize(t){const n=[],r=this.columnWidths(t);let c;return t.forEach((a,h)=>{a.width=r[h],this.wrap?c=R.wrap(a.text,this.negatePadding(a),{hard:!0}).split(`
`):c=a.text.split(`
`),a.border&&(c.unshift("."+"-".repeat(this.negatePadding(a)+2)+"."),c.push("'"+"-".repeat(this.negatePadding(a)+2)+"'")),a.padding&&(c.unshift(...new Array(a.padding[Ft]||0).fill("")),c.push(...new Array(a.padding[Rt]||0).fill(""))),c.forEach((g,_)=>{n[_]||n.push([]);const L=n[_];for(let S=0;S<h;S++)L[S]===void 0&&L.push("");L.push(g)})}),n}negatePadding(t){let n=t.width||0;return t.padding&&(n-=(t.padding[we]||0)+(t.padding[Ce]||0)),t.border&&(n-=4),n}columnWidths(t){if(!this.wrap)return t.map(h=>h.width||R.stringWidth(h.text));let n=t.length,r=this.width;const c=t.map(h=>{if(h.width)return n--,r-=h.width,h.width}),a=n?Math.floor(r/n):0;return c.map((h,g)=>h===void 0?Math.max(a,Tt(t[g])):h)}}function nt(e,t,n){return e.border?/[.']-+[.']/.test(t)?"":t.trim().length!==0?n:"  ":""}function Tt(e){const t=e.padding||[],n=1+(t[we]||0)+(t[Ce]||0);return e.border?n+4:n}function Wt(){return typeof process=="object"&&process.stdout&&process.stdout.columns?process.stdout.columns:80}function zt(e,t){e=e.trim();const n=R.stringWidth(e);return n<t?" ".repeat(t-n)+e:e}function Pt(e,t){e=e.trim();const n=R.stringWidth(e);return n>=t?e:" ".repeat(t-n>>1)+e}let R;function Bt(e,t){return R=t,new Lt({width:e?.width||Wt(),wrap:e?.wrap})}const st=new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)","g");function ot(e){return e.replace(st,"")}function It(e,t){const[n,r]=e.match(st)||["",""];e=ot(e);let c="";for(let a=0;a<e.length;a++)a!==0&&a%t===0&&(c+=`
`),c+=e.charAt(a);return n&&r&&(c=`${n}${c}${r}`),c}function Mt(e){return Bt(e,{stringWidth:t=>[...t].length,stripAnsi:ot,wrap:It})}function qt(e,t){let n=N.resolve(".",e),r;for(B.statSync(n).isDirectory()||(n=N.dirname(n));;){if(r=t(n,B.readdirSync(n)),r)return N.resolve(n,r);if(n=N.dirname(r=n),r===n)break}}const Ut={fs:{readFileSync:B.readFileSync,writeFile:B.writeFile},format:Q.format,resolve:N.resolve,exists:e=>{try{return B.statSync(e).isFile()}catch{return!1}}};let z;class Vt{constructor(t){t=t||{},this.directory=t.directory||"./locales",this.updateFiles=typeof t.updateFiles=="boolean"?t.updateFiles:!0,this.locale=t.locale||"en",this.fallbackToLanguage=typeof t.fallbackToLanguage=="boolean"?t.fallbackToLanguage:!0,this.cache=Object.create(null),this.writeQueue=[]}__(...t){if(typeof arguments[0]!="string")return this._taggedLiteral(arguments[0],...arguments);const n=t.shift();let r=function(){};return typeof t[t.length-1]=="function"&&(r=t.pop()),r=r||function(){},this.cache[this.locale]||this._readLocaleFile(),!this.cache[this.locale][n]&&this.updateFiles?(this.cache[this.locale][n]=n,this._enqueueWrite({directory:this.directory,locale:this.locale,cb:r})):r(),z.format.apply(z.format,[this.cache[this.locale][n]||n].concat(t))}__n(){const t=Array.prototype.slice.call(arguments),n=t.shift(),r=t.shift(),c=t.shift();let a=function(){};typeof t[t.length-1]=="function"&&(a=t.pop()),this.cache[this.locale]||this._readLocaleFile();let h=c===1?n:r;this.cache[this.locale][n]&&(h=this.cache[this.locale][n][c===1?"one":"other"]),!this.cache[this.locale][n]&&this.updateFiles?(this.cache[this.locale][n]={one:n,other:r},this._enqueueWrite({directory:this.directory,locale:this.locale,cb:a})):a();const g=[h];return~h.indexOf("%d")&&g.push(c),z.format.apply(z.format,g.concat(t))}setLocale(t){this.locale=t}getLocale(){return this.locale}updateLocale(t){this.cache[this.locale]||this._readLocaleFile();for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.cache[this.locale][n]=t[n])}_taggedLiteral(t,...n){let r="";return t.forEach(function(c,a){const h=n[a+1];r+=c,typeof h<"u"&&(r+="%s")}),this.__.apply(this,[r].concat([].slice.call(n,1)))}_enqueueWrite(t){this.writeQueue.push(t),this.writeQueue.length===1&&this._processWriteQueue()}_processWriteQueue(){const t=this,n=this.writeQueue[0],r=n.directory,c=n.locale,a=n.cb,h=this._resolveLocaleFile(r,c),g=JSON.stringify(this.cache[c],null,2);z.fs.writeFile(h,g,"utf-8",function(_){t.writeQueue.shift(),t.writeQueue.length>0&&t._processWriteQueue(),a(_)})}_readLocaleFile(){let t={};const n=this._resolveLocaleFile(this.directory,this.locale);try{z.fs.readFileSync&&(t=JSON.parse(z.fs.readFileSync(n,"utf-8")))}catch(r){if(r instanceof SyntaxError&&(r.message="syntax error in "+n),r.code==="ENOENT")t={};else throw r}this.cache[this.locale]=t}_resolveLocaleFile(t,n){let r=z.resolve(t,"./",n+".json");if(this.fallbackToLanguage&&!this._fileExistsSync(r)&&~n.lastIndexOf("_")){const c=z.resolve(t,"./",n.split("_")[0]+".json");this._fileExistsSync(c)&&(r=c)}return r}_fileExistsSync(t){return z.exists(t)}}function Dt(e,t){z=t;const n=new Vt(e);return{__:n.__.bind(n),__n:n.__n.bind(n),setLocale:n.setLocale.bind(n),getLocale:n.getLocale.bind(n),updateLocale:n.updateLocale.bind(n),locale:n.locale}}const Gt=e=>Dt(e,Ut),Zt="require is not supported by ESM",rt="loading a directory of commands is not supported yet for ESM";let ee;try{ee=yt.fileURLToPath(typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Ke&&Ke.src||new URL("vue-mess-detector.umd.js",document.baseURI).href)}catch{ee=process.cwd()}const Qt=ee.substring(0,ee.lastIndexOf("node_modules"));Qe.notStrictEqual,Qe.strictEqual,Q.inspect,Qt||process.cwd(),N.basename,N.dirname,N.extname,N.relative,N.resolve,process.cwd,process.exit,process.nextTick,typeof process.stdout.columns<"u"&&process.stdout.columns,B.readFileSync,Gt({directory:N.resolve(ee,"../../../locales"),updateFiles:!1});const Be="\x1B[44m",O="\x1B[43m",j="\x1B[41m",Kt="\x1B[42m",E="\x1B[0m",C="\x1B[33m",w="\x1B[36m",y="\x1B[0m",Ie=100,te=[],Yt=(e,t)=>{const n=e.content.split(`
`);n.length>Ie&&te.push({fileName:t,scriptLength:n.length})},Xt=()=>(te.length>0&&(console.log(`
${w}rrd${y} ${j}Long <script> blocks${E} in ${te.length} files.`),console.log(`👉 ${C}Try to refactor out the logic into composable functions or other files and keep the script block's length under ${Ie} lines.${y}`),te.forEach(e=>{console.log(`- ${e.fileName} ${e.scriptLength>Ie*2?j:O}(${e.scriptLength} lines)${E}`)})),te.length),ne=[],Ht=e=>{ne.push(e)},Jt=()=>(ne.length>0&&(console.log(`
${w}rrd${y} ${O}Plain <script> blocks${E} in ${ne.length} files.`),console.log(`👉 ${C} Consider using <script setup> to leverage the new SFC <script> syntax.${y}`),ne.forEach(e=>{console.log(`- ${e}`)})),ne.length),se=[],kt=(e,t)=>{const n=/\belse\b/gi,r=e.content.match(n);r?.length&&se.push({fileName:t,elseCount:r.length})},en=()=>(se.length>0&&(console.log(`
${w}rrd${y} ${O}else conditions${E} are used in ${se.length} files.`),console.log(`👉 ${C}Try to rewrite the conditions in a way that the else clause is not necessary.${y}`),se.forEach(e=>{console.log(`- ${e.fileName} ${O}(${e.elseCount})${E}`)})),se.length),tn=5,nn=10,oe=[],sn=(e,t)=>{const n=/\bif\b/gi,r=/\belse\b/gi,c=/\bfor\b/gi,a=/\bwhile\b/gi,h=/\bcase\b/gi,g=e.content.match(n),_=e.content.match(r),L=e.content.match(c),S=e.content.match(a),D=e.content.match(h),K=(g?.length||0)+(_?.length||0)+(L?.length||0)+(S?.length||0)+(D?.length||0);K>tn&&oe.push({fileName:t,cyclomaticComplexity:K})},on=()=>(oe.length>0&&(console.log(`
${w}rrd${y} ${Be}cyclomaticComplexity${E} is above moderate in ${oe.length} files.`),console.log(`👉 ${C}Try to reduce complexity.${y}`),oe.forEach(e=>{console.log(`- ${e.fileName} ${e.cyclomaticComplexity>nn?j:O}(${e.cyclomaticComplexity})${E}`)})),oe.length),re=[],rn=e=>{if(e.includes("pages"))return;const t=N.basename(e);if(t==="App.vue")return;const n=/[A-Z]/;t.slice(1).match(n)?.length||re.push({filePath:e})},cn=()=>(re.length>0&&(console.log(`
${w}vue-essential${y} ${j}single name component${E} is used in ${re.length} files.`),console.log(`👉 ${C}Rename the component to use multi-word name.${y} See: https://vuejs.org/style-guide/rules-essential.html#use-multi-word-component-names`),re.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),re.length),ie=[],ln=(e,t)=>{e.scoped||ie.push({filePath:t})},an=()=>(ie.length>0&&(console.log(`
${w}vue-essential${y} ${j}Global style ${E} is used in ${ie.length} files.`),console.log(`👉 ${C}Use <style scoped>.${y} See: https://vuejs.org/style-guide/rules-essential.html#use-component-scoped-styling`),ie.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ie.length),ce=[],un=(e,t)=>{const n=/defineProps\(\[/gi;e.content.match(n)?.length&&ce.push({filePath:t})},fn=()=>(ce.length>0&&(console.log(`
${w}vue-essential${y} ${j}simple prop${E} is used in ${ce.length} files.`),console.log(`👉 ${C}Add at least type definition.${y} See: https://vuejs.org/style-guide/rules-essential.html#use-detailed-prop-definitions`),ce.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ce.length),le=[],hn=(e,t)=>{const n=/<[^>]+ v-if[^>]+ v-for[^>]+>/gi,r=/<[^>]+ v-for[^>]+ v-if[^>]+>/gi,c=e.content.match(n),a=e.content.match(r);(c?.length||a?.length)&&le.push({filePath:t})},pn=()=>(le.length>0&&(console.log(`
${w}vue-essential${y} ${j}v-if used with v-for${E} in ${le.length} files.`),console.log(`👉 ${C}Move out the v-if to a computed property.${y} See: https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for`),le.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),le.length),ae=[],dn=(e,t)=>{const n=/<[^>]+ v-for[^>]+>/gi,r=e.content.match(n);r?.length&&(r.some(a=>a.includes(":key"))||ae.push({filePath:t}))},gn=()=>(ae.length>0&&(console.log(`
${w}vue-essential${y} ${j}v-for has no key${E} in ${ae.length} files.`),console.log(`👉 ${C}Add a \`:key\` property to all v-for.${y} See: https://vuejs.org/style-guide/rules-essential.html#use-keyed-v-for`),ae.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ae.length),ue=[],mn=e=>{if(e.includes("pages/")||e.includes("layouts/"))return;const t=N.basename(e),n=/^[A-Z][a-zA-Z0-9]+(?:(?<!^)(?=[A-Z]))*.vue$/,r=t.match(n),c=/^([a-z0-9]+-)+[a-z0-9]+\.vue$/,a=t.match(c);!r?.length&&!a?.length&&ue.push({fileName:e})},$n=()=>(ue.length>0&&(console.log(`
${w}vue-strong${y} ${j}component name is not PascalCase and not kebab-case${E} in ${ue.length} files.`),console.log(`👉 ${C}Rename the component to use PascalCase or kebab-case file name.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing`),ue.forEach(e=>{console.log(`- ${j}${e.fileName}${E}`)})),ue.length),fe=[],bn=/^[a-z]+([A-Z][a-z]*)+$/,yn=(e,t)=>{const n=/defineProps\({([^}]+)/g;let r;for(;(r=n.exec(e.content))!==null;)r[1].replace(/\s+/g,"").replace(/["']/g,"").split(",").map(a=>a.split(":")[0]).filter(a=>a.length).filter(a=>!bn.test(a)).length&&fe.push({filePath:t})},En=()=>(fe.length>0&&(console.log(`
${w}vue-strong${y} ${j}prop names are not camelCased${E} in ${fe.length} files.`),console.log(`👉 ${C}Rename the props to camelCase.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#prop-name-casing`),fe.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),fe.length),he=(e,t)=>{if(!t.includes(`
`))return e.split(`
`).findIndex(h=>h.includes(t))+1;const n=e.indexOf(t),r=e.slice(0,n).split(`
`).length,c=t.split(`
`).length;return r+c-1},pe=[],An=40,_n=(e,t)=>{const n=/{{\s*([\s\S]*?)\s*}}/g;[...e.content.matchAll(n)].map(c=>c[1].trim()).forEach(c=>{if(c.length>An){const a=he(e.content,c),h=c.split(`
`).at(0)?.trim()||"";pe.push({message:`${t}#${a} ${O}${h}${E}`})}})},Cn=()=>(pe.length>0&&(console.log(`
${w}vue-strong${y} ${j}Lengthy template expression${E} found in ${pe.length} files.`),console.log(`👉 ${C}Refactor the expression into a computed property.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#simple-expressions-in-templates`),pe.forEach(e=>{console.log(`- ${e.message} 🚨`)})),pe.length),wn=/^(\(.*\)|\\?.)$/;function Z(e){const t=e.toString();return wn.test(t)?t:`(?:${t})`}const On=/^(?:\(\?:(.+)\)|(\(?.+\)?))$/,Sn=/^(?:\(\?:(.+)\)([?+*]|{[\d,]+})?|(.+))$/;function $(e){const t=n=>$(`(?<${n}>${`${e}`.replace(On,"$1$2")})`);return{toString:()=>e.toString(),and:Object.assign((...n)=>$(`${e}${U(...n)}`),{referenceTo:n=>$(`${e}\\k<${n}>`)}),or:(...n)=>$(`(?:${e}|${U(...n)})`),after:(...n)=>$(`(?<=${U(...n)})${e}`),before:(...n)=>$(`${e}(?=${U(...n)})`),notAfter:(...n)=>$(`(?<!${U(...n)})${e}`),notBefore:(...n)=>$(`${e}(?!${U(...n)})`),times:Object.assign(n=>$(`${Z(e)}{${n}}`),{any:()=>$(`${Z(e)}*`),atLeast:n=>$(`${Z(e)}{${n},}`),atMost:n=>$(`${Z(e)}{0,${n}}`),between:(n,r)=>$(`${Z(e)}{${n},${r}}`)}),optionally:()=>$(`${Z(e)}?`),as:t,groupedAs:t,grouped:()=>$(`${e}`.replace(Sn,"($1$3)$2")),at:{lineStart:()=>$(`^${e}`),lineEnd:()=>$(`${e}$`)}}}const vn=/[.*+?^${}()|[\]\\/]/g;function it(e){return $(`[${e.replace(/[-\\^\]]/g,"\\$&")}]`)}function Me(e){return $(`[^${e.replace(/[-\\^\]]/g,"\\$&")}]`)}const xn=$(".");$("\\b\\w+\\b");const Oe=$("\\w");$("\\b"),$("\\d"),$("\\s");const Nn=Object.assign($("[a-zA-Z]"),{lowercase:$("[a-z]"),uppercase:$("[A-Z]")}),jn=$("\\t"),Fn=$("\\n");$("\\r"),$("\\W+"),$("\\W"),$("\\B"),$("\\D"),$("\\S"),Object.assign($("[^a-zA-Z]"),{lowercase:$("[^a-z]"),uppercase:$("[^A-Z]")}),$("[^\\t]"),$("[^\\n]"),$("[^\\r]");function q(...e){return $(`${Z(U(...e))}?`)}function U(...e){return $(e.map(t=>typeof t=="string"?t.replace(vn,"\\$&"):t).join(""))}function V(...e){return $(`${Z(U(...e))}+`)}const Se=(...e)=>{const t=e.length>1&&(Array.isArray(e[e.length-1])||e[e.length-1]instanceof Set)?e.pop():void 0;return new RegExp(U(...e).toString(),[...t||""].join(""))},de=[],Rn=(e,t)=>{const n=e.template,r=Se("<",V(Oe),q(V(it(` 	
\r`))),V(Me("/>")),q(V(it(` 	
\r`))),q("/"),">",["g"]),c=n.content.match(r);if(c===null)return;const a=Se(":",V(Oe),q(" "),"=",q(" "),Me(`'"`),["g"]);c.forEach(h=>{if(!h.includes(":"))return;const g=h.match(a);if(g?.length){const _=he(e.source,h);de.push({message:`${t}#${_} ${O}${g}${E}`})}})},Ln=()=>(de.length>0&&(console.log(`
${w}vue-strong${y} ${j}Attribute value is not quoted${E} in ${de.length} files.`),console.log(`👉 ${C}Use quotes for attribute values.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#quoted-attribute-values`),de.forEach(e=>{console.log(`- ${e.message} 🚨`)})),de.length),ge=[],Tn=(e,t)=>{const n=e.template,r=Se("<",V(Nn.uppercase,Oe),q(Fn,jn),q(V(Me(">"))),"></",V(Oe),">",["g"]),c=n.content.match(r);c!==null&&c.forEach(a=>{const h=he(e.source,a),g=a.split(`
`).at(-1)?.trim()||"";ge.push({message:`${t}#${h} ${O}${g}${E}`})})},Wn=()=>(ge.length>0&&(console.log(`
${w}vue-strong${y} - ${j}Component is not self closing${E} in ${ge.length} files.`),console.log(`👉 ${C}Components with no content should be self-closing.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#self-closing-components`),ge.forEach(e=>{console.log(`- ${e.message} 🚨`)})),ge.length),ve=[],qe=[],zn=["v-slot","v-bind","v-on"],Pn=(e,t)=>{const n=e.template;zn.forEach(r=>{if(n.content.includes(`${r}:`)){const c=he(e.source,r);ve.push({message:`${t}:${c} ${O}${r}${E}`}),qe.some(a=>a.filePath===t)||qe.push({filePath:t})}})},Bn=()=>(ve.length>0&&(console.log(`
${w}vue-strong${y} ${j}Directive shorthands not used${E} in ${qe.length} files.`),console.log(`👉 ${C}Use ":" for v-bind:, "@" for v-on: and "#" for v-slot.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#directive-shorthands`),ve.forEach(e=>{console.log(`- ${e.message} 🚨`)})),ve.length),me=[],In=5,Mn=(e,t)=>{const n=Se("defineProps",q("<"),q("("),"{",V(xn),"}",["g","s"]),r=e.content.match(n);if(r?.length){const c=r[0].split(",").length;c>In&&me.push({fileName:t,propsCount:c})}},qn=()=>(me.length>0&&(console.log(`
${w}rrd${y} ${O}too many props${E} are used in ${me.length} files.`),console.log(`👉 ${C}Try to refactor your code to use less properties.${y}`),me.forEach(e=>{console.log(`- ${e.fileName} ${O}(${e.propsCount})${E}`)})),me.length),$e=[],ct=20,Un=(e,t)=>{const n=/function\s+([a-zA-Z0-9_$]+)\s*\([^)]*\)\s*{([^{}]*(([^{}]*{[^{}]*}[^{}]*)*[^{}]*))}|const\s+([a-zA-Z0-9_$]+)\s*=\s*\([^)]*\)\s*=>\s*{([^{}]*(([^{}]*{[^{}]*}[^{}]*)*[^{}]*))}/g;let r;for(;(r=n.exec(e.content))!==null;){const c=r[1]||r[5];(r[2]||r[6]).split(`
`).length>ct&&$e.push({filename:t,funcName:c})}},Vn=()=>($e.length>0&&(console.log(`
${w}rrd${y} ${O}function size${E} exceeds recommended limit in ${$e.length} files.`),console.log(`👉 ${C}Functions must be shorter than ${ct} lines${y}`),$e.forEach(e=>{console.log(`- ${e.filename} 🚨 ${O}(${e.funcName})${E}`)})),$e.length),be=[],lt=3,at=(e,t,n)=>{const r=t.split(",").map(c=>c.trim()).filter(c=>c.length>0);r.length>lt&&be.push({filename:n,funcName:e,paramsCount:r.length})},Dn=(e,t)=>{const n=/function\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)\s*{|const\s+([a-zA-Z0-9_$]+)\s*=\s*\(([^)]*)\)\s*=>\s*{/g;let r;for(;(r=n.exec(e.content))!==null;)r[1]?at(r[1],r[2],t):r[3]&&at(r[3],r[4],t)},Gn=()=>(be.length>0&&(console.log(`
${w}rrd${y} ${O}parameter count${E} exceeds recommended limit in ${be.length} files.`),console.log(`👉 ${C}Max number of function parameters should be ${lt}${y}`),be.forEach(e=>{console.log(`- ${O}${e.funcName}${E} in file ${e.filename} 🚨 ${O}(${e.paramsCount})${E}`)})),be.length),ut=4,ye=[],Zn=e=>new Set(e.map(n=>n.filename)).size,Qn=(e,t)=>{const n=/\b(?:const|var|let)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let r;for(;(r=n.exec(e.content))!==null;){const c=r[1];c.length<ut&&ye.push({filename:t,variable:c})}},Kn=()=>{if(ye.length>0){const e=Zn(ye);console.log(`
${w}rrd${y} ${O}variable names${E} are too short in ${e} files.`),console.log(`👉 ${C}Variable names must have a minimum length of ${ut}${y}`),ye.forEach(t=>{console.log(`- ${t.filename} 🚨 ${O}(${t.variable})${E}`)})}return ye.length},Ue=[],Ee=[],Yn=5,Xn=(e,t)=>{const n=/const\s+([a-zA-Z0-9_$]+)\s*=\s*computed\(\s*\(\)\s*=>\s*{([^{}]*(?:{[^{}]*}[^{}]*)*)}\s*\)/gs,r=e.content.match(n);r?.length&&r.forEach(c=>{if(c.split(`
`).length>Yn){const a=c.split(`
`)[0],h=he(e.content,a);Ue.push({message:`${t}:${h} ${O}computed${E}`}),Ee.push({filePath:t}),Ee.some(g=>g.filePath===t)||Ee.push({filePath:t})}})},Hn=()=>(Ee.length>0&&(console.log(`
${w}vue-strong${y} ${j}complicated computed property ${E} in ${Ee.length} files.`),console.log(`👉 ${C}Refactor the computed properties to smaller ones.${y} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#simple-computed-properties`),Ue.forEach(e=>{console.log(`- ${e.message} 🚨`)})),Ue.length);let ft=0;const Jn=["src","components","pages","layouts","server","composables","store","utils","plugins","middleware"],ht=(e,t)=>{const n=B.readdirSync(e);ft+=n.length;for(const r of n){const c=N.join(e,r);B.statSync(c).isDirectory()?Jn.some(a=>c.includes(a))&&ht(c,t):r.endsWith(".vue")&&t(c)}},kn=e=>{console.log(`

${Be}Analyzing Vue files in ${e}${E}`);let t=0;ht(e,n=>{if(n.includes("App.vue")||n.includes("app.vue"))return;const r=B.readFileSync(n,"utf-8"),{descriptor:c}=Et.parse(r);rn(n),mn(n),c.script&&Ht(n);const a=c.scriptSetup||c.script;a&&(un(a,n),yn(a,n),Yt(a,n),sn(a,n),kt(a,n),Mn(a,n),Un(a,n),Dn(a,n),Qn(a,n),Xn(a,n)),c.styles.forEach(h=>{ln(h,n)}),c.template&&(dn(c.template,n),hn(c.template,n),Tn(c,n),_n(c.template,n),Rn(c,n),Pn(c,n))}),console.log(`Found ${Be}${ft}${E} Vue files`),t+=cn(),t+=fn(),t+=gn(),t+=pn(),t+=an(),t+=$n(),t+=Wn(),t+=En(),t+=Cn(),t+=Ln(),t+=Bn(),t+=Hn(),t+=Xt(),t+=Jt(),t+=on(),t+=en(),t+=qn(),t+=Vn(),t+=Gn(),t+=Kn(),t||console.log(`${Kt}No code smells detected!${E}`)};T(Ct(process.argv)).command("analyze [path]","Analyze Vue files for code smells",e=>e.positional("path",{describe:"path to the Vue files",type:"string",default:"./"}),e=>{kn(e.path)}).help().argv});
