import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

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
  font-size: 1.5rem;
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
const BasicRows = () => <Gallery photos={photos} />;

export function OurCommunityPage({ page, ...rest }) {
  return (
    <Wrapper color={page.color} {...rest}>
      <Container>
        <Title>
        <i>"For where two or three are gathered in my name, there am I among them.” - Matthew 18:20</i>
        </Title>

        <Description>
          <BasicRows />
        </Description>

        
      </Container>
    </Wrapper>
  );
}