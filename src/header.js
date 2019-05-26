const React = require('react');
const ReactDom = require('react-dom');
const style = require('./header.css');

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <canvas id="logo_anim" width="1600" height="320"></canvas>
            </header>
        );
    }
}

module.exports = Header;
