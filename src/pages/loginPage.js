import React from "react";
import '../styles/loginPage.css'
import Login from '../components/login-form'
import Footer2 from "../components/footer2";


const LoginPage = () => {
 return (
     <div>
    <div className="contenedor">
        <Login />
        
    </div>
    <Footer2 />
    </div>
    )
}


export default LoginPage;