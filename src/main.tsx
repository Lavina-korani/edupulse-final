import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore: Ignore missing type declarations for CSS import
import './styles/index.css'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
