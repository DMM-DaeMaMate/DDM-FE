import { useEffect, useState } from "react"
import styled from "styled-components"
import { getTimeTable } from "../apis/get/getTimeTable"
import { getWeekNumber } from "../utils/getWeekNumber"
import { getEndDate } from "../utils/getEndDate"
import { Colors } from "../style/colors"

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
                                <TableText>{dayData[period + 1]}</TableText>
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
`

const Table = styled.div`
    display: table;
    border-collapse: collapse;
    width: 700px;
    background-color: ${Colors.White};
`

const TableRow = styled.div`
    display: table-row;
    border-bottom: 1px solid ${Colors.Black};
`

const TableHeader = styled.div`
    padding: 6px 0;
    width: 20px;
    height: 20px;
    display: table-cell;
    background-color: ${Colors.Orange200};
    font-weight: bold;
    border: 1px solid ${Colors.White};
    font-size: 16px;
    color: ${Colors.Orange800};
    text-align: center;
`

const TableCell = styled.div`
    display: table-cell;
    padding: 4px 0;
    width: 35px;
    height: 50px;
    text-align: center;
    border: 1px solid ${Colors.Orange300};
    position: relative;
`

const TableText = styled.p`
    width: 85px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    color: ${Colors.Orange800};
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
