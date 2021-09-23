import React, { useState } from 'react';
import Todo from './Todo';

import "./index.css";


/*
function Todo({todo, index}){
  return (
    <div className="todo">
      {todo.text}
    </div>
  )

}
*/
function App() {
// eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      text: "Learn a lot about React",
      isCompleted: false
    },
    {
      text: "Meet some friend for lunch",
      isCompleted: false     
    },
    {
      text: "Build really cool todo application",
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
