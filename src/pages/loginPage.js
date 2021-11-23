import React from "react";
import '../styles/loginPage.css'
import Login from '../components/accountBox/loginnForm'
import Footer2 from "../components/footer2";
import Header from "../components/Header";
import styled from "styled-components";
import {AccountBox} from '../components/accountBox'
import useAuth from  '../components/auth/useAuth'
import HeaderProfile from "../components/HeaderProfile";

const AppContainer = styled.div `
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    ` 

const LoginPage = () => {

    const auth = useAuth()     
 return (
     <>
     <header>
         <HeaderProfile/>
     </header>
     <div>
         
         {auth.user ? <button onClick={auth.logout}>Logout</button> : <button onClick={auth.login}>login</button>}
    <AppContainer>
    <AccountBox/>
    </AppContainer>
    
       
    </div>
    </>
    )
}


export default LoginPage;