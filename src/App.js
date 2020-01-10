import React, { Component, useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => 
<div 
  style={{textDecoration: todo.isComplete ? 'line-through' : ''}} 
  className="todo"> { todo.text }
  <div>
    <button onClick={() => completeTodo(index)}>Completo</button>
    <button onClick={() => removeTodo(index)}>X</button>
  </div>
</div>;

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  } 
  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <label>Digite uma Tarefa:</label>
        <input type="text" className="input" value={value} placeholder="Digite aqui para adicionar uma tarefa" onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Aprender Mais React',
      isComplete: false,
    },
    {
      text: 'Ir para a Recode',
      isComplete: false,
    },
    {
      text: 'Construir um App legal',
      isComplete: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Afazeres</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            index={index} 
            todo={todo} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;