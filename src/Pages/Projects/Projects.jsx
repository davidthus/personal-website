import React from "react";
import { Link } from "react-router-dom";
import {
  CardsContainer,
  PageContainer,
  PageDesc,
  PageHeading,
  ProjectCardWrapper,
  ProjectDesc,
  ProjectName,
} from "./Projects.style";
import { projectWriteups } from "./writeups";

function Projects() {
  return (
    <PageContainer>
      <header>
        <PageHeading>Projects</PageHeading>
        <PageDesc>
          Check out my creations! Github repo and live site linked in each
          project.
        </PageDesc>
      </header>
      <CardsContainer>
        {projectWriteups.map((project, i) => (
          <Link
            key={i}
            to={"/projects/" + project.url}
            style={{ textDecoration: "none" }}
          >
            <ProjectCardWrapper>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>
            </ProjectCardWrapper>
          </Link>
        ))}
      </CardsContainer>
    </PageContainer>
  );
}

export default Projects;
