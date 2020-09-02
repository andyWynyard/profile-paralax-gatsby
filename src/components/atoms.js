import React from 'react'
import { color } from 'styled-system'
import styled from 'styled-components'
import { Typography } from '@andy-wynyard/mcclane-components'

import { Link } from 'gatsby'
const { H1 } = Typography

export const GalleryLink = styled(Link)`
  text-transform: uppercase;
  margin: 1rem;
  text-decoration: none;
`
export const MenuWrapper = styled.div`
  text-transform: uppercase;
  z-index: 100;
  position: fixed;
  top: 1rem;
  right: 3rem;
  display: flex;
`

export const menuItems = [
  { text: 'Gallery', link: '/gallery' },
  { text: 'Home', link: '/' },
]

export const SimpleMenu = ({ items = menuItems }) => {
  return (
    <MenuWrapper>
      {items.map((item, index) => (
        <GalleryLink to={item.link} key={index}>
          <H1 color="darkGrey" fontFamily="Montserrat">
            {item.text}
          </H1>
        </GalleryLink>
      ))}
    </MenuWrapper>
  )
}
