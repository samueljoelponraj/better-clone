import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import aboutUsImage from '../public/about-us-image.jpg'; // Ensure you have this image in your public folder

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10%;
  background-color: #fff;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 5%;
  }
`;

const AboutContent = styled.div`
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

const AboutImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 400px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 2rem;
  }
`;

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 10%;
  text-align: center;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  position: relative;
  padding: 2rem 0;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;
  }
`;

const TimelineYear = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const TimelineText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const AboutUs = () => {
  return (
    <>
      <AboutSection>
        <AboutContent>
          <Title>About Us</Title>
          <Description>
            We are on a mission to make homeownership simpler, faster, and more accessible for everyone.
          </Description>
        </AboutContent>
        <AboutImageWrapper>
          <Image src={aboutUsImage} alt="About Us" layout="responsive" width={600} height={400} />
        </AboutImageWrapper>
      </AboutSection>
      
      <Section>
        <Title>How We're Changing Homeownership</Title>
        <Description>
          We're transforming the industry with technology-driven solutions that empower homebuyers.
        </Description>
      </Section>

      <Section>
        <Title>Our Journey</Title>
        <TimelineContainer>
          <TimelineItem>
            <TimelineYear>2014</TimelineYear>
            <TimelineText>Better.com was founded to revolutionize home financing.</TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2016</TimelineYear>
            <TimelineText>Expanded nationwide, offering mortgage services across the U.S.</TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2020</TimelineYear>
            <TimelineText>Raised $200M in funding to accelerate growth.</TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2023</TimelineYear>
            <TimelineText>Served over 1 million homeowners and counting!</TimelineText>
          </TimelineItem>
        </TimelineContainer>
      </Section>
    </>
  );
};

export default AboutUs;
