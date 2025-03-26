import { create } from "zustand"

import type { LabelDateType, WeatherType } from "@/type/chartDataType"

interface XaxisDataItem {
    label: string
    weather: WeatherType
}

interface ChartSeriesState {
    // 차트 데이터
    chartSeries: ApexAxisChartSeries | ApexNonAxisChartSeries
    // x축 라벨 타입
    labelDateType: LabelDateType
    // x축 라벨 데이터
    xaxisData: XaxisDataItem[]
    setChartSeries: (
        series: ApexAxisChartSeries | ApexNonAxisChartSeries,
    ) => void
    setLabelDateType: (type: LabelDateType) => void
    setXaxisData: (data: XaxisDataItem[]) => void
}

export const ChartDataStore = create<ChartSeriesState>((set) => ({
    chartSeries: [
        {
            name: "A 발전소",
            type: "bar",
            data: [],
        },
        // {
        //     name: "B 발전소",
        //     type: "line",
        //     data: [],
        // },
        // {
        //     name: "C 발전소",
        //     type: "line",
        //     data: [],
        // },
    ],
    labelDateType: "day",
    xaxisData: [],
    setChartSeries: (series) => set({ chartSeries: series }),
    setLabelDateType: (type) => set({ labelDateType: type }),
    setXaxisData: (data) => set({ xaxisData: data }),
}))
