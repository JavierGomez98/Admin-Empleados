import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import employeeReducer from './reducers/employeeReducer'
import importantDataReducer from './reducers/importantDataReducer'

const rootReducer = combineReducers({
    employees: employeeReducer,
    importantData: importantDataReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
    return createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
}