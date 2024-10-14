/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react'
import GenericModal from './GenericModal'
import axios from 'axios'
import { TaskInterface, UpdateTaskInterface } from '../utils/interfaces'
import { useTasks } from '../utils/TaskContext'
import PrimaryButton from './PrimaryButton'
import TaskStatus from './TaskStatus'

type TaskOverviewBoxProps = {
  title: string
  createdAt: string
  status: string
  taskIdentificator: string
  taskId: string
  finalizationDate: string | null
}

const TaskOverviewBox = ({
  title,
  createdAt,
  status,
  taskIdentificator,
  finalizationDate,
  taskId,
}: TaskOverviewBoxProps) => {
  const [genericModalIsOpen, setGenericModalIsOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<TaskInterface>()
  const [isTaskEditable, setIsTaskEditable] = useState(false)
  const titleRef = useRef<HTMLTextAreaElement>(null)
  const [statusOnChange, setStatusOnChange] = useState(selectedTask?.status)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const { fetchTasks } = useTasks()

  /** Resgate  informações sobre uma determinada tarefa pela chave de identificação (taskIdentificator)*/
  const getSelectedTask = async (taskId: string) => {
    try {
      const response = await axios.get<TaskInterface>(
        `http://localhost:3000/tasks?taskIdentificator=${taskId}`
      )

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Erro ao criar a tarefa')
      }

      setSelectedTask(response.data[0])
    } catch (error) {
      console.error('Erro ao buscar tarefa:', error)
    }
  }

  /**Deletar tarefa pelo id*/
  const deleteSelectedTask = async (taskId: string) => {
    try {
      await axios.delete<TaskInterface>(`http://localhost:3000/tasks/${taskId}`)

      fetchTasks()
      setIsTaskEditable(false)
      setGenericModalIsOpen(!genericModalIsOpen)
    } catch (error) {
      console.error('Erro ao buscar tarefa:', error)
    }
  }

  // Atualização de tarefa para status (normalmente teria uma rota apenas para isso)
  const updateTaskByStatus = async (selectStatusValue: string) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/tasks/${selectedTask?.id}`,
        {
          ...selectedTask,
          status: selectStatusValue,
          finalizationDate:
            selectStatusValue === 'concluido'
              ? new Date().toLocaleString()
              : null,
        }
      )

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Erro ao atualizar a tarefa')
      }

      fetchTasks()
    } catch (error) {
      console.error('Erro ao tentar atualizar a tarefa:', error)
    }
  }

  const updateTask = async ({
    status,
    title,
    description,
    finalizationDate,
  }: UpdateTaskInterface) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/tasks/${selectedTask?.id}`,
        {
          ...selectedTask,
          status,
          title,
          description,
          finalizationDate,
        }
      )

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Erro ao atualizar a tarefa')
      }

      fetchTasks()
    } catch (error) {
      console.error('Erro ao tentar atualizar a tarefa:', error)
    }
  }

  const handlesUpdateTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!selectedTask) {
      return
    }
    const formData = new FormData(e.currentTarget)

    const updateBody = {
      status: formData.get('status'),
      title: formData.get('title'),
      description: formData.get('description') ?? '',
      finalizationDate:
        formData.get('status') === 'concluido'
          ? new Date().toLocaleString()
          : null,
    }

    setSelectedTask(undefined)
    // setGenericModalIsOpen(false)
    updateTask(updateBody)
    setIsTaskEditable(false)
  }

  /** Ajuste dinâmicamente a altura de campos de text área para evitar liberdade pro usuário*/
  const adjustHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 10 + 'px'
    }
  }

  useEffect(() => {
    if (!selectedTask) {
      return
    }

    adjustHeight(titleRef.current)
    adjustHeight(descriptionRef.current)
  }, [selectedTask])

  useEffect(() => {
    if (!statusOnChange || statusOnChange === selectedTask?.status) {
      return
    }
    updateTaskByStatus(statusOnChange)
  }, [statusOnChange])

  return (
    <>
      <div
        className="taskOverviewMainContainer"
        style={status === 'concluido' ? { opacity: '0.80' } : {}}
        onClick={() => {
          setGenericModalIsOpen(true)
          getSelectedTask(taskIdentificator)
        }}>
        <p
          className="taskOverviewTaskTitle"
          style={
            status === 'concluido' ? { textDecoration: 'line-through' } : {}
          }>
          {title}
        </p>

        <TaskStatus
          createdAt={createdAt}
          statusName={status}
          finalizatedAt={finalizationDate}
        />
      </div>

      <GenericModal
        isOpen={genericModalIsOpen}
        setIsOpen={setGenericModalIsOpen}
        title="">
        <form className="taskDetailForm" onSubmit={handlesUpdateTask}>
          <textarea
            name="title"
            ref={titleRef}
            className="taskDetailTitle"
            defaultValue={selectedTask?.title}
            onInput={(e) => adjustHeight(e.target as HTMLTextAreaElement)}
            disabled={!isTaskEditable}
          />

          <div className="taskOverviewStatusAndDateContent">
            <span className="taskOverviewDate">
              criado: {selectedTask?.createdAt.substring(0, 10)}
            </span>

            {selectedTask?.finalizationDate ? (
              <span className="taskOverviewDate">
                finalizado: {selectedTask?.finalizationDate?.substring(0, 10)}
              </span>
            ) : (
              <></>
            )}

            {selectedTask && (
              <div className="taskOverviewStatusAndStatusSelectContent">
                <span className="taskOverviewStatusBox">Status:</span>

                <span>
                  <select
                    onChange={(e) => setStatusOnChange(e.target.value)}
                    name="status"
                    className="taskDetailStatusSelect"
                    defaultValue={selectedTask.status}
                    disabled={
                      selectedTask.status === 'concluido' && !isTaskEditable
                        ? true
                        : false
                    }>
                    <option value="aberto">Aberto</option>
                    <option value="concluido">Concluído</option>
                    <option value="a fazer">A Fazer</option>
                    <option value="fazendo">Fazendo</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </span>
              </div>
            )}
          </div>

          <textarea
            name="description"
            ref={descriptionRef}
            className="taskDetailDescription"
            defaultValue={selectedTask?.description}
            onInput={(e) => adjustHeight(e.target as HTMLTextAreaElement)}
            disabled={!isTaskEditable}
          />

          <div className="taskDetailActionGroup">
            <button
              type="button"
              className="taskDetailDeleteButon"
              onClick={() => {
                deleteSelectedTask(taskId)
              }}
              disabled={
                (selectedTask?.status !== 'concluido' &&
                  selectedTask?.status !== 'cancelado') !== isTaskEditable
                  ? true
                  : false
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px">
                <path
                  className="deletePath"
                  d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setIsTaskEditable(!isTaskEditable)}
              className="taskDetailEditButon">
              {isTaskEditable ? (
                'Cancelar'
              ) : (
                <svg
                  version="1.1"
                  id="Слой_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                  xmlSpace="preserve"
                  width="20px"
                  height="20px">
                  <path d="M968.161,31.839c36.456,36.456,36.396,95.547,0,132.003l-43.991,43.991L792.138,75.83l43.991-43.991  C872.583-4.586,931.704-4.617,968.161,31.839z M308.238,559.79l-43.96,175.963l175.963-43.991l439.938-439.938L748.147,119.821  L308.238,559.79z M746.627,473.387v402.175H124.438V253.373h402.204l124.407-124.438H0V1000h871.064V348.918L746.627,473.387z" />
                </svg>
              )}
            </button>

            <PrimaryButton
              type="submit"
              style={
                isTaskEditable ? { display: 'block' } : { display: 'none' }
              }>
              <p>Salvar</p>
            </PrimaryButton>
          </div>
        </form>
      </GenericModal>
    </>
  )
}

export default TaskOverviewBox
