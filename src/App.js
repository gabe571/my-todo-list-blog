import React, { useState } from 'react'

function Todo({ todo }) {
  return (
    <div className='task'>
      {todo.task}
    </div>
  )
}

function App() {

const [todos, SetTodos] = useState(
[
  { task: "Get out of bed" },
  { task: "Brew coffee" },
  { task: "Make Breakfast" }
])


  return (
    <div className="App">
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
