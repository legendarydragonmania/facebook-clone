import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AppProvider from './context'
import reducer, { initialState } from './reducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer}>
      <App />
    </AppProvider>
  </React.StrictMode>
)
