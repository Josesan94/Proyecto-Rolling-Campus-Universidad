import React from "react";
import '../styles/loginPage.css'
import Login from '../components/login-form'
import Footer2 from "../components/footer2";
import Header from "../components/Header";

const LoginPage = () => {
 return (
     <div>
         <Header />
    <div className="contenedor mb-5">
        <Login />
        
    </div>
    
    <footer>
    <Footer2/>
    </footer>    
    </div>
    )
}


export default LoginPage;