import ChartManager from "@/components/chart/ChartManager"

function App() {
    return (
        <div className="flex h-dvh w-dvw flex-col space-y-5 p-40">
            <ChartManager chartType="mixed" />
        </div>
    )
}

export default App
