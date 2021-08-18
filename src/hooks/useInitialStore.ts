import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeesSuccess } from '../redux/actions/employeeActions'
import { getImportantDataSuccess } from '../redux/actions/importantDataActions'

const useInitialStore = () => {

    const dispatch = useDispatch()

    const initalData = useSelector((store: any) => store)

    const { employees } = initalData.employees

    const { importantData } = initalData.importantData

    useEffect(() => {
        dispatch(getEmployeesSuccess())
        dispatch(getImportantDataSuccess())
    }, [dispatch])
    
    return { initalData, employees, importantData, dispatch }
}

export default useInitialStore
