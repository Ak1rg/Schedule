import { combineReducers, createStore } from 'redux'
import { tableReduce } from './reducers/all';

const rootReduce = combineReducers({
    table:tableReduce
})

const store = createStore(rootReduce);

export default store