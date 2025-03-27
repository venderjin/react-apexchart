import { useEffect, useState } from "react"

import { type responseType } from "@/type/chartDataType"

import { mixedChartOptions } from "@/lib/chartOptions"
import { extendChartOptions } from "@/hooks/extendChartOptions"

import BaseChart from "./BaseChart"

interface MixedChartProps {
    chartData: responseType
}

export default function MixedChart({
    chartData,
    // chartSeries,
    // chartOptions,
}: MixedChartProps) {
    const [chartSeries, setChartSeries] = useState<
        ApexAxisChartSeries | ApexNonAxisChartSeries
    >([])
    const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>({})

    useEffect(() => {
        // chartData 기반으로 series, options 생성

        // chartData가 없으면 return
        if (chartData.length === 0) return

        // 1. chartData를 기반으로 series 생성
        const series = chartData.map((item) => ({
            type: item.name.includes("line")
                ? "line"
                : item.name.includes("bar")
                  ? "bar"
                  : "area", // line, column, area 차트 구분 (임시)
            name: item.name,
            data: item.data.map((data) => data.cpg),
        })) as ApexAxisChartSeries | ApexNonAxisChartSeries

        // 2. chartData를 기반으로 options 생성
        const extendOptionsLabels = chartData[0].data.map(
            (item) => item.timestamp,
        )
        const extendOptionsAnnotations = chartData[0].data.map((item) => ({
            x: item.timestamp,
            marker: { size: 0 },
            image: {
                path: `/images/weather/${item.weather}.svg`,
                width: 15,
                height: 15,
                offsetX: 0,
                offsetY: 520,
            },
        }))

        const extendOptions = {
            labels: extendOptionsLabels,
            annotations: {
                points: extendOptionsAnnotations,
            },
        }

        const temp = extendChartOptions(mixedChartOptions, extendOptions)

        setChartSeries(series)
        setChartOptions(temp)
    }, [chartData])

    if (chartSeries.length === 0 && chartData.length === 0) {
        return (
            <div>
                <h1>데이터가 없습니다.</h1>
            </div>
        )
    }

    return <BaseChart type="line" series={chartSeries} options={chartOptions} />
}
