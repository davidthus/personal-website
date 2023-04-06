import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
          <CopyToClipboard
            text={"QUIXOTE#6325"}
            onCopy={() => {
              setDiscordTooltipOpen((prev) => !prev);
              setGmailTooltipOpen(false);
            }}
          >
            <TooltipIconWrapper>
              <DiscordIcon />
            </TooltipIconWrapper>
          </CopyToClipboard>
          {discordTooltipOpen && <Tooltip>Copied discord tag!</Tooltip>}
        </TooltipWrapper>

        <TooltipWrapper>
          <CopyToClipboard
            text={"nickelrichie05@gmail.com"}
            onCopy={() => {
              setGmailTooltipOpen((prev) => !prev);
              setDiscordTooltipOpen(false);
            }}
          >
            <TooltipIconWrapper>
              <GmailIcon />
            </TooltipIconWrapper>
          </CopyToClipboard>
          {gmailTooltipOpen && <Tooltip>Copied gmail!</Tooltip>}
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
