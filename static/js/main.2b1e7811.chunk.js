(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(5),s=a.n(u),l=a(10),i=a(72),d=a(73),m=a(83),f=a(82),p=a(227),h=a(231),v=a(228),E=a(229),b=a(30),y=a.n(b),g=a(31),_=a.n(g),x=a(13),C=a.n(x),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:C.a.container},r.a.createElement(p.a,{container:!0,spaceing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(C.a.card,C.a.infected)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(C.a.card,C.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(C.a.card,C.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of deaths by COVID-19"))))):"Loading..."},O=a(29),j=a(32),k=a.n(j),D="https://covid19.mathdro.id/api",N=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:u,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(43),U=a(78),V=a.n(U),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),d=Object(O.a)(i,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?r.a.createElement(B.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",backgroundColor:"rgba(255,0,0,0.5)",borderColor:"red",fill:!0}]}}):null,h=a?r.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:V.a.container},u?h:p)},J=a(232),P=a(230),G=a(79),H=a.n(G),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(J.a,{className:H.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Y=a(80),z=a.n(Y),L=function(){return r.a.createElement("div",{className:z.a.footer},"Credit to ",r.a.createElement("a",{href:"https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A"},"JS_Mastery"))},Q=a(44),R=a.n(Q),T=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:R.a.header},"Welcome to a daily, responsive Corona Tracker web app."),r.a.createElement("h4",null,"Try it out!"),r.a.createElement("ul",{className:R.a.dashed},r.a.createElement("li",null,"You can change the graph"),r.a.createElement("li",null,"You can change the countries")))},q=a(45),F=a.n(q),K=a(81),W=a.n(K),X=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:F.a.container},r.a.createElement("img",{src:W.a,className:F.a.image}),r.a.createElement(T,null),r.a.createElement(w,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}),r.a.createElement(L,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))},44:function(e,t,a){e.exports={header:"Header_header__1VCKf",dashed:"Header_dashed__GBPas"}},45:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},80:function(e,t,a){e.exports={footer:"Footer_footer__1w0lV"}},81:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},86:function(e,t,a){e.exports=a(209)}},[[86,1,2]]]);
//# sourceMappingURL=main.2b1e7811.chunk.js.map