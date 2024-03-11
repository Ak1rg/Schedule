import TableLine from "./tableLine";

interface IInfo {
    name:string,
    content:[
        {
            firstText:string,
            secondText:string,
            type:boolean,
            audience:number,
        },
    ],
}


export default function TableColumn({info,column}:{info:IInfo,column:number}) {

    return (
        <div className="table_column">
            <div className="table_column_title back_b">
                <div className="table_column_title_name">
                    {info.name}
                </div>
                <div className="table_column_title_audience">ауд.</div>
            </div>
            {
                info.content.map((e,i) => (
                    <TableLine info={e} pos={{cl:column,ln:i}} key={i}/>
                ))
            }
        </div>
    )
}
