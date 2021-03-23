import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Books from './Books';
import Topics from './Topics';
import Art from './Art';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/badeleinemWebsite" component={About}/>
            <Route path="/badeleinemWebsite/work" component={Work} />
            <Route path="/books" component={Books} />
            <Route path="/topics" component={Topics} />
            <Route path="/art" component={Art} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
); 

export default Router;