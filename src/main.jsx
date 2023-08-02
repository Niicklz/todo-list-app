import React from 'react'
import ReactDOM from 'react-dom/client'
import "./reset.min.css"


import { TaskListApp } from './components/TaskListApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskListApp />
  </React.StrictMode>,
)
