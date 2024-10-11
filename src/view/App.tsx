/* eslint-disable no-console */
import React from 'react'
import Home from './pages/Home'
import Header from '../components/Header'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <Home />
    </div>
  )
}

export default App
