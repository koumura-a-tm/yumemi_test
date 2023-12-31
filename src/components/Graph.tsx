import usePopulate from '@/hooks/usePopulate'
import { useRef, useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PopulationData } from '@/types/population'

export default function Graph({ selectedPref }: { selectedPref: number[] }) {
  const { populateData } = usePopulate() //populateData["東京"]
  const [selectedPopulate, setSelectedPopulate] = useState<
    {
      data: PopulationData
      prefCode: number
      prefName: string
    }[]
  >([])
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
      text: '総人口推移'
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
  useEffect(() => {
    // 表示用のステートを変更する
    const selectedPopulateData = populateData?.filter((item) => selectedPref.includes(item.prefCode))
    if (selectedPopulateData) setSelectedPopulate(selectedPopulateData)
  }, [selectedPref])
  return <HighchartsReact highcharts={Highcharts} options={options} />
}
