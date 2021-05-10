import React, { useState } from 'react'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className='task'   style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.content}
      <button onClick={() => completeTodo(index)}> Complete </button>
      <button onClick={() => removeTodo(index)}> X </button>
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
      <button type='submit'> Add Todo </button>
    </form>
  )
}

function App() {

const [todos, setTodos] = useState(
[
  { content: "Get Out Of Bed",
    isCompleted: false },
  { content: "Brew Coffee",
    isCompleted: false },
  { content: "Make Breakfast",
    isCompleted: false }
])

const addTodo = content => {
  const newTodos = [...todos, { content }];
  setTodos(newTodos);
};

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};


  return (
    <div className="App">
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm  addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
