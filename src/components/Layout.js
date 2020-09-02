import React from 'react'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import SEO from './SEO'
import 'typeface-montserrat'
// import 'typeface-open-sans'
import 'typeface-raleway'

const theme = {
  colors: {
    primary: '#f5f5f5',
    secondary: '#e5e5e5',
    lightGrey: '#c9c9c9',
    mediumGrey: '#A9A9A9',
    darkGrey: '#2f2f2f',
    fontColor: '#0d0d0d',
  },
  fonts: ['Raleway', 'Montserrat'],
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <GlobalStyle />
    <main>{children}</main>
  </ThemeProvider>
)

export default Layout
