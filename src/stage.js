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
        console.log(params);
        const id = params.id.replace(':', '');
        const work = Util.getImage(props.works, id);
        const prevId = parseInt(work.id) - 1;
        const nextId = parseInt(work.id) + 1;
        const prev = Util.getImage(props.works, prevId);
        const next = Util.getImage(props.works, nextId);
        this.state = {
            'works': props.works,
            'work': work,
            'prev': prev,
            'next': next,
            'visibility': 'visible'
        };
    }

    setWork(work) {
        const prevId = parseInt(work.id) - 1;
        const nextId = parseInt(work.id) + 1;
        const prev = Util.getImage(this.state.works, prevId);
        const next = Util.getImage(this.state.works, nextId);
        this.setState({
            'works': this.state.works,
            'work': work,
            'prev': prev,
            'next': next,
            'visibility': 'visible'
        });
    }

    hide() {
        this.setState({'visibility': 'hidden'});
    }

    render() {
        return (
            <article className={style.stage}>
                <Link to={'/'}
                      className={style.stageBg}/>
                <div className={style.stageTitleContainer}>
                    <Link to={this.state.next && '/:' + this.state.next.id}
                          className={[style.stageLinks, style.stageLinksNext].join(' ')}
                          onClick={() => {
                              if (!this.state.next) return;
                              this.setWork(this.state.next);
                          }}>←NEXT</Link>
                    <h1 className={style.stageTitle}>{this.state.work.title}</h1>
                    <Link to={this.state.prev && '/:' + this.state.prev.id}
                          className={[style.stageLinks, style.stageLinksPrev].join(' ')}
                          onClick={() => {
                              if (!this.state.prev) return;
                              this.setWork(this.state.prev);
                          }}>PREV→</Link>
                </div>
                <img
                    className={style.stageImage}
                    src={Util.getImagePath(this.state.work)}
                />
                <p className={style.stageDescription}>
                    {this.state.work.description}
                </p>

            </article>);
    }
}

module.exports = Stage;