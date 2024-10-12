import React from 'react'
import TaskContainer from '../../components/TaskContainer'
import TaskOverviewBox from '../../components/TaskOverviewBox'

const AllTasks = () => {
  return (
    <div className='allTasksMainContainer'>
      <TaskContainer>
        <TaskOverviewBox />
        <TaskOverviewBox />
        <TaskOverviewBox />
        <TaskOverviewBox />
      </TaskContainer>
    </div>
  )
}
export default AllTasks
