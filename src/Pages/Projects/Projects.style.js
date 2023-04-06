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

  @media (max-width: 845px) {
    padding-bottom: 100px;
  }

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
  gap: 1rem;
  max-width: 1250px;

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
  border-radius: 3px;
  padding: 2rem 1.75rem;
  background-color: #3b3538;
  align-items: flex-start;
`;

export const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FolderWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

export const ExternalLink = styled.a`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 5px 7px;
  & svg {
    width: 22px;
    height: 22px;
    margin-top: -4px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectName = styled.h2`
  font-size: 1.4rem;
  color: #f0f0f0;
  text-align: left;
  margin-bottom: 10px;
`;

export const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #f0f0f0;
  text-align: left;
  margin-bottom: 20px;
`;

export const TechList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  list-style: none;
  flex: 1;
  align-content: flex-end;
`;

export const Technology = styled.li`
  font-size: 0.8rem;
  color: #f0f0f0;
  padding: 0.2rem 0.5rem;
  background-color: #131112;
  border-radius: 2px;
`;
