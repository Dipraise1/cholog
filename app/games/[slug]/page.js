'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Game data (in a real app, this would be fetched from an API)
const gamesData = {
  'casesgg': { 
    title: "CasesGG", 
    image: "/BetJuicy_files/casesgg-icon.png",
    logo: "/BetJuicy_files/logo-casesgg.svg",
    category: "Cases & Skins", 
    rating: 4.8, 
    players: "25k+",
    description: "Open cases and win the best skins with the most competitive odds in the industry. CasesGG offers a wide variety of cases at different price points, from budget-friendly to premium collections.",
    features: [
      "Competitive odds compared to other case opening sites",
      "Wide variety of cases at different price points",
      "Regular giveaways and promotions",
      "Fast withdrawals with minimal fees",
      "Mobile-friendly interface"
    ],
    bonusCode: "CHOLOGG"
  },
  'csgo-big': { 
    title: "CSGO Big", 
    image: "/BetJuicy_files/big-icon.webp",
    logo: "/BetJuicy_files/logo-csgobig.webp",
    category: "Gambling", 
    rating: 4.7, 
    players: "30k+",
    description: "The ultimate CS:GO gambling experience with crash games, roulette and more. CSGOBig offers a comprehensive platform for gambling enthusiasts with various game modes and betting options.",
    features: [
      "Multiple game modes: Crash, Roulette, Coinflip, and more",
      "Daily rewards and free coins",
      "Active community with chat features",
      "Provably fair betting system",
      "Regular tournaments with big prize pools"
    ],
    bonusCode: "CHOLOGG10"
  },
  'stake': { 
    title: "Stake", 
    image: "/BetJuicy_files/stake-icon.webp",
    logo: "/BetJuicy_files/logo-stake.svg",
    category: "Casino", 
    rating: 4.9, 
    players: "50k+",
    description: "Comprehensive casino platform with slots, live games and sports betting options. Stake.com is one of the world's largest crypto casinos and betting platforms, offering thousands of games and markets.",
    features: [
      "Thousands of slots and casino games",
      "Live dealer tables with professional croupiers",
      "Comprehensive sportsbook with competitive odds",
      "Lightning-fast deposits and withdrawals",
      "VIP program with exclusive perks and rakeback"
    ],
    bonusCode: "CHOLOGG200"
  },
  // Add other games as needed
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  svg {
    margin-right: 8px;
  }
`;

const GameDetailSection = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GameLogoSection = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-bottom: 30px;
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(20, 20, 30, 0.7);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255, 102, 0, 0.1), transparent 70%);
    z-index: 0;
  }
  
  img {
    position: relative;
    z-index: 1;
    max-width: 100%;
    max-height: 100%;
    height: auto !important;
    width: auto !important;
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
  }
`;

const GameStats = styled.div`
  background: rgba(20, 20, 30, 0.5);
  border-radius: 10px;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  
  .label {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .value {
    font-weight: 600;
    color: white;
  }
`;

const GameContent = styled.div`
  flex: 1;
`;

const GameTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: white;
  font-family: 'Teko', sans-serif;
`;

const GameCategory = styled.div`
  display: inline-block;
  background: linear-gradient(90deg, rgba(255, 102, 0, 0.3), rgba(255, 102, 0, 0.1));
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
`;

const GameDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
`;

const FeaturesList = styled.div`
  margin-bottom: 40px;
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  li {
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    
    svg {
      margin-right: 10px;
      flex-shrink: 0;
      margin-top: 3px;
      color: var(--primary);
    }
  }
`;

const BonusSection = styled.div`
  background: linear-gradient(to right, rgba(20, 20, 30, 0.7), rgba(40, 25, 20, 0.7));
  border-radius: 10px;
  padding: 30px;
  border: 1px solid rgba(255, 102, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/BetJuicy_files/grafitti-pattern.svg') center/cover;
    opacity: 0.03;
    z-index: 0;
  }
`;

const BonusTitle = styled.h3`
  font-size: 1.6rem;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  svg {
    margin-right: 10px;
    color: var(--primary);
  }
`;

const BonusCode = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const CodeDisplay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  letter-spacing: 2px;
  flex: 1;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CopyButton = styled.button`
  background: linear-gradient(135deg, var(--primary), #ff3300);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const BonusDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

const VisitButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), #ff3300);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 15px 30px;
  border-radius: 50px;
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 102, 0, 0.3);
  }
`;

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
  </svg>
);

const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6h-2.18c0.11-0.31 0.18-0.65 0.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96 0.54-2.5 1.35l-0.5 0.67-0.5-0.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 0.35 0.07 0.69 0.18 1H4c-1.11 0-1.99 0.89-1.99 2L2 19c0 1.11 0.89 2 2 2h16c1.11 0 2-0.89 2-2V8c0-1.11-0.89-2-2-2zm-5-2c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM9 4c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" fill="currentColor"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
  </svg>
);

export default function GameDetailPage() {
  const params = useParams();
  const { slug } = params;
  
  // Find the game data based on the slug
  const gameData = Object.values(gamesData).find(game => 
    game.title.toLowerCase().replace(/\s+/g, '-') === slug
  ) || gamesData['casesgg']; // Fallback to first game if not found
  
  const copyBonusCode = () => {
    navigator.clipboard.writeText(gameData.bonusCode);
    alert('Bonus code copied to clipboard!');
  };
  
  return (
    <Container>
      <Link href="/games" passHref>
        <BackLink>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
          </svg>
          Back to Games
        </BackLink>
      </Link>
      
      <GameDetailSection>
        <GameLogoSection>
          <LogoContainer>
            <Image 
              src={gameData.logo || gameData.image} 
              alt={gameData.title}
              width={150}
              height={150}
              style={{ objectFit: 'contain' }}
            />
          </LogoContainer>
          
          <GameStats>
            <StatItem>
              <span className="label">Category</span>
              <span className="value">{gameData.category}</span>
            </StatItem>
            <StatItem>
              <span className="label">Rating</span>
              <span className="value">⭐ {gameData.rating}/5</span>
            </StatItem>
            <StatItem>
              <span className="label">Players</span>
              <span className="value">{gameData.players}</span>
            </StatItem>
          </GameStats>
        </GameLogoSection>
        
        <GameContent>
          <GameTitle>{gameData.title}</GameTitle>
          <GameCategory>{gameData.category}</GameCategory>
          <GameDescription>{gameData.description}</GameDescription>
          
          <FeaturesList>
            <h3>Key Features</h3>
            <ul>
              {gameData.features.map((feature, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </FeaturesList>
          
          <BonusSection>
            <BonusTitle>
              <GiftIcon />
              Exclusive Bonus Offer
            </BonusTitle>
            
            <BonusCode>
              <CodeDisplay>{gameData.bonusCode}</CodeDisplay>
              <CopyButton onClick={copyBonusCode}>
                <CopyIcon />
                Copy Code
              </CopyButton>
            </BonusCode>
            
            <BonusDescription>
              Use this exclusive bonus code to receive special rewards, bonuses, and promotions when you sign up or make a deposit at {gameData.title}. This code has been verified to provide the maximum available bonus.
            </BonusDescription>
          </BonusSection>
          
          <VisitButton
            href={`https://${gameData.title.toLowerCase().replace(/\s+/g, '')}.com?ref=chologg`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit {gameData.title}
          </VisitButton>
        </GameContent>
      </GameDetailSection>
    </Container>
  );
} 