import React from "react";
import {
  ArticleDesc,
  ArticleHeading,
  ArticleWrapper,
  Column,
  ColumnsWrapper,
  ColumnTitle,
  PageContainer,
  PageHeading,
  Stack,
  StackItem,
  TextContainer,
} from "./About.style";

function About() {
  const skillsList = [
    {
      title: "Languages",
      list: ["Javascript", "Typescript", "CSS", "HTML"],
    },
    {
      title: "Frameworks/Libs",
      list: [
        "ReactJS",
        "Redux Toolkit",
        "NextJS",
        "styled-components",
        "expressJS",
      ],
    },
    {
      title: "Technologies",
      list: [
        "Git",
        "Github",
        "Figma",
        "VSCode",
        "Chrome DevTools",
        "Git Bash & NPM",
        "Vercel",
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeading>About</PageHeading>
      <TextContainer>
        <ArticleWrapper>
          <ArticleHeading>How it started</ArticleHeading>
          <ArticleDesc>
            Once upon a time, a boy logged into Khan Academy and started
            learning drawing and animation in Javascript. He enjoyed creating
            shapes and animating, though he stopped for some reason. Then, after
            some time (couple years) he got back into coding and started
            learning HTML and some css on Codecademy. It was on and off for a
            period until April 2021 he started a frontend engineer course. He
            learned about JS, Git, Github and how to combine all of the skills
            together. He also learnt about the backend, things such as: CRUD,
            REST APIs, express and SQL. In 2022, he applied his knowledge to
            various projects using React. Now, he is looking to work as a
            front-end web developer.
          </ArticleDesc>
        </ArticleWrapper>
        <ArticleWrapper>
          <ArticleHeading>Skills & Knowledge</ArticleHeading>
          <ColumnsWrapper>
            {skillsList.map((skills, i) => (
              <Column key={i}>
                <ColumnTitle>{skills.title}</ColumnTitle>
                <Stack>
                  {skills.list.map((item, i) => (
                    <StackItem key={i}>{item}</StackItem>
                  ))}
                </Stack>
              </Column>
            ))}
          </ColumnsWrapper>
        </ArticleWrapper>
        <ArticleWrapper>
          <ArticleHeading>Interested?</ArticleHeading>
          <ArticleDesc>
            Want a clean, bespoke website? I can make one for you. Feel free to
            contact me via twitter, discord or by email. I'll be sure to reply
            as soon as I see it.
          </ArticleDesc>
        </ArticleWrapper>
      </TextContainer>
    </PageContainer>
  );
}

export default About;
