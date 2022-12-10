import styled from "styled-components";

export const PageContainer = styled.main`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 1rem;
  padding-left: calc(92px + 4rem);
  padding-top: 3rem;
  padding-right: calc(2rem + 92px);
  padding-bottom: 2rem;
  min-height: 100vh;
  width: 100vw;
`;

export const ProjectName = styled.h1`
  font-size: 3rem;
  color: #f0f0f0;
`;
export const ProjectDesc = styled.h1`
  font-size: 1.3rem;
  color: #f0f0f0;
  font-weight: 400;
  text-align: center;
`;

export const ToolsWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

export const Tool = styled.li`
  color: #da1c07;
  font-size: 1rem;
  font-weight: 700;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export const ExternalLink = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: #49f704;
  transition: 0.4s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const RequirementsTitle = styled.h2`
  font-size: 2rem;
  color: #da1c07;
  margin-top: 2rem;
  text-align: center;
`;

export const Stack = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const StackItem = styled.li`
  font-size: 1.1;
  color: #f0f0f0;
  text-align: center;
`;
