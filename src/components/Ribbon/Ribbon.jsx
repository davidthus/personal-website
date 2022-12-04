import React, { useState } from "react";
import { ReactComponent as DiscordIcon } from "../../assets/icondiscord.svg";
import { ReactComponent as GithubIcon } from "../../assets/icongithub.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icontwitter.svg";
import {
  DiscordWrapper,
  IconsWrapper,
  LeftTip,
  RightTip,
  SocialsWrapper,
  TipsWrapper,
  Tooltip,
  TooltipWrapper,
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
        <TooltipWrapper>
          <DiscordWrapper onClick={() => setTooltipOpen((prev) => !prev)}>
            <DiscordIcon />
          </DiscordWrapper>
          {tooltipOpen && <Tooltip>QUIXOTE#6325</Tooltip>}
        </TooltipWrapper>
      </IconsWrapper>
      <TipsWrapper>
        <LeftTip />
        <RightTip />
      </TipsWrapper>
    </SocialsWrapper>
  );
}

export default Ribbon;
