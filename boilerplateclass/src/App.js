import React, { Component } from 'react'
import Welcome from './Welcome'
import './App.css'


export class App extends Component {
  render() {
    return (
      <div className="content">
        <Welcome name="Jackson Five"/>
      </div>
    )
  }
}

export default App
