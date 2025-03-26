export const labelDateTypes = ["day", "month", "year"] as const
export type LabelDateType = (typeof labelDateTypes)[number]

export const weatherTypes = [
    "cloud",
    "night",
    "sun",
    "humidity",
    "rainval",
] as const
export type WeatherType = (typeof weatherTypes)[number]
