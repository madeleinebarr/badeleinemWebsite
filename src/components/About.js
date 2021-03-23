import React from 'react';
import Navigation from './Navigation';

const About = () => {
    return (
        <div className="aboutPage">
            <Navigation />
           
            <div className="content aboutcontent">
                <div className="post post1 aboutpost">
                    <h1>Hi! I'm Madeleine</h1>
                    <p>I love building new things, learning languages (Javascript, Spanish, 中文), reading as much as I can, and ice skating.</p>
                </div>
                <div className="post post2 aboutpost">
                    <h1>Contact me</h1>
                    <span className="bold">Twitter:</span> <a href="https://twitter.com/badeleinem" target="blank">@badeleinem</a>
                    <br></br>
                    <span className="bold">Github:</span> <a href="https://github.com/madeleinebarr" target="blank">madeleinebarr</a>
                    
                </div>
            </div>
        </div>
    );
}

export default About;