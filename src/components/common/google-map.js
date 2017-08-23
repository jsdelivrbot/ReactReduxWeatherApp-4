import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.props.long)
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}