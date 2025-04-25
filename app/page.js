'use client'

import React from 'react'
import Layout from './components/Layout'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GameFeatures from './components/GameFeatures'
import Image from 'next/image'

const HomeContainer = styled.div`
  padding: 0;
`;

const HeroSection = styled.section`
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 102, 0, 0.15), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255, 102, 0, 0.1), transparent 30%),
      linear-gradient(rgba(10, 10, 20, 0.9), rgba(0, 0, 10, 0.95)), 
      url('/BetJuicy_files/hero-lights.webp') center/cover no-repeat;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(90deg, rgba(255, 102, 0, 0.03) 1px, transparent 1px),
      linear-gradient(0deg, rgba(255, 102, 0, 0.03) 1px, transparent 1px),
      url('/BetJuicy_files/grafitti-pattern.svg');
    background-size: 20px 20px, 20px 20px, auto;
    opacity: 0.1;
    z-index: 0;
  }
  
  &:before {
    box-shadow: inset 0 0 150px rgba(255, 102, 0, 0.1);
  }
`;

const ArcadeElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const ArcadeSquare = styled(motion.div)`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  opacity: ${props => props.opacity || '0.4'};
  position: absolute;
  z-index: 2;
  border: 2px solid ${props => props.borderColor || 'rgba(255, 102, 0, 0.7)'};
  background-color: ${props => props.backgroundColor || 'rgba(255, 102, 0, 0.07)'};
  box-shadow: 0 0 15px rgba(255, 102, 0, 0.3);
  backdrop-filter: blur(2px);
  display: block !important;
`;

const ArcadeStar = styled(motion.div)`
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  opacity: ${props => props.opacity || '0.6'};
  position: absolute;
  z-index: 2;
  background-color: ${props => props.color || 'var(--primary)'};
  clip-path: polygon(
    50% 0%, 
    61% 35%, 
    98% 35%, 
    68% 57%, 
    79% 91%, 
    50% 70%, 
    21% 91%, 
    32% 57%, 
    2% 35%, 
    39% 35%
  );
  box-shadow: 0 0 12px ${props => props.color || 'var(--primary)'};
  display: block !important;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  z-index: 2;
  opacity: ${props => props.opacity || 0.5};
  filter: drop-shadow(0 0 10px rgba(255, 102, 0, 0.3));
  display: block !important;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 5;
`;

const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 5;
  padding: 3rem 2rem;
  
  /* Improved background for better readability */
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(ellipse at center, rgba(10, 10, 15, 0.5) 0%, rgba(10, 10, 15, 0.2) 70%);
    filter: blur(10px);
    z-index: -1;
    border-radius: 30px;
  }
  
  /* Corner accent */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, transparent 50%, rgba(255, 102, 0, 0.1) 50%);
    z-index: -1;
    border-radius: 0 0 10px 0;
  }
`;

const HeroImagesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const GameIconContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 102, 0, 0.3);
  background: rgba(20, 20, 30, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 75%;
    max-height: 75%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
  
  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5);
  position: relative;
  
  span {
    color: var(--primary);
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 15px rgba(255, 102, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.8);
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, var(--primary), rgba(255, 102, 0, 0.3));
      opacity: 0.7;
      z-index: -1;
      border-radius: 4px;
      filter: blur(3px);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -30px;
    top: -20px;
    width: 60px;
    height: 60px;
    background: var(--primary);
    opacity: 0.2;
    border-radius: 10px;
    transform: rotate(45deg);
    filter: blur(15px);
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  max-width: 550px;
  line-height: 1.6;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.5rem 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  font-family: 'Rubik', sans-serif;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 35%;
    width: 30%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 102, 0, 0.7), transparent);
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(45deg, var(--primary), #ff5722);
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 8px 20px rgba(255, 102, 0, 0.4), 0 0 15px rgba(255, 102, 0, 0.2);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(255, 102, 0, 0.6), 0 0 20px rgba(255, 102, 0, 0.3);
  }
`;

const OutlineButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid var(--primary);
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    
    &:after {
      width: 100%;
    }
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  
  @media (max-width: 768px) {
    max-width: 350px;
    height: 280px;
  }
`;

const FloatingImage = styled(motion.div)`
  position: absolute;
  width: 450px;
  height: 300px;
  right: 5%;
  bottom: 8%;
  z-index: 2;
  opacity: 0.5;
  transform: scaleX(-1);
  filter: drop-shadow(0 0 15px rgba(255, 102, 0, 0.4));
  
  @media (max-width: 768px) {
    width: 350px;
    height: 230px;
    right: 50%;
    transform: translateX(50%) scaleX(-1);
    bottom: 5%;
    opacity: 0.4;
  }
`;

const FeaturedSection = styled.section`
  padding: 5rem 1rem;
  background: #121212;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/pattern-bg.png');
    opacity: 0.05;
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Oswald', sans-serif;
  position: relative;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    height: 4px;
    width: 80px;
    background: var(--primary);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  span {
    color: var(--primary);
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const GameCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 102, 0, 0.2);
    
    .game-overlay {
      opacity: 0.6;
    }
    
    .play-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const GameImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const GameOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0.4;
  transition: all 0.3s ease;
  z-index: 1;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 60px;
  height: 60px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 102, 0, 0.5);
  
  &:after {
    content: '▶';
    position: relative;
    left: 2px;
  }
`;

const GameContent = styled.div`
  padding: 1.5rem;
`;

const GameTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Oswald', sans-serif;
  color: white;
`;

const GameDescription = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 1rem;
`;

const GameMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #666;
`;

const GameTag = styled.span`
  background: rgba(255, 102, 0, 0.2);
  color: var(--primary);
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const PartnersSection = styled.section`
  padding: 5rem 1rem;
  background: #1a1a1a;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/wheel-bg.png') right -200px no-repeat;
    background-size: contain;
    opacity: 0.05;
    z-index: 0;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const PartnerCard = styled(motion.div)`
  background: linear-gradient(145deg, #222, #181818);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    border-color: rgba(255, 102, 0, 0.3);
  }
`;

const PartnerLogo = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
`;

const PartnerName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  font-family: 'Oswald', sans-serif;
`;

const PartnerBonus = styled.p`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const PartnerButton = styled.button`
  background: linear-gradient(45deg, var(--primary), var(--accent));
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  max-width: 200px;
  box-shadow: 0 4px 10px rgba(255, 102, 0, 0.3);
  text-decoration: none;
  display: inline-block;
  text-align: center;
`;

const LeaderboardSection = styled.section`
  padding: 5rem 1rem;
  background: #111;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/pattern-bg.png');
    opacity: 0.05;
    z-index: 0;
  }
`;

const LeaderboardContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(30, 30, 30, 0.5);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const LeaderboardHeader = styled.div`
  background: linear-gradient(90deg, var(--primary), #FF3300);
  padding: 1.5rem;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
`;

const LeaderboardBody = styled.div`
  padding: 0.5rem;
`;

const LeaderboardRow = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(255, 102, 0, 0.1);
  }
`;

const LeaderboardRank = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  font-size: 1.2rem;
  
  ${props => props.rank === 1 && `
    background: linear-gradient(45deg, #FFD700, #FFA500);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  `}
  
  ${props => props.rank === 2 && `
    background: linear-gradient(45deg, #C0C0C0, #A9A9A9);
    box-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
  `}
  
  ${props => props.rank === 3 && `
    background: linear-gradient(45deg, #CD7F32, #8B4513);
    box-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
  `}
  
  ${props => props.rank > 3 && `
    background: #2A2A2A;
  `}
`;

const LeaderboardUser = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const LeaderboardAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const LeaderboardName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

const LeaderboardPoints = styled.div`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.3rem;
`;

const CTASection = styled.section`
  padding: 6rem 1rem;
  background: url('/images/hero-bg.jpg') center/cover fixed;
  position: relative;
  text-align: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
`;

const CTAContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  font-family: 'Oswald', sans-serif;
  
  span {
    color: var(--primary);
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid var(--primary);
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 102, 0, 0.1);
  }
`;

const FloatingGameGraphic = styled(motion.div)`
  position: absolute;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '200px'};
  opacity: ${props => props.opacity || '0.3'};
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 0 15px rgba(255, 102, 0, 0.2));
  display: block !important;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  width: ${props => props.width || '70px'};
  height: ${props => props.height || '90px'};
  background: rgba(20, 20, 30, 0.6);
  border: 1px solid rgba(255, 102, 0, 0.3);
  border-radius: 10px;
  z-index: 2;
  opacity: ${props => props.opacity || '0.4'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: block !important;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent, rgba(255, 102, 0, 0.1));
    z-index: 1;
  }
`;

const FloatingDice = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  background: white;
  border-radius: 8px;
  z-index: 2;
  opacity: ${props => props.opacity || '0.3'};
  box-shadow: 0 0 20px rgba(255, 102, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  display: block !important;
  
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #333;
    border-radius: 50%;
  }
`;

const FloatingCoin = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '30px'};
  height: ${props => props.size || '30px'};
  background: linear-gradient(45deg, #ffe600, #ffcc00);
  border-radius: 50%;
  z-index: 2;
  opacity: ${props => props.opacity || '0.4'};
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  display: block !important;
  
  &:before {
    content: '$';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333;
    font-weight: bold;
    font-size: ${props => parseInt(props.size) / 2 || '14px'};
  }
`;

// Sample data for games
const featuredGames = [
  {
    id: 1,
    title: 'CasesGG',
    description: 'Open cases and win the best skins',
    image: '/BetJuicy_files/casesgg-icon.png',
    tag: 'Cases & Skins',
    link: 'casesgg'
  },
  {
    id: 2,
    title: 'CSGO Big',
    description: 'The ultimate gambling experience',
    image: '/BetJuicy_files/big-icon.webp',
    tag: 'Gambling',
    link: 'csgo-big'
  },
  {
    id: 3,
    title: 'Clash GG',
    description: 'Compete in high-stakes case battles',
    image: '/BetJuicy_files/clash-icon.webp',
    tag: 'Battle Games',
    link: 'clash-gg'
  },
  {
    id: 4,
    title: 'Rain GG',
    description: 'Daily rewards and weekly bonuses',
    image: '/BetJuicy_files/rain-icon.webp',
    tag: 'Rewards',
    link: 'rain-gg'
  }
];

// Sample data for partners
const partners = [
  {
    id: 1,
    name: 'CSGOStake',
    logo: '/BetJuicy_files/stake-icon.webp',
    logoFull: '/BetJuicy_files/logo-stake.svg',
    bonus: 'Up to $500 + 100 Free Spins',
    link: 'stake'
  },
  {
    id: 2,
    name: 'Roobet',
    logo: '/BetJuicy_files/roobet-icon.png',
    logoFull: '/BetJuicy_files/logo-roobet.svg',
    bonus: '200% Welcome Bonus',
    link: 'roobet'
  },
  {
    id: 3,
    name: 'CSGORoll',
    logo: '/BetJuicy_files/roll-icon.webp',
    logoFull: '/BetJuicy_files/logo-csgoroll.svg',
    bonus: '$25 Free + 100% Deposit Match',
    link: 'csgo-roll'
  }
];

// Sample data for leaderboard
const topPlayers = [
  {
    id: 1,
    name: 'ElChapo247',
    avatar: 'avatar1.jpg',
    points: 12580
  },
  {
    id: 2,
    name: 'LowriderQueen',
    avatar: 'avatar2.jpg',
    points: 9750
  },
  {
    id: 3,
    name: 'EastLASurviver',
    avatar: 'avatar3.jpg',
    points: 8320
  },
  {
    id: 4,
    name: 'SanFernando213',
    avatar: 'avatar4.jpg',
    points: 7140
  },
  {
    id: 5,
    name: 'DiamondDogg',
    avatar: 'avatar5.jpg',
    points: 6290
  }
];

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        {/* Hero Section */}
        <HeroSection>
          <ArcadeElements>
            {/* Main floating image */}
            <FloatingImage
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 0.8, 
                y: 0,
                transition: { duration: 1.2 } 
              }}
              whileInView={{ 
                y: [0, -15, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                } 
              }}
            >
              <Image
                src="/BetJuicy_files/mobile-hero-items.webp"
                alt="Gaming Items"
                width={450}
                height={300}
                style={{ objectFit: 'contain' }}
                priority
              />
            </FloatingImage>
            
            {/* Floating Icon 1 - Rain */}
            <FloatingIcon
              size="120px"
              opacity="0.9"
              style={{ left: '15%', top: '20%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileInView={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                filter: ['drop-shadow(0 0 8px rgba(255, 102, 0, 0.3))', 'drop-shadow(0 0 15px rgba(255, 102, 0, 0.5))', 'drop-shadow(0 0 8px rgba(255, 102, 0, 0.3))'],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                src="/BetJuicy_files/rain-icon.webp"
                alt="Rain Icon"
                width={120}
                height={120}
              />
            </FloatingIcon>
            
            {/* Floating Icon 2 - Roll */}
            <FloatingIcon
              size="100px"
              opacity="0.85"
              style={{ right: '20%', top: '25%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileInView={{
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -5, 0],
                filter: ['drop-shadow(0 0 8px rgba(255, 102, 0, 0.3))', 'drop-shadow(0 0 15px rgba(255, 102, 0, 0.5))', 'drop-shadow(0 0 8px rgba(255, 102, 0, 0.3))'],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                src="/BetJuicy_files/roll-icon.webp"
                alt="Roll Icon"
                width={100}
                height={100}
              />
            </FloatingIcon>
            
            {/* New Floating Game Graphics */}
            <FloatingGameGraphic
              width="250px"
              height="250px"
              opacity="0.3"
              zIndex="2"
              style={{ left: '-5%', bottom: '10%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileInView={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                src="/BetJuicy_files/stake-icon.webp"
                alt="Stake Icon Large"
                width={250}
                height={250}
              />
            </FloatingGameGraphic>
            
            <FloatingGameGraphic
              width="200px"
              height="200px"
              opacity="0.25"
              zIndex="2"
              style={{ right: '-2%', top: '15%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileInView={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
                transition: {
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                src="/BetJuicy_files/roobet-icon.png"
                alt="Roobet Icon Large"
                width={200}
                height={200}
              />
            </FloatingGameGraphic>
            
            {/* Floating Cards */}
            <FloatingCard
              width="70px"
              height="90px"
              zIndex="2"
              opacity="0.7"
              style={{ left: '25%', bottom: '15%' }}
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              animate={{ opacity: 0.7, rotate: -5, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileInView={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                rotate: [-5, -10, -5],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
            />
            
            <FloatingCard
              width="60px"
              height="80px"
              zIndex="2"
              opacity="0.7"
              style={{ left: '30%', bottom: '17%' }}
              initial={{ opacity: 0, rotate: 10, y: 20 }}
              animate={{ opacity: 0.7, rotate: 10, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileInView={{
                y: [0, -15, 0],
                x: [0, -8, 0],
                rotate: [10, 15, 10],
                transition: {
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Floating Dice */}
            <FloatingDice
              size="45px"
              zIndex="2"
              opacity="0.8"
              style={{ right: '35%', top: '65%' }}
              initial={{ opacity: 0, rotate: 15, y: 20 }}
              animate={{ opacity: 0.8, rotate: 15, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileInView={{
                y: [0, -15, 0],
                rotate: [15, 45, 15],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
            />
            
            <FloatingDice
              size="35px"
              zIndex="2"
              opacity="0.6"
              style={{ right: '32%', top: '60%' }}
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              animate={{ opacity: 0.6, rotate: -10, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileInView={{
                y: [0, -10, 0],
                rotate: [-10, -40, -10],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Floating Coins */}
            <FloatingCoin
              size="40px"
              zIndex="2"
              opacity="0.85"
              style={{ left: '42%', top: '20%' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              whileInView={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 360, 720],
                transition: {
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut"
                }
              }}
            />
            
            <FloatingCoin
              size="30px"
              zIndex="2"
              opacity="0.7"
              style={{ left: '45%', top: '25%' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileInView={{
                y: [0, -15, 0],
                x: [0, -10, 0],
                rotate: [0, 360, 720],
                transition: {
                  repeat: Infinity,
                  duration: 9,
                  ease: "easeInOut"
                }
              }}
            />
            
            <FloatingCoin
              size="25px"
              zIndex="2"
              opacity="0.6"
              style={{ left: '47%', top: '28%' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileInView={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                rotate: [0, 360, 720],
                transition: {
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Arcade Square 1 */}
            <ArcadeSquare
              size="50px"
              opacity="0.6"
              style={{ left: '10%', bottom: '30%' }}
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 0.6, rotate: 45 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileInView={{
                scale: [1, 1.2, 1],
                rotate: [45, 55, 45],
                transition: {
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Arcade Square 2 */}
            <ArcadeSquare
              size="30px"
              opacity="0.4"
              style={{ right: '15%', top: '15%' }}
              initial={{ opacity: 0, rotate: 20 }}
              animate={{ opacity: 0.4, rotate: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileInView={{
                scale: [1, 1.3, 1],
                rotate: [20, 30, 20],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Arcade Square 3 */}
            <ArcadeSquare
              size="40px"
              opacity="0.5"
              style={{ right: '40%', bottom: '20%' }}
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 0.5, rotate: 10 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileInView={{
                scale: [1, 1.1, 1],
                rotate: [10, 20, 10],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Star 1 */}
            <ArcadeStar
              size="20px"
              color="var(--primary)"
              opacity="0.9"
              style={{ left: '25%', top: '35%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              whileInView={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                transition: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Star 2 */}
            <ArcadeStar
              size="15px"
              color="#ffaa00"
              opacity="0.8"
              style={{ right: '30%', top: '45%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileInView={{
                scale: [1, 1.3, 1],
                rotate: [0, 360, 0],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Star 3 */}
            <ArcadeStar
              size="25px"
              color="var(--primary)"
              opacity="0.7"
              style={{ right: '10%', bottom: '40%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.8 }}
              whileInView={{
                scale: [1, 1.4, 1],
                rotate: [0, -180, -360],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
            />
          </ArcadeElements>
          
          <HeroContent>
            <HeroText
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>
                Find the best <span>Game Codes</span> in one place
              </HeroTitle>
              <HeroSubtitle>
                Exclusive promo codes and bonuses for the top gaming sites. Maximize your gameplay and rewards with our curated collection.
              </HeroSubtitle>
              <HeroButtons>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PrimaryButton 
                    as="a" 
                    onClick={() => window.location.href = '/games'}
                    style={{ cursor: 'pointer' }}
                  >
                    Browse Games
                  </PrimaryButton>
                </motion.div>
              </HeroButtons>
            </HeroText>
            
            <HeroImagesContainer
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GameIconContainer>
                <Image
                  src="/BetJuicy_files/casesgg-icon.png"
                  alt="CasesGG"
                  width={120}
                  height={120}
                  priority
                />
              </GameIconContainer>
              
              <GameIconContainer>
                <Image
                  src="/BetJuicy_files/big-icon.webp"
                  alt="CSGO Big"
                  width={120}
                  height={120}
                  priority
                />
              </GameIconContainer>
              
              <GameIconContainer>
                <Image
                  src="/BetJuicy_files/clash-icon.webp"
                  alt="Clash GG"
                  width={120}
                  height={120}
                  priority
                />
              </GameIconContainer>
            </HeroImagesContainer>
          </HeroContent>
        </HeroSection>
        
        {/* Game Features Section */}
        <FeaturedSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Premium <span>Features</span>
          </SectionTitle>
          
          <GameFeatures />
        </FeaturedSection>
        
        {/* Featured Games Section */}
        <FeaturedSection style={{ background: '#0c0c0c' }}>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span>Games</span>
          </SectionTitle>
          
          <GamesGrid>
            {featuredGames.map((game, index) => (
              <Link href={`/games/${game.link}`} key={game.id} passHref style={{ textDecoration: 'none' }}>
                <GameCard 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GameImage>
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={120}
                      height={120}
                      style={{ 
                        objectFit: 'contain',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2
                      }}
                    />
                    <GameOverlay className="game-overlay" />
                    <PlayButton className="play-button" />
                  </GameImage>
                  <GameContent>
                    <GameTitle>{game.title}</GameTitle>
                    <GameDescription>{game.description}</GameDescription>
                    <GameMeta>
                      <GameTag>{game.tag}</GameTag>
                      <span>500+ players</span>
                    </GameMeta>
                  </GameContent>
                </GameCard>
              </Link>
            ))}
          </GamesGrid>
        </FeaturedSection>
        
        {/* Partners Section */}
        <PartnersSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span>Partners</span>
          </SectionTitle>
          
          <PartnersGrid>
            {partners.map((partner, index) => (
              <PartnerCard
                key={partner.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PartnerLogo>
                  <Image 
                    src={partner.logoFull || partner.logo} 
                    alt={partner.name} 
                    width={120}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </PartnerLogo>
                <PartnerName>{partner.name}</PartnerName>
                <PartnerBonus>{partner.bonus}</PartnerBonus>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PartnerButton
                    as="a"
                    onClick={() => window.location.href = `/games/${partner.link}`}
                    style={{ cursor: 'pointer' }}
                  >
                    Claim Bonus
                  </PartnerButton>
                </motion.div>
              </PartnerCard>
            ))}
          </PartnersGrid>
        </PartnersSection>
        
        {/* Leaderboard Section */}
        <LeaderboardSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Top <span>Players</span>
          </SectionTitle>
          
          <LeaderboardContainer>
            <LeaderboardHeader>
              <span>Player</span>
              <span>Points</span>
            </LeaderboardHeader>
            <LeaderboardBody>
              {topPlayers.map((player, index) => (
                <LeaderboardRow
                  key={player.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <LeaderboardRank rank={index + 1}>{index + 1}</LeaderboardRank>
                  <LeaderboardUser>
                    <LeaderboardAvatar style={{ backgroundImage: `url(/images/${player.avatar})` }} />
                    <LeaderboardName>{player.name}</LeaderboardName>
                  </LeaderboardUser>
                  <LeaderboardPoints>{player.points.toLocaleString()}</LeaderboardPoints>
                </LeaderboardRow>
              ))}
            </LeaderboardBody>
          </LeaderboardContainer>
        </LeaderboardSection>
        
        {/* CTA Section */}
        <CTASection>
          <CTAContainer
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CTATitle>Ready to <span>Win Big</span>?</CTATitle>
            <CTAText>Join thousands of players earning rewards, bonuses, and exclusive perks when using our code on partner sites.</CTAText>
            <CTAButtons>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SecondaryButton as="button">
                  Learn More
                </SecondaryButton>
              </motion.div>
            </CTAButtons>
          </CTAContainer>
        </CTASection>
      </HomeContainer>
    </Layout>
  )
} 