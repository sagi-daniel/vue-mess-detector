(function(R,G){typeof exports=="object"&&typeof module<"u"?G(require("yargs"),require("util"),require("path"),require("fs"),require("assert"),require("url"),require("@vue/compiler-sfc")):typeof define=="function"&&define.amd?define(["yargs","util","path","fs","assert","url","@vue/compiler-sfc"],G):(R=typeof globalThis<"u"?globalThis:R||self,G(R.yargs,R.util,R.path,R.fs,R.assert,R.url,R.compilerSfc))})(this,function(R,G,O,T,Be,it,ct){"use strict";var Ie=typeof document<"u"?document.currentScript:null;class X extends Error{constructor(t){super(t||"yargs error"),this.name="YError",Error.captureStackTrace&&Error.captureStackTrace(this,X)}}function ze(){return lt()?0:1}function lt(){return at()&&!process.defaultApp}function at(){return!!process.versions.electron}function ft(e){return e.slice(ze()+1)}function ut(){return process.argv[ze()]}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function J(e){if(e!==e.toLowerCase()&&e!==e.toUpperCase()||(e=e.toLowerCase()),e.indexOf("-")===-1&&e.indexOf("_")===-1)return e;{let n="",i=!1;const c=e.match(/^-+/);for(let f=c?c[0].length:0;f<e.length;f++){let p=e.charAt(f);i&&(i=!1,p=p.toUpperCase()),f!==0&&(p==="-"||p==="_")?i=!0:p!=="-"&&p!=="_"&&(n+=p)}return n}}function qe(e,t){const n=e.toLowerCase();t=t||"-";let i="";for(let c=0;c<e.length;c++){const f=n.charAt(c),p=e.charAt(c);f!==p&&c>0?i+=`${t}${n.charAt(c)}`:i+=p}return i}function Me(e){return e==null?!1:typeof e=="number"||/^0x[0-9a-f]+$/i.test(e)?!0:/^0[^.]/.test(e)?!1:/^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function ht(e){if(Array.isArray(e))return e.map(p=>typeof p!="string"?p+"":p);e=e.trim();let t=0,n=null,i=null,c=null;const f=[];for(let p=0;p<e.length;p++){if(n=i,i=e.charAt(p),i===" "&&!c){n!==" "&&t++;continue}i===c?c=null:(i==="'"||i==='"')&&!c&&(c=i),f[t]||(f[t]=""),f[t]+=i}return f}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var L;(function(e){e.BOOLEAN="boolean",e.STRING="string",e.NUMBER="number",e.ARRAY="array"})(L||(L={}));/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */let I;class pt{constructor(t){I=t}parse(t,n){const i=Object.assign({alias:void 0,array:void 0,boolean:void 0,config:void 0,configObjects:void 0,configuration:void 0,coerce:void 0,count:void 0,default:void 0,envPrefix:void 0,narg:void 0,normalize:void 0,string:void 0,number:void 0,__:void 0,key:void 0},n),c=ht(t),f=typeof t=="string",p=dt(Object.assign(Object.create(null),i.alias)),g=Object.assign({"boolean-negation":!0,"camel-case-expansion":!0,"combine-arrays":!1,"dot-notation":!0,"duplicate-arguments-array":!0,"flatten-duplicate-arrays":!0,"greedy-arrays":!0,"halt-at-non-option":!1,"nargs-eats-options":!1,"negation-prefix":"no-","parse-numbers":!0,"parse-positional-numbers":!0,"populate--":!1,"set-placeholder-key":!1,"short-option-groups":!0,"strip-aliased":!1,"strip-dashed":!1,"unknown-options-as-args":!1},i.configuration),A=Object.assign(Object.create(null),i.default),F=i.configObjects||[],_=i.envPrefix,q=g["populate--"],K=q?"--":"_",$e=Object.create(null),et=Object.create(null),Z=i.__||I.format,a={aliases:Object.create(null),arrays:Object.create(null),bools:Object.create(null),strings:Object.create(null),numbers:Object.create(null),counts:Object.create(null),normalize:Object.create(null),configs:Object.create(null),nargs:Object.create(null),coercions:Object.create(null),keys:[]},B=/^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,Le=new RegExp("^--"+g["negation-prefix"]+"(.+)");[].concat(i.array||[]).filter(Boolean).forEach(function(s){const r=typeof s=="object"?s.key:s,u=Object.keys(s).map(function(l){return{boolean:"bools",string:"strings",number:"numbers"}[l]}).filter(Boolean).pop();u&&(a[u][r]=!0),a.arrays[r]=!0,a.keys.push(r)}),[].concat(i.boolean||[]).filter(Boolean).forEach(function(s){a.bools[s]=!0,a.keys.push(s)}),[].concat(i.string||[]).filter(Boolean).forEach(function(s){a.strings[s]=!0,a.keys.push(s)}),[].concat(i.number||[]).filter(Boolean).forEach(function(s){a.numbers[s]=!0,a.keys.push(s)}),[].concat(i.count||[]).filter(Boolean).forEach(function(s){a.counts[s]=!0,a.keys.push(s)}),[].concat(i.normalize||[]).filter(Boolean).forEach(function(s){a.normalize[s]=!0,a.keys.push(s)}),typeof i.narg=="object"&&Object.entries(i.narg).forEach(([s,r])=>{typeof r=="number"&&(a.nargs[s]=r,a.keys.push(s))}),typeof i.coerce=="object"&&Object.entries(i.coerce).forEach(([s,r])=>{typeof r=="function"&&(a.coercions[s]=r,a.keys.push(s))}),typeof i.config<"u"&&(Array.isArray(i.config)||typeof i.config=="string"?[].concat(i.config).filter(Boolean).forEach(function(s){a.configs[s]=!0}):typeof i.config=="object"&&Object.entries(i.config).forEach(([s,r])=>{(typeof r=="boolean"||typeof r=="function")&&(a.configs[s]=r)})),Sn(i.key,p,i.default,a.arrays),Object.keys(A).forEach(function(s){(a.aliases[s]||[]).forEach(function(r){A[r]=A[s]})});let P=null;Wn();let Ee=[];const w=Object.assign(Object.create(null),{_:[]}),tt={};for(let s=0;s<c.length;s++){const r=c[s],u=r.replace(/^-{3,}/,"---");let l,o,d,h,m,C;if(r!=="--"&&/^-/.test(r)&&Ce(r))We(r);else if(u.match(/^---+(=|$)/)){We(r);continue}else if(r.match(/^--.+=/)||!g["short-option-groups"]&&r.match(/^-.+=/))h=r.match(/^--?([^=]+)=([\s\S]*)$/),h!==null&&Array.isArray(h)&&h.length>=3&&(y(h[1],a.arrays)?s=_e(s,h[1],c,h[2]):y(h[1],a.nargs)!==!1?s=Ae(s,h[1],c,h[2]):$(h[1],h[2],!0));else if(r.match(Le)&&g["boolean-negation"])h=r.match(Le),h!==null&&Array.isArray(h)&&h.length>=2&&(o=h[1],$(o,y(o,a.arrays)?[!1]:!1));else if(r.match(/^--.+/)||!g["short-option-groups"]&&r.match(/^-[^-]+/))h=r.match(/^--?(.+)/),h!==null&&Array.isArray(h)&&h.length>=2&&(o=h[1],y(o,a.arrays)?s=_e(s,o,c):y(o,a.nargs)!==!1?s=Ae(s,o,c):(m=c[s+1],m!==void 0&&(!m.match(/^-/)||m.match(B))&&!y(o,a.bools)&&!y(o,a.counts)||/^(true|false)$/.test(m)?($(o,m),s++):$(o,H(o))));else if(r.match(/^-.\..+=/))h=r.match(/^-([^=]+)=([\s\S]*)$/),h!==null&&Array.isArray(h)&&h.length>=3&&$(h[1],h[2]);else if(r.match(/^-.\..+/)&&!r.match(B))m=c[s+1],h=r.match(/^-(.\..+)/),h!==null&&Array.isArray(h)&&h.length>=2&&(o=h[1],m!==void 0&&!m.match(/^-/)&&!y(o,a.bools)&&!y(o,a.counts)?($(o,m),s++):$(o,H(o)));else if(r.match(/^-[^-]+/)&&!r.match(B)){d=r.slice(1,-1).split(""),l=!1;for(let j=0;j<d.length;j++){if(m=r.slice(j+2),d[j+1]&&d[j+1]==="="){C=r.slice(j+3),o=d[j],y(o,a.arrays)?s=_e(s,o,c,C):y(o,a.nargs)!==!1?s=Ae(s,o,c,C):$(o,C),l=!0;break}if(m==="-"){$(d[j],m);continue}if(/[A-Za-z]/.test(d[j])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(m)&&y(m,a.bools)===!1){$(d[j],m),l=!0;break}if(d[j+1]&&d[j+1].match(/\W/)){$(d[j],m),l=!0;break}else $(d[j],H(d[j]))}o=r.slice(-1)[0],!l&&o!=="-"&&(y(o,a.arrays)?s=_e(s,o,c):y(o,a.nargs)!==!1?s=Ae(s,o,c):(m=c[s+1],m!==void 0&&(!/^(-|--)[^-]/.test(m)||m.match(B))&&!y(o,a.bools)&&!y(o,a.counts)||/^(true|false)$/.test(m)?($(o,m),s++):$(o,H(o))))}else if(r.match(/^-[0-9]$/)&&r.match(B)&&y(r.slice(1),a.bools))o=r.slice(1),$(o,H(o));else if(r==="--"){Ee=c.slice(s+1);break}else if(g["halt-at-non-option"]){Ee=c.slice(s);break}else We(r)}st(w,!0),st(w,!1),Cn(w),On(),ot(w,a.aliases,A,!0),xn(w),g["set-placeholder-key"]&&jn(w),Object.keys(a.counts).forEach(function(s){de(w,s.split("."))||$(s,0)}),q&&Ee.length&&(w[K]=[]),Ee.forEach(function(s){w[K].push(s)}),g["camel-case-expansion"]&&g["strip-dashed"]&&Object.keys(w).filter(s=>s!=="--"&&s.includes("-")).forEach(s=>{delete w[s]}),g["strip-aliased"]&&[].concat(...Object.keys(p).map(s=>p[s])).forEach(s=>{g["camel-case-expansion"]&&s.includes("-")&&delete w[s.split(".").map(r=>J(r)).join(".")],delete w[s]});function We(s){const r=we("_",s);(typeof r=="string"||typeof r=="number")&&w._.push(r)}function Ae(s,r,u,l){let o,d=y(r,a.nargs);if(d=typeof d!="number"||isNaN(d)?1:d,d===0)return M(l)||(P=Error(Z("Argument unexpected for: %s",r))),$(r,H(r)),s;let h=M(l)?0:1;if(g["nargs-eats-options"])u.length-(s+1)+h<d&&(P=Error(Z("Not enough arguments following: %s",r))),h=d;else{for(o=s+1;o<u.length&&(!u[o].match(/^-[^0-9]/)||u[o].match(B)||Ce(u[o]));o++)h++;h<d&&(P=Error(Z("Not enough arguments following: %s",r)))}let m=Math.min(h,d);for(!M(l)&&m>0&&($(r,l),m--),o=s+1;o<m+s+1;o++)$(r,u[o]);return s+m}function _e(s,r,u,l){let o=[],d=l||u[s+1];const h=y(r,a.nargs);if(y(r,a.bools)&&!/^(true|false)$/.test(d))o.push(!0);else if(M(d)||M(l)&&/^-/.test(d)&&!B.test(d)&&!Ce(d)){if(A[r]!==void 0){const m=A[r];o=Array.isArray(m)?m:[m]}}else{M(l)||o.push(Pe(r,l,!0));for(let m=s+1;m<u.length&&!(!g["greedy-arrays"]&&o.length>0||h&&typeof h=="number"&&o.length>=h||(d=u[m],/^-/.test(d)&&!B.test(d)&&!Ce(d)));m++)s=m,o.push(Pe(r,d,f))}return typeof h=="number"&&(h&&o.length<h||isNaN(h)&&o.length===0)&&(P=Error(Z("Not enough arguments following: %s",r))),$(r,o),s}function $(s,r,u=f){if(/-/.test(s)&&g["camel-case-expansion"]){const d=s.split(".").map(function(h){return J(h)}).join(".");nt(s,d)}const l=Pe(s,r,u),o=s.split(".");ge(w,o,l),a.aliases[s]&&a.aliases[s].forEach(function(d){const h=d.split(".");ge(w,h,l)}),o.length>1&&g["dot-notation"]&&(a.aliases[o[0]]||[]).forEach(function(d){let h=d.split(".");const m=[].concat(o);m.shift(),h=h.concat(m),(a.aliases[s]||[]).includes(h.join("."))||ge(w,h,l)}),y(s,a.normalize)&&!y(s,a.arrays)&&[s].concat(a.aliases[s]||[]).forEach(function(h){Object.defineProperty(tt,h,{enumerable:!0,get(){return r},set(m){r=typeof m=="string"?I.normalize(m):m}})})}function nt(s,r){a.aliases[s]&&a.aliases[s].length||(a.aliases[s]=[r],$e[r]=!0),a.aliases[r]&&a.aliases[r].length||nt(r,s)}function Pe(s,r,u){u&&(r=gt(r)),(y(s,a.bools)||y(s,a.counts))&&typeof r=="string"&&(r=r==="true");let l=Array.isArray(r)?r.map(function(o){return we(s,o)}):we(s,r);return y(s,a.counts)&&(M(l)||typeof l=="boolean")&&(l=Oe()),y(s,a.normalize)&&y(s,a.arrays)&&(Array.isArray(r)?l=r.map(o=>I.normalize(o)):l=I.normalize(r)),l}function we(s,r){return!g["parse-positional-numbers"]&&s==="_"||!y(s,a.strings)&&!y(s,a.bools)&&!Array.isArray(r)&&(Me(r)&&g["parse-numbers"]&&Number.isSafeInteger(Math.floor(parseFloat(`${r}`)))||!M(r)&&y(s,a.numbers))&&(r=Number(r)),r}function Cn(s){const r=Object.create(null);ot(r,a.aliases,A),Object.keys(a.configs).forEach(function(u){const l=s[u]||r[u];if(l)try{let o=null;const d=I.resolve(I.cwd(),l),h=a.configs[u];if(typeof h=="function"){try{o=h(d)}catch(m){o=m}if(o instanceof Error){P=o;return}}else o=I.require(d);Te(o)}catch(o){o.name==="PermissionDenied"?P=o:s[u]&&(P=Error(Z("Invalid JSON config file: %s",l)))}})}function Te(s,r){Object.keys(s).forEach(function(u){const l=s[u],o=r?r+"."+u:u;typeof l=="object"&&l!==null&&!Array.isArray(l)&&g["dot-notation"]?Te(l,o):(!de(w,o.split("."))||y(o,a.arrays)&&g["combine-arrays"])&&$(o,l)})}function On(){typeof F<"u"&&F.forEach(function(s){Te(s)})}function st(s,r){if(typeof _>"u")return;const u=typeof _=="string"?_:"",l=I.env();Object.keys(l).forEach(function(o){if(u===""||o.lastIndexOf(u,0)===0){const d=o.split("__").map(function(h,m){return m===0&&(h=h.substring(u.length)),J(h)});(r&&a.configs[d.join(".")]||!r)&&!de(s,d)&&$(d.join("."),l[o])}})}function xn(s){let r;const u=new Set;Object.keys(s).forEach(function(l){if(!u.has(l)&&(r=y(l,a.coercions),typeof r=="function"))try{const o=we(l,r(s[l]));[].concat(a.aliases[l]||[],l).forEach(d=>{u.add(d),s[d]=o})}catch(o){P=o}})}function jn(s){return a.keys.forEach(r=>{~r.indexOf(".")||typeof s[r]>"u"&&(s[r]=void 0)}),s}function ot(s,r,u,l=!1){Object.keys(u).forEach(function(o){de(s,o.split("."))||(ge(s,o.split("."),u[o]),l&&(et[o]=!0),(r[o]||[]).forEach(function(d){de(s,d.split("."))||ge(s,d.split("."),u[o])}))})}function de(s,r){let u=s;g["dot-notation"]||(r=[r.join(".")]),r.slice(0,-1).forEach(function(o){u=u[o]||{}});const l=r[r.length-1];return typeof u!="object"?!1:l in u}function ge(s,r,u){let l=s;g["dot-notation"]||(r=[r.join(".")]),r.slice(0,-1).forEach(function(C){C=Ue(C),typeof l=="object"&&l[C]===void 0&&(l[C]={}),typeof l[C]!="object"||Array.isArray(l[C])?(Array.isArray(l[C])?l[C].push({}):l[C]=[l[C],{}],l=l[C][l[C].length-1]):l=l[C]});const o=Ue(r[r.length-1]),d=y(r.join("."),a.arrays),h=Array.isArray(u);let m=g["duplicate-arguments-array"];!m&&y(o,a.nargs)&&(m=!0,(!M(l[o])&&a.nargs[o]===1||Array.isArray(l[o])&&l[o].length===a.nargs[o])&&(l[o]=void 0)),u===Oe()?l[o]=Oe(l[o]):Array.isArray(l[o])?m&&d&&h?l[o]=g["flatten-duplicate-arrays"]?l[o].concat(u):(Array.isArray(l[o][0])?l[o]:[l[o]]).concat([u]):!m&&!!d==!!h?l[o]=u:l[o]=l[o].concat([u]):l[o]===void 0&&d?l[o]=h?u:[u]:m&&!(l[o]===void 0||y(o,a.counts)||y(o,a.bools))?l[o]=[l[o],u]:l[o]=u}function Sn(...s){s.forEach(function(r){Object.keys(r||{}).forEach(function(u){a.aliases[u]||(a.aliases[u]=[].concat(p[u]||[]),a.aliases[u].concat(u).forEach(function(l){if(/-/.test(l)&&g["camel-case-expansion"]){const o=J(l);o!==u&&a.aliases[u].indexOf(o)===-1&&(a.aliases[u].push(o),$e[o]=!0)}}),a.aliases[u].concat(u).forEach(function(l){if(l.length>1&&/[A-Z]/.test(l)&&g["camel-case-expansion"]){const o=qe(l,"-");o!==u&&a.aliases[u].indexOf(o)===-1&&(a.aliases[u].push(o),$e[o]=!0)}}),a.aliases[u].forEach(function(l){a.aliases[l]=[u].concat(a.aliases[u].filter(function(o){return l!==o}))}))})})}function y(s,r){const u=[].concat(a.aliases[s]||[],s),l=Object.keys(r),o=u.find(d=>l.includes(d));return o?r[o]:!1}function rt(s){const r=Object.keys(a);return[].concat(r.map(l=>a[l])).some(function(l){return Array.isArray(l)?l.includes(s):l[s]})}function Nn(s,...r){return[].concat(...r).some(function(l){const o=s.match(l);return o&&rt(o[1])})}function vn(s){if(s.match(B)||!s.match(/^-[^-]+/))return!1;let r=!0,u;const l=s.slice(1).split("");for(let o=0;o<l.length;o++){if(u=s.slice(o+2),!rt(l[o])){r=!1;break}if(l[o+1]&&l[o+1]==="="||u==="-"||/[A-Za-z]/.test(l[o])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(u)||l[o+1]&&l[o+1].match(/\W/))break}return r}function Ce(s){return g["unknown-options-as-args"]&&Fn(s)}function Fn(s){return s=s.replace(/^-{3,}/,"--"),s.match(B)||vn(s)?!1:!Nn(s,/^-+([^=]+?)=[\s\S]*$/,Le,/^-+([^=]+?)$/,/^-+([^=]+?)-$/,/^-+([^=]+?\d+)$/,/^-+([^=]+?)\W+.*$/)}function H(s){return!y(s,a.bools)&&!y(s,a.counts)&&`${s}`in A?A[s]:Rn(Ln(s))}function Rn(s){return{[L.BOOLEAN]:!0,[L.STRING]:"",[L.NUMBER]:void 0,[L.ARRAY]:[]}[s]}function Ln(s){let r=L.BOOLEAN;return y(s,a.strings)?r=L.STRING:y(s,a.numbers)?r=L.NUMBER:y(s,a.bools)?r=L.BOOLEAN:y(s,a.arrays)&&(r=L.ARRAY),r}function M(s){return s===void 0}function Wn(){Object.keys(a.counts).find(s=>y(s,a.arrays)?(P=Error(Z("Invalid configuration: %s, opts.count excludes opts.array.",s)),!0):y(s,a.nargs)?(P=Error(Z("Invalid configuration: %s, opts.count excludes opts.narg.",s)),!0):!1)}return{aliases:Object.assign({},a.aliases),argv:Object.assign(tt,w),configuration:g,defaulted:Object.assign({},et),error:P,newAliases:Object.assign({},$e)}}}function dt(e){const t=[],n=Object.create(null);let i=!0;for(Object.keys(e).forEach(function(c){t.push([].concat(e[c],c))});i;){i=!1;for(let c=0;c<t.length;c++)for(let f=c+1;f<t.length;f++)if(t[c].filter(function(g){return t[f].indexOf(g)!==-1}).length){t[c]=t[c].concat(t[f]),t.splice(f,1),i=!0;break}}return t.forEach(function(c){c=c.filter(function(p,g,A){return A.indexOf(p)===g});const f=c.pop();f!==void 0&&typeof f=="string"&&(n[f]=c)}),n}function Oe(e){return e!==void 0?e+1:1}function Ue(e){return e==="__proto__"?"___proto___":e}function gt(e){return typeof e=="string"&&(e[0]==="'"||e[0]==='"')&&e[e.length-1]===e[0]?e.substring(1,e.length-1):e}/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var xe,je,Se;const Ve=process&&process.env&&process.env.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12,Ge=(je=(xe=process==null?void 0:process.versions)===null||xe===void 0?void 0:xe.node)!==null&&je!==void 0?je:(Se=process==null?void 0:process.version)===null||Se===void 0?void 0:Se.slice(1);if(Ge&&Number(Ge.match(/^([^.]+)/)[1])<Ve)throw Error(`yargs parser supports a minimum Node.js version of ${Ve}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);const mt=process?process.env:{},De=new pt({cwd:process.cwd,env:()=>mt,format:G.format,normalize:O.normalize,resolve:O.resolve,require:e=>{if(typeof require<"u")return require(e);if(e.match(/\.json$/))return JSON.parse(T.readFileSync(e,"utf8"));throw Error("only .json config files are supported in ESM")}}),k=function(t,n){return De.parse(t.slice(),n).argv};k.detailed=function(e,t){return De.parse(e.slice(),t)},k.camelCase=J,k.decamelize=qe,k.looksLikeNumber=Me;const bt={right:wt,center:Ct},yt=0,me=1,$t=2,be=3;class Et{constructor(t){var n;this.width=t.width,this.wrap=(n=t.wrap)!==null&&n!==void 0?n:!0,this.rows=[]}span(...t){const n=this.div(...t);n.span=!0}resetOutput(){this.rows=[]}div(...t){if(t.length===0&&this.div(""),this.wrap&&this.shouldApplyLayoutDSL(...t)&&typeof t[0]=="string")return this.applyLayoutDSL(t[0]);const n=t.map(i=>typeof i=="string"?this.colFromString(i):i);return this.rows.push(n),n}shouldApplyLayoutDSL(...t){return t.length===1&&typeof t[0]=="string"&&/[\t\n]/.test(t[0])}applyLayoutDSL(t){const n=t.split(`
`).map(c=>c.split("	"));let i=0;return n.forEach(c=>{c.length>1&&v.stringWidth(c[0])>i&&(i=Math.min(Math.floor(this.width*.5),v.stringWidth(c[0])))}),n.forEach(c=>{this.div(...c.map((f,p)=>({text:f.trim(),padding:this.measurePadding(f),width:p===0&&c.length>1?i:void 0})))}),this.rows[this.rows.length-1]}colFromString(t){return{text:t,padding:this.measurePadding(t)}}measurePadding(t){const n=v.stripAnsi(t);return[0,n.match(/\s*$/)[0].length,0,n.match(/^\s*/)[0].length]}toString(){const t=[];return this.rows.forEach(n=>{this.rowToString(n,t)}),t.filter(n=>!n.hidden).map(n=>n.text).join(`
`)}rowToString(t,n){return this.rasterize(t).forEach((i,c)=>{let f="";i.forEach((p,g)=>{const{width:A}=t[g],F=this.negatePadding(t[g]);let _=p;if(F>v.stringWidth(p)&&(_+=" ".repeat(F-v.stringWidth(p))),t[g].align&&t[g].align!=="left"&&this.wrap){const K=bt[t[g].align];_=K(_,F),v.stringWidth(_)<F&&(_+=" ".repeat((A||0)-v.stringWidth(_)-1))}const q=t[g].padding||[0,0,0,0];q[be]&&(f+=" ".repeat(q[be])),f+=Qe(t[g],_,"| "),f+=_,f+=Qe(t[g],_," |"),q[me]&&(f+=" ".repeat(q[me])),c===0&&n.length>0&&(f=this.renderInline(f,n[n.length-1]))}),n.push({text:f.replace(/ +$/,""),span:t.span})}),n}renderInline(t,n){const i=t.match(/^ */),c=i?i[0].length:0,f=n.text,p=v.stringWidth(f.trimRight());return n.span?this.wrap?c<p?t:(n.hidden=!0,f.trimRight()+" ".repeat(c-p)+t.trimLeft()):(n.hidden=!0,f+t):t}rasterize(t){const n=[],i=this.columnWidths(t);let c;return t.forEach((f,p)=>{f.width=i[p],this.wrap?c=v.wrap(f.text,this.negatePadding(f),{hard:!0}).split(`
`):c=f.text.split(`
`),f.border&&(c.unshift("."+"-".repeat(this.negatePadding(f)+2)+"."),c.push("'"+"-".repeat(this.negatePadding(f)+2)+"'")),f.padding&&(c.unshift(...new Array(f.padding[yt]||0).fill("")),c.push(...new Array(f.padding[$t]||0).fill(""))),c.forEach((g,A)=>{n[A]||n.push([]);const F=n[A];for(let _=0;_<p;_++)F[_]===void 0&&F.push("");F.push(g)})}),n}negatePadding(t){let n=t.width||0;return t.padding&&(n-=(t.padding[be]||0)+(t.padding[me]||0)),t.border&&(n-=4),n}columnWidths(t){if(!this.wrap)return t.map(p=>p.width||v.stringWidth(p.text));let n=t.length,i=this.width;const c=t.map(p=>{if(p.width)return n--,i-=p.width,p.width}),f=n?Math.floor(i/n):0;return c.map((p,g)=>p===void 0?Math.max(f,At(t[g])):p)}}function Qe(e,t,n){return e.border?/[.']-+[.']/.test(t)?"":t.trim().length!==0?n:"  ":""}function At(e){const t=e.padding||[],n=1+(t[be]||0)+(t[me]||0);return e.border?n+4:n}function _t(){return typeof process=="object"&&process.stdout&&process.stdout.columns?process.stdout.columns:80}function wt(e,t){e=e.trim();const n=v.stringWidth(e);return n<t?" ".repeat(t-n)+e:e}function Ct(e,t){e=e.trim();const n=v.stringWidth(e);return n>=t?e:" ".repeat(t-n>>1)+e}let v;function Ot(e,t){return v=t,new Et({width:e?.width||_t(),wrap:e?.wrap})}const Ke=new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)","g");function Ze(e){return e.replace(Ke,"")}function xt(e,t){const[n,i]=e.match(Ke)||["",""];e=Ze(e);let c="";for(let f=0;f<e.length;f++)f!==0&&f%t===0&&(c+=`
`),c+=e.charAt(f);return n&&i&&(c=`${n}${c}${i}`),c}function jt(e){return Ot(e,{stringWidth:t=>[...t].length,stripAnsi:Ze,wrap:xt})}function St(e,t){let n=O.resolve(".",e),i;for(T.statSync(n).isDirectory()||(n=O.dirname(n));;){if(i=t(n,T.readdirSync(n)),i)return O.resolve(n,i);if(n=O.dirname(i=n),i===n)break}}const Nt={fs:{readFileSync:T.readFileSync,writeFile:T.writeFile},format:G.format,resolve:O.resolve,exists:e=>{try{return T.statSync(e).isFile()}catch{return!1}}};let W;class vt{constructor(t){t=t||{},this.directory=t.directory||"./locales",this.updateFiles=typeof t.updateFiles=="boolean"?t.updateFiles:!0,this.locale=t.locale||"en",this.fallbackToLanguage=typeof t.fallbackToLanguage=="boolean"?t.fallbackToLanguage:!0,this.cache=Object.create(null),this.writeQueue=[]}__(...t){if(typeof arguments[0]!="string")return this._taggedLiteral(arguments[0],...arguments);const n=t.shift();let i=function(){};return typeof t[t.length-1]=="function"&&(i=t.pop()),i=i||function(){},this.cache[this.locale]||this._readLocaleFile(),!this.cache[this.locale][n]&&this.updateFiles?(this.cache[this.locale][n]=n,this._enqueueWrite({directory:this.directory,locale:this.locale,cb:i})):i(),W.format.apply(W.format,[this.cache[this.locale][n]||n].concat(t))}__n(){const t=Array.prototype.slice.call(arguments),n=t.shift(),i=t.shift(),c=t.shift();let f=function(){};typeof t[t.length-1]=="function"&&(f=t.pop()),this.cache[this.locale]||this._readLocaleFile();let p=c===1?n:i;this.cache[this.locale][n]&&(p=this.cache[this.locale][n][c===1?"one":"other"]),!this.cache[this.locale][n]&&this.updateFiles?(this.cache[this.locale][n]={one:n,other:i},this._enqueueWrite({directory:this.directory,locale:this.locale,cb:f})):f();const g=[p];return~p.indexOf("%d")&&g.push(c),W.format.apply(W.format,g.concat(t))}setLocale(t){this.locale=t}getLocale(){return this.locale}updateLocale(t){this.cache[this.locale]||this._readLocaleFile();for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.cache[this.locale][n]=t[n])}_taggedLiteral(t,...n){let i="";return t.forEach(function(c,f){const p=n[f+1];i+=c,typeof p<"u"&&(i+="%s")}),this.__.apply(this,[i].concat([].slice.call(n,1)))}_enqueueWrite(t){this.writeQueue.push(t),this.writeQueue.length===1&&this._processWriteQueue()}_processWriteQueue(){const t=this,n=this.writeQueue[0],i=n.directory,c=n.locale,f=n.cb,p=this._resolveLocaleFile(i,c),g=JSON.stringify(this.cache[c],null,2);W.fs.writeFile(p,g,"utf-8",function(A){t.writeQueue.shift(),t.writeQueue.length>0&&t._processWriteQueue(),f(A)})}_readLocaleFile(){let t={};const n=this._resolveLocaleFile(this.directory,this.locale);try{W.fs.readFileSync&&(t=JSON.parse(W.fs.readFileSync(n,"utf-8")))}catch(i){if(i instanceof SyntaxError&&(i.message="syntax error in "+n),i.code==="ENOENT")t={};else throw i}this.cache[this.locale]=t}_resolveLocaleFile(t,n){let i=W.resolve(t,"./",n+".json");if(this.fallbackToLanguage&&!this._fileExistsSync(i)&&~n.lastIndexOf("_")){const c=W.resolve(t,"./",n.split("_")[0]+".json");this._fileExistsSync(c)&&(i=c)}return i}_fileExistsSync(t){return W.exists(t)}}function Ft(e,t){W=t;const n=new vt(e);return{__:n.__.bind(n),__n:n.__n.bind(n),setLocale:n.setLocale.bind(n),getLocale:n.getLocale.bind(n),updateLocale:n.updateLocale.bind(n),locale:n.locale}}const Rt=e=>Ft(e,Nt),Lt="require is not supported by ESM",Ye="loading a directory of commands is not supported yet for ESM";let ee;try{ee=it.fileURLToPath(typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Ie&&Ie.src||new URL("vue-mess-detector.umd.js",document.baseURI).href)}catch{ee=process.cwd()}const Wt=ee.substring(0,ee.lastIndexOf("node_modules"));Be.notStrictEqual,Be.strictEqual,G.inspect,Wt||process.cwd(),O.basename,O.dirname,O.extname,O.relative,O.resolve,process.cwd,process.exit,process.nextTick,typeof process.stdout.columns<"u"&&process.stdout.columns,T.readFileSync,Rt({directory:O.resolve(ee,"../../../locales"),updateFiles:!1});const Ne="\x1B[44m",D="\x1B[43m",S="\x1B[41m",Pt="\x1B[42m",E="\x1B[0m",N="\x1B[33m",Tt="\x1B[36m",x="\x1B[0m",ve=50,te=[],Bt=(e,t)=>{const n=e.content.split(`
`);n.length>ve&&te.push({fileName:t,scriptLength:n.length})},It=()=>(te.length>0&&(console.log(`
${S}Long <script> blocks${E} in ${te.length} files.`),console.log(`👉 ${N}Try to refactor out the logic into composable functions or other files and keep the script block's length under ${ve} lines.${x}`),te.forEach(e=>{console.log(`- ${e.fileName} ${e.scriptLength>ve*2?S:D}(${e.scriptLength} lines)${E}`)})),te.length),ne=[],zt=e=>{ne.push(e)},qt=()=>(ne.length>0&&(console.log(`
${D}Plain <script> blocks${E} in ${ne.length} files.`),console.log(`👉 ${N} Consider using <script setup> to leverage the new SFC <script> syntax.${x}`),ne.forEach(e=>{console.log(`- ${e}`)})),ne.length),se=[],Mt=(e,t)=>{const n=/\belse\b/gi,i=e.content.match(n);i?.length&&se.push({fileName:t,elseCount:i.length})},Ut=()=>(se.length>0&&(console.log(`
${D}else conditions${E} are used in ${se.length} files.`),console.log(`👉 ${N}Try to rewrite the conditions in a way that the else clause is not necessary.${x}`),se.forEach(e=>{console.log(`- ${e.fileName} ${D}(${e.elseCount})${E}`)})),se.length),Vt=5,Gt=10,oe=[],Dt=(e,t)=>{const n=/\bif\b/gi,i=/\belse\b/gi,c=/\bfor\b/gi,f=/\bwhile\b/gi,p=/\bcase\b/gi,g=e.content.match(n),A=e.content.match(i),F=e.content.match(c),_=e.content.match(f),q=e.content.match(p),K=(g?.length||0)+(A?.length||0)+(F?.length||0)+(_?.length||0)+(q?.length||0);K>Vt&&oe.push({fileName:t,cyclomaticComplexity:K})},Qt=()=>(oe.length>0&&(console.log(`
${Ne}cyclomaticComplexity${E} is above moderate in ${oe.length} files.`),console.log(`👉 ${N}Try to reduce complexity.${x}`),oe.forEach(e=>{console.log(`- ${e.fileName} ${e.cyclomaticComplexity>Gt?S:D}(${e.cyclomaticComplexity})${E}`)})),oe.length),re=[],Kt=e=>{if(e.includes("pages"))return;const t=O.basename(e);if(t==="App.vue")return;const n=/[A-Z]/;t.slice(1).match(n)?.length||re.push({filePath:e})},Zt=()=>(re.length>0&&(console.log(`
${S}single name component${E} is used in ${re.length} files.`),console.log(`👉 ${N}Rename the component to use multi-word name.${x} See: https://vuejs.org/style-guide/rules-essential.html#use-multi-word-component-names`),re.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),re.length),ie=[],Yt=(e,t)=>{e.scoped||ie.push({filePath:t})},Ht=()=>(ie.length>0&&(console.log(`
${S}Global style ${E} is used in ${ie.length} files.`),console.log(`👉 ${N}Use <style scoped>.${x} See: https://vuejs.org/style-guide/rules-essential.html#use-component-scoped-styling`),ie.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ie.length),ce=[],Xt=(e,t)=>{const n=/defineProps\(\[/gi;e.content.match(n)?.length&&ce.push({filePath:t})},Jt=()=>(ce.length>0&&(console.log(`
${S}simple prop${E} is used in ${ce.length} files.`),console.log(`👉 ${N}Add at least type definition.${x} See: https://vuejs.org/style-guide/rules-essential.html#use-detailed-prop-definitions`),ce.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ce.length),le=[],kt=(e,t)=>{const n=/<[^>]+ v-if[^>]+ v-for[^>]+>/gi,i=/<[^>]+ v-for[^>]+ v-if[^>]+>/gi,c=e.content.match(n),f=e.content.match(i);(c?.length||f?.length)&&le.push({filePath:t})},en=()=>(le.length>0&&(console.log(`
${S}v-if used with v-for${E} in ${le.length} files.`),console.log(`👉 ${N}Move out the v-if to a computed property.${x} See: https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for`),le.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),le.length),ae=[],tn=(e,t)=>{const n=/<[^>]+ v-for[^>]+>/gi,i=e.content.match(n);i?.length&&(i.some(f=>f.includes(":key"))||ae.push({filePath:t}))},nn=()=>(ae.length>0&&(console.log(`
${S}v-for has no key${E} in ${ae.length} files.`),console.log(`👉 ${N}Add a \`:key\` property to all v-for.${x} See: https://vuejs.org/style-guide/rules-essential.html#use-keyed-v-for`),ae.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ae.length),fe=[],sn=e=>{const t=O.basename(e),n=/^[A-Z][a-zA-Z0-9]+(?:(?<!^)(?=[A-Z]))*.vue$/,i=t.match(n),c=/^([a-z0-9]+-)+[a-z0-9]+\.vue$/,f=t.match(c);!i?.length&&!f?.length&&fe.push({fileName:e})},on=()=>(fe.length>0&&(console.log(`
${S}component name is not PascalCase and not kebab-abse${E} in ${fe.length} files.`),console.log(`👉 ${N}Rename the component to use PascalCase or kebab-case file name.${x} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing`),fe.forEach(e=>{console.log(`- ${S}${e.fileName}${E}`)})),fe.length),ue=[],rn=/^[a-z]+([A-Z][a-z]*)+$/,cn=(e,t)=>{const n=/defineProps\({([^}]+)/g;let i;for(;(i=n.exec(e.content))!==null;)i[1].replace(/\s+/g,"").replace(/["']/g,"").split(",").map(f=>f.split(":")[0]).filter(f=>f.length).filter(f=>!rn.test(f)).length&&ue.push({filePath:t})},ln=()=>(ue.length>0&&(console.log(`
${S}prop names are not camelCased${E} in ${ue.length} files.`),console.log(`👉 ${N}Rename the props to camelCase.${x} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#prop-name-casing`),ue.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),ue.length),Y=[],an=40,fn=(e,t)=>{const n=/{{\s*([\s\S]*?)\s*}}/g;[...e.content.matchAll(n)].map(c=>c[1].trim()).forEach(c=>{c.length>an&&(Y.some(f=>f.filePath===t)||Y.push({filePath:t}))})},un=()=>(Y.length>0&&(console.log(`
${S}Lengthy template expression${E} found in ${Y.length} files.`),console.log(`👉 ${N}Refactor the expression into a computed property.${x} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#simple-expressions-in-templates`),Y.forEach(e=>{console.log(`- ${e.filePath} 🚨`)})),Y.length),hn=/^(\(.*\)|\\?.)$/;function U(e){const t=e.toString();return hn.test(t)?t:`(?:${t})`}const pn=/^(?:\(\?:(.+)\)|(\(?.+\)?))$/,dn=/^(?:\(\?:(.+)\)([?+*]|{[\d,]+})?|(.+))$/;function b(e){const t=n=>b(`(?<${n}>${`${e}`.replace(pn,"$1$2")})`);return{toString:()=>e.toString(),and:Object.assign((...n)=>b(`${e}${z(...n)}`),{referenceTo:n=>b(`${e}\\k<${n}>`)}),or:(...n)=>b(`(?:${e}|${z(...n)})`),after:(...n)=>b(`(?<=${z(...n)})${e}`),before:(...n)=>b(`${e}(?=${z(...n)})`),notAfter:(...n)=>b(`(?<!${z(...n)})${e}`),notBefore:(...n)=>b(`${e}(?!${z(...n)})`),times:Object.assign(n=>b(`${U(e)}{${n}}`),{any:()=>b(`${U(e)}*`),atLeast:n=>b(`${U(e)}{${n},}`),atMost:n=>b(`${U(e)}{0,${n}}`),between:(n,i)=>b(`${U(e)}{${n},${i}}`)}),optionally:()=>b(`${U(e)}?`),as:t,groupedAs:t,grouped:()=>b(`${e}`.replace(dn,"($1$3)$2")),at:{lineStart:()=>b(`^${e}`),lineEnd:()=>b(`${e}$`)}}}const gn=/[.*+?^${}()|[\]\\/]/g;function He(e){return b(`[${e.replace(/[-\\^\]]/g,"\\$&")}]`)}function Fe(e){return b(`[^${e.replace(/[-\\^\]]/g,"\\$&")}]`)}b("."),b("\\b\\w+\\b");const ye=b("\\w");b("\\b"),b("\\d"),b("\\s");const mn=Object.assign(b("[a-zA-Z]"),{lowercase:b("[a-z]"),uppercase:b("[A-Z]")}),bn=b("\\t"),yn=b("\\n");b("\\r"),b("\\W+"),b("\\W"),b("\\B"),b("\\D"),b("\\S"),Object.assign(b("[^a-zA-Z]"),{lowercase:b("[^a-z]"),uppercase:b("[^A-Z]")}),b("[^\\t]"),b("[^\\n]"),b("[^\\r]");function Q(...e){return b(`${U(z(...e))}?`)}function z(...e){return b(e.map(t=>typeof t=="string"?t.replace(gn,"\\$&"):t).join(""))}function V(...e){return b(`${U(z(...e))}+`)}const Re=(...e)=>{const t=e.length>1&&(Array.isArray(e[e.length-1])||e[e.length-1]instanceof Set)?e.pop():void 0;return new RegExp(z(...e).toString(),[...t||""].join(""))},Xe=(e,t)=>{if(!t.includes(`
`))return e.split(`
`).findIndex(p=>p.includes(t))+1;const n=e.indexOf(t),i=e.slice(0,n).split(`
`).length,c=t.split(`
`).length;return i+c-1},he=[],$n=(e,t)=>{const n=e.template,i=Re("<",V(ye),Q(V(He(` 	
\r`))),V(Fe("/>")),Q(V(He(` 	
\r`))),Q("/"),">",["g"]),c=n.content.match(i);if(c===null)return;const f=Re(":",V(ye),Q(" "),"=",Q(" "),Fe(`'"`),["g"]);c.forEach(p=>{if(!p.includes(":"))return;const g=p.match(f);if(g?.length){const A=Xe(e.source,p);he.push({message:`${t}#${A} ${D}${g}${E}`})}})},En=()=>(he.length>0&&(console.log(`
${S}Attribute value is not quoted${E} in ${he.length} files.`),console.log(`👉 ${N}Use quotes for attribute values.${x} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#quoted-attribute-values`),he.forEach(e=>{console.log(`- ${e.message} 🚨`)})),he.length),pe=[],An=(e,t)=>{const n=e.template,i=Re("<",V(mn.uppercase,ye),Q(yn,bn),Q(V(Fe(">"))),"></",V(ye),">",["g"]),c=n.content.match(i);c!==null&&c.forEach(f=>{const p=Xe(e.source,f),g=f.split(`
`).at(-1)?.trim()||"";pe.push({message:`${t}#${p} ${D}${g}${E}`})})},_n=()=>(pe.length>0&&(console.log(`
${Tt}vue-strong${x} - ${S}Component is not self closing${E} in ${pe.length} files.`),console.log(`👉 ${N}Components with no content should be self-closing.${x} See: https://vuejs.org/style-guide/rules-strongly-recommended.html#self-closing-components`),pe.forEach(e=>{console.log(`- ${e.message} 🚨`)})),pe.length);let Je=0;const ke=(e,t)=>{const n=T.readdirSync(e);Je+=n.length;for(const i of n){const c=O.join(e,i);T.statSync(c).isDirectory()?ke(c,t):i.endsWith(".vue")&&t(c)}},wn=e=>{console.log(`

${Ne}Analyzing Vue files in ${e}${E}`);let t=0;ke(e,n=>{const i=T.readFileSync(n,"utf-8"),{descriptor:c}=ct.parse(i);Kt(n),sn(n),c.script&&zt(n);const f=c.scriptSetup||c.script;f&&(Xt(f,n),cn(f,n),Bt(f,n),Dt(f,n),Mt(f,n)),c.styles.forEach(p=>{Yt(p,n)}),c.template&&(tn(c.template,n),kt(c.template,n),An(c,n),fn(c.template,n),$n(c,n))}),console.log(`Found ${Ne}${Je}${E} Vue files`),t+=Zt(),t+=Jt(),t+=nn(),t+=en(),t+=Ht(),t+=on(),t+=_n(),t+=ln(),t+=un(),t+=En(),t+=It(),t+=qt(),t+=Qt(),t+=Ut(),t||console.log(`${Pt}No code smells detected!${E}`)};R(ft(process.argv)).command("analyze [path]","Analyze Vue files for code smells",e=>e.positional("path",{describe:"path to the Vue files",type:"string",default:"./src"}),e=>{wn(e.path)}).help().argv});
