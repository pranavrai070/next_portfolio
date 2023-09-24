import React from 'react';
import Link from 'next/link'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this portfolio to show all my skills and works together in a simple and efficient manner.
        </SectionText>
        <Link href="https://drive.google.com/file/d/12jhZa_Co4cbommL_H59cIKYZj_dSoHdF/view?usp=sharing" legacyBehavior>
        <a target='blank'><Button onClick={props.handleClick}>Checkout Resume</Button></a>
        </Link>
      
      </LeftSection>
    </Section>
  </>
);

export default Hero;