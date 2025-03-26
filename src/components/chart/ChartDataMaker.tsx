import { useState } from "react"

import useChartDataGenerator from "@/hooks/useChartDataGenerator"

import ChartDataMakerBtn from "./ChartDataMakerBtn"
import Timer from "@/components/Timer"

export default function ChartDataMaker() {
    const [reset, setReset] = useState(false)

    const generateChartData = useChartDataGenerator()

    // 타이머가 종료되었을 때 호출됨
    const handleTimerEnd = async () => {
        // 데이터 생성
        // 데이터 생성 후 차트 업데이트 인지
        await generateChartData()
        // 데이터 생성 후 타이머 초기화
        setReset(true) // Timer에게 초기화 신호 전달
    }

    const handleResetHandled = () => {
        setReset(false) // 초기화 완료되면 다시 false
    }

    return (
        <div className="flex flex-row justify-end gap-5">
            <Timer
                reset={reset}
                onResetHandled={handleResetHandled}
                onTimeEnd={handleTimerEnd}
            />
            <ChartDataMakerBtn onResetRequest={handleTimerEnd} />
        </div>
    )
}
