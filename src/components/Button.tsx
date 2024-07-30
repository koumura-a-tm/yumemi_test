import { Dispatch, SetStateAction, useState } from 'react'
import { Prefecture } from '@/types/prefecture'

export const Button = ({
  item,
  setSelected
}: {
  item: Prefecture
  setSelected: Dispatch<SetStateAction<number[]>>
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    if (isChecked) {
      setSelected((prev) => prev.filter((prefCode) => prefCode !== item.prefCode))
      setIsChecked(false)
    } else {
      setSelected((prev) => [...prev, item.prefCode])
      setIsChecked(true)
    }
  }

  return (
    <button key={item.prefCode} onClick={checkHandler}>
      {item.prefName}
    </button>
  )
}
