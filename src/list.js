const React = require('react');
const ReactDom = require('react-dom');
const Link = require('react-router-dom').Link;
const style = require('./list.css');

const path = require('path')
const _ = require('lodash');

const Header = require('./header');

const Util = require('./pt-util');

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'work': props.work
        }

    }

    render() {
        const work = this.state.work;
        console.log(work);
        return (
            <Link to={':' + work.id}
                  className={style.imageListItem}>
                <img className={style.imageListImage}
                     src={Util.getThumbPath(work)}
                />
                <div className={style.imageListItemOverLay}>
                    <h3 className={style.imageListTitle}>{work.title}</h3>
                    <p className={style.imageListDescription}>{work.description}</p>
                </div>
            </Link>
        );
    }
}

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            works: props.works,
            columnId: props.columnId
        }
    }

    render() {

        const items = [];
        this.state.works.forEach((work) => {
            items.push(<ListItem work={work} key={work.id}/>)
        });

        return (
            <article className={[style['imageColumn' + this.state.columnId], style.columns].join(' ')}>
                {items}
            </article>
        )

    }
}

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'works': props.works
        }

    }

    getColumns() {
        const items = [[], [], [], []];
        const heights = [0, 0, 0, 0];
        let currentColumn = 0;
        this.state.works.forEach((work) => {
            currentColumn = 0;
            let tempH = heights[0];
            for (let i = 1; i < 4; i++) {
                if (tempH > heights[i]) {
                    currentColumn = i;
                    tempH = heights[i];
                }
            }

            items[currentColumn].push(work);
            heights[currentColumn] += parseInt(work.thumbHeight);
        });

        const columns = [];
        _.times(4, (i) => {
            columns.push(<Column works={items[i]} columnId={i} key={i}/>);
        });
        return columns;
    }

    render() {

        const columns = this.getColumns();

        return (
            <div className={style.imageListRoot}>
                <Header/>
                <div className={style.imageList}>
                    {columns[0]}
                    {columns[1]}
                    {columns[2]}
                    {columns[3]}
                </div>
            </div>
        );
    }
}

module.exports = {
    'List': List,
    'ListItem': ListItem,
};