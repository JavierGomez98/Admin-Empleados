import React from 'react'
import './Home.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import PaginationEmployee from '../../components/PaginationEmployee/PaginationEmployee';

function Home() {

    return (
        <div className="container-page">
            <div className="flex-space-between">
                <h3 className="title-home in-item-x in-item-left"><span>Nuestro Equipo</span></h3>
                <div className="center-option">
                    <a href="./registrar" className="btn-default btn-reg in-item-x in-item-right">Registrar Empleado</a>
                </div>
            </div>
            <PaginationEmployee />
        </div>
    )
}

export default Home
