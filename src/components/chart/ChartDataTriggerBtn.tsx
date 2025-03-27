import { Button } from "@/components/ui/button"

interface ChartDataTriggerBtnProps {
    handleTimerReset: () => void
}

export default function ChartDataTriggerBtn({
    handleTimerReset,
}: ChartDataTriggerBtnProps) {
    return (
        <Button className="h-full text-lg font-bold" onClick={handleTimerReset}>
            Get Data
        </Button>
    )
}
