export interface IState {
    table:{
        time:string[][],
        columns:[
            {
                name:string,
                content:[
                    {
                        firstText: string,
                        secondText: string,
                        type: boolean,
                        audience: number,
                    }
                ]
            }
        ],
        currentLine:{
            cl:number,
            ln:number,
        }
    }
}
