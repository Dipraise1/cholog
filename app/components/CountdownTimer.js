'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const TimerTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TimerDigits = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Digit = styled(motion.div)`
  width: 70px;
  height: 80px;
  background: linear-gradient(145deg, #222, #171717);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  font-family: 'Teko', sans-serif;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
    font-size: 2rem;
  }
`;

const UnitLabel = styled.span`
  font-size: 0.8rem;
  color: #aaa;
  text-transform: uppercase;
`;

const CountdownTimer = ({ targetDate, title }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setKey(prevKey => prevKey + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <TimerContainer>
      <TimerTitle>{title || 'Tournament Starts In'}</TimerTitle>
      <TimerDigits>
        <TimeUnit>
          <Digit
            key={`days-${key}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatTime(timeLeft.days || 0)}
          </Digit>
          <UnitLabel>Days</UnitLabel>
        </TimeUnit>
        <TimeUnit>
          <Digit
            key={`hours-${key}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {formatTime(timeLeft.hours || 0)}
          </Digit>
          <UnitLabel>Hours</UnitLabel>
        </TimeUnit>
        <TimeUnit>
          <Digit
            key={`minutes-${key}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {formatTime(timeLeft.minutes || 0)}
          </Digit>
          <UnitLabel>Mins</UnitLabel>
        </TimeUnit>
        <TimeUnit>
          <Digit
            key={`seconds-${key}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={timeLeft.seconds % 2 === 0 ? 'glow-effect' : ''}
          >
            {formatTime(timeLeft.seconds || 0)}
          </Digit>
          <UnitLabel>Secs</UnitLabel>
        </TimeUnit>
      </TimerDigits>
    </TimerContainer>
  );
};

export default CountdownTimer; 