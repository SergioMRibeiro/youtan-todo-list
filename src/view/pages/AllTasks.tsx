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

  return (
    <div className="allTasksMainContainer">
      <TaskContainer>
        <>
          {listofTask?.map((taskItem: TaskInterface, index: number) => {
            const { title, createdAt, status, taskIdentificator, id, finalizationDate } = taskItem
            return (
              <TaskOverviewBox
                title={title}
                createdAt={createdAt}
                status={status}
                taskIdentificator={taskIdentificator}
                taskId={id}
                key={index}
                finalizationDate={finalizationDate}
              />
            )
          })}
        </>
      </TaskContainer>
    </div>
  )
}
export default AllTasks
