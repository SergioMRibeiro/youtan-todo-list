import { useContext } from 'react'
import { TaskContext } from '../utils/TaskContext'
import { TaskInterface } from '../utils/interfaces'

const useUpdateTask = () => {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useUpdateTask must be used within a TaskProvider')
  }

  const { updateTask } = context
  const update = (task: TaskInterface) => {
    updateTask(task)
  }

  return update
}

export default useUpdateTask
