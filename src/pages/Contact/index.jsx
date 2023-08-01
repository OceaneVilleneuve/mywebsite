import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaPhoneVolume, FaLinkedinIn  } from "react-icons/fa6"
import colors from '../../utils/style/colors'
import Form from './form'

const PageContact = styled.div`
  min-height: 100vh;
`

const TitleContactPage = styled.h1`
  font-family: 'Space Mono',monospace;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 5em;
`
const PersonnalInfo = styled.div`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 3em;
`
const IconWrapper = styled.div`
  color: ${colors.third};
  padding-right: 10px;
  font-size: 15px;
`

const Flex = styled.p`
  display: flex;
`
const PaddingInfos = styled.div`
  padding-top: 4px;
`

const LinkToSocials = styled.a`
  text-decoration: none;
  color: black;
`
const PaddingName = styled.div`
padding-top: 4px;
`

const Contact = () => (
  <PageContact>
    <TitleContactPage>INFORMATIONS</TitleContactPage>
    <PersonnalInfo>
      <Flex>
        <IconWrapper>
          <FaPhoneVolume icon="fa-solid fa-phone-volume" />
        </IconWrapper>
        <PaddingInfos>
          +33 788026223
        </PaddingInfos>
      </Flex>
      <LinkToSocials href="https://www.linkedin.com/in/océane-villeneuve-746449277/" target="_blank">
        <Flex>
          <IconWrapper>
            <FaLinkedinIn icon="fa-brands fa-linkedin-in" />
          </IconWrapper>
          <PaddingName>
            LinkedIn
          </PaddingName>
        </Flex>
      </LinkToSocials>
      <LinkToSocials href="https://github.com/OceaneVilleneuve" target="_blank">
        <Flex>
          <IconWrapper>
            <FaGithub icon="fa-brands fa-github" />
          </IconWrapper>
          <PaddingName>
            GitHub
          </PaddingName>
        </Flex>
      </LinkToSocials>
    </PersonnalInfo>
    <TitleContactPage>FORMULAIRE DE CONTACT</TitleContactPage>
    <Form/>
  </PageContact>
)

export default Contact;
