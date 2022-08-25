import React, { useState } from 'react';
import { Container, TitleContainer, ContentContainer } from './accordion.styles';

const Accordion = ({ isOpen, title, children }) => {
  const [isActive, setIsActive] = useState(isOpen);

  return (
    <Container>
      <TitleContainer onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </TitleContainer>
      {isActive && <ContentContainer>{children}</ContentContainer>}
    </Container>
  );
};

export default Accordion;