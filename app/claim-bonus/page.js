'use client'

import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const ClaimContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Teko', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const CodeDisplay = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #333333);
  border: 2px dashed var(--primary);
  padding: 1.5rem;
  margin: 2rem auto;
  text-align: center;
  max-width: 400px;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 2px;
  font-family: 'Teko', sans-serif;
  text-transform: uppercase;
`;

export default function ClaimBonus() {
  return (
    <Layout>
      <ClaimContainer>
        <Title>Claim Your Bonus</Title>
        <p>This is the Claim Bonus page with instructions on how to use the code.</p>
        <CodeDisplay>CHOLOGG</CodeDisplay>
      </ClaimContainer>
    </Layout>
  )
} 