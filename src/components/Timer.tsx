import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface TimerProps {
    reset: boolean
    handleTimerReset: () => void
    handleTimerEnd: () => void
}

export default function Timer({
    reset,
    handleTimerReset,
    handleTimerEnd,
}: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(600)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    handleTimerEnd?.() // 타이머 끝났을 때 알림
                    return 600 //  자동 재시작
                }
                return prev > 0 ? prev - 1 : 0
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [handleTimerEnd])

    useEffect(() => {
        if (!reset) return

        const id = requestAnimationFrame(() => {
            setTimeLeft(600)
            handleTimerReset?.()
        })

        return () => cancelAnimationFrame(id)
    }, [reset, handleTimerReset])

    // time pharsing
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0")
    const seconds = String(timeLeft % 60).padStart(2, "0")

    return (
        <Button variant="outline" className="h-full text-lg font-bold">
            {minutes}:{seconds}
        </Button>
    )
}
