import { Prefecture } from '@/types/prefecture'
import { Dispatch, SetStateAction, useState } from 'react'
export default function CheckboxItem({
  item,
  setSelectedPref
}: {
  item: Prefecture
  setSelectedPref: Dispatch<SetStateAction<number[]>>
}) {
  const [isChecked, setIsChecked] = useState(false)
  const checkHandler = () => {
    if (isChecked) {
      setSelectedPref((prev) => prev.filter((prefCode) => prefCode !== item.prefCode))
      setIsChecked(false)
    } else {
      setSelectedPref((prev) => [...prev, item.prefCode])
      setIsChecked(true)
    }
  }
  return (
    <div key={item.prefCode} className="check-item">
      <input type="checkbox" id={'checkbox' + item.prefCode} checked={isChecked} onChange={checkHandler} />
      <label htmlFor={'checkbox' + item.prefCode}>{item.prefName}</label>
    </div>
  )
}
