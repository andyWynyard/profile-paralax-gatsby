import React from "react";
import PropTypes from "prop-types";
import { Divider, DividerMiddle } from "../elements/Dividers";
import styled from "styled-components";
import Img from "gatsby-image";

import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";

// import nodeImage from "../images/node.png";
import SVG from "../components/SVG";

const ImgWrapper = styled.div`
  padding: 1rem;
  width: ${props => props.width};
  margin-left: ${props => props.marginLeft};
`;

const Projects = ({ children, offset, images }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <ImgWrapper marginLeft={"50vw"} width={"100px"}>
          {images && <Img fluid={images.node} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"70vw"} width={"300px"}>
          {images && <Img fluid={images.next} />}
        </ImgWrapper>
      </UpDown>
      <UpDownWide>
        <ImgWrapper marginLeft={"10vw"} width={"300px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"40vw"} width={"200px"}>
          {images && <Img fluid={images.next} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"33vw"} width={"100px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"88vw"} width={"100px"}>
          {images && <Img fluid={images.gatsby} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"91vw"} width={"200px"}>
          {images && <Img fluid={images.graphql} />}
        </ImgWrapper>
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
    </Divider>
  </>
);

export default Projects;

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
