import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';

import Login from './components/Login';

export default class CRouter extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/app' component={Layout}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
