const React = require('react');
const ReactDom = require('react-dom');
const style = require('./index.css');


window.onload = () => {
    let f = (x) => x * 2;

    ReactDom.render(
        <DomTest/>,
        document.getElementById('root')
    );

};

function arrowFunc() {
    let f = (x) => x * 2;
    return f;
}

function DomTest(props) {
    return (<div className={style.aaa}>
        unko
    </div>);
}

module.exports = arrowFunc();

