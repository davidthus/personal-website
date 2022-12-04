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
`;
