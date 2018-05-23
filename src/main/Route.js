import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './../components/About';
import TodoList from './../components/TodoList';
import NoMatch from './../components/NoMatch';
export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={TodoList}/>
                    <Route path='/about' component={About}/>
                    <Route component={NoMatch}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;