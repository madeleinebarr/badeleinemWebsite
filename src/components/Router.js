import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Books from './Books';
import Art from './Art';
import NotFound from './NotFound';
import TodayILearned from './TodayILearned';

const Router = () => (
    <HashRouter basename="/">
        <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/work" component={Work} />
            <Route path="/books" component={Books} />
            {/* <Route path="/topics" component={Topics} /> */}
            <Route path="/art" component={Art} />
            <Route path="/til" component={TodayILearned} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
); 

export default Router;