
import React from 'react'
import Profile from '../components/Profile/Profile'
import Footer2 from "../components/footer2";
import HeaderProfile from '../components/HeaderProfile';
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

function ProfilePage() {
    return (
        <div>
         <HeaderProfile />
    <AppContainer>
    <Profile/>
    </AppContainer>
    
    <footer>
    <Footer2/>
    </footer>    
    </div>
    )
}

export default ProfilePage
