import React, { Component } from 'react'
import Devtools from 'mobx-react-devtools'
import Panel from './Panel'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Devtools/>
       <h1>Scrum Board</h1>
       <Panel />
       <Panel />
       <Panel />
       <Panel />
      </div>
    )
  }
}


