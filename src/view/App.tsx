/* eslint-disable no-console */
import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteApp from '../routes/RouteApp'
import { TaskProvider } from '../utils/TaskContext'
import { ThemeProvider } from '../utils/ThemeContext'

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

          <footer
            style={{
              width: '100%',
              height: '66px',
              backgroundColor: '#00A0B9',
              bottom: '0',
              position: 'absolute',
            }}></footer>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
