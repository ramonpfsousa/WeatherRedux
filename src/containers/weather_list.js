import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    constructor(props) {
        super(props);
    }



    renderWeather(cityData) {
        console.log(cityData);
        
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={ name }>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temperatures} color="red" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" />
                </td>
                <td>
                    <Chart data={humidities} color="yellow" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}                    
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather } ) {
    
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);