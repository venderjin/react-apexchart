import { ChartDataStore } from "@/hooks/ChartDataStore"
import {
    labelDateTypes,
    weatherTypes,
    type WeatherType,
} from "@/type/chartDataType"

export default function useChartDataGenerator() {
    const { chartSeries, setChartSeries, setLabelDateType, setXaxisData } =
        ChartDataStore()

    const generateChartData = async () => {
        console.log("🌟generateChartData🌟")

        const randomLabelDateType =
            labelDateTypes[Math.floor(Math.random() * labelDateTypes.length)]

        let xaxisData: { label: string; weather: WeatherType }[] = []

        const getRandomWeather = (): WeatherType => {
            return weatherTypes[Math.floor(Math.random() * weatherTypes.length)]
        }

        if (randomLabelDateType === "day") {
            const N = Math.floor(Math.random() * (20 - 8 + 1)) + 8
            xaxisData = Array.from({ length: N - 5 + 1 }, (_, i) => ({
                label: `${i + 5}:00`,
                weather: getRandomWeather(),
            }))
        } else if (randomLabelDateType === "month") {
            const M = Math.floor(Math.random() * (31 - 15 + 1)) + 15
            xaxisData = Array.from({ length: M }, (_, i) => ({
                label: `3월 ${i + 1}일`,
                weather: getRandomWeather(),
            }))
        } else if (randomLabelDateType === "year") {
            const Z = Math.floor(Math.random() * (12 - 8 + 1)) + 8
            xaxisData = Array.from({ length: Z }, (_, i) => ({
                label: `2024년 ${i + 1}월`,
                weather: getRandomWeather(),
            }))
        }

        const updatedSeries = chartSeries?.map((item) =>
            typeof item === "object" && item !== null
                ? {
                      ...item,
                      data: Array.from({ length: xaxisData.length }, () =>
                          Math.floor(Math.random() * 6000),
                      ),
                  }
                : item,
        ) as ApexAxisChartSeries | ApexNonAxisChartSeries

        setLabelDateType(randomLabelDateType)
        setXaxisData(xaxisData)
        setChartSeries(updatedSeries)
    }

    return generateChartData
}
