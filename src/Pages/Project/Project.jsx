import React from "react";
import { useParams } from "react-router-dom";
import { projectWriteups } from "../Projects/writeups";
import {
  ExternalLink,
  LinksWrapper,
  PageContainer,
  ProjectDesc,
  ProjectName,
  RequirementsTitle,
  Stack,
  StackItem,
  Tool,
  ToolsWrapper,
} from "./Project.style";

function Project() {
  const { name } = useParams();
  const projectToView = projectWriteups.find((project) => project.url === name);

  return (
    <PageContainer>
      <ProjectName>{projectToView.name}</ProjectName>
      <ProjectDesc>{projectToView.description}</ProjectDesc>
      <ToolsWrapper>
        {projectToView.tools.map((tool, i) => (
          <Tool key={i}>#{tool}</Tool>
        ))}
      </ToolsWrapper>
      <LinksWrapper>
        <ExternalLink href={projectToView.liveSite} target="_blank">
          Live Site
        </ExternalLink>
        <ExternalLink href={projectToView.github} target="_blank">
          Github
        </ExternalLink>
      </LinksWrapper>
      <RequirementsTitle>Project Requirements:</RequirementsTitle>
      <Stack>
        {projectToView.requirements.map((item, i) => (
          <StackItem>{item}</StackItem>
        ))}
      </Stack>
    </PageContainer>
  );
}

export default Project;
