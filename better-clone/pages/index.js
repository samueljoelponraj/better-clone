import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../public/hero-image.jpg'; // Ensure you have this image in your public folder

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10%;
  background-color: #f8f9fa;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 5%;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 500px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 400px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 2rem;
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Homeownership Made Easy</Title>
        <Description>
          Experience a simpler, faster, and better way to buy or refinance your home.
        </Description>
        <CTAButton href="/start">Get Started</CTAButton>
      </HeroContent>
      <HeroImageWrapper>
        <Image src={heroImage} alt="Home Banner" layout="responsive" width={600} height={400} />
      </HeroImageWrapper>
    </HeroSection>
  );
};

export default Home;
