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
    new Book("womaninwhite.jpg", "The Woman in White", "Wilkie Collins", "Considered by many to be the first mystery novel ever. Buckle your seatbelt if you have one in your carriage."),
    new Book("howtheinternet.jpg", "How the Internet Happened", "Brian McCullough", "An incredible exploration of the Cambrian explosion of the internet that goes into just the right level of technical detail."),
    new Book("threebodyproblem.jpg", "The Three-Body Problem", "Cixin Liu", "The entire trilogy will have you asking questions you never would've imagined asking. First novel in translation to win a Hugo Award."),
    new Book("homegoing.jpg", "Homegoing", "Yaa Gyasi", "Centuries of history told through interlinked stories across generations. Her characters are so alive that they come off the page."),
    new Book("memorypolice.jpg", "The Memory Police", "Yoko Ogawa", "A dystopian novel that reads like poetry and explores the nature of memory and loss. It made me look at everyday objects completely differently."),
    new Book("birdsofamerica.jpeg", "Birds of America", "Lorrie Moore", "Contains one of my favorite short stories of all time, \"People Like That Are the Only People Here\", that ventured into the twisted heart of parenthood."),
    new Book("lostchildrenarchive.jpeg", "Lost Children Archive", "Valeria Luiselli", "A fable-esque story about migrant children, non-migrant children, and confronting how interchangeable their situations are."),
    new Book("manssearchformeaning.jpeg", "Man's Search for Meaning", "Viktor E. Frankl", "A prescription for living through the search for meaning, written by a Holocaust survivor."),
]

const shuffledBooks = shuffle(booksArray);

function BookPost(props) {
    return (
        <div className="post bookpost">
            <img src={'/bookCovers/' + props.image} alt={props.title} className="bookcover"></img>

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

const Books = () => {
    return (
        <div className="bookPage">
        <Navigation />
            <BookList books={shuffledBooks} />
        </div>  
    );
}

export default Books;