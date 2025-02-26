import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import chatBotImage from '../public/start-image.jpg';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const ChatBox = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ChatIcon = styled.div`
  position: absolute;
  top: -2.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  background: ${({ isUser }) => (isUser ? '#007aff' : '#e5e5ea')};
  color: ${({ isUser }) => (isUser ? 'white' : 'black')};
  padding: 0.8rem;
  border-radius: 20px;
  max-width: 80%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin: 0.5rem 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

const OptionButton = styled.button`
  background: #007aff;
  color: white;
  border: none;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

const StartPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! What brings you here today?', isUser: false }
  ]);

  const handleOptionClick = (text) => {
    setMessages([...messages, { text, isUser: true }]);
  };

  return (
    <StartContainer>
      <ChatBox>
        <ChatIcon>
          <Image src={chatBotImage} alt="Chatbot" width={50} height={50} />
        </ChatIcon>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>{msg.text}</Message>
        ))}
        <OptionsContainer>
          <OptionButton onClick={() => handleOptionClick('I want to buy a home')}>I want to buy a home</OptionButton>
          <OptionButton onClick={() => handleOptionClick('I want to refinance my home')}>I want to refinance my home</OptionButton>
          <OptionButton onClick={() => handleOptionClick('I need help with something else')}>I need help with something else</OptionButton>
        </OptionsContainer>
      </ChatBox>
    </StartContainer>
  );
};

export default StartPage;
