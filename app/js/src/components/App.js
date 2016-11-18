import React, { Component } from 'react'
import Devtools from 'mobx-react-devtools'
import Todo from './Todo'
import TodoStore from '../store/TodoStore'
import './App.css'

const todo = new TodoStore()

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Devtools/>
       <h1>Scrum Board</h1>
      <Todo store={todo} />
      </div>
    )
  }
}


