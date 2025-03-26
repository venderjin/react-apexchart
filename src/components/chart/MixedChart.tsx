import { type WeatherType } from "@/type/chartDataType"

import BaseChart from "./BaseChart"
import ApexCharts from "apexcharts"

interface XaxisDataItem {
    label: string
    weather: WeatherType
}

interface MixedChartProps {
    chartSeries: ApexAxisChartSeries | ApexNonAxisChartSeries
    xaxisData: XaxisDataItem[]
}

export default function MixedChart({
    chartSeries,
    xaxisData,
}: MixedChartProps) {
    const charSeries: ApexAxisChartSeries | ApexNonAxisChartSeries = chartSeries

    const labels = xaxisData.map((item) => item.label)

    const newPointAnnotation = xaxisData.map((item) => ({
        x: item.label,
        marker: { size: 0 },
        image: {
            path: `/images/weather/${item.weather}.svg`,
            width: 15,
            height: 15,
            offsetX: 0,
            offsetY: 515,
        },
    }))

    const ChartOptions: ApexCharts.ApexOptions = {
        annotations: {
            points: newPointAnnotation,
        },
        labels: labels,
        chart: {
            id: "mixed-chart",
            toolbar: {
                show: false, // 툴바 표시
            },
            zoom: {
                enabled: false, // 줌 기능 여부
            },
        },
        grid: {
            padding: {
                left: 30,
                right: 0,
                bottom: 0,
                top: 0,
            },
        },
        colors: ["#030677", "#36B4AD", "#EE964B"],
        stroke: {
            width: [0, 5, 5],
            curve: "smooth", // Array로 각각 적용 가능 ["smooth", "smooth", "stepline"],
        },
        markers: {
            size: 0, // 마커 크기 설정 bar 에서는 안나옴
            strokeColors: "#ffffff",
            strokeWidth: 2,
            shape: "circle", // 마커 모양 "circle", "square", "line", "plus", "cross", "star", "sparkle", "diamond", "triangle"
            hover: {
                size: 5,
            },
        },
        xaxis: {
            type: "category", // x축 라벨 타입 : "datetime", "numeric", "category"
            // type: "string",
            categories: labels,
            // categories: [""],
            tickPlacement: "on",
            labels: {
                offsetY: 10, // x축 라벨 y축 오프셋
                trim: false,
                rotate: 0,
                minHeight: 40,
                hideOverlappingLabels: true,
                // formatter: (value) => {
                //     return "\u00A0" + value + "\u00A0"
                //     // label 앞뒤로 공백을 넣어주면 라벨이 겹치지 않음
                // },
            },
            tooltip: {
                enabled: false, // x축 툴팁 활성화
            },
        },
        yaxis: {
            title: {
                text: "Points",
                rotate: -90, // y축 타이틀 회전
            },
        },
        tooltip: {
            shared: true, // 툴팁 공유
            x: {
                show: false,
            },
            y: [
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " KW"
                        }
                        return y
                    },

                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(1) + " Mw"
                        }
                        return y
                    },
                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " Kw"
                        }
                        return y
                    },
                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
            ],
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: "top",
            horizontalAlign: "center",
            onItemHover: {
                highlightDataSeries: false, // 마우스 호버시 해당 데이터 강조
            },
            onItemClick: {
                toggleDataSeries: true, // 클릭시 해당 데이터 숨김
            },
        },
    }

    return (
        <BaseChart
            type="line"
            series={charSeries}
            options={ChartOptions}
            xaxisData={xaxisData}
        />
    )
}
