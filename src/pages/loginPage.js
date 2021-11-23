import React from 'react';
import '../styles/loginPage.css';
import styled from 'styled-components';
import { AccountBox } from '../components/accountBox';
import Header from '../components/Header';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <AppContainer>
          <AccountBox />
        </AppContainer>
      </div>
    </>
  );
};

export default LoginPage;
