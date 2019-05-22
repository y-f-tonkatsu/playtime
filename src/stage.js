const React = require('react');
const ReactDom = require('react-dom');
const style = require('./stage.css');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

const path = require('path');

const works = require('../public/works/works.json');
const Util = require('./pt-util');

const _ = require('lodash');

class Stage extends React.Component {

    constructor(props) {
        super(props);
        const params = props.match.params;
        const work = Util.getImage(props.works, params.id);
        this.state = {
            'work': work,
        }
    }

    render() {
        return (
            <article className={style.stage}>
                <Router>
                    <img
                        className={style.stageImage}
                        src={path.join('works/', this.state.work.path)}
                    />
                    <h1>Stage</h1>
                    <p>{this.state.work.description}</p>
                </Router>
            </article>);
    }
}

module.exports = Stage;