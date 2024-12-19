import { useEffect, useState } from "react"
import styled from "styled-components"
import { getTimeTable } from "../apis/get/getTimeTable"
import { getWeekNumber } from "../utils/getWeekNumber"
import { getEndDate } from "../utils/getEndDate"

export const TimeTable = () => {
    const days = ["월", "화", "수", "목", "금"]
    const [timeTable, setTimeTable] = useState<string[][]>([])
    const [date, setDate] = useState(new Date())

    const month = date.getMonth() + 1
    const weekNum = getWeekNumber()

    useEffect(() => {
        const startOfWeek = new Date()
        // 현재 요일이 일요일(0)일 경우, 6일을 빼서 월요일로 설정
        startOfWeek.setDate(
            startOfWeek.getDate() -
                (startOfWeek.getDay() === 0 ? 6 : startOfWeek.getDay() - 1)
        )
        setDate(startOfWeek)
    }, [])

    useEffect(() => {
        const fetchTimeTables = async () => {
            const newTimeTable: string[][] = []
            let day = Number(
                `${date.getFullYear()}${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}${date
                    .getDate()
                    .toString()
                    .padStart(2, "0")}`
            )

            // 현재 날짜를 기준으로 주의 시작일(월요일)부터 시작
            const startDay = day - (date.getDay() === 0 ? 6 : date.getDay() - 1)

            for (let i = 0; i < days.length; i++) {
                let table: string[] = [days[i]]
                let currentDay = startDay + i // 주의 시작일에 i를 더하여 각 요일의 날짜를 계산

                if ((currentDay + 1) % 100 > getEndDate()) {
                    currentDay = currentDay + 100 - getEndDate()
                }

                try {
                    const res = await getTimeTable(currentDay.toString(), 1, 2)
                    const arr = res?.data.hisTimetable?.[1]?.row || []
                    for (let j = 0; j < 7; j++) {
                        table[j + 1] = arr[j] ? arr[j].ITRT_CNTNT : "-"
                    }
                } catch (error) {
                    console.error("Error fetching timetable:", error)
                    for (let j = 0; j < 7; j++) {
                        table[j + 1] = "-"
                    }
                }

                newTimeTable.push(table)
            }

            setTimeTable(newTimeTable)
        }

        fetchTimeTables()
    }, [date])

    return (
        <TableWrapper>
            <Table>
                <TableRow>
                    <TableHeader>시간/요일</TableHeader>
                    {days.map((day, index) => (
                        <TableHeader key={index}>{day}</TableHeader>
                    ))}
                </TableRow>
                {[...Array(7)].map((_, period) => (
                    <TableRow key={period}>
                        <TableHeader>{period + 1}교시</TableHeader>
                        {timeTable.map((dayData, dayIndex) => (
                            <TableCell key={dayIndex}>
                                {dayData[period + 1]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </Table>
        </TableWrapper>
    )
}

export default TimeTable

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
    margin-top: 10px;
`

const Table = styled.div`
    display: table;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

const TableRow = styled.div`
    display: table-row;
    border-bottom: 1px solid #e0e0e0;
`

const TableHeader = styled.div`
    padding: 14px;
    display: table-cell;
    background-color: #f7f7f7;
    font-weight: bold;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 16px;
    color: #333;
`

const TableCell = styled.div`
    display: table-cell;
    padding: 14px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 16px;
    color: #333;
`
