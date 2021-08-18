import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../consts/routeName'
import useInitialStore from '../../hooks/useInitialStore'
import { deleteEmployeeSuccess } from '../../redux/actions/employeeActions'
import CardEmployee from '../../views/Home/Components/CardEmployee/CardEmployee'
import './PaginationEmployee.css'
import { confirmAlert } from 'react-confirm-alert'
import { TweenLite, gsap } from 'gsap'

const PaginationEmployee = () => {

    const { initalData, importantData, employees, dispatch } = useInitialStore()

    const  [numPages, setNumPages] = useState(0)

    const [currentEmployees , setCurrentEmployees] = useState({
        currentEmployeesList: [],
        currentAllEmployees: []
    })

    const [searchParameter , setSearchParameter] = useState('')

    const deleteEmployee = (deletedEmployee: any) => {
        confirmAlert({
            message: 'Está seguro de que desea eliminar el empleado?',
            buttons: [
              {
                label: 'Si',
                onClick: () => dispatch(deleteEmployeeSuccess(deletedEmployee.id, initalData.employees.employees))
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
        });
    }

    const handleInputChange = (e: any) => {
        setNumPages(0)
        setSearchParameter(e.target.value)
    }

    const prevPage = () => {
        setNumPages(numPages + (10 * -1))
    }

    const nextPage = () => {
        setNumPages(numPages + (10 * 1))
    }

    useEffect(() => {
        const getEmployeesList = async () => {
            const res = await axios.get(`${API_URL}/get_paginated_employees`, { params: { searchParameter: searchParameter, page: numPages } })
            if(res.data.error === undefined){
                setCurrentEmployees({
                    currentEmployeesList: res.data.currentEmployeesList,
                    currentAllEmployees: res.data.currentAllEmployees
                })
                TweenLite.to(document.getElementsByClassName("card-element"), 0.5, {autoAlpha: 1, y: 0})
            }
        }
        getEmployeesList()
    }, [numPages, searchParameter, employees])

    gsap.config({
        nullTargetWarn: false
    });
    TweenLite.to(document.getElementsByClassName("in-item-x"), 0.5, {autoAlpha: 1, x: 0})
    TweenLite.to(document.getElementsByClassName("in-item-y"), 0.5, {autoAlpha: 1, y: 0})

    return (
        <div className="in-item-y in-item-down">
            <div className="container-actions">
                <div className="container-buttons">
                    <button className="btn-default button-left" onClick={prevPage} type="button" disabled={numPages === 0}><i className="fas fa-chevron-left"></i></button>
                    <div className="inner-addon left-addon">
                        <i className="fas fa-search"></i>
                        <input type="text" className="form-control" placeholder="Buscar" onChange={handleInputChange} />
                    </div>
                    <button className="btn-default button-right" onClick={nextPage} disabled={(numPages + 10) > currentEmployees.currentAllEmployees.length}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div className="container-cards">
                {
                    currentEmployees.currentEmployeesList.map((employee: any, index) => {
                        return <div className="card-element in-item-y in-item-down" key={employee.idNumber}>
                            <CardEmployee employee={employee} 
                            idTypes={importantData.idTypes} countries={importantData.countries} deleteEmployee={deleteEmployee}  />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PaginationEmployee
