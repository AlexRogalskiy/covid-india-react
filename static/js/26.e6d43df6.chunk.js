(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{137:function(e,t,a){"use strict";var n=a(0),c=a(89),r=["mousedown","touchstart"];t.a=function(e,t,a){void 0===a&&(a=r);var o=Object(n.useRef)(t);Object(n.useEffect)((function(){o.current=t}),[t]),Object(n.useEffect)((function(){for(var t=function(t){var a=e.current;a&&!a.contains(t.target)&&o.current(t)},n=0,r=a;n<r.length;n++){var l=r[n];Object(c.c)(document,l,t)}return function(){for(var e=0,n=a;e<n.length;e++){var r=n[e];Object(c.b)(document,r,t)}}}),[a,e])}},145:function(e,t,a){"use strict";a.r(t);var n=a(81),c=a(7),r=a(0),o=a.n(r),l=a(251),s=a(5),i=a(84),d=a(137),u=function(e){var t=e.stateCode,a=e.trail,u=Object(r.useState)(!1),m=Object(n.a)(u,2),f=m[0],v=m[1],p=Object(r.useRef)(),b=Object(s.g)(),h=Object(l.a)().t;Object(d.a)(p,(function(){v(!1)}));var j=Object(i.f)(f,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),O=Object(r.useCallback)((function(e){v(!1),b.push("/state/".concat(e))}),[b]);return o.a.createElement("div",{className:"StateDropdown",ref:p},o.a.createElement(i.a.h1,{className:"state-name fadeInUp",style:a,onClick:v.bind(void 0,!f)},h(c.s[t])),j.map((function(e){var a=e.item,n=e.key,r=e.props;return a?o.a.createElement(i.a.div,{className:"dropdown",style:r,key:n},Object.keys(c.h).filter((function(e){return"TT"!==e&&e!==t})).sort((function(e,t){return c.s[e].localeCompare(c.s[t])})).map((function(e){return o.a.createElement("h1",{key:e,className:"item",onClick:O.bind(void 0,e)},h(c.s[e]))}))):o.a.createElement(i.a.div,{key:t,style:r})})),f&&o.a.createElement("div",{className:"backdrop"}))},m=a(31);t.default=o.a.memo((function(e){var t,a,n,s,d,f=e.data,v=e.stateCode,p=Object(l.a)().t,b=Object(r.useMemo)((function(){var e=[];return[0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(250*a,"ms")}),null})),e}),[]),h=Object(i.c)({total:Object(m.h)(f,"total","tested"),config:c.p});return o.a.createElement("div",{className:"StateHeader"},o.a.createElement("div",{className:"header-left"},o.a.createElement(u,Object.assign({stateCode:v},{hyperlink:!1,trail:b[0]})),(null===f||void 0===f||null===(t=f.meta)||void 0===t?void 0:t.last_updated)&&o.a.createElement("h5",{className:"fadeInUp",style:b[1]},"Last Updated on ".concat(Object(m.c)(f.meta.last_updated,"dd MMM, p")," IST"))),o.a.createElement("div",{className:"header-right fadeInUp",style:b[2]},o.a.createElement("h5",null,p("Tested")),o.a.createElement(i.a.h2,null,h.total.interpolate((function(e){return Object(m.e)(Math.floor(e))}))),(null===f||void 0===f||null===(a=f.meta)||void 0===a||null===(n=a.tested)||void 0===n?void 0:n.last_updated)&&o.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(m.c)(f.meta.tested.last_updated,"dd MMMM"))),(null===f||void 0===f||null===(s=f.meta)||void 0===s||null===(d=s.tested)||void 0===d?void 0:d.source)&&o.a.createElement("h5",null,"per ",o.a.createElement("a",{href:f.meta.tested.source,target:"_noblank"},"source"))))}))}}]);
//# sourceMappingURL=26.e6d43df6.chunk.js.map