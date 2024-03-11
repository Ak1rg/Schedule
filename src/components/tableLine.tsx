import { useDispatch, useSelector } from "react-redux"
import {changeTable} from '../store/reducers/table/table.js'
import { IState } from "../types/State.js"


interface IPos {
    cl:number,
    ln:number
}

interface IInfo {
    firstText: string,
    secondText: string,
    type: boolean,
    audience: number,
}

export default function TableLine({info,pos}:{info:IInfo,pos:IPos}) {
    
    const dispatch = useDispatch()

    const currentLine = useSelector((e:IState) => e.table.currentLine)

    const style = {
        backgroundColor: currentLine.ln == pos.ln && currentLine.cl == pos.cl ? ' #ffff30 ' : '#ffff99', 
    };
    return (
        <div 
            className='table_line' 
            onClick={() => dispatch(changeTable('SET_CURRENT_LINE',pos))}
        >
            <div className="table_line_text">
                <div className="table_line_text_top">
                    <p>{info.firstText}</p>
                </div>
                {
                    info.type && 
                    <div className="table_line_text_bottom">
                        {info.secondText}
                    </div>
                }
            </div>
            <div className="table_line_audience" style={style}
            >
                {info.audience}
            </div>
        </div>
    )
}
