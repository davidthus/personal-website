import styled from "styled-components";

export const PageContainer = styled.main`
  flex-direction: column;
  align-items: center;
  padding-left: calc(92px + 4rem);
  padding-top: 4rem;
  padding-right: calc(4rem + 92px);
  padding-bottom: 2rem;
  min-height: 100vh;
  width: 100vw;

  @media (max-width: 700px) {
    padding-left: calc(
      clamp(1.2rem, 3vw, 2rem) + 1.5rem +
        calc(36px + (clamp(1rem, 3vw, 2rem) * 2))
    );
  }
`;

export const PageHeading = styled.h1`
  font-size: 4rem;
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
  text-align: center;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const ArticleWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArticleHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Courier Prime", monospace;
  color: #da1c07;
`;

export const ArticleDesc = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "Courier Prime", monospace;
  color: #f0f0f0;
`;

export const ColumnsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const Column = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  color: #f0f0f0;
  font-family: "Courier Prime", monospace;
  font-weight: 700;
`;

export const Stack = styled.ul`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  padding-left: 0.85rem;
`;

export const StackItem = styled.li`
  font-size: 1rem;
  color: #f0f0f0;
  font-family: "Courier Prime", monospace;
  font-weight: 400;
`;
