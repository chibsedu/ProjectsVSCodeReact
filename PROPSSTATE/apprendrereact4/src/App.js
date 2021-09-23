import React, { Component } from 'react'
import './App.css'
import TodoList from './Todo/TodoList'

export class App extends Component {
  render() {
    return (
      <div className="content">
        <TodoList />
      </div>
    );
  }
}

export default App;
