'use client'

import { useState } from 'react'
import { PrefectureNextResponse, Prefecture } from '@/types/prefecture'

// カスタムエラーを作成する関数
const CustomError = (message: string, status: number) => {
  const error = new Error(message) as Error & { status: number }
  error.status = status
  return error
}

// 都道府県データ を 非同期 で取得する関数
// https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
const fetchPref = async () => {
  const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    // HTTPリクエスト の ヘッダー を設定する記述
    // この設定により、APIリクエストを送信する際に必要な認証情報 が ヘッダーに含まれる
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY!
    }
  })

  // APIリクエストが成功した場合、レスポンスデータ を JSON形式で解析し、その結果を返す
  // APIリクエストが失敗した場合、レスポンスを解析して CustomError を スローします。
  if (!res.ok) {
    try {
      const err: { message: string } = await res.json()
      throw CustomError(err.message, res.status)
    } catch {
      throw CustomError('レスポンス解析に失敗しました', res.status)
    }
  }
  const data: PrefectureNextResponse = await res.json()
  return data.result
}

export const usePref = () => {
  // 都道府県データ を 保持する状態変数
  const [pref, setPref] = useState<Prefecture[] | null>(null)

  // データ取得関数を呼び出し、状態を更新
  fetchPref()
    .then(setPref)
    .catch((error) => {
      console.error('データ取得に失敗しました:', error)
    })

  // 都道府県データ と その更新関数 を返す

  // TODO: Result だけでいけそうかも？
  return { pref, setPref }
}
