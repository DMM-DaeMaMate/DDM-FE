export const getWeekNumber = () => {
    const date = new Date()
    const currentDate = date.getDate()
    const startOfMonth = new Date(date.setDate(1))
    const weekDay = startOfMonth.getDay()
    return Math.floor((weekDay - 1 + currentDate) / 7) + 1
}
