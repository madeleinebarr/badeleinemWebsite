(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);i(1);var n=i(15),r=i(9),a=i(2),s=i(0),o=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"menu",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/badeleinemWebsite/",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/badeleinemWebsite/work",children:"Work"})})]})}),Object(s.jsx)("div",{className:"left",children:"\xa0"})]})},c=function(){return Object(s.jsxs)("div",{className:"aboutPage",children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"post post1",children:[Object(s.jsx)("h1",{children:"Hi! I'm Madeleine"}),Object(s.jsx)("p",{children:"I love building new things, learning languages (Javascript, Spanish, \u4e2d\u6587), reading as much as I can, and ice skating."})]}),Object(s.jsxs)("div",{className:"post post2",children:[Object(s.jsx)("h1",{children:"Contact me"}),Object(s.jsx)("span",{class:"bold",children:"Twitter:"})," ",Object(s.jsx)("a",{href:"https://twitter.com/badeleinem",target:"blank",children:"@badeleinem"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{class:"bold",children:"Github:"})," ",Object(s.jsx)("a",{href:"https://github.com/madeleinebarr",target:"blank",children:"madeleinebarr"})]})]})]})};var l=[new function(e,t,i,n,r){this.image=e,this.title=t,this.description=i,this.hostlink=n,this.repolink=r}("valendar.png","Valendar","Calendar, goals, and mood tracker built using vanilla Javascript","https://habit-tracker-11f85.web.app/","https://github.com/madeleinebarr/valendar")];function h(e){return Object(s.jsxs)("div",{className:"post workpost",children:[Object(s.jsx)("img",{src:"/projects/"+e.image,alt:e.title,className:"workImage"}),Object(s.jsxs)("p",{className:"worktitle",children:[Object(s.jsxs)("span",{className:"bold",children:[e.title,":"]}),Object(s.jsx)("br",{}),e.description]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{href:e.hostlink,target:"_blank",rel:"noopener noreferrer",children:"hosted project"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:e.repolink,target:"_blank",rel:"noopener noreferrer",children:"project repository"})]})]})}function j(e){var t=e.projects.map((function(e){return Object(s.jsx)(h,{image:e.image,title:e.title,description:e.description,hostlink:e.hostlink,repolink:e.repolink},e.title)}));return Object(s.jsx)("div",{className:"workgrid",children:t})}var d=function(){return Object(s.jsxs)("div",{className:"workPage",children:[Object(s.jsx)(o,{}),Object(s.jsx)(j,{projects:l})]})},b=i(17);function p(e){for(var t=[],i=Object(b.a)(e),n=i.length-1;n>=0;n--){var r=Math.ceil(Math.random()*n);t.push(i[r]),i.splice(r,1)}return t}function m(e,t,i,n){this.image=e,this.title=t,this.author=i,this.description=n}var g=p([new m("neverletmego.jpeg","Never Let Me Go","Kazuo Ishiguro","Elegaic story about mortality. A Victorian boarding school overlaid on a dystopian background."),new m("womaninwhite.jpg","The Woman in White","Wilkie Collins","Considered by many to be the first mystery novel ever. Buckle your seatbelt if you have one in your carriage."),new m("howtheinternet.jpg","How the Internet Happened","Brian McCullough","An incredible exploration of the Cambrian explosion of the internet that goes into just the right level of technical detail."),new m("threebodyproblem.jpg","The Three-Body Problem","Cixin Liu","The entire trilogy will have you asking questions you never would've imagined asking. First novel in translation to win a Hugo Award."),new m("homegoing.jpg","Homegoing","Yaa Gyasi","Centuries of history told through interlinked stories across generations. Her characters are so alive that they come off the page."),new m("memorypolice.jpg","The Memory Police","Yoko Ogawa","A dystopian novel that reads like poetry and explores the nature of memory and loss. It made me look at everyday objects completely differently."),new m("birdsofamerica.jpeg","Birds of America","Lorrie Moore",'Contains one of my favorite short stories of all time, "People Like That Are the Only People Here", that ventured into the twisted heart of parenthood.'),new m("lostchildrenarchive.jpeg","Lost Children Archive","Valeria Luiselli","A fable-esque story about migrant children, non-migrant children, and confronting how interchangeable their situations are."),new m("manssearchformeaning.jpeg","Man's Search for Meaning","Viktor E. Frankl","A prescription for living through the search for meaning, written by a Holocaust survivor.")]);function u(e){return Object(s.jsxs)("div",{className:"post bookpost",children:[Object(s.jsx)("img",{src:"/bookCovers/"+e.image,alt:e.title,className:"bookcover"}),Object(s.jsxs)("p",{className:"booktitle",children:[Object(s.jsx)("span",{className:"bold",children:e.title}),Object(s.jsx)("br",{}),e.author]}),Object(s.jsx)("p",{children:e.description})]})}function x(e){var t=e.books.map((function(e){return Object(s.jsx)(u,{image:e.image,title:e.title,author:e.author,description:e.description},e.title.slice(0,2)+e.author.slice(0,2))}));return Object(s.jsx)("div",{className:"bookgrid",children:t})}var O=function(){return Object(s.jsxs)("div",{className:"bookPage",children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{books:g})]})},f=function(){return Object(s.jsx)("h1",{children:"This is the topics page"})};function v(e,t,i,n){this.image=e,this.name=t,this.year=i,this.artist=n}var k=p([new v("theBanquet_magritte.jpg","The Banquet",1958,"Ren\xe9 Magritte"),new v("untitled_germaineKrull.jpg","On the Road: Eight Photographs Taken between Paris and Marseilles or between Paris and Biarritz",1930,"Germaine Krull"),new v("MR20Chair_miesvanderRohe.jpg","MR 20 Armchair",1927,"Ludwig Mies van der Rohe"),new v("morningGlories_hiroshige.jpeg","Morning Glories",1843,"Utagawa Hiroshige"),new v("risingSun_Yoshio.jpg","Rising Sun, Red Clouds",2013,"Okada Yoshio"),new v("waterLilies_monet.jpg","Water Lilies (Agapanthus)",1926,"Claude Monet"),new v("biglinBrothers_Eakins.png","The Biglin Brothers Turning the Stake",1873,"Thomas Eakins"),new v("softborders.jpg","Soft Borders",1997,"Mark Tansey"),new v("unexpected_answer.jpg","La R\xe9ponse impr\xe9vue [The Unexpected Answer]",1933,"Ren\xe9 Magritte"),new v("lebaiser.jpg","Le Baiser [The Kiss]",1938,"Ren\xe9 Magritte"),new v("GlacierPointPan.jpg","View from the handrail at Glacier Point overlook, connecting views from Ansel Adams to Carleton Watkins",2003,"Mark Klett and Byron Wolfe, with left insert from Ansel Adams (1935) and right insert from Carleton Watkins (1861)")]);function w(e){return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)("img",{src:"/artwork/"+e.image,alt:e.name}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"bold",children:e.name}),Object(s.jsx)("br",{}),e.year]}),Object(s.jsx)("p",{children:e.artist})]})}function y(e){var t=e.pieces.map((function(e){return Object(s.jsx)(w,{year:e.year,artist:e.artist,image:e.image,name:e.name},e.year+e.name.slice(0,2))}));return Object(s.jsx)("div",{children:t})}var N=function(e){return Object(s.jsxs)("div",{className:"artPage",children:[Object(s.jsx)(o,{}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)(y,{pieces:k})})]})},M=function(){return Object(s.jsx)("h1",{children:"This is the not found page"})},A=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)(a.c,{children:[Object(s.jsx)(a.a,{exact:!0,path:"/badeleinemWebsite",component:c}),Object(s.jsx)(a.a,{path:"/badeleinemWebsite/work",component:d}),Object(s.jsx)(a.a,{path:"/books",component:O}),Object(s.jsx)(a.a,{path:"/topics",component:f}),Object(s.jsx)(a.a,{path:"/art",component:N}),Object(s.jsx)(a.a,{component:M})]})})};i(28);Object(n.render)(Object(s.jsx)(A,{}),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7b235be4.chunk.js.map