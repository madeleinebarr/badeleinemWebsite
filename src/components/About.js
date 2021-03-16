import React from 'react';
import Navigation from './Navigation';

const About = () => {
    return (
        <div className="aboutPage">
            <Navigation />
           
            <div className="content">
                <div className="post post1">
                    <h1>Hi! I'm Madeleine</h1>
                    <p>I love building new things (products and companies), learning languages (Javascript, Spanish, 中文), reading as much as I can, and ice skating.</p>
                </div>
                <div className="post post2">
                    <h1>Contact me</h1>
                    <span class="bold">Twitter:</span> <a href="https://twitter.com/badeleinem" target="blank">@badeleinem</a>
                    <br></br>
                    <span class="bold">Github:</span> <a href="https://github.com/madeleinebarr" target="blank">madeleinebarr</a>
                    {/* <a href="https://twitter.com/badeleinem" target="blank"></a> */}
                    {/* <img src='/social/2021Twitterlogoblue.png' alt='twitter' className="socialLogo"></img> */}
                </div>
            </div>
        </div>
    );
}

export default About;