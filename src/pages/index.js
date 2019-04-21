import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

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

const Index = props => {
  console.log('props', props)
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
            <ProjectCard
              image={props.data.reactImg.childImageSharp.fluid}
              title="React"
              link="https://reactjs.org/"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              React, talk about that here
            </ProjectCard>
            <ProjectCard
              image={props.data.gatsbyImg.childImageSharp.fluid}
              title="Gatsby"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              Gatsby Stuff
            </ProjectCard>
            <ProjectCard
              image={props.data.nextjsImg.childImageSharp.fluid}
              title="NextJS"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Talk about Next here
            </ProjectCard>
            <ProjectCard
              image={props.data.nodeImg.childImageSharp.fluid}
              title="Node"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Talk about node here
            </ProjectCard>
            <ProjectCard
              image={props.data.graphqlImg.childImageSharp.fluid}
              title="GraphQL"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              GraphQL stuff goes here
            </ProjectCard>
            <ProjectCard
              image={props.data.prismaImg.childImageSharp.fluid}
              title="Prisma"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Talk about Prisma APIs here.
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title titleColor="#f8f8f8">About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              The English language can not fully capture the depth and
              complexity of my thoughts. So I'm incorporating Emoji into my
              speech to better express myself. Winky face.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            You know the way you feel when you see a picture of two otters
            holding hands? That's how you're gonna feel every day. My mother
            cried the day I was born because she knew she’d never be prettier
            than me. You should make me your campaign manager. I was born for
            politics. I have great hair and I love lying. Captain? The kids want
            to know where Paulie the Pigeon is. I told them he got sucked up
            into an airplane engine, is that all right?
          </AboutDesc>
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
    gatsbyImg: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    reactImg: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    graphqlImg: file(relativePath: { eq: "graphql.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nextjsImg: file(relativePath: { eq: "nextjs.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nodeImg: file(relativePath: { eq: "node.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    prismaImg: file(relativePath: { eq: "prisma.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
