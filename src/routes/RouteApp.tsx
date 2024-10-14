import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllTasks from '../view/pages/AllTasks'
import Home from '../view/pages/Home'

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AllTasks />} />
      <Route path="/sprint" element={<Home />} />
    </Routes>
  )
}

export default RouteApp