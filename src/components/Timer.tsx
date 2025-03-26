import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface TimerProps {
    reset: boolean
    onResetHandled?: () => void
    onTimeEnd?: () => void
}

export default function Timer({
    reset,
    onResetHandled,
    onTimeEnd,
}: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(600)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    onTimeEnd?.() // 타이머 끝났을 때 알림
                    return 600 //  자동 재시작
                }
                return prev > 0 ? prev - 1 : 0
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [onTimeEnd])

    useEffect(() => {
        if (!reset) return

        const id = requestAnimationFrame(() => {
            setTimeLeft(600)
            onResetHandled?.()
        })

        return () => cancelAnimationFrame(id)
    }, [reset, onResetHandled])

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0")
    const seconds = String(timeLeft % 60).padStart(2, "0")

    return (
        <Button variant="outline" className="h-full text-lg font-bold">
            {minutes}:{seconds}
        </Button>
    )
}
