import React, { Component } from 'react'
import Devtools from 'mobx-react-devtools'
import Todo from './Todo'
import TodoStore from '../store/TodoStore'
import './App.css'
import Agenda from '../store/Agenda'

const todo = new TodoStore()
let agenda1 = new Agenda({title: "Work", text: "We got work, work, work", date: new Date() })
todo.store.add(agenda1)

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


