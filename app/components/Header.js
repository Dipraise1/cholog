'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeaderContainer = styled.header`
  width: 100%;
  background: rgba(15, 15, 20, 0.95);
  padding: 0.8rem 0;
  position: static;
  z-index: 100;
  
  /* Cartoon layered paper 3D style */
  box-shadow: 
    0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 0 rgba(0, 0, 0, 0.2),
    0 6px 0 rgba(0, 0, 0, 0.15),
    0 8px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(255, 102, 0, 0.4);
  
  /* Paper texture */
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(motion.div)`
  position: relative;
  width: 140px;
  height: 48px;
`;

const LogoImage = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
`;

const LogoText = styled(motion.div)`
  font-size: 2.2rem;
  font-weight: 800;
  font-family: 'Teko', sans-serif;
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

const ChineseSubtitle = styled(motion.div)`
  font-size: 1.1rem;
  margin-top: -0.3rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  display: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(90deg, #ff9900, var(--primary), #ff9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.3rem 0;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
  position: relative;
  padding: 0.5rem 0;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin: 0 0.9rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &.active {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: var(--primary);
    
    img {
      filter: brightness(1.2);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the overlay */
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 15, 0.98);
    z-index: 1000;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 30%, rgba(255, 102, 0, 0.1), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(255, 102, 0, 0.1), transparent 30%);
      z-index: -1;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/BetJuicy_files/grafitti-pattern.svg');
      opacity: 0.05;
      z-index: -1;
    }
  }
`;

const MobileMenuContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const MobileLogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
`;

const MobileLogoText = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  font-family: 'Teko', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(45deg, var(--primary), #ff9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 102, 0, 0.3);
`;

const MobileChineseSubtitle = styled(motion.div)`
  font-size: 1.8rem;
  margin-top: 0.6rem;
  letter-spacing: 2px;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0.8rem 2rem;
  background: linear-gradient(90deg, #ff9900, var(--primary), #ff9900);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:before, &:after {
    content: '★';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary);
    font-size: 1.2rem;
  }
  
  &:before {
    left: 0;
  }
  
  &:after {
    right: 0;
  }
`;

const MobileNavItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
`;

const MobileNavItem = styled(motion(Link))`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Teko', sans-serif;
  letter-spacing: 1px;
  position: relative;
  
  &.active {
    color: var(--primary);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const MobileSocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <HeaderContainer>
      <Nav>
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <LogoContainer>
            <LogoText
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Chologg
            </LogoText>
            <ChineseSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              卓洛格游戏平台 - 最佳游戏体验
            </ChineseSubtitle>
          </LogoContainer>
        </Link>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuButton>
        
        <NavItems>
          <NavItem href="/" className="active">Home</NavItem>
          <NavItem href="/games">Games</NavItem>
          <NavItem href="/leaderboard">Leaderboard</NavItem>
          <NavItem href="/promotions">Promotions</NavItem>
        </NavItems>
        
        <RightSection>
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
                width={18}
                height={18}
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
                width={18}
                height={18}
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
                width={18}
                height={18}
              />
            </SocialLink>
          </SocialLinks>
        </RightSection>
      </Nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuContent
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <MobileLogoContainer
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <MobileLogoText>Chologg</MobileLogoText>
                <MobileChineseSubtitle
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear"
                  }}
                >
                  卓洛格游戏平台 - 最佳游戏体验
                </MobileChineseSubtitle>
              </MobileLogoContainer>
              
              <MobileNavItems>
                <MobileNavItem 
                  href="/" 
                  className="active"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </MobileNavItem>
                <MobileNavItem 
                  href="/games"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Games
                </MobileNavItem>
                <MobileNavItem 
                  href="/leaderboard"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Leaderboard
                </MobileNavItem>
                <MobileNavItem 
                  href="/promotions"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Promotions
                </MobileNavItem>
              </MobileNavItems>
              
              <MobileSocialLinks
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
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
                    width={24}
                    height={24}
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
                    width={24}
                    height={24}
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
                    width={24}
                    height={24}
                  />
                </SocialLink>
              </MobileSocialLinks>
            </MobileMenuContent>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 