import { useState, useEffect } from "react"
import Chart from "react-apexcharts"

import { Skeleton } from "@/components/ui/skeleton"

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
}

export default function BaseChart({ type, series, options }: BaseChartProps) {
    const [loading, setLoading] = useState(true)

    const MIN_LOADING_TIME = 1000 // ✅ 최소 로딩 시간 (ms)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, MIN_LOADING_TIME)

        return () => clearTimeout(timeout)
    }, [series, options])

    if (loading || !series || !options) {
        return <Skeleton className="h-full w-full" />
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
