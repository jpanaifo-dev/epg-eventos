import type { IPerson } from '../person'

export interface IEvent {
  id: string
  person: IPerson
  title: string
  date: string
  timeStart: string
  timeEnd: string
  turno: 'M' | 'T' | 'N'
  modalidad: 'P' | 'V'
  image?: string
  isActived: boolean
  isPublished: boolean
  created_at: string
}
