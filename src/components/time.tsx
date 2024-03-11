import { useSelector } from "react-redux"
import { IState } from "../types/State"

export default function Time() {
    const times = useSelector((e:IState) => e.table.time)
    const days = ['понедельник','вторник','среда','четверг','пятница']

    return (
        <div className="time">
            <div className="time_title back_b">
                <h3>Время</h3>
            </div>
            <div className="time_content">
                {
                    days.map((dayName:string,i) => (
                        <div className="time_content_day" key={i}>
                            <div className="time_content_day_data back_b">
                                <p>{dayName}</p>
                            </div>
                            <div className="time_content_day_time">
                                {
                                    times.map((e:string[],i) => (
                                        <div className="time_content_day_time_item back_b" key={i}>
                                            <p>{e[0]}</p>
                                            <p>{e[1]}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
