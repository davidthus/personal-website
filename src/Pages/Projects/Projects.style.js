import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding-left: calc(92px + 4rem);
  padding-top: 3rem;
  padding-right: calc(2rem + 92px);
  padding-bottom: 2rem;
  min-height: 100vh;
  width: 100vw;

  @media (max-width: 700px) {
    padding-left: calc(
      clamp(1.2rem, 3vw, 2rem) + 1.5rem +
        calc(36px + (clamp(1rem, 3vw, 2rem) * 2))
    );
    padding-right: calc(1.5rem + calc(36px + (clamp(1rem, 3vw, 2rem) * 2)));
  }
`;

export const PageHeading = styled.h1`
  font-size: 4rem;
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
  text-align: center;
`;

export const PageDesc = styled.p`
  font-size: 1.3rem;
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
  text-align: center;
  margin-top: 0.7rem;
`;

export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (min-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  min-width: 200px;
  max-width: 400px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    scale: 1.08;
  }
`;

export const ProjectName = styled.h2`
  font-size: 1.5rem;
  color: #da1c07;
  text-align: center;
`;

export const ProjectDesc = styled.p`
  font-size: 1.1rem;
  color: #f0f0f0;
  text-align: center;
`;
