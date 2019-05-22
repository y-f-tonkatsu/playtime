const React = require('react');
const ReactDom = require('react-dom');
const style = require('./list.css');

const path = require('path')
const _ = require('lodash');

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'work': props.work
        }

    }
    render() {
        const work = this.state.work;
        return (
            <li>
                <img src={path.join('works/', this.state.work.path)}/>
            </li>
        );
    }
}

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'works': props.works
        }

    }
    render() {

        const items = [];
        _.forEach(this.state.works, (work) => {
            items.push(<ListItem work={work}/>);
        });

        return (
            <ul className={style.imageList}>
                {items}
            </ul>
        );
    }
}

module.exports = {
    'List': List,
    'ListItem': ListItem,
};