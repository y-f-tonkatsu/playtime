const React = require('react');
const ReactDom = require('react-dom');
const style = require('./index.css');


window.onload = () => {
    let f = (x) => x * 2;
    console.log(f(8));

    ReactDom.render(
        <DomTest/>,
        document.getElementById('root')
    );

};

function DomTest(props) {
    return (<div className={style.aaa}>unko</div>);
}


