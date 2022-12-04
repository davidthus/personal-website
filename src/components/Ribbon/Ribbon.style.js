import styled from "styled-components";

export const SocialsWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: clamp(1.2rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(1rem, 3vw, 2rem);
  gap: 1rem;
  background-color: #3b3538;
`;

export const TipsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TooltipWrapper = styled.div`
  position: relative;
`;

export const DiscordWrapper = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 5.7px;
  left: 3.5rem;
  background-color: #131112;
  border: 1.5px solid #49f704;
  padding: 0.3rem 0.3rem 0.1rem 0.3rem;
  font-size: 1rem;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Courier Prime", monospace;
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
