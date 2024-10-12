import React from 'react'

type TaskContainerProps = {
  children: JSX.Element | JSX.Element[]
}

const TaskContainer = ({ children }: TaskContainerProps) => {
  return (
    <div className="taskContainerMainContainer">
      {children}
    </div>
  )
}

export default TaskContainer
