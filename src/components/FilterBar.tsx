/* eslint-disable no-console */
import React, { useState } from 'react'
import { useTasks } from '../utils/TaskContext'

const FilterBar = () => {
  const { tasks, fetchTasks, setTasks } = useTasks()
  const [selectedStatus, setSelectedStatus] = useState<string>('nenhum')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  /**Adcionar classe de "ativado" no elemento permitindo diferencia-lo */
  const toggleFilter = (filterName: string) => {
    if (!activeFilters.includes(filterName)) {
      setActiveFilters([...activeFilters, filterName])
    }
  }

  /**Ordenação em ordem alfabética das tarefas (Por título) */
  const orderByName = () => {
    const sortedTasks = [...tasks].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
    setTasks([...sortedTasks])
    toggleFilter('name')
  }

  /**Filtro de status */
  const filterByStatus = (status: string) => {
    if (status === 'nenhum') {
      // Se "nenhum" for selecionado, remove o filtro de status e restaura as tasks originais
      setActiveFilters(activeFilters.filter((filter) => filter !== 'status'))
      fetchTasks() // Faz o fetch sem filtros
    } else {
      fetchTasks(`tasks/?status=${status}`)
      toggleFilter('status')
    }
  }

  const resetFilters = () => {
    fetchTasks() // Refaz a busca sem filtros
    setSelectedStatus('nenhum') // Reseta o select
    setActiveFilters([]) // Remove todos os filtros
  }

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setSelectedStatus(newStatus) // Atualiza o estado do select
    filterByStatus(newStatus) // Aplica o filtro de status
  }

  return (
    <div className="filterTaskMainContainer">
      <p className="filterTaskTitleRow">Filtrar por: </p>

      <button
        className={`filterTaskButtonByAZ ${
          activeFilters.includes('name') ? 'filterTaskButtonActivated' : ''
        }`}
        onClick={orderByName}>
        A-Z
      </button>

      <div className="filterTaskSelectContent">
        <label> Status: </label>
        <select
          className={`filterTaskSelectByStatus`}
          value={selectedStatus} // Valor selecionado no select
          onChange={handleStatusChange} // Atualiza o valor ao mudar o select
        >
          <option value="nenhum">Nenhum</option>
          <option value="aberto">Aberto</option>
          <option value="concluido">Concluído</option>
          <option value="a fazer">A Fazer</option>
          <option value="fazendo">Fazendo</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      <button className="filterTaskButtonByResetar" onClick={resetFilters}>
        Resetar
      </button>
    </div>
  )
}

export default FilterBar
