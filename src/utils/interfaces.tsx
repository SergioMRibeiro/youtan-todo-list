export interface TaskInterface {
  id: string
  title: string
  description: string
  createdAt: string
  finalizationDate: string | null
  taskIdentificator: string
  status: string
  tag: string
}

export interface UpdateTaskInterface {
  status: FormDataEntryValue | null
  title: FormDataEntryValue | null
  description: FormDataEntryValue | null
  finalizationDate: string | null
}
