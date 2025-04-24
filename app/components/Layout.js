'use client'

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  position: relative;
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/BetJuicy_files/grafitti-pattern.svg') center/cover;
    opacity: 0.03;
    z-index: -1;
    pointer-events: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 