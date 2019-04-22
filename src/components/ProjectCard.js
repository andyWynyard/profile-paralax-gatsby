import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-3 py-3 md:py-5 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: grid;
  grid-template-columns: 1fr 1fr;
  &:hover {
    transform: translateY(-5px);
  }
`
const ImgWrapper = styled.div`
  padding: 1rem;
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, link, children, bg, image }) => (
  <Wrapper
    href={`http://${link}`}
    target="_blank"
    rel="noopener noreferrer"
    bg={bg}
  >
    <div>
      <Text>{children}</Text>
      <Title>{title}</Title>
    </div>
    <ImgWrapper>{image && <Img fluid={image} />}</ImgWrapper>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired,
}
