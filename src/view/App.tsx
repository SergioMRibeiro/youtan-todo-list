/* eslint-disable no-console */
import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteApp from '../routes/RouteApp'
import { TaskProvider } from '../utils/TaskContext'
import { ThemeProvider } from '../utils/ThemeContext'
import Footer from '../components/Footer'

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <header>
            <Header />
          </header>

          <div className="appPrimaryMainContainer">
            <RouteApp />{' '}
          </div>

          <footer>
            <Footer />
          </footer>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
