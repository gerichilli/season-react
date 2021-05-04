import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay"

class SeasonApp extends Component {
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => 
                this.setState({ 
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            ,
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        } 

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay 
                    lat = {this.state.lat}
                    long = {this.state.long}
                    err = {this.state.errorMessage}
                    />
                </div>
            )
        }
    
        return (
            <div>
                Loading
            </div>
        )
    }
}

export default SeasonApp;