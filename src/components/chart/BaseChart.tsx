import { useState, useEffect } from "react"
import Chart from "react-apexcharts"

import { type WeatherType } from "@/type/chartDataType"

import { Skeleton } from "@/components/ui/skeleton"

interface XaxisDataItem {
    label: string
    weather: WeatherType
}

interface BaseChartProps {
    type?:
        | "line"
        | "area"
        | "bar"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "candlestick"
        | "boxPlot"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | "rangeArea"
        | "treemap"
    series: ApexAxisChartSeries | ApexNonAxisChartSeries
    options: ApexCharts.ApexOptions
    xaxisData: XaxisDataItem[]
}

export default function BaseChart({
    type,
    series,
    options,
    // xaxisData,
}: BaseChartProps) {
    const [loading, setLoading] = useState(true)

    const MIN_LOADING_TIME = 600 // ✅ 최소 로딩 시간 (ms)

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), MIN_LOADING_TIME)
        return () => clearTimeout(timeout) // ✅ 컴포넌트 언마운트 시 타이머 정리
    }, [series, options]) // ✅ 데이터 변경 시 로딩

    if (loading || !series || !options) {
        return <Skeleton className="h-full w-full" />
    } else {
        console.log("now chart loaded")
    }

    return (
        <Chart
            type={type}
            series={series}
            width="100%"
            height="100%"
            options={options}
        />
    )
}
