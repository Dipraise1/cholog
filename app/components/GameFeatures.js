'use client'

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeatureContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  justify-content: center;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  border-radius: 15px;
  padding: 2rem;
  width: 280px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 102, 0, 0.3);
    border-color: rgba(255, 102, 0, 0.3);
    
    .feature-icon {
      transform: scale(1.2);
      color: var(--primary);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    z-index: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 102, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #ccc;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  i {
    transition: all 0.3s ease;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Teko', sans-serif;
  color: white;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
`;

const features = [
  {
    id: 1,
    icon: 'fas fa-gift',
    title: 'Daily Rewards',
    description: 'Log in daily to claim free bonus codes, spins, and exclusive rewards that stack up over time.'
  },
  {
    id: 2,
    icon: 'fas fa-trophy',
    title: 'Tournaments',
    description: 'Compete in weekly tournaments with massive prize pools and climb the leaderboards.'
  },
  {
    id: 3,
    icon: 'fas fa-dice',
    title: 'Exclusive Games',
    description: 'Access special game modes and VIP tables not available to regular players.'
  },
  {
    id: 4,
    icon: 'fas fa-percentage',
    title: 'Bonus Cashback',
    description: 'Get up to 15% cashback on losses when playing with our partner codes.'
  }
];

const GameFeatures = () => {
  return (
    <FeatureContainer>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FeatureIcon className="feature-icon">
            <i className={feature.icon}></i>
          </FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeatureContainer>
  );
};

export default GameFeatures; 