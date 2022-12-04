import React, { useState } from "react";
import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import {
  DiscordWrapper,
  IconsWrapper,
  LeftTip,
  RightTip,
  SocialsWrapper,
  TipsWrapper,
  Tooltip,
} from "./Ribbon.style";

function Ribbon() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <SocialsWrapper>
      <IconsWrapper>
        <a href="https://github.com/davidthus" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/dvdthus" target="_blank">
          <TwitterIcon />
        </a>
        <DiscordWrapper>
          <div onClick={() => setTooltipOpen((prev) => !prev)}>
            <DiscordIcon />
          </div>
          {tooltipOpen && <Tooltip>QUIXOTE#6325</Tooltip>}
        </DiscordWrapper>
      </IconsWrapper>
      <TipsWrapper>
        <LeftTip />
        <RightTip />
      </TipsWrapper>
    </SocialsWrapper>
  );
}

export default Ribbon;
