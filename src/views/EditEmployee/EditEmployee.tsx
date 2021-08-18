import React, { useEffect, useState } from 'react'
import './EditEmployee.css'
import user from '../../assets/images/user.png'
import FormEmployee from '../../components/FormEmployee/FormEmployee'
import useInitialStore from '../../hooks/useInitialStore'
import { Employee } from '../../consts/initialObjects'
import { editEmployeeSuccess } from '../../redux/actions/employeeActions'
import { dateJsToDateTimeMySQL } from '../../utils/formats'
import { confirmAlert } from 'react-confirm-alert'
import { TweenLite, gsap } from 'gsap'

const EditEmployee = (props: any) => {

    const { initalData, employees, dispatch } = useInitialStore()

    /**
     * This is the Selected Employee
     * @type {Object}
     */
     const [employee, setEmployee] = useState(Employee)

    /**
     * This is the Selected Employee ID
     * @type {number}
     */
    const currentEmployeeId = props.match.params.id;

    const editEmployee = (editedEmployee: any) => {
        dispatch(editEmployeeSuccess(editedEmployee))
        const nowDate = dateJsToDateTimeMySQL(new Date())
        confirmAlert({
            customUI: ({ onClose }) => {
                setTimeout(() => {
                    //onClose()
                    window.location.href = '/';
                }, 2000)
                return (
                    <div className="react-confirm-alert">
                        <div className="react-confirm-alert-body">
                            <h1 className="title-custom-alert">Fecha y hora de edición</h1>
                            <p className="message-custom-alert">{nowDate}</p>
                        </div>
                    </div>
                );
            },
            closeOnEscape: false,
            closeOnClickOutside: false,
        })
    }

    useEffect(() => {
        const employeeId = parseInt(currentEmployeeId);
        const selectedEmployee = employees.find((employee: any) => employee.id === employeeId );
        if (selectedEmployee !== undefined)
            setEmployee(selectedEmployee);
        else {
            window.location.href = '/';
        }
    }, [currentEmployeeId, employees])

    gsap.config({
        nullTargetWarn: false
    });
    TweenLite.to(document.getElementsByClassName("in-item-y"), 0.5, {autoAlpha: 1, y: 0})
    TweenLite.to(document.getElementsByClassName("in-item-x"), 0.5, {autoAlpha: 1, x: 0})

    return (
        <div className="container-page pr-0">
            <div className="row">
                <div className="col-md-3 flex-center">
                    <div className="register-left in-item-y in-item-down">
                        <img src={user} alt="" />
                        {
                            employee.id !== ''
                            ? <h3>{`${employee.firstName} ${employee.otherNames} ${employee.firstLastName} ${employee.secondLastName}`}</h3>
                            : <div></div>
                        }
                        <p>Editar información del Empleado</p>
                    </div>
                </div>
                <div className="col-md-9 register-right in-item-x">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                            <div className="flex-center">
                                <h3 className="title-home register-heading"><span>Editar Empleado</span></h3>
                            </div>
                            {
                                employee.id !== '' 
                                ? <FormEmployee typeForm="edit" employee={employee} initalData={initalData} 
                                    functionForm={editEmployee}/>
                                : <div></div>
                            }
                        </div>
                    </div>
                </div>
                <ul>
                </ul>
            </div>
        </div>
    )
}

export default EditEmployee
