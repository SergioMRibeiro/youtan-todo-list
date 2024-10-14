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
interface TaskContextType {
  tasks: TaskInterface[]
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>
  // A linha abixo é ecessário devido a problema de versão do lint
  // eslint-disable-next-line no-unused-vars
  fetchTasks: (path?: string) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  // Função para buscar as tarefas da API com path opcional
  const fetchTasks = async (path: string = 'tasks') => {
    try {
      const response = await axios.get<TaskInterface[]>(
        `http://localhost:3000/${path}`
      )
      setTasks(response.data)
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error)
    }
  }


  // UseEffect para buscar as tarefas quando o componente for montado
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, setTasks, fetchTasks }}>
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
