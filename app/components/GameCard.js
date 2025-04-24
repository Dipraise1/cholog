'use client'

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Card = styled(motion.div)`
  background: rgba(20, 20, 30, 0.8);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 380px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 102, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  background: rgba(10, 10, 15, 0.6);
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  transition: transform 0.5s ease, filter 0.5s ease;
  max-width: 100%;
  max-height: 100%;
  width: auto !important;
  height: auto !important;
  position: relative !important;
  
  ${Card}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px rgba(255, 102, 0, 0.4));
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${Card}:hover & {
    opacity: 0.4;
  }
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: white;
  font-family: 'Teko', sans-serif;
`;

const Category = styled.span`
  background: linear-gradient(90deg, rgba(255, 102, 0, 0.3), rgba(255, 102, 0, 0.1));
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 16px;
  line-height: 1.4;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #ffc107;
  font-weight: 600;
`;

const Players = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 5px;
    opacity: 0.7;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, var(--primary), #ff3300);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  
  ${Card}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const NewTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: linear-gradient(135deg, #ff3300, var(--primary));
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  z-index: 2;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
  </svg>
);

const GameCard = ({ game }) => {
  const { title, image, category, rating, players, description } = game;
  const isNew = title === "Bet Juicy";
  
  return (
    <Link href={`/games/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`} passHref style={{ textDecoration: 'none' }}>
      <Card 
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageContainer>
          <StyledImage 
            src={image}
            alt={title}
            width={120}
            height={120}
            quality={90}
          />
          <Overlay />
          {isNew && <NewTag>New</NewTag>}
          <PlayButton>
            <PlayIcon />
          </PlayButton>
        </ImageContainer>
        <Content>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Footer>
            <Rating>
              <StarIcon />
              {rating}
            </Rating>
            <Players>
              <UsersIcon />
              {players} Players
            </Players>
          </Footer>
        </Content>
      </Card>
    </Link>
  );
};

export default GameCard; 