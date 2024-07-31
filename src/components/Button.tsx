import { Dispatch, SetStateAction, useState } from 'react'
import { Prefecture } from '@/types/prefecture'

export const Button = ({
  pref, // 表示する都道府県の情報
  setSelected // 選択された都道府県のリストを更新する関数
}: {
  pref: Prefecture
  setSelected: Dispatch<SetStateAction<number[]>>
}) => {
  // ボタンが選択されているかどうかの状態を管理するフック
  const [isChecked, setIsChecked] = useState(false)

  // ボタンがクリックされたときのハンドラー
  const checkHandler = () => {
    if (isChecked) {
      // すでに選択されている場合、選択を解除する
      setSelected((prev) => prev.filter((prefCode) => prefCode !== pref.prefCode))
      setIsChecked(false)
    } else {
      // 選択されていない場合、選択する
      setSelected((prev) => [...prev, pref.prefCode])
      setIsChecked(true)
    }
  }

  return (
    // ボタン要素をレンダリングし、クリック時にcheckHandlerを呼び出す
    <button key={pref.prefCode} onClick={checkHandler}>
      {pref.prefName} {/* ボタンに都道府県名を表示 */}
    </button>
  )
}
