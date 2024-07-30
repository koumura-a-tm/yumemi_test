import { Dispatch, SetStateAction } from 'react'

import { Button } from './Button'
import { usePref } from '@/hooks/usePref'

export const ButtonList = ({ setSelected }: { setSelected: Dispatch<SetStateAction<number[]>> }) => {
  const { pref } = usePref()

  return (
    <section>
      <h2>都道府県を選択</h2>

      {/* prefデータが存在する場合、pref を map で回して Buttonコンポーネント を表示する */}
      {pref && (
        <ul className="prefContent">
          {pref.map((item) => (
            <li key={item.prefCode}>
              <Button setSelected={setSelected} item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
