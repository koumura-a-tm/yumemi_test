import { Prefecture } from '@/types/prefecture'
import { useState } from 'react'
export default function CheckboxItem({ item }: { item: Prefecture }) {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked) // チェックの状態を反転させる
  }
  return (
    <div key={item.prefCode} className="check-item">
      <input type="checkbox" id={'checkbox' + item.prefCode} checked={isChecked} onChange={checkHandler} />
      <label htmlFor={'checkbox' + item.prefCode}>{item.prefName}</label>
    </div>
  )
}
