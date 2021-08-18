import React, { useState } from 'react'
import './FormEmployee.css'
import { formatName, lessMonthDate } from '../../utils/formats'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormEmployee = (props: any) => {

    const { employees } = props.initalData.employees
    const { importantData } = props.initalData.importantData

    const [employeeData, setEmployeeData] = useState(props.employee)
    
    const handleSubmit = (e: any) => {
        props.functionForm(employeeData)
        e.preventDefault()
    }

    const handleInputChange = (e: any) => {
        let value = e.target.value
        let name = e.target.name

        if (name !== 'idNumber' && name !== 'idNumber' && name !== 'countryEmployment'&& name !== 'idType' && name !== 'area'&& name !== 'condition'){
            value = formatName(value.toLocaleUpperCase())
        } else if (name === 'idNumber') {
            value = value.replace(/[^A-Za-z0-9-]/ig, '').replaceAll('Ñ', '')
            const result = employees.filter((employee: any) => employee.idNumber === value && employee.id !== employeeData.id );
            if(result.length > 0) {
                e.target.parentNode.firstChild.lastChild.classList.add('show-alert-input');
                e.target.classList.add('danger-input');
            } else {
                e.target.parentNode.firstChild.lastChild.classList.remove('show-alert-input');
                e.target.classList.remove('danger-input');
            }
        }
        
        setEmployeeData({
            ...employeeData,
            [e.target.name]: value
        })
    }

    const handleInputEmailChange = (e: any) => {
        let value = formatName(e.target.value.toLocaleUpperCase())
        let firstName = employeeData.firstName
        let firstLastName = employeeData.firstLastName
        let email = ''

        if(e.target.name === 'firstName')
            firstName = value
        else
            firstLastName = value

        if (firstName !== '' && firstLastName !== '') {
            let preEmail = `${firstName.toLowerCase().replaceAll(' ', '')}.${firstLastName.toLowerCase().replaceAll(' ', '')}`
            let count = 0
            employees.forEach((employee: any) => { 
                if (employee.email.split('@')[0].replace (/[0-9]+/g, '') === preEmail && employee.id !== employeeData.id) 
                    count++ 
            });
            if(count > 0) preEmail = preEmail+''+count
            email = `${preEmail}@nintendo.com.co`
        }
            
        setEmployeeData({
            ...employeeData,
            [e.target.name]: value,
            email: email
        })
    }

    const handleDatePickerChange = (date: any) => {
        setEmployeeData({
            ...employeeData,
            dateAdmission: date
        })
    }
    
    return (
        <div className="mb-50">
            <form onSubmit={handleSubmit}>
                <div className="row employee-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <span className="span-input">Primer Nombre:</span>
                            <input type="text" className="form-control input-upper" placeholder="Primer Nombre *" 
                                name="firstName" value={employeeData.firstName} onChange={handleInputEmailChange}
                                maxLength={20} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <span className="span-input">Otros Nombres:</span>
                            <input type="text" className="form-control input-upper" placeholder="Otros Nombres" 
                                name="otherNames" value={employeeData.otherNames} onChange={handleInputChange}
                                maxLength={50} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <span className="span-input">Primer Apellido:</span>
                            <input type="text" className="form-control input-upper" placeholder="Primer Apellido *" 
                                name="firstLastName" value={employeeData.firstLastName} onChange={handleInputEmailChange}
                                maxLength={20} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <span className="span-input">Segundo Apellido:</span>
                            <input type="text" className="form-control input-upper" placeholder="Segundo Apellido *" 
                                name="secondLastName" value={employeeData.secondLastName} onChange={handleInputChange}
                                maxLength={20} required />
                        </div>
                    </div>
                </div>
                <div className="row employee-form flex-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <span className="span-input">Correo electrónico:</span>
                            <input type="text" className="form-control" placeholder="Correo electrónico" disabled 
                                name="email" value={employeeData.email} onChange={handleInputChange}
                                maxLength={300} />
                        </div>
                    </div>
                </div>
                <div className="row employee-form">
                    <div className="col-md-4">
                        <div className="form-group">
                            <span className="span-input">País del empleo:</span>
                            <select className="form-control" required
                                name="countryEmployment" value={employeeData.countryEmployment} onChange={handleInputChange}>
                                <option value="" disabled>País del empleo *</option>
                                {
                                    importantData.countries.map((country: any) => {
                                        return <option key={country['id']} value={country['id']}>{country['name']}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <span className="span-input">Tipo de Identificación:</span>
                            <select className="form-control" required
                                name="idType" value={employeeData.idType} onChange={handleInputChange}>
                                <option value="" disabled>Tipo de Identificación *</option>
                                {
                                    importantData.idTypes.map((types: any) => {
                                        return <option key={types['id']} value={types['id']}>{types['name']} ({types['min']})</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <div className="flex-space">
                                <span className="span-input">Número de Identificación:</span>
                                <span className="alert-input">Ya existe</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Número de Identificación *" 
                                name="idNumber" value={employeeData.idNumber} onChange={handleInputChange}
                                maxLength={20} required />
                        </div>
                    </div>
                </div>
                <div className="row employee-form">
                    <div className="col-md-4">
                        <div className="form-group">
                            <span className="span-input">Fecha de ingreso:</span>
                            <DatePicker  className="form-control"
                                minDate={lessMonthDate(new Date(), 1)}
                                maxDate={new Date()} 
                                selected={employeeData.dateAdmission} onChange={(date) => handleDatePickerChange(date)} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <span className="span-input">Área:</span>
                            <select className="form-control" required
                                name="area" value={employeeData.area} onChange={handleInputChange}>
                                <option value="" disabled>Área *</option>
                                {
                                    importantData.areas.map((area: any) => {
                                        return <option key={area['id']} value={area['id']}>{area['name']}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <span className="span-input">Estado:</span>
                            <select className="form-control" disabled={props.typeForm === 'add' ? true : false}
                                name="condition" value={employeeData.condition} onChange={handleInputChange}>
                                <option disabled>Estado *</option>
                                {
                                    importantData.conditions.map((condition: any) => {
                                        return <option key={condition['id']} value={condition['id']}>{condition['condition']}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex-center">
                    <button type="submit" className="btn-default btn-reg">
                        {props.typeForm === 'add' ? 'Registrar' : 'Editar'} Empleado
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormEmployee