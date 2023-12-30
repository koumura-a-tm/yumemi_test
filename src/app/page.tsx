'use client'
import { useRef, useState } from 'react'
import CheckboxList from '@/components/CheckboxList'
import Graph from '@/components/Graph'

export default function Home() {
  const [selectedPref, setSelectedPref] = useState<number[]>([])
  return (
    <main>
      <h1>都道府県別人口推移</h1>
      <CheckboxList setSelectedPref={setSelectedPref} />
      <Graph selectedPref={selectedPref} />
    </main>
  )
}
