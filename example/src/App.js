import React, { Component } from 'react'

import ExampleComponent from 'react-twitter-search-component'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent apiUrl={'http://localhost:3001/search'} />
      </div>
    )
  }
}
