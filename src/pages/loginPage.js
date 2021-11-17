import React from "react";
import '../styles/loginPage.css'
import Login from '../components/accountBox/loginnForm'
import Footer2 from "../components/footer2";
import Header from "../components/Header";
import styled from "styled-components";
import {AccountBox} from '../components/accountBox'

const AppContainer = styled.div `
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    `

const LoginPage = () => {
    


   
 return (
     <div>
         <Header />
    <AppContainer>
    <AccountBox/>
    </AppContainer>
    
    <footer>
    <Footer2/>
    </footer>    
    </div>
    )
}


export default LoginPage;