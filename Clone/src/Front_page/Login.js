import React from 'react'
import Navbar from './../Nav'
import Back_Image from './Back_Image'
import './Login.css'
function Login() {

    return (
        <section className="Login">
            <Navbar Front
            removeSign={true}></Navbar>
            <Back_Image For_login={true}></Back_Image>
        </section>
    )
}

export default Login
