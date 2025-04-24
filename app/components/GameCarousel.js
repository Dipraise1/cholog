'use client'

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GameCard from './GameCard';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 40px 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: 'Teko', sans-serif;
  text-transform: uppercase;
  
  &::after {
    content: '';
    height: 2px;
    background: linear-gradient(90deg, var(--primary), rgba(255, 102, 0, 0.1));
    flex: 1;
    margin-left: 20px;
    border-radius: 2px;
  }
`;

const CarouselScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0 30px;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselTrack = styled(motion.div)`
  display: inline-flex;
  gap: 25px;
  padding: 10px 0;
  padding-right: 40px;
`;

const CardWrapper = styled(motion.div)`
  width: 300px;
  flex-shrink: 0;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  display: flex;
  gap: 12px;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(30, 30, 40, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: var(--primary);
    color: white;
    border-color: transparent;
    box-shadow: 0 0 15px rgba(255, 102, 0, 0.4);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    
    &:hover {
      background: rgba(30, 30, 40, 0.7);
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: none;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--primary), rgba(255, 102, 0, 0.7));
  width: ${props => props.progress}%;
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const GameCarousel = ({ title, games = [] }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const updateScrollPosition = () => {
    if (scrollRef.current) {
      const position = scrollRef.current.scrollLeft;
      const max = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollPosition(position);
      setMaxScroll(max);
      setProgress((position / max) * 100 || 0);
    }
  };
  
  const handleScroll = () => {
    updateScrollPosition();
  };
  
  useEffect(() => {
    updateScrollPosition();
    // Add resize event listener to recalculate maxScroll
    window.addEventListener('resize', updateScrollPosition);
    return () => window.removeEventListener('resize', updateScrollPosition);
  }, [games]);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -600,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 600,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <CarouselContainer>
      <Title>{title}</Title>
      
      <NavigationButtons>
        <NavButton 
          onClick={scrollLeft} 
          disabled={scrollPosition <= 10}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavButton>
        <NavButton 
          onClick={scrollRight} 
          disabled={scrollPosition >= maxScroll - 10}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavButton>
      </NavigationButtons>
      
      <CarouselScroll 
        ref={scrollRef} 
        onScroll={handleScroll}
      >
        <CarouselTrack>
          {games.map((game, index) => (
            <CardWrapper 
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <GameCard game={game} />
            </CardWrapper>
          ))}
        </CarouselTrack>
      </CarouselScroll>
      
      {maxScroll > 0 && (
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
      )}
    </CarouselContainer>
  );
};

export default GameCarousel; 