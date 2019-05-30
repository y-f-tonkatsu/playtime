const React = require('react');
const ReactDom = require('react-dom');
const style = require('./header.css');

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={style.header}>
                <img src={'images/logo.png'}
                className={style.headerImage}/>
            </header>
        );
    }
}

module.exports = Header;
