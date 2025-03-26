import { Button } from "@/components/ui/button"

interface ChartDataMakerBtnProps {
    onResetRequest: () => void
}

export default function ChartDataMakerBtn({
    onResetRequest,
}: ChartDataMakerBtnProps) {
    return (
        <Button className="h-full text-lg font-bold" onClick={onResetRequest}>
            Get Data
        </Button>
    )
}
