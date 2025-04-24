'use client'

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '18px 32px' : props.size === 'small' ? '10px 20px' : '14px 28px'};
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.85rem' : '1rem'};
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(183, 58, 255, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover:before {
    opacity: 1;
  }

  svg {
    margin-right: ${props => props.size === 'small' ? '6px' : '10px'};
    width: ${props => props.size === 'large' ? '22px' : props.size === 'small' ? '16px' : '18px'};
    height: ${props => props.size === 'large' ? '22px' : props.size === 'small' ? '16px' : '18px'};
  }
`;

const PulseRing = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: var(--primary);
  z-index: -2;
`;

const IconWrapper = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PlayButton = ({ 
  text = "Play Now", 
  size = "medium", 
  onClick,
  pulse = true,
  icon = true
}) => {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    rest: { x: 0 },
    hover: { 
      x: 3, 
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      } 
    }
  };

  return (
    <ButtonContainer
      size={size}
      onClick={onClick}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {pulse && (
        <PulseRing
          variants={pulseVariants}
          animate="pulse"
        />
      )}
      
      {icon && (
        <IconWrapper
          variants={iconVariants}
        >
          <PlayIcon />
        </IconWrapper>
      )}
      
      {text}
    </ButtonContainer>
  );
};

export default PlayButton; 