'use client'

import { useState, useEffect } from 'react'
import { PrefectureNextResponse, Prefecture } from '@/types/prefecture'

class CustomError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export const usePref = () => {
  const [pref, setPref] = useState<Prefecture[] | null>(null)

  useEffect(() => {
    const fetchPref = async () => {
      const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY!
        }
      })

      if (!res.ok) {
        try {
          const err: { message: string } = await res.json()
          throw new CustomError(err.message, res.status)
        } catch {
          throw new CustomError('レスポンス解析に失敗しました', res.status)
        }
      }
      const data: PrefectureNextResponse = await res.json()
      setPref(data.result)
    }
    fetchPref()
  }, [])

  return { pref, setPref }
}
