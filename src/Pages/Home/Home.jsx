import React from "react";
import { CenterSection, Intro, Name, SmallText } from "./Home.style";

function Home() {
  return (
    <CenterSection>
      <SmallText>Hello I am </SmallText>
      <Name>davidthus</Name>
      <Intro>
        A front-end web developer who has many aspirations and likes to build
        more complex projects as time goes on. Check out the rest of the website
        to find out more and see some projects...
      </Intro>
    </CenterSection>
  );
}

export default Home;
