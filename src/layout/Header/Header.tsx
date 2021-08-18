import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {

    const [styleHeader, setStyleHeader] = useState({
        boxShadow: 'unset',
        backgroundColor: '#fff'
    })

    window.onscroll = function() {
        if(window.scrollY > 0)
            setStyleHeader({
                ...styleHeader,
                boxShadow: "0 3px 5px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%)"
            })
        else
            setStyleHeader({
                ...styleHeader,
                boxShadow: 'unset'
            })
    }

    return (
        <header id="content_header" style={styleHeader}>
            <div className="container_dda">
                <div className="row row_center">
                    <div className="logo-responsive">
                        <a id="logo" className="" title="Empleados | Nintendo" href="http://localhost:3000/" rel="home">
                            <img alt="Nintendo" className="img-responsive lazyloaded" src={logo} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
