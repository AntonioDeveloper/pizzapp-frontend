import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
`;

export default function PageDefault({children}){
  return (
    <>
      <Menu />
      <Main>
        {children}  
      </Main> 
      <Footer />
    </>
  );
}

