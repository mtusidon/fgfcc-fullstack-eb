import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 48px 48px 48px;
  width: 100%;
`;

const Container = styled.nav`
  margin: auto;
  max-width: 640px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;


export function LocationPage({ page, ...rest }) {
  return (
    <Wrapper color={page.color} {...rest}>
      <Container>
        <Title>
          Come Join Us!
        </Title>

        <Description>
          <iframe
              src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.634173328375!2d-84.95677368450747!3d32.50920550489889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cccb95d2b8831%3A0x9d6ab0fa0b0ce3e4!2sKorean%20Full%20Gospel%20Columbus%20Church!5e0!3m2!1sen!2sus!4v1621410005849!5m2!1sen!2sus"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </Description>

        
      </Container>
    </Wrapper>
  );
}