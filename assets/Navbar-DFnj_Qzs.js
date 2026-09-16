import{J as e,K as t,q as n,t as r}from"./jsx-runtime-C2f9LJXq.js";import{t as i}from"./react-dom-DJVJ5uJY.js";import{t as a}from"./lib-4srF0Wqe.js";var o=r(),s=({children:e})=>(0,o.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full`,children:e}),c=({width:e=200,className:t=``,children:n})=>(0,o.jsx)(`div`,{style:{width:e,height:e},className:`flex justify-center items-center overflow-hidden ${t}`,children:n}),l=({useDark:e,...t})=>(0,o.jsx)(c,{...t,children:(0,o.jsx)(`img`,{src:e?`/assets/img/logo/dramsoc_black_200.png`:`/assets/img/logo/dramsoc_white_200.png`})}),u=e(t(),1);function d(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){if(Array.isArray(e))return e}function p(e){if(Array.isArray(e))return d(e)}function m(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function g(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=A(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function v(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function b(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function x(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?C(Object(n),!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(e,t){return f(e)||b(e,t)||A(e,t)||x()}function E(e){return p(e)||y(e)||A(e)||S()}function D(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function O(e){var t=D(e,`string`);return typeof t==`symbol`?t:t+``}function k(e){"@babel/helpers - typeof";return k=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},k(e)}function A(e,t){if(e){if(typeof e==`string`)return d(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}var j=function(){},M={},N={},P=null,F={mark:j,measure:j};try{typeof window<`u`&&(M=window),typeof document<`u`&&(N=document),typeof MutationObserver<`u`&&(P=MutationObserver),typeof performance<`u`&&(F=performance)}catch{}var I=(M.navigator||{}).userAgent,L=I===void 0?``:I,R=M,z=N,B=P,ee=F;R.document;var V=!!z.documentElement&&!!z.head&&typeof z.addEventListener==`function`&&typeof z.createElement==`function`,te=~L.indexOf(`MSIE`)||~L.indexOf(`Trident/`),H,U=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ne=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,re={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ie={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ae=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],W=`classic`,oe=`duotone`,se=`sharp`,ce=`sharp-duotone`,le=`chisel`,ue=`etch`,de=`graphite`,fe=`jelly`,pe=`jelly-duo`,me=`jelly-fill`,he=`mosaic`,ge=`notdog`,_e=`notdog-duo`,ve=`pixel`,ye=`slab`,be=`slab-duo`,xe=`slab-press`,Se=`slab-press-duo`,Ce=`thumbprint`,we=`utility`,Te=`utility-duo`,Ee=`utility-fill`,De=`vellum`,Oe=`whiteboard`,ke=`Classic`,Ae=`Duotone`,je=`Sharp`,Me=`Sharp Duotone`,Ne=`Chisel`,Pe=`Etch`,Fe=`Graphite`,Ie=`Jelly`,Le=`Jelly Duo`,Re=`Jelly Fill`,ze=`Mosaic`,Be=`Notdog`,Ve=`Notdog Duo`,He=`Pixel`,Ue=`Slab`,We=`Slab Duo`,Ge=`Slab Press`,Ke=`Slab Press Duo`,qe=`Thumbprint`,Je=`Utility`,Ye=`Utility Duo`,Xe=`Utility Fill`,Ze=`Vellum`,Qe=`Whiteboard`,$e=[W,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe];H={},v(v(v(v(v(v(v(v(v(v(H,W,ke),oe,Ae),se,je),ce,Me),le,Ne),ue,Pe),de,Fe),fe,Ie),pe,Le),me,Re),v(v(v(v(v(v(v(v(v(v(H,he,ze),ge,Be),_e,Ve),ve,He),ye,Ue),be,We),xe,Ge),Se,Ke),Ce,qe),we,Je),v(v(v(v(H,Te,Ye),Ee,Xe),De,Ze),Oe,Qe);var et={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},tt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},nt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),rt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},it=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],at={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ot=[`kit`];v(v({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var st={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ct={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},lt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ut={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},G,dt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];G={},v(v(v(v(v(v(v(v(v(v(G,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),v(v(v(v(v(v(v(v(v(v(G,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),v(v(v(v(G,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),v(v({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var pt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},mt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},ht={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},gt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),_t=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],vt=[1,2,3,4,5,6,7,8,9,10],yt=vt.concat([11,12,13,14,15,16,17,18,19,20]),bt=[].concat(E(Object.keys(mt)),_t,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY],vt.map(function(e){return`${e}x`}),yt.map(function(e){return`w-${e}`})),xt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},St=`___FONT_AWESOME___`,Ct=16,wt=`fa`,Tt=`svg-inline--fa`,Et=`data-fa-i2svg`,Dt=`data-fa-pseudo-element`,Ot=`data-fa-pseudo-element-pending`,kt=`data-prefix`,At=`data-icon`,jt=`fontawesome-i2svg`,Mt=`async`,Nt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Pt=[`::before`,`::after`,`:before`,`:after`],Ft=function(){try{return!0}catch{return!1}}();function It(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[W]}})}var Lt=w({},re);Lt[W]=w(w(w(w({},{"fa-duotone":`duotone`}),re[W]),at.kit),at[`kit-duotone`]);var Rt=It(Lt),zt=w({},rt);zt[W]=w(w(w(w({},{duotone:`fad`}),zt[W]),ut.kit),ut[`kit-duotone`]);var Bt=It(zt),Vt=w({},ht);Vt[W]=w(w({},Vt[W]),lt.kit);var Ht=It(Vt),Ut=w({},pt);Ut[W]=w(w({},Ut[W]),st.kit),It(Ut);var Wt=U,Gt=`fa-layers-text`,Kt=ne;It(w({},et));var qt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Jt=ie,Yt=[].concat(E(ot),E(bt)),Xt=R.FontAwesomeConfig||{};function Zt(e){var t=z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Qt(e){return e===``?!0:e===`false`?!1:e===`true`||e}z&&typeof z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=T(e,2),n=t[0],r=t[1],i=Qt(Zt(n));i!=null&&(Xt[r]=i)});var $t={styleDefault:`solid`,familyDefault:W,cssPrefix:wt,replacementClass:Tt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var en=w(w({},$t),Xt);en.autoReplaceSvg||(en.observeMutations=!1);var K={};Object.keys($t).forEach(function(e){Object.defineProperty(K,e,{enumerable:!0,set:function(t){en[e]=t,tn.forEach(function(e){return e(K)})},get:function(){return en[e]}})}),Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){en.cssPrefix=e,tn.forEach(function(e){return e(K)})},get:function(){return en.cssPrefix}}),R.FontAwesomeConfig=K;var tn=[];function nn(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var rn=Ct,an={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function on(e){if(e&&V){var t=z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return z.head.insertBefore(t,r),e}}var sn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function cn(){for(var e=12,t=``;e-->0;)t+=sn[Math.random()*62|0];return t}function ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function un(e){return e.classList?ln(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function dn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${dn(e[n])}" `},``).trim()}function pn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function mn(e){return e.size!==an.size||e.x!==an.x||e.y!==an.y||e.rotate!==an.rotate||e.flipX||e.flipY}function hn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function gn(e){var t=e.transform,n=e.width,r=n===void 0?Ct:n,i=e.height,a=i===void 0?Ct:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&te?`translate(${t.x/rn-r/2}em, ${t.y/rn-a/2}em) `:s?`translate(calc(-50% + ${t.x/rn}em), calc(-50% + ${t.y/rn}em)) `:`translate(${t.x/rn}em, ${t.y/rn}em) `,c+=`scale(${t.size/rn*(t.flipX?-1:1)}, ${t.size/rn*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var _n=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function vn(){var e=wt,t=Tt,n=K.cssPrefix,r=K.replacementClass,i=_n;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var yn=!1;function bn(){K.autoAddCss&&!yn&&(on(vn()),yn=!0)}var xn={mixout:function(){return{dom:{css:vn,insertCss:bn}}},hooks:function(){return{beforeDOMElementCreation:function(){bn()},beforeI2svg:function(){bn()}}}},Sn=R||{};Sn[St]||(Sn[St]={}),Sn[St].styles||(Sn[St].styles={}),Sn[St].hooks||(Sn[St].hooks={}),Sn[St].shims||(Sn[St].shims=[]);var Cn=Sn[St],wn=[],Tn=function(){z.removeEventListener(`DOMContentLoaded`,Tn),En=1,wn.map(function(e){return e()})},En=!1;V&&(En=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),En||z.addEventListener(`DOMContentLoaded`,Tn));function Dn(e){V&&(En?setTimeout(e,0):wn.push(e))}function On(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?dn(e):`<${t} ${fn(r)}>${a.map(On).join(``)}</${t}>`}function kn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var An=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},jn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:An(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Mn(e){return E(e).length===1?e.codePointAt(0).toString(16):null}function Nn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Nn(t);typeof Cn.hooks.addPack==`function`&&!r?Cn.hooks.addPack(e,Nn(t)):Cn.styles[e]=w(w({},Cn.styles[e]||{}),i),e===`fas`&&Pn(`fa`,t)}var Fn=Cn.styles,In=Cn.shims,Ln=Object.keys(Ht),Rn=Ln.reduce(function(e,t){return e[t]=Object.keys(Ht[t]),e},{}),zn=null,Bn={},Vn={},Hn={},Un={},Wn={};function Gn(e){return~Yt.indexOf(e)}function Kn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Gn(i)?i:null}var qn=function(){var e=function(e){return jn(Fn,function(t,n,r){return t[r]=jn(n,e,{}),t},{})};Bn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Vn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Wn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Fn||K.autoFetchSvg,n=jn(In,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Hn=n.names,Un=n.unicodes,zn=nr(K.styleDefault,{family:K.familyDefault})};nn(function(e){zn=nr(e.styleDefault,{family:K.familyDefault})}),qn();function Jn(e,t){return(Bn[e]||{})[t]}function Yn(e,t){return(Vn[e]||{})[t]}function Xn(e,t){return(Wn[e]||{})[t]}function Zn(e){return Hn[e]||{prefix:null,iconName:null}}function Qn(e){var t=Un[e],n=Jn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function $n(){return zn}var er=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=W,n=Ln.reduce(function(e,t){return e[t]=`${K.cssPrefix}-${t}`,e},{});return $e.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Rn[r].includes(e)}))&&(t=r)}),t}function nr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?W:t,r=Rt[n][e];if(n===oe&&!e)return`fad`;var i=Bt[n][e]||Bt[n][r],a=e in Cn.styles?e:null;return i||a||null}function rr(e){var t=[],n=null;return e.forEach(function(e){var r=Kn(K.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function ir(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var ar=gt.concat(it);function or(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=ir(e.filter(function(e){return ar.includes(e)})),a=ir(e.filter(function(e){return!ar.includes(e)})),o=T(i.filter(function(e){return r=e,!ae.includes(e)}),1)[0],s=o===void 0?null:o,c=tr(i),l=w(w({},rr(a)),{},{prefix:nr(s,{family:c})});return w(w(w({},l),ur({values:e,family:c,styles:Fn,config:K,canonical:l,givenPrefix:r})),sr(n,r,l))}function sr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Zn(i):{},o=Xn(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Fn.far&&Fn.fas&&!K.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var cr=$e.filter(function(e){return e!==W||e!==oe}),lr=Object.keys(ht).filter(function(e){return e!==W}).map(function(e){return Object.keys(ht[e])}).flat();function ur(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===oe,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&cr.includes(n)&&(Object.keys(s).find(function(e){return lr.includes(e)})||l.autoFetchSvg)&&(r.prefix=nt.get(n).defaultShortPrefixId,r.iconName=Xn(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=$n()||`fas`),r}var dr=function(){function e(){m(this,e),this.definitions={}}return g(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=w(w({},e.definitions[n]||{}),t[n]),Pn(n,t[n]);var r=Ht[W][n];r&&Pn(r,t[n]),qn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),fr=[],pr={},mr={},hr=Object.keys(mr);function gr(e,t){var n=t.mixoutsTo;return fr=e,pr={},Object.keys(mr).forEach(function(e){hr.indexOf(e)===-1&&delete mr[e]}),fr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),k(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){pr[e]||(pr[e]=[]),pr[e].push(r[e])})}e.provides&&e.provides(mr)}),n}function _r(e,t){var n=[...arguments].slice(2);return(pr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function vr(e){var t=[...arguments].slice(1);(pr[e]||[]).forEach(function(e){e.apply(null,t)})}function yr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return mr[e]?mr[e].apply(null,t):void 0}function br(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||$n();if(t)return t=Xn(n,t)||t,kn(xr.definitions,n,t)||kn(Cn.styles,n,t)}var xr=new dr,Sr={noAuto:function(){K.autoReplaceSvg=!1,K.observeMutations=!1,vr(`noAuto`)},config:K,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(vr(`beforeI2svg`,e),yr(`pseudoElements2svg`,e),yr(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,Dn(function(){Cr({autoReplaceSvgRoot:t}),vr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(k(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=nr(e[0]);return{prefix:n,iconName:Xn(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${K.cssPrefix}-`)>-1||e.match(Wt))){var r=or(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||$n(),iconName:Xn(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=$n();return{prefix:i,iconName:Xn(i,e)||e}}}},library:xr,findIconDefinition:br,toHtml:On},Cr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?z:e;(Object.keys(Cn.styles).length>0||K.autoFetchSvg)&&V&&K.autoReplaceSvg&&Sr.dom.i2svg({node:t})};function wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return On(e)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var t=z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Tr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(mn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=pn(w(w({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Er(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${K.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:w(w({},i),{},{id:o}),children:r}]}]}function Dr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Or(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[K.replacementClass,a?`${K.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:w(w({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Dr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Et]=``);var _=w(w({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:w({},l.styles)}),v=r.found&&n.found?yr(`generateAbstractMask`,_)||{children:[],attributes:{}}:yr(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Er(_):Tr(_)}function kr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=w(w({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Et]=``);var l=w({},a.styles);mn(i)&&(l.transform=gn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=pn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ar(e){var t=e.content,n=e.extra,r=w(w({},n.attributes),{},{class:n.classes.join(` `)}),i=pn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var jr=Cn.styles;function Mr(e){var t=e[0],n=e[1],r=T(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${K.cssPrefix}-${Jt.GROUP}`},children:[{tag:`path`,attributes:{class:`${K.cssPrefix}-${Jt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${K.cssPrefix}-${Jt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Nr={found:!1,width:512,height:512};function Pr(e,t){!Ft&&!K.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Fr(e,t){var n=t;return t===`fa`&&K.styleDefault!==null&&(t=$n()),new Promise(function(r,i){if(n===`fa`){var a=Zn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&jr[t]&&jr[t][e]){var o=jr[t][e];return r(Mr(o))}Pr(e,t),r(w(w({},Nr),{},{icon:K.showMissingIcons&&e&&yr(`missingIconAbstract`)||{}}))})}var Ir=function(){},Lr=K.measurePerformance&&ee&&ee.mark&&ee.measure?ee:{mark:Ir,measure:Ir},Rr=`FA "7.3.1"`,zr=function(e){return Lr.mark(`${Rr} ${e} begins`),function(){return Br(e)}},Br=function(e){Lr.mark(`${Rr} ${e} ends`),Lr.measure(`${Rr} ${e}`,`${Rr} ${e} begins`,`${Rr} ${e} ends`)},Vr={begin:zr,end:Br},Hr=function(){};function Ur(e){return typeof(e.getAttribute?e.getAttribute(Et):null)==`string`}function Wr(e){var t=e.getAttribute?e.getAttribute(kt):null,n=e.getAttribute?e.getAttribute(At):null;return t&&n}function Gr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function Kr(){return K.autoReplaceSvg===!0?Zr.replace:Zr[K.autoReplaceSvg]||Zr.replace}function qr(e){return z.createElementNS(`http://www.w3.org/2000/svg`,e)}function Jr(e){return z.createElement(e)}function Yr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?qr:Jr:t;if(typeof e==`string`)return z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Yr(e,{ceFn:n}))}),r}function Xr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Zr={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Yr(e),t)}),t.getAttribute(Et)===null&&K.keepOriginalSource){var n=z.createComment(Xr(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~un(t).indexOf(K.replacementClass))return Zr.replace(e);var r=RegExp(`${K.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===K.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return On(e)}).join(`
`);t.setAttribute(Et,``),t.innerHTML=a}};function Qr(e){e()}function $r(e,t){var n=typeof t==`function`?t:Hr;if(e.length===0)n();else{var r=Qr;K.mutateApproach===Mt&&(r=R.requestAnimationFrame||Qr),r(function(){var t=Kr(),r=Vr.begin(`mutate`);e.map(t),r(),n()})}}var ei=!1;function ti(){ei=!0}function ni(){ei=!1}var ri=null;function ii(e){if(B&&K.observeMutations){var t=e.treeCallback,n=t===void 0?Hr:t,r=e.nodeCallback,i=r===void 0?Hr:r,a=e.pseudoElementsCallback,o=a===void 0?Hr:a,s=e.observeMutationsRoot,c=s===void 0?z:s;ri=new B(function(e){if(!ei){var t=$n();ln(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ur(e.addedNodes[0])&&(K.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&K.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ur(e.target)&&~qt.indexOf(e.attributeName)){if(e.attributeName===`class`&&Wr(e.target)){var r=or(un(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(kt,a||t),s&&e.target.setAttribute(At,s)}else Gr(e.target)&&i(e.target)}})}}),V&&ri.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ai(){ri&&ri.disconnect()}function oi(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function si(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=or(un(e));return i.prefix||=$n(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Yn(i.prefix,e.innerText)||Jn(i.prefix,Mn(e.innerText))),!i.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ci(e){return ln(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function li(){return{iconName:null,prefix:null,transform:an,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=si(e),r=n.iconName,i=n.prefix,a=n.rest,o=ci(e),s=_r(`parseNodeAttributes`,{},e);return w({iconName:r,prefix:i,transform:an,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?oi(e):[],attributes:o}},s)}var di=Cn.styles;function fi(e){var t=K.autoReplaceSvg===`nest`?ui(e,{styleParser:!1}):ui(e);return~t.extra.classes.indexOf(Gt)?yr(`generateLayersText`,e,t):yr(`generateSvgReplacementMutation`,e,t)}function pi(){return[].concat(E(it),E(gt))}function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=z.documentElement.classList,r=function(e){return n.add(`${jt}-${e}`)},i=function(e){return n.remove(`${jt}-${e}`)},a=K.autoFetchSvg?pi():ae.concat(Object.keys(di));a.includes(`fa`)||a.push(`fa`);var o=[`.${Gt}:not([${Et}])`].concat(a.map(function(e){return`.${e}:not([${Et}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=ln(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Vr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=fi(t);n&&e.push(n)}catch(e){Ft||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){$r(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fi(e).then(function(e){e&&$r([e],t)})}function gi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:br(t||{}),i=n.mask;return i&&=(i||{}).icon?i:br(i||{}),e(r,w(w({},n),{},{mask:i}))}}var _i=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?an:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return wr(w({type:`icon`},e),function(){return vr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Or({icons:{main:Mr(v),mask:s?Mr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:w(w({},an),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},vi={mixout:function(){return{icon:gi(_i)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=mi,e.nodeCallback=hi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?z:t,r=e.callback;return mi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Fr(n,r),o.iconName?Fr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=T(o,2),u=l[0],d=l[1];t([e,Or({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=pn(a);o.length>0&&(n.style=o);var s;return mn(i)&&(s=yr(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},yi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return wr({type:`layer`},function(){vr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${K.cssPrefix}-layers`].concat(E(r)).join(` `)},children:n}]})}}}},bi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return wr({type:`counter`,content:e},function(){return vr(`beforeDOMElementCreation`,{content:e,params:t}),Ar({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${K.cssPrefix}-layers-counter`].concat(E(a))}})})}}}},xi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?an:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return wr({type:`text`,content:e},function(){return vr(`beforeDOMElementCreation`,{content:e,params:t}),kr({content:e,transform:w(w({},an),r),extra:{attributes:s,styles:l,classes:[`${K.cssPrefix}-layers-text`].concat(E(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(te){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,kr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Si=RegExp(`"`,`ug`),Ci=[1105920,1112319],wi=w(w(w(w({},{FontAwesome:{normal:`fas`,400:`fas`}}),tt),xt),ct),Ti=Object.keys(wi).reduce(function(e,t){return e[t.toLowerCase()]=wi[t],e},{}),Ei=Object.keys(Ti).reduce(function(e,t){var n=Ti[t];return e[t]=n[900]||E(Object.entries(n))[0][1],e},{});function Di(e){return Mn(E(e.replace(Si,``))[0]||``)}function Oi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Si,``),r=n.codePointAt(0),i=r>=Ci[0]&&r<=Ci[1],a=n.length===2&&n[0]===n[1];return i||a||t}function ki(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ti[n]||{})[i]||Ei[n]}function Ai(e,t){var n=`${Ot}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=ln(e.children).filter(function(e){return e.getAttribute(Dt)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Kt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ki(s,l),p=Di(d),m=c[0].startsWith(`FontAwesome`),h=Oi(o),g=Jn(f,p),_=g;if(m){var v=Qn(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(kt)!==f||a.getAttribute(At)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=li(),b=y.extra;b.attributes[Dt]=t,Fr(g,f).then(function(i){var a=Or(w(w({},y),{},{icons:{main:i,mask:er()},prefix:f,iconName:_,extra:b,watchable:!0})),o=z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return On(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ji(e){return Promise.all([Ai(e,`::before`),Ai(e,`::after`)])}function Mi(e){return e.parentNode!==document.head&&!~Nt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Ni=function(e){return!!e&&Pt.some(function(t){return e.includes(t)})},Pi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=_(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ni(a)){var o=Pt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(V){var n;if(t)n=e;else if(K.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=_(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=_(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=_(Pi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){K.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=ln(n).filter(Mi).map(ji),i=Vr.begin(`searchPseudoElements`);ti(),Promise.all(r).then(function(){i(),ni(),e()}).catch(function(){i(),ni(),t()})})}}var Ii={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?z:t;K.searchPseudoElements&&Fi(n)}}},Li=!1,Ri={mixout:function(){return{dom:{unwatch:function(){ti(),Li=!0}}}},hooks:function(){return{bootstrap:function(){ii(_r(`mutationObserverCallbacks`,{}))},noAuto:function(){ai()},watch:function(e){var t=e.observeMutationsRoot;Li?ni():ii(_r(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},zi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Bi={mixout:function(){return{parse:{transform:function(e){return zi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=zi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:w({},a.outer),children:[{tag:`g`,attributes:w({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:w(w({},t.icon.attributes),a.path)}]}]}}}},Vi={x:0,y:0,width:`100%`,height:`100%`};function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ui(e){return e.tag===`g`?e.children:[e]}gr([xn,vi,yi,bi,xi,Ii,Ri,Bi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?or(n.split(` `).map(function(e){return e.trim()})):er();return r.prefix||=$n(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=hn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:w(w({},Vi),{},{fill:`white`})},p=c.children?{children:c.children.map(Hi)}:{},m={tag:`g`,attributes:w({},d.inner),children:[Hi(w({tag:c.tag,attributes:w(w({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:w({},d.outer),children:[m]},g=`mask-${a||cn()}`,_=`clip-${a||cn()}`,v={tag:`mask`,attributes:w(w({},Vi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ui(u)},v]};return t.push(y,{tag:`rect`,attributes:w({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Vi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:w(w({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=w(w({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:w(w({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:w(w({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:w(w({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:w(w({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:w(w({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:w(w({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:w(w({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Sr}),Sr.noAuto;var Wi=Sr.config;Sr.library,Sr.dom;var Gi=Sr.parse;Sr.findIconDefinition,Sr.toHtml;var Ki=Sr.icon;Sr.layer,Sr.text,Sr.counter;function qi(e){return e-=0,e===e}function Ji(e){return qi(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Yi=(e,t)=>u.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Xi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Zi=new Map,Qi=1e3;function $i(e){if(Zi.has(e))return Zi.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Ji(n);t[e.startsWith(`webkit`)?Xi(e):e]=r}}}n=a+1}if(Zi.size===Qi){let e=Zi.keys().next().value;e&&Zi.delete(e)}return Zi.set(e,t),t}function ea(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ea(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=$i(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Ji(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Yi)))}return e(t.tag,{...a,...u},...r)}var ta=ea.bind(null,u.createElement),na=(e,t)=>{let n=(0,u.useId)();return e||(t?n:void 0)},ra=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var ia=`searchPseudoElementsFullScan`in Wi&&typeof Wi.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,aa=Number.parseInt(ia)>=7,oa=()=>aa,sa=`fa`,q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},ca={left:`fa-pull-left`,right:`fa-pull-right`},la={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},ua={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},da={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},fa={default:`fa-layers`};function pa(e){let t=Wi.cssPrefix||Wi.familyPrefix||sa;return t===sa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${sa}-`,`g`),`${t}-`)}function ma(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:T,spinSnap:E,spinSnap4:D,spinSnap8:O,swing:k,wag:A,className:j}=e,M=[];return j&&M.push(...j.split(` `)),t&&M.push(q.beat),n&&M.push(q.fade),r&&M.push(q.beatFade),i&&M.push(q.bounce),a&&M.push(q.shake),o&&M.push(q.spin),c&&M.push(q.spinReverse),s&&M.push(q.spinPulse),l&&M.push(q.pulse),u&&M.push(da.fixedWidth),d&&M.push(da.inverse),f&&M.push(da.border),p===!0&&M.push(da.flip),(p===`horizontal`||p===`both`)&&M.push(da.flipHorizontal),(p===`vertical`||p===`both`)&&M.push(da.flipVertical),m!=null&&M.push(ua[m]),h!=null&&h!==0&&M.push(la[h]),g!=null&&M.push(ca[g]),_&&M.push(da.swapOpacity),oa()?(v&&M.push(da.rotateBy),y&&M.push(da.widthAuto),b&&M.push(da.canvasSquare),x&&M.push(da.canvasRoomy),S&&M.push(q.flip360),C&&M.push(q.buzz),w&&M.push(q.float),T&&M.push(q.jello),E&&M.push(q.spinSnap),D&&M.push(q.spinSnap4),O&&M.push(q.spinSnap8),k&&M.push(q.swing),A&&M.push(q.wag),(Wi.cssPrefix||Wi.familyPrefix||sa)===sa?M:M.map(pa)):M}var ha=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ga(e){if(e)return ha(e)?e:Gi.icon(e)}function _a(e){return Object.keys(e)}var va=new ra(`FontAwesomeIcon`),ya={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},ba=new Set(Object.keys(ya)),xa=u.forwardRef((e,t)=>{let n={...ya,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=na(c,!!i),d=na(s,!!o),f=ga(r);if(!f)return va.error(`Icon lookup is undefined`,r),null;let p=ma(n),m=typeof l==`string`?Gi.transform(l):l,h=ga(i),g=Ki(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return va.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of _a(n))ba.has(e)||(v[e]=n[e]);return ta(_[0],v)});xa.displayName=`FontAwesomeIcon`,`${fa.default}${da.fixedWidth}`;var Sa={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},Ca={prefix:`fab`,iconName:`tiktok`,icon:[448,512,[],`e07b`,`M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z`]},wa={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},Ta=({useDark:e,...t})=>(0,o.jsx)(c,{...t,className:`h-fit!`,children:(0,o.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/imperial.svg`})}),Ea=({useDark:e,...t})=>(0,o.jsx)(c,{...t,className:`h-fit!`,children:(0,o.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/union.png`})}),Da=({useDark:e,...t})=>(0,o.jsx)(c,{...t,className:`h-fit!`,children:(0,o.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/comus.png`})}),Oa=[{icon:wa,url:`//instagram.com/ic_dramsoc`},{icon:Sa,url:`//www.facebook.com/dramsoc`},{icon:Ca,url:`//www.tiktok.com/@ic_dramsoc`}],ka=[{name:`Hire Terms and Consitutions`,url:`/static/files/hire_terms_and_conditions.pdf`},{name:`Constitution`,url:`/static/files/constitution.pdf`},{name:`Bye Laws`,url:`/static/files/bye_laws.pdf`},{name:`Data Protection`,url:`/static/files/data_protection_policy.pdf`},{name:`Debtor Policy`,url:`/static/files/debtor_policy.pdf`},{name:`Ticketing Policy`,url:`/policy/ticketing`},{name:`Privacy Notice`,url:`/static/files/privacy_notice.pdf`}],Aa=[{name:`Committee Meeting Minutes`,url:`//drive.google.com/drive/folders/1k5JOO6hJiYjPn8yoFymKMHEBGHtOoada`},{name:`Past Committees`,url:`//wiki.dramsoc.org/Category:Committee`},{name:`Past Shows`,url:`//wiki.dramsoc.org/Events`},{name:`Winters`,url:`//wiki.dramsoc.org/Winters`},{name:`Horde`,url:`//horde.dramsoc.org/`},{name:`Wiki`,url:`//wiki.dramsoc.org/`}],ja=()=>(0,o.jsx)(`div`,{className:`bg-black text-white w-full py-5 [&_a]:hover:opacity-70 **:transition-opacity`,children:(0,o.jsxs)(s,{children:[(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-6 [&_.flex]:gap-3`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col grow`,children:[(0,o.jsx)(l,{width:75}),(0,o.jsx)(`p`,{children:`Est. 1912`}),(0,o.jsx)(`div`,{className:`flex`,children:Oa.map(e=>(0,o.jsx)(a,{to:e.url,target:`_blank`,children:(0,o.jsx)(xa,{icon:e.icon,fontSize:20,style:{transform:`translateX(-3px)`}})},e.url))})]}),(0,o.jsxs)(`div`,{className:`flex flex-col grow items-end md:items-start [&_p]:text-right [&_p]:md:text-left`,children:[(0,o.jsx)(`div`,{children:(0,o.jsx)(a,{to:`tel:+442075948102`,children:(0,o.jsx)(`p`,{children:`+44 (0) 20 759 48102`})})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(a,{to:`https://maps.app.goo.gl/wFEc4Y3T66jhwqZj7`,target:`_blank`,children:(0,o.jsxs)(`p`,{children:[`Imperial College Dramatic Society`,(0,o.jsx)(`br`,{}),`Imperial College Union`,(0,o.jsx)(`br`,{}),`Beit Qudrangle`,(0,o.jsx)(`br`,{}),`Prince Consort Road`,(0,o.jsx)(`br`,{}),`South Kensington`,(0,o.jsx)(`br`,{}),`London`,(0,o.jsx)(`br`,{}),`SW7 2BB`]})})})]}),[ka,Aa].map((e,t)=>(0,o.jsx)(`div`,{className:`grow flex flex-col gap-2! ${t%2?`items-end md:items-start text-right md:text-left`:``}`,children:e.map(e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(a,{to:e.url,target:`_blank`,children:e.name})},e.name))})),(0,o.jsxs)(`div`,{className:`flex flex-col gap-6! justify-between`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col gap-6!`,children:[(0,o.jsx)(a,{to:`//imperial.ac.uk`,target:`_blank`,children:(0,o.jsx)(Ta,{})}),(0,o.jsx)(a,{to:`//imperialcollegeunion.org`,target:`_blank`,children:(0,o.jsx)(Ea,{width:100})})]}),(0,o.jsx)(a,{to:`//comus.org.uk`,target:`_blank`,children:(0,o.jsx)(Da,{width:50})})]})]}),(0,o.jsxs)(`div`,{className:`text-center mt-8 text-gray-500`,children:[(0,o.jsxs)(`p`,{children:[`DramSoc is a part of Imperial College Union which is a`,` `,(0,o.jsx)(a,{to:`//register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5033166`,children:`UK Registered Charity, Number 1151241`})]}),(0,o.jsxs)(`p`,{children:[`Copyright © `,new Date().getFullYear(),` Imperial College Dramatic Society`]})]})]})}),Ma=e(i(),1);function Na(){return typeof window<`u`}function Pa(e){return Ia(e)?(e.nodeName||``).toLowerCase():`#document`}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fa(e){return((Ia(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Ia(e){return Na()?e instanceof Node||e instanceof J(e).Node:!1}function Y(e){return Na()?e instanceof Element||e instanceof J(e).Element:!1}function X(e){return Na()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function La(e){return!Na()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function Ra(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ya(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function za(e){return/^(table|td|th)$/.test(Pa(e))}function Ba(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Va=/transform|translate|scale|rotate|perspective|filter/,Ha=/paint|layout|strict|content/,Ua=e=>!!e&&e!==`none`,Wa;function Ga(e){let t=Y(e)?Ya(e):e;return Ua(t.transform)||Ua(t.translate)||Ua(t.scale)||Ua(t.rotate)||Ua(t.perspective)||!qa()&&(Ua(t.backdropFilter)||Ua(t.filter))||Va.test(t.willChange||``)||Ha.test(t.contain||``)}function Ka(e){let t=Za(e);for(;X(t)&&!Ja(t);){if(Ga(t))return t;if(Ba(t))return null;t=Za(t)}return null}function qa(){return Wa??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Wa}function Ja(e){return/^(html|body|#document)$/.test(Pa(e))}function Ya(e){return J(e).getComputedStyle(e)}function Xa(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Za(e){if(Pa(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||La(e)&&e.host||Fa(e);return La(t)?t.host:t}function Qa(e){let t=Za(e);return Ja(t)?(e.ownerDocument||e).body:X(t)&&Ra(t)?t:Qa(t)}function $a(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Qa(e),i=r===e.ownerDocument?.body,a=J(r);if(i){let e=eo(a);return t.concat(a,a.visualViewport||[],Ra(r)?r:[],e&&n?$a(e):[])}return t.concat(r,$a(r,[],n))}function eo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function to({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=u.useRef(e!==void 0),[a,o]=u.useState(t);return[i&&e!==void 0?e:a,u.useCallback(e=>{i||o(e)},[])]}var no={...u},ro={};function io(e,t){let n=u.useRef(ro);return n.current===ro&&(n.current=e(t)),n}var ao=no.useInsertionEffect,oo=ao&&ao!==no.useLayoutEffect?ao:e=>e();function Z(e){let t=io(so).current;return t.next=e,oo(t.effect),t.trampoline}function so(){let e={next:void 0,callback:co,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function co(){}var Q=typeof document<`u`?u.useLayoutEffect:()=>{};function lo(e){return e?.ownerDocument||document}function uo(){}var fo=Object.freeze([]),po=Object.freeze({});function mo(e){u.useEffect(e,fo)}var ho=0,go=class e{static create(){return new e}currentId=ho;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=ho,t()},e)}isStarted(){return this.currentId!==ho}clear=()=>{this.currentId!==ho&&(clearTimeout(this.currentId),this.currentId=ho)};disposeEffect=()=>this.clear};function _o(){let e=io(go.create).current;return mo(e.disposeEffect),e}function vo(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:yo,platform:bo,maxTouchPoints:xo}=vo(),So=yo.toLowerCase(),Co=bo.toLowerCase(),wo=/^i(os$|p)/.test(Co)||Co===`macintel`&&xo>1,To=`android`,Eo=Co===To||So.includes(To),Do=!wo&&Co.startsWith(`mac`);Co.startsWith(`win`),!Eo&&/^(linux|chrome os)/.test(Co);var Oo=Do||wo,ko=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!ko&&So.includes(`firefox`),!ko&&So.includes(`chrom`);var Ao=Oo;function jo(e){return`nativeEvent`in e}function Mo(e){return e.pointerType===``&&e.isTrusted?!0:Eo&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function No(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function Po(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}function Fo(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function Io(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&La(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Lo(e){return`composedPath`in e?e.composedPath()[0]??e.target:e.target}var Ro=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,zo=`data-starting-style`,Bo=`data-ending-style`,Vo={[zo]:``},Ho={[Bo]:``},Uo={transitionStatus(e){return e===`starting`?Vo:e===`ending`?Ho:null}},Wo=`data-open`,Go=`data-closed`,Ko=`data-anchor-hidden`,qo={[Wo]:``},Jo={[Go]:``},Yo={[Ko]:``},Xo={open(e){return e?qo:Jo},anchorHidden(e){return e?Yo:null}},Zo={...Xo,...Uo},Qo=`data-trigger-disabled`;function $o(e,t){if(!Y(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(Qo);for(let[,e]of t.entries())if(Io(e,n))return!e.hasAttribute(Qo);return!1}function es(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function ts(e){return e.matches(`html,body`)}function ns(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${Ro}`)!=null}function rs(e,t){return t!=null&&!No(t)?0:typeof e==`function`?e():e}function is(e,t,n){let r=rs(e,n);return typeof r==`number`?r:r?.[t]}function as(e,t){return t||e===`click`||e===`mousedown`}function os(e){return e?.includes(`mouse`)&&e!==`mousedown`}var ss=`trigger-press`,cs=`trigger-hover`,ls=`outside-press`,us=`link-press`,ds=`focus-out`,fs=`escape-key`;function ps(e,t,n,r){let i=!1,a=!1,o=r??po;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function ms(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function hs(e,t,n,r){let i=io(_s).current;return vs(i,e,t,n,r)&&bs(i,[e,t,n,r]),i.callback}function gs(e){let t=io(_s).current;return ys(t,e)&&bs(t,e),t.callback}function _s(){return{callback:null,cleanup:null,refs:[]}}function vs(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function ys(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function bs(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null}}}}}}function xs(e){let t=io(Ss,e).current;return t.next=e,Q(t.effect),t}function Ss(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Cs=null;globalThis.requestAnimationFrame;var ws=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||this.callbacks[t]!==null&&(this.callbacks[t]=null,--this.callbacksCount)}},Ts=class e{static create(){return new e}static request(e){return ws.request(e)}static cancel(e){return ws.cancel(e)}currentId=Cs;request(e){this.cancel(),this.currentId=ws.request(()=>{this.currentId=Cs,e()})}cancel=()=>{this.currentId!==Cs&&(ws.cancel(this.currentId),this.currentId=Cs)};disposeEffect=()=>this.cancel};function Es(){let e=io(Ts.create).current;return mo(e.disposeEffect),e}var Ds={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},Os={...Ds,position:`fixed`,top:0,left:0};({...Ds});var ks=u.forwardRef(function(e,t){let[n,r]=u.useState();Q(()=>{Ao&&ko&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,o.jsx)(`span`,{...e,ref:t,style:Os,"aria-hidden":!n||void 0,...i,"data-base-ui-focus-guard":``})}),As=Math.min,js=Math.max,Ms=Math.round,Ns=Math.floor,Ps=e=>({x:e,y:e}),Fs={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Is(e,t,n){return js(e,As(t,n))}function Ls(e,t){return typeof e==`function`?e(t):e}function Rs(e){return e.split(`-`)[0]}function zs(e){return e.split(`-`)[1]}function Bs(e){return e===`x`?`y`:`x`}function Vs(e){return e===`y`?`height`:`width`}function Hs(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Us(e){return Bs(Hs(e))}function Ws(e,t,n){n===void 0&&(n=!1);let r=zs(e),i=Us(e),a=Vs(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=$s(o)),[o,$s(o)]}function Gs(e){let t=$s(e);return[Ks(e),t,Ks(t)]}function Ks(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var qs=[`left`,`right`],Js=[`right`,`left`],Ys=[`top`,`bottom`],Xs=[`bottom`,`top`];function Zs(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Js:qs:t?qs:Js;case`left`:case`right`:return t?Ys:Xs;default:return[]}}function Qs(e,t,n,r){let i=zs(e),a=Zs(Rs(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ks)))),a}function $s(e){let t=Rs(e);return Fs[t]+e.slice(t.length)}function ec(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function tc(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ec(e)}function nc(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function rc(e,t){return t<0||t>=e.length}function ic(e,t){return oc(e.current,{disabledIndices:t})}function ac(e,t){return oc(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function oc(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&sc(e,a,r));return a}function sc(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?!lc(r)||r.matches(`:disabled`)?!0:!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!1}function cc(e){return e.visibility===`hidden`||e.visibility===`collapse`}function lc(e,t=e?Ya(e):null){return!e||!e.isConnected||!t||cc(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var uc=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function dc(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return La(n)?n.host:null}function fc(e){for(let t of Array.from(e.children))if(Pa(t)===`summary`)return t;return null}function pc(e,t){let n=fc(t);return!!n&&(e===n||Io(n,e))}function mc(e){let t=e?Pa(e):``;return e!=null&&e.matches(uc)&&(t!==`summary`||e.parentElement!=null&&Pa(e.parentElement)===`details`&&fc(e.parentElement)===e)&&(t!==`details`||fc(e)==null)&&(t!==`input`||e.type!==`hidden`)}function hc(e){if(!mc(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=dc(t)){let n=t!==e,r=Pa(t)===`slot`;if(t.hasAttribute(`inert`)||n&&Pa(t)===`details`&&!t.open&&!pc(e,t)||t.hasAttribute(`hidden`)||!r&&!gc(t,n))return!1}return!0}function gc(e,t){let n=Ya(e);return t?n.display!==`none`:lc(e,n)}function _c(e){let t=e.tabIndex;if(t<0){let t=Pa(e);if(t===`details`||t===`audio`||t===`video`||X(e)&&e.isContentEditable)return 0}return t}function vc(e){if(Pa(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function yc(e,t){let n=vc(e);if(!n)return!0;let r=t.find(e=>{let t=vc(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=vc(e);return t?.name===n.name&&t.form===n.form})===n}function bc(e){if(X(e)&&Pa(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return X(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function xc(e,t){bc(e).forEach(e=>{mc(e)&&t.push(e),xc(e,t)})}function Sc(e,t,n){bc(e).forEach(e=>{X(e)&&e.matches(t)&&n.push(e),Sc(e,t,n)})}function Cc(e){let t=[];return xc(e,t),t.filter(hc)}function wc(e){let t=Cc(e);return t.filter(e=>_c(e)>=0&&yc(e,t))}function Tc(e,t){let n=wc(e),r=n.length;if(r===0)return;let i=Fo(lo(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Ec(e){return Tc(lo(e).body,1)||e}function Dc(e){return Tc(lo(e).body,-1)||e}function Oc(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!Io(n,r)}function kc(e){wc(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Ac(e){let t=[];Sc(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function jc(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...jc(e,t.id,n)])}function Mc(e){return`data-base-ui-${e}`}var Nc=0;function Pc(e,t=`mui`){let[n,r]=u.useState(e),i=e||n;return u.useEffect(()=>{n??(Nc+=1,r(`${t}-${Nc}`))},[n,t]),i}var Fc=no.useId;function Ic(e,t){if(Fc!==void 0){let n=Fc();return e??(t?`${t}-${n}`:n)}return Pc(e,t)}function Lc(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var Rc=Lc(`https://base-ui.com/production-error`,`Base UI`),zc=19;function Bc(e){return zc>=e}function Vc(e){if(!u.isValidElement(e))return null;let t=e,n=t.props;return(Bc(19)?n?.ref:t.ref)??null}function Hc(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}function Uc(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function Wc(e,t){return typeof e==`function`?e(t):e}function Gc(e,t){return typeof e==`function`?e(t):e}var Kc={};function qc(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Yc(t);let a=Yc(e);return t&&(a=Xc(a,t)),n&&(a=Xc(a,n)),r&&(a=Xc(a,r)),i&&(a=Xc(a,i)),a}function Jc(e){if(e.length===0)return Kc;if(e.length===1)return Yc(e[0]);let t=Yc(e[0]);for(let n=1;n<e.length;n+=1)t=Xc(t,e[n]);return t}function Yc(e){return el(e)?{...tl(e,Kc)}:Zc(e)}function Xc(e,t){return el(t)?tl(t,e):Qc(e,t)}function Zc(e){let t={...e};for(let e in t){let n=t[e];$c(e,n)&&(t[e]=rl(n))}return t}function Qc(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=Hc(e.style,r);break;case`className`:e[n]=al(e.className,r);break;default:e[n]=$c(n,r)?nl(e[n],r):r}}return e}function $c(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function el(e){return typeof e==`function`}function tl(e,t){return el(e)?e(t):e??Kc}function nl(e,t){return t?e?(...n)=>{let r=n[0];if(ol(r)){let i=r;il(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:rl(t):e}function rl(e){return e&&((...t)=>{let n=t[0];return ol(n)&&il(n),e(...t)})}function il(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function al(e,t){return t?e?t+` `+e:t:e}function ol(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function sl(e,t,n={}){let r=t.render;n.enabled!==!1&&(r=dl(r));let i=cl(t,n,r);if(n.enabled===!1)return null;let a=n.state??po;return fl(e,r,i,a)}function cl(e,t,n){let{className:r,style:i}=e,{state:a=po,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?Wc(r,a):void 0,d=l?Gc(i,a):void 0,f=l?Uc(a,c):po,p=l&&s?ll(s):void 0,m=l?Hc(f,p)??{}:po;return typeof document<`u`&&(l?m.ref=Array.isArray(o)?gs([m.ref,Vc(n),...o]):hs(m.ref,Vc(n),o):hs(null,null)),l?(u!==void 0&&(m.className=al(m.className,u)),d!==void 0&&(m.style=Hc(m.style,d)),m):po}function ll(e){return Array.isArray(e)?Jc(e):qc(void 0,e)}var ul=Symbol.for(`react.lazy`);function dl(e){if(e?.$$typeof!==ul)return e;let t=u.Children.toArray(e)[0];return u.isValidElement(t)?t:e}function fl(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=qc(n,t.props);return e.ref=n.ref,u.cloneElement(t,e)}if(e&&typeof e==`string`)return pl(e,n);throw Error(Rc(8))}function pl(e,t){return e===`button`?(0,u.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,u.createElement)(`img`,{alt:``,...t,key:t.key}):u.createElement(e,t)}var ml={style:{transition:`none`}},hl={fallbackAxisSide:`none`},gl={fallbackAxisSide:`end`},_l={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},vl=u.createContext(null),yl=()=>u.useContext(vl),bl=Mc(`portal`);function xl(e={}){let{ref:t,container:n,componentProps:r=po,elementProps:i}=e,a=Ic(),o=yl()?.portalNode,[s,c]=u.useState(null),[l,d]=u.useState(null),f=Z(e=>{e!==null&&d(e)}),p=u.useRef(null);Q(()=>{if(n===null){p.current&&(p.current=null,d(null),c(null));return}let e=(n&&(Ia(n)?n:n.current))??o??document.body;if(e==null){p.current&&(p.current=null,d(null),c(null));return}p.current!==e&&(p.current=e,d(null),c(e))},[n,o]);let m=sl(`div`,r,{ref:[t,f],props:[{id:a,[bl]:``},i]}),h=s&&m?Ma.createPortal(m,s):null;return{node:l,nodeId:u.isValidElement(m)?m.props.id:void 0,subtree:h}}var Sl=u.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:s,portalOwnerRole:c,...l}=e,{node:d,nodeId:f,subtree:p}=xl({container:s,ref:t,componentProps:e,elementProps:l}),m=u.useRef(null),h=u.useRef(null),g=u.useRef(null),_=u.useRef(null),[v,y]=u.useState(null),b=u.useRef(!1),x=v?.modal,S=v?.open,C=!!v&&!v.modal&&v.open&&!!d;u.useEffect(()=>{if(!d||x)return;function e(e){d&&e.relatedTarget&&Oc(e)&&(e.type===`focusin`?b.current&&=(Ac(d),!1):(kc(d),b.current=!0))}return ms($(d,`focusin`,e,!0),$(d,`focusout`,e,!0))},[d,x]),Q(()=>{d&&S===!0&&b.current&&(Ac(d),b.current=!1)},[S,d]);let w=u.useMemo(()=>({beforeOutsideRef:m,afterOutsideRef:h,beforeInsideRef:g,afterInsideRef:_,portalNode:d,setFocusManagerState:y}),[d]);return(0,o.jsxs)(u.Fragment,{children:[p,(0,o.jsxs)(vl.Provider,{value:w,children:[C&&d&&(0,o.jsx)(ks,{"data-type":`outside`,ref:m,onFocus:e=>{Oc(e,d)?g.current?.focus():Dc(v?v.domReference:null)?.focus()}}),C&&d&&(0,o.jsx)(`span`,{role:c,"aria-owns":f,style:_l}),d&&Ma.createPortal(a,d),C&&d&&(0,o.jsx)(ks,{"data-type":`outside`,ref:h,onFocus:e=>{Oc(e,d)?_.current?.focus():(Ec(v?v.domReference:null)?.focus(),v?.closeOnFocusOut&&v?.onOpenChange(!1,ps(`focus-out`,e.nativeEvent)))}})]})]})});function Cl(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var wl=class{nodesRef={current:[]};events=Cl();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}},Tl=u.createContext(null),El=u.createContext(null),Dl=()=>u.useContext(Tl)?.id||null,Ol=e=>{let t=u.useContext(El);return e??t};function kl(e){let t=Ic(),n=Ol(e),r=Dl();return Q(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function Al(e){let{children:t,id:n}=e,r=Dl();return(0,o.jsx)(Tl.Provider,{value:u.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function jl(e){let{children:t,externalTree:n}=e,r=io(()=>n??new wl).current;return(0,o.jsx)(El.Provider,{value:r,children:t})}function Ml(e){return e==null?e:`current`in e?e.current:e}function Nl(){return!1}function Pl(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function Fl(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=Nl,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,d=l.useState(`open`),f=l.useState(`floatingElement`),{dataRef:p,events:m}=l.context,h=Ol(c),g=Z(typeof i==`function`?i:()=>!1),_=typeof i==`function`?g:i,v=_!==!1,y=Z(()=>a),{escapeKey:b,outsidePress:x}=Pl(s),S=u.useRef(!1),C=u.useRef(!1),w=u.useRef(!1),T=u.useRef(!1),E=u.useRef(!1),D=u.useRef(``),O=u.useRef(null),k=_o(),A=_o(),j=Z(()=>{A.clear(),p.current.insideReactTree=!1}),M=Z(e=>{let t=p.current.floatingContext?.nodeId;return(h?jc(h.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),N=Z(e=>es(e,l.select(`floatingElement`))||es(e,l.select(`domReferenceElement`))),P=Z(e=>{o()&&l.setOpen(!1,ps(ss,e.nativeEvent))}),F=Z(e=>{if(!d||!n||!r||e.key!==`Escape`||E.current||!b&&M(`__escapeKeyBubbles`))return;let t=ps(fs,jo(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!b&&!t.isPropagationAllowed&&e.stopPropagation()}),I=Z(()=>{p.current.insideReactTree=!0,A.start(0,j)}),L=Z(e=>{if(!d||!n||e.button!==0)return;let t=Lo(e.nativeEvent);Io(l.select(`floatingElement`),t)&&(S.current||(S.current=!0,C.current=!1))}),R=Z(e=>{d&&n&&(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&S.current&&(C.current=!0)});u.useEffect(()=>{function e(e){e.open||(T.current=!1)}return m.on(`openchange`,e),()=>{m.off(`openchange`,e)}},[m]),u.useEffect(()=>{if(!d||!n)return d||(T.current=!1),j;p.current.__escapeKeyBubbles=b,p.current.__outsidePressBubbles=x;let e=new go,t=new go,i=lo(f);function a(){e.clear(),E.current=!0}function o(){e.start(ko?5:0,()=>{E.current=!1})}function s(){w.current=!0,t.start(0,()=>{w.current=!1})}function c(){S.current=!1,C.current=!1}function u(){let e=D.current,t=e===`pen`||!e?`mouse`:e,n=y(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function m(e){let t=u();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function g(e){let t=p.current.floatingContext?.nodeId,n=h&&jc(h.nodesRef.current,t).some(t=>es(e,t.context?.elements.floating));return N(e)||n}function A(e){if(m(e)){e.type!==`click`&&!N(e)&&(t.clear(),w.current=!1),j();return}if(p.current.insideReactTree){j();return}let n=Lo(e),r=`[${Mc(`inert`)}]`,i=Y(n)?n.getRootNode():null,a=Array.from((La(i)?i:lo(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>Io(e,n))))return;let s=Y(n)?n:null;for(;s&&!Ja(s);){let e=Za(s);if(Ja(e)||!Y(e))break;s=e}if(!(a.length&&Y(n)&&!ts(n)&&!Io(n,l.select(`floatingElement`))&&a.every(e=>!Io(s,e)))){if(X(n)&&!(`touches`in e)){let t=Ja(n),r=Ya(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!g(e)){if(u()===`intentional`){if(e.detail!==0&&!Mo(e)&&!T.current)return;if(w.current){t.clear(),w.current=!1;return}}(typeof _!=`function`||_(e))&&(M(`__outsidePressBubbles`)||(l.setOpen(!1,ps(ls,e)),j()))}}}function P(e){u()===`sloppy`&&e.pointerType!==`touch`&&l.select(`open`)&&n&&!N(e)&&A(e)}function I(e){if(u()!==`sloppy`||!l.select(`open`)||!n||N(e))return;let t=e.touches[0];t&&(O.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},k.start(1e3,()=>{O.current&&(O.current.dismissOnTouchEnd=!1,O.current.dismissOnMouseDown=!1)}))}function L(e,t){let n=Lo(e);if(!n)return;let r=$(n,e.type,()=>{t(e),r()})}function R(e){D.current=`touch`,L(e,I)}function z(e){k.clear(),e.type===`pointerdown`&&(e.button===0&&(T.current=!0),D.current=e.pointerType),(e.type!==`mousedown`||!O.current||O.current.dismissOnMouseDown)&&L(e,e=>{e.type===`pointerdown`?P(e):A(e)})}function B(e){if(e.type===`pointercancel`&&(T.current=!1),!S.current)return;let n=C.current;if(c(),u()===`intentional`){if(e.type===`pointercancel`){n&&s();return}if(!g(e)){if(n){s();return}(typeof _!=`function`||_(e))&&(t.clear(),w.current=!0,j())}}}function ee(e){if(u()!==`sloppy`||!O.current||N(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-O.current.startX),r=Math.abs(t.clientY-O.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(O.current.dismissOnTouchEnd=!0),i>10&&(A(e),k.clear(),O.current=null)}function V(e){L(e,ee)}function te(e){u()===`sloppy`&&O.current&&!N(e)&&(O.current.dismissOnTouchEnd&&A(e),k.clear(),O.current=null)}function H(e){L(e,te)}let U=ms(r&&ms($(i,`keydown`,F),$(i,`compositionstart`,a),$(i,`compositionend`,o)),v&&ms($(i,`click`,z,!0),$(i,`pointerdown`,z,!0),$(i,`pointerup`,B,!0),$(i,`pointercancel`,B,!0),$(i,`mousedown`,z,!0),$(i,`mouseup`,B,!0),$(i,`touchstart`,R,{capture:!0,passive:!0}),$(i,`touchmove`,V,{capture:!0,passive:!0}),$(i,`touchend`,H,{capture:!0,passive:!0})));return()=>{U(),e.clear(),t.clear(),c(),w.current=!1,j()}},[p,f,r,v,_,d,n,b,x,F,j,y,M,N,h,l,k]);let z=u.useMemo(()=>({onKeyDown:F,onPointerDown:P,onClick:P}),[F,P]),B=u.useMemo(()=>({onKeyDown:F,onPointerDown:R,onMouseDown:R,onClickCapture:I,onMouseDownCapture(e){I(),L(e)},onPointerDownCapture(e){I(),L(e)},onMouseUpCapture:I,onTouchEndCapture:I,onTouchMoveCapture:I}),[F,I,L,R]);return u.useMemo(()=>n?{reference:z,floating:B,trigger:z}:{},[n,z,B])}function Il(e,t,n){let{reference:r,floating:i}=e,a=Hs(t),o=Us(t),s=Vs(o),c=Rs(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=zs(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ll(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Ls(t,e),p=tc(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=nc(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=nc(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Rl=50,zl=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ll},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Il(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Rl&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Il(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Bl=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Ls(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Rs(r),_=Hs(o),v=Rs(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[$s(o)]:Gs(o)),x=p!==`none`;!d&&x&&b.push(...Qs(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Ws(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Hs(t)||T.every(e=>Hs(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Hs(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Vl=new Set([`left`,`top`]);async function Hl(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Rs(n),s=zs(n),c=Hs(n)===`y`,l=Vl.has(o)?-1:1,u=a&&c?-1:1,d=Ls(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ul=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Hl(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Wl=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Ls(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Hs(i),p=Bs(f),m=u[p],h=u[f],g=(e,t)=>Is(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Gl=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Ls(e,t),u={x:n,y:r},d=Hs(i),f=Bs(d),p=u[f],m=u[d],h=Ls(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Vl.has(Rs(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Kl=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Ls(e,t),c=await i.detectOverflow(t,s),l=Rs(n),u=zs(n),d=Hs(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=As(p-c[m],g),y=As(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*js(c.left,c.right):S=p-2*js(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function ql(e){let t=Ya(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=X(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ms(n)!==a||Ms(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Jl(e){return Y(e)?e:e.contextElement}function Yl(e){let t=Jl(e);if(!X(t))return Ps(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ql(t),o=(a?Ms(n.width):n.width)/r,s=(a?Ms(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Xl=Ps(0);function Zl(e){let t=J(e);return!qa()||!t.visualViewport?Xl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ql(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===J(e)}function $l(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Jl(e),o=Ps(1);t&&(r?Y(r)&&(o=Yl(r)):o=Yl(e));let s=Ql(a,n,r)?Zl(a):Ps(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=J(a),t=Y(r)?J(r):r,n=e,i=eo(n);for(;i&&t!==n;){let e=Yl(i),t=i.getBoundingClientRect(),r=Ya(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=J(i),i=eo(n)}}return nc({width:u,height:d,x:c,y:l})}function eu(e,t){let n=Xa(e).scrollLeft;return t?t.left+n:$l(Fa(e)).left+n}function tu(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-eu(e,n),y:n.top+t.scrollTop}}function nu(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Fa(r),s=t?Ba(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Ps(1),u=Ps(0),d=X(r);if((d||!a)&&((Pa(r)!==`body`||Ra(o))&&(c=Xa(r)),d)){let e=$l(r);l=Yl(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?tu(o,c):Ps(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ru(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function iu(e){let t=Xa(e),n=e.ownerDocument.body,r=js(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=js(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+eu(e),o=-t.scrollTop;return Ya(n).direction===`rtl`&&(a+=js(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var au=25;function ou(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=J(e),a=Fa(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!qa()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(eu(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=au&&(s-=o)}return{width:s,height:c,x:l,y:u}}function su(e,t){let n=$l(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Yl(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function cu(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ou(e,n,t);else if(t===`document`)r=iu(Fa(e));else if(Y(t))r=su(t,n);else{let n=Zl(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return nc(r)}function lu(e,t){let n=t.get(e);if(n)return n;let r=$a(e,[],!1).filter(e=>Y(e)&&Pa(e)!==`body`),i=null,a=Ya(e).position===`fixed`,o=a?Za(e):e;for(;Y(o)&&!Ja(o);){let e=Ya(o),t=Ga(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Za(o)}return t.set(e,r),r}function uu(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ba(t)?[]:lu(t,this._c):[].concat(n),r],o=cu(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=cu(t,a[e],i);s=js(n.top,s),c=As(n.right,c),l=As(n.bottom,l),u=js(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function du(e){let{width:t,height:n}=ql(e);return{width:t,height:n}}function fu(e,t,n){let r=X(t),i=Fa(t),a=n===`fixed`,o=$l(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Ps(0);if((r||!a)&&((Pa(t)!==`body`||Ra(i))&&(s=Xa(t)),r)){let e=$l(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=eu(i));let l=i&&!r&&!a?tu(i,s):Ps(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function pu(e){return Ya(e).position===`static`}function mu(e,t){if(!X(e)||Ya(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Fa(e)===n&&(n=n.ownerDocument.body),n}function hu(e,t){let n=J(e);if(Ba(e))return n;if(!X(e)){let t=Za(e);for(;t&&!Ja(t);){if(Y(t)&&!pu(t))return t;t=Za(t)}return n}let r=mu(e,t);for(;r&&za(r)&&pu(r);)r=mu(r,t);return r&&Ja(r)&&pu(r)&&!Ga(r)?n:r||Ka(e)||n}var gu=async function(e){let t=this.getOffsetParent||hu,n=this.getDimensions,r=await n(e.floating);return{reference:fu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function _u(e){return Ya(e).direction===`rtl`}var vu={convertOffsetParentRelativeRectToViewportRelativeRect:nu,getDocumentElement:Fa,getClippingRect:uu,getOffsetParent:hu,getElementRects:gu,getClientRects:ru,getDimensions:du,getScale:Yl,isElement:Y,isRTL:_u};function yu(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function bu(e,t,n){let r=null,i,a=Fa(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Ns(d),h=Ns(a.clientWidth-(u+f)),g=Ns(a.clientHeight-(d+p)),_=Ns(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:js(0,As(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!yu(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=J(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function xu(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Jl(e),u=i||a?[...l?$a(l):[],...t?$a(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?bu(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?$l(e):null;c&&g();function g(){let t=$l(e);h&&!yu(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Su=Ul,Cu=Wl,wu=Bl,Tu=Kl,Eu=Gl,Du=(e,t,n)=>{let r=new Map,i=n??{},a={...vu,...i.platform,_c:r};return zl(e,t,{...i,platform:a})},Ou=typeof document<`u`?u.useLayoutEffect:function(){};function ku(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ku(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!ku(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Au(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ju(e,t){let n=Au(e);return Math.round(t*n)/n}function Mu(e){let t=u.useRef(e);return Ou(()=>{t.current=e}),t}function Nu(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[d,f]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=u.useState(r);ku(p,r)||m(r);let[h,g]=u.useState(null),[_,v]=u.useState(null),y=u.useCallback(e=>{e!==C.current&&(C.current=e,g(e))},[]),b=u.useCallback(e=>{e!==w.current&&(w.current=e,v(e))},[]),x=a||h,S=o||_,C=u.useRef(null),w=u.useRef(null),T=u.useRef(d),E=c!=null,D=Mu(c),O=Mu(i),k=Mu(l),A=u.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),Du(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!ku(T.current,t)&&(T.current=t,Ma.flushSync(()=>{f(t)}))})},[p,t,n,O,k]);Ou(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,f(e=>({...e,isPositioned:!1})))},[l]);let j=u.useRef(!1);Ou(()=>(j.current=!0,()=>{j.current=!1}),[]),Ou(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(D.current)return D.current(x,S,A);A()}},[x,S,A,D,E]);let M=u.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),N=u.useMemo(()=>({reference:x,floating:S}),[x,S]),P=u.useMemo(()=>{let e={position:n,left:0,top:0};if(!N.floating)return e;let t=ju(N.floating,d.x),r=ju(N.floating,d.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Au(N.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,N.floating,d.x,d.y]);return u.useMemo(()=>({...d,update:A,refs:M,elements:N,floatingStyles:P}),[d,A,M,N,P])}var Pu=(e,t)=>{let n=Su(e);return{name:n.name,fn:n.fn,options:[e,t]}},Fu=(e,t)=>{let n=Cu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Iu=(e,t)=>({fn:Eu(e).fn,options:[e,t]}),Lu=(e,t)=>{let n=wu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ru=(e,t)=>{let n=Tu(e);return{name:n.name,fn:n.fn,options:[e,t]}},zu=n((e=>{var n=t();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useState,o=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=n.useSyncExternalStore===void 0?f:n.useSyncExternalStore})),Bu=n(((e,t)=>{t.exports=zu()})),Vu=n((e=>{var n=t(),r=Bu();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=n.useRef,c=n.useEffect,l=n.useMemo,u=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Hu=n(((e,t)=>{t.exports=Vu()})),Uu=Bu(),Wu=Hu(),Gu=[],Ku=void 0;function qu(){return Ku}function Ju(e){Gu.push(e)}var Yu=Bc(19)?Qu:$u;function Xu(e,t,n,r,i){return Yu(e,t,n,r,i)}function Zu(e,t,n,r,i){let a=u.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,Uu.useSyncExternalStore)(e.subscribe,a,a)}Ju({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,Uu.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function Qu(e,t,n,r,i){let a=qu();if(!a)return Zu(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function $u(e,t,n,r,i){return(0,Wu.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var ed=class{static create(e){return new this(e)}constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return Xu(this,e,t,n,r)}},td=class extends ed{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){u.useDebugValue(e);let n=this;Q(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;Q(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;Q(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){u.useDebugValue(e);let n=this,r=t!==void 0;Q(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return u.useDebugValue(e),Xu(this,this.selectors[e],t,n,r)}useContextCallback(e,t){u.useDebugValue(e);let n=Z(t??uo);this.context[e]=n}useStateSetter(e){let t=u.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},nd={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},rd=class extends td{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:Cl(),nested:n,triggerElements:i},nd),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&Po(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}};function id(e,t=!1,n=!1,r=!1){let[i,a]=u.useState(e&&t?`idle`:void 0),[o,s]=u.useState(e&&!r);return e&&!o&&(s(!0),a(`starting`)),!e&&o&&i!==`ending`&&!n&&a(`ending`),!e&&!o&&i===`ending`&&a(void 0),Q(()=>{if(!e&&o&&i!==`ending`&&n){let e=Ts.request(()=>{a(`ending`)});return()=>{Ts.cancel(e)}}},[e,o,i,n]),Q(()=>{if(!e||t)return;let n=Ts.request(()=>{a(void 0)});return()=>{Ts.cancel(n)}},[t,e]),Q(()=>{if(!e||!t)return;e&&o&&i!==`idle`&&a(`starting`);let n=Ts.request(()=>{a(`idle`)});return()=>{Ts.cancel(n)}},[t,e,o,i]),{mounted:o,setMounted:s,transitionStatus:i}}var ad=null;function od(e){if(!ad){let e=[];ad=e,queueMicrotask(()=>{ad=null,Ma.flushSync(()=>{for(let t of e)t()})})}ad.push(e)}function sd(e,t=!1,n=!1){let r=Es();return Z((i,a=null)=>{r.cancel();let o=Ml(e);if(o==null)return;let s=o,c=()=>{if(!n){Ma.flushSync(i);return}od(()=>{a?.aborted||i()})};if(typeof s.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){i();return}function l(){Promise.all(s.getAnimations().map(e=>e.finished)).then(()=>{a?.aborted||c()},()=>{if(!a?.aborted){if(s.getAnimations().some(e=>e.pending||e.playState!==`finished`)){l();return}c()}})}if(t){let e=zo;if(!s.hasAttribute(e)){r.request(l);return}let t=new MutationObserver(()=>{s.hasAttribute(e)||(t.disconnect(),l())});t.observe(s,{attributes:!0,attributeFilter:[e]}),a?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}r.request(l)})}function cd(e){let{enabled:t=!0,open:n,ref:r,batch:i=!1,onComplete:a}=e,o=Z(a),s=sd(r,n,i);u.useEffect(()=>{if(!t)return;let e=new AbortController;return s(o,e.signal),()=>{e.abort()}},[t,n,o,s])}var ld=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function ud(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=Ic(),a=Dl()!=null,o=io(()=>new rd({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new ld,floatingId:i,syncOnly:!1,nested:a})).current;return Q(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=Y(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}function dd(e={}){let t=ud(e);return fd(e,e.rootContext||t)}function fd(e,t){let{nodeId:n,externalTree:r}=e,i=t.useState(`referenceElement`),a=t.useState(`floatingElement`),o=t.useState(`domReferenceElement`),s=t.useState(`open`),c=t.useState(`floatingId`),[l,d]=u.useState(null),[f,p]=u.useState(void 0),[m,h]=u.useState(void 0),g=u.useRef(null),_=Ol(r),v=u.useMemo(()=>({reference:i,floating:a,domReference:o}),[i,a,o]),y=Nu({...e,elements:{...v,...l&&{reference:l}}}),b=Y(f)?f:null,x=m===void 0?t.state.floatingElement:m;t.useSyncedValue(`referenceElement`,f??null),t.useSyncedValue(`domReferenceElement`,f===void 0?o:b),t.useSyncedValue(`floatingElement`,x);let S=u.useCallback(e=>{let t=Y(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;d(t),y.refs.setReference(t)},[y.refs]),C=u.useCallback(e=>{(Y(e)||e===null)&&(g.current=e,p(e)),(Y(y.refs.reference.current)||y.refs.reference.current===null||e!==null&&!Y(e))&&y.refs.setReference(e)},[y.refs,p]),w=u.useCallback(e=>{h(e),y.refs.setFloating(e)},[y.refs]),T=u.useMemo(()=>({...y.refs,setReference:C,setFloating:w,setPositionReference:S,domReference:g}),[y.refs,C,w,S]),E=u.useMemo(()=>({...y.elements,domReference:o}),[y.elements,o]),D=u.useMemo(()=>({...y,dataRef:t.context.dataRef,open:s,onOpenChange:t.setOpen,events:t.context.events,floatingId:c,refs:T,elements:E,nodeId:n,rootStore:t}),[y,T,E,n,t,s,c]);return Q(()=>{o&&(g.current=o)},[o]),Q(()=>{t.context.dataRef.current.floatingContext=D;let e=_?.nodesRef.current.find(e=>e.id===n);e&&(e.context=D)}),u.useMemo(()=>({...y,context:D,refs:T,elements:E,rootStore:t}),[y,T,E,D,t])}var pd=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new go,this.restTimeout=new go,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},md=new WeakMap;function hd(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&md.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),md.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function gd(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=md.get(n);a&&a!==e&&hd(a),hd(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,md.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function _d(e){let t=e.context.dataRef.current,n=io(()=>t.hoverInteractionState??pd.create()).current;return t.hoverInteractionState||=n,mo(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}function vd(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,d=Ol(),f=Dl(),p=_d(a),m=_o(),h=Z(()=>as(l.current.openEvent?.type,p.interactedInside)),g=Z(()=>os(l.current.openEvent?.type)),_=Z(()=>{hd(p)});Q(()=>{o||(p.pointerType=void 0,p.restTimeoutPending=!1,p.interactedInside=!1,_())},[o,p,_]),u.useEffect(()=>_,[_]),Q(()=>{if(n&&o&&p.handleCloseOptions?.blockPointerEvents&&g()&&Y(c)&&s){let e=c,t=s,n=lo(s),r=d?.nodesRef.current.find(e=>e.id===f)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=p.pointerEventsScopeElement===t?null:p.pointerEventsScopeElement,a=r===t?null:r,o=p.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body;return gd(p,{scopeElement:o,referenceElement:e,floatingElement:t}),()=>{_()}}},[n,o,c,s,p,g,d,f,_]),u.useEffect(()=>{if(!n)return;function e(){return!!(d&&f&&jc(d.nodesRef.current,f).length>0)}function t(e){let t=is(r,`close`,p.pointerType),n=()=>{a.setOpen(!1,ps(cs,e)),d?.events.emit(`floating.closed`,e)};t?p.openChangeTimeout.start(t,n):(p.openChangeTimeout.clear(),n())}function o(e){let t=Lo(e);if(!ns(t)){p.interactedInside=!1;return}p.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){p.openChangeTimeout.clear(),m.clear(),d?.events.off(`floating.closed`,v),_()}function u(n){if(e()&&d){d.events.on(`floating.closed`,v);return}if($o(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(d&&r&&Y(o)&&jc(d.nodesRef.current,r,!1).some(e=>Io(e.context?.elements.floating,o)))){if(p.handler){p.handler(n);return}_(),g()&&!h()&&t(n)}}function v(t){d&&f&&!e()&&m.start(0,()=>{d.events.off(`floating.closed`,v),a.setOpen(!1,ps(cs,t)),d.events.emit(`floating.closed`,t)})}let y=s;return ms(y&&$(y,`mouseenter`,c),y&&$(y,`mouseleave`,u),y&&$(y,`pointerdown`,o,!0),()=>{d?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,g,h,_,p,d,f,m])}var yd=u.createContext(void 0);function bd(e){let t=u.useContext(yd);if(t===void 0&&!e)throw Error(Rc(41));return t}var xd=u.createContext(void 0);function Sd(){return u.useContext(xd)}var Cd=`--positioner-width`,wd=`--positioner-height`,Td=`--popup-width`,Ed=`--popup-height`;function Dd(e,t,n,r){e.style.setProperty(Td,`${n}px`),e.style.setProperty(Ed,`${r}px`),t.style.setProperty(Cd,`${n}px`),t.style.setProperty(wd,`${r}px`)}var Od=new Set([cs,ls,ds]);function kd(e){let t=parseFloat(e.style.getPropertyValue(`--positioner-width`))||0,n=parseFloat(e.style.getPropertyValue(`--positioner-height`))||0;return t<=0||n<=0?null:{width:t,height:n}}var Ad=u.forwardRef(function(e,t){let{defaultValue:n=null,value:r,onValueChange:i,actionsRef:a,delay:s=50,closeDelay:c=50,orientation:l=`horizontal`,onOpenChangeComplete:d}=e,f=Dl()!=null,p=bd(!0),[m,h]=to({controlled:r,default:n,name:`NavigationMenu`,state:`value`}),g=m!=null,_=u.useRef(void 0),v=u.useRef(null),[y,b]=u.useState(null),[x,S]=u.useState(null),[C,w]=u.useState(null),[T,E]=u.useState(null),[D,O]=u.useState(null),[k,A]=u.useState(void 0),[j,M]=u.useState(!1),N=u.useRef(null),P=u.useRef(null),F=u.useRef(null),I=u.useRef(null),L=u.useRef(null),R=u.useRef(null),z=u.useRef({abortController:null,owner:null}),{mounted:B,setMounted:ee,transitionStatus:V}=id(g);Q(()=>{if(g||!y||!x)return;let e=kd(y);e&&Dd(x,y,e.width,e.height)},[g,x,y]),u.useEffect(()=>{M(!1)},[m]);let te=Z((e,t)=>{e??(_.current=t.reason),e!==m&&i?.(e,t),!t.isCanceled&&(e??(O(null),A(void 0)),h(e),f&&e==null&&t.reason===`link-press`&&p&&p.setValue(null,t))}),H=Z(()=>{let e=Fo(lo(v.current));!(_.current&&Od.has(_.current))&&X(N.current)&&(e===lo(x).body||Io(x,e))&&x&&(N.current.focus({preventScroll:!0}),N.current=void 0),ee(!1),d?.(!1),O(null),A(void 0),P.current=null,_.current=void 0});u.useImperativeHandle(a,()=>({unmount:H}),[H]),cd({enabled:!a,open:g,ref:{current:x},onComplete(){g||H()}}),cd({enabled:!a,open:g,ref:{current:T},onComplete(){g||H()}});let U=g?D:null,ne=u.useMemo(()=>({open:g,value:m,setValue:te,mounted:B,transitionStatus:V,positionerElement:y,setPositionerElement:b,popupElement:x,setPopupElement:S,viewportElement:C,setViewportElement:w,viewportTargetElement:T,setViewportTargetElement:E,activationDirection:U,setActivationDirection:O,floatingRootContext:k,setFloatingRootContext:A,currentContentRef:P,nested:f,rootRef:v,beforeInsideRef:F,afterInsideRef:I,beforeOutsideRef:L,afterOutsideRef:R,prevTriggerElementRef:N,popupAutoSizeResetRef:z,delay:s,closeDelay:c,orientation:l,viewportInert:j,setViewportInert:M}),[g,m,te,B,V,y,x,C,T,U,k,f,s,c,l,j]),re=(0,o.jsx)(yd.Provider,{value:ne,children:(0,o.jsx)(jd,{componentProps:e,forwardedRef:t,children:e.children})});return f?re:(0,o.jsx)(jl,{children:re})});function jd(e){let{className:t,render:n,defaultValue:r,value:i,onValueChange:a,actionsRef:s,delay:c,closeDelay:l,orientation:u,onOpenChangeComplete:d,style:f,...p}=e.componentProps,m=kl(),{rootRef:h,nested:g,open:_}=bd(),v={open:_,nested:g},y=sl(g?`div`:`nav`,e.componentProps,{state:v,ref:[e.forwardedRef,h],props:p});return(0,o.jsx)(xd.Provider,{value:m,children:(0,o.jsx)(Al,{id:m,children:y})})}var Md=u.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},nextIndexRef:{current:0}});function Nd(){return u.useContext(Md)}function Pd(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=Z(i),[,s]=u.useState(!1),c=io(Id).current,l=io(Fd).current,d=u.useRef(0),f=u.useRef(!0),p=u.useRef(null),m=u.useRef(null),h=Z(()=>{f.current||(f.current=!0,s(e=>!e))}),g=Z((e,t)=>{l.set(e,t),h()}),_=Z(e=>{l.delete(e),h()}),v=Z(e=>{let t=new Map;return n.current.length=0,r&&(r.current.length=0),e.forEach(e=>{t.set(e.element,{...e.registration.metadata??{},index:e.index}),n.current[e.index]=e.element,r&&(r.current[e.index]=e.registration.label===void 0?e.registration.textRef?.current?.textContent??e.element.textContent:e.registration.label)}),d.current=n.current.length,t});function y(e){if(m.current?.disconnect(),m.current=null,typeof MutationObserver!=`function`||e.length<2)return;let t=new MutationObserver(n=>{if(!zd(n))return;let r=null;for(let n of e)if(n.isConnected){if(r&&Bd(r,n)>0){t.disconnect(),h();return}r=n}});m.current=t;let n=new Set;for(let t=1;t<e.length;t+=1){let r=Rd(e[t-1],e[t]);r&&n.add(r)}n.forEach(e=>t.observe(e,{childList:!0}))}let b=Z(()=>{let[e,t]=Ld(l),n=v(e),r=p.current,i=!r||r.length!==e.length||e.some((e,t)=>{let n=r[t];return e.index!==n.index||e.element!==n.element||e.registration.index!==n.registration.index||e.registration.metadata!==n.registration.metadata});y(t),p.current=e,f.current=!1,i&&(c.forEach(e=>e(n)),a(n))});Q(()=>(!f.current&&p.current&&v(p.current),()=>{n.current=[],r&&(r.current=[])}),[n,r,v]),Q(()=>{f.current&&b()}),Q(()=>()=>{m.current?.disconnect(),f.current=!0},[]);let x=Z(e=>(c.add(e),()=>{c.delete(e)})),S=u.useMemo(()=>({register:g,unregister:_,subscribeMapChange:x,nextIndexRef:d}),[g,_,x,d]);return(0,o.jsx)(Md.Provider,{value:S,children:t})}function Fd(){return new Map}function Id(){return new Set}function Ld(e){let t=new Set,n=[],r=[];e.forEach((e,i)=>{if(!i.isConnected)return;let a=e.index,o={index:a??-1,element:i,registration:e};a===null?r.push(o):a>=0&&(t.add(a),n.push(o))});let i=0;return r.sort((e,t)=>Bd(e.element,t.element)),r.forEach(e=>{for(;t.has(i);)i+=1;e.index=i,n.push(e),i+=1}),t.size>0&&n.sort((e,t)=>e.index-t.index),[n,r.map(e=>e.element)]}function Rd(e,t){let n=e.parentElement;for(;n&&!n.contains(t);)n=n.parentElement;return n}function zd(e){for(let t of e)for(let e=0;e<t.removedNodes.length;e+=1)if(t.removedNodes[e].isConnected)return!0;return!1}function Bd(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function Vd(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}var Hd=`ArrowUp`,Ud=`ArrowDown`,Wd=`ArrowLeft`,Gd=`ArrowRight`,Kd=new Set([Hd,Ud,Wd,Gd,`Home`,`End`]),qd=[`Shift`,`Control`,`Alt`,`Meta`];function Jd(e){return X(e)&&e.tagName===`INPUT`}function Yd(e){return!!(Jd(e)&&e.selectionStart!=null||X(e)&&e.tagName===`TEXTAREA`)}function Xd(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Zd(e,t,`left`),a=Qd(e),o=Qd(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Zd(e,t,`top`),r=Qd(e),i=Qd(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Zd(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Qd(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}function $d(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:d,disabledIndices:f,modifierKeys:p=fo}=e,[m,h]=u.useState(0),g=r!=null,_=u.useRef(null),v=hs(_,c),y=u.useRef([]),b=u.useRef(!1),x=u.useRef(null),S=o??m,C=Z((e,t=!1)=>{if(x.current=y.current[e]??null,(s??h)(e),t){let t=y.current[e];Xd(_.current,t,a,n)}}),w=Z(e=>{if(e.size===0)return;if(b.current){let e=y.current,t=e.indexOf(x.current);if(t===-1){let t=e[S];!t||sc(e,S,f)?C(ef(e,f)):x.current=t}else t!==S&&C(t);return}b.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)C(i);else if(sc(t,S,f)){let e=oc(t,{disabledIndices:f});rc(t,e)||C(e)}Xd(_.current,r,a,n)});Q(()=>{if(f==null||o!=null||!b.current)return;let e=y.current;if(sc(e,S,f)){let t=oc(e,{disabledIndices:f});rc(e,t)||C(t)}},[f,o,S,y,C]);let T=Z((e,t,n)=>i?i(e,t,n,y):n),E=Z(e=>{let o=e.key===`Home`||e.key===`End`;if(!Kd.has(e.key)||!l&&o||tf(e,p)||!_.current)return;let s=a===`rtl`,c=s?Wd:Gd,u=s?Gd:Wd,m=n===`vertical`?Ud:c,h=n===`vertical`?Hd:u,v=Lo(e.nativeEvent);if(v!=null&&Yd(v)&&!Vd(v)){let t=v.selectionStart,n=v.selectionEnd,r=v.value;if(t==null||e.shiftKey||t!==n||e.key!==h&&t<r.length||e.key!==m&&t>0)return}let b=S,x=ic(y,f),w=ac(y,f);r!=null&&(b=r({disabledIndices:f,elementsRef:y,event:e,highlightedIndex:S,loopFocus:t,maxIndex:w,minIndex:x,onLoop:T,orientation:n,rtl:s}));let E=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,D=n!==`vertical`&&e.key===u||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=x:e.key===`End`&&(b=w)),b===S&&(E||D)&&(t&&b===w&&E?(b=x,i&&(b=i(e,S,b,y))):t&&b===x&&D?(b=w,i&&(b=i(e,S,b,y))):b=oc(y.current,{startingIndex:b,decrement:D,disabledIndices:f})),b!==S&&!rc(y.current,b)&&(d&&e.stopPropagation(),(g||o||E||D)&&e.preventDefault(),C(b,!0),queueMicrotask(()=>{y.current[b]?.focus()}))});return{props:{ref:v,onFocus(e){let t=_.current,n=Lo(e.nativeEvent);t&&n!=null&&Yd(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:S,onHighlightedIndexChange:C,elementsRef:y,onMapChange:w,relayKeyboardEvent:E}}function ef(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!sc(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function tf(e,t){for(let n of qd)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var nf=u.createContext(void 0);function rf(e=!1){let t=u.useContext(nf);if(t===void 0&&!e)throw Error(Rc(16));return t}var af=u.createContext(void 0);function of(){return u.useContext(af)?.direction??`ltr`}function sf(e){let{render:t,className:n,style:r,refs:i=fo,props:a=fo,state:s=po,stateAttributesMapping:c,highlightedIndex:l,onHighlightedIndexChange:d,orientation:f,grid:p,loopFocus:m,onLoop:h,enableHomeAndEndKeys:g,onMapChange:_,stopEventPropagation:v=!0,rootRef:y,disabledIndices:b,modifierKeys:x,highlightItemOnHover:S=!1,tag:C=`div`,...w}=e,{props:T,highlightedIndex:E,onHighlightedIndexChange:D,elementsRef:O,onMapChange:k,relayKeyboardEvent:A}=$d({grid:p,loopFocus:m,onLoop:h,orientation:f,highlightedIndex:l,onHighlightedIndexChange:d,rootRef:y,stopEventPropagation:v,enableHomeAndEndKeys:g,direction:of(),disabledIndices:b,modifierKeys:x}),j=sl(C,e,{state:s,ref:i,props:[T,...a,w],stateAttributesMapping:c}),M=u.useMemo(()=>({highlightedIndex:E,onHighlightedIndexChange:D,highlightItemOnHover:S,relayKeyboardEvent:A}),[E,D,S,A]);return(0,o.jsx)(nf.Provider,{value:M,children:(0,o.jsx)(Pd,{elementsRef:O,onMapChange:e=>{_?.(e),k(e)},children:j})})}var cf=`data-base-ui-navigation-menu-trigger`,lf=u.createContext(void 0);function uf(){return new rd({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new ld,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}var df=u.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,s=Sd(),{orientation:c,open:l,floatingRootContext:d,positionerElement:f,value:p,closeDelay:m,viewportElement:h,nested:g}=bd(),_=u.useMemo(()=>uf(),[]),v=d||_,y=f!=null||p==null;vd(v,{enabled:!!d&&(f!=null||h!=null||p==null),closeDelay:m,nodeId:s});let b=Fl(v,{enabled:y,outsidePressEvent:`intentional`,outsidePress(e){return Lo(e)?.closest(`[${cf}]`)===null}}),x=d?b:void 0,S={open:l},C=g?po:{onKeyDown(e){(c===`horizontal`&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)||c===`vertical`&&(e.key===`ArrowUp`||e.key===`ArrowDown`))&&e.stopPropagation()}},w=[x?.floating||po,C,a],T=sl(`ul`,e,{state:S,ref:t,props:w,enabled:g});return g?(0,o.jsx)(lf.Provider,{value:x,children:T}):(0,o.jsx)(lf.Provider,{value:x,children:(0,o.jsx)(sf,{render:n,className:r,style:i,state:S,refs:[t],props:w,loopFocus:!1,orientation:c,tag:`ul`})})}),ff=u.createContext(void 0);function pf(e){return Ic(e,`base-ui`)}var mf=u.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a,...s}=e,c=pf(),l=a??c,d=sl(`li`,e,{ref:t,props:s}),f=u.useMemo(()=>({value:l}),[l]);return(0,o.jsx)(ff.Provider,{value:f,children:d})});function hf(e){return Bc(19)?e:e?`true`:void 0}function gf({currentTarget:e,relatedTarget:t},n){let{popupElement:r,rootRef:i,tree:a,nodeId:o}=n,s=a?jc(a.nodesRef.current,o).some(e=>Io(e.context?.elements.floating,t)):!1;return r?!Io(r,e)&&!Io(r,t)&&!Io(i.current,t)&&!s:!Io(i.current,t)&&!s}function _f(e={}){let{guess:t,label:n,metadata:r,textRef:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,nextIndexRef:l}=Nd(),d=u.useRef(-1),[f,p]=u.useState(a==null&&t?()=>{if(d.current===-1){let e=l.current;l.current+=1,d.current=e}return d.current}:-1),m=a??f,h=u.useRef(null),g=u.useCallback(e=>{let t=h.current;t&&s(t),h.current=e,e&&o(e,{metadata:r??null,index:a??null,label:n,textRef:i})},[a,o,s,r,n,i]);return Q(()=>{if(a==null)return c(e=>{let t=h.current?e.get(h.current)?.index:null;t!=null&&p(t)})},[a,c]),{ref:g,index:m}}function vf(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=rf(),{ref:i,index:a}=_f(e),o=n===a,s=u.useRef(null),c=hs(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}function yf(e){let{render:t,className:n,style:r,state:i=po,props:a=fo,refs:o=fo,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=vf({metadata:s});return sl(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}var bf=u.createContext(void 0);function xf(){let e=u.useContext(bf);if(e===void 0)throw Error(Rc(40));return e}var Sf=u.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{mounted:i}=bd();return i||n?(0,o.jsx)(bf.Provider,{value:n,children:(0,o.jsx)(Sl,{ref:t,...r})}):null}),Cf=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=Ls(e,t)||{};if(l==null)return{};let f=tc(u),p={x:n,y:r},m=Us(i),h=Vs(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=Is(k,j,A),N=!c.arrow&&zs(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),wf=(e,t)=>{let{name:n,fn:r}=Cf(e);return{name:n,fn:r,options:[e,t]}},Tf={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0,o=await e.platform.detectOverflow(e,{elementContext:`reference`});return{data:{referenceHidden:o.top-n>=0||o.right-t>=0||o.bottom-n>=0||o.left-t>=0||a}}}},Ef={sideX:`left`,sideY:`top`},Df=`--available-width`,Of=`--available-height`,kf=`--anchor-width`,Af=`--anchor-height`,jf=`--transform-origin`,Mf=Df,Nf=Of;function Pf(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function Ff(e,t,n){let{rects:r,placement:i}=e;return{side:Pf(t,Rs(i),n),align:zs(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function If(e,t){let{anchor:n,positionMethod:r=`absolute`,side:i=`bottom`,sideOffset:a=0,align:o=`center`,alignOffset:s=0,collisionBoundary:c,collisionPadding:l=5,sticky:d=!1,arrowPadding:f=5,disableAnchorTracking:p=!1,inline:m,keepMounted:h=!1,floatingRootContext:g,mounted:_,collisionAvoidance:v,shift:y,nodeId:b,adaptiveOrigin:x,lazyFlip:S=!1,externalTree:C}=e,[w,T]=u.useState(null);!_&&w!==null&&T(null);let E=v.side||`flip`,D=v.align||`flip`,O=v.fallbackAxisSide||`end`,k=y?.crossAxis??!1,A=y?.rootBoundary,j=typeof n==`function`?n:void 0,M=Z(j),N=j?M:n,P=xs(n),F=xs(_),I=of()===`rtl`,L=w||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":I?`left`:`right`,"inline-start":I?`right`:`left`}[i],R=o===`center`?L:`${L}-${o}`,z=l;typeof z==`number`?z={top:z,right:z,bottom:z,left:z}:z&&={top:z.top||0,right:z.right||0,bottom:z.bottom||0,left:z.left||0};let B=+(i===`bottom`),ee=+(i===`top`),V=+(i===`right`),te=+(i===`left`),H={boundary:c===`clipping-ancestors`?`clippingAncestors`:c,padding:z},U=u.useRef(null),ne=xs(a),re=xs(s),ie=typeof a==`function`?0:a,ae=typeof s==`function`?0:s,W=[];m&&W.push(m),W.push(Pu(e=>{let t=Ff(e,i,I),n=typeof ne.current==`function`?ne.current(t):ne.current,r=typeof re.current==`function`?re.current(t):re.current;return{mainAxis:n,crossAxis:r,alignmentAxis:r}},[ie,ae,I,i]));let oe=D===`none`&&E!==`shift`,se=!oe&&(d||k||E===`shift`),ce=E===`none`?null:Lu({...H,padding:{top:z.top+1+B,right:z.right+1+te,bottom:z.bottom+1+ee,left:z.left+1+V},mainAxis:!k&&E===`flip`,crossAxis:D===`flip`&&`alignment`,fallbackAxisSideDirection:O}),le=oe?null:Fu({...H,rootBoundary:A,mainAxis:D!==`none`,crossAxis:se,limiter:d||k?void 0:Iu(e=>{if(!U.current)return{};let{width:t,height:n}=U.current.getBoundingClientRect(),r=Hs(Rs(e.placement)),i=r===`y`?t:n,a=r===`y`?z.left+z.right:z.top+z.bottom;return{offset:i/2+a/2}})},[H,d,k,A,z,D]);E===`shift`||D===`shift`||o===`center`?W.push(le,ce):W.push(ce,le),W.push(Ru({...H,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!F.current)return;let i=e.style;i.setProperty(Mf,`${t}px`),i.setProperty(Nf,`${n}px`);let a=J(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(kf,`${u}px`),i.setProperty(Af,`${d}px`)}}),wf(e=>({element:U.current||lo(e.elements.floating).createElement(`div`),padding:U.current?f:0,offsetParent:`floating`}),[f]),{name:`transformOrigin`,fn(e){let{elements:{floating:t},middlewareData:n,placement:r,platform:o,rects:s,y:c}=e,l=Rs(r),u=zs(r),d=Hs(l)===`y`,f=U.current,p=typeof a==`function`?a(Ff(e,i,I)):a,m;m=!f&&u&&Math.abs(d?n.shift?.x||0:n.shift?.y||0)<=1?u===`start`===(d&&o.isRTL?.(t)===!0)?`100%`:`0%`:`${(d?n.arrow?.x||0:n.arrow?.y||0)+(d?f?.clientWidth||0:f?.clientHeight||0)/2}px`;let h=l===`top`||l===`left`?`calc(100% + ${p}px)`:`${-p}px`;return se&&d&&Math.abs(n.shift?.y||0)>p&&(h=`${s.reference.y+s.reference.height/2-c}px`),t.style.setProperty(jf,d?`${m} ${h}`:`${h} ${m}`),{}}},Tf,x),Q(()=>{!_&&g&&g.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[_,g]);let ue=u.useMemo(()=>({ancestorScroll:!p,elementResize:!p&&typeof ResizeObserver<`u`,layoutShift:!p&&typeof IntersectionObserver<`u`}),[p]),{refs:de,elements:fe,x:pe,y:me,middlewareData:he,update:ge,placement:_e,context:ve,isPositioned:ye,floatingStyles:be}=t({rootContext:g,open:h?_:void 0,placement:R,middleware:W,strategy:r,whileElementsMounted:h?void 0:(...e)=>xu(...e,ue),nodeId:b,externalTree:C}),{sideX:xe,sideY:Se}=he.adaptiveOrigin||Ef,Ce=ye?r:`fixed`,we=u.useMemo(()=>{let e;return e=ye?x?{position:Ce,[xe]:pe,[Se]:me}:{...be,position:Ce}:{position:Ce,top:0,left:0},e[Mf]=`100vw`,e[Nf]=`100vh`,ye||(e.opacity=0),e},[x,Ce,xe,pe,Se,me,be,ye]),Te=u.useRef(null);Q(()=>{if(!_)return;let e=P.current,t=typeof e==`function`?e():e,n=(Lf(t)?t.current:t)||null;n!==Te.current&&(de.setPositionReference(n),Te.current=n)},[_,de,N,P]),u.useEffect(()=>{if(!_)return;let e=P.current;typeof e!=`function`&&Lf(e)&&e.current!==Te.current&&(de.setPositionReference(e.current),Te.current=e.current)},[_,de,N,P]),u.useEffect(()=>{if(h&&_&&fe.reference&&fe.floating)return xu(fe.reference,fe.floating,ge,ue)},[h,_,fe,ge,ue]);let Ee=Rs(_e),De=Pf(i,Ee,I),Oe=zs(_e)||`center`,ke=!!he.hide?.referenceHidden;Q(()=>{S&&_&&ye&&Ee!==L&&T(Ee)},[S,_,ye,Ee,L]);let Ae=u.useMemo(()=>({position:`absolute`,top:he.arrow?.y,left:he.arrow?.x}),[he.arrow]),je=he.arrow?.centerOffset!==0;return u.useMemo(()=>({positionerStyles:we,arrowStyles:Ae,arrowRef:U,arrowUncentered:je,side:De,align:Oe,physicalSide:Ee,anchorHidden:ke,refs:de,context:ve,isPositioned:ye,update:ge}),[we,Ae,U,je,De,Oe,Ee,ke,de,ve,ye,ge])}function Lf(e){return e!=null&&`current`in e}function Rf(e){return If(e,dd)}var zf=u.createContext(void 0);function Bf(e=!1){let t=u.useContext(zf);if(!t&&!e)throw Error(Rc(42));return t}var Vf={name:`adaptiveOrigin`,async fn(e){let{x:t,y:n,rects:{floating:r},elements:{floating:i},platform:a,strategy:o,placement:s}=e,c=J(i),l=c.getComputedStyle(i);if(l.transitionDuration===`0s`||l.transitionDuration===``)return{x:t,y:n,data:Ef};let u=await a.getOffsetParent?.(i),d={width:0,height:0};if(o===`fixed`&&c?.visualViewport)d={width:c.visualViewport.width,height:c.visualViewport.height};else if(u===c){let e=lo(i);d={width:e.documentElement.clientWidth,height:e.documentElement.clientHeight}}else await a.isElement?.(u)&&(d=await a.getDimensions(u));let f=Rs(s),p=t,m=n;f===`left`&&(p=d.width-(t+r.width)),f===`top`&&(m=d.height-(n+r.height));let h=f===`left`?`right`:Ef.sideX,g=f===`top`?`bottom`:Ef.sideY;return{x:p,y:m,data:{sideX:h,sideY:g}}}};function Hf(e){return e===`starting`?ml:po}function Uf(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),sl(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},Hf(r),i],stateAttributesMapping:Xo})}var Wf=uf(),Gf=u.forwardRef(function(e,t){let{open:n,mounted:r,positionerElement:i,setPositionerElement:a,floatingRootContext:s,nested:c,transitionStatus:l}=bd(),{className:d,render:f,anchor:p,positionMethod:m=`absolute`,side:h=`bottom`,align:g=`center`,sideOffset:_=0,alignOffset:v=0,collisionBoundary:y=`clipping-ancestors`,collisionPadding:b=5,collisionAvoidance:x=c?gl:hl,arrowPadding:S=5,sticky:C=!1,disableAnchorTracking:w=!1,style:T,...E}=e,D=xf(),O=Sd(),k=_o(),A=_o(),[j,M]=u.useState(n),N=u.useRef(n);u.useEffect(()=>{if(!i)return;function e(e){i&&Oc(e)&&(e.type===`focusin`?Ac:kc)(i)}return ms($(i,`focusin`,e,!0),$(i,`focusout`,e,!0))},[i]);let P=(s||Wf).useState(`domReferenceElement`),F=Rf({anchor:p??P,positionMethod:m,mounted:r,side:h,sideOffset:_,align:g,alignOffset:v,arrowPadding:S,collisionBoundary:y,collisionPadding:b,sticky:C,disableAnchorTracking:w,keepMounted:D,floatingRootContext:s,collisionAvoidance:x,shift:{rootBoundary:`layoutViewport`},nodeId:O,adaptiveOrigin:Vf}),I={open:n,side:F.side,align:F.align,anchorHidden:F.anchorHidden,instant:j};u.useEffect(()=>{if(!n)return;N.current&&k.start(0,()=>{N.current=!1,A.isStarted()||M(!1)});function e(){Ma.flushSync(()=>{M(!0)}),A.start(100,()=>{M(!1)})}return $(J(i),`resize`,e)},[n,k,A,i]);let L=Uf(e,I,{styles:F.positionerStyles,transitionStatus:l,props:E,refs:[t,a],hidden:!r,inert:!n});return(0,o.jsx)(zf.Provider,{value:F,children:L})}),Kf=uf();function qf({children:e}){let{beforeInsideRef:t,beforeOutsideRef:n,afterInsideRef:r,afterOutsideRef:i,positionerElement:a,viewportElement:s,floatingRootContext:c}=bd(),l=!!Bf(!0),d=a||s;return!c&&!l?e:(0,o.jsxs)(u.Fragment,{children:[(0,o.jsx)(ks,{ref:t,onFocus:e=>{d&&Oc(e,d)?Ec(d)?.focus():n.current?.focus()}}),e,(0,o.jsx)(ks,{ref:r,onFocus:e=>{d&&Oc(e,d)?Dc(d)?.focus():i.current?.focus()}})]})}var Jf=u.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,id:s,...c}=e,l=Ic(s),{setViewportElement:u,setViewportTargetElement:d,floatingRootContext:f,prevTriggerElementRef:p,viewportInert:m,setViewportInert:h}=bd(),g=!!Bf(!0),_=(f||Kf).useState(`domReferenceElement`);Q(()=>{_&&(p.current=_)},[_,p]);let v=sl(`div`,e,{ref:[t,u],props:[{id:l,onBlur(e){let t=e.relatedTarget,n=e.currentTarget;t&&!Io(n,t)&&t!==_&&h(!0)},...!g&&m&&{inert:hf(!0)},children:g?a:(0,o.jsx)(qf,{children:(0,o.jsx)(`div`,{ref:d,children:a})})},c]});return g?(0,o.jsx)(qf,{children:v}):v}),Yf=u.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{open:s,transitionStatus:c,setPopupElement:l}=bd(),u=Bf(),d=of(),f=pf(a),p={open:s,transitionStatus:c,side:u.side,align:u.align,anchorHidden:u.anchorHidden},m=u.side===`left`;m||=d===`rtl`?u.side===`inline-end`:u.side===`inline-start`;let h=u.side===`top`||m;return sl(`nav`,e,{state:p,ref:[t,l],props:[{id:f,tabIndex:-1,style:h?{position:`absolute`,[u.side===`top`?`bottom`:`top`]:`0`,[m?`right`:`left`]:`0`}:{}},Hf(c),o],stateAttributesMapping:Zo})}),Xf=u.forwardRef(function(e,t){let{className:n,render:r,active:i=!1,closeOnClick:a=!1,style:s,...c}=e,{setValue:l,popupElement:u,positionerElement:d,rootRef:f}=bd(),p=Sd(),m=Ol();return(0,o.jsx)(yf,{tag:`a`,render:r,className:n,style:s,state:{active:i},refs:[t],props:[{"aria-current":i?`page`:void 0,tabIndex:void 0,onClick(e){a&&l(null,ps(us,e.nativeEvent))},onBlur(e){d&&u&&gf({currentTarget:e.currentTarget,relatedTarget:e.relatedTarget},{popupElement:u,rootRef:f,tree:m,nodeId:p})&&l(null,ps(ds,e.nativeEvent))}},c]})});function Zf(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Zf(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Qf(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Zf(e))&&(r&&(r+=` `),r+=t);return r}var $f=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,ep=Qf,tp=(e,t)=>n=>{if(t?.variants==null)return ep(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=$f(t)||$f(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return ep(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},np=48,rp=(e,t=0)=>{let n=new Int32Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r)-np-t;return n},ip=e=>{let t=new Int32Array(e.length+1);for(let n=0;n<e.length;n++)t[n+1]=t[n]+e[n];return t},ap=e=>{let t=new Int32Array(e.length),n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)-np;n+=i>>>1^-(i&1),t[r]=n}return t},op=384,sp=[],cp=ip(rp(`E0500002005282000000002000150000020021820000011200000003022202000300004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010`)),lp=ip(rp(`:11111111211111119311546544411119731869:671397415686432441111111111161114151214313433415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3`)),up=`@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartainentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom`,dp=(()=>{let e=cp.length-1,t=new Int32Array(e);for(let n=e-1;n>=0;n--){let e=1,r=n+1;for(let i=cp[n];i<cp[n+1];i++)e+=t[r],r+=t[r];t[n]=e}let n=new Int32Array(cp[e]),r=0;for(let i=0;i<e;i++){let e=i+1;for(let a=cp[i];a<cp[i+1];a++)n[r++]=e,e+=t[e]}return n})(),fp=rp(`02000000000000900<=0?000B000F00F00ŏI0J0LNPRTVX0000]_a00000000000000000000000rst0000000zŏ00000000000ŏ0000000ŏ00000000000000000000000000000000000000000000000000000000000000Ë000000000000000000000Þ000000000000000000ð0000000ø0ùúûüýþÿĀāĂăĄąĆ000000000000000000000000000000000000000000ħ0ĨĪ00000000000000000000ļĽ00000Ŭ000000`,1),pp=ip(rp(`1233333593464636351265367151576`)),mp=rp(`93203242332583253248325D>E?F@03263243255B:032523853:0325B:8GA032542H<C=12727B:0324325853;D>E?3257D>03258432585:0325B:;0328B:032`),hp=rp(`012123445661666666789111:5;;;;;;;;444;;;:62999<1161=62>>?61:21@ABCD4446996:64E:::;:?::64:F114GHHIHHHHIHH1HH1HH1HHHHHH::EJK4444::EJ4444441691;644444114244444:;L6666555555555555555999666664444444444444444444444226?6:66644M9N?D:111::::6DJ199`),gp=ap(`0202002020020020020020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020200202002002002002002002002002002020002002020020200220200200200200200200200200200200020020020000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j0002002000200200020020002002000200200020020002000200002000002002002002002000200020000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200`),_p=(()=>{let e=new Int32Array(319).fill(-1),t=ap(`02422242:222222242224222242442222222422222244442242226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222`),n=ap(`02222222222222222222202222222222222222222222221422222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222Ŀł222222222222222222`);for(let r=0;r<t.length;r++)e[t[r]]=n[r];return e})(),vp=`container |break-after- all auto avoid avoid-page column left page right|break-before- all auto avoid avoid-page column left page right|break-inside-a uto void void-column void-page|box-decoration- clone slice|box- border content| contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group| not-sr-only sr-only|float- end left none right start|clear- both end left none right start|isolat e ion-auto|overflow- auto clip hidden scroll visible|overflow-x- auto clip hidden scroll visible|overflow-y- auto clip hidden scroll visible|overscroll- auto contain none|overscroll-x- auto contain none|overscroll-y- auto contain none| absolute fixed relative static sticky| collapse invisible visible|justify- around baseline between center center-safe end end-safe evenly normal start stretch|justify-items- center center-safe end end-safe normal start stretch|justify-self- auto center center-safe end end-safe start stretch|items- baseline baseline-last center center-safe end end-safe start stretch|self- auto baseline baseline-last center center-safe end end-safe start stretch|place-content- around baseline between center center-safe end end-safe evenly start stretch|place-items- baseline center center-safe end end-safe start stretch|place-self- auto center center-safe end end-safe start stretch| antialiased subpixel-antialiased| italic not-italic|normal-nums |ordinal |slashed-zero | lining-nums oldstyle-nums| proportional-nums tabular-nums| diagonal-fractions stacked-fractions| no-underline overline| capitalize lowercase normal-case uppercase|truncate |whitespace- break-spaces normal nowrap pre pre-line pre-wrap|break- all keep normal words|wrap- anywhere break-word normal|hyphens- auto manual none|mix-blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay plus-darker plus-lighter saturation screen soft-light|table- auto fixed|caption- bottom top|backface- hidden visible|appearance- auto none|scheme- dark light light-dark normal only-dark only-light|field-sizing- content fixed|pointer-events- auto none|resize  -none -x -y|snap- align-none center end start|snap- always normal|snap- both none x y|snap- mandatory proximity|touch- auto manipulation none|touch-pan- left right x|touch-pan- down up y|touch-pinch-zoom |select- all auto none text|forced-color-adjust- auto none| normal size| baseline bottom middle sub super text-bottom text-top top|none | auto square video| auto fr max min px| auto full px| fixed local scroll|clip- border content padding text|origin- border content padding| bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| no-repeat repeat repeat-round repeat-space repeat-x repeat-y| auto contain cover| gradient-to-b gradient-to-bl gradient-to-br gradient-to-l gradient-to-r gradient-to-t gradient-to-tl gradient-to-tr none|blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay saturation screen soft-light|to- b bl br l r t tl tr| auto dvh fit full lh lvh max min px screen svh| dashed dotted double hidden none solid| collapse separate|px |auto |full | content none strict| inline-size size|layout |paint |style | around baseline between center center-safe end end-safe evenly normal start stretch| alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out| dashed dotted double solid wavy| auto from-font|reverse |initial | in in-out initial linear out| col col-reverse row row-reverse| nowrap wrap wrap-reverse| auto initial none| black bold extrabold extralight light medium normal semibold thin| condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow- col col-dense dense row row-dense| none subgrid| auto dvh dvw fit full lh lvh lvw max min px screen svh svw| block flex grid table| auto dvw fit full lvw max min px screen svw| loose none normal px relaxed snug tight|through |item | inside outside| decimal disc none| auto px| clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip| add exclude intersect subtract| alpha luminance match|origin- border content fill padding stroke view|type- alpha luminance| circle ellipse| closest-corner closest-side farthest-corner farthest-side|at- bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| dvh fit full lh lvh max min none px screen svh| auto dvh dvw fit full lh lvh lvw max min none px screen svh svw| dvw fit full lvw max min none px screen svw| auto dvh dvw fit full lvh lvw max min none prose px svh svw| auto dvh dvw fit full lvh lvw max min none px screen svh svw| contain cover fill none scale-down| first last none| distant dramatic midrange near none normal|inset | full none|3d | auto smooth|gutter- auto both stable| auto none thin| inner none| auto dvh dvw fit full lvh lvw max min px svh svw|base | center end justify left right start| clip ellipsis| balance nowrap pretty wrap| normal tight tighter wide wider widest| cpu gpu none| 3d flat| all colors none opacity shadow transform| discrete normal| full px| auto dvh dvw fit full lvh lvw max min px screen svh svw| auto contents scroll transform`.split(`|`).map(e=>{let t=e.split(` `),n=t.shift();for(let e=0;e<t.length;e++)t[e]=n+t[e];return t}),yp=ap(`0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4422400002046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422`),bp=ap(`ɠ222222222222222222222222222222222222222222222222222222222222˕4222226>ʶ22ʷʺʷ2ʸʷ42ʴ2ʓ22>621422ɶ222ɹɼɷɺɷɺ22ɱ42222ɨ2ɧ26622ɘɓ244ƸƵ222]d24242ǖǓƚÄȫ2263ȨȥȨ2222222ǣ222222222222222222ǂƽ2ƾƵ2222222422222ƜƑ22222222222222222222144Ŧţ22Ţş222222222222222222222ĸ2ı68ĦģĦɡŰ4Ġ«®ĝ822ĔđĔ2ē2222622`),xp=ap("02222222222222222222222222222222222222222222222222222222222222222203062222222222IL2200IL021042222]`222IL0gj2e50n2222U00X202[^2y0000560|{~22>22|22222222222G000qOVI00000}2>40000B00000I¨­000°00000000000000021Q²±00´000000000000000000000222HGHa5¾222Ã6À2222ÍÐ000­°2±"),Sp=new Int32Array(991),Cp=new Int32Array(991),wp=new Int32Array(991),Tp=``,Ep=new Int32Array(1030);{let e=new Map,t=0,n=0;for(let r=0;r<yp.length;r++)for(let i of vp[xp[r]]){let a=e.get(i);a===void 0&&(a=t++,e.set(i,a),Ep[a*2]=Tp.length,Ep[a*2+1]=i.length,Tp+=i),Sp[n]=yp[r],Cp[n]=bp[r],wp[n]=a,n++}}var Dp=ap(`0b2N:222@R>F@286¦2@H2D266226FB22B2>BD\\6N22222Z222D222p`),Op=ip(rp(`1::22222432:222:22:22>222222:22:2221322511111311111114`)),kp=ap(`24A;33N=C@H4A;33N=C@<2;363@QTQʰ222ˉºŴŽ2R2=18cƴÅŇÜÛŲǝȈ:ħ25=11D3A@216Er25;11B3?<438Cn9@7=<8192>2E121@9@EHE@9>2T25511<398216=V25511<398216=ƧNž2Đå242L222290000f22500ɛ000ǘ222`),Ap=rp(`ĳ`),jp=rp(``),Mp=rp(`1`),Np={GROUP_COUNT:op,customValidatorNames:sp,edgeStart:cp,labelStart:lp,labelText:up,edgeTarget:dp,nodeGroup:fp,nodeVlist:_p,vlistPat:pp,vlistOps:mp,vlistRef:hp,vlistGroup:gp,litAnchor:Sp,litGroup:Cp,litPool:wp,poolOffsets:Ep,poolText:Tp,adjGid:Dp,adjStart:Op,adjTgt:kp,patGid:Ap,patTgt:jp,postfixLookupGroups:Mp,orderSensitiveModifiers:`* ** after backdrop before details-content file first-letter first-line marker placeholder selection`},Pp=`line`in Error(),Fp=-1,Ip=-1,Lp=(e,t,n)=>{let r=2166136261;for(let i=t;i<n;i++)r=Math.imul(r^e.charCodeAt(i),16777619);return r},Rp=(e,t,n)=>{let r=n-t,i=Math.imul(r,2654435761)^e.charCodeAt(t);if(r>3){let a=r>>2,o=r>>1;i=Math.imul(i^e.charCodeAt(t+1)<<8^e.charCodeAt(t+2)<<16^e.charCodeAt(t+a),2246822507),i=Math.imul(i^e.charCodeAt(t+o)<<8^e.charCodeAt(t+o+a)<<16^e.charCodeAt(n-3),3266489909),i^=e.charCodeAt(n-2)<<8^e.charCodeAt(n-1)<<16;for(let r=t+3,a=n-4;r<t+8&&r<a;r++,a--)i=Math.imul(i^e.charCodeAt(r)^e.charCodeAt(a)<<8,16777619)}return i^i>>>15|0},zp=(e,t,n={})=>{let{GROUP_COUNT:r,edgeStart:i,labelStart:a,labelText:o,edgeTarget:s,nodeGroup:c,nodeVlist:l,vlistPat:u,vlistOps:d,vlistRef:f,vlistGroup:p,litAnchor:m,litGroup:h,litPool:g,poolOffsets:_,poolText:v,adjGid:y,adjStart:b,adjTgt:x,patGid:S,patTgt:C,postfixLookupGroups:w,customValidatorNames:T,orderSensitiveModifiers:E}=e,D=new Int32Array(r).fill(-1);for(let e=0;e<y.length;e++)D[y[e]]=e;let O=0;for(let e=0;e+1<b.length;e++){let t=b[e+1]-b[e];t>O&&(O=t)}let k=32;for(;k<2*(1+O+S.length);)k<<=1;let A=new Int32Array(f.length+1);for(let e=0;e<f.length;e++)A[e+1]=A[e]+u[f[e]+1]-u[f[e]];let j=new Uint8Array(r);for(let e=0;e<w.length;e++)j[w[e]]=1;let M=i.length-1,N=new Uint8Array(M),P=0,F=!0;for(let e=0;e<m.length;e++){N[m[e]]=1;let t=_[g[e]*2+1];t>P&&(P=t);let n=v.charCodeAt(_[g[e]*2]);(n===91||n===40)&&(F=!1)}let I=1;for(;I<m.length*2;)I<<=1;let L=new Int32Array(I).fill(-1);for(let e=0;e<m.length;e++){let t=_[g[e]*2],n=(Lp(v,t,t+_[g[e]*2+1])^Math.imul(m[e],2654435761)|0)&I-1;for(;L[n]!==-1;)n=n+1&I-1;L[n]=e}let R=(e,t,n,r)=>{let i=(Lp(t,n,r)^Math.imul(e,2654435761)|0)&I-1,a=r-n;for(;;){let r=L[i];if(r===-1)return-1;if(m[r]===e&&_[g[r]*2+1]===a){let e=_[g[r]*2],i=!0;for(let r=0;r<a;r++)if(v.charCodeAt(e+r)!==t.charCodeAt(n+r)){i=!1;break}if(i)return h[r]}i=i+1&I-1}},z=n.cacheSize??8192,B=n.prefix??e.prefix??``,ee=B===``?``:B+`:`,V=ee.length,te=(T??[]).map(e=>{let n=t&&t[e];if(!n)throw Error(`cn: missing validator `+e);return n}),H=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,U=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ne=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,re=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ie=0,ae=-1,W=-1,oe=-1,se=-1,ce=e=>e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57||e===95,le=e=>/\s/.test(String.fromCharCode(e)),ue=(e,t,n)=>{if(ie=0,ae=-1,n-t<3)return;let r=e.charCodeAt(t),i=e.charCodeAt(n-1);if(r===91&&i===93)ie=1;else if(r===40&&i===41)ie=2;else return;oe=t+1,se=n-1;let a=t+1;if(ce(e.charCodeAt(a))){for(a++;a<n-1;){let t=e.charCodeAt(a);if(!ce(t)&&t!==45)break;a++}a<n-2&&e.charCodeAt(a)===58&&(ae=t+1,W=a,oe=a+1)}},de=(e,t,n,r)=>{if(n-t!==r.length)return!1;for(let n=0;n<r.length;n++)if(e.charCodeAt(t+n)!==r.charCodeAt(n))return!1;return!0},fe=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,pe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,me=e=>!!e&&!Number.isNaN(Number(e)),he=(e,t,n)=>{if(n-t<11||!de(e,t,t+10,`@container`))return!1;if(e.charCodeAt(t+10)===47)return n-t>=12;let r=e.charCodeAt(t+11);return r===115&&n-t>=17&&de(e,t+10,t+16,`-size/`)||r===110&&n-t>=19&&de(e,t+10,t+18,`-normal/`)},ge=[1,1,1,1,1,1,1,1,2,2,2,2,2,2,2],_e=`length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight`.split(`|`).map(e=>e.split(` `)),ve=[2,3,1,0,0,0,4,5,0,0,0,0,0,1,1],ye=(e,t,n,r)=>{if(e>=10){if(e>=25)return te[e-25](t.slice(n,r));let i=e-10;if(ie!==ge[i])return!1;if(ae>=0){for(let e of _e[i])if(de(t,ae,W,e))return!0;return!1}switch(ve[i]){case 0:return!1;case 1:return!0;case 2:{let e=t.slice(oe,se);return H.test(e)&&!U.test(e)}case 3:return me(t.slice(oe,se));case 4:return re.test(t.slice(oe,se));default:return ne.test(t.slice(oe,se))}}switch(e){case 0:return!0;case 1:return ie===0;case 2:return ie===1;case 3:return ie===2;case 4:return fe.test(t.slice(n,r));case 5:return me(t.slice(n,r));case 6:{let e=t.slice(n,r);return!!e&&Number.isInteger(Number(e))}case 7:return r>n&&t.charCodeAt(r-1)===37&&me(t.slice(n,r-1));case 8:return pe.test(t.slice(n,r));default:return he(t,n,r)}},be=new Set(typeof E==`string`?E.split(` `):E),xe=(e,t,n,r,i,a)=>{let o=Lp(t,n,r)^(i?2654435769:0)|0,s=e.get(o);if(s!==void 0)outer:for(let e=0;e<s.length;e++){let a=s[e];if(a.imp===i&&a.k.length===r-n){for(let e=0;e<a.k.length;e++)if(a.k.charCodeAt(e)!==t.charCodeAt(n+e))continue outer;return a.id}}else e.set(o,s=[]);let c=t.slice(n,r),l=a(c);return s.push({k:c,imp:i,id:l}),l},Se=new Map,Ce=new Map,we=2,Te=4096,Ee=(e,t)=>{let n=[],r=0,i=0,a=0;for(let t=0;t<e.length;t++){let o=e.charCodeAt(t);r===0&&i===0&&o===58?(n.push(e.slice(a,t)),a=t+1):o===91?r++:o===93?r--:o===40?i++:o===41&&i--}n.push(e.slice(a));let o=n[0];if(n.length>1){let e=[],t=[];for(let r of n)r.charCodeAt(0)===91||be.has(r)?(t.length&&(e.push(...t.sort()),t=[]),e.push(r)):t.push(r);t.length&&e.push(...t.sort()),o=e.join(`:`)}let s=t?o+` !`:o,c=Ce.get(s);return c===void 0&&Ce.set(s,c=we++),c},De=new Map,Oe=r,ke=r+4096,Ae=()=>Oe++,je=2097152,Me=8192,Ne=new Int32Array(Me),Pe=Array(Me).fill(null),Fe=new Int32Array(Me),Ie=new Int32Array(Me),Le=new Uint8Array(Me),Re=0,ze=(e,t,n,r,i,a,o,s)=>{let c=e;if(Pe[e]!==null){if(Pe[e|1]===null)c=e|1;else if(!(Re++&3))c=e|Re>>2&1;else return}Pe[c]=t.slice(n,r),Ne[c]=i,Fe[c]=a,Ie[c]=o,Le[c]=s},Be=()=>Pe.fill(null),Ve=256,He=[new Int32Array(Ve),new Int32Array(Ve),new Int32Array(Ve),new Int32Array(Ve)],[Ue,We,Ge,Ke]=He,qe=new Uint8Array(Ve),Je=new Uint8Array(Ve),Ye=()=>{Ve*=2,He=He.map(e=>{let t=new Int32Array(Ve);return t.set(e),t}),[Ue,We,Ge,Ke]=He;let e=new Uint8Array(Ve);e.set(qe),qe=e,Je=new Uint8Array(Ve)},Xe=64,Ze=new Int32Array(Xe),Qe=new Int32Array(Xe),$e=new Int32Array(r),et=2048,tt=21,nt=new Float64Array(et),rt=new Int32Array(et),it=0,at=(e,t)=>{if(e===0&&t<r)return $e[t]===it?1:($e[t]=it,0);let n=e*2097152+t+1,i=Math.imul(n,2654435761)>>>tt;for(;rt[i]===it;){if(nt[i]===n)return 1;i=i+1&et-1}return nt[i]=n,rt[i]=it,0},ot=(e,t,n,r,i)=>{if(n-t>=2&&e.charCodeAt(t)===91&&e.charCodeAt(n-1)===93){let r=-1;for(let i=t+1;i<n-1;i++)if(e.charCodeAt(i)===58){r=i;break}return r===-1||r===t+1?Fp:xe(De,e,t+1,r,0,Ae)}if(r>=0&&c[r]>=0)return c[r];for(let t=i-1;t>=0;t--){let r=Qe[t];if(r>n)continue;let i=Ze[t],a=n-r;if(N[i]===1&&a>0&&a<=P){let t=e.charCodeAt(r);if(F===!1||t!==91&&t!==40){let t=R(i,e,r,n);if(t>=0)return t}}let o=l[i];if(o<0)continue;let s=f[o],c=u[s],m=u[s+1];if(c===m)continue;ue(e,r,n);let h=A[o]-c;for(let t=c;t<m;t++)if(ye(d[t],e,r,n))return p[h+t]}return Fp},st=e=>{let t=e.length,n=0,c=0,u=!1;(we>Te||Se.size>Te)&&(Se=new Map,Ce=new Map,we=2,Be()),Oe>ke&&(De=new Map,Oe=r,Be());let d=0;for(;d<t;){let f=e.charCodeAt(d);if(f===32||f>=9&&f<=13||f>=160&&le(f)){f!==32&&(u=!0),d++;continue}let p=d,m=0;for(;d<t;){if(f=e.charCodeAt(d),f<=32){if(f===32)break;if(f>=9&&f<=13){u=!0;break}}else if(f>=160&&le(f)){u=!0;break}m=Math.imul(m^f,16777619),d++}let h=d,g=h-p;n===Ve&&Ye();let _=n++;Ue[_]=p,We[_]=h,c+=g,m^=Math.imul(g,2654435761);let v=m^m>>>15|0,y=v&8190;{let t=-1;if(Ne[y]===v&&Pe[y]!==null&&Pe[y].length===g?t=y:Ne[y|1]===v&&Pe[y|1]!==null&&Pe[y|1].length===g&&(t=y|1),t>=0){let n=Pe[t],r=!0;for(let t=0;t<g;t++)if(n.charCodeAt(t)!==e.charCodeAt(p+t)){r=!1;break}if(r){Ge[_]=Fe[t],Ke[_]=Ie[t],qe[_]=Le[t];continue}}}let b=p;if(V!==0){if(h-p<=V||!e.startsWith(ee,p)){Ge[_]=Fp,ze(y,e,p,h,v,Fp,0,0);continue}b=p+V}let x=0,S=0,C=-1,w=-1;for(let t=b;t<h;t++){let n=e.charCodeAt(t);if(x===0&&S===0){if(n===58){C=t;continue}if(n===47){w=t;continue}}n===91?x++:n===93?x--:n===40?S++:n===41&&S--}let T=C>=b?C+1:b,E=T,D=h,O=!1,k=0;D>E&&e.charCodeAt(D-1)===33?(O=!0,D--):D>E&&e.charCodeAt(E)===33&&(O=!0,E++,k=1);let A=-1;w>T&&(A=w+k,A>=D&&(A=-1));let M=E;D-E>1&&e.charCodeAt(E)===45&&(M=E+1);let P=0,F=0,I=0,L=-1,R=0;(l[0]>=0||N[0]===1)&&(Ze[0]=0,Qe[0]=M,R=1);let z=Ip,B=0;for(let t=M;t<D;t++)if(t===A&&(z=F<I?Ip:P,B=R),P!==Ip){let n=e.charCodeAt(t),r=-1;if(F<I)o.charCodeAt(F)===n?(F++,F===I&&(r=P=L)):P=Ip;else{let e=i[P],t=i[P+1],c=Ip;for(let i=e;i<t;i++){let e=a[i];if(o.charCodeAt(e)===n){a[i+1]-e===1?r=c=s[i]:(F=e+1,I=a[i+1],L=s[i],c=P);break}}P=c}if(r>=0&&(l[r]>=0||N[r]===1)&&t+1<D&&e.charCodeAt(t+1)===45){if(R===Xe){Xe*=2;let e=new Int32Array(Xe);e.set(Ze),Ze=e;let t=new Int32Array(Xe);t.set(Qe),Qe=t}Ze[R]=r,Qe[R]=t+2,R++}}A===D&&(z=F<I?Ip:P,B=R);let te=F<I?Ip:P,H,U=!1;if(A>=0){if(U=!0,H=ot(e,E,A,z,B),H!==Fp&&H<r&&j[H]){let t=ot(e,E,D,te,R);t!==Fp&&t!==H&&(H=t,U=!1)}else H===Fp&&(H=ot(e,E,D,te,R),U=!1)}else H=ot(e,E,D,te,R);let ne=0,re=0;H===Fp?Ge[_]=Fp:(re=+!!U,ne=b>=C?+!!O:xe(Se,e,b,C,+!!O,e=>Ee(e,O)),Ge[_]=H,qe[_]=re,Ke[_]=ne),ze(y,e,p,h,v,H,ne,re)}if(n===0)return``;if(n===1)return Ue[0]===0&&We[0]===t?e:e.slice(Ue[0],We[0]);if(n*k>et){for(;n*k>et;)et<<=1,tt--;nt=new Float64Array(et),rt=new Int32Array(et)}if(we>=je||Oe>=je)throw Error(`cn: too many distinct classes in one merge`);it=it+1|0,it===0&&($e.fill(0),rt.fill(0),it=1);let f=!1;for(let e=n-1;e>=0;e--){let t=Ge[e];if(t===Fp){Je[e]=1;continue}let n=Ke[e];if(at(n,t)===1){Je[e]=0,f=!0;continue}if(Je[e]=1,t<r){let r=D[t];if(r>=0)for(let e=b[r];e<b[r+1];e++)at(n,x[e]);if(qe[e]&1)for(let e=0;e<S.length;e++)S[e]===t&&at(n,C[e])}}if(!f&&!u&&t===c+n-1)return e;let p=``,m=0;for(;m<n;){if(!Je[m]){m++;continue}let t=Ue[m],r=We[m],i=m+1;for(;i<n&&Je[i]&&Ue[i]===r+1&&e.charCodeAt(r)===32;)r=We[i],i++;p.length>0&&(p+=` `),p+=e.slice(t,r),m=i}return p},ct=16384,lt=new Int32Array(ct*2),ut=0,G=1,dt=Object.create(null),ft=Object.create(null),pt=new Map,mt=new Map,ht=0,gt=0,_t=()=>{ut^=ct,G=G+1|0,gt=0},vt=e=>{let t=dt[e];if(t!==void 0)return t;let n=Rp(e,0,e.length),r=(n&16383)+ut,i=lt[r]===(n^G)||lt[r^ct]===(n^G-1);return i&&(t=ft[e],t!==void 0)?(dt[e]=t,t):(t=st(e),i?(dt[e]=t,++ht>z&&(ht=0,ft=dt,dt=Object.create(null),_t())):(lt[r]=n^G,++gt>ct&&_t()),t)},yt=e=>{let t=pt.get(e);if(t!==void 0)return t;let n=Rp(e,0,e.length),r=(n&16383)+ut,i=lt[r]===(n^G)||lt[r^ct]===(n^G-1);return i&&(t=mt.get(e),t!==void 0)?(pt.set(e,t),t):(t=st(e),i?(pt.set(e,t),++ht>z&&(ht=0,mt=pt,pt=new Map,_t())):(lt[r]=n^G,++gt>ct&&_t()),t)},bt=e=>{let t=Rp(e,0,e.length),n=(t&16383)+ut;return lt[n]===(t^G)||lt[n^ct]===(t^G-1)||(lt[n]=t^G,++gt>ct&&_t(),!1)},xt=z===0?st:Pp?e=>{let t=pt.get(e);return t===void 0?yt(e):t}:vt;return{merge:function(){return arguments.length===1&&typeof arguments[0]==`string`?xt(arguments[0]):xt(Hp.apply(null,arguments))},mergeString:xt,seenBefore:z===0?()=>!1:bt,mergeUncached:st}},Bp=(e,t)=>{if(!e)return``;if(typeof e==`string`)return e;let n=``;if(typeof e.length==`number`&&(!t||Array.isArray(e))){let r=e;for(let e=0;e<r.length;e++){let i=r[e];if(!i)continue;let a=typeof i==`string`?i:Bp(i,t);a&&(n&&(n+=` `),n+=a)}return n}if(t){if(typeof e==`number`)return``+e;if(typeof e==`object`)for(let t in e)e[t]&&(n&&(n+=` `),n+=t)}return n},Vp=(e,t)=>{let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(!i)continue;let a=typeof i==`string`?i:Bp(i,t);a&&(n&&(n+=` `),n+=a)}return n},Hp=function(){return Vp(arguments,!1)},Up=(e,t)=>{let n=t===void 0?()=>!0:t.seenBefore,r=t===void 0?e:t.mergeUncached,i=new Map,a=new Map,o=0,s=null,c=(e,t,n,r)=>{let i=0;if(t){if(t!==e.a0)return!1;i=1}if(n){if(n!==(i===0?e.a0:e.a1))return!1;i++}if(r){if(r!==(i===0?e.a0:i===1?e.a1:e.a2))return!1;i++}return i===e.t},l=(e,t)=>{let n=e.a,r=0;for(let e=0;e<t.length;e++){let i=t[e];if(i){if(i!==n[r])return!1;r++}}return r===e.t},u=(t,c)=>{let u=t.length,d=s===null?null:s.n;if(!c){if(d!==null&&l(d,t))return s=d,d.r;if(s!==null&&s!==d&&l(s,t))return s.r}let f=``,p=-1,m=0,h=!1;for(let e=0;e<u;e++){let n=t[e];if(n){if(typeof n!=`string`){if(n=t[e]=Bp(n,!0),!n)continue;h=!0}p<0&&(f=n,p=e),m++}}if(m===0)return``;if(m===1)return e(f);if(h){if(d!==null&&l(d,t))return s=d,d.r;if(s!==null&&s!==d&&l(s,t))return s.r}let g=i.get(f);g===void 0&&(g=a.get(f),g!==void 0&&i.set(f,g));let _=null;if(g!==void 0)outer:for(let e=0;e<g.length;e++){let n=g[e];if(n.t!==m)continue;let r=n.a,i=1;for(let e=p+1;e<u;e++){let n=t[e];if(n&&n!==r[i++])continue outer}_=n;break}if(_===null){let s=f,c=[f];for(let e=p+1;e<u;e++){let n=t[e];n&&(s+=` `+n,c.push(n))}if(!n(s))return r(s);_={r:e(s),t:c.length,a0:c[0],a1:c[1],a2:c[2]??``,a:c,n:null},g===void 0&&i.set(f,g=[]),g.length>=256&&g.shift(),g.push(_),++o>1e3&&(o=0,a=i,i=new Map)}return s!==null&&s!==_&&(s.n=_),s=_,_.r},d=t=>Array.isArray(t)?u(t.slice(),!1):e(Bp(t,!0));return function(t,n,r){let i=arguments.length;if((i|1)==3){let e=s;if(e!==null){let i=e.n;if(i!==null&&c(i,t,n,r))return s=i,i.r;if(e!==i&&c(e,t,n,r))return e.r}return u([t,n,r],!0)}if(i===1)return typeof t==`string`?e(t):d(t);let a=s;if(a!==null){let e=a.n;if(e!==null){let t=e.a,n=0,r=!0;for(let e=0;e<i;e++){let i=arguments[e];if(i){if(i!==t[n]){r=!1;break}n++}}if(r&&n===e.t)return s=e,e.r}if(a!==e){let e=a.a,t=0,n=!0;for(let r=0;r<i;r++){let i=arguments[r];if(i){if(i!==e[t]){n=!1;break}t++}}if(n&&t===a.t)return a.r}}let o=[];for(let e=0;e<i;e++)o.push(arguments[e]);return u(o,!0)}},Wp=zp(Np),Gp=Up(Wp.mergeString,Wp);Wp.merge;function Kp({align:e=`start`,className:t,children:n,...r}){return(0,o.jsxs)(Ad,{"data-slot":`navigation-menu`,className:Gp(`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center`,t),...r,children:[n,(0,o.jsx)(Xp,{align:e})]})}function qp({className:e,...t}){return(0,o.jsx)(df,{"data-slot":`navigation-menu-list`,className:Gp(`group flex flex-1 list-none items-center justify-center gap-0`,e),...t})}function Jp({className:e,...t}){return(0,o.jsx)(mf,{"data-slot":`navigation-menu-item`,className:Gp(`relative`,e),...t})}var Yp=tp(`group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted`);function Xp({className:e,side:t=`bottom`,sideOffset:n=8,align:r=`start`,alignOffset:i=0,...a}){return(0,o.jsx)(Sf,{children:(0,o.jsx)(Gf,{side:t,sideOffset:n,align:r,alignOffset:i,className:Gp(`isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0`,e),...a,children:(0,o.jsx)(Yf,{className:`data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0`,children:(0,o.jsx)(Jf,{className:`relative size-full overflow-hidden`})})})})}function Zp({className:e,...t}){return(0,o.jsx)(Xf,{"data-slot":`navigation-menu-link`,className:Gp(`flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4`,e),...t})}var Qp=[{name:`Acting`,url:`/#acting`},{name:`Tech`,url:`/#tech`},{name:`Committee`,url:`/#committee`},{name:`Mailing Lists`,url:`/#talk`,priority:!0},{name:`Contact`,url:`/#contact`},{name:`Tickets`,url:`/#tickets`,priority:!0}],$p=()=>(0,o.jsx)(`div`,{className:`w-full bg-black text-white`,children:(0,o.jsx)(Kp,{className:`min-w-full`,children:(0,o.jsx)(s,{children:(0,o.jsxs)(`div`,{className:`flex justify-between items-center py-2`,children:[(0,o.jsx)(l,{width:50,className:`sm:w-[75px]! sm:h-[75px]!`}),(0,o.jsx)(qp,{className:`justify-end`,children:Qp.map(e=>(0,o.jsx)(Jp,{className:[e.priority?``:`hidden sm:list-item`].join(` `),children:(0,o.jsx)(Zp,{className:Yp(),render:(0,o.jsx)(a,{to:e.url,children:(0,o.jsx)(`h2`,{className:`font-bold`,children:e.name})})})},e.name))})]})})})});export{ja as n,$p as t};