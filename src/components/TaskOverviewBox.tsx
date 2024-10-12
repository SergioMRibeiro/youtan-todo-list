import React from 'react'

const TaskOverviewBox = () => {
  return (
    <div className="taskOverviewMainContainer">
      <p className="taskOverviewTaskTitle">
        Isso é o título de uma tarefa e precisa ser um nome grande para carmaba
      </p>
      <div className="taskOverviewStatusAndDateContent">
        <span className="taskOverviewDate">criado: 09/10/2024</span>
        <span className="taskOverviewStatusBox">
          <span className="taskOverviewStatusDot" />
          Status: concluído
        </span>
      </div>
    </div>
  )
}

export default TaskOverviewBox
