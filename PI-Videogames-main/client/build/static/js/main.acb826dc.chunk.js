(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,a,t){e.exports={cargando:"GameDetail_cargando__3ob3U",detailContainer:"GameDetail_detailContainer__9eU6d",divGameDetail:"GameDetail_divGameDetail__34kv_",imgInfo:"GameDetail_imgInfo__3cP44",imageContainer:"GameDetail_imageContainer__gDJVb",imageDetail:"GameDetail_imageDetail__1l76B",lettersDetail:"GameDetail_lettersDetail__Ccm3z",nameDetail:"GameDetail_nameDetail__10peB",infoDetail:"GameDetail_infoDetail__2TaHS",divDescription:"GameDetail_divDescription__3wC7t"}},19:function(e,a,t){e.exports={filtersContainer:"Filters_filtersContainer__IRFbc",selectFilter:"Filters_selectFilter__2zeDd",divFilter:"Filters_divFilter__2QZja",button:"Filters_button__2BQgk"}},23:function(e,a,t){e.exports={cardContainer:"Card_cardContainer__3E7RI",imageCard:"Card_imageCard__8aqXw",infoCard:"Card_infoCard__2MLJV",nameCard:"Card_nameCard__2iZHQ",genresCard:"Card_genresCard__3cruf",ratingCard:"Card_ratingCard__2_CH8"}},24:function(e,a,t){e.exports={landingContainer:"Landing_landingContainer__1myaL",divContainer:"Landing_divContainer__14o0j",logo:"Landing_logo__LMW4u",textButton:"Landing_textButton__1lAGn",buttonLanding:"Landing_buttonLanding__1i7Ii",divButton:"Landing_divButton__1zHSJ"}},26:function(e,a,t){e.exports={homeContainer:"Home_homeContainer__32tmn",cardsContainer:"Home_cardsContainer__2cFnF",divCard:"Home_divCard__Knouu",cargando:"Home_cargando__1o_bB"}},31:function(e,a,t){e.exports={paginatedContainer:"Paginated_paginatedContainer__1ZQg9",paginatedButton:"Paginated_paginatedButton__Vh8rk",inputPaginated:"Paginated_inputPaginated__3bswG"}},42:function(e,a,t){e.exports={searchBarContainer:"SearchBar_searchBarContainer__2OE9Q",searchBarInput:"SearchBar_searchBarInput__3YSEi",searchBarButton:"SearchBar_searchBarButton__2rSWZ"}},43:function(e,a,t){e.exports={buttonsContainer:"Buttons_buttonsContainer__6owRG",button:"Buttons_button__1FuWm",textButton:"Buttons_textButton__WVRnb"}},44:function(e,a,t){e.exports={navBarContainer:"NavBar_navBarContainer__2Fye1",logo:"NavBar_logo__2s0MG"}},56:function(e,a,t){},57:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(33),c=t.n(r),i=(t(56),t(57),t(4)),s=t(17),l=t(24),o=t.n(l),d=t.p+"static/media/logoLanding.25c7c7b3.png",u=t(1),m=function(){return Object(u.jsx)("div",{className:o.a.landingContainer,children:Object(u.jsxs)("div",{className:o.a.divContainer,children:[Object(u.jsx)("div",{children:"Welcome to"}),Object(u.jsx)("img",{src:d,alt:"imageLogo",className:o.a.logo}),Object(u.jsx)("div",{className:o.a.divButton,children:Object(u.jsx)("button",{className:o.a.buttonLanding,type:"button",children:Object(u.jsxs)(s.b,{to:"/home",className:o.a.textButton,children:["START ",">>>"]})})})]})})},j=t(7),b=t(13),g=t(6),p=t(10),O=t(68),h="GET_ALL_GAMES",v="GET_GAME_BY_NAME",f="GET_GAME_DETAIL",x="CREAR_DETAIL",_="GET_ALL_GENRES",C="ERROR",N="FILTER_BY_GENRE",A="FILTER_BY_CREATION",y="ORDER_BY_NAME",B="ORDER_BY_RATING",F="POST_NEW_GAME",G=function(){return function(){var e=Object(p.a)(Object(g.a)().mark((function e(a){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/videogames").then((function(e){return a({type:h,payload:e.data})}));case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",a({type:C,payload:e.t0.message}));case 8:case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(a){return e.apply(this,arguments)}}()},E=function(e){return function(){var a=Object(p.a)(Object(g.a)().mark((function a(t){var n,r;return Object(g.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.get("/videogames?name=".concat(e));case 3:return n=a.sent,r=n.data,a.abrupt("return",t({type:v,payload:r}));case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",t({type:C,payload:a.t0.message}));case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},D=function(){return function(){var e=Object(p.a)(Object(g.a)().mark((function e(a){var t,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/genres");case 3:return t=e.sent,n=t.data,e.abrupt("return",a({type:_,payload:n}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",a({type:C,payload:e.t0.message}));case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},k=t(42),R=t.n(k),S=function(){var e=Object(b.b)(),a=Object(n.useState)(""),t=Object(j.a)(a,2),r=t[0],c=t[1],i=function(){var a=Object(p.a)(Object(g.a)().mark((function a(t){var n;return Object(g.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),r.length){a.next=5;break}alert("Please, enter a name"),a.next=10;break;case 5:return a.next=7,E(r);case 7:n=a.sent,e(n),c("");case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:R.a.searchBarContainer,children:[Object(u.jsx)("input",{type:"search",placeholder:" Search game...",id:"searchGame",value:r,onChange:function(e){return function(e){e.preventDefault(),c(e.target.value)}(e)},className:R.a.searchBarInput}),Object(u.jsx)("button",{type:"submit",onClick:function(e){return i(e)},className:R.a.searchBarButton,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADa0lEQVR4nO1ZS2tTURA+bnzgA0RE3aqoWzeCC60P+gtc+kAUSgX/g6KLVvfurSBI0DuTGNJmVeydk7Y+wEVMc07Qou5su1J8tGJkTigk5yaXtPecJNV8MBACd2a+3JlzZr4I0UcfvYfSi2cHdAjXFeEjRfBGEy5qwmVjEhaUxNeaYExLvDY/m90veg2VEM5ogqyS+FtLrLZnsKIInyuJp7udv6gU0ocV4UT7ybe0nKbgUFdIqAJe0QTfHJBYta+agkudJUF4p2VChCVFMFKWcH6O8OjbfH47W1lmjvF3inBUE8y1el5JuN0REprgbgsCsxXCs+36qVBwUksMu0JGcTlFCfxSEoaq1eqmtfrjZzThMPto4veit8aO9AThoiI4ldQ3n1yacMnuGRU+Pegm+/pg9unEb8IBiVXoQjBQu2/qY0BWOL8nonU85L7/ghuROOTux+IGz1qX2cx6eqK9noGXjT8YZtyNHRJWGogUggHhCXzy2RPA++n0vsSOeXaySuqdk4zjYkooW+V1NbFTHgAtpyNOso2LKfGe9VYeJnfKU2ydU76dhWfoMD1oEXmV3CmP4nVOS1PBEeEZPNpYDf8lsVP71i1OpnYIz+AYVl/+dE5kjnCnk2zjYs7kdtm3vPgXSktL+JDYqVlPu9zsSsJ0cqe1Hbvu+MVRJ9nGxZRw34r5wPmFyEuRk2zjYkpUVswLiZ2y2mGPKDxECk/g0rWn7NJssMeJc1Y77G3Q19Bo96QmGHMWwCw+0Q1u2FmA1Thh+maT1fe40yBGsmkksuxSkzJTr7VYKcLHwjVYdzKSTSOZJRcjfU3gs1ddWNBTqb3CB1h3alJiy7zZrVd8MOVkr7g1myoWU5uFL7BU0ySomVDLMn2uXT9G47IbO2q5+cnJrV0gYwiVzT4RpgdZlOMBkI0/125sc9k13hMxpiRmvL4Z1p0iPePJFB//udwWb2RYd4oKE2tNEv4ogpSSmO8qGQZLNlwCEZEitmTgh5b4RBWCE+yDe0ERjMc+R5D1TobBagcLBbxjc/ObI9QIefhdEX5mqYcHwIqEyx/D7G77+Z4ikxTc2JGRSEbKcdzradZZMjjRJ9NpFP+7NyMx/6mQ2iZ6HfNtnWYd/v/Ry5shvCU2EorNyGw0Ek3JbFQS9T3j7c/SPvoQsfgLRsBfDYWhwRYAAAAASUVORK5CYII=",alt:"imageLupa"})})]})},P=t(43),I=t.n(P),T=function(){return Object(u.jsx)("div",{className:I.a.buttonsContainer,children:Object(u.jsx)("button",{className:I.a.button,children:Object(u.jsx)(s.b,{to:"/form",className:I.a.textButton,children:"Create new game"})})})},w=t(44),L=t.n(w),M=t.p+"static/media/LogoDetware.3e62c87c.png",V=function(e){var a=e.setPagina,t=e.setInputPag,n=Object(i.l)().pathname;return Object(u.jsxs)("div",{className:L.a.navBarContainer,children:[Object(u.jsx)(s.b,{to:"/home",className:L.a.textButton,children:Object(u.jsx)("img",{src:M,alt:"imageLogo",className:L.a.logo})}),Object(u.jsx)(T,{}),"/home"===n&&Object(u.jsx)("div",{children:Object(u.jsx)(S,{setPagina:a,setInputPag:t})})]})},Y=t(19),J=t.n(Y),U=function(e){var a=e.handleChangeByName,t=e.handleChangeByRating,n=e.handleChangeCreation,r=e.handleChangeGenres,c=Object(b.b)();return Object(u.jsxs)("div",{className:J.a.filtersContainer,children:[Object(u.jsx)("div",{className:J.a.divFilter,children:Object(u.jsxs)("label",{htmlFor:"allGames",children:[Object(u.jsx)("div",{children:"Games"}),Object(u.jsxs)("select",{name:"filterByCreation",id:"allGames",onChange:function(e){return n(e)},defaultValue:"default",className:J.a.selectFilter,children:[Object(u.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Select"}),Object(u.jsx)("option",{value:"existing",children:"Available"}),Object(u.jsx)("option",{value:"created",children:"Created"})]})]})}),Object(u.jsx)("div",{className:J.a.divFilter,children:Object(u.jsxs)("label",{htmlFor:"allGenres",children:[Object(u.jsx)("div",{children:"Genres"}),Object(u.jsx)("select",{name:"filterByGenre",id:"allGenres",onChange:function(e){return r(e)},className:J.a.selectFilter,children:[{value:"DEFAULT",name:"Select"},{value:"Action",name:"Action"},{value:"Adventure",name:"Adventure"},{value:"Arcade",name:"Arcade"},{value:"Board Games",name:"Board Games"},{value:"Card",name:"Card"},{value:"Casual",name:"Casual"},{value:"Educational",name:"Educational"},{value:"Family",name:"Family"},{value:"Fighting",name:"Fighting"},{value:"Indie",name:"Indie"},{value:"Massively Multiplayer",name:"Massively Multiplayer"},{value:"Platformer",name:"Platformer"},{value:"Puzzle",name:"Puzzle"},{value:"Racing",name:"Racing"},{value:"RPG",name:"RPG"},{value:"Shooter",name:"Shooter"},{value:"Simulation",name:"Simulation"},{value:"Sports",name:"Sports"},{value:"Strategy",name:"Strategy"}].map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.name)}))})]})}),Object(u.jsx)("div",{className:J.a.divFilter,children:Object(u.jsxs)("label",{htmlFor:"orderByName",children:[Object(u.jsx)("div",{children:"Alphabetical order"}),Object(u.jsxs)("select",{name:"orderByName",id:"orderByName",onChange:function(e){return a(e)},defaultValue:"default",className:J.a.selectFilter,children:[Object(u.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Select"}),Object(u.jsx)("option",{value:"ASC",children:"A-Z"}),Object(u.jsx)("option",{value:"DESC",children:"Z-A"})]})]})}),Object(u.jsx)("div",{className:J.a.divFilter,children:Object(u.jsxs)("label",{htmlFor:"orderByRating",children:[Object(u.jsx)("div",{children:"Rating order"}),Object(u.jsxs)("select",{name:"orderByRating",id:"orderByRating",onChange:function(e){return t(e)},defaultValue:"default",className:J.a.selectFilter,children:[Object(u.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Select"}),Object(u.jsx)("option",{value:"ASC",children:"min. rating"}),Object(u.jsx)("option",{value:"DESC",children:"max. rating"})]})]})}),Object(u.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),c(G())}(e)},className:J.a.button,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVR4nGNgGAWUgFvH1hfcOrrhP3F4/dObRzZ0XLmyig2ngTePrk8DYRSxIxsWEW/Jhv83j6xvx2r47SPrLG8d2fAThEFsUn174/A6G5hPMCTvn9wicevI+idIrnh+89hmaVItgelHETxzZibrraMbDmF49ej647e2bWOn2IJbRzbMxBNxCyi2gCQFBMCoBQTBaBBhBXiT+ZENMyhOpmdwZtQNxzAyKrn54D6xRQ2ooAIpABVcpFpym5jCElTUklQ0H12/mFBxjwJAlQXEEohPiMLH1heQ6ttRwIAMAKwf3m0ang/TAAAAAElFTkSuQmCC",alt:"imageaActualizar"})})]})},Q=t(23),W=t.n(Q),Z=function(e){var a=e.id,t=e.background_image,n=e.name,r=e.genres,c=e.rating;return Object(u.jsx)("div",{className:W.a.cardContainer,children:Object(u.jsxs)(s.b,{to:"/videogames/".concat(a),className:W.a.linkCard,children:[Object(u.jsx)("img",{src:t,alt:"imageGame",className:W.a.imageCard}),Object(u.jsxs)("div",{className:W.a.infoCard,children:[Object(u.jsx)("h1",{className:W.a.nameCard,children:n}),Object(u.jsx)("h3",{className:W.a.genresCard,children:r}),Object(u.jsxs)("h3",{className:W.a.ratingCard,children:["Rating: ",c]})]})]})})},z=t(31),X=t.n(z),H=function(e){var a=e.max,t=e.pagina,n=e.setPagina,r=e.inputPag,c=e.setInputPag;return Object(u.jsxs)("div",{className:X.a.paginatedContainer,children:[Object(u.jsx)("button",{onClick:function(){c(r-1),n(t-1)},disabled:1===t||t<1,className:X.a.paginatedButton,children:"<"}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){return function(e){c(e.target.value)}(e)},onKeyDown:function(e){return function(e){13===e.keyCode&&(n(parseInt(e.target.value)),parseInt(e.target.value)<1||parseInt(e.target.value)>Math.ceil(a)||isNaN(parseInt(e.target.value))?(n(1),c(1)):n(parseInt(e.target.value)))}(e)},className:X.a.inputPaginated}),Object(u.jsxs)("p",{children:["of ",a]}),Object(u.jsx)("button",{onClick:function(){c(r+1),n(t+1)},disabled:t===Math.ceil(a)||t>Math.ceil(a),className:X.a.paginatedButton,children:">"})]})},K=t(26),q=t.n(K),$=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.games})),t=Object(b.c)((function(e){return e.genres})),r=Object(n.useState)(1),c=Object(j.a)(r,2),i=c[0],s=c[1],l=Object(n.useState)(15),o=Object(j.a)(l,2),d=o[0],m=(o[1],Object(n.useState)(1)),g=Object(j.a)(m,2),p=g[0],O=g[1],h=Object(n.useState)(""),v=Object(j.a)(h,2),f=(v[0],v[1]),x=a.slice((i-1)*d,(i-1)*d+d),_=Math.ceil(a.length/d);Object(n.useEffect)((function(){a.length||e(G()),s(1),e(D())}),[e,a]);var C=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:y,payload:t})),s(1),O(1),f("Ordenar por ".concat(a.target.value))},F=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:B,payload:t})),s(1),O(1),f("Ordenar por ".concat(a.target.value))},E=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:A,payload:t})),s(1),O(1)},k=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:N,payload:t})),s(1),O(1)};return Object(u.jsx)("div",{className:q.a.homeContainer,children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(V,{setPagina:s,setInputPag:O,handleChangeByName:C,handleChangeByRating:F,handleChangeCreation:E,handleChangeGenres:k,genres:t}),Object(u.jsx)("div",{className:q.a.filtersContainer,children:Object(u.jsx)(U,{setPagina:s,setInputPag:O,handleChangeByName:C,handleChangeByRating:F,handleChangeCreation:E,handleChangeGenres:k,genres:t})}),Object(u.jsx)("div",{className:q.a.cardsContainer,children:x.length?x.map((function(e){var a;return Object(u.jsx)("div",{className:q.a.divCard,children:Object(u.jsx)(Z,{id:e.id,background_image:e.background_image,name:e.name,genres:(null===e||void 0===e||null===(a=e.genres)||void 0===a?void 0:a.join(", "))||"",rating:e.rating})},e.id)})):Object(u.jsx)("div",{className:q.a.cargando,children:" Loading... "})}),Object(u.jsx)(H,{max:_,pagina:i,setPagina:s,inputPag:p,setInputPag:O})]})})},ee=t(16),ae=t.n(ee),te=function(){var e,a=Object(i.p)(),t=Object(b.c)((function(e){return e.gameDetail})),r=Object(b.b)();return Object(n.useEffect)((function(){var e;return r((e=a.idVideogame,function(){var a=Object(p.a)(Object(g.a)().mark((function a(t){var n,r;return Object(g.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.get("/videogames/".concat(e));case 3:return n=a.sent,r=n.data,a.abrupt("return",t({type:f,payload:r}));case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",t({type:C,payload:a.t0.message}));case 11:case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}())),function(){r({type:x})}}),[r,a.idVideogame]),0===t.length?Object(u.jsx)("div",{className:ae.a.detailContainer,children:Object(u.jsx)("h1",{className:ae.a.cargando,children:"Loading..."})}):Object(u.jsxs)("div",{className:ae.a.detailContainer,children:[Object(u.jsx)(V,{}),Object(u.jsxs)("div",{className:ae.a.divGameDetail,children:[Object(u.jsxs)("div",{className:ae.a.imgInfo,children:[Object(u.jsx)("div",{className:ae.a.imageContainer,children:Object(u.jsx)("img",{src:t.background_image,alt:"imageGameDetail",className:ae.a.imageDetail})}),Object(u.jsxs)("div",{className:ae.a.lettersDetail,children:[Object(u.jsx)("h1",{className:ae.a.nameDetail,children:t.name}),Object(u.jsxs)("h2",{className:ae.a.infoDetail,children:["Available in: ",t.platforms.join(", ")]}),Object(u.jsxs)("h2",{className:ae.a.infoDetail,children:["Genres: ",null===t||void 0===t||null===(e=t.genres)||void 0===e?void 0:e.join(", ")]}),Object(u.jsxs)("h2",{className:ae.a.infoDetail,children:["Rating: ",t.rating]}),Object(u.jsxs)("h2",{className:ae.a.infoDetail,children:["Release data: ",t.released]}),Object(u.jsxs)("h3",{children:["Game number: ",t.id]})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description},className:ae.a.divDescription})})]})]})},ne=t(12),re=t(11),ce=t(5),ie=t(9),se=t.n(ie),le=function(){var e=Object(n.useState)({name:"",background_image:"",description:"",platforms:[],released:"",rating:0,genres:[]}),a=Object(j.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({name:"",background_image:"",description:"",platforms:"",released:"",rating:"",genres:""}),s=Object(j.a)(c,2),l=s[0],o=s[1],d=["PS4","PS5","PC","SEGA","NINTENDO 64","NINTENDO SWITCH","ATARI","XBOX ONE","XBOX X","GAME BOY ADVANCED"],m=Object(b.b)(),h=Object(i.n)(),v=Object(b.c)((function(e){return e.genres}));Object(n.useEffect)((function(){v.length||m(D())}),[m,v]);var f=function(e){var a=e.target.name,n=e.target.value;if(r(Object(ce.a)(Object(ce.a)({},t),{},Object(re.a)({},a,n))),!l.length)return o(Object(re.a)({},a,""))},x=function(e){e.preventDefault();var a;return""===t.name.trim()||t.name>10?o(Object(ce.a)(Object(ce.a)({},l),{},{name:"Please, enter a name"})):/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/g.test(t.background_image)?""===t.description.trim()?o(Object(ce.a)(Object(ce.a)({},l),{},{description:"Please, enter a description"})):0===t.platforms.length||t.platforms.length>5?o(Object(ce.a)(Object(ce.a)({},l),{},{platforms:"Please, enter between 1 and 5 platforms"})):""===t.released?o(Object(ce.a)(Object(ce.a)({},l),{},{released:"Please enter a release date"})):0===t.rating||t.rating>5?o(Object(ce.a)(Object(ce.a)({},l),{},{rating:"Please enter a rating between 1 and 5"})):0===t.genres.length||t.genres.length>4?o(Object(ce.a)(Object(ce.a)({},l),{},{genres:"Please, enter between 1 and 5 genders"})):(m((a=t,function(){var e=Object(p.a)(Object(g.a)().mark((function e(t){var n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/videogames",a);case 3:return n=e.sent,e.abrupt("return",t({type:F,payload:n}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t({type:C,payload:e.t0.message}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}())),alert("Game created successfully!"),void h("/home")):o(Object(ce.a)(Object(ce.a)({},l),{},{background_image:"Please, enter a valid URL"}))};return Object(u.jsx)("form",{onSubmit:function(e){return x(e)},onReset:function(e){return function(e){e.preventDefault(),r({name:"",background_image:"",description:"",platforms:[],released:"",rating:0,genres:[]}),o({name:"",background_image:"",description:"",platforms:"",released:"",rating:"",genres:""}),document.getElementById("platforms").reset()}(e)},className:se.a.createGameContainer,children:Object(u.jsxs)("fieldset",{className:se.a.fieldsetContainer,children:[Object(u.jsx)("legend",{className:se.a.legend,children:"Create your Game"}),Object(u.jsxs)("div",{className:se.a.divContainer,children:[Object(u.jsx)("label",{htmlFor:"name",className:se.a.labelForm,children:"Name:"}),Object(u.jsx)("input",{type:"text",id:"name",value:t.name,name:"name",onChange:function(e){return f(e)},className:se.a.inputForm}),Object(u.jsx)("p",{children:l.name})]}),Object(u.jsxs)("div",{className:se.a.divContainer,children:[Object(u.jsx)("label",{htmlFor:"image",className:se.a.labelForm,children:"Image:"}),Object(u.jsx)("input",{type:"text",id:"image",value:t.background_image,name:"background_image",onChange:function(e){return f(e)},className:se.a.inputForm}),Object(u.jsx)("p",{children:l.background_image})]}),Object(u.jsxs)("div",{className:se.a.divContainer,children:[Object(u.jsx)("label",{htmlFor:"description",className:se.a.labelForm,children:"Description:"}),Object(u.jsx)("textarea",{id:"description",cols:"30",rows:"10",value:t.description,name:"description",onChange:function(e){return f(e)},className:se.a.textareaForm}),Object(u.jsx)("p",{children:l.description})]}),Object(u.jsxs)("div",{className:se.a.divContainerOptions,children:[Object(u.jsx)("label",{htmlFor:"platforms",className:se.a.labelForm,children:"Platforms:"}),Object(u.jsx)("div",{className:se.a.divContainerOptionsChecks,children:null===d||void 0===d?void 0:d.sort().map((function(e){return Object(u.jsxs)("div",{id:"platforms",children:[Object(u.jsx)("input",{className:se.a.inputFormCheck,type:"checkbox",value:e,name:"platfomrs",onClick:function(e){return function(e){e.target.checked?r(Object(ce.a)(Object(ce.a)({},t),{},{platforms:[].concat(Object(ne.a)(t.platforms),[e.target.value])})):r(Object(ce.a)(Object(ce.a)({},t),{},{platforms:t.platforms.filter((function(a){return a!==e.target.value}))}))}(e)}}),Object(u.jsx)("label",{htmlFor:"platform",className:se.a.checksForm,children:e})]})}))}),Object(u.jsx)("p",{children:l.platforms})]}),Object(u.jsxs)("div",{className:se.a.divContainer,children:[Object(u.jsx)("label",{htmlFor:"released",className:se.a.labelForm,children:"Release Date:"}),Object(u.jsx)("input",{type:"date",id:"released",value:t.released,name:"released",onChange:function(e){return f(e)},className:se.a.inputForm}),Object(u.jsx)("p",{children:l.released})]}),Object(u.jsxs)("div",{className:se.a.divContainer,children:[Object(u.jsx)("label",{htmlFor:"rating",className:se.a.labelForm,children:"Rating:"}),Object(u.jsx)("input",{type:"number",id:"rating",value:t.rating,name:"rating",onChange:function(e){return f(e)},min:"0",className:se.a.inputFormRating}),Object(u.jsx)("p",{children:l.rating})]}),Object(u.jsxs)("div",{className:se.a.divContainerOptions,children:[Object(u.jsx)("label",{htmlFor:"genres",className:se.a.labelForm,children:"Genders:"}),Object(u.jsx)("div",{className:se.a.divContainerOptionsChecks,children:v.sort((function(e,a){return e.name>a.name?1:-1})).length?v.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:se.a.inputFormCheck,type:"checkbox",id:e.name,value:e.name,onClick:function(e){return function(e){e.target.checked?r(Object(ce.a)(Object(ce.a)({},t),{},{genres:[].concat(Object(ne.a)(t.genres),[e.target.value])})):r(Object(ce.a)(Object(ce.a)({},t),{},{genres:t.genres.filter((function(a){return a.name!==e.target.value}))}))}(e)}}),Object(u.jsx)("label",{htmlFor:e.name,className:se.a.checksForm,children:e.name},e.id)]})})):Object(u.jsx)("div",{})}),Object(u.jsx)("p",{children:l.genres})]}),Object(u.jsx)("input",{type:"submit",value:"Crear juego",className:se.a.buttonForm}),Object(u.jsx)("input",{type:"reset",value:"Restablecer formulario",className:se.a.buttonForm})]})})},oe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(V,{}),Object(u.jsx)(le,{})]})};O.a.defaults.baseURL="https://pi-videogames-production-53c0.up.railway.app/";var de=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",element:Object(u.jsx)(m,{})}),Object(u.jsx)(i.a,{path:"/home",element:Object(u.jsx)($,{})}),Object(u.jsx)(i.a,{path:"/videogames/:idVideogame",element:Object(u.jsx)(te,{})}),Object(u.jsx)(i.a,{path:"/form",element:Object(u.jsx)(oe,{})})]})})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),c(e),i(e)}))},me=t(40),je=t(50),be=t(49),ge={games:[],allGames:[],gameDetail:[],genres:[],error:""},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(ce.a)(Object(ce.a)({},e),{},{games:a.payload,allGames:a.payload});case v:return Object(ce.a)(Object(ce.a)({},e),{},{games:a.payload});case f:return Object(ce.a)(Object(ce.a)({},e),{},{gameDetail:a.payload});case x:return Object(ce.a)(Object(ce.a)({},e),{},{gameDetail:[]});case _:return Object(ce.a)(Object(ce.a)({},e),{},{genres:a.payload});case C:return Object(ce.a)(Object(ce.a)({},e),{},{error:a.payload});case N:var t=e.allGames.filter((function(e){var t;return null===e||void 0===e||null===(t=e.genres)||void 0===t?void 0:t.includes(a.payload)}));return Object(ce.a)(Object(ce.a)({},e),{},{games:t});case A:var n=e.allGames,r="created"===a.payload?n.filter((function(e){return e.createdInDb})):n;return Object(ce.a)(Object(ce.a)({},e),{},{games:r});case y:if("ASC"===a.payload){var c=e.games.sort((function(e,a){return e.name>a.name?1:a.name>e.name?-1:0}));return Object(ce.a)(Object(ce.a)({},e),{},{games:c})}var i=e.games.sort((function(e,a){return e.name>a.name?-1:a.name>e.name?1:0}));return Object(ce.a)(Object(ce.a)({},e),{},{games:i});case B:if("ASC"===a.payload){var s=e.games.sort((function(e,a){return e.rating>a.rating?1:a.rating>e.rating?-1:0}));return Object(ce.a)(Object(ce.a)({},e),{},{games:s})}var l=e.games.sort((function(e,a){return e.rating>a.rating?-1:a.rating>e.rating?1:0}));return Object(ce.a)(Object(ce.a)({},e),{},{games:l});case F:return Object(ce.a)(Object(ce.a)({},e),{},{games:[].concat(Object(ne.a)(e.games),[a.payload])});default:return Object(ce.a)({},e)}},Oe=Object(me.legacy_createStore)(pe,Object(be.composeWithDevTools)(Object(me.applyMiddleware)(je.a)));c.a.render(Object(u.jsx)(b.a,{store:Oe,children:Object(u.jsx)(s.a,{children:Object(u.jsx)(de,{})})}),document.getElementById("root")),ue()},9:function(e,a,t){e.exports={createGameContainer:"CreateGame_createGameContainer__G3K_7",legend:"CreateGame_legend__5ZNSg",fieldsetContainer:"CreateGame_fieldsetContainer__36uQy",divContainer:"CreateGame_divContainer__3Jl6D",divContainerOptions:"CreateGame_divContainerOptions__1thPp",divContainerOptionsChecks:"CreateGame_divContainerOptionsChecks__oi5I5",inputFormCheck:"CreateGame_inputFormCheck__29cNU",labelForm:"CreateGame_labelForm__2BnWr",inputForm:"CreateGame_inputForm__1KBqX",inputFormRating:"CreateGame_inputFormRating__1ECjm",textareaForm:"CreateGame_textareaForm__28ZgQ",checksForm:"CreateGame_checksForm__2XL7r",buttonForm:"CreateGame_buttonForm__2ap-T"}}},[[66,1,2]]]);
//# sourceMappingURL=main.acb826dc.chunk.js.map