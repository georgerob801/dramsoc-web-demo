import{J as e,K as t,n,o as r,q as i,t as a}from"./jsx-runtime-C2f9LJXq.js";import{t as o}from"./react-dom-DJVJ5uJY.js";import{t as s}from"./lib-4srF0Wqe.js";import{i as c,n as l,r as u,t as d}from"./dist-gj-amlae.js";var f=e(t(),1);function p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e){if(Array.isArray(e))return e}function h(e){if(Array.isArray(e))return p(e)}function g(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function v(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=M(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function b(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function S(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function C(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?T(Object(n),!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e,t){return m(e)||S(e,t)||M(e,t)||C()}function O(e){return h(e)||x(e)||M(e)||w()}function k(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function A(e){var t=k(e,`string`);return typeof t==`symbol`?t:t+``}function j(e){"@babel/helpers - typeof";return j=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},j(e)}function M(e,t){if(e){if(typeof e==`string`)return p(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}var N=function(){},P={},ee={},F=null,I={mark:N,measure:N};try{typeof window<`u`&&(P=window),typeof document<`u`&&(ee=document),typeof MutationObserver<`u`&&(F=MutationObserver),typeof performance<`u`&&(I=performance)}catch{}var te=(P.navigator||{}).userAgent,L=te===void 0?``:te,R=P,z=ee,ne=F,re=I;R.document;var B=!!z.documentElement&&!!z.head&&typeof z.addEventListener==`function`&&typeof z.createElement==`function`,ie=~L.indexOf(`MSIE`)||~L.indexOf(`Trident/`),ae,oe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,se=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ce={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},le={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ue=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],V=`classic`,de=`duotone`,fe=`sharp`,pe=`sharp-duotone`,me=`chisel`,he=`etch`,ge=`graphite`,_e=`jelly`,ve=`jelly-duo`,ye=`jelly-fill`,be=`mosaic`,xe=`notdog`,Se=`notdog-duo`,Ce=`pixel`,we=`slab`,Te=`slab-duo`,Ee=`slab-press`,De=`slab-press-duo`,Oe=`thumbprint`,ke=`utility`,Ae=`utility-duo`,je=`utility-fill`,Me=`vellum`,Ne=`whiteboard`,Pe=`Classic`,Fe=`Duotone`,Ie=`Sharp`,Le=`Sharp Duotone`,Re=`Chisel`,ze=`Etch`,Be=`Graphite`,Ve=`Jelly`,He=`Jelly Duo`,Ue=`Jelly Fill`,We=`Mosaic`,Ge=`Notdog`,Ke=`Notdog Duo`,qe=`Pixel`,Je=`Slab`,Ye=`Slab Duo`,Xe=`Slab Press`,Ze=`Slab Press Duo`,Qe=`Thumbprint`,$e=`Utility`,et=`Utility Duo`,tt=`Utility Fill`,nt=`Vellum`,rt=`Whiteboard`,it=[V,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne];ae={},b(b(b(b(b(b(b(b(b(b(ae,V,Pe),de,Fe),fe,Ie),pe,Le),me,Re),he,ze),ge,Be),_e,Ve),ve,He),ye,Ue),b(b(b(b(b(b(b(b(b(b(ae,be,We),xe,Ge),Se,Ke),Ce,qe),we,Je),Te,Ye),Ee,Xe),De,Ze),Oe,Qe),ke,$e),b(b(b(b(ae,Ae,et),je,tt),Me,nt),Ne,rt);var at={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},ot={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},st=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),ct={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},lt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ut={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},dt=[`kit`];b(b({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ft={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},pt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},mt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ht={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},gt,_t={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},vt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];gt={},b(b(b(b(b(b(b(b(b(b(gt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),b(b(b(b(b(b(b(b(b(b(gt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),b(b(b(b(gt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),b(b({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var yt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},bt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},xt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},St=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(vt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ct=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],wt=[1,2,3,4,5,6,7,8,9,10],Tt=wt.concat([11,12,13,14,15,16,17,18,19,20]),Et=[].concat(O(Object.keys(bt)),Ct,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY],wt.map(function(e){return`${e}x`}),Tt.map(function(e){return`w-${e}`})),Dt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Ot=`___FONT_AWESOME___`,kt=16,At=`fa`,jt=`svg-inline--fa`,Mt=`data-fa-i2svg`,Nt=`data-fa-pseudo-element`,Pt=`data-fa-pseudo-element-pending`,Ft=`data-prefix`,It=`data-icon`,Lt=`fontawesome-i2svg`,Rt=`async`,zt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Bt=[`::before`,`::after`,`:before`,`:after`],Vt=function(){try{return!0}catch{return!1}}();function Ht(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[V]}})}var Ut=E({},ce);Ut[V]=E(E(E(E({},{"fa-duotone":`duotone`}),ce[V]),ut.kit),ut[`kit-duotone`]);var Wt=Ht(Ut),Gt=E({},ct);Gt[V]=E(E(E(E({},{duotone:`fad`}),Gt[V]),ht.kit),ht[`kit-duotone`]);var Kt=Ht(Gt),qt=E({},xt);qt[V]=E(E({},qt[V]),mt.kit);var Jt=Ht(qt),Yt=E({},yt);Yt[V]=E(E({},Yt[V]),ft.kit),Ht(Yt);var Xt=oe,Zt=`fa-layers-text`,Qt=se;Ht(E({},at));var $t=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],en=le,tn=[].concat(O(dt),O(Et)),nn=R.FontAwesomeConfig||{};function rn(e){var t=z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function an(e){return e===``?!0:e===`false`?!1:e===`true`||e}z&&typeof z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=D(e,2),n=t[0],r=t[1],i=an(rn(n));i!=null&&(nn[r]=i)});var on={styleDefault:`solid`,familyDefault:V,cssPrefix:At,replacementClass:jt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nn.familyPrefix&&(nn.cssPrefix=nn.familyPrefix);var sn=E(E({},on),nn);sn.autoReplaceSvg||(sn.observeMutations=!1);var H={};Object.keys(on).forEach(function(e){Object.defineProperty(H,e,{enumerable:!0,set:function(t){sn[e]=t,cn.forEach(function(e){return e(H)})},get:function(){return sn[e]}})}),Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){sn.cssPrefix=e,cn.forEach(function(e){return e(H)})},get:function(){return sn.cssPrefix}}),R.FontAwesomeConfig=H;var cn=[];function ln(e){return cn.push(e),function(){cn.splice(cn.indexOf(e),1)}}var un=kt,dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fn(e){if(e&&B){var t=z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return z.head.insertBefore(t,r),e}}var pn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function mn(){for(var e=12,t=``;e-->0;)t+=pn[Math.random()*62|0];return t}function hn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gn(e){return e.classList?hn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function _n(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${_n(e[n])}" `},``).trim()}function yn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function bn(e){return e.size!==dn.size||e.x!==dn.x||e.y!==dn.y||e.rotate!==dn.rotate||e.flipX||e.flipY}function xn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Sn(e){var t=e.transform,n=e.width,r=n===void 0?kt:n,i=e.height,a=i===void 0?kt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&ie?`translate(${t.x/un-r/2}em, ${t.y/un-a/2}em) `:s?`translate(calc(-50% + ${t.x/un}em), calc(-50% + ${t.y/un}em)) `:`translate(${t.x/un}em, ${t.y/un}em) `,c+=`scale(${t.size/un*(t.flipX?-1:1)}, ${t.size/un*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Cn=`:root, :host {
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
}`;function wn(){var e=At,t=jt,n=H.cssPrefix,r=H.replacementClass,i=Cn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Tn=!1;function En(){H.autoAddCss&&!Tn&&(fn(wn()),Tn=!0)}var Dn={mixout:function(){return{dom:{css:wn,insertCss:En}}},hooks:function(){return{beforeDOMElementCreation:function(){En()},beforeI2svg:function(){En()}}}},On=R||{};On[Ot]||(On[Ot]={}),On[Ot].styles||(On[Ot].styles={}),On[Ot].hooks||(On[Ot].hooks={}),On[Ot].shims||(On[Ot].shims=[]);var kn=On[Ot],An=[],jn=function(){z.removeEventListener(`DOMContentLoaded`,jn),Mn=1,An.map(function(e){return e()})},Mn=!1;B&&(Mn=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Mn||z.addEventListener(`DOMContentLoaded`,jn));function Nn(e){B&&(Mn?setTimeout(e,0):An.push(e))}function Pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?_n(e):`<${t} ${vn(r)}>${a.map(Pn).join(``)}</${t}>`}function Fn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var In=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Ln=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:In(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Rn(e){return O(e).length===1?e.codePointAt(0).toString(16):null}function zn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Bn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=zn(t);typeof kn.hooks.addPack==`function`&&!r?kn.hooks.addPack(e,zn(t)):kn.styles[e]=E(E({},kn.styles[e]||{}),i),e===`fas`&&Bn(`fa`,t)}var Vn=kn.styles,Hn=kn.shims,Un=Object.keys(Jt),Wn=Un.reduce(function(e,t){return e[t]=Object.keys(Jt[t]),e},{}),Gn=null,Kn={},qn={},Jn={},Yn={},Xn={};function Zn(e){return~tn.indexOf(e)}function Qn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Zn(i)?i:null}var $n=function(){var e=function(e){return Ln(Vn,function(t,n,r){return t[r]=Ln(n,e,{}),t},{})};Kn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),qn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Xn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Vn||H.autoFetchSvg,n=Ln(Hn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Jn=n.names,Yn=n.unicodes,Gn=cr(H.styleDefault,{family:H.familyDefault})};ln(function(e){Gn=cr(e.styleDefault,{family:H.familyDefault})}),$n();function er(e,t){return(Kn[e]||{})[t]}function tr(e,t){return(qn[e]||{})[t]}function nr(e,t){return(Xn[e]||{})[t]}function rr(e){return Jn[e]||{prefix:null,iconName:null}}function ir(e){var t=Yn[e],n=er(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function ar(){return Gn}var or=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=V,n=Un.reduce(function(e,t){return e[t]=`${H.cssPrefix}-${t}`,e},{});return it.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Wn[r].includes(e)}))&&(t=r)}),t}function cr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?V:t,r=Wt[n][e];if(n===de&&!e)return`fad`;var i=Kt[n][e]||Kt[n][r],a=e in kn.styles?e:null;return i||a||null}function lr(e){var t=[],n=null;return e.forEach(function(e){var r=Qn(H.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function ur(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var dr=St.concat(lt);function fr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=ur(e.filter(function(e){return dr.includes(e)})),a=ur(e.filter(function(e){return!dr.includes(e)})),o=D(i.filter(function(e){return r=e,!ue.includes(e)}),1)[0],s=o===void 0?null:o,c=sr(i),l=E(E({},lr(a)),{},{prefix:cr(s,{family:c})});return E(E(E({},l),gr({values:e,family:c,styles:Vn,config:H,canonical:l,givenPrefix:r})),pr(n,r,l))}function pr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?rr(i):{},o=nr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Vn.far&&Vn.fas&&!H.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var mr=it.filter(function(e){return e!==V||e!==de}),hr=Object.keys(xt).filter(function(e){return e!==V}).map(function(e){return Object.keys(xt[e])}).flat();function gr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===de,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&mr.includes(n)&&(Object.keys(s).find(function(e){return hr.includes(e)})||l.autoFetchSvg)&&(r.prefix=st.get(n).defaultShortPrefixId,r.iconName=nr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=ar()||`fas`),r}var _r=function(){function e(){g(this,e),this.definitions={}}return v(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=E(E({},e.definitions[n]||{}),t[n]),Bn(n,t[n]);var r=Jt[V][n];r&&Bn(r,t[n]),$n()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),vr=[],yr={},br={},xr=Object.keys(br);function Sr(e,t){var n=t.mixoutsTo;return vr=e,yr={},Object.keys(br).forEach(function(e){xr.indexOf(e)===-1&&delete br[e]}),vr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),j(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){yr[e]||(yr[e]=[]),yr[e].push(r[e])})}e.provides&&e.provides(br)}),n}function Cr(e,t){var n=[...arguments].slice(2);return(yr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function wr(e){var t=[...arguments].slice(1);(yr[e]||[]).forEach(function(e){e.apply(null,t)})}function Tr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function Er(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||ar();if(t)return t=nr(n,t)||t,Fn(Dr.definitions,n,t)||Fn(kn.styles,n,t)}var Dr=new _r,U={noAuto:function(){H.autoReplaceSvg=!1,H.observeMutations=!1,wr(`noAuto`)},config:H,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(wr(`beforeI2svg`,e),Tr(`pseudoElements2svg`,e),Tr(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Nn(function(){Or({autoReplaceSvgRoot:t}),wr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(j(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=cr(e[0]);return{prefix:n,iconName:nr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${H.cssPrefix}-`)>-1||e.match(Xt))){var r=fr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||ar(),iconName:nr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=ar();return{prefix:i,iconName:nr(i,e)||e}}}},library:Dr,findIconDefinition:Er,toHtml:Pn},Or=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?z:e;(Object.keys(kn.styles).length>0||H.autoFetchSvg)&&B&&H.autoReplaceSvg&&U.dom.i2svg({node:t})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Pn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var t=z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Ar(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(bn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=yn(E(E({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function jr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${H.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:E(E({},i),{},{id:o}),children:r}]}]}function Mr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Nr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[H.replacementClass,a?`${H.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:E(E({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Mr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Mt]=``);var _=E(E({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E({},l.styles)}),v=r.found&&n.found?Tr(`generateAbstractMask`,_)||{children:[],attributes:{}}:Tr(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?jr(_):Ar(_)}function Pr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=E(E({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Mt]=``);var l=E({},a.styles);bn(i)&&(l.transform=Sn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=yn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Fr(e){var t=e.content,n=e.extra,r=E(E({},n.attributes),{},{class:n.classes.join(` `)}),i=yn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Ir=kn.styles;function Lr(e){var t=e[0],n=e[1],r=D(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${H.cssPrefix}-${en.GROUP}`},children:[{tag:`path`,attributes:{class:`${H.cssPrefix}-${en.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${H.cssPrefix}-${en.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Rr={found:!1,width:512,height:512};function zr(e,t){!Vt&&!H.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Br(e,t){var n=t;return t===`fa`&&H.styleDefault!==null&&(t=ar()),new Promise(function(r,i){if(n===`fa`){var a=rr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ir[t]&&Ir[t][e]){var o=Ir[t][e];return r(Lr(o))}zr(e,t),r(E(E({},Rr),{},{icon:H.showMissingIcons&&e&&Tr(`missingIconAbstract`)||{}}))})}var Vr=function(){},Hr=H.measurePerformance&&re&&re.mark&&re.measure?re:{mark:Vr,measure:Vr},Ur=`FA "7.3.1"`,Wr=function(e){return Hr.mark(`${Ur} ${e} begins`),function(){return Gr(e)}},Gr=function(e){Hr.mark(`${Ur} ${e} ends`),Hr.measure(`${Ur} ${e}`,`${Ur} ${e} begins`,`${Ur} ${e} ends`)},Kr={begin:Wr,end:Gr},qr=function(){};function Jr(e){return typeof(e.getAttribute?e.getAttribute(Mt):null)==`string`}function Yr(e){var t=e.getAttribute?e.getAttribute(Ft):null,n=e.getAttribute?e.getAttribute(It):null;return t&&n}function Xr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(H.replacementClass)}function Zr(){return H.autoReplaceSvg===!0?ni.replace:ni[H.autoReplaceSvg]||ni.replace}function Qr(e){return z.createElementNS(`http://www.w3.org/2000/svg`,e)}function $r(e){return z.createElement(e)}function ei(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Qr:$r:t;if(typeof e==`string`)return z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(ei(e,{ceFn:n}))}),r}function ti(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var ni={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(ei(e),t)}),t.getAttribute(Mt)===null&&H.keepOriginalSource){var n=z.createComment(ti(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~gn(t).indexOf(H.replacementClass))return ni.replace(e);var r=RegExp(`${H.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===H.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Pn(e)}).join(`
`);t.setAttribute(Mt,``),t.innerHTML=a}};function ri(e){e()}function ii(e,t){var n=typeof t==`function`?t:qr;if(e.length===0)n();else{var r=ri;H.mutateApproach===Rt&&(r=R.requestAnimationFrame||ri),r(function(){var t=Zr(),r=Kr.begin(`mutate`);e.map(t),r(),n()})}}var ai=!1;function oi(){ai=!0}function si(){ai=!1}var ci=null;function li(e){if(ne&&H.observeMutations){var t=e.treeCallback,n=t===void 0?qr:t,r=e.nodeCallback,i=r===void 0?qr:r,a=e.pseudoElementsCallback,o=a===void 0?qr:a,s=e.observeMutationsRoot,c=s===void 0?z:s;ci=new ne(function(e){if(!ai){var t=ar();hn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Jr(e.addedNodes[0])&&(H.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&H.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Jr(e.target)&&~$t.indexOf(e.attributeName)){if(e.attributeName===`class`&&Yr(e.target)){var r=fr(gn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ft,a||t),s&&e.target.setAttribute(It,s)}else Xr(e.target)&&i(e.target)}})}}),B&&ci.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ui(){ci&&ci.disconnect()}function di(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function fi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=fr(gn(e));return i.prefix||=ar(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=tr(i.prefix,e.innerText)||er(i.prefix,Rn(e.innerText))),!i.iconName&&H.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function pi(e){return hn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function mi(){return{iconName:null,prefix:null,transform:dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fi(e),r=n.iconName,i=n.prefix,a=n.rest,o=pi(e),s=Cr(`parseNodeAttributes`,{},e);return E({iconName:r,prefix:i,transform:dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?di(e):[],attributes:o}},s)}var gi=kn.styles;function _i(e){var t=H.autoReplaceSvg===`nest`?hi(e,{styleParser:!1}):hi(e);return~t.extra.classes.indexOf(Zt)?Tr(`generateLayersText`,e,t):Tr(`generateSvgReplacementMutation`,e,t)}function vi(){return[].concat(O(lt),O(St))}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=z.documentElement.classList,r=function(e){return n.add(`${Lt}-${e}`)},i=function(e){return n.remove(`${Lt}-${e}`)},a=H.autoFetchSvg?vi():ue.concat(Object.keys(gi));a.includes(`fa`)||a.push(`fa`);var o=[`.${Zt}:not([${Mt}])`].concat(a.map(function(e){return`.${e}:not([${Mt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=hn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Kr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=_i(t);n&&e.push(n)}catch(e){Vt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ii(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_i(e).then(function(e){e&&ii([e],t)})}function xi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Er(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Er(i||{}),e(r,E(E({},n),{},{mask:i}))}}var Si=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?dn:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return kr(E({type:`icon`},e),function(){return wr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Nr({icons:{main:Lr(v),mask:s?Lr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:E(E({},dn),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ci={mixout:function(){return{icon:xi(Si)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=yi,e.nodeCallback=bi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?z:t,r=e.callback;return yi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Br(n,r),o.iconName?Br(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=D(o,2),u=l[0],d=l[1];t([e,Nr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=yn(a);o.length>0&&(n.style=o);var s;return bn(i)&&(s=Tr(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},wi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return kr({type:`layer`},function(){wr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${H.cssPrefix}-layers`].concat(O(r)).join(` `)},children:n}]})}}}},Ti={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return kr({type:`counter`,content:e},function(){return wr(`beforeDOMElementCreation`,{content:e,params:t}),Fr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-counter`].concat(O(a))}})})}}}},Ei={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?dn:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return kr({type:`text`,content:e},function(){return wr(`beforeDOMElementCreation`,{content:e,params:t}),Pr({content:e,transform:E(E({},dn),r),extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-text`].concat(O(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ie){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Pr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Di=RegExp(`"`,`ug`),Oi=[1105920,1112319],ki=E(E(E(E({},{FontAwesome:{normal:`fas`,400:`fas`}}),ot),Dt),pt),Ai=Object.keys(ki).reduce(function(e,t){return e[t.toLowerCase()]=ki[t],e},{}),ji=Object.keys(Ai).reduce(function(e,t){var n=Ai[t];return e[t]=n[900]||O(Object.entries(n))[0][1],e},{});function Mi(e){return Rn(O(e.replace(Di,``))[0]||``)}function Ni(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Di,``),r=n.codePointAt(0),i=r>=Oi[0]&&r<=Oi[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Pi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ai[n]||{})[i]||ji[n]}function Fi(e,t){var n=`${Pt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=hn(e.children).filter(function(e){return e.getAttribute(Nt)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Qt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Pi(s,l),p=Mi(d),m=c[0].startsWith(`FontAwesome`),h=Ni(o),g=er(f,p),_=g;if(m){var v=ir(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ft)!==f||a.getAttribute(It)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=mi(),b=y.extra;b.attributes[Nt]=t,Br(g,f).then(function(i){var a=Nr(E(E({},y),{},{icons:{main:i,mask:or()},prefix:f,iconName:_,extra:b,watchable:!0})),o=z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Pn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ii(e){return Promise.all([Fi(e,`::before`),Fi(e,`::after`)])}function Li(e){return e.parentNode!==document.head&&!~zt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Ri=function(e){return!!e&&Bt.some(function(t){return e.includes(t)})},zi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=y(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ri(a)){var o=Bt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(B){var n;if(t)n=e;else if(H.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=y(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=y(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=y(zi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){H.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=hn(n).filter(Li).map(Ii),i=Kr.begin(`searchPseudoElements`);oi(),Promise.all(r).then(function(){i(),si(),e()}).catch(function(){i(),si(),t()})})}}var Vi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Bi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?z:t;H.searchPseudoElements&&Bi(n)}}},Hi=!1,Ui={mixout:function(){return{dom:{unwatch:function(){oi(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){li(Cr(`mutationObserverCallbacks`,{}))},noAuto:function(){ui()},watch:function(e){var t=e.observeMutationsRoot;Hi?si():li(Cr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Wi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Gi={mixout:function(){return{parse:{transform:function(e){return Wi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Wi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:E({},a.outer),children:[{tag:`g`,attributes:E({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:E(E({},t.icon.attributes),a.path)}]}]}}}},Ki={x:0,y:0,width:`100%`,height:`100%`};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ji(e){return e.tag===`g`?e.children:[e]}Sr([Dn,Ci,wi,Ti,Ei,Vi,Ui,Gi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?fr(n.split(` `).map(function(e){return e.trim()})):or();return r.prefix||=ar(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=xn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:E(E({},Ki),{},{fill:`white`})},p=c.children?{children:c.children.map(qi)}:{},m={tag:`g`,attributes:E({},d.inner),children:[qi(E({tag:c.tag,attributes:E(E({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:E({},d.outer),children:[m]},g=`mask-${a||mn()}`,_=`clip-${a||mn()}`,v={tag:`mask`,attributes:E(E({},Ki),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ji(u)},v]};return t.push(y,{tag:`rect`,attributes:E({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ki)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:E(E({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=E(E({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:E(E({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:E(E({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:E(E({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:U}),U.noAuto;var Yi=U.config;U.library,U.dom;var Xi=U.parse;U.findIconDefinition,U.toHtml;var Zi=U.icon;U.layer,U.text,U.counter;var W=a();function Qi(e){return e-=0,e===e}function $i(e){return Qi(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var ea=(e,t)=>f.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function ta(e){return e.charAt(0).toUpperCase()+e.slice(1)}var na=new Map,ra=1e3;function ia(e){if(na.has(e))return na.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=$i(n);t[e.startsWith(`webkit`)?ta(e):e]=r}}}n=a+1}if(na.size===ra){let e=na.keys().next().value;e&&na.delete(e)}return na.set(e,t),t}function aa(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),aa(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=ia(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[$i(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(ea)))}return e(t.tag,{...a,...u},...r)}var oa=aa.bind(null,f.createElement),sa=(e,t)=>{let n=(0,f.useId)();return e||(t?n:void 0)},ca=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var la=`searchPseudoElementsFullScan`in Yi&&typeof Yi.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,ua=Number.parseInt(la)>=7,da=()=>ua,fa=`fa`,G={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},pa={left:`fa-pull-left`,right:`fa-pull-right`},ma={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},ha={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},ga={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},_a={default:`fa-layers`};function va(e){let t=Yi.cssPrefix||Yi.familyPrefix||fa;return t===fa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${fa}-`,`g`),`${t}-`)}function ya(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:T,spinSnap:E,spinSnap4:D,spinSnap8:O,swing:k,wag:A,className:j}=e,M=[];return j&&M.push(...j.split(` `)),t&&M.push(G.beat),n&&M.push(G.fade),r&&M.push(G.beatFade),i&&M.push(G.bounce),a&&M.push(G.shake),o&&M.push(G.spin),c&&M.push(G.spinReverse),s&&M.push(G.spinPulse),l&&M.push(G.pulse),u&&M.push(ga.fixedWidth),d&&M.push(ga.inverse),f&&M.push(ga.border),p===!0&&M.push(ga.flip),(p===`horizontal`||p===`both`)&&M.push(ga.flipHorizontal),(p===`vertical`||p===`both`)&&M.push(ga.flipVertical),m!=null&&M.push(ha[m]),h!=null&&h!==0&&M.push(ma[h]),g!=null&&M.push(pa[g]),_&&M.push(ga.swapOpacity),da()?(v&&M.push(ga.rotateBy),y&&M.push(ga.widthAuto),b&&M.push(ga.canvasSquare),x&&M.push(ga.canvasRoomy),S&&M.push(G.flip360),C&&M.push(G.buzz),w&&M.push(G.float),T&&M.push(G.jello),E&&M.push(G.spinSnap),D&&M.push(G.spinSnap4),O&&M.push(G.spinSnap8),k&&M.push(G.swing),A&&M.push(G.wag),(Yi.cssPrefix||Yi.familyPrefix||fa)===fa?M:M.map(va)):M}var ba=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function xa(e){if(e)return ba(e)?e:Xi.icon(e)}function Sa(e){return Object.keys(e)}var Ca=new ca(`FontAwesomeIcon`),wa={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Ta=new Set(Object.keys(wa)),Ea=f.forwardRef((e,t)=>{let n={...wa,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=sa(c,!!i),d=sa(s,!!o),f=xa(r);if(!f)return Ca.error(`Icon lookup is undefined`,r),null;let p=ya(n),m=typeof l==`string`?Xi.transform(l):l,h=xa(i),g=Zi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Ca.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Sa(n))Ta.has(e)||(v[e]=n[e]);return oa(_[0],v)});Ea.displayName=`FontAwesomeIcon`,`${_a.default}${ga.fixedWidth}`;var Da={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},Oa={prefix:`fab`,iconName:`tiktok`,icon:[448,512,[],`e07b`,`M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z`]},ka={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},Aa=({useDark:e,...t})=>(0,W.jsx)(u,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/imperial.svg`})}),ja=({useDark:e,...t})=>(0,W.jsx)(u,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/union.png`})}),Ma=({useDark:e,...t})=>(0,W.jsx)(u,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/comus.png`})}),Na=[{icon:ka,url:`//instagram.com/ic_dramsoc`},{icon:Da,url:`//www.facebook.com/dramsoc`},{icon:Oa,url:`//www.tiktok.com/@ic_dramsoc`}],Pa=[{name:`Hire Terms and Consitutions`,url:`/static/files/hire_terms_and_conditions.pdf`},{name:`Constitution`,url:`/static/files/constitution.pdf`},{name:`Bye Laws`,url:`/static/files/bye_laws.pdf`},{name:`Data Protection`,url:`/static/files/data_protection_policy.pdf`},{name:`Debtor Policy`,url:`/static/files/debtor_policy.pdf`},{name:`Ticketing Policy`,url:`/policy/ticketing`},{name:`Privacy Notice`,url:`/static/files/privacy_notice.pdf`}],Fa=[{name:`Committee Meeting Minutes`,url:`//drive.google.com/drive/folders/1k5JOO6hJiYjPn8yoFymKMHEBGHtOoada`},{name:`Past Committees`,url:`//wiki.dramsoc.org/Category:Committee`},{name:`Past Shows`,url:`//wiki.dramsoc.org/Events`},{name:`Winters`,url:`//wiki.dramsoc.org/Winters`},{name:`Horde`,url:`//horde.dramsoc.org/`},{name:`Wiki`,url:`//wiki.dramsoc.org/`}],Ia=()=>(0,W.jsx)(`div`,{className:`bg-black text-white w-full py-5 [&_a]:hover:opacity-70 **:transition-opacity`,children:(0,W.jsxs)(c,{children:[(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-6 [&_.flex]:gap-3`,children:[(0,W.jsxs)(`div`,{className:`flex flex-col grow`,children:[(0,W.jsx)(l,{width:75}),(0,W.jsx)(`p`,{children:`Est. 1912`}),(0,W.jsx)(`div`,{className:`flex`,children:Na.map(e=>(0,W.jsx)(s,{to:e.url,target:`_blank`,children:(0,W.jsx)(Ea,{icon:e.icon,fontSize:20,style:{transform:`translateX(-3px)`}})},e.url))})]}),(0,W.jsxs)(`div`,{className:`flex flex-col grow items-end md:items-start [&_p]:text-right [&_p]:md:text-left`,children:[(0,W.jsx)(`div`,{children:(0,W.jsx)(s,{to:`tel:+442075948102`,children:(0,W.jsx)(`p`,{children:`+44 (0) 20 759 48102`})})}),(0,W.jsx)(`div`,{children:(0,W.jsx)(s,{to:`https://maps.app.goo.gl/wFEc4Y3T66jhwqZj7`,target:`_blank`,children:(0,W.jsxs)(`p`,{children:[`Imperial College Dramatic Society`,(0,W.jsx)(`br`,{}),`Imperial College Union`,(0,W.jsx)(`br`,{}),`Beit Qudrangle`,(0,W.jsx)(`br`,{}),`Prince Consort Road`,(0,W.jsx)(`br`,{}),`South Kensington`,(0,W.jsx)(`br`,{}),`London`,(0,W.jsx)(`br`,{}),`SW7 2BB`]})})})]}),[Pa,Fa].map((e,t)=>(0,W.jsx)(`div`,{className:`grow flex flex-col gap-2! ${t%2?`items-end md:items-start text-right md:text-left`:``}`,children:e.map(e=>(0,W.jsx)(`div`,{children:(0,W.jsx)(s,{to:e.url,target:`_blank`,children:e.name})},e.name))})),(0,W.jsxs)(`div`,{className:`flex flex-col gap-6! justify-between`,children:[(0,W.jsxs)(`div`,{className:`flex flex-col gap-6!`,children:[(0,W.jsx)(s,{to:`//imperial.ac.uk`,target:`_blank`,children:(0,W.jsx)(Aa,{})}),(0,W.jsx)(s,{to:`//imperialcollegeunion.org`,target:`_blank`,children:(0,W.jsx)(ja,{width:100})})]}),(0,W.jsx)(s,{to:`//comus.org.uk`,target:`_blank`,children:(0,W.jsx)(Ma,{width:50})})]})]}),(0,W.jsxs)(`div`,{className:`text-center mt-8 text-gray-500`,children:[(0,W.jsxs)(`p`,{children:[`DramSoc is a part of Imperial College Union which is a`,` `,(0,W.jsx)(s,{to:`//register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5033166`,children:`UK Registered Charity, Number 1151241`})]}),(0,W.jsxs)(`p`,{children:[`Copyright © `,new Date().getFullYear(),` Imperial College Dramatic Society`]})]})]})});function La(){return typeof window<`u`}function K(e){return za(e)?(e.nodeName||``).toLowerCase():`#document`}function q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ra(e){return((za(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function za(e){return La()?e instanceof Node||e instanceof q(e).Node:!1}function J(e){return La()?e instanceof Element||e instanceof q(e).Element:!1}function Y(e){return La()?e instanceof HTMLElement||e instanceof q(e).HTMLElement:!1}function Ba(e){return!La()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof q(e).ShadowRoot}function Va(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Qa(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ha(e){return/^(table|td|th)$/.test(K(e))}function Ua(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Wa=/transform|translate|scale|rotate|perspective|filter/,Ga=/paint|layout|strict|content/,Ka=e=>!!e&&e!==`none`,qa;function Ja(e){let t=J(e)?Qa(e):e;return Ka(t.transform)||Ka(t.translate)||Ka(t.scale)||Ka(t.rotate)||Ka(t.perspective)||!Xa()&&(Ka(t.backdropFilter)||Ka(t.filter))||Wa.test(t.willChange||``)||Ga.test(t.contain||``)}function Ya(e){let t=eo(e);for(;Y(t)&&!Za(t);){if(Ja(t))return t;if(Ua(t))return null;t=eo(t)}return null}function Xa(){return qa??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),qa}function Za(e){return/^(html|body|#document)$/.test(K(e))}function Qa(e){return q(e).getComputedStyle(e)}function $a(e){return J(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function eo(e){if(K(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ba(e)&&e.host||Ra(e);return Ba(t)?t.host:t}function to(e){let t=eo(e);return Za(t)?(e.ownerDocument||e).body:Y(t)&&Va(t)?t:to(t)}function no(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=to(e),i=r===e.ownerDocument?.body,a=q(r);if(i){let e=ro(a);return t.concat(a,a.visualViewport||[],Va(r)?r:[],e&&n?no(e):[])}return t.concat(r,no(r,[],n))}function ro(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function io({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=f.useRef(e!==void 0),[a,o]=f.useState(t);return[i&&e!==void 0?e:a,f.useCallback(e=>{i||o(e)},[])]}var ao={...f},oo={};function so(e,t){let n=f.useRef(oo);return n.current===oo&&(n.current=e(t)),n}var co=ao.useInsertionEffect,lo=co&&co!==ao.useLayoutEffect?co:e=>e();function X(e){let t=so(uo).current;return t.next=e,lo(t.effect),t.trampoline}function uo(){let e={next:void 0,callback:fo,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function fo(){}var Z=typeof document<`u`?f.useLayoutEffect:()=>{};function po(e){return e?.ownerDocument||document}function mo(){}var ho=Object.freeze([]),go=Object.freeze({});function _o(e){f.useEffect(e,ho)}var vo=0,yo=class e{static create(){return new e}currentId=vo;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=vo,t()},e)}isStarted(){return this.currentId!==vo}clear=()=>{this.currentId!==vo&&(clearTimeout(this.currentId),this.currentId=vo)};disposeEffect=()=>this.clear};function bo(){let e=so(yo.create).current;return _o(e.disposeEffect),e}function xo(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:So,platform:Co,maxTouchPoints:wo}=xo(),To=So.toLowerCase(),Eo=Co.toLowerCase(),Do=/^i(os$|p)/.test(Eo)||Eo===`macintel`&&wo>1,Oo=`android`,ko=Eo===Oo||To.includes(Oo),Ao=!Do&&Eo.startsWith(`mac`);Eo.startsWith(`win`),!ko&&/^(linux|chrome os)/.test(Eo);var jo=Ao||Do,Mo=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!Mo&&To.includes(`firefox`),!Mo&&To.includes(`chrom`);var No=jo;function Po(e){return`nativeEvent`in e}function Fo(e){return e.pointerType===``&&e.isTrusted?!0:ko&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function Io(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function Lo(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}function Ro(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function Q(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&Ba(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function zo(e){return`composedPath`in e?e.composedPath()[0]??e.target:e.target}var Bo=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,Vo=`data-starting-style`,Ho=`data-ending-style`,Uo={[Vo]:``},Wo={[Ho]:``},Go={transitionStatus(e){return e===`starting`?Uo:e===`ending`?Wo:null}},Ko=`data-open`,qo=`data-closed`,Jo=`data-anchor-hidden`,Yo={[Ko]:``},Xo={[qo]:``},Zo={[Jo]:``},Qo={open(e){return e?Yo:Xo},anchorHidden(e){return e?Zo:null}},$o={...Qo,...Go},es=`data-trigger-disabled`;function ts(e,t){if(!J(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(es);for(let[,e]of t.entries())if(Q(e,n))return!e.hasAttribute(es);return!1}function ns(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function rs(e){return e.matches(`html,body`)}function is(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${Bo}`)!=null}function as(e,t){return t!=null&&!Io(t)?0:typeof e==`function`?e():e}function os(e,t,n){let r=as(e,n);return typeof r==`number`?r:r?.[t]}function ss(e,t){return t||e===`click`||e===`mousedown`}function cs(e){return e?.includes(`mouse`)&&e!==`mousedown`}var ls=`trigger-press`,us=`trigger-hover`,ds=`outside-press`,fs=`link-press`,ps=`focus-out`,ms=`escape-key`;function hs(e,t,n,r){let i=!1,a=!1,o=r??go;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function gs(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function _s(e,t,n,r){let i=so(ys).current;return bs(i,e,t,n,r)&&Ss(i,[e,t,n,r]),i.callback}function vs(e){let t=so(ys).current;return xs(t,e)&&Ss(t,e),t.callback}function ys(){return{callback:null,cleanup:null,refs:[]}}function bs(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function xs(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function Ss(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null}}}}}}function Cs(e){let t=so(ws,e).current;return t.next=e,Z(t.effect),t}function ws(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Ts=null;globalThis.requestAnimationFrame;var Es=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||this.callbacks[t]!==null&&(this.callbacks[t]=null,--this.callbacksCount)}},Ds=class e{static create(){return new e}static request(e){return Es.request(e)}static cancel(e){return Es.cancel(e)}currentId=Ts;request(e){this.cancel(),this.currentId=Es.request(()=>{this.currentId=Ts,e()})}cancel=()=>{this.currentId!==Ts&&(Es.cancel(this.currentId),this.currentId=Ts)};disposeEffect=()=>this.cancel};function Os(){let e=so(Ds.create).current;return _o(e.disposeEffect),e}var ks={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},As={...ks,position:`fixed`,top:0,left:0};({...ks});var js=f.forwardRef(function(e,t){let[n,r]=f.useState();Z(()=>{No&&Mo&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,W.jsx)(`span`,{...e,ref:t,style:As,"aria-hidden":!n||void 0,...i,"data-base-ui-focus-guard":``})}),Ms=Math.min,Ns=Math.max,Ps=Math.round,Fs=Math.floor,Is=e=>({x:e,y:e}),Ls={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Rs(e,t,n){return Ns(e,Ms(t,n))}function zs(e,t){return typeof e==`function`?e(t):e}function Bs(e){return e.split(`-`)[0]}function Vs(e){return e.split(`-`)[1]}function Hs(e){return e===`x`?`y`:`x`}function Us(e){return e===`y`?`height`:`width`}function Ws(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Gs(e){return Hs(Ws(e))}function Ks(e,t,n){n===void 0&&(n=!1);let r=Vs(e),i=Gs(e),a=Us(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=tc(o)),[o,tc(o)]}function qs(e){let t=tc(e);return[Js(e),t,Js(t)]}function Js(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Ys=[`left`,`right`],Xs=[`right`,`left`],Zs=[`top`,`bottom`],Qs=[`bottom`,`top`];function $s(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Xs:Ys:t?Ys:Xs;case`left`:case`right`:return t?Zs:Qs;default:return[]}}function ec(e,t,n,r){let i=Vs(e),a=$s(Bs(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Js)))),a}function tc(e){let t=Bs(e);return Ls[t]+e.slice(t.length)}function nc(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function rc(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:nc(e)}function ic(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ac(e,t){return t<0||t>=e.length}function oc(e,t){return cc(e.current,{disabledIndices:t})}function sc(e,t){return cc(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function cc(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&lc(e,a,r));return a}function lc(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?!dc(r)||r.matches(`:disabled`)?!0:!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!1}function uc(e){return e.visibility===`hidden`||e.visibility===`collapse`}function dc(e,t=e?Qa(e):null){return!e||!e.isConnected||!t||uc(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var fc=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function pc(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return Ba(n)?n.host:null}function mc(e){for(let t of Array.from(e.children))if(K(t)===`summary`)return t;return null}function hc(e,t){let n=mc(t);return!!n&&(e===n||Q(n,e))}function gc(e){let t=e?K(e):``;return e!=null&&e.matches(fc)&&(t!==`summary`||e.parentElement!=null&&K(e.parentElement)===`details`&&mc(e.parentElement)===e)&&(t!==`details`||mc(e)==null)&&(t!==`input`||e.type!==`hidden`)}function _c(e){if(!gc(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=pc(t)){let n=t!==e,r=K(t)===`slot`;if(t.hasAttribute(`inert`)||n&&K(t)===`details`&&!t.open&&!hc(e,t)||t.hasAttribute(`hidden`)||!r&&!vc(t,n))return!1}return!0}function vc(e,t){let n=Qa(e);return t?n.display!==`none`:dc(e,n)}function yc(e){let t=e.tabIndex;if(t<0){let t=K(e);if(t===`details`||t===`audio`||t===`video`||Y(e)&&e.isContentEditable)return 0}return t}function bc(e){if(K(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function xc(e,t){let n=bc(e);if(!n)return!0;let r=t.find(e=>{let t=bc(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=bc(e);return t?.name===n.name&&t.form===n.form})===n}function Sc(e){if(Y(e)&&K(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return Y(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function Cc(e,t){Sc(e).forEach(e=>{gc(e)&&t.push(e),Cc(e,t)})}function wc(e,t,n){Sc(e).forEach(e=>{Y(e)&&e.matches(t)&&n.push(e),wc(e,t,n)})}function Tc(e){let t=[];return Cc(e,t),t.filter(_c)}function Ec(e){let t=Tc(e);return t.filter(e=>yc(e)>=0&&xc(e,t))}function Dc(e,t){let n=Ec(e),r=n.length;if(r===0)return;let i=Ro(po(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Oc(e){return Dc(po(e).body,1)||e}function kc(e){return Dc(po(e).body,-1)||e}function Ac(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!Q(n,r)}function jc(e){Ec(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Mc(e){let t=[];wc(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function Nc(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...Nc(e,t.id,n)])}function Pc(e){return`data-base-ui-${e}`}var Fc=0;function Ic(e,t=`mui`){let[n,r]=f.useState(e),i=e||n;return f.useEffect(()=>{n??(Fc+=1,r(`${t}-${Fc}`))},[n,t]),i}var Lc=ao.useId;function Rc(e,t){if(Lc!==void 0){let n=Lc();return e??(t?`${t}-${n}`:n)}return Ic(e,t)}function zc(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var Bc=zc(`https://base-ui.com/production-error`,`Base UI`),Vc=19;function Hc(e){return Vc>=e}function Uc(e){if(!f.isValidElement(e))return null;let t=e,n=t.props;return(Hc(19)?n?.ref:t.ref)??null}function Wc(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}function Gc(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function Kc(e,t){return typeof e==`function`?e(t):e}function qc(e,t){return typeof e==`function`?e(t):e}var Jc={};function Yc(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Zc(t);let a=Zc(e);return t&&(a=Qc(a,t)),n&&(a=Qc(a,n)),r&&(a=Qc(a,r)),i&&(a=Qc(a,i)),a}function Xc(e){if(e.length===0)return Jc;if(e.length===1)return Zc(e[0]);let t=Zc(e[0]);for(let n=1;n<e.length;n+=1)t=Qc(t,e[n]);return t}function Zc(e){return nl(e)?{...rl(e,Jc)}:$c(e)}function Qc(e,t){return nl(t)?rl(t,e):el(e,t)}function $c(e){let t={...e};for(let e in t){let n=t[e];tl(e,n)&&(t[e]=al(n))}return t}function el(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=Wc(e.style,r);break;case`className`:e[n]=sl(e.className,r);break;default:e[n]=tl(n,r)?il(e[n],r):r}}return e}function tl(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function nl(e){return typeof e==`function`}function rl(e,t){return nl(e)?e(t):e??Jc}function il(e,t){return t?e?(...n)=>{let r=n[0];if(cl(r)){let i=r;ol(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:al(t):e}function al(e){return e&&((...t)=>{let n=t[0];return cl(n)&&ol(n),e(...t)})}function ol(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function sl(e,t){return t?e?t+` `+e:t:e}function cl(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function ll(e,t,n={}){let r=t.render;n.enabled!==!1&&(r=pl(r));let i=ul(t,n,r);if(n.enabled===!1)return null;let a=n.state??go;return ml(e,r,i,a)}function ul(e,t,n){let{className:r,style:i}=e,{state:a=go,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?Kc(r,a):void 0,d=l?qc(i,a):void 0,f=l?Gc(a,c):go,p=l&&s?dl(s):void 0,m=l?Wc(f,p)??{}:go;return typeof document<`u`&&(l?m.ref=Array.isArray(o)?vs([m.ref,Uc(n),...o]):_s(m.ref,Uc(n),o):_s(null,null)),l?(u!==void 0&&(m.className=sl(m.className,u)),d!==void 0&&(m.style=Wc(m.style,d)),m):go}function dl(e){return Array.isArray(e)?Xc(e):Yc(void 0,e)}var fl=Symbol.for(`react.lazy`);function pl(e){if(e?.$$typeof!==fl)return e;let t=f.Children.toArray(e)[0];return f.isValidElement(t)?t:e}function ml(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=Yc(n,t.props);return e.ref=n.ref,f.cloneElement(t,e)}if(e&&typeof e==`string`)return hl(e,n);throw Error(Bc(8))}function hl(e,t){return e===`button`?(0,f.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,f.createElement)(`img`,{alt:``,...t,key:t.key}):f.createElement(e,t)}var gl={style:{transition:`none`}},_l={fallbackAxisSide:`none`},vl={fallbackAxisSide:`end`},yl={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},bl=e(o(),1),xl=f.createContext(null),Sl=()=>f.useContext(xl),Cl=Pc(`portal`);function wl(e={}){let{ref:t,container:n,componentProps:r=go,elementProps:i}=e,a=Rc(),o=Sl()?.portalNode,[s,c]=f.useState(null),[l,u]=f.useState(null),d=X(e=>{e!==null&&u(e)}),p=f.useRef(null);Z(()=>{if(n===null){p.current&&(p.current=null,u(null),c(null));return}let e=(n&&(za(n)?n:n.current))??o??document.body;if(e==null){p.current&&(p.current=null,u(null),c(null));return}p.current!==e&&(p.current=e,u(null),c(e))},[n,o]);let m=ll(`div`,r,{ref:[t,d],props:[{id:a,[Cl]:``},i]}),h=s&&m?bl.createPortal(m,s):null;return{node:l,nodeId:f.isValidElement(m)?m.props.id:void 0,subtree:h}}var Tl=f.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,portalOwnerRole:s,...c}=e,{node:l,nodeId:u,subtree:d}=wl({container:o,ref:t,componentProps:e,elementProps:c}),p=f.useRef(null),m=f.useRef(null),h=f.useRef(null),g=f.useRef(null),[_,v]=f.useState(null),y=f.useRef(!1),b=_?.modal,x=_?.open,S=!!_&&!_.modal&&_.open&&!!l;f.useEffect(()=>{if(!l||b)return;function e(e){l&&e.relatedTarget&&Ac(e)&&(e.type===`focusin`?y.current&&=(Mc(l),!1):(jc(l),y.current=!0))}return gs($(l,`focusin`,e,!0),$(l,`focusout`,e,!0))},[l,b]),Z(()=>{l&&x===!0&&y.current&&(Mc(l),y.current=!1)},[x,l]);let C=f.useMemo(()=>({beforeOutsideRef:p,afterOutsideRef:m,beforeInsideRef:h,afterInsideRef:g,portalNode:l,setFocusManagerState:v}),[l]);return(0,W.jsxs)(f.Fragment,{children:[d,(0,W.jsxs)(xl.Provider,{value:C,children:[S&&l&&(0,W.jsx)(js,{"data-type":`outside`,ref:p,onFocus:e=>{Ac(e,l)?h.current?.focus():kc(_?_.domReference:null)?.focus()}}),S&&l&&(0,W.jsx)(`span`,{role:s,"aria-owns":u,style:yl}),l&&bl.createPortal(a,l),S&&l&&(0,W.jsx)(js,{"data-type":`outside`,ref:m,onFocus:e=>{Ac(e,l)?g.current?.focus():(Oc(_?_.domReference:null)?.focus(),_?.closeOnFocusOut&&_?.onOpenChange(!1,hs(`focus-out`,e.nativeEvent)))}})]})]})});function El(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var Dl=class{nodesRef={current:[]};events=El();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}},Ol=f.createContext(null),kl=f.createContext(null),Al=()=>f.useContext(Ol)?.id||null,jl=e=>{let t=f.useContext(kl);return e??t};function Ml(e){let t=Rc(),n=jl(e),r=Al();return Z(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function Nl(e){let{children:t,id:n}=e,r=Al();return(0,W.jsx)(Ol.Provider,{value:f.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function Pl(e){let{children:t,externalTree:n}=e,r=so(()=>n??new Dl).current;return(0,W.jsx)(kl.Provider,{value:r,children:t})}function Fl(e){return e==null?e:`current`in e?e.current:e}function Il(){return!1}function Ll(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function Rl(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=Il,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,u=l.useState(`open`),d=l.useState(`floatingElement`),{dataRef:p,events:m}=l.context,h=jl(c),g=X(typeof i==`function`?i:()=>!1),_=typeof i==`function`?g:i,v=_!==!1,y=X(()=>a),{escapeKey:b,outsidePress:x}=Ll(s),S=f.useRef(!1),C=f.useRef(!1),w=f.useRef(!1),T=f.useRef(!1),E=f.useRef(!1),D=f.useRef(``),O=f.useRef(null),k=bo(),A=bo(),j=X(()=>{A.clear(),p.current.insideReactTree=!1}),M=X(e=>{let t=p.current.floatingContext?.nodeId;return(h?Nc(h.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),N=X(e=>ns(e,l.select(`floatingElement`))||ns(e,l.select(`domReferenceElement`))),P=X(e=>{o()&&l.setOpen(!1,hs(ls,e.nativeEvent))}),ee=X(e=>{if(!u||!n||!r||e.key!==`Escape`||E.current||!b&&M(`__escapeKeyBubbles`))return;let t=hs(ms,Po(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!b&&!t.isPropagationAllowed&&e.stopPropagation()}),F=X(()=>{p.current.insideReactTree=!0,A.start(0,j)}),I=X(e=>{if(!u||!n||e.button!==0)return;let t=zo(e.nativeEvent);Q(l.select(`floatingElement`),t)&&(S.current||(S.current=!0,C.current=!1))}),te=X(e=>{u&&n&&(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&S.current&&(C.current=!0)});f.useEffect(()=>{function e(e){e.open||(T.current=!1)}return m.on(`openchange`,e),()=>{m.off(`openchange`,e)}},[m]),f.useEffect(()=>{if(!u||!n)return u||(T.current=!1),j;p.current.__escapeKeyBubbles=b,p.current.__outsidePressBubbles=x;let e=new yo,t=new yo,i=po(d);function a(){e.clear(),E.current=!0}function o(){e.start(Mo?5:0,()=>{E.current=!1})}function s(){w.current=!0,t.start(0,()=>{w.current=!1})}function c(){S.current=!1,C.current=!1}function f(){let e=D.current,t=e===`pen`||!e?`mouse`:e,n=y(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function m(e){let t=f();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function g(e){let t=p.current.floatingContext?.nodeId,n=h&&Nc(h.nodesRef.current,t).some(t=>ns(e,t.context?.elements.floating));return N(e)||n}function A(e){if(m(e)){e.type!==`click`&&!N(e)&&(t.clear(),w.current=!1),j();return}if(p.current.insideReactTree){j();return}let n=zo(e),r=`[${Pc(`inert`)}]`,i=J(n)?n.getRootNode():null,a=Array.from((Ba(i)?i:po(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>Q(e,n))))return;let s=J(n)?n:null;for(;s&&!Za(s);){let e=eo(s);if(Za(e)||!J(e))break;s=e}if(!(a.length&&J(n)&&!rs(n)&&!Q(n,l.select(`floatingElement`))&&a.every(e=>!Q(s,e)))){if(Y(n)&&!(`touches`in e)){let t=Za(n),r=Qa(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!g(e)){if(f()===`intentional`){if(e.detail!==0&&!Fo(e)&&!T.current)return;if(w.current){t.clear(),w.current=!1;return}}(typeof _!=`function`||_(e))&&(M(`__outsidePressBubbles`)||(l.setOpen(!1,hs(ds,e)),j()))}}}function P(e){f()===`sloppy`&&e.pointerType!==`touch`&&l.select(`open`)&&n&&!N(e)&&A(e)}function F(e){if(f()!==`sloppy`||!l.select(`open`)||!n||N(e))return;let t=e.touches[0];t&&(O.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},k.start(1e3,()=>{O.current&&(O.current.dismissOnTouchEnd=!1,O.current.dismissOnMouseDown=!1)}))}function I(e,t){let n=zo(e);if(!n)return;let r=$(n,e.type,()=>{t(e),r()})}function te(e){D.current=`touch`,I(e,F)}function L(e){k.clear(),e.type===`pointerdown`&&(e.button===0&&(T.current=!0),D.current=e.pointerType),(e.type!==`mousedown`||!O.current||O.current.dismissOnMouseDown)&&I(e,e=>{e.type===`pointerdown`?P(e):A(e)})}function R(e){if(e.type===`pointercancel`&&(T.current=!1),!S.current)return;let n=C.current;if(c(),f()===`intentional`){if(e.type===`pointercancel`){n&&s();return}if(!g(e)){if(n){s();return}(typeof _!=`function`||_(e))&&(t.clear(),w.current=!0,j())}}}function z(e){if(f()!==`sloppy`||!O.current||N(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-O.current.startX),r=Math.abs(t.clientY-O.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(O.current.dismissOnTouchEnd=!0),i>10&&(A(e),k.clear(),O.current=null)}function ne(e){I(e,z)}function re(e){f()===`sloppy`&&O.current&&!N(e)&&(O.current.dismissOnTouchEnd&&A(e),k.clear(),O.current=null)}function B(e){I(e,re)}let ie=gs(r&&gs($(i,`keydown`,ee),$(i,`compositionstart`,a),$(i,`compositionend`,o)),v&&gs($(i,`click`,L,!0),$(i,`pointerdown`,L,!0),$(i,`pointerup`,R,!0),$(i,`pointercancel`,R,!0),$(i,`mousedown`,L,!0),$(i,`mouseup`,R,!0),$(i,`touchstart`,te,{capture:!0,passive:!0}),$(i,`touchmove`,ne,{capture:!0,passive:!0}),$(i,`touchend`,B,{capture:!0,passive:!0})));return()=>{ie(),e.clear(),t.clear(),c(),w.current=!1,j()}},[p,d,r,v,_,u,n,b,x,ee,j,y,M,N,h,l,k]);let L=f.useMemo(()=>({onKeyDown:ee,onPointerDown:P,onClick:P}),[ee,P]),R=f.useMemo(()=>({onKeyDown:ee,onPointerDown:te,onMouseDown:te,onClickCapture:F,onMouseDownCapture(e){F(),I(e)},onPointerDownCapture(e){F(),I(e)},onMouseUpCapture:F,onTouchEndCapture:F,onTouchMoveCapture:F}),[ee,F,I,te]);return f.useMemo(()=>n?{reference:L,floating:R,trigger:L}:{},[n,L,R])}function zl(e,t,n){let{reference:r,floating:i}=e,a=Ws(t),o=Gs(t),s=Us(o),c=Bs(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Vs(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Bl(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=zs(t,e),p=rc(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ic(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ic(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Vl=50,Hl=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Bl},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=zl(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Vl&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=zl(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ul=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=zs(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Bs(r),_=Ws(o),v=Bs(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[tc(o)]:qs(o)),x=p!==`none`;!d&&x&&b.push(...ec(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Ks(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Ws(t)||T.every(e=>Ws(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Ws(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Wl=new Set([`left`,`top`]);async function Gl(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Bs(n),s=Vs(n),c=Ws(n)===`y`,l=Wl.has(o)?-1:1,u=a&&c?-1:1,d=zs(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Kl=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Gl(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},ql=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=zs(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Ws(i),p=Hs(f),m=u[p],h=u[f],g=(e,t)=>Rs(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Jl=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=zs(e,t),u={x:n,y:r},d=Ws(i),f=Hs(d),p=u[f],m=u[d],h=zs(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Wl.has(Bs(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Yl=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=zs(e,t),c=await i.detectOverflow(t,s),l=Bs(n),u=Vs(n),d=Ws(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Ms(p-c[m],g),y=Ms(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Ns(c.left,c.right):S=p-2*Ns(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Xl(e){let t=Qa(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Y(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ps(n)!==a||Ps(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Zl(e){return J(e)?e:e.contextElement}function Ql(e){let t=Zl(e);if(!Y(t))return Is(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Xl(t),o=(a?Ps(n.width):n.width)/r,s=(a?Ps(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var $l=Is(0);function eu(e){let t=q(e);return!Xa()||!t.visualViewport?$l:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function tu(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===q(e)}function nu(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Zl(e),o=Is(1);t&&(r?J(r)&&(o=Ql(r)):o=Ql(e));let s=tu(a,n,r)?eu(a):Is(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=q(a),t=J(r)?q(r):r,n=e,i=ro(n);for(;i&&t!==n;){let e=Ql(i),t=i.getBoundingClientRect(),r=Qa(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=q(i),i=ro(n)}}return ic({width:u,height:d,x:c,y:l})}function ru(e,t){let n=$a(e).scrollLeft;return t?t.left+n:nu(Ra(e)).left+n}function iu(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ru(e,n),y:n.top+t.scrollTop}}function au(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ra(r),s=t?Ua(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Is(1),u=Is(0),d=Y(r);if((d||!a)&&((K(r)!==`body`||Va(o))&&(c=$a(r)),d)){let e=nu(r);l=Ql(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?iu(o,c):Is(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ou(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function su(e){let t=$a(e),n=e.ownerDocument.body,r=Ns(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Ns(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ru(e),o=-t.scrollTop;return Qa(n).direction===`rtl`&&(a+=Ns(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var cu=25;function lu(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=q(e),a=Ra(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Xa()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ru(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=cu&&(s-=o)}return{width:s,height:c,x:l,y:u}}function uu(e,t){let n=nu(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ql(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function du(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=lu(e,n,t);else if(t===`document`)r=su(Ra(e));else if(J(t))r=uu(t,n);else{let n=eu(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ic(r)}function fu(e,t){let n=t.get(e);if(n)return n;let r=no(e,[],!1).filter(e=>J(e)&&K(e)!==`body`),i=null,a=Qa(e).position===`fixed`,o=a?eo(e):e;for(;J(o)&&!Za(o);){let e=Qa(o),t=Ja(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=eo(o)}return t.set(e,r),r}function pu(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ua(t)?[]:fu(t,this._c):[].concat(n),r],o=du(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=du(t,a[e],i);s=Ns(n.top,s),c=Ms(n.right,c),l=Ms(n.bottom,l),u=Ns(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function mu(e){let{width:t,height:n}=Xl(e);return{width:t,height:n}}function hu(e,t,n){let r=Y(t),i=Ra(t),a=n===`fixed`,o=nu(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Is(0);if((r||!a)&&((K(t)!==`body`||Va(i))&&(s=$a(t)),r)){let e=nu(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ru(i));let l=i&&!r&&!a?iu(i,s):Is(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function gu(e){return Qa(e).position===`static`}function _u(e,t){if(!Y(e)||Qa(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ra(e)===n&&(n=n.ownerDocument.body),n}function vu(e,t){let n=q(e);if(Ua(e))return n;if(!Y(e)){let t=eo(e);for(;t&&!Za(t);){if(J(t)&&!gu(t))return t;t=eo(t)}return n}let r=_u(e,t);for(;r&&Ha(r)&&gu(r);)r=_u(r,t);return r&&Za(r)&&gu(r)&&!Ja(r)?n:r||Ya(e)||n}var yu=async function(e){let t=this.getOffsetParent||vu,n=this.getDimensions,r=await n(e.floating);return{reference:hu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function bu(e){return Qa(e).direction===`rtl`}var xu={convertOffsetParentRelativeRectToViewportRelativeRect:au,getDocumentElement:Ra,getClippingRect:pu,getOffsetParent:vu,getElementRects:yu,getClientRects:ou,getDimensions:mu,getScale:Ql,isElement:J,isRTL:bu};function Su(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Cu(e,t,n){let r=null,i,a=Ra(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Fs(d),h=Fs(a.clientWidth-(u+f)),g=Fs(a.clientHeight-(d+p)),_=Fs(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Ns(0,Ms(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Su(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=q(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function wu(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Zl(e),u=i||a?[...l?no(l):[],...t?no(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Cu(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?nu(e):null;c&&g();function g(){let t=nu(e);h&&!Su(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Tu=Kl,Eu=ql,Du=Ul,Ou=Yl,ku=Jl,Au=(e,t,n)=>{let r=new Map,i=n??{},a={...xu,...i.platform,_c:r};return Hl(e,t,{...i,platform:a})},ju=typeof document<`u`?f.useLayoutEffect:function(){};function Mu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Mu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Mu(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Nu(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Pu(e,t){let n=Nu(e);return Math.round(t*n)/n}function Fu(e){let t=f.useRef(e);return ju(()=>{t.current=e}),t}function Iu(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=f.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=f.useState(r);Mu(p,r)||m(r);let[h,g]=f.useState(null),[_,v]=f.useState(null),y=f.useCallback(e=>{e!==C.current&&(C.current=e,g(e))},[]),b=f.useCallback(e=>{e!==w.current&&(w.current=e,v(e))},[]),x=a||h,S=o||_,C=f.useRef(null),w=f.useRef(null),T=f.useRef(u),E=c!=null,D=Fu(c),O=Fu(i),k=Fu(l),A=f.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),Au(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!Mu(T.current,t)&&(T.current=t,bl.flushSync(()=>{d(t)}))})},[p,t,n,O,k]);ju(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let j=f.useRef(!1);ju(()=>(j.current=!0,()=>{j.current=!1}),[]),ju(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(D.current)return D.current(x,S,A);A()}},[x,S,A,D,E]);let M=f.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),N=f.useMemo(()=>({reference:x,floating:S}),[x,S]),P=f.useMemo(()=>{let e={position:n,left:0,top:0};if(!N.floating)return e;let t=Pu(N.floating,u.x),r=Pu(N.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Nu(N.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,N.floating,u.x,u.y]);return f.useMemo(()=>({...u,update:A,refs:M,elements:N,floatingStyles:P}),[u,A,M,N,P])}var Lu=(e,t)=>{let n=Tu(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ru=(e,t)=>{let n=Eu(e);return{name:n.name,fn:n.fn,options:[e,t]}},zu=(e,t)=>({fn:ku(e).fn,options:[e,t]}),Bu=(e,t)=>{let n=Du(e);return{name:n.name,fn:n.fn,options:[e,t]}},Vu=(e,t)=>{let n=Ou(e);return{name:n.name,fn:n.fn,options:[e,t]}},Hu=i((e=>{var n=t();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useState,o=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=n.useSyncExternalStore===void 0?f:n.useSyncExternalStore})),Uu=i(((e,t)=>{t.exports=Hu()})),Wu=i((e=>{var n=t(),r=Uu();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=n.useRef,c=n.useEffect,l=n.useMemo,u=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Gu=i(((e,t)=>{t.exports=Wu()})),Ku=[],qu=void 0;function Ju(){return qu}function Yu(e){Ku.push(e)}var Xu=Uu(),Zu=Gu(),Qu=Hc(19)?td:nd;function $u(e,t,n,r,i){return Qu(e,t,n,r,i)}function ed(e,t,n,r,i){let a=f.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,Xu.useSyncExternalStore)(e.subscribe,a,a)}Yu({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,Xu.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function td(e,t,n,r,i){let a=Ju();if(!a)return ed(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function nd(e,t,n,r,i){return(0,Zu.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var rd=class{static create(e){return new this(e)}constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return $u(this,e,t,n,r)}},id=class extends rd{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){f.useDebugValue(e);let n=this;Z(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;Z(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;Z(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){f.useDebugValue(e);let n=this,r=t!==void 0;Z(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return f.useDebugValue(e),$u(this,this.selectors[e],t,n,r)}useContextCallback(e,t){f.useDebugValue(e);let n=X(t??mo);this.context[e]=n}useStateSetter(e){let t=f.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},ad={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},od=class extends id{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:El(),nested:n,triggerElements:i},ad),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&Lo(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}};function sd(e,t=!1,n=!1,r=!1){let[i,a]=f.useState(e&&t?`idle`:void 0),[o,s]=f.useState(e&&!r);return e&&!o&&(s(!0),a(`starting`)),!e&&o&&i!==`ending`&&!n&&a(`ending`),!e&&!o&&i===`ending`&&a(void 0),Z(()=>{if(!e&&o&&i!==`ending`&&n){let e=Ds.request(()=>{a(`ending`)});return()=>{Ds.cancel(e)}}},[e,o,i,n]),Z(()=>{if(!e||t)return;let n=Ds.request(()=>{a(void 0)});return()=>{Ds.cancel(n)}},[t,e]),Z(()=>{if(!e||!t)return;e&&o&&i!==`idle`&&a(`starting`);let n=Ds.request(()=>{a(`idle`)});return()=>{Ds.cancel(n)}},[t,e,o,i]),{mounted:o,setMounted:s,transitionStatus:i}}var cd=null;function ld(e){if(!cd){let e=[];cd=e,queueMicrotask(()=>{cd=null,bl.flushSync(()=>{for(let t of e)t()})})}cd.push(e)}function ud(e,t=!1,n=!1){let r=Os();return X((i,a=null)=>{r.cancel();let o=Fl(e);if(o==null)return;let s=o,c=()=>{if(!n){bl.flushSync(i);return}ld(()=>{a?.aborted||i()})};if(typeof s.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){i();return}function l(){Promise.all(s.getAnimations().map(e=>e.finished)).then(()=>{a?.aborted||c()},()=>{if(!a?.aborted){if(s.getAnimations().some(e=>e.pending||e.playState!==`finished`)){l();return}c()}})}if(t){let e=Vo;if(!s.hasAttribute(e)){r.request(l);return}let t=new MutationObserver(()=>{s.hasAttribute(e)||(t.disconnect(),l())});t.observe(s,{attributes:!0,attributeFilter:[e]}),a?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}r.request(l)})}function dd(e){let{enabled:t=!0,open:n,ref:r,batch:i=!1,onComplete:a}=e,o=X(a),s=ud(r,n,i);f.useEffect(()=>{if(!t)return;let e=new AbortController;return s(o,e.signal),()=>{e.abort()}},[t,n,o,s])}var fd=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function pd(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=Rc(),a=Al()!=null,o=so(()=>new od({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new fd,floatingId:i,syncOnly:!1,nested:a})).current;return Z(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=J(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}function md(e={}){let t=pd(e);return hd(e,e.rootContext||t)}function hd(e,t){let{nodeId:n,externalTree:r}=e,i=t.useState(`referenceElement`),a=t.useState(`floatingElement`),o=t.useState(`domReferenceElement`),s=t.useState(`open`),c=t.useState(`floatingId`),[l,u]=f.useState(null),[d,p]=f.useState(void 0),[m,h]=f.useState(void 0),g=f.useRef(null),_=jl(r),v=f.useMemo(()=>({reference:i,floating:a,domReference:o}),[i,a,o]),y=Iu({...e,elements:{...v,...l&&{reference:l}}}),b=J(d)?d:null,x=m===void 0?t.state.floatingElement:m;t.useSyncedValue(`referenceElement`,d??null),t.useSyncedValue(`domReferenceElement`,d===void 0?o:b),t.useSyncedValue(`floatingElement`,x);let S=f.useCallback(e=>{let t=J(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;u(t),y.refs.setReference(t)},[y.refs]),C=f.useCallback(e=>{(J(e)||e===null)&&(g.current=e,p(e)),(J(y.refs.reference.current)||y.refs.reference.current===null||e!==null&&!J(e))&&y.refs.setReference(e)},[y.refs,p]),w=f.useCallback(e=>{h(e),y.refs.setFloating(e)},[y.refs]),T=f.useMemo(()=>({...y.refs,setReference:C,setFloating:w,setPositionReference:S,domReference:g}),[y.refs,C,w,S]),E=f.useMemo(()=>({...y.elements,domReference:o}),[y.elements,o]),D=f.useMemo(()=>({...y,dataRef:t.context.dataRef,open:s,onOpenChange:t.setOpen,events:t.context.events,floatingId:c,refs:T,elements:E,nodeId:n,rootStore:t}),[y,T,E,n,t,s,c]);return Z(()=>{o&&(g.current=o)},[o]),Z(()=>{t.context.dataRef.current.floatingContext=D;let e=_?.nodesRef.current.find(e=>e.id===n);e&&(e.context=D)}),f.useMemo(()=>({...y,context:D,refs:T,elements:E,rootStore:t}),[y,T,E,D,t])}var gd=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new yo,this.restTimeout=new yo,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},_d=new WeakMap;function vd(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&_d.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),_d.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function yd(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=_d.get(n);a&&a!==e&&vd(a),vd(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,_d.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function bd(e){let t=e.context.dataRef.current,n=so(()=>t.hoverInteractionState??gd.create()).current;return t.hoverInteractionState||=n,_o(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}function xd(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,u=jl(),d=Al(),p=bd(a),m=bo(),h=X(()=>ss(l.current.openEvent?.type,p.interactedInside)),g=X(()=>cs(l.current.openEvent?.type)),_=X(()=>{vd(p)});Z(()=>{o||(p.pointerType=void 0,p.restTimeoutPending=!1,p.interactedInside=!1,_())},[o,p,_]),f.useEffect(()=>_,[_]),Z(()=>{if(n&&o&&p.handleCloseOptions?.blockPointerEvents&&g()&&J(c)&&s){let e=c,t=s,n=po(s),r=u?.nodesRef.current.find(e=>e.id===d)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=p.pointerEventsScopeElement===t?null:p.pointerEventsScopeElement,a=r===t?null:r,o=p.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body;return yd(p,{scopeElement:o,referenceElement:e,floatingElement:t}),()=>{_()}}},[n,o,c,s,p,g,u,d,_]),f.useEffect(()=>{if(!n)return;function e(){return!!(u&&d&&Nc(u.nodesRef.current,d).length>0)}function t(e){let t=os(r,`close`,p.pointerType),n=()=>{a.setOpen(!1,hs(us,e)),u?.events.emit(`floating.closed`,e)};t?p.openChangeTimeout.start(t,n):(p.openChangeTimeout.clear(),n())}function o(e){let t=zo(e);if(!is(t)){p.interactedInside=!1;return}p.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){p.openChangeTimeout.clear(),m.clear(),u?.events.off(`floating.closed`,v),_()}function f(n){if(e()&&u){u.events.on(`floating.closed`,v);return}if(ts(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(u&&r&&J(o)&&Nc(u.nodesRef.current,r,!1).some(e=>Q(e.context?.elements.floating,o)))){if(p.handler){p.handler(n);return}_(),g()&&!h()&&t(n)}}function v(t){u&&d&&!e()&&m.start(0,()=>{u.events.off(`floating.closed`,v),a.setOpen(!1,hs(us,t)),u.events.emit(`floating.closed`,t)})}let y=s;return gs(y&&$(y,`mouseenter`,c),y&&$(y,`mouseleave`,f),y&&$(y,`pointerdown`,o,!0),()=>{u?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,g,h,_,p,u,d,m])}var Sd=f.createContext(void 0);function Cd(e){let t=f.useContext(Sd);if(t===void 0&&!e)throw Error(Bc(41));return t}var wd=f.createContext(void 0);function Td(){return f.useContext(wd)}var Ed=`--positioner-width`,Dd=`--positioner-height`,Od=`--popup-width`,kd=`--popup-height`;function Ad(e,t,n,r){e.style.setProperty(Od,`${n}px`),e.style.setProperty(kd,`${r}px`),t.style.setProperty(Ed,`${n}px`),t.style.setProperty(Dd,`${r}px`)}var jd=new Set([us,ds,ps]);function Md(e){let t=parseFloat(e.style.getPropertyValue(`--positioner-width`))||0,n=parseFloat(e.style.getPropertyValue(`--positioner-height`))||0;return t<=0||n<=0?null:{width:t,height:n}}var Nd=f.forwardRef(function(e,t){let{defaultValue:n=null,value:r,onValueChange:i,actionsRef:a,delay:o=50,closeDelay:s=50,orientation:c=`horizontal`,onOpenChangeComplete:l}=e,u=Al()!=null,d=Cd(!0),[p,m]=io({controlled:r,default:n,name:`NavigationMenu`,state:`value`}),h=p!=null,g=f.useRef(void 0),_=f.useRef(null),[v,y]=f.useState(null),[b,x]=f.useState(null),[S,C]=f.useState(null),[w,T]=f.useState(null),[E,D]=f.useState(null),[O,k]=f.useState(void 0),[A,j]=f.useState(!1),M=f.useRef(null),N=f.useRef(null),P=f.useRef(null),ee=f.useRef(null),F=f.useRef(null),I=f.useRef(null),te=f.useRef({abortController:null,owner:null}),{mounted:L,setMounted:R,transitionStatus:z}=sd(h);Z(()=>{if(h||!v||!b)return;let e=Md(v);e&&Ad(b,v,e.width,e.height)},[h,b,v]),f.useEffect(()=>{j(!1)},[p]);let ne=X((e,t)=>{e??(g.current=t.reason),e!==p&&i?.(e,t),!t.isCanceled&&(e??(D(null),k(void 0)),m(e),u&&e==null&&t.reason===`link-press`&&d&&d.setValue(null,t))}),re=X(()=>{let e=Ro(po(_.current));!(g.current&&jd.has(g.current))&&Y(M.current)&&(e===po(b).body||Q(b,e))&&b&&(M.current.focus({preventScroll:!0}),M.current=void 0),R(!1),l?.(!1),D(null),k(void 0),N.current=null,g.current=void 0});f.useImperativeHandle(a,()=>({unmount:re}),[re]),dd({enabled:!a,open:h,ref:{current:b},onComplete(){h||re()}}),dd({enabled:!a,open:h,ref:{current:w},onComplete(){h||re()}});let B=h?E:null,ie=f.useMemo(()=>({open:h,value:p,setValue:ne,mounted:L,transitionStatus:z,positionerElement:v,setPositionerElement:y,popupElement:b,setPopupElement:x,viewportElement:S,setViewportElement:C,viewportTargetElement:w,setViewportTargetElement:T,activationDirection:B,setActivationDirection:D,floatingRootContext:O,setFloatingRootContext:k,currentContentRef:N,nested:u,rootRef:_,beforeInsideRef:P,afterInsideRef:ee,beforeOutsideRef:F,afterOutsideRef:I,prevTriggerElementRef:M,popupAutoSizeResetRef:te,delay:o,closeDelay:s,orientation:c,viewportInert:A,setViewportInert:j}),[h,p,ne,L,z,v,b,S,w,B,O,u,o,s,c,A]),ae=(0,W.jsx)(Sd.Provider,{value:ie,children:(0,W.jsx)(Pd,{componentProps:e,forwardedRef:t,children:e.children})});return u?ae:(0,W.jsx)(Pl,{children:ae})});function Pd(e){let{className:t,render:n,defaultValue:r,value:i,onValueChange:a,actionsRef:o,delay:s,closeDelay:c,orientation:l,onOpenChangeComplete:u,style:d,...f}=e.componentProps,p=Ml(),{rootRef:m,nested:h,open:g}=Cd(),_={open:g,nested:h},v=ll(h?`div`:`nav`,e.componentProps,{state:_,ref:[e.forwardedRef,m],props:f});return(0,W.jsx)(wd.Provider,{value:p,children:(0,W.jsx)(Nl,{id:p,children:v})})}var Fd=f.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},nextIndexRef:{current:0}});function Id(){return f.useContext(Fd)}function Ld(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=X(i),[,o]=f.useState(!1),s=so(zd).current,c=so(Rd).current,l=f.useRef(0),u=f.useRef(!0),d=f.useRef(null),p=f.useRef(null),m=X(()=>{u.current||(u.current=!0,o(e=>!e))}),h=X((e,t)=>{c.set(e,t),m()}),g=X(e=>{c.delete(e),m()}),_=X(e=>{let t=new Map;return n.current.length=0,r&&(r.current.length=0),e.forEach(e=>{t.set(e.element,{...e.registration.metadata??{},index:e.index}),n.current[e.index]=e.element,r&&(r.current[e.index]=e.registration.label===void 0?e.registration.textRef?.current?.textContent??e.element.textContent:e.registration.label)}),l.current=n.current.length,t});function v(e){if(p.current?.disconnect(),p.current=null,typeof MutationObserver!=`function`||e.length<2)return;let t=new MutationObserver(n=>{if(!Hd(n))return;let r=null;for(let n of e)if(n.isConnected){if(r&&Ud(r,n)>0){t.disconnect(),m();return}r=n}});p.current=t;let n=new Set;for(let t=1;t<e.length;t+=1){let r=Vd(e[t-1],e[t]);r&&n.add(r)}n.forEach(e=>t.observe(e,{childList:!0}))}let y=X(()=>{let[e,t]=Bd(c),n=_(e),r=d.current,i=!r||r.length!==e.length||e.some((e,t)=>{let n=r[t];return e.index!==n.index||e.element!==n.element||e.registration.index!==n.registration.index||e.registration.metadata!==n.registration.metadata});v(t),d.current=e,u.current=!1,i&&(s.forEach(e=>e(n)),a(n))});Z(()=>(!u.current&&d.current&&_(d.current),()=>{n.current=[],r&&(r.current=[])}),[n,r,_]),Z(()=>{u.current&&y()}),Z(()=>()=>{p.current?.disconnect(),u.current=!0},[]);let b=X(e=>(s.add(e),()=>{s.delete(e)})),x=f.useMemo(()=>({register:h,unregister:g,subscribeMapChange:b,nextIndexRef:l}),[h,g,b,l]);return(0,W.jsx)(Fd.Provider,{value:x,children:t})}function Rd(){return new Map}function zd(){return new Set}function Bd(e){let t=new Set,n=[],r=[];e.forEach((e,i)=>{if(!i.isConnected)return;let a=e.index,o={index:a??-1,element:i,registration:e};a===null?r.push(o):a>=0&&(t.add(a),n.push(o))});let i=0;return r.sort((e,t)=>Ud(e.element,t.element)),r.forEach(e=>{for(;t.has(i);)i+=1;e.index=i,n.push(e),i+=1}),t.size>0&&n.sort((e,t)=>e.index-t.index),[n,r.map(e=>e.element)]}function Vd(e,t){let n=e.parentElement;for(;n&&!n.contains(t);)n=n.parentElement;return n}function Hd(e){for(let t of e)for(let e=0;e<t.removedNodes.length;e+=1)if(t.removedNodes[e].isConnected)return!0;return!1}function Ud(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function Wd(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}var Gd=`ArrowUp`,Kd=`ArrowDown`,qd=`ArrowLeft`,Jd=`ArrowRight`,Yd=new Set([Gd,Kd,qd,Jd,`Home`,`End`]),Xd=[`Shift`,`Control`,`Alt`,`Meta`];function Zd(e){return Y(e)&&e.tagName===`INPUT`}function Qd(e){return!!(Zd(e)&&e.selectionStart!=null||Y(e)&&e.tagName===`TEXTAREA`)}function $d(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=ef(e,t,`left`),a=tf(e),o=tf(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=ef(e,t,`top`),r=tf(e),i=tf(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function ef(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function tf(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}function nf(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:p=ho}=e,[m,h]=f.useState(0),g=r!=null,_=f.useRef(null),v=_s(_,c),y=f.useRef([]),b=f.useRef(!1),x=f.useRef(null),S=o??m,C=X((e,t=!1)=>{if(x.current=y.current[e]??null,(s??h)(e),t){let t=y.current[e];$d(_.current,t,a,n)}}),w=X(e=>{if(e.size===0)return;if(b.current){let e=y.current,t=e.indexOf(x.current);if(t===-1){let t=e[S];!t||lc(e,S,d)?C(rf(e,d)):x.current=t}else t!==S&&C(t);return}b.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)C(i);else if(lc(t,S,d)){let e=cc(t,{disabledIndices:d});ac(t,e)||C(e)}$d(_.current,r,a,n)});Z(()=>{if(d==null||o!=null||!b.current)return;let e=y.current;if(lc(e,S,d)){let t=cc(e,{disabledIndices:d});ac(e,t)||C(t)}},[d,o,S,y,C]);let T=X((e,t,n)=>i?i(e,t,n,y):n),E=X(e=>{let o=e.key===`Home`||e.key===`End`;if(!Yd.has(e.key)||!l&&o||af(e,p)||!_.current)return;let s=a===`rtl`,c=s?qd:Jd,f=s?Jd:qd,m=n===`vertical`?Kd:c,h=n===`vertical`?Gd:f,v=zo(e.nativeEvent);if(v!=null&&Qd(v)&&!Wd(v)){let t=v.selectionStart,n=v.selectionEnd,r=v.value;if(t==null||e.shiftKey||t!==n||e.key!==h&&t<r.length||e.key!==m&&t>0)return}let b=S,x=oc(y,d),w=sc(y,d);r!=null&&(b=r({disabledIndices:d,elementsRef:y,event:e,highlightedIndex:S,loopFocus:t,maxIndex:w,minIndex:x,onLoop:T,orientation:n,rtl:s}));let E=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,D=n!==`vertical`&&e.key===f||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=x:e.key===`End`&&(b=w)),b===S&&(E||D)&&(t&&b===w&&E?(b=x,i&&(b=i(e,S,b,y))):t&&b===x&&D?(b=w,i&&(b=i(e,S,b,y))):b=cc(y.current,{startingIndex:b,decrement:D,disabledIndices:d})),b!==S&&!ac(y.current,b)&&(u&&e.stopPropagation(),(g||o||E||D)&&e.preventDefault(),C(b,!0),queueMicrotask(()=>{y.current[b]?.focus()}))});return{props:{ref:v,onFocus(e){let t=_.current,n=zo(e.nativeEvent);t&&n!=null&&Qd(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:S,onHighlightedIndexChange:C,elementsRef:y,onMapChange:w,relayKeyboardEvent:E}}function rf(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!lc(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function af(e,t){for(let n of Xd)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var of=f.createContext(void 0);function sf(e=!1){let t=f.useContext(of);if(t===void 0&&!e)throw Error(Bc(16));return t}var cf=f.createContext(void 0);function lf(){return f.useContext(cf)?.direction??`ltr`}function uf(e){let{render:t,className:n,style:r,refs:i=ho,props:a=ho,state:o=go,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:p,onLoop:m,enableHomeAndEndKeys:h,onMapChange:g,stopEventPropagation:_=!0,rootRef:v,disabledIndices:y,modifierKeys:b,highlightItemOnHover:x=!1,tag:S=`div`,...C}=e,{props:w,highlightedIndex:T,onHighlightedIndexChange:E,elementsRef:D,onMapChange:O,relayKeyboardEvent:k}=nf({grid:d,loopFocus:p,onLoop:m,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:v,stopEventPropagation:_,enableHomeAndEndKeys:h,direction:lf(),disabledIndices:y,modifierKeys:b}),A=ll(S,e,{state:o,ref:i,props:[w,...a,C],stateAttributesMapping:s}),j=f.useMemo(()=>({highlightedIndex:T,onHighlightedIndexChange:E,highlightItemOnHover:x,relayKeyboardEvent:k}),[T,E,x,k]);return(0,W.jsx)(of.Provider,{value:j,children:(0,W.jsx)(Ld,{elementsRef:D,onMapChange:e=>{g?.(e),O(e)},children:A})})}var df=`data-base-ui-navigation-menu-trigger`,ff=f.createContext(void 0);function pf(){return new od({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new fd,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}var mf=f.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Td(),{orientation:s,open:c,floatingRootContext:l,positionerElement:u,value:d,closeDelay:p,viewportElement:m,nested:h}=Cd(),g=f.useMemo(()=>pf(),[]),_=l||g,v=u!=null||d==null;xd(_,{enabled:!!l&&(u!=null||m!=null||d==null),closeDelay:p,nodeId:o});let y=Rl(_,{enabled:v,outsidePressEvent:`intentional`,outsidePress(e){return zo(e)?.closest(`[${df}]`)===null}}),b=l?y:void 0,x={open:c},S=h?go:{onKeyDown(e){(s===`horizontal`&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)||s===`vertical`&&(e.key===`ArrowUp`||e.key===`ArrowDown`))&&e.stopPropagation()}},C=[b?.floating||go,S,a],w=ll(`ul`,e,{state:x,ref:t,props:C,enabled:h});return h?(0,W.jsx)(ff.Provider,{value:b,children:w}):(0,W.jsx)(ff.Provider,{value:b,children:(0,W.jsx)(uf,{render:n,className:r,style:i,state:x,refs:[t],props:C,loopFocus:!1,orientation:s,tag:`ul`})})}),hf=f.createContext(void 0);function gf(e){return Rc(e,`base-ui`)}var _f=f.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a,...o}=e,s=gf(),c=a??s,l=ll(`li`,e,{ref:t,props:o}),u=f.useMemo(()=>({value:c}),[c]);return(0,W.jsx)(hf.Provider,{value:u,children:l})});function vf(e){return Hc(19)?e:e?`true`:void 0}function yf({currentTarget:e,relatedTarget:t},n){let{popupElement:r,rootRef:i,tree:a,nodeId:o}=n,s=a?Nc(a.nodesRef.current,o).some(e=>Q(e.context?.elements.floating,t)):!1;return r?!Q(r,e)&&!Q(r,t)&&!Q(i.current,t)&&!s:!Q(i.current,t)&&!s}function bf(e={}){let{guess:t,label:n,metadata:r,textRef:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,nextIndexRef:l}=Id(),u=f.useRef(-1),[d,p]=f.useState(a==null&&t?()=>{if(u.current===-1){let e=l.current;l.current+=1,u.current=e}return u.current}:-1),m=a??d,h=f.useRef(null),g=f.useCallback(e=>{let t=h.current;t&&s(t),h.current=e,e&&o(e,{metadata:r??null,index:a??null,label:n,textRef:i})},[a,o,s,r,n,i]);return Z(()=>{if(a==null)return c(e=>{let t=h.current?e.get(h.current)?.index:null;t!=null&&p(t)})},[a,c]),{ref:g,index:m}}function xf(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=sf(),{ref:i,index:a}=bf(e),o=n===a,s=f.useRef(null),c=_s(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}function Sf(e){let{render:t,className:n,style:r,state:i=go,props:a=ho,refs:o=ho,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=xf({metadata:s});return ll(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}var Cf=f.createContext(void 0);function wf(){let e=f.useContext(Cf);if(e===void 0)throw Error(Bc(40));return e}var Tf=f.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{mounted:i}=Cd();return i||n?(0,W.jsx)(Cf.Provider,{value:n,children:(0,W.jsx)(Tl,{ref:t,...r})}):null}),Ef=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=zs(e,t)||{};if(l==null)return{};let f=rc(u),p={x:n,y:r},m=Gs(i),h=Us(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=Rs(k,j,A),N=!c.arrow&&Vs(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),Df=(e,t)=>{let{name:n,fn:r}=Ef(e);return{name:n,fn:r,options:[e,t]}},Of={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0,o=await e.platform.detectOverflow(e,{elementContext:`reference`});return{data:{referenceHidden:o.top-n>=0||o.right-t>=0||o.bottom-n>=0||o.left-t>=0||a}}}},kf={sideX:`left`,sideY:`top`},Af=`--available-width`,jf=`--available-height`,Mf=`--anchor-width`,Nf=`--anchor-height`,Pf=`--transform-origin`,Ff=Af,If=jf;function Lf(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function Rf(e,t,n){let{rects:r,placement:i}=e;return{side:Lf(t,Bs(i),n),align:Vs(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function zf(e,t){let{anchor:n,positionMethod:r=`absolute`,side:i=`bottom`,sideOffset:a=0,align:o=`center`,alignOffset:s=0,collisionBoundary:c,collisionPadding:l=5,sticky:u=!1,arrowPadding:d=5,disableAnchorTracking:p=!1,inline:m,keepMounted:h=!1,floatingRootContext:g,mounted:_,collisionAvoidance:v,shift:y,nodeId:b,adaptiveOrigin:x,lazyFlip:S=!1,externalTree:C}=e,[w,T]=f.useState(null);!_&&w!==null&&T(null);let E=v.side||`flip`,D=v.align||`flip`,O=v.fallbackAxisSide||`end`,k=y?.crossAxis??!1,A=y?.rootBoundary,j=typeof n==`function`?n:void 0,M=X(j),N=j?M:n,P=Cs(n),ee=Cs(_),F=lf()===`rtl`,I=w||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":F?`left`:`right`,"inline-start":F?`right`:`left`}[i],te=o===`center`?I:`${I}-${o}`,L=l;typeof L==`number`?L={top:L,right:L,bottom:L,left:L}:L&&={top:L.top||0,right:L.right||0,bottom:L.bottom||0,left:L.left||0};let R=+(i===`bottom`),z=+(i===`top`),ne=+(i===`right`),re=+(i===`left`),B={boundary:c===`clipping-ancestors`?`clippingAncestors`:c,padding:L},ie=f.useRef(null),ae=Cs(a),oe=Cs(s),se=typeof a==`function`?0:a,ce=typeof s==`function`?0:s,le=[];m&&le.push(m),le.push(Lu(e=>{let t=Rf(e,i,F),n=typeof ae.current==`function`?ae.current(t):ae.current,r=typeof oe.current==`function`?oe.current(t):oe.current;return{mainAxis:n,crossAxis:r,alignmentAxis:r}},[se,ce,F,i]));let ue=D===`none`&&E!==`shift`,V=!ue&&(u||k||E===`shift`),de=E===`none`?null:Bu({...B,padding:{top:L.top+1+R,right:L.right+1+re,bottom:L.bottom+1+z,left:L.left+1+ne},mainAxis:!k&&E===`flip`,crossAxis:D===`flip`&&`alignment`,fallbackAxisSideDirection:O}),fe=ue?null:Ru({...B,rootBoundary:A,mainAxis:D!==`none`,crossAxis:V,limiter:u||k?void 0:zu(e=>{if(!ie.current)return{};let{width:t,height:n}=ie.current.getBoundingClientRect(),r=Ws(Bs(e.placement)),i=r===`y`?t:n,a=r===`y`?L.left+L.right:L.top+L.bottom;return{offset:i/2+a/2}})},[B,u,k,A,L,D]);E===`shift`||D===`shift`||o===`center`?le.push(fe,de):le.push(de,fe),le.push(Vu({...B,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!ee.current)return;let i=e.style;i.setProperty(Ff,`${t}px`),i.setProperty(If,`${n}px`);let a=q(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(Mf,`${u}px`),i.setProperty(Nf,`${d}px`)}}),Df(e=>({element:ie.current||po(e.elements.floating).createElement(`div`),padding:ie.current?d:0,offsetParent:`floating`}),[d]),{name:`transformOrigin`,fn(e){let{elements:{floating:t},middlewareData:n,placement:r,platform:o,rects:s,y:c}=e,l=Bs(r),u=Vs(r),d=Ws(l)===`y`,f=ie.current,p=typeof a==`function`?a(Rf(e,i,F)):a,m;m=!f&&u&&Math.abs(d?n.shift?.x||0:n.shift?.y||0)<=1?u===`start`===(d&&o.isRTL?.(t)===!0)?`100%`:`0%`:`${(d?n.arrow?.x||0:n.arrow?.y||0)+(d?f?.clientWidth||0:f?.clientHeight||0)/2}px`;let h=l===`top`||l===`left`?`calc(100% + ${p}px)`:`${-p}px`;return V&&d&&Math.abs(n.shift?.y||0)>p&&(h=`${s.reference.y+s.reference.height/2-c}px`),t.style.setProperty(Pf,d?`${m} ${h}`:`${h} ${m}`),{}}},Of,x),Z(()=>{!_&&g&&g.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[_,g]);let pe=f.useMemo(()=>({ancestorScroll:!p,elementResize:!p&&typeof ResizeObserver<`u`,layoutShift:!p&&typeof IntersectionObserver<`u`}),[p]),{refs:me,elements:he,x:ge,y:_e,middlewareData:ve,update:ye,placement:be,context:xe,isPositioned:Se,floatingStyles:Ce}=t({rootContext:g,open:h?_:void 0,placement:te,middleware:le,strategy:r,whileElementsMounted:h?void 0:(...e)=>wu(...e,pe),nodeId:b,externalTree:C}),{sideX:we,sideY:Te}=ve.adaptiveOrigin||kf,Ee=Se?r:`fixed`,De=f.useMemo(()=>{let e;return e=Se?x?{position:Ee,[we]:ge,[Te]:_e}:{...Ce,position:Ee}:{position:Ee,top:0,left:0},e[Ff]=`100vw`,e[If]=`100vh`,Se||(e.opacity=0),e},[x,Ee,we,ge,Te,_e,Ce,Se]),Oe=f.useRef(null);Z(()=>{if(!_)return;let e=P.current,t=typeof e==`function`?e():e,n=(Bf(t)?t.current:t)||null;n!==Oe.current&&(me.setPositionReference(n),Oe.current=n)},[_,me,N,P]),f.useEffect(()=>{if(!_)return;let e=P.current;typeof e!=`function`&&Bf(e)&&e.current!==Oe.current&&(me.setPositionReference(e.current),Oe.current=e.current)},[_,me,N,P]),f.useEffect(()=>{if(h&&_&&he.reference&&he.floating)return wu(he.reference,he.floating,ye,pe)},[h,_,he,ye,pe]);let ke=Bs(be),Ae=Lf(i,ke,F),je=Vs(be)||`center`,Me=!!ve.hide?.referenceHidden;Z(()=>{S&&_&&Se&&ke!==I&&T(ke)},[S,_,Se,ke,I]);let Ne=f.useMemo(()=>({position:`absolute`,top:ve.arrow?.y,left:ve.arrow?.x}),[ve.arrow]),Pe=ve.arrow?.centerOffset!==0;return f.useMemo(()=>({positionerStyles:De,arrowStyles:Ne,arrowRef:ie,arrowUncentered:Pe,side:Ae,align:je,physicalSide:ke,anchorHidden:Me,refs:me,context:xe,isPositioned:Se,update:ye}),[De,Ne,ie,Pe,Ae,je,ke,Me,me,xe,Se,ye])}function Bf(e){return e!=null&&`current`in e}function Vf(e){return zf(e,md)}var Hf=f.createContext(void 0);function Uf(e=!1){let t=f.useContext(Hf);if(!t&&!e)throw Error(Bc(42));return t}var Wf={name:`adaptiveOrigin`,async fn(e){let{x:t,y:n,rects:{floating:r},elements:{floating:i},platform:a,strategy:o,placement:s}=e,c=q(i),l=c.getComputedStyle(i);if(l.transitionDuration===`0s`||l.transitionDuration===``)return{x:t,y:n,data:kf};let u=await a.getOffsetParent?.(i),d={width:0,height:0};if(o===`fixed`&&c?.visualViewport)d={width:c.visualViewport.width,height:c.visualViewport.height};else if(u===c){let e=po(i);d={width:e.documentElement.clientWidth,height:e.documentElement.clientHeight}}else await a.isElement?.(u)&&(d=await a.getDimensions(u));let f=Bs(s),p=t,m=n;f===`left`&&(p=d.width-(t+r.width)),f===`top`&&(m=d.height-(n+r.height));let h=f===`left`?`right`:kf.sideX,g=f===`top`?`bottom`:kf.sideY;return{x:p,y:m,data:{sideX:h,sideY:g}}}};function Gf(e){return e===`starting`?gl:go}function Kf(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),ll(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},Gf(r),i],stateAttributesMapping:Qo})}var qf=pf(),Jf=f.forwardRef(function(e,t){let{open:n,mounted:r,positionerElement:i,setPositionerElement:a,floatingRootContext:o,nested:s,transitionStatus:c}=Cd(),{className:l,render:u,anchor:d,positionMethod:p=`absolute`,side:m=`bottom`,align:h=`center`,sideOffset:g=0,alignOffset:_=0,collisionBoundary:v=`clipping-ancestors`,collisionPadding:y=5,collisionAvoidance:b=s?vl:_l,arrowPadding:x=5,sticky:S=!1,disableAnchorTracking:C=!1,style:w,...T}=e,E=wf(),D=Td(),O=bo(),k=bo(),[A,j]=f.useState(n),M=f.useRef(n);f.useEffect(()=>{if(!i)return;function e(e){i&&Ac(e)&&(e.type===`focusin`?Mc:jc)(i)}return gs($(i,`focusin`,e,!0),$(i,`focusout`,e,!0))},[i]);let N=(o||qf).useState(`domReferenceElement`),P=Vf({anchor:d??N,positionMethod:p,mounted:r,side:m,sideOffset:g,align:h,alignOffset:_,arrowPadding:x,collisionBoundary:v,collisionPadding:y,sticky:S,disableAnchorTracking:C,keepMounted:E,floatingRootContext:o,collisionAvoidance:b,shift:{rootBoundary:`layoutViewport`},nodeId:D,adaptiveOrigin:Wf}),ee={open:n,side:P.side,align:P.align,anchorHidden:P.anchorHidden,instant:A};f.useEffect(()=>{if(!n)return;M.current&&O.start(0,()=>{M.current=!1,k.isStarted()||j(!1)});function e(){bl.flushSync(()=>{j(!0)}),k.start(100,()=>{j(!1)})}return $(q(i),`resize`,e)},[n,O,k,i]);let F=Kf(e,ee,{styles:P.positionerStyles,transitionStatus:c,props:T,refs:[t,a],hidden:!r,inert:!n});return(0,W.jsx)(Hf.Provider,{value:P,children:F})}),Yf=pf();function Xf({children:e}){let{beforeInsideRef:t,beforeOutsideRef:n,afterInsideRef:r,afterOutsideRef:i,positionerElement:a,viewportElement:o,floatingRootContext:s}=Cd(),c=!!Uf(!0),l=a||o;return!s&&!c?e:(0,W.jsxs)(f.Fragment,{children:[(0,W.jsx)(js,{ref:t,onFocus:e=>{l&&Ac(e,l)?Oc(l)?.focus():n.current?.focus()}}),e,(0,W.jsx)(js,{ref:r,onFocus:e=>{l&&Ac(e,l)?kc(l)?.focus():i.current?.focus()}})]})}var Zf=f.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,id:o,...s}=e,c=Rc(o),{setViewportElement:l,setViewportTargetElement:u,floatingRootContext:d,prevTriggerElementRef:f,viewportInert:p,setViewportInert:m}=Cd(),h=!!Uf(!0),g=(d||Yf).useState(`domReferenceElement`);Z(()=>{g&&(f.current=g)},[g,f]);let _=ll(`div`,e,{ref:[t,l],props:[{id:c,onBlur(e){let t=e.relatedTarget,n=e.currentTarget;t&&!Q(n,t)&&t!==g&&m(!0)},...!h&&p&&{inert:vf(!0)},children:h?a:(0,W.jsx)(Xf,{children:(0,W.jsx)(`div`,{ref:u,children:a})})},s]});return h?(0,W.jsx)(Xf,{children:_}):_}),Qf=f.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{open:s,transitionStatus:c,setPopupElement:l}=Cd(),u=Uf(),d=lf(),f=gf(a),p={open:s,transitionStatus:c,side:u.side,align:u.align,anchorHidden:u.anchorHidden},m=u.side===`left`;m||=d===`rtl`?u.side===`inline-end`:u.side===`inline-start`;let h=u.side===`top`||m;return ll(`nav`,e,{state:p,ref:[t,l],props:[{id:f,tabIndex:-1,style:h?{position:`absolute`,[u.side===`top`?`bottom`:`top`]:`0`,[m?`right`:`left`]:`0`}:{}},Gf(c),o],stateAttributesMapping:$o})}),$f=f.forwardRef(function(e,t){let{className:n,render:r,active:i=!1,closeOnClick:a=!1,style:o,...s}=e,{setValue:c,popupElement:l,positionerElement:u,rootRef:d}=Cd(),f=Td(),p=jl();return(0,W.jsx)(Sf,{tag:`a`,render:r,className:n,style:o,state:{active:i},refs:[t],props:[{"aria-current":i?`page`:void 0,tabIndex:void 0,onClick(e){a&&c(null,hs(fs,e.nativeEvent))},onBlur(e){u&&l&&yf({currentTarget:e.currentTarget,relatedTarget:e.relatedTarget},{popupElement:l,rootRef:d,tree:p,nodeId:f})&&c(null,hs(ps,e.nativeEvent))}},s]})});function ep(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ep(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function tp(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ep(e))&&(r&&(r+=` `),r+=t);return r}var np=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,rp=tp,ip=(e,t)=>n=>{if(t?.variants==null)return rp(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=np(t)||np(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return rp(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)};function ap({align:e=`start`,className:t,children:n,...r}){return(0,W.jsxs)(Nd,{"data-slot":`navigation-menu`,className:d(`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center`,t),...r,children:[n,(0,W.jsx)(lp,{align:e})]})}function op({className:e,...t}){return(0,W.jsx)(mf,{"data-slot":`navigation-menu-list`,className:d(`group flex flex-1 list-none items-center justify-center gap-0`,e),...t})}function sp({className:e,...t}){return(0,W.jsx)(_f,{"data-slot":`navigation-menu-item`,className:d(`relative`,e),...t})}var cp=ip(`group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted`);function lp({className:e,side:t=`bottom`,sideOffset:n=8,align:r=`start`,alignOffset:i=0,...a}){return(0,W.jsx)(Tf,{children:(0,W.jsx)(Jf,{side:t,sideOffset:n,align:r,alignOffset:i,className:d(`isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0`,e),...a,children:(0,W.jsx)(Qf,{className:`data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0`,children:(0,W.jsx)(Zf,{className:`relative size-full overflow-hidden`})})})})}function up({className:e,...t}){return(0,W.jsx)($f,{"data-slot":`navigation-menu-link`,className:d(`flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4`,e),...t})}var dp=[{name:`Acting`,url:`/#acting`},{name:`Tech`,url:`/#tech`},{name:`Committee`,url:`/#committee`},{name:`Mailing Lists`,url:`/#talk`,priority:!0},{name:`Contact`,url:`/#contact`},{name:`Tickets`,url:`/#tickets`,priority:!0}],fp=()=>(0,W.jsx)(`div`,{className:`w-full bg-black text-white`,children:(0,W.jsx)(ap,{className:`min-w-full`,children:(0,W.jsx)(c,{children:(0,W.jsxs)(`div`,{className:`flex justify-between items-center py-2`,children:[(0,W.jsx)(l,{width:50,className:`sm:w-[75px]! sm:h-[75px]!`}),(0,W.jsx)(op,{className:`justify-end`,children:dp.map(e=>(0,W.jsx)(sp,{className:[e.priority?``:`hidden sm:list-item`].join(` `),children:(0,W.jsx)(up,{className:cp(),render:(0,W.jsx)(s,{to:e.url,children:(0,W.jsx)(`h2`,{className:`font-bold`,children:e.name})})})},e.name))})]})})})}),pp=r(function(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`grow flex flex-col`,children:[(0,W.jsx)(fp,{}),(0,W.jsx)(n,{})]}),(0,W.jsx)(Ia,{})]})});export{pp as default};