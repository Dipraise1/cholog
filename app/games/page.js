'use client'

import React from 'react';
import styled from 'styled-components';
import GameCarousel from '../components/GameCarousel';

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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

const Header = styled.header`
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/BetJuicy_files/grafitti-pattern.svg') center/cover;
    opacity: 0.05;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  
  span {
    color: var(--primary);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--primary);
      border-radius: 2px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 80px;
  position: relative;
  
  &:last-child {
    margin-bottom: 40px;
  }
`;

const CrownIcon = styled.div`
  position: absolute;
  top: -30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: url('/BetJuicy_files/GrafittiCrown.webp') no-repeat center/contain;
  opacity: 0.7;
`;

export default function GamesPage() {
  // Sample game data for different categories
  const featuredGames = [
    { 
      id: 1, 
      title: "CasesGG", 
      image: "/BetJuicy_files/casesgg-icon.png", 
      category: "Cases & Skins", 
      rating: 4.8, 
      players: "25k+",
      description: "Open cases and win the best skins with the most competitive odds in the industry."
    },
    { 
      id: 2, 
      title: "CSGO Big", 
      image: "/BetJuicy_files/big-icon.webp", 
      category: "Gambling", 
      rating: 4.7, 
      players: "30k+",
      description: "The ultimate CS:GO gambling experience with crash games, roulette and more."
    },
    { 
      id: 3, 
      title: "Stake", 
      image: "/BetJuicy_files/stake-icon.webp", 
      category: "Casino", 
      rating: 4.9, 
      players: "50k+",
      description: "Comprehensive casino platform with slots, live games and sports betting options."
    },
    { 
      id: 4, 
      title: "Clash GG", 
      image: "/BetJuicy_files/clash-icon.webp", 
      category: "Battle Games", 
      rating: 4.6, 
      players: "20k+",
      description: "Compete in high-stakes case battles against other players for epic rewards."
    },
    { 
      id: 5, 
      title: "RainGG", 
      image: "/BetJuicy_files/rain-icon.webp", 
      category: "Rewards", 
      rating: 4.5, 
      players: "15k+",
      description: "Daily rewards, rain drops and weekly bonuses for active players in the community."
    }
  ];
  
  const newGames = [
    { 
      id: 6, 
      title: "Roobet", 
      image: "/BetJuicy_files/roobet-icon.png", 
      category: "All-in-One", 
      rating: 4.8, 
      players: "45k+",
      description: "Modern crypto casino platform with slots, table games, and live dealer options."
    },
    { 
      id: 7, 
      title: "PackDraw", 
      image: "/BetJuicy_files/packdraw-icon.webp", 
      category: "Pack Opening", 
      rating: 4.4, 
      players: "12k+",
      description: "Open digital packs and collect rare items from your favorite games and series."
    },
    { 
      id: 8, 
      title: "CSGO Roll", 
      image: "/BetJuicy_files/roll-icon.webp", 
      category: "Roulette", 
      rating: 4.7, 
      players: "28k+",
      description: "Spin to win with multiple game modes, weekly rewards and exclusive bonuses."
    },
    { 
      id: 9, 
      title: "Bet Juicy", 
      image: "/BetJuicy_files/New.webp", 
      category: "New Release", 
      rating: 4.9, 
      players: "10k+",
      description: "Brand new platform combining the best features of gambling and gaming in one place."
    }
  ];
  
  const popularGames = [
    { 
      id: 10, 
      title: "Game Battle", 
      image: "/BetJuicy_files/game-bg.webp", 
      category: "PvP", 
      rating: 4.6, 
      players: "22k+",
      description: "Challenge other players to head-to-head battles with your favorite skins and items."
    },
    { 
      id: 11, 
      title: "Skin Exchange", 
      image: "/BetJuicy_files/mobile-hero-items.webp", 
      category: "Trading", 
      rating: 4.5, 
      players: "18k+",
      description: "Trade, buy and sell skins and items with other players on a secure marketplace."
    },
    { 
      id: 12, 
      title: "Crypto Casino", 
      image: "/BetJuicy_files/mobile-cracks.webp", 
      category: "Crypto", 
      rating: 4.8, 
      players: "35k+",
      description: "Play with your favorite cryptocurrencies on this dedicated crypto gambling platform."
    }
  ];

  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>Game <span>Library</span></Title>
          <Subtitle>
            Discover our collection of immersive games and gambling platforms. From cases and skins 
            to casino games and betting, find your next favorite game to play.
          </Subtitle>
        </Header>
        
        <Section>
          <CrownIcon />
          <GameCarousel title="Featured Games" games={featuredGames} />
        </Section>
        
        <Section>
          <GameCarousel title="New Releases" games={newGames} />
        </Section>
        
        <Section>
          <GameCarousel title="Popular Games" games={popularGames} />
        </Section>
      </Container>
    </PageWrapper>
  );
} 