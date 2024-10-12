import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllTasks from '../view/pages/AllTasks'
import Home from '../view/pages/Home'

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/todas-as-tarefas" element={<AllTasks />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RouteApp