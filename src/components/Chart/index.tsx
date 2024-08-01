import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Highcharts の データ設定ファイル
import { useGetChartData } from './hooks/useGetChartData'

// selectedPref を プロパティとして受け取る
export const Chart = ({ selectedPref }: { selectedPref: number[] }) => {
  // useGetChartDataフック を使用して options を取得
  const options = useGetChartData(selectedPref)

  return (
    <section>
      <h2>総人口推移</h2>
      <div className="populationContent">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </section>
  )
}
