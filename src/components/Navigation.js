import React from 'react';

const Navigation = () => {
    return (
        <div>
        <div className="menu">
        <ul>
            <li><a href="/badeleinemWebsite/">About</a></li>
            <li><a href="/badeleinemWebsite/work">Work</a></li>
            <li><a href="/books">Books</a></li>
            {/* <li><a href="/topics">Topics</a></li> */}
            <li><a href="/art">Art</a></li>
        </ul>
        </div>
        <div className="left">&nbsp;
            </div>  
        </div>
    );
    }

export default Navigation;