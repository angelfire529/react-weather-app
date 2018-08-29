import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    prototypes = {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    }

    // getDefaultProps = () => {
    //     return {
    //         title: 'Error'
    //     }
    // }

    componentDidMount () {
        const {title, message} = this.props;
        const modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                <button className="button hollow" data-close="">
                    Okay
                </button>
                </p>
            </div>
        );
        const $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        const modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    render () {
        return (
            <div></div>
        );
    }
}



export default ErrorModal;