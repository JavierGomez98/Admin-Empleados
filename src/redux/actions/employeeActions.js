import axios from "axios";
import { API_URL } from "../../consts/routeName";
import { dateJsToDateTimeMySQL } from "../../utils/formats";

export const EMPLOYEE_GET_ALL = 'EMPLOYEE_GET_ALL'
export const EMPLOYEE_CREATED = 'EMPLOYEE_CREATED'
export const EMPLOYEE_DELETED = 'EMPLOYEE_DELETED'
export const EMPLOYEE_EDITED = 'EMPLOYEE_EDITED'

export const getEmployeesSuccess = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${API_URL}/get_employees`)
        if(res.data.error != null) throw new Error(res.data.error)
        res.data.forEach(employee => {
            employee.dateAdmission = new Date(employee.dateAdmission)
            employee.dateMod = new Date(employee.dateMod)
        });

        dispatch({
            type: EMPLOYEE_GET_ALL,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}

export const registerEmployeeSuccess = (employee) => async (dispatch, getState) => {
    try {
        const dateAdmission = dateJsToDateTimeMySQL(employee.dateAdmission)
        const dateMod = dateJsToDateTimeMySQL(new Date())
        axios.post(`${API_URL}/register_employee`, {
            firstName: employee.firstName,
            otherNames: employee.otherNames,
            firstLastName: employee.firstLastName,
            secondLastName: employee.secondLastName,
            email: employee.email,
            countryEmployment: parseInt(employee.countryEmployment),
            idType: parseInt(employee.idType),
            idNumber: employee.idNumber,
            dateAdmission: dateAdmission,
            area: parseInt(employee.area),
            condition: parseInt(employee.condition),
            dateMod: dateMod
        }).then((res) => {
            if(res.data.error != null) throw new Error(res.data.error)
            console.log('Successful insert');
            dispatch({
                type: EMPLOYEE_CREATED,
                payload: employee
            })
        })
    } catch (error) {
        console.error(error);
    }
}

export const deleteEmployeeSuccess = (idEmployee, employees) => async (dispatch, getState) => {
    try {
        employees = employees.filter(function(employee) { return employee.id !== idEmployee });
        axios.post(`${API_URL}/delete_employee`, {
            id: idEmployee,
        }).then((res) => {
            if(res.data.error != null) throw new Error(res.data.error)
            console.log('Successful delete');
            dispatch({
                type: EMPLOYEE_DELETED,
                payload: employees
            })
        })
    } catch (error) {
        console.error(error);
    }
}

export const editEmployeeSuccess = (editedEmployee) => async (dispatch, getState) => {
    try {
        const { employees } = getState().employees
        const updatedEmployees = employees.map((employee) => {
            if(employee.id === editedEmployee.id)
                return editedEmployee
            return employee
        })
        const dateAdmission = dateJsToDateTimeMySQL(editedEmployee.dateAdmission)
        const dateMod = dateJsToDateTimeMySQL(new Date())
        axios.post(`${API_URL}/edit_employee`, {
            id: editedEmployee.id,
            firstName: editedEmployee.firstName,
            otherNames: editedEmployee.otherNames,
            firstLastName: editedEmployee.firstLastName,
            secondLastName: editedEmployee.secondLastName,
            email: editedEmployee.email,
            countryEmployment: parseInt(editedEmployee.countryEmployment),
            idType: parseInt(editedEmployee.idType),
            idNumber: editedEmployee.idNumber,
            dateAdmission: dateAdmission,
            area: parseInt(editedEmployee.area),
            condition: parseInt(editedEmployee.condition),
            dateMod: dateMod
        }).then((res) => {
            if(res.data.error != null) throw new Error(res.data.error)
            console.log('Successful Update');
            dispatch({
                type: EMPLOYEE_EDITED,
                payload: updatedEmployees
            })
        })

    } catch (error) {
        console.error(error);
    }
}