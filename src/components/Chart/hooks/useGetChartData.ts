import Highcharts from 'highcharts'
import { usePopulate } from '../../../hooks/usePopulate'

export const useGetChartData = (selectedPref: number[]) => {
  // usePopulateフック を使用して populateData を取得
  const { populateData } = usePopulate()

  // selectedPref に含まれる 都道府県コード に基づいて populateData をフィルタリング
  const selectedPopulate = populateData?.filter((item) => selectedPref.includes(item.prefCode)) || []

  // カテゴリ（年度）の設定。データが存在する場合 は 年度 を抽出
  const categories =
    selectedPopulate.length > 0 ? selectedPopulate[0].data.data[0].data.map((item) => item.year.toString()) : undefined

  // seriesデータの設定。選択された都道府県ごと に データをマッピング
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

  // Highcharts の オプション設定
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

  return options
}
