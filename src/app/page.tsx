'use client'
// クライアントサイドで、ユーザーの操作が入るので、use client を記述

import { useState } from 'react'

import { ButtonList } from '@/components/ButtonList'
import { Chart } from '@/components/Chart'

export default function Home() {
  // useStateフック を使用して、selected という状態変数 と その更新関数 setSelected を定義しています。
  const [selected, setSelected] = useState<number[]>([])

  return (
    <div className="wrapper">
      <header>
        <h1>RESAS Chart App</h1>
        <p>都道府県別の人口推移チャート表示アプリ</p>
      </header>

      <main>
        {/* 都道府県を選択 */}
        <ButtonList setSelected={setSelected} />

        {/* 総人口推移チャート */}
        <Chart selectedPref={selected} />
      </main>
    </div>
  )
}
