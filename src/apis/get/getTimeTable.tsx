import axios from "axios"
import UserService from "../user"

// API로부터 시간표 데이터를 가져옴!
export const getTimeTable = async (TableDate: any) => {
    const data = UserService.get()

    try {
        return await axios.get(
            `https://open.neis.go.kr/hub/hisTimetable?KEY=037532816c214934880f65ef125072c2&Type=json&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430310&ALL_TI_YMD=${TableDate}&GRADE=${
                (
                    await data
                ).grade
            }&CLASS_NM=${(await data).my_class}`
        )
    } catch (err) {
        alert(err)
    }
}
