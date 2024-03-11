import { useDispatch, useSelector } from "react-redux"
import { IState } from "../types/State"
import TableColumn from "./tableColumn"
import {changeTable} from '../store/reducers/table/table.js'

export default function Table() {

    const dispatch = useDispatch()

    const columns = useSelector((e:IState) => e.table.columns)

    return (
        <div className='table'>
            {
                columns.map((e,i) => (
                    <TableColumn info={e} column={i} key={i}/>
                ))
            }
            <div className="table_add" onClick={() => dispatch(changeTable('ADD_COLUMN'))}>

            </div>
        </div>
    )
}
