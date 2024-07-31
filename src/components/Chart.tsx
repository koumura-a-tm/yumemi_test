import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { usePopulate } from '@/hooks/usePopulate'

export const Chart = ({ selectedPref }: { selectedPref: number[] }) => {
  const { populateData } = usePopulate()

  const selectedPopulate = populateData?.filter((item) => selectedPref.includes(item.prefCode)) || []

  const categories =
    selectedPopulate.length > 0 ? selectedPopulate[0].data.data[0].data.map((item) => item.year.toString()) : undefined

  const series: Highcharts.SeriesOptionsType[] =
    selectedPopulate.length > 0
      ? selectedPopulate.map((item) => ({
          type: 'line',
          name: item.prefName,
          data: item.data.data[0].data.map((v) => v.value)
        }))
      : [
          {
            type: 'line',
            name: '未選択',
            data: []
          }
        ]

  const options: Highcharts.Options = {
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: categories
    },
    yAxis: {
      title: {
        text: '人口'
      }
    },
    series: series
  }

  return (
    <section>
      <h2>総人口推移</h2>

      <div className="populationContent">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </section>
  )
}
