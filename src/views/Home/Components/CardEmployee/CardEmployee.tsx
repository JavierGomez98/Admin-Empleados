import React, { useEffect, useState } from 'react'
import './CardEmployee.css'
import user from '../../../../assets/images/user.png'
import { Link } from 'react-router-dom'

const CardEmployee = (props: any) => {

    const { employee } = props
    const { idTypes } = props
    const { countries } = props

    const [acronymIdType, setAcronymIdType] = useState('')
    
    const [srcFlag, setsrcFlag] = useState('')

    useEffect(() => {
        if(idTypes.length > 0 && countries.length > 0){
            setAcronymIdType(idTypes[employee.idType-1].min)
            setsrcFlag(countries[employee.countryEmployment-1].flag)
        }
    }, [idTypes, countries, employee])
    
    const deleteSubmit = (e: any) => {
        props.deleteEmployee(employee)
        e.preventDefault()
    }

    return (
        <div className="employee-card">
            <main>
                <section>
                    <div className="content">
                        <img className="flag" alt="" src={`../assets/flags/bandera_${srcFlag}.png`}></img>
                        <img className="img-user" src={user} alt="User" />

                        <aside>
                            <h1>{`${employee.firstName} ${employee.otherNames} ${employee.firstLastName} ${employee.secondLastName}`}</h1>   
                            <p>{acronymIdType} {employee.idNumber}</p>
                        </aside>
                    </div>

                    <div className="footer-card">
                        <p>{employee.email}</p>

                        <div className="options-card">
                            <Link to={`/editar/${employee.id}`}>
                                <button className="btn-default btn-edit"><i className="far fa-edit"></i></button>
                            </Link>
                            <button onClick={deleteSubmit} className="btn-default btn-delete"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CardEmployee
