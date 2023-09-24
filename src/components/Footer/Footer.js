import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/Si'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-8808800044">+91-8808800044</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pranavrai070@gmail.com">
            pranavrai070@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn Innovate and Create</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/pranavrai070" target='blank'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/pranavrai070/" target='blank'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/pranavrai070/" target='blank'>
          <SiLeetcode size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
