import React from 'react'
import './RegisterEmployee.css'
import user from '../../assets/images/user.png'
import { Employee } from '../../consts/initialObjects'
import FormEmployee from '../../components/FormEmployee/FormEmployee'
import { registerEmployeeSuccess } from '../../redux/actions/employeeActions'
import { confirmAlert } from 'react-confirm-alert';
import { dateJsToDateTimeMySQL } from '../../utils/formats'
import useInitialStore from '../../hooks/useInitialStore'
import { TweenLite, gsap } from 'gsap'

const RegisterEmployee = () => {
    
    const { initalData, dispatch } = useInitialStore()

    /**
     * This is the Default Employee
     * @type {Object}
     */
     const employee = Employee

    const registerEmployee = (updatedEmployee: any) => {
        dispatch(registerEmployeeSuccess(updatedEmployee))
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
                            <h1 className="title-custom-alert">Fecha y hora de registro</h1>
                            <p className="message-custom-alert">{nowDate}</p>
                        </div>
                    </div>
                );
            },
            closeOnEscape: false,
            closeOnClickOutside: false,
        })
    }

    gsap.config({
        nullTargetWarn: false
    });
    TweenLite.to(document.getElementsByClassName("in-item-y"), 0.5, {autoAlpha: 1, y: 0})
    TweenLite.to(document.getElementsByClassName("in-item-x"), 0.5, {autoAlpha: 1, x: 0})

    return (
        <div className="container-page pr-0">
            <div className="row">
                <div className="col-md-3 flex-center in-item-y in-item-down">
                    <div className="register-left">
                        <img src={user} alt="" />
                        <h3>Registrar</h3>
                        <p>Ingreso de nuevo Empleado!</p>
                    </div>
                </div>
                <div className="col-md-9 register-right in-item-x">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                            <div className="flex-center">
                                <h3 className="title-home register-heading"><span>Registrar Empleado</span></h3>
                            </div>
                            <FormEmployee typeForm="add" employee={employee} initalData={initalData}
                                functionForm={registerEmployee}/>
                        </div>
                    </div>
                </div>
                <ul>
                </ul>
            </div>
        </div>
    )
}

export default RegisterEmployee
