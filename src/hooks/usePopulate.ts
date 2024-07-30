'use client'

import { useState, useEffect } from 'react'
import { PopulationData, PopulationResponse } from '@/types/population'
import { usePref } from '@/hooks/usePref'

export const usePopulate = () => {
  const [populateData, setPopulateData] = useState<
    { data: PopulationData; prefCode: number; prefName: string }[] | null
  >(null)

  const { pref } = usePref()

  useEffect(() => {
    if (!pref) return
    const fetchData = async () => {
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
      setPopulateData(data)
    }
    fetchData()
  }, [pref])

  return { populateData, setPopulateData }
}
