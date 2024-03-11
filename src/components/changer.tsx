import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../types/State";
import {changeTable} from '../store/reducers/table/table.js'

export default function Changer() {

    const dispatch = useDispatch()

    const columns = useSelector((e:IState) => e.table.columns)
    const cL = useSelector((e:IState) => e.table.currentLine)

    const [show, setshow] = useState(false)


    return (
        <div className={"changer "+show}>
            <div className="changer_show" onClick={() => setshow(!show)}></div>  
            <div className="changer_content">
                <div className="changer_content_text">
                    <div className="changer_content_text_area">
                        <h3>Первый текст</h3>
                        <textarea 
                            cols={30} 
                            rows={10}
                            value={columns[cL.cl].content[cL.ln].firstText}
                            onChange={(e) => dispatch(changeTable("SET_LINE",{type:'firstText',value:e.target.value}))}
                        >
                        </textarea>
                    </div>
                    <div className="changer_content_text_area">
                        <h3>Второй текст</h3>
                        <textarea 
                            cols={30} 
                            rows={10}
                            value={columns[cL.cl].content[cL.ln].secondText}
                            onChange={(e) => dispatch(changeTable("SET_LINE",{type:'secondText',value:e.target.value}))}
                        ></textarea>
                    </div>
                </div>
                <div className="changer_content_type">
                    <div className="changer_content_type_select">
                        <h3>Тип</h3>
                        <select 
                            name="type" 
                            id="" 
                            value={columns[cL.cl].content[cL.ln].type.toString()}
                            onChange={(e) => dispatch(changeTable("SET_LINE",{type:'type',value:e.target.value === 'true'}))}
                        >
                            <option value='false'>Одноразовый</option>
                            <option value='true'>Двойной</option>
                        </select>
                    </div>
                    <div className="changer_content_type_audience">
                        <h3>Аудитория</h3>
                        <input type="text" 
                            value={columns[cL.cl].content[cL.ln].audience}
                            onChange={(e) => dispatch(changeTable("SET_LINE",{type:'audience',value:e.target.value}))}
                        />
                    </div>
                    <div className="changer_content_type_column-name">
                        <h3>Имя колонки</h3>
                        <input type="text" 
                            value={columns[cL.cl].name}
                            onChange={(e) => dispatch(changeTable("SET_COLUMN_NAME",e.target.value))}
                        />
                    </div>
                    <div className="changer_content_type_remove">
                        <button onClick={() => dispatch(changeTable('REMOVE_COLUMN'))}>Удалить колонку</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
