import { useEffect } from "react"

import { ChartDataStore } from "@/hooks/ChartDataStore"

import useChartDataGenerator from "./hooks/useChartDataGenerator"

import ChartDataMaker from "@/components/chart/ChartDataMaker"
import MixedChart from "@/components/chart/MixedChart"

function App() {
    const { chartSeries, xaxisData } = ChartDataStore()
    const generateChartData = useChartDataGenerator()

    useEffect(() => {
        generateChartData()
    }, [])

    return (
        <div className="flex h-dvh w-dvw flex-col space-y-5 p-40">
            <ChartDataMaker />
            <MixedChart chartSeries={chartSeries} xaxisData={xaxisData} />
        </div>
    )
}

export default App
