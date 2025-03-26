import { useEffect, useRef, useState } from "react"

export default function useChartContainer<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (!ref.current) return

        const resizeObserver = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width)
        })

        resizeObserver.observe(ref.current)
        return () => resizeObserver.disconnect()
    }, [])

    return { ref, width }
}
