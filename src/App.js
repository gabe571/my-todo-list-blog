import React, { useState } from 'react'

function Todo({ todo }) {
  return (
    <div className='task'>
      {todo.content}
    </div>
  )
}

function TodoForm ({ addTodo }) {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    addTodo(value);
    setValue('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
      className='input'
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {

const [todos, SetTodos] = useState(
[
  { content: "Get Out Of Bed" },
  { content: "Brew Coffee" },
  { content: "Make Breakfast" }
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
        <TodoForm  />
      </div>
    </div>
  );
}

export default App;
