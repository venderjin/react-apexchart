const mixedChartOptions: ApexCharts.ApexOptions = {
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
            right: 50,
            bottom: 0,
            top: 0,
        },
    },
    colors: ["#36B4AD", "#030677", "#EE964B"],
    fill: {
        opacity: [1, 0.7, 0.4],
        gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
        },
    },
    stroke: {
        width: [5, 0, 2],
        curve: "monotoneCubic",
    },
    markers: {
        size: 0,
        strokeColors: "#ffffff",
        strokeWidth: 2,
        shape: "circle",
        hover: {
            size: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [],
        tickPlacement: "on",
        labels: {
            offsetY: 10, // x축 라벨 y축 오프셋
            trim: false,
            rotate: 0,
            minHeight: 40,
            hideOverlappingLabels: true,
            formatter: (value) => value,
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
                        return y + " KW"
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
                        return y + " KW"
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
                        return y + " KW"
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
            highlightDataSeries: false,
        },
        onItemClick: {
            toggleDataSeries: true,
        },
    },
}

export { mixedChartOptions }
