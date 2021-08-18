import { IMPORTANT_DATA_GET_ALL } from "../actions/importantDataActions"

const initalData = {
    importantData: {
        areas: [],
        countries: [],
        idTypes: [],
        conditions: [],
    }
}

export default function importantDataReducer(state = initalData, action) {
    switch (action.type) {
        case IMPORTANT_DATA_GET_ALL: 
            return {...state, importantData: action.payload}
        default:
            return state
    }
}