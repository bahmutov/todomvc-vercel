import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

console.log('rendering app')
ReactDOM.render(<App />, document.getElementById('root'))

setTimeout(() => {
  console.log('running app code')
}, 1000)
