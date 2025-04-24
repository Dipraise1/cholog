'use client'

import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/BetJuicy_files/hero-lights.webp') no-repeat center/cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

export default function GameLayout({ children }) {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  );
} 