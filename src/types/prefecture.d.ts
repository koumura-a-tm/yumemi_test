export type Prefecture = {
  prefCode: number
  prefName: string
}

export type PrefectureResponse = {
  message: string | null
  result: Prefecture[]
}

export type PrefectureNextResponse = {
  result: Prefecture[]
}
