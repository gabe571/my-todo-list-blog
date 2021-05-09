import React, { useState } from 'react'

function Todo({ todo }) {
  return (
    <div>
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
     
    </div>
  );
}

export default App;
