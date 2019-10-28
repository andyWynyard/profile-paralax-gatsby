import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";
import styled from "styled-components";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";
import { colors } from "../../tailwind";
import SVG from "../components/SVG";
import ImgWrapper from "../components/ImgWrapper";

import Img from "gatsby-image";

const Contact = ({ children, offset, images }) => (
  <>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <ImgWrapper marginLeft={"50vw"} width={"100px"}>
          {images && <Img fluid={images.node} />}
        </ImgWrapper>
      </UpDown>
      <UpDownWide>
        <ImgWrapper marginLeft={"30vw"} width={"100px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"60vw"} width={"200px"}>
          {images && <Img fluid={images.graphql} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"10vw"} width={"200px"}>
          {images && <Img fluid={images.next} />}
        </ImgWrapper>
      </UpDownWide>
      <ImgWrapper marginLeft={"10vw"} width={"100px"}>
        {images && <Img fluid={images.prisma} />}
      </ImgWrapper>
      <ImgWrapper marginLeft={"-20vw"} width={"400px"}>
        {images && <Img fluid={images.react} />}
      </ImgWrapper>
      <ImgWrapper marginLeft={"50vw"} width={"800px"}>
        {images && <Img fluid={images.graphql} />}
      </ImgWrapper>
    </Divider>
  </>
);

export default Contact;

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
