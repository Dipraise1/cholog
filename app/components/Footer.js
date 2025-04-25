'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #0a0a0f;
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 102, 0, 0.3), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
`;

const LogoText = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: 'Oswald', sans-serif;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(45deg, var(--primary), #ff9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 102, 0, 0.3);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), transparent);
    border-radius: 2px;
    opacity: 0.5;
  }
`;

const FooterAbout = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
  }
`;

const ColumnTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 2.2;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    margin-top: 4px;
    flex-shrink: 0;
    color: var(--primary);
  }
`;

const BottomBar = styled.div`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    gap: 1rem;
  }
`;

const BottomLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <LogoText>Chologg</LogoText>
          </FooterLogo>
          <FooterAbout>
            Chologg is your gateway to the best gambling and gaming platforms. 
            Get exclusive rewards, bonuses, and discover new opportunities to win big.
          </FooterAbout>
          <SocialLinks>
            <SocialLink 
              href="https://discord.gg/chologg" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image 
                src="/BetJuicy_files/DiscordGlowing.svg"
                alt="Discord"
                width={20}
                height={20}
              />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com/chologg" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image 
                src="/BetJuicy_files/TwitterGlowing.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </SocialLink>
            <SocialLink 
              href="https://youtube.com/chologg" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image 
                src="/BetJuicy_files/YoutubeGlowing.svg"
                alt="YouTube"
                width={20}
                height={20}
              />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <li>
              <Link href="/" passHref>
                <FooterLink>Home</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/games" passHref>
                <FooterLink>Games</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" passHref>
                <FooterLink>Leaderboard</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/promotions" passHref>
                <FooterLink>Promotions</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <FooterLink>About Us</FooterLink>
              </Link>
            </li>
          </LinkList>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Top Games</ColumnTitle>
          <LinkList>
            <li>
              <Link href="/games/casesgg" passHref>
                <FooterLink>CasesGG</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/games/csgo-big" passHref>
                <FooterLink>CSGO Big</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/games/stake" passHref>
                <FooterLink>Stake</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/games/roobet" passHref>
                <FooterLink>Roobet</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/games/csgo-roll" passHref>
                <FooterLink>CSGO Roll</FooterLink>
              </Link>
            </li>
          </LinkList>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactItem>
            <EmailIcon />
            <span>support@chologg.com</span>
          </ContactItem>
          <ContactItem>
            <LocationIcon />
            <span>Los Angeles, California, United States</span>
          </ContactItem>
          <ContactItem>
            <PhoneIcon />
            <span>+1 (800) 123-4567</span>
          </ContactItem>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <Copyright>
          © {new Date().getFullYear()} Chologg. All rights reserved.
        </Copyright>
        
        <BottomLinks>
          <Link href="/terms" passHref>
            <BottomLink>Terms & Conditions</BottomLink>
          </Link>
          <Link href="/privacy" passHref>
            <BottomLink>Privacy Policy</BottomLink>
          </Link>
          <Link href="/responsible-gambling" passHref>
            <BottomLink>Responsible Gambling</BottomLink>
          </Link>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 