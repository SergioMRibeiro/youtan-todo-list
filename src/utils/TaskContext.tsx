/* eslint-disable no-console */
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'
import axios from 'axios'
import { TaskInterface } from '../utils/interfaces'

// Defina o tipo para o valor do contexto
interface TaskContextType {
  tasks: TaskInterface[]
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>
  // eslint-disable-next-line no-unused-vars
  updateTask: (task: TaskInterface) => Promise<void>
  fetchTasks: () => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  // Função para buscar as tarefas da API
  const fetchTasks = async () => {
    try {
      const response = await axios.get<TaskInterface[]>(
        'http://localhost:3000/tasks'
      )
      setTasks(response.data)
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error)
    }
  }

  // Função para atualizar uma tarefa
  const updateTask = async (updatedTask: TaskInterface) => {
    try {
      await axios.put(
        `http://localhost:3000/tasks/${updatedTask.id}`,
        updatedTask
      )
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      )
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error)
    }
  }

  // UseEffect para buscar as tarefas quando o componente for montado
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, setTasks, fetchTasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useTasks = () => {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
