import axios from "axios";
import { API_URL } from "../../consts/routeName";

export const IMPORTANT_DATA_GET_ALL = 'IMPORTANT_DATA_GET_ALL'

export const getImportantDataSuccess = () => async (dispatch, getState) => {
    try {
        const resAreas = await axios.get(`${API_URL}/get_areas`)
        if(resAreas.data.error != null) throw new Error(resAreas.data.error)
        const resConditions = await axios.get(`${API_URL}/get_conditions`)
        if(resConditions.data.error != null) throw new Error(resConditions.data.error)
        const resCountries = await axios.get(`${API_URL}/get_countries`)
        if(resCountries.data.error != null) throw new Error(resCountries.data.error)
        const resIdTypes = await axios.get(`${API_URL}/get_types_id`)
        if(resIdTypes.data.error != null) throw new Error(resIdTypes.data.error)
        const importantData = {
            areas: resAreas.data,
            conditions: resConditions.data,
            countries: resCountries.data,
            idTypes: resIdTypes.data,
        }
        
        dispatch({
            type: IMPORTANT_DATA_GET_ALL,
            payload: importantData
        })
    } catch (error) {
        console.error(error)
    }
}