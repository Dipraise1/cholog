'use client'

import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const LeaderboardContainer = styled.div`
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

export default function Leaderboard() {
  return (
    <Layout>
      <LeaderboardContainer>
        <Title>Leaderboard</Title>
        <p>This is the Leaderboard page that will show top wagerers under the code.</p>
      </LeaderboardContainer>
    </Layout>
  )
} 