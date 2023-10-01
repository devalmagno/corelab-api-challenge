// eslint-disable-next-line @typescript-eslint/naming-convention
export interface INote {
  id: number
  title: string
  description: string
  is_favorite: boolean
  color: string
  created_at: Date
  updated_at: Date
}
