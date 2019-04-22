import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

// Data
import { cardData } from '../../static/staticData'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    /* grid-template-columns: 1fr; */
    grid-gap: 3rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-dark text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-dark font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = ({ data }) => {
  const { allFile, site } = data
  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hello, <br /> I'm Andy Wynyard.
          </BigTitle>
          <Subtitle>JS and JAM stack dev...</Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Tech Stack</Title>
          <ProjectsWrapper>
            {cardData.map((item, i) => (
              <ProjectCard
                key={i}
                image={allFile.edges[i].node.childImageSharp.fluid}
                title={item.title}
                link={item.link}
                bg={item.bg}
              >
                {item.text}
              </ProjectCard>
            ))}
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title titleColor="#f8f8f8">About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>{site.siteMetadata.aboutSub}</AboutSub>
          </AboutHero>
          <AboutDesc>{site.siteMetadata.aboutDesc}</AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Say <a href="mailto:andrew.wynyard@gmail.com">Hi</a> or find me on
              other platforms:{' '}
              <a href="https://github.com/andyWynyard">Github</a> &{' '}
              <a href="https://twitter.com/AndyWynyard">Twitter</a>
            </ContactText>
          </Inner>
          <Footer />
        </Contact>
      </Parallax>
    </>
  )
}

export default Index

export const query = graphql`
  query {
    allFile(filter: { ext: { regex: "/(.jpg|.png)/" } }) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        aboutSub
        aboutDesc
      }
    }
  }
`
