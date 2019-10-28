import React from "react";
import PropTypes from "prop-types";
import { Divider, DividerMiddle } from "../elements/Dividers";
import styled from "styled-components";
import ImgWrapper from "../components/ImgWrapper";

import Img from "gatsby-image";

import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";

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
      <ImgWrapper marginLeft={"20vw"} width={"200px"}>
        {images && <Img fluid={images.graphql} />}
      </ImgWrapper>
    </Divider>
  </>
);

export default Projects;

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
