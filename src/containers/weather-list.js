import React, { Component } from 'react';
import { connect } from 'react-redux';

import SparklineChart from '../components/common/sparkline-chart';
import GoogleMap from '../components/common/google-map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    renderListItem(cityData) {
        const city = cityData.city;
        const tempData = cityData.list.map(weather => weather.main.temp);
        const pressureData = cityData.list.map(weather => weather.main.pressure);
        const humidityData = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={city.id}>
                <td>
                    <GoogleMap lat={city.coord.lat} lon={city.coord.lon} />
                    {city.name}
                </td>
                <td><SparklineChart height={120} width={180} color="red" data={tempData} units="K" /></td>
                <td><SparklineChart height={120} width={180} color="blue" data={pressureData} units="hPa" /></td>
                <td><SparklineChart height={120} width={180} color="green" data={humidityData} units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderListItem)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
