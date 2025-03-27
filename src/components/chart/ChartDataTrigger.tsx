import { useState } from "react"

import ChartDataTriggerBtn from "./ChartDataTriggerBtn"
import Timer from "@/components/Timer"

interface ChartDataMakerProps {
    handleChartData: () => void
}

export default function ChartDataMaker({
    handleChartData,
}: ChartDataMakerProps) {
    const [reset, setReset] = useState(false)

    const handleTimerEnd = () => {
        // 타이머 종료
        setReset(true)
    }

    const handleTimerReset = () => {
        // 타이머 재시작
        // Data Fetching 함수 호출
        setReset(false)
        handleChartData()
    }

    return (
        <div className="flex flex-row justify-end gap-5">
            <Timer
                reset={reset}
                handleTimerReset={handleTimerReset}
                handleTimerEnd={handleTimerEnd}
            />
            <ChartDataTriggerBtn handleTimerReset={handleTimerReset} />
        </div>
    )
}
