import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #131112;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SocialsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
`;

export const IconsWrapper = styled.menu`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  gap: 1rem;
  background-color: #3b3538;
`;

export const TipsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftTip = styled.div`
  width: 50%;
  height: 1.5rem;
  background-color: #3b3538;
  clip-path: polygon(0 0, 0% 100%, 99% 0);
`;

export const RightTip = styled.div`
  width: 50%;
  height: 1.5rem;
  background-color: #3b3538;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
`;
