const React = require("react");
const Helmet = require("react-helmet").Helmet;
const Util = require('./pt-util')

class OG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'work': props.work
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.state.work.title}</title>
                    <meta name='description' content={this.state.work.description}/>
                    <meta property='og:title' content={this.state.work.title}/>
                    <meta property='og:description' content={this.state.work.description}/>
                    <meta property='og:type' content='article'/>
                    <meta property='og:url' content={'http://knights.ton-katsu.net/playtime/:' + this.state.id}/>
                    <meta property='og:image' content={Util.getThumbPath(this.state.work)}/>
                    <meta property='og:site_name' content="YFT's PlayTime"/>
                    <meta property='fb:admins' content='100001501165698'/>
                    <meta property='twitter:card' content='summary'/>
                    <meta property='twitter:site' content='@TonkatsuHiroba'/>
                </Helmet>
            </div>
        );
    }
};

module.exports = OG;
