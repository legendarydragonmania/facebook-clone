import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css'
import Widgets from './Widgets'
import Login from './Login'

function App() {
  const user = null
  return (
    <div className='app'>
      {user ? (
        <>
          <Header />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
