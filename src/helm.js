const React = require("react");
const Helmet = require("react-helmet").Helmet;
const Util = require('./pt-util')

class Helm extends React.Component {
    constructor(props) {
        super(props);
        let title;
        if(props.work){
            title = props.work.title;
        }　else {
            title = "YFT's PlayTime";
        }
        this.state = {
            'title': title
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>
            </div>
        );
    }
};

module.exports = Helm;
