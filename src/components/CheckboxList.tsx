import usePref from '@/hooks/usePref'
import CheckboxItem from './CheckboxItem'
import { Dispatch, SetStateAction } from 'react'

export default function CheckboxList({ setSelectedPref }: { setSelectedPref: Dispatch<SetStateAction<number[]>> }) {
  const { pref } = usePref()

  return (
    <div>
      <h2>都道府県</h2>
      <div className="check">
        {pref && pref.map((item) => <CheckboxItem setSelectedPref={setSelectedPref} key={item.prefCode} item={item} />)}
      </div>
    </div>
  )
}
