import React from 'react';
import Navigation from './Navigation';


function Work(image, name, year, artist) {
    this.image = image;
    this.name = name;
    this.year = year;
    this.artist = artist;
}

const artwork = [
    new Work("theBanquet_magritte.jpg", 'The Banquet', 1958, 'Rene Magritte'),
    new Work("untitled_germaineKrull.jpg", 'On the Road: Eight Photographs Taken between Paris and Marseilles or between Paris and Biarritz', 1930, 'Germaine Krull'),
    new Work("MR20Chair_miesvanderRohe.jpg", 'MR 20 Armchair', 1927, 'Ludwig Mies van der Rohe'),
    new Work("morningGlories_hiroshige.jpeg", 'Morning Glories', 1843, 'Utagawa Hiroshige'),
    new Work("risingSun_Yoshio.jpg", "Rising Sun, Red Clouds", 2013, "Okada Yoshio"),
    new Work("waterLilies_monet.jpg", "Water Lilies (Agapanthus)", 1926, "Claude Monet"),
    new Work("biglinBrothers_Eakins.png", "The Biglin Brothers Turning the Stake", 1873, "Thomas Eakins"),
]


function shuffle(array) {
    let newArray = [];
    let arrayCopy = [...array];
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i);
        newArray.push(arrayCopy[j]);
        arrayCopy.splice(j, 1);
    }
    return newArray;
}

const shuffledArtWork = shuffle(artwork);


function Piece(props) {
    return (
        <div className="post">
            <img src={'/assets/' + props.image} alt={props.name}/>
            <p>
                <span className="bold">{props.name}</span>
                <br></br>
                {props.year}
            </p>
            <p>{props.artist}</p>
        </div>
    )
}

function ArtList(props) {
    const pieces = props.pieces;
    const listPieces = pieces.map((piece) => {
        return <Piece key={piece.year + piece.name.slice(0,2)} year={piece.year} artist={piece.artist} image={piece.image} name={piece.name} />
    });
    return (
        <div>{listPieces}</div>
    )
}




const Art = (props) => {
        return (
            <div className="artPage">
            <Navigation />
            <div className="content">
                <ArtList pieces={shuffledArtWork} />
            </div>
            </div>
        );
    }

export default Art;