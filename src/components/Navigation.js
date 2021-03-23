import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
        <div className="menu">
        <ul>
            {/* <li><a href="/badeleinemWebsite/">About</a></li>
            <li><a href="/badeleinemWebsite/work">Work</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/art">Art</a></li> */}

            <li>
                <Link to ="/">About</Link>
                </li>

                <li>
                <Link to ="/work">Work</Link>
                </li>

                <li>
                <Link to ="/books">Books</Link>
                </li>

                <li>
                <Link to ="/art">Art</Link>
                </li>

            {/* <li><a href="/books">Books</a></li>
            <li><a href="/art">Art</a></li> */}
        </ul>
        </div>
        <div className="left">&nbsp;
            </div>  
        </div>
    );
    }

export default Navigation;