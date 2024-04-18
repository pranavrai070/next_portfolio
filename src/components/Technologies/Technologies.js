import React from 'react';
import { DiFirebase, DiReact, DiZend ,DiDjango,DiNodejsSmall,DiMongodb,DiMysql} from 'react-icons/di';
import { SiNextdotjs,SiThreedotjs,SiMui } from "react-icons/si";
import { FaCss3,FaGitAlt,FaChrome  } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          {" "}
          <SiNextdotjs size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
          {"  "}
          <DiDjango size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="3rem" />
          {" "}
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            Experience with <br />
            dtabases like SQL and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaCss3 size="3rem" />
          {" "}
          <SiMui size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS and Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiThreedotjs size="3rem" />
          {" "}
          <TbBrandFramerMotion size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
            libraries like Framer Motion and Three.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaGitAlt size="3rem" />
          {" "}
          <FaChrome  size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Git and Chrome Developer Tools
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
