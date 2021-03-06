import React, { Component } from 'react';

class WeatherForm extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();

        let location = this.refs.location.value;

        if(location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" />
                <button className="button expanded hollow" type="submit">Get Weather</button>
                </form>
        );
    }
}

export default WeatherForm;