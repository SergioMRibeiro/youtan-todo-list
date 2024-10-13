/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import TaskContainer from '../../components/TaskContainer'
import TaskOverviewBox from '../../components/TaskOverviewBox'
// import axios from 'axios'
import { TaskInterface } from '../../utils/interfaces'
import { useTasks } from '../../utils/TaskContext'

const AllTasks = () => {
  const { tasks, fetchTasks } = useTasks()

  const [listofTask, setListOfTask] = useState<TaskInterface[]>([])

  
  useEffect(() => {
    fetchTasks
  }, [])

  useEffect(() => {
    setListOfTask(tasks)
  }, [tasks])

  // const getAllTasks = async () => {
  //   try {
  //     const response = await axios.get<TaskInterface[]>(
  //       `http://localhost:3000/tasks`
  //     )

  //     if (response.status !== 200 && response.status !== 201) {
  //       throw new Error('Erro ao criar a tarefa')
  //     }

  //     setListOfTask(response.data)
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.error('Erro ao buscar tarefa:', error)
  //   }
  // }






  return (
    <div className="allTasksMainContainer">
      <TaskContainer>
        <>
          {listofTask?.map((taskItem: TaskInterface, index: number) => {
            const { title, createdAt, status, taskIdentificator, id } = taskItem
            return (
              <TaskOverviewBox
                title={title}
                createdAt={createdAt}
                status={status}
                taskIdentificator={taskIdentificator}
                taskId={id}
                key={index}
              />
            )
          })}
        </>
      </TaskContainer>
    </div>
  )
}
export default AllTasks
