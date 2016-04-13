import React from 'react';
import { Component } from 'react';

import { SearchBar, WeatherList } from '../containers'

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
