const React = require('react');
const ReactDom = require('react-dom');
const style = require('./index.css');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

const path = require('path');

const _ = require('lodash');

const Stage = require('./stage');
const Header = require('./header');

class Doc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Header/>
                <Route path={'/:id'} component={Stage}/>
            </Router>
        );
    }
}

window.onload = function () {
    ReactDom.render(
        <Doc/>,
        document.getElementById('root')
    );
}