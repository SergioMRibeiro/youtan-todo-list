import React from 'react'

type TaskStatusProps = {
  createdAt: string
  finalizatedAt?: string | null
  statusName: string
}

type ColoredDotsProps = {
  statusName: string
}

const taskStatusMap = (statusName: string) => {
  const statusMap = {
    aberto: 'taskOverviewStatusDotOpen',
    concluido: 'taskOverviewStatusDotCompleted',
    'a fazer': 'taskOverviewStatusDotToDo',
    fazendo: 'taskOverviewStatusDotInProgress',
    cancelado: 'taskOverviewStatusDotCancelled',
  }

  return statusMap[statusName] || 'taskOverviewStatusDotUnknown'
}

export const ColoredDots = ({ statusName }: ColoredDotsProps) => {
  return (
    <span className={`taskOverviewStatusDot ${taskStatusMap(statusName)}`} />
  )
}

const TaskStatus = ({
  createdAt,
  finalizatedAt,
  statusName,
}: TaskStatusProps) => {
  return (
    <div className="taskOverviewStatusAndDateContent">
      <span className="taskOverviewDate">
        criado: {createdAt.substring(0, 10)}
      </span>

      {finalizatedAt ? (
        <span className="taskOverviewDate">
          Finalizado: {finalizatedAt.substring(0, 10)}
        </span>
      ) : (
        <></>
      )}

      <span className="taskOverviewStatusBox">
        <span
          className={`taskOverviewStatusDot ${taskStatusMap(statusName)}`}
        />
        Status: {statusName}
      </span>
    </div>
  )
}

export default TaskStatus
