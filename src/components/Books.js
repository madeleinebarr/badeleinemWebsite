import React from 'react';
import Navigation from './Navigation';
import { shuffle } from '../helpers';

function Book(image, title, author, description) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.description = description;
}

const booksArray = [
    new Book("neverletmego.jpeg", "Never Let Me Go", "Kazuo Ishiguro", "Elegaic story about mortality. A Victorian boarding school overlaid on a dystopian background."),
    new Book("womaninwhite.jpg", "The Woman in White", "Wilkie Collins", "Considered by many to be the first mystery novel ever. Buckle your seatbelt if you have one in your carriage!"),
    new Book("howtheinternet.jpg", "How the Internet Happened", "Brian McCullough", "An incredible exploration of the Cambrian explosion of the internet that goes into just the right level of technical detail."),
    new Book("threebodyproblem.jpg", "The Three-Body Problem", "Cixin Liu", "The entire trilogy made me ask questions beyond what I'd ever imagined. First novel in translation to win a Hugo Award."),
    new Book("homegoing.jpg", "Homegoing", "Yaa Gyasi", "Centuries of history told through interlinked stories across generations. Her characters are so alive that they come off the page."),
    new Book("memorypolice.jpg", "The Memory Police", "Yoko Ogawa", "A dystopian novel that reads like poetry and explores the nature of memory and loss. It made me look at everyday objects completely differently."),
    new Book("birdsofamerica.jpeg", "Birds of America", "Lorrie Moore", "Contains one of my favorite short stories of all time, \"People Like That Are the Only People Here\", that ventures into the twisted heart of parenthood."),
    new Book("lostchildrenarchive.jpeg", "Lost Children Archive", "Valeria Luiselli", "A fable-esque story about migrant children, non-migrant children, and the fragility of innocence."),
    new Book("manssearchformeaning.jpeg", "Man's Search for Meaning", "Viktor E. Frankl", "A prescription for living through the search for meaning, written by a Holocaust survivor."),
]

const shuffledBooks = shuffle(booksArray);

function AllBook(title, author, favorite) {
    this.title = title;
    this.author = author;
    this.favorite = favorite;
}

const books2021 = [
    new AllBook("Such a Fun Age", "Kiley Reid", false),
    new AllBook("Exodus", "Deborah Feldman", false),
    new AllBook("Unorthodox", "Deborah Feldman", false),
    new AllBook("Sour Heart", "Jenny Zhang", false),
    new AllBook("The Ballad of Songbirds and Snakes", "Suzanne Collins", false),
    new AllBook("Maybe You Should Talk to Someone", "Lori Gottlieb", false),
    new AllBook("The Culture Code", "Dan Coyle", false),
    new AllBook("Good Morning, Monster", "Catherine Gildiner", false),
    new AllBook("Untamed", "Glennon Doyle", false),
    new AllBook("Conversations with Friends", "Sally Rooney", true),
    new AllBook("Love Warrior", "Glennon Doyle", false),
    new AllBook("Prozac Nation", "Elizabeth Wurtzel", false),
    new AllBook("Salt, Fat, Acid, Heat", "Samin Nosrat", false),
    new AllBook("Me Talk Pretty One Day", "David Sedaris", false),
    new AllBook("Hackers and Painters", "Paul Graham", true),
]

const books2020 = [
    new AllBook("Prep", "Curtis Sittenfeld", false),
    new AllBook("Where Good Ideas Come From: The Natural History of Innovation", "Steven Johnson", false),
    new AllBook("I Feel Bad About My Neck", "Nora Ephron", false),
    new AllBook("Station Eleven", "Emily St. John Mandel", false),
    new AllBook("Eat the Buddha", "Barbara Demick", false),
    new AllBook("Eichmann in Jerusalem: A Report on the Banality of Evil", "Hannah Ahrendt", false),
    new AllBook("The Ocean at the End of the Lane", "Neil Gaiman", false),
    new AllBook("12 Rules for Life", "Jordan Peterson", false),
    new AllBook("Oryx and Crake", "Margaret Atwood", false),
    new AllBook("The Year of the Flood", "Margaret Atwood", false),
    new AllBook("MaddAddam", "Margaret Atwood", false),
    new AllBook("Wow, No Thank You", "Samantha Irby", false),
    new AllBook("Trick Mirror", "Jia Tolentino", false),
    new AllBook("The Dreamers", "Karen Thompson Walker", false),
    new AllBook("The Signal and the Noise", "Nate Silver", false),
    new AllBook("A Little Life", "Hanya Yanagihara", false),
    new AllBook("Severance", "Ling Ma", false),
    new AllBook("I'm Thinking of Ending Things", "Iain Reid", false),
    new AllBook("Fleishman Is in Trouble", "Taffy Brodesser-Akner", true),
    new AllBook("I Remember Nothing", "Nora Ephron", false),
    new AllBook("Nothing to See Here", "Kevin Wilson", false),
    new AllBook("A Colony in a Nation", "Chris Hayes", true),
    new AllBook("1984", "George Orwell", false),
    new AllBook("The Goldfinch", "Donna Tartt", false),
    new AllBook("Brave New World", "Alduous Huxley", true),
    new AllBook("The Only Plane in the Sky: An Oral History of 9/11", "Garrett M. Graff")
]

const books2019 = [
    new AllBook("The Dutch House", "Ann Patchett", false),
    new AllBook("Snow", "Orhan Pamuk", true),
    new AllBook("The Master and Margarita", "Mikhail Bulgakov", true),
    new AllBook("In the Dream House", "Carmen Maria Machado", true),
    new AllBook("The Collected Schizophrenias", "Esme Weijun Wang", true),
    new AllBook("World War Z", "Max Brooks", true),
    new AllBook("My Year of Rest and Relaxation", "Ottessa Mosfegh", false),
    new AllBook("The Power", "Naomi Alderman", false),
    new AllBook("Astrophysics for People in a Hurry", "Neil deGrasse Tyson", false),
    new AllBook("The Man in the High Castle", "Philip K. Dick", false),
    new AllBook("The Need", "Helen Phillips", true),
    new AllBook("One More Thing: Stories & Other Stories", "BJ Novak", false),
    new AllBook("Age of Ambition", "Evan Osnos", true),
    new AllBook("Mischling", "Affinity Konar", false),
    new AllBook("Nobody's Victim", "Carrie Goldberg", false),
    new AllBook("Artemis", "Andy Weir", false),
    new AllBook("Exhalation", "Ted Chiang", true),
    new AllBook("Normal People", "Sally Rooney", true),
    new AllBook("Transit", "Anna Seghers", false),
    new AllBook("Educated", "Tara Westover", false),
    new AllBook("The Secret History", "Donna Tartt", true),
    new AllBook("Mrs. Caliban", "Rachel Ingalls", true),
    new AllBook("The Idiot", "Elif Batuman", false)
]

// const books2021 = [
//     {
//         title: "Such a Fun Age",
//         author: "Kiley Reid"
//     },
//     {
//         title: "Exodus",
//         author: "Deborah Feldman",
//     },
// ];

function BookPost(props) {
    return (
        <div className="post bookpost">
            <img src={'./bookCovers/' + props.image} alt={props.title} className="bookcover"></img>

            <p className="booktitle">
                <span className="bold">{props.title}</span>
                <br></br>
                {props.author}
            </p>
            <p>{props.description}</p>
        </div>
    )
}

function BookList(props) {
    const books = props.books;
    const listBooks = books.map((book) => {
        return <BookPost 
        key={book.title.slice(0,2) + book.author.slice(0,2)} 
        image={book.image}
        title={book.title}
        author={book.author}
        description={book.description}
        
        />
    })
    return (
        <div className="bookgrid">{listBooks}</div>
    )
}

function AllBooksPost(props) {
    return (
        <p className="allbookspost"><span className={props.favorite === true ? "bold favorite" : "bold"}>{props.title}</span> by {props.author}</p>
    );
}

function AllBooksList(props) {
    const allbooks = props.allbooks;
    const listAllBooks = allbooks.map((book) => {
        return <AllBooksPost key={book.title} title={book.title} author={book.author} favorite={book.favorite} />
    })
    return (
        <div className="allbookslist">{listAllBooks}</div>
    )

}


const Books = () => {
    return (
        <div className="bookPage">
        <Navigation />
        
        <div className="content bookcontent">
        <h1 className="bookheading">Select favorites</h1>
            <BookList books={shuffledBooks} />
        <h1 className="bookheading bookshelf">Bookshelf</h1>
        <p className="bookheading favorite bold">favorites are highlighted</p>
        <h1 className="bookheading">2021</h1>

        {/* <p className="allbookslist"><i>Such a Fun Age</i> by Kiley Reid</p>
        <p className="allbookslist">Exodus by Deborah Feldman</p> */}
        <AllBooksList allbooks={books2021} />

        <h1 className="bookheading">2020</h1>

        <AllBooksList allbooks={books2020} />

        <h1 className="bookheading">2019</h1>

        <AllBooksList allbooks={books2019} />
        
        </div>

        
        </div>  
    );
}

export default Books;