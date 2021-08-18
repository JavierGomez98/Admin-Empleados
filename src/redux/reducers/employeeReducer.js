import { EMPLOYEE_CREATED, EMPLOYEE_DELETED, EMPLOYEE_EDITED, EMPLOYEE_GET_ALL } from '../actions/employeeActions'

const initalData = {
    employees: []
}

export default function employeeReducer(state = initalData, action) {
    switch (action.type) {
        case EMPLOYEE_GET_ALL:
            return {...state, employees: action.payload}
        case EMPLOYEE_CREATED:
            return {...state, employees: state.employees.push(action.payload)}
        case EMPLOYEE_DELETED:
            return {...state, employees: action.payload}
        case EMPLOYEE_EDITED:
            return {...state, employees: action.payload}
        default:
            return state
    }
}