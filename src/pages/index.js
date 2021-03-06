import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
import { Typography } from '@andy-wynyard/mcclane-components'
// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { SimpleMenu } from '../components/atoms'
import { GalleryLink } from '../components/atoms'

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

const { H1 } = Typography

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
  const { site } = data
  const node = data.node.childImageSharp.fluid
  const react = data.react.childImageSharp.fluid
  const gatsby = data.gatsby.childImageSharp.fluid
  const next = data.nextjs.childImageSharp.fluid
  const prisma = data.prisma.childImageSharp.fluid
  const graphql = data.graphql.childImageSharp.fluid

  const images = {
    node,
    react,
    gatsby,
    next,
    prisma,
    graphql,
  }

  cardData.map((item) => (item.image = data[item.name].childImageSharp.fluid))
  return (
    <Layout>
      <SimpleMenu />
      <GalleryLink to="/gallery"></GalleryLink>
      <Parallax pages={5}>
        <Hero images={images} offset={0}>
          <BigTitle>
            Hello, <br /> I'm Andy Wynyard.
          </BigTitle>
          <Subtitle>JS and JAM stack dev...</Subtitle>
        </Hero>
        <Projects images={images} offset={1}>
          <Title>Tech Stack</Title>
          <ProjectsWrapper>
            {cardData.map((item, i) => (
              <ProjectCard
                key={i}
                image={item.image}
                title={item.title}
                link={item.link}
                bg={item.bg}
              >
                {item.text}
              </ProjectCard>
            ))}
          </ProjectsWrapper>
        </Projects>
        <About images={images} offset={3}>
          <Title titleColor="#f8f8f8">About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>{site.siteMetadata.aboutSub}</AboutSub>
          </AboutHero>
          <AboutDesc>{site.siteMetadata.aboutDesc}</AboutDesc>
        </About>
        <Contact images={images} offset={4}>
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
    </Layout>
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
    gatsby: file(name: { eq: "gatsby" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nextjs: file(name: { eq: "nextjs" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    node: file(name: { eq: "node" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    prisma: file(name: { eq: "prisma" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    react: file(name: { eq: "react" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    graphql: file(name: { eq: "graphql" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
