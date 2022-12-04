import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, NavbarWrapper, Svg } from "./Navbar.style";

function Navbar() {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <Logo>D.</Logo>
      <Link to="/">
        <Svg
          active={location.pathname === "/" && true}
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#3B3538"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </Svg>
      </Link>
      <Link to="/about">
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          active={location.pathname === "/about" && true}
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#3B3538"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </Svg>
      </Link>
      <Link to="/projects">
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          active={location.pathname === "/projects" && true}
          enable-background="new 0 0 20 20"
          height="48px"
          viewBox="0 0 20 20"
          width="48px"
          fill="#3B3538"
        >
          <g>
            <rect fill="none" height="20" width="20" />
          </g>
          <g>
            <g>
              <rect
                height="5.5"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.3383 13.8538)"
                width="2"
                x="13.05"
                y="10.62"
              />
              <path d="M14.23,8.98c1.38,0,2.5-1.12,2.5-2.5c0-0.51-0.15-0.98-0.42-1.38l-2.08,2.08l-0.71-0.71l2.08-2.08 c-0.4-0.26-0.87-0.42-1.38-0.42c-1.38,0-2.5,1.12-2.5,2.5c0,0.32,0.07,0.63,0.18,0.91L10.69,8.6L9.64,7.54l0.71-0.71L8.93,5.42 L10.34,4C9.56,3.22,8.29,3.22,7.51,4L4.69,6.83l1.06,1.06l-2.13,0L3.27,8.24l2.83,2.83l0.35-0.35L6.46,8.6l1.06,1.06l0.71-0.71 l1.06,1.06l-4.6,4.6l1.41,1.41l7.22-7.22C13.6,8.91,13.91,8.98,14.23,8.98z" />
            </g>
          </g>
        </Svg>
      </Link>
    </NavbarWrapper>
  );
}

export default Navbar;
