const sameObject = {
    firstText: '',
    secondText: '',
    type: false,
    audience: 100,
};

const defaultState = {
    currentLine:{cl:0,ln:0},
    time:[['11:00','12:20'],['12:40','14:00'],['14:10','15:30'],['15:40','17:00']],
    columns:[
        {
            name:'new column',
            content:Array.from({ length: 20 }, () => ({ ...sameObject })),
        },
    ],
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('columns');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const initialState = loadState() || defaultState;

export const tableReduce = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COLUMN":
            const newColumn = {
                name: 'Новая колонка',
                number: state.columns.length + 1,
                content: Array.from({ length: 20 }, () => ({ ...sameObject })),
            };
            return {
                ...state,
                columns: [...state.columns, newColumn],
            };
        case 'SET_LINE':
            const updatedColumns = [...state.columns];
            const targetIndex = state.currentLine.cl;
            updatedColumns[targetIndex] = {
                ...updatedColumns[targetIndex],
                content: updatedColumns[targetIndex].content.map((item, index) =>
                    index === state.currentLine.ln
                    ? {
                        ...item,
                        ...(action.payload.type === 'firstText' && { firstText: action.payload.value }),
                        ...(action.payload.type === 'secondText' && { secondText: action.payload.value }),
                        ...(action.payload.type === 'audience' && { audience: action.payload.value }),
                        ...(action.payload.type === 'type' && { type: action.payload.value }),
                    }
                    : item
                ),
            };
            return {
                ...state,
                columns: updatedColumns,
            };
        case 'SET_COLUMN_NAME':
            const updatedNameColumns = [...state.columns];
            const index = state.currentLine.cl;
            updatedNameColumns[index] = { ...updatedNameColumns[index], name: action.payload };
            return {
                ...state,
                columns: updatedNameColumns,
            }
        case 'SET_CURRENT_LINE':
            return {
                ...state,
                currentLine: action.payload,
            }
        case 'REMOVE_COLUMN':
            const cl = state.currentLine ? state.currentLine.cl : 0;
            if (state.columns.length <= 1) {
                return state;
            }
            const updatedColumnsAfterRemove = state.columns.filter((column, index) => index !== cl);
            return {
                ...state,
                columns: updatedColumnsAfterRemove,
                currentLine: { cl: 0, ln: 0 },
            };
        default:
            return state
    }
}
export const changeTable = (type, payload) => {
    const currentState = loadState() || defaultState; 
    const action = { type, payload };
    const updatedState = tableReduce(currentState, action);
    localStorage.setItem('columns', JSON.stringify(updatedState));
    return action;
};