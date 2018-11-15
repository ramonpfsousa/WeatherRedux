import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
