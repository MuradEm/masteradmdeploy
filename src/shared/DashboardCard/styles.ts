import styled from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    $backgroundColor?: string;
    $padding?: string;
    $borderRadius?: string;
    $borderRadiusMobile?: string;
    $justifyContent?: string;
    $flexWrap?: string;
    $flexDirection?: string;
    $flex?: string;
    $width?: string;
    $widthMobile?: string;
    $height?: string;
    $heightMobile?: string;
    $margin?: string;
    $minWidth?: string;
    $minWidthMobile?: string;
    $minHeight?: string;
    $minHeightMobile?: string;
    $title: string;
    $titleColor?: string;
    $titleSize?: string;
}

export const Container = styled.div<Props>`
  align-items: center;
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "var(--color-white-primary)")};
  border-radius: ${(props) => (props.$borderRadiusMobile ? props.$borderRadiusMobile : props.$borderRadius ? props.$borderRadius : "1.5625rem")};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);;
  padding: ${(props) => (props.$padding ? props.$padding : "0.313rem")};
  display: flex;
  flex-direction: ${(props) =>
          props.$flexDirection ? props.$flexDirection : "column"};
  justify-content: ${(props) =>
          props.$justifyContent ? props.$justifyContent : "flex-start"};
  flex-wrap: ${(props) => (props.$flexWrap ? props.$flexWrap : "wrap")};
  flex: ${(props) => (props.$flex ? props.$flex : "0")};
  margin: ${(props) => (props.$margin ? props.$margin : "0")};
  min-width: ${(props) => (props.$minWidthMobile ? props.$minWidthMobile : props.$minWidth ? props.$minWidth : "22.1875rem")};
  min-height: ${(props) => (props.$minHeightMobile ? props.$minHeightMobile : props.$minHeight ? props.$minHeight : "10.625rem")};
  width: ${(props) => (props.$widthMobile ? props.$widthMobile : props.$width ? props.$width : "100dvw")};
  height: ${(props) => (props.$heightMobile ? props.$heightMobile : props.$height ? props.$height : "10.625rem")};

  @media (min-width: 720px) {
    min-width: ${(props) => (props.$minWidth ? props.$minWidth : "33.125rem")};
    min-height: ${(props) => (props.$minHeight ? props.$minHeight : "15.625rem")};
    padding: ${(props) => (props.$padding ? props.$padding : "0.63rem")};
    width: ${(props) => (props.$width ? props.$width : "33.125rem")};
    height: ${(props) => (props.$height ? props.$height : "15.625rem")};
  }
  
  .contentStyle{
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
  }
  
  .titleStyle{
    color: ${(props) => (props.$titleColor ? props.$titleColor : "var(--color-gray-alternative)")};
    font-size: ${(props) => (props.$titleSize ? props.$titleSize : "1rem")};
    text-align: center;
    font-weight: 500;
    line-height: 20px;
    
    @media (min-width: 720px) {
      font-size: ${(props) => (props.$titleSize ? props.$titleSize : "1.25rem")};
    }
  }
`;
