import { Dispatch, SetStateAction } from 'react'

import { Button } from '../Button'
import { usePref } from '@/hooks/usePref'

export const ButtonList = ({ setSelected }: { setSelected: Dispatch<SetStateAction<number[]>> }) => {
  // usePrefフック を 呼び出して prefデータ を取得
  const { pref } = usePref()

  return (
    <section>
      <h2>都道府県を選択</h2>

      {/* prefデータが存在する場合、pref を map で回して Buttonコンポーネント（都道府県）を表示する */}
      {pref && (
        <ul className="prefContent">
          {pref.map((pref) => (
            <li key={pref.prefCode}>
              <Button setSelected={setSelected} pref={pref} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
