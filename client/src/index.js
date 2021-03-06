import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/homepage/homepage'
import Profile from './containers/profile/profile'
import SearchPage from './containers/searchPage/searchPage'
import Login from './containers/login/login'
import ViewUser from './containers/viewUser/viewUser'
import InternalMessaging from './containers/internalMessaging/internalMessaging'
import ViewAllConversations from "./containers/viewAllConversations/viewAllConversations";
//import App from './App';

import {
    Route,
    Switch
} from 'react-router';

import {
    BrowserRouter as Router
} from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';
import './index.css';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component = {Homepage} />
            <Route exact path="/profile" component = {Profile} />
            <Route exact path="/search" component = {SearchPage} />
            <Route exact path="/login" component = {Login} />
            <Route exact path="/viewUser" component = {ViewUser} />
            <Route exact path="/messageUser" component = {InternalMessaging} />
            <Route exact path="/allConversations" component = {ViewAllConversations} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();