import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*
***** Component Imports *****
*/
import App from './components/app';
import Dashboard from './components/dashboard/dashboard';
import signUpComponent from './components/signup/signup';
import CreateDrop from './components/createdrop/createdrop';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signup" component={signUpComponent} />
                <Route path="/createdrop" component={CreateDrop} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
