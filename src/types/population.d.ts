export type PopulationResponse = {
  message: string | null
  result: PopulationData
}

export type PopulationData = {
  boundaryYear: number
  data: {
    label: string
    data: { year: number; value: number }[]
  }[]
}
