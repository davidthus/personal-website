import React, { useState } from "react";
import { ReactComponent as DiscordIcon } from "../../assets/icondiscord.svg";
import { ReactComponent as GithubIcon } from "../../assets/icongithub.svg";
import { ReactComponent as GmailIcon } from "../../assets/icongmail.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icontwitter.svg";
import {
  IconsWrapper,
  LeftTip,
  RightTip,
  SocialsWrapper,
  TipsWrapper,
  Tooltip,
  TooltipIconWrapper,
  TooltipWrapper,
} from "./Ribbon.style";

function Ribbon() {
  const [discordTooltipOpen, setDiscordTooltipOpen] = useState(false);
  const [gmailTooltipOpen, setGmailTooltipOpen] = useState(false);

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
          <TooltipIconWrapper
            onClick={() => setDiscordTooltipOpen((prev) => !prev)}
          >
            <DiscordIcon />
          </TooltipIconWrapper>
          {discordTooltipOpen && <Tooltip>QUIXOTE#6325</Tooltip>}
        </TooltipWrapper>
        <TooltipWrapper>
          <TooltipIconWrapper
            onClick={() => setGmailTooltipOpen((prev) => !prev)}
          >
            <GmailIcon />
          </TooltipIconWrapper>
          {gmailTooltipOpen && <Tooltip>nickelrichie05@gmail.com</Tooltip>}
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
