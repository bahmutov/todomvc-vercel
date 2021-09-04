import React from 'react'

export function Todo({ todo, index, toggleTodo, removeTodo }) {
  const toggleText = todo.isCompleted ? 'Redo' : 'Complete'
  const cyAttribute = todo.isCompleted ? 'redo' : 'complete'
  const className = todo.isCompleted ? 'todo completed' : 'todo'

  return (
    <div
      className={className}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div>
        <button data-cy={cyAttribute} onClick={() => toggleTodo(index)}>
          {toggleText}
        </button>
        <button data-cy="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  )
}
