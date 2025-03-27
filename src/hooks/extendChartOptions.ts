export const extendChartOptions = (
    base: ApexCharts.ApexOptions,
    extend: ApexCharts.ApexOptions,
): ApexCharts.ApexOptions => {
    return {
        ...base,
        ...extend,
        chart: {
            ...base.chart,
            ...extend.chart,
        },
        annotations: {
            ...base.annotations,
            ...extend.annotations,
        },
        xaxis: {
            ...base.xaxis,
            ...extend.xaxis,
        },
        yaxis: {
            ...base.yaxis,
            ...extend.yaxis,
        },
        plotOptions: {
            ...base.plotOptions,
            ...extend.plotOptions,
        },
    }
}
