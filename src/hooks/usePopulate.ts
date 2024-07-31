'use client'

import { useState } from 'react'

import { PopulationData, PopulationResponse } from '@/types/population'
import { usePref } from '@/hooks/usePref'

// 都道府県ごとの人口データを取得する関数
const fetchPopulationData = async (pref: { prefCode: number; prefName: string }[]) => {
  const promiseFunc = pref.map(async (item) => {
    const data = fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${item.prefCode}`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY!
        }
      }
    ).then(async (res) => {
      const data: PopulationResponse = await res.json()
      return { data: data.result, prefCode: item.prefCode, prefName: item.prefName }
    })
    return data
  })
  const data = await Promise.all(promiseFunc)
  return data
}

export const usePopulate = () => {
  const [populateData, setPopulateData] = useState<
    { data: PopulationData; prefCode: number; prefName: string }[] | null
  >(null)

  const { pref } = usePref()

  if (pref) {
    fetchPopulationData(pref)
      .then(setPopulateData)
      .catch((error) => {
        console.error('データ取得に失敗しました:', error)
      })
  }

  return { populateData, setPopulateData }
}
