(this["webpackJsonpannorxiver-journal-recommender"]=this["webpackJsonpannorxiver-journal-recommender"]||[]).push([[0],{26:function(e,t,a){},31:function(e,t,a){e.exports=a(54)},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a(61),s=a(5);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createElement("style",null,"\n    #logo:hover #star,\n    #logo[data-spin] #star {\n      animation: star_rotate 2s ease forwards infinite;\n    }\n    @keyframes star_rotate {\n      from {\n        transform: rotate(0);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "),m=r.a.createElement("path",{id:"book_filling",fill:"#ffe0b2",d:"       M 10 50       L 50 70       L 90 50       L 90 35       L 50 55       L 10 35       A 10 10 0 0 0 10 50       M 10 65       L 50 85       L 90 65       L 90 50       L 50 70       L 10 50       A 10 10 0 0 0 10 65     "}),p=r.a.createElement("path",{id:"book_top_cover",fill:"#000000",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 50 15       L 90 35       L 50 55       L 10 35       z     "}),d=r.a.createElement("path",{id:"book_outlines",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 10 50       L 30 60       M 47.5 68.75       L 50 70       L 90 50       M 10 65       L 50 85       L 90 65       M 10 35       A 10 10 0 0 0 10 50       A 10 10 0 0 0 10 65     "}),f=r.a.createElement("path",{id:"bookmark",fill:"#000000",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 35 55       L 35 71.25       L 38.75 69.25       L 42.5 74.75       L 42.5 58.75       z     "}),h=r.a.createElement("g",{transform:"translate(50,34) rotate(26.565) skewX(-26.565) scale(0.10)"},r.a.createElement("path",{id:"star",fill:"#ffe0b2",stroke:"#ffe0b2",strokeWidth:20,strokeLinecap:"round",strokeLinejoin:"round",d:"         M 0.000 -100.000         L 29.389 -40.451         L 95.106 -30.902         L 47.553 15.451         L 58.779 80.902         L 0.000 50.000         L -58.779 80.902         L -47.553 15.451         L -95.106 -30.902         L -29.389 -40.451         z       "})),b=function(e){var t=e.svgRef,a=e.title,n=i(e,["svgRef","title"]);return r.a.createElement("svg",o({viewBox:"0 0 100 100",id:"logo",ref:t},n),a?r.a.createElement("title",null,a):null,u,m,p,d,f,h)},E=r.a.forwardRef((function(e,t){return r.a.createElement(b,o({svgRef:t},e))})),v=(a.p,a(36),function(){return r.a.createElement("header",null,r.a.createElement("section",null,r.a.createElement("h1",null,"AnnoRxiver"),r.a.createElement("h2",null,"Journal Recommender"),r.a.createElement(E,{className:"logo"})))}),g=a(7),j=a.n(g),w=a(10),y=a(6),O=a(13),x=a(22),k=function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n,r,c,l,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.crossref.org/works/"+t);case 2:return e.next=4,e.sent.json();case 4:return c=e.sent,l=c.message,console.log("Preprint info:",l),s={title:(l.title||[]).flat().join(""),url:l.URL||"",authors:(l.author||[]).map((function(e){return(e.given||"")+" "+(e.family||"")})).filter((function(e){return e})).join(", "),journal:l.publisher||"",year:(null===(a=l.accepted)||void 0===a||null===(n=a["date-parts"])||void 0===n||null===(r=n[0])||void 0===r?void 0:r[0])||""},e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n,r,c,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-journal-rec.greenelab.com/doi/"+t);case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,n=a.journal_neighbors||[],r=a.paper_neighbors||[],c={x:a["2d_coord"].dim1,y:a["2d_coord"].dim2},l=function(e){return e.pmcid=(e.pmcid||e.document||"").replace("PMC","")},n.forEach(l),r.forEach(l),e.abrupt("return",{similarJournals:n,similarPapers:r,coordinates:c});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e.pmcid})).filter((function(e){return e})),e.next=3,fetch("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&tool=AnnoRxivir&email=greenescientist@gmail.com&retmode=json&id="+a.join(","));case 3:return e.next=5,e.sent.json();case 5:return n=e.sent.result,r=function(e){return Object(x.a)(Object(x.a)({},e),n[e.pmcid]||{})},t=t.map(r),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.distance})),a=Math.max.apply(Math,Object(O.a)(t)),n=Math.min.apply(Math,Object(O.a)(t)),r=a-n;return e.sort((function(e,t){return e.distance-t.distance})),e=e.map((function(e,t){return{id:e.pmcid||null,title:e.title||"",authors:(e.authors||[]).map((function(e){return e.name||""})).filter((function(e){return e})).join(", "),journal:(e.fulljournalname||e.journal||"").split("_").join(" "),year:(e.pubdate||"").split(" ")[0]||"",distance:e.distance,strength:(e.distance-n)/r,rank:t+1}}))},N=(a(38),function(e){var t=e.status;return"LOADING"===t?r.a.createElement("section",{className:"center"},r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fas fa-spinner fa-spin icon_with_text"}),r.a.createElement("span",null,"Loading..."))):"ERROR"===t?r.a.createElement("section",{className:"center"},r.a.createElement("div",{className:"error"},r.a.createElement("i",{className:"far fa-times-circle icon_with_text"}),r.a.createElement("span",null,"Couldn't get results"))):null}),P=(a(39),function(e){var t=e.setPreprint,a=e.status,c=e.setStatus,l=e.setSimilarJournals,o=e.setSimilarPapers,i=e.setCoordinates,u=Object(n.useState)(M()||""),m=Object(s.a)(u,2),p=m[0],d=m[1],f=Object(n.useCallback)((function(e){return d(e.target.value.trim())}),[]),h=Object(n.useCallback)(function(){var e=Object(w.a)(j.a.mark((function e(a){var n,r,s,u,m,p,f=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(f.length>1&&void 0!==f[1])||f[1],a=C(a),d(a),a){e.next=5;break}return e.abrupt("return");case 5:return c("LOADING"),n&&R(a),e.prev=7,e.next=10,k(a);case 10:return r=e.sent,t(r),e.next=14,S(a);case 14:return s=e.sent,u=s.similarJournals,m=s.similarPapers,p=s.coordinates,e.next=20,_(u);case 20:return u=e.sent,e.next=23,_(m);case 23:m=e.sent,u=L(u),m=L(m),l(u),o(m),i(p),c("SUCCESS"),e.next=37;break;case 32:e.prev=32,e.t0=e.catch(7),console.log(e.t0),y.a(e.t0,{tags:{doi:a}}),c("ERROR");case 37:case"end":return e.stop()}}),e,null,[[7,32]])})));return function(t){return e.apply(this,arguments)}}(),[t,c,l,o,i]),b=Object(n.useCallback)((function(){var e=M();e&&(d(e),h(e,!1))}),[h]);return Object(n.useEffect)((function(){M()&&h(M())}),[h]),Object(n.useEffect)((function(){return window.addEventListener("popstate",b),function(){return window.removeEventListener("popstate",b)}}),[b,h]),r.a.createElement("section",{id:"search"},r.a.createElement("p",{className:"center"},r.a.createElement("i",null,"Enter the ",r.a.createElement("a",{href:"https://www.biorxiv.org/"},"bioRxiv")," or"," ",r.a.createElement("a",{href:"https://www.medrxiv.org/"},"medRxiv")," DOI of your preprint")),r.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),h(p)}},r.a.createElement("input",{className:"search_input",value:p,onChange:f,type:"text",placeholder:"e.g. 10.1101/833400",disabled:"LOADING"===a}),r.a.createElement("button",{className:"search_button",type:"submit",title:"Search for related papers and journals",disabled:"LOADING"===a},r.a.createElement("i",{className:"fas fa-search"}))))}),C=function(e){return e.replace(/^\D*/g,"").replace(/v\d+$/g,"").trim()},M=function(){return new URLSearchParams(window.location.search.substring(1)).get("doi")},R=function(e){var t=window.location.href,a=window.location.href.split(/[?#]/)[0]+"?doi="+e;t!==a&&window.history.pushState(null,null,a)},I=function(e){var t=e.preprint,a=e.status;return r.a.createElement("section",{id:"your-preprint"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-feather-alt heading_icon"}),"Your Preprint"),0===Object.keys(t).length&&r.a.createElement(N,{status:a}),0!==Object.keys(t).length&&r.a.createElement("p",null,r.a.createElement("a",{href:t.url,title:t.title,className:"card_detail"},t.title),r.a.createElement("div",{title:t.authors,className:"card_detail truncate",tabIndex:"0"},t.authors),r.a.createElement("div",{title:t.journal+" \xb7 "+t.year,className:"card_detail truncate",tabIndex:"0"},t.journal," \xb7 ",t.year)))},A=a(8),J=a.n(A),D=(a(26),J()("#ff980020")),F=J()("#ff9800"),T=function(e){var t=e.similarJournals,a=e.status;return r.a.createElement("section",{id:"similar-journals"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-bookmark heading_icon"}),"Most Similar Journals"),"SUCCESS"!==a&&r.a.createElement(N,{status:a}),"SUCCESS"===a&&t.map((function(e,t){var a=e.journal,n=e.rank,c=e.distance,l=e.strength;return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("div",{className:"card_score",title:"Distance score: "+c,style:{backgroundColor:F.mix(D,l)}},n),r.a.createElement("div",{className:"card_details"},r.a.createElement("a",{href:"https://www.google.com/search?q="+a,className:"card_detail"},a)))})))},q=J()("#ff980020"),G=J()("#ff9800"),U=function(e){var t=e.similarPapers,a=e.status;return r.a.createElement("section",{id:"similar-papers"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-scroll heading_icon"}),"Most Similar Papers"),"SUCCESS"!==a&&r.a.createElement(N,{status:a}),"SUCCESS"===a&&t.map((function(e,t){var a=e.id,n=e.title,c=e.authors,l=e.year,s=e.journal,o=e.rank,i=e.distance,u=e.strength;return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("div",{className:"card_score",title:"Distance score: "+i,style:{backgroundColor:G.mix(q,u)}},o),r.a.createElement("div",{className:"card_details"},r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/"+a,title:n,className:"card_detail"},n),r.a.createElement("div",{title:c,className:"card_detail truncate",tabIndex:"0"},c),r.a.createElement("div",{title:s+" \xb7 "+l,className:"card_detail truncate",tabIndex:"0"},s," \xb7 ",l)))})))},B=a(60),z=(a(49),function(e){var t=e.selectedPc,a=e.setSelectedPc;return r.a.createElement("p",{className:"center"},re($,K).map((function(e){return r.a.createElement(X,Object.assign({key:e},{number:e,selectedPc:t,setSelectedPc:a}))})))}),X=function(e){var t=e.number,a=e.selectedPc,l=e.setSelectedPc,o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(null),d=Object(s.a)(p,2),f=d[0],h=d[1],b=Object(n.useState)(null),E=Object(s.a)(b,2),v=E[0],g=E[1],j=Object(n.useRef)(),w=Object(B.a)(f,v,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{rootBoundary:"document"}}]}),y=w.styles,O=w.attributes,x=w.update;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:h,className:"cloud_button","data-number":ce(t),"data-selected":a===t,onClick:function(){return l(a===t?null:t)},onMouseEnter:function(){window.clearTimeout(j.current),j.current=window.setTimeout((function(){return m(!0)}),200)},onMouseLeave:function(){window.clearTimeout(j.current),m(!1)}},r.a.createElement("img",{src:le(t),title:"Select principal component "+ce(t),alt:"Select principal component "+ce(t),onLoad:x})),u&&Object(c.createPortal)(r.a.createElement("img",Object.assign({ref:g,src:le(t),className:"cloud_enlarged",title:"Select principal component "+ce(t),alt:"Select principal component "+ce(t),onLoad:x,style:y.popper},O.popper)),document.body))},W=a(21),H=(a(50),function(e){var t=e.cells,a=e.selectedPc,c=e.selectedCell,l=e.setSelectedCell,o=e.coordinates,i=Object(n.useRef)(),u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],d=m[1];if(a){var f,h=Object(W.a)(t);try{for(h.s();!(f=h.n()).done;){var b=f.value,E=b.pcs.find((function(e){return e.name===ce(a)}));b.score=(null===E||void 0===E?void 0:E.score)||0}}catch(N){h.e(N)}finally{h.f()}var v,g=Math.max.apply(Math,Object(O.a)(t.map((function(e){return Math.abs(e.score)}))))||1,j=Object(W.a)(t);try{for(j.s();!(v=j.n()).done;){var w=v.value;w.strength=w.score/g}}catch(N){j.e(N)}finally{j.f()}}else{var y,x=t.map((function(e){return e.count})),k=Math.min.apply(Math,Object(O.a)(x)),S=Math.max.apply(Math,Object(O.a)(x)),_=Object(W.a)(t);try{for(_.s();!(y=_.n()).done;){var L=y.value;L.strength=(L.count-k)/(S-k)}}catch(N){_.e(N)}finally{_.f()}}return Object(n.useEffect)((function(){if(i.current){var e=i.current.getBBox(),t=e.x,a=e.y,n=e.width,r=e.height;d([t,a,n,r].join(" "))}}),[t]),r.a.createElement("p",null,r.a.createElement("svg",{ref:i,viewBox:p||void 0,className:"map"},t.concat(c||[]).map((function(e,t){return r.a.createElement("rect",{key:t,className:"cell",x:e.x-(.4+.01)/2,y:e.y-(.4+.01)/2,width:.4+.01,height:.4+.01,"data-selected":e===c,fill:a?te.mix(e.strength>0?ee:ae,Math.abs(e.strength)):Z.mix(Q,e.strength),onClick:function(){return l(e===c?null:e)}})})),o.x&&o.y&&r.a.createElement("circle",{className:"marker",cx:o.x,cy:o.y,r:(.4+.01)/2})))}),V=(a(51),function(e){var t=e.selectedPc,a=e.coordinates;return r.a.createElement("p",{className:"legend"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:ee}}),"pos pc",ce(t)),r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:ae}}),"neg pc",ce(t))),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:Q}}),"many papers"),r.a.createElement("span",null,r.a.createElement("span",{className:"legend_square",style:{backgroundColor:Z}}),"few papers")),a.x&&a.y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("span",{className:"legend_circle",style:{backgroundColor:"var(--red)"}}),"your preprint")))}),Y=(a(52),function(e){var t=e.selectedCell,a=e.selectedPc,n=e.setSelectedPc;return r.a.createElement("div",null,r.a.createElement("h4",null,"Papers"),r.a.createElement("p",null,t.count.toLocaleString()),r.a.createElement("h4",null,"Top Journals"),r.a.createElement("p",null,t.journals.map((function(e,t){var a=e.name,n=e.count;return r.a.createElement("span",{key:t,className:"cell_detail_row"},r.a.createElement("span",{className:"truncate"},a),r.a.createElement("span",{className:"truncate"},n.toLocaleString()," papers"))}))),r.a.createElement("h4",null,"Top Principal Components"),r.a.createElement("p",null,t.pcs.slice(0,5).map((function(e,t){var c=e.name,l=e.score;return r.a.createElement("span",{key:t,className:"cell_detail_row"},r.a.createElement("a",{role:"button",title:"Select principal component "+ce(parseInt(c)),onClick:function(){return n(parseInt(c))}},c,parseInt(c)===a&&r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement("span",null,l.toFixed(2)," score"))}))))}),$=1,K=50,Q=J()("#606060"),Z=J()("#e0e0e0"),ee=J()("#ff9800"),te=J()("#e0e0e0"),ae=J()("#2196f3"),ne=function(e){var t=e.coordinates,a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(null),u=Object(s.a)(i,2),m=u[0],p=u[1],d=Object(n.useState)(null),f=Object(s.a)(d,2),h=f[0],b=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,fetch("./data/plot.json");case 3:return e.next=5,e.sent.json();case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("section",{id:"map"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-map heading_icon"}),"Map of PubMed Central"),r.a.createElement(z,{selectedPc:m,setSelectedPc:p}),r.a.createElement(H,{cells:l,selectedPc:m,selectedCell:h,setSelectedCell:b,coordinates:t}),r.a.createElement(V,{selectedPc:m,coordinates:t}),h&&r.a.createElement(Y,{selectedCell:h,selectedPc:m,setSelectedPc:p}))},re=function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},ce=function(e){return String(e).padStart(2,"0")},le=function(e){return"https://raw.githubusercontent.com/greenelab/annorxiver/master/biorxiv/pca_association_experiment/output/word_pca_similarity/figures/pca_XX_cossim_word_cloud.png".replace("XX",ce(e))},se=function(){return r.a.createElement("section",{id:"help"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-question-circle heading_icon"}),"About this tool"),r.a.createElement("p",null,"This tool uses a machine learning model trained on 1.7 million"," ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/"},"PubMed Central open access documents")," ","to recommend suitable journals based on the textual content of your"," ",r.a.createElement("a",{href:"https://www.biorxiv.org/"},"bioRxiv")," or"," ",r.a.createElement("a",{href:"https://www.medrxiv.org/"},"medRxiv")," preprint."),r.a.createElement("p",null,'The tool also provides a "map" of the PubMed Central documents, grouped into bins based on similar textual content, and shows you where your preprint falls on the map. Select a square to learn more about the papers in that bin.'),r.a.createElement("p",null,"The map also incorporates a set of 50"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Principal_component_analysis"},"principal components")," ","(PCs) generated from bioRxiv. Each PC represents two high level concepts characterized by keywords of various strengths, illustrated in the word cloud thumbnails above the map. Select a thumbnail to color the map by that PC. Deeper orange cells will be papers that correlate more with the orange keywords in the image, and vice versa for blue."),r.a.createElement("p",null,"For more information, see the"," ",r.a.createElement("a",{href:"https://github.com/greenelab/annorxiver-journal-recommender#annorxiver-journal-recommender"},"readme on GitHub"),"."))},oe=function(){return r.a.createElement("footer",null,r.a.createElement("section",null,r.a.createElement("p",null,"A project of the ",r.a.createElement("a",{href:"https://greenelab.com/"},"Greene Lab"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/greenelab/annorxiver_journal_rec_app"},r.a.createElement("i",{className:"fab fa-github icon_with_text"}),r.a.createElement("span",null,"View on GitHub")))))},ie=(a(53),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),p=Object(s.a)(m,2),d=p[0],f=p[1],h=Object(n.useState)([]),b=Object(s.a)(h,2),E=b[0],g=b[1],j=Object(n.useState)({}),w=Object(s.a)(j,2),y=w[0],O=w[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement(P,{preprint:i,setPreprint:u,status:a,setStatus:c,setSimilarJournals:f,setSimilarPapers:g,setCoordinates:O}),r.a.createElement("hr",null),""!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{preprint:i,status:a}),r.a.createElement("hr",null),r.a.createElement(U,{similarPapers:E,status:a}),r.a.createElement("hr",null),r.a.createElement(T,{similarJournals:d,status:a}),r.a.createElement("hr",null)),r.a.createElement(ne,{coordinates:y}),r.a.createElement("hr",null),r.a.createElement(se,null)),r.a.createElement(oe,null))});l.a({dsn:"https://b1183a2fe86f4a8f951e9bb67341c07f@o7983.ingest.sentry.io/5407669",environment:"production"}),Object(c.render)(r.a.createElement(ie,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d114c310.chunk.js.map