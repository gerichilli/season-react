import React, { Component } from 'react';

class SeasonDisplay extends Component {
    render() {
        return (
            <div>
                Latitude: {this.props.lat}
                Longitude: {this.props.long}
            </div>
        )
    }
}

export default SeasonDisplay;