import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { toggleOneTodo } from './utils'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ])

  // async function fetchData() {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos?_limit=4',
  //   )
  //   const json = await response.json()
  //   const todos = json.map((t) => ({
  //     text: t.title,
  //     isCompleted: t.completed,
  //   }))
  //   setTimeout(() => {
  //     console.log('setting todos')
  //     setTodos(todos)
  //   }, 100)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  if (window.Cypress) {
    window.todos = todos
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
    console.log('added todo')
  }

  const toggleTodo = (index) => {
    const newTodos = toggleOneTodo(todos, index)
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
