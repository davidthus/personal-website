import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  Container,
  IconsWrapper,
  LeftTip,
  RightTip,
  SocialsWrapper,
  TipsWrapper,
} from "./App.style";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter.svg";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <Container>
      <SocialsWrapper>
        <IconsWrapper>
          <a href="https://github.com/davidthus" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/dvdthus" target="_blank">
            <TwitterIcon />
          </a>
        </IconsWrapper>
        <TipsWrapper>
          <LeftTip />
          <RightTip />
        </TipsWrapper>
      </SocialsWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar />
    </Container>
  );
}

export default App;
