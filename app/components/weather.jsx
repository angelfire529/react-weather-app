import React, { Component } from 'react';
import WeatherForm from './weatherForm';
import { WeatherMessage } from './weatherMessage';
import ErrorModal from './errorModal';

var OpenWeatherMap = require('OpenWeatherMap');

class Weather extends Component {
    constructor() {
        super();
        this.state = {
           isLoading: false,
           errorMessage: undefined
        }
    }
    handleSearch = (location) => {
        const that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        OpenWeatherMap.getTemp(location).then((temp) => {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (error) => {
            this.setState({
                errorMessage: error.message,
                isLoading: false
            })
        });
        
    }

    componentDidMount() {
        const location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    componentWillReceiveProps(newProps) {
        const location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    render() {
        const {temp, location} = this.state;
        let {isLoading, errorMessage} = this.state;

        function renderMessage() {
                if (isLoading) {
                    return <h3 className="text-center">Fetching weather...</h3>;
                } else if(temp && location) {
                    return <WeatherMessage  location={location} temp = {temp}/>
                } 
            }
        function renderError (errorMessage) {
            if(typeof errorMessage === 'string') {
                return  <ErrorModal title="Error" message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError(errorMessage)}
            </div>
        );
    }
}

export default Weather;