import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
        <div className="menu">
        <ul>

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

           
        </ul>
        </div>
        <div className="left">&nbsp;
            </div>  
        </div>
    );
    }

export default Navigation;