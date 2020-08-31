import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import StyledLink from './StyledLink'

const Button = styled.span`
  position: relative;
  margin-top: 2rem;
  ${up('tablet')} {
    margin-top: 3.5rem;
  }
  background-color: ${(props) => (props.clicked ? 'transparent' : 'grey')};

  &,
  &::before,
  &::after {
    width: 2rem;
    ${up('tablet')} {
      width: 3rem;
    }
    height: 2px;
    display: inline-block;
  }

  &::before,
  &::after {
    content: '';
    background-color: grey;
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : '0')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : '0')};
  }
`

const ButtonWrapper = styled.label`
  background-color: #fff;
  position: fixed;
  top: 1rem;
  right: 1rem;
  height: 4rem;
  width: 4rem;
  ${up('tablet')} {
    top: 6rem;
    right: 6rem;
    height: 7rem;
    width: 7rem;
  }
  border-radius: 50%;
  z-index: 20;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  &:hover ${Button}::before {
    top: ${(props) => (props.clicked ? '0' : '-1rem')};
  }

  &:hover ${Button}::after {
    top: ${(props) => (props.clicked ? '0' : '1rem')};
  }
`

const MenuContentBackground = styled(animated.div)`
  top: 1rem;
  right: 1rem;
  height: 4rem;
  width: 4rem;
  ${up('tablet')} {
    top: 6.5rem;
    right: 6.5rem;
    height: 6rem;
    width: 6rem;
  }

  border-radius: 50%;
  position: fixed;

  background: radial-gradient(
    ${(props) => props.theme.colors.lightGrey},
    ${(props) => props.theme.colors.darkGrey}
  );
  z-index: 15;
`

const MenuListWrapper = styled(animated.div)`
  z-index: 17;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const MenuList = styled.ul`
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  font-size: 7rem;
  color: ${(props) => props.theme.darkGrey};

  &:hover {
    color: ${(props) => props.theme.lightGrey};
  }
`

const items = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Blog', link: '/blog' },
  { name: 'Products', link: '/products' },
]

const Menu = () => {
  const [clicked, setClicked] = useState(false)
  const menuBackgroundAnimation = useSpring({
    transform: clicked ? `scale(100)` : `scale(0)`,
  })
  const navAnimation = useSpring({
    transform: clicked
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(0, -200%, 0) scale(1)`,
  })
  return (
    <>
      <ButtonWrapper clicked={clicked} onClick={() => setClicked(!clicked)}>
        <Button clicked={clicked} />
      </ButtonWrapper>

      <MenuContentBackground style={menuBackgroundAnimation} />
      <MenuListWrapper style={navAnimation}>
        <MenuList>
          {items.map((item, index) => (
            <MenuListItem key={index}>
              <StyledLink onClick={() => setClicked(false)} to={`${item.link}`}>
                {item.name}
              </StyledLink>
            </MenuListItem>
          ))}
        </MenuList>
      </MenuListWrapper>
    </>
  )
}

export default Menu
