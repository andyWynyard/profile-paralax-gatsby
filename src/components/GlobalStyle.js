import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import 'typeface-raleway'

const GlobalStyle = createGlobalStyle` 

  ${normalize()}
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #f8f8f8;
    font-family: 'Raleway';
    font-size: 67.5%;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }


`

export default GlobalStyle
