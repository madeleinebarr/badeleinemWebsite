(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);t(1);var a=t(15),r=t(7),i=t(2),o=t(0),s=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/work",children:"Work"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/books",children:"Books"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/art",children:"Art"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/til",children:"TIL"})})]})}),Object(o.jsx)("div",{className:"left",children:"\xa0"})]})},l=function(){return Object(o.jsxs)("div",{className:"aboutPage",children:[Object(o.jsx)(s,{}),Object(o.jsxs)("div",{className:"content aboutcontent",children:[Object(o.jsxs)("div",{className:"post post1 aboutpost",children:[Object(o.jsx)("h1",{children:"Hi! I'm Madeleine"}),Object(o.jsx)("p",{children:"I love building new things, learning languages (Javascript, Spanish, \u4e2d\u6587), reading as much as I can, and ice skating."})]}),Object(o.jsxs)("div",{className:"post post2 aboutpost",children:[Object(o.jsx)("h1",{children:"Contact me"}),Object(o.jsx)("span",{className:"bold",children:"Twitter:"})," ",Object(o.jsx)("a",{href:"https://twitter.com/badeleinem",target:"blank",children:"@badeleinem"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"bold",children:"Github:"})," ",Object(o.jsx)("a",{href:"https://github.com/madeleinebarr",target:"blank",children:"madeleinebarr"})]})]})]})};function c(e,n,t,a,r){this.image=e,this.title=n,this.description=t,this.hostlink=a,this.repolink=r}var h=[new c("gutenberg.png","Explore Project Gutenberg","Exploration tool to download archived books built using React, FastAPI, SQLAlchemy, and SQLite","https://uqwhaj.deta.dev/","https://github.com/madeleinebarr/gutenbooks"),new c("metproject.png","Art Project","Discovery tool for The Metropolitan Museum of Art built using Postgresql, Express, React, Node.js, and The Met's API","https://met-art-project.herokuapp.com/","https://github.com/madeleinebarr/artproject"),new c("valendar.png","Valendar","Calendar, goals, and mood tracker built using vanilla Javascript","https://habit-tracker-11f85.web.app/","https://github.com/madeleinebarr/valendar")];function d(e){return Object(o.jsxs)("div",{className:"post workpost",children:[Object(o.jsx)("img",{src:"./projects/"+e.image,alt:e.title,className:"workImage"}),Object(o.jsxs)("p",{className:"worktitle",children:[Object(o.jsxs)("span",{className:"bold",children:[e.title,":"]}),Object(o.jsx)("br",{}),e.description]}),Object(o.jsxs)("p",{children:[Object(o.jsxs)("span",{className:"hiddenonmobile",children:[Object(o.jsx)("a",{href:e.hostlink,target:"_blank",rel:"noopener noreferrer",children:"hosted project"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("a",{href:e.repolink,target:"_blank",rel:"noopener noreferrer",children:"project repository"})]})]})}function j(e){var n=e.projects.map((function(e){return Object(o.jsx)(d,{image:e.image,title:e.title,description:e.description,hostlink:e.hostlink,repolink:e.repolink},e.title)}));return Object(o.jsx)("div",{className:"workgrid",children:n})}var b=function(){return Object(o.jsxs)("div",{className:"workPage",children:[Object(o.jsx)(s,{}),Object(o.jsx)("div",{className:"content workcontent",children:Object(o.jsx)(j,{projects:h})})]})},m=t(17);function w(e){for(var n=[],t=Object(m.a)(e),a=t.length-1;a>=0;a--){var r=Math.ceil(Math.random()*a);n.push(t[r]),t.splice(r,1)}return n}function u(e,n,t,a){this.image=e,this.title=n,this.author=t,this.description=a}var p=w([new u("neverletmego.jpeg","Never Let Me Go","Kazuo Ishiguro","Elegaic story about mortality. A Victorian boarding school overlaid on a dystopian background."),new u("womaninwhite.jpg","The Woman in White","Wilkie Collins","Considered by many to be the first mystery novel ever. Buckle your seatbelt if you have one in your carriage!"),new u("howtheinternet.jpg","How the Internet Happened","Brian McCullough","An incredible exploration of the Cambrian explosion of the internet that goes into just the right level of technical detail."),new u("threebodyproblem.jpg","The Three-Body Problem","Cixin Liu","The entire trilogy made me ask questions beyond what I'd ever imagined. First novel in translation to win a Hugo Award."),new u("homegoing.jpg","Homegoing","Yaa Gyasi","Centuries of history told through interlinked stories across generations. Her characters are so alive that they come off the page."),new u("memorypolice.jpg","The Memory Police","Yoko Ogawa","A dystopian novel that reads like poetry and explores the nature of memory and loss. It made me look at everyday objects completely differently."),new u("birdsofamerica.jpeg","Birds of America","Lorrie Moore",'Contains one of my favorite short stories of all time, "People Like That Are the Only People Here", that ventures into the twisted heart of parenthood.'),new u("lostchildrenarchive.jpeg","Lost Children Archive","Valeria Luiselli","A fable-esque story about migrant children, non-migrant children, and the fragility of innocence."),new u("manssearchformeaning.jpeg","Man's Search for Meaning","Viktor E. Frankl","A prescription for living through the search for meaning, written by a Holocaust survivor.")]);function g(e,n,t){this.title=e,this.author=n,this.favorite=t}var O=[new g("The Hierarchies","Ros Anderson",!1),new g("Klara and the Sun","Kazuo Ishiguro",!0),new g("Detransition, Baby","Torrey Peters",!1),new g("Such a Fun Age","Kiley Reid",!1),new g("Exodus","Deborah Feldman",!1),new g("Unorthodox","Deborah Feldman",!1),new g("Sour Heart","Jenny Zhang",!1),new g("The Ballad of Songbirds and Snakes","Suzanne Collins",!1),new g("Maybe You Should Talk to Someone","Lori Gottlieb",!1),new g("The Culture Code","Dan Coyle",!1),new g("Good Morning, Monster","Catherine Gildiner",!1),new g("Untamed","Glennon Doyle",!1),new g("Conversations with Friends","Sally Rooney",!0),new g("Love Warrior","Glennon Doyle",!1),new g("Prozac Nation","Elizabeth Wurtzel",!1),new g("Salt, Fat, Acid, Heat","Samin Nosrat",!1),new g("Me Talk Pretty One Day","David Sedaris",!1),new g("Hackers and Painters","Paul Graham",!0)],x=[new g("Prep","Curtis Sittenfeld",!1),new g("Where Good Ideas Come From: The Natural History of Innovation","Steven Johnson",!1),new g("I Feel Bad About My Neck","Nora Ephron",!1),new g("Station Eleven","Emily St. John Mandel",!1),new g("Eat the Buddha","Barbara Demick",!1),new g("Eichmann in Jerusalem: A Report on the Banality of Evil","Hannah Ahrendt",!1),new g("The Ocean at the End of the Lane","Neil Gaiman",!1),new g("12 Rules for Life","Jordan Peterson",!1),new g("Oryx and Crake","Margaret Atwood",!1),new g("The Year of the Flood","Margaret Atwood",!1),new g("MaddAddam","Margaret Atwood",!1),new g("Wow, No Thank You","Samantha Irby",!1),new g("Trick Mirror","Jia Tolentino",!1),new g("The Dreamers","Karen Thompson Walker",!1),new g("The Signal and the Noise","Nate Silver",!1),new g("A Little Life","Hanya Yanagihara",!1),new g("Severance","Ling Ma",!1),new g("I'm Thinking of Ending Things","Iain Reid",!1),new g("Fleishman Is in Trouble","Taffy Brodesser-Akner",!0),new g("I Remember Nothing","Nora Ephron",!1),new g("Nothing to See Here","Kevin Wilson",!1),new g("A Colony in a Nation","Chris Hayes",!0),new g("1984","George Orwell",!1),new g("The Goldfinch","Donna Tartt",!1),new g("Brave New World","Alduous Huxley",!0),new g("The Only Plane in the Sky: An Oral History of 9/11","Garrett M. Graff")],k=[new g("The Dutch House","Ann Patchett",!1),new g("Snow","Orhan Pamuk",!0),new g("The Master and Margarita","Mikhail Bulgakov",!0),new g("In the Dream House","Carmen Maria Machado",!0),new g("The Collected Schizophrenias","Esme Weijun Wang",!0),new g("World War Z","Max Brooks",!0),new g("My Year of Rest and Relaxation","Ottessa Mosfegh",!1),new g("The Power","Naomi Alderman",!1),new g("Astrophysics for People in a Hurry","Neil deGrasse Tyson",!1),new g("The Man in the High Castle","Philip K. Dick",!1),new g("The Need","Helen Phillips",!0),new g("One More Thing: Stories & Other Stories","BJ Novak",!1),new g("Age of Ambition","Evan Osnos",!0),new g("Mischling","Affinity Konar",!1),new g("Nobody's Victim","Carrie Goldberg",!1),new g("Artemis","Andy Weir",!1),new g("Exhalation","Ted Chiang",!0),new g("Normal People","Sally Rooney",!0),new g("Transit","Anna Seghers",!1),new g("Educated","Tara Westover",!1),new g("The Secret History","Donna Tartt",!0),new g("Mrs. Caliban","Rachel Ingalls",!0),new g("The Idiot","Elif Batuman",!1)],y=[new g("The Songlines","Bruce Chatwin",!1),new g("The People in the Trees","Hanya Yanagihara",!1),new g("Little Fires Everywhere","Celeste Ng",!1),new g("This Will Be My Undoing","Morgan Jerkins",!1),new g("Back Talk: Stories","Danielle Lazarin",!1),new g("The Accusation: Forbidden Stories from Inside North Korea","Bandi",!1),new g("Nothing to Envy","Barbara Demick",!0),new g("The Orphan Master's Son","Adam Johnson",!1),new g("Just Mercy","Bryan Stevenson",!1),new g("I, Claudius","Robert Graves",!1),new g("Companions","Christina Hesselholdt",!1),new g("Two Serious Ladies","Jane Bowles",!1),new g("Black Swans","Eve Babitz",!1),new g("Killers of the Flower Moon","David Grann",!1),new g("Kudos","Rachel Cusk",!0),new g("Less","Andrew Sean Greer",!0),new g("Dune","Frank Herbert",!1),new g("The Woman in the Window","AJ Finn",!1),new g("The Haunting of Hill House","Shirley Jackson",!0),new g("The Oddysey","Homer, translated by Simon Armitage",!0),new g("Sapiens","Nuval Noah Harrari",!1),new g("Bluets","Maggie Nelson",!1),new g("Flights","Olga Tokarczuk",!0)].reverse(),f=[new g("The Martian","Andy Weir",!1),new g("Bad Feminist","Roxane Gay",!1),new g("The Thing Around Your Neck","Chimamanda Ngozi Adichie",!1),new g("Franny & Zoey","JD Salinger",!1),new g("Strangers in Their Own Land","Arlie Russell Hochschild",!1),new g("The Bell Jar","Sylvia Plath",!1),new g("The Handmaid's Tale","Margaret Atwood",!1),new g("All the Single Ladies","Rebecca Traister",!1),new g("The Blind Assassin","Margaret Atwood",!1),new g("After Dark","Haruki Murakami",!0),new g("Underground Airlines","Ben H Winters",!1),new g("Netherland","Joseph O'Neill",!1),new g("Life Is Meals","James Salter",!1),new g("All the Pretty Horses","Cormac McCarthy",!1),new g("The Girl on the Train","Paula Hawkins",!1),new g("Between the World & Me","Ta-Nehisi Coates",!1),new g("Outline","Rachel Cusk",!0),new g("Transit","Rachel Cusk",!0),new g("Dream Hoarders","Richard Reeves",!1),new g("Black Edge","Sheelah Kolhatkar",!1),new g("The Sum of Small Things","Elizabeth Currid-Halkett",!1),new g("American War","Omar El Akkad",!1),new g("The Underground Railroad","Colson Whitehead",!1),new g("Her Body and Other Parties","Carmen Maria Machado",!0),new g("The Girls","Emma Cline",!1),new g("Sweetbitter","Stephanie Danler",!1),new g("Americanah","Chimamanda Ngozi Adichie",!0),new g("The Oddysey","Homer, translated by Robert Fagles",!0),new g("Seven Years in Tibet","Heinrich Harrer",!1)];function v(e){return Object(o.jsxs)("div",{className:"post bookpost",children:[Object(o.jsx)("img",{src:"./bookCovers/"+e.image,alt:e.title,className:"bookcover"}),Object(o.jsxs)("p",{className:"booktitle",children:[Object(o.jsx)("span",{className:"bold",children:e.title}),Object(o.jsx)("br",{}),e.author]}),Object(o.jsx)("p",{children:e.description})]})}function T(e){var n=e.books.map((function(e){return Object(o.jsx)(v,{image:e.image,title:e.title,author:e.author,description:e.description},e.title.slice(0,2)+e.author.slice(0,2))}));return Object(o.jsx)("div",{className:"bookgrid",children:n})}function A(e){return Object(o.jsxs)("p",{className:"allbookspost",children:[Object(o.jsx)("span",{className:!0===e.favorite?"bold favorite":"bold",children:e.title})," by ",e.author]})}function N(e){var n=e.allbooks.map((function(e){return Object(o.jsx)(A,{title:e.title,author:e.author,favorite:e.favorite},e.title)}));return Object(o.jsx)("div",{className:"allbookslist",children:n})}var S=function(){return Object(o.jsxs)("div",{className:"bookPage",children:[Object(o.jsx)(s,{}),Object(o.jsxs)("div",{className:"content bookcontent",children:[Object(o.jsx)("h1",{className:"bookheading",children:"Select favorites"}),Object(o.jsx)(T,{books:p}),Object(o.jsx)("h1",{className:"bookheading bookshelf",children:"Bookshelf"}),Object(o.jsx)("p",{className:"bookheading favorite bold",children:"favorites are highlighted"}),Object(o.jsx)("h1",{className:"bookheading",children:"2021"}),Object(o.jsx)(N,{allbooks:O}),Object(o.jsx)("h1",{className:"bookheading",children:"2020"}),Object(o.jsx)(N,{allbooks:x}),Object(o.jsx)("h1",{className:"bookheading",children:"2019"}),Object(o.jsx)(N,{allbooks:k}),Object(o.jsx)("h1",{className:"bookheading",children:"2018"}),Object(o.jsx)(N,{allbooks:y}),Object(o.jsx)("h1",{className:"bookheading",children:"2017"}),Object(o.jsx)(N,{allbooks:f})]})]})};function M(e,n,t,a){this.image=e,this.name=n,this.year=t,this.artist=a}var C=w([new M("theBanquet_magritte.jpg","The Banquet",1958,"Ren\xe9 Magritte"),new M("untitled_germaineKrull.jpg","On the Road: Eight Photographs Taken between Paris and Marseilles or between Paris and Biarritz",1930,"Germaine Krull"),new M("MR20Chair_miesvanderRohe.jpg","MR 20 Armchair",1927,"Ludwig Mies van der Rohe"),new M("morningGlories_hiroshige.jpeg","Morning Glories",1843,"Utagawa Hiroshige"),new M("risingSun_Yoshio.jpg","Rising Sun, Red Clouds",2013,"Okada Yoshio"),new M("waterLilies_monet.jpg","Water Lilies (Agapanthus)",1926,"Claude Monet"),new M("biglinBrothers_Eakins.png","The Biglin Brothers Turning the Stake",1873,"Thomas Eakins"),new M("softborders.jpg","Soft Borders",1997,"Mark Tansey"),new M("unexpected_answer.jpg","La R\xe9ponse impr\xe9vue (The Unexpected Answer)",1933,"Ren\xe9 Magritte"),new M("lebaiser.jpg","Le Baiser (The Kiss)",1938,"Ren\xe9 Magritte"),new M("GlacierPointPan.jpg","View from the handrail at Glacier Point overlook, connecting views from Ansel Adams to Carleton Watkins",2003,"Mark Klett and Byron Wolfe, with left insert from Ansel Adams (1935) and right insert from Carleton Watkins (1861)")]);function H(e){return Object(o.jsxs)("div",{className:"post artpost",children:[Object(o.jsx)("img",{src:"./artwork/"+e.image,alt:e.name}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"bold",children:e.name}),Object(o.jsx)("br",{}),e.year]}),Object(o.jsx)("p",{children:e.artist})]})}function B(e){var n=e.pieces.map((function(e){return Object(o.jsx)(H,{year:e.year,artist:e.artist,image:e.image,name:e.name},e.year+e.name.slice(0,2))}));return Object(o.jsx)("div",{children:n})}var P=function(e){return Object(o.jsxs)("div",{className:"artPage",children:[Object(o.jsx)(s,{}),Object(o.jsx)("div",{className:"content artcontent",children:Object(o.jsx)(B,{pieces:C})})]})},R=function(){return Object(o.jsx)("h1",{children:"This is the not found page"})};function D(e,n){this.date=e,this.lesson=n}var E=[new D("April 26, 2021","Using objects as accumulators in reduce functions for JavaScript arrays can be really powerful when you're working with multiple variables (i.e. computational statistics)."),new D("April 25, 2021","To properly wash a bike, you should spray a degreaser like WD-40  on the chain."),new D("April 24, 2021","Asters and goldenrod grow next to each other because their complementary colors (purple and yellow) make them appear more beautiful and eye-catching to bees."),new D("April 23, 2021","Drawing out the component hierarchy on paper for a React application makes building it much easier."),new D("April 22, 2021",'For recording purposes, the microphone on traditional "wire" headphones is superior to the microphone on AirPods.'),new D("April 21, 2021","Seriously, go to the dentist every 6 months."),new D("April 20, 2021","Trees may improve immunity thanks to certain aromatic compounds they release."),new D("April 21 - May 18, 2021","FastAPI, SQLAlchemy, SQLite, and Deta.sh, including Deta micros and Deta bases.")];function W(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"tabledate",children:e.date}),Object(o.jsx)("td",{children:e.lesson})]})}function L(e){var n=e.rows.map((function(e){return Object(o.jsx)(W,{date:e.date,lesson:e.lesson},e.date)}));return Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"dateheader",children:"Date"}),Object(o.jsx)("th",{children:"What I learned"})]}),n]})})}var G=function(){return Object(o.jsxs)("div",{className:"tilpage",children:[Object(o.jsx)(s,{}),Object(o.jsxs)("div",{className:"content tilcontent",children:[Object(o.jsxs)("div",{className:"tiltextdescription",children:[Object(o.jsx)("h1",{className:"tiltitle",children:"Today I learned"}),Object(o.jsx)("p",{children:"Distilling my learnings down to a few things per day(s)"})]}),Object(o.jsx)("div",{className:"tiltablecontainer",children:Object(o.jsx)(L,{rows:E})})]})]})},I=function(){return Object(o.jsx)(r.a,{basename:"/",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:l}),Object(o.jsx)(i.a,{path:"/work",component:b}),Object(o.jsx)(i.a,{path:"/books",component:S}),Object(o.jsx)(i.a,{path:"/art",component:P}),Object(o.jsx)(i.a,{path:"/til",component:G}),Object(o.jsx)(i.a,{component:R})]})})};t(28);Object(a.render)(Object(o.jsx)(I,{}),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7dae292b.chunk.js.map