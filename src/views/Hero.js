import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import ImgWrapper from "../components/ImgWrapper";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "../components/SVG";
import Img from "gatsby-image";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const Hero = ({ children, offset, images }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDownWide>
        <ImgWrapper marginLeft={"50vw"} width={"100px"}>
          {images && <Img fluid={images.node} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"10vw"} width={"100px"}>
          {images && <Img fluid={images.next} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"44vw"} width={"200px"}>
          {images && <Img fluid={images.react} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"70vw"} width={"200px"}>
          {images && <Img fluid={images.next} />}
        </ImgWrapper>
        <ImgWrapper marginLeft={"20vw"} width={"200px"}>
          {images && <Img fluid={images.graphql} />}
        </ImgWrapper>
      </UpDownWide>
      <ImgWrapper marginLeft={"77vw"} width={"200px"}>
        {images && <Img fluid={images.graphql} />}
      </ImgWrapper>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
