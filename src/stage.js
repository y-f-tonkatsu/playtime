const React = require('react');
const ReactDom = require('react-dom');
const style = require('./stage.css');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;

const path = require('path');

const Util = require('./pt-util');

const _ = require('lodash');

class Stage extends React.Component {

    constructor(props) {
        super(props);
        const params = props.match.params;
        const work = Util.getImage(props.works, params.id.replace(':', ''));
        this.state = {
            'work': work,
            'visibility': 'visible'
        }
    }

    hide() {
        this.setState({'visibility': 'hidden'});
    }

    render() {
        return (
            <article className={style.stage}>
                <Link to={'/'}
                      className={style.stageBg}/>
                <img
                    className={style.stageImage}
                    src={Util.getImagePath(this.state.work)}
                />
                <h1 className={style.stageTitle}>
                    {this.state.work.title}
                </h1>
                <p className={style.stageDescription}>
                    {this.state.work.description}
                </p>

            </article>);
    }
}

module.exports = Stage;