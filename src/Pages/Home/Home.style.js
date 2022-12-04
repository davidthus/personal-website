import styled from "styled-components";

export const CenterSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-right: calc(92px + 1rem);
`;

export const SmallText = styled.h2`
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
  font-size: 2.5rem;
`;

export const Name = styled.h1`
  font-family: "Courier Prime", monospace;
  font-weight: 700;
  color: #da1c07;
  font-size: 6rem;
`;

export const Intro = styled.p`
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  max-width: 550px;
  width: 100%;
`;
