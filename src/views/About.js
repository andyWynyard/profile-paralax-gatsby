import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import ImgWrapper from "../components/ImgWrapper";

import Img from "gatsby-image";

const About = ({ children, offset, images }) => (
  <>
    <Divider
      bg="linear-gradient(to right, #23262b 0%, green 100%) "
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <ImgWrapper marginLeft={"-50vw"} width={"900px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>

        <ImgWrapper marginLeft={"60vw"} width={"500px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>
      </UpDown>
      <UpDownWide>
        <ImgWrapper marginLeft={"70vw"} width={"300px"}>
          {images && <Img fluid={images.graphql} />}
        </ImgWrapper>
      </UpDownWide>
      <ImgWrapper marginLeft={"-10vw"} width={"100px"}>
        {images && <Img fluid={images.next} />}
      </ImgWrapper>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
