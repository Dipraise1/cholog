import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 2rem 0;
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CarouselTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  
  span {
    color: var(--primary);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const GamesTrack = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  cursor: grab;
  overflow: visible;
  
  &:active {
    cursor: grabbing;
  }
`;

const GameCard = styled(motion.div)`
  min-width: 280px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    border-color: var(--primary);
  }
`;

const GameImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
`;

const GameCategory = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  z-index: 2;
`;

const GameContent = styled.div`
  padding: 1.2rem;
`;

const GameTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const GameMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #f8ce0b;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Players = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #a0a0a0;
  font-size: 0.9rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const GameDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #a0a0a0;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PlayButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  color: white;
  border: none;
  padding: 0.7rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--primary);
  border-radius: 2px;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`;

const GameCarousel = ({ title, games }) => {
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  
  // Calculate the max drag distance based on container and track width
  useEffect(() => {
    if (trackRef.current && containerRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      setWidth(trackWidth - containerWidth);
    }
  }, [games]);
  
  const handlePrev = () => {
    setPosition(Math.max(position + 300, 0));
  };
  
  const handleNext = () => {
    setPosition(Math.max(Math.min(position - 300, -width), -width));
  };
  
  // Calculate progress percentage
  const progressPercentage = width > 0 ? (Math.abs(position) / width) * 100 : 0;
  
  return (
    <CarouselContainer ref={containerRef}>
      <CarouselHeader>
        <CarouselTitle>
          <span>{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </CarouselTitle>
        <NavigationButtons>
          <NavButton 
            onClick={handlePrev}
            disabled={position >= 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </NavButton>
          <NavButton 
            onClick={handleNext}
            disabled={position <= -width}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavButton>
        </NavigationButtons>
      </CarouselHeader>
      
      <GamesTrack
        ref={trackRef}
        animate={{ x: position }}
        transition={{ type: "spring", damping: 20 }}
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            handlePrev();
          } else if (info.offset.x < -100) {
            handleNext();
          }
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id}>
            <GameImageContainer>
              <GameCategory>{game.category}</GameCategory>
              <Image
                src={game.image}
                alt={game.title}
                layout="fill"
                objectFit="cover"
              />
            </GameImageContainer>
            <GameContent>
              <GameTitle>{game.title}</GameTitle>
              <GameMeta>
                <Rating>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  {game.rating}
                </Rating>
                <Players>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                  {game.players}
                </Players>
              </GameMeta>
              <GameDescription>{game.description}</GameDescription>
              <Link href={`/game/${game.id}`} passHref>
                <PlayButton
                  as="a"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  Play Now
                </PlayButton>
              </Link>
            </GameContent>
          </GameCard>
        ))}
      </GamesTrack>
      
      <ProgressBar>
        <Progress width={progressPercentage} />
      </ProgressBar>
    </CarouselContainer>
  );
};

export default GameCarousel; 