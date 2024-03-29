import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-top: 2px solid #3b3538;
  border-left: 2px solid #3b3538;
  border-bottom: 2px solid #3b3538;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  transition: 0.2s;

  @media (max-width: 845px) {
    background: #131112;
    top: auto;
    bottom: 0;
    flex-direction: row;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
    padding-inline: 1rem;
    gap: 2rem;
    width: 100%;
    border-left: 0;
    border-right: 0;
  }
`;

export const Svg = styled.svg`
  fill: ${(props) => (props.active ? "#49F704" : "#3B3538")};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    fill: #49f704;
  }
`;

export const Logo = styled.aside`
  font-size: 2.5rem;
  font-family: "Courier Prime", monospace;
  font-weight: 700;
  color: #da1c07;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b3538;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 845px) {
    padding-bottom: 0;
    border-right: 2px solid #3b3538;
    border-bottom: 0;
    width: auto;
    padding-right: 2rem;
  }

  @media (max-width: 370px) {
    display: none;
  }
`;
