import React from 'react';
import Navigation from './Navigation';
import { shuffle } from '../helpers';


function Work(image, name, year, artist) {
    this.image = image;
    this.name = name;
    this.year = year;
    this.artist = artist;
}

const artwork = [
    new Work("theBanquet_magritte.jpg", 'The Banquet', 1958, 'René Magritte'),
    new Work("untitled_germaineKrull.jpg", 'On the Road: Eight Photographs Taken between Paris and Marseilles or between Paris and Biarritz', 1930, 'Germaine Krull'),
    new Work("MR20Chair_miesvanderRohe.jpg", 'MR 20 Armchair', 1927, 'Ludwig Mies van der Rohe'),
    new Work("morningGlories_hiroshige.jpeg", 'Morning Glories', 1843, 'Utagawa Hiroshige'),
    new Work("risingSun_Yoshio.jpg", "Rising Sun, Red Clouds", 2013, "Okada Yoshio"),
    new Work("waterLilies_monet.jpg", "Water Lilies (Agapanthus)", 1926, "Claude Monet"),
    new Work("biglinBrothers_Eakins.png", "The Biglin Brothers Turning the Stake", 1873, "Thomas Eakins"),
    new Work("softborders.jpg", "Soft Borders", 1997, "Mark Tansey"),
    new Work("unexpected_answer.jpg", "La Réponse imprévue (The Unexpected Answer)", 1933, "René Magritte"),
    new Work("lebaiser.jpg", "Le Baiser (The Kiss)", 1938, "René Magritte"),
    new Work("GlacierPointPan.jpg", "View from the handrail at Glacier Point overlook, connecting views from Ansel Adams to Carleton Watkins", 2003, "Mark Klett and Byron Wolfe, with left insert from Ansel Adams (1935) and right insert from Carleton Watkins (1861)"),
]



const shuffledArtWork = shuffle(artwork);


function Piece(props) {
    return (
        <div className="post artpost">
            <img src={'./artwork/' + props.image} alt={props.name}/>
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
            
            <div className="content artcontent">
                <ArtList pieces={shuffledArtWork} />
            </div>
            </div>
        );
    }

export default Art;