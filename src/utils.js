export const toggleOneTodo = (todos, index) => {
  const newTodos = [...todos]
  const todoToFlip = newTodos[index]
  if (todoToFlip) {
    todoToFlip.isCompleted = !todoToFlip.isCompleted
  }
  return newTodos
}
