import usePref from '@/hooks/usePref'
import CheckboxItem from './CheckboxItem'
export default function CheckboxList() {
  const { pref } = usePref()

  return (
    <div>
      <h2>都道府県</h2>
      <div className="check">{pref && pref.result.map((item) => <CheckboxItem key={item.prefCode} item={item} />)}</div>
    </div>
  )
}
