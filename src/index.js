const React = require('react');
const ReactDom = require('react-dom');
const style = require('./index.css');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

const path = require('path');

const Stage = require('./stage');
const Header = require('./header');
const Helm = require('./helm');
const {List, ListItem} = require('./list');

const works = require('../public/works/works-size-added.json');

class Doc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Route path={'/:id'}
                       render={(routeProps) => (
                           <Stage {...routeProps} {...{works}} />
                       )}/>
                <Route path={'/'} exact conponent={Helm}/>
                <List works={works}/>
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