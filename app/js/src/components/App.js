import React, { Component } from 'react'
import Panel from './Panel'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>What is up?</h1>
       <Panel />
       <Panel />
       <Panel />
       <Panel />
      </div>
    )
  }
}


