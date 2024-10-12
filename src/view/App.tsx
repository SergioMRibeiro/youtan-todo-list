/* eslint-disable no-console */
import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteApp from '../routes/RouteApp'

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>

      <div className="appPrimaryMainContainer">
        <RouteApp />{' '}
      </div>
    </Router>
  )
}

export default App
