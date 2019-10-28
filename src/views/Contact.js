import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";
import styled from "styled-components";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";
import { colors } from "../../tailwind";
import SVG from "../components/SVG";

const Contact = ({ children, offset }) => (
  <>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darkest"]}
          left="-25%"
          top="5%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.green}
          left="95%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors.yellow}
          left="85%"
          top="15%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.orange} left="4%" top="20%" />
      <SVG
        icon="circle"
        width={12}
        fill={colors["grey-darkest"]}
        left="70%"
        top="60%"
      />
      <SVG icon="box" width={12} fill={colors.green} left="20%" top="30%" />
      <SVG icon="hexa" width={80} stroke={colors.green} left="40%" top="20%" />
    </Divider>
  </>
);

export default Contact;

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
