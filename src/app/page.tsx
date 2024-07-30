'use client'

import { useState } from 'react'

import { ButtonList } from '@/components/ButtonList'
import { Chart } from '@/components/Chart'

export default function Home() {
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
