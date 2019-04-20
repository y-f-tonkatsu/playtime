const React = require('react');
const ReactDom = require('react-dom');
const style = require('./stage.css');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

const path = require('path');

const works = require('../public/works/works.json');

const _ = require('lodash');

class Stage extends React.Component {

    constructor(props) {
        super(props);
        const params = props.match.params;
        const work = _.find(works, (currentWork) => {
            return currentWork.id.toString() === params.id.toString();
        });
        this.state = {
            'work': work,
        }
    }

    render() {
        return (
            <Router>
                <div className={style.stage}>
                    <h1>Stage</h1>
                    <img src={path.join('works/', this.state.work.path)}/>
                    <article>{this.state.work.description}</article>
                </div>
            </Router>);
    }
}

module.exports = Stage;