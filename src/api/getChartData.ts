import {
    labelDateTypes,
    weatherTypes,
    type WeatherType,
    type responseDataType,
    type responseType,
} from "@/type/chartDataType"

export default async function getChartData() {
    // Chart Data Fetching async function
    // 하지만 지금은 Dummy Data 생성하여 return

    // Data Fetching
    // API 호출 예시 ---------------------------------------------------------------
    // const response = await fetch({api_url})
    // const data = await response.json()

    // if (!response.ok) {
    //     throw new Error(data.message || "Failed to fetch data")
    // }

    // if (!data) {
    //     throw new Error("Failed to fetch data")
    // }

    // return data
    // -----------------------------------------------------------------------------

    // 발전량 Dummy Data 생성
    // 1. 랜덤 x축 DateType 선택
    const randomLabelDateType =
        labelDateTypes[Math.floor(Math.random() * labelDateTypes.length)]

    // 2. 랜덤 weather 생성 함수
    const getRandomWeather = (): WeatherType => {
        return weatherTypes[Math.floor(Math.random() * weatherTypes.length)]
    }

    // 3. data.data 생성
    // type responseDataType = {
    //     timestamp: string
    //     cpg: number
    //     weather: WeatherType
    // }[]
    let mockData: responseDataType = []

    if (randomLabelDateType === "day") {
        const N = Math.floor(Math.random() * (20 - 8 + 1)) + 8
        mockData = Array.from({ length: N - 5 + 1 }, (_, i) => ({
            timestamp: `${i + 5}:00`,
            cpg: Math.floor(Math.random() * 100),
            weather: getRandomWeather(),
        }))
    } else if (randomLabelDateType === "month") {
        const M = Math.floor(Math.random() * (31 - 15 + 1)) + 15
        mockData = Array.from({ length: M }, (_, i) => ({
            timestamp: `3월 ${i + 1}일`,
            cpg: Math.floor(Math.random() * 100),
            weather: getRandomWeather(),
        }))
    } else {
        const Z = Math.floor(Math.random() * (12 - 8 + 1)) + 8
        mockData = Array.from({ length: Z }, (_, i) => ({
            timestamp: `2024년 ${i + 1}월`,
            cpg: Math.floor(Math.random() * 100),
            weather: getRandomWeather(),
        }))
    }

    // 4. 최종 data 생성
    const data = [
        { id: 1, name: "A 발전소(line)", data: mockData },
        { id: 2, name: "A 발전소(bar)", data: mockData },
        { id: 3, name: "A 발전소(area)", data: mockData },
    ] as responseType

    // 5. Data fetching과 같은 형식으로 return
    return data
}
