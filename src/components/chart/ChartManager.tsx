import { useEffect, useState } from "react"

import { type responseType } from "@/type/chartDataType"
import getChartData from "@/api/getChartData"

import ChartDataTrigger from "@/components/chart/ChartDataTrigger"
import MixedChart from "@/components/chart/MixedChart"

interface ChartManagerProps {
    chartType: string
}

export default function ChartManager({ chartType }: ChartManagerProps) {
    // Chart Trigger(Timer, Button) 감지해서 Data Fetching 함수 호출
    // Data Fetching 함수 호출 후 리턴되는 Data를 useState로 관리
    // 각 Chart Component에 Data 전달
    const [chartData, setChartData] = useState<responseType>([])

    const handleChartData = async () => {
        const fetchedData = await getChartData()
        setChartData(fetchedData)
    }

    useEffect(() => {
        console.log("chartType", chartType)
        handleChartData()
    }, [])

    return (
        <>
            <ChartDataTrigger handleChartData={handleChartData} />
            <MixedChart chartData={chartData} />
        </>
    )
}
