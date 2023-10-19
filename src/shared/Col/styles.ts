import styled from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    $alignItems?: string;
    $padding?: string;
    $paddingMobile?: string; //When paddingMobile is not defined it will use padding if it's available
    $justifyContent?: string;
    $flexWrap?: string;
    $flex?: string;
    $gap?: string;
    $gapMobile?: string; //When gapMobile is not defined it will use gap if it's available
    $width?: string;
    $height?: string;
    $margin?: string;
    $marginMobile?: string; //When marginMobile is not defined it will use margin if it's available
    $maxWidth?: string;
    $minWidth?: string;
    $minHeight?: string;
    $overflowY?: string;
}

export const Container = styled.div<Props>`
  padding: ${(props) => (props.$paddingMobile ? props.$paddingMobile : props.$padding ? props.$padding : "0rem")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "flex-start")};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  flex-wrap: ${(props) => (props.$flexWrap ? props.$flexWrap : "wrap")};
  flex: ${(props) => (props.$flex ? props.$flex : "0")};
  gap: ${(props) => (props.$gapMobile ? props.$gapMobile : props.$gap ? props.$gap : "0.1rem")};
  width: ${(props) => (props.$width ? props.$width : "auto")};
  height: ${(props) => (props.$height ? props.$height : "auto")};
  margin: ${(props) => (props.$marginMobile ? props.$marginMobile : props.$margin ? props.$margin : "0")};
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "auto")};
  min-width: ${(props) => (props.$minWidth ? props.$minWidth : "auto")};
  min-height: ${(props) => (props.$minHeight ? props.$minHeight : "auto")};
  overflow-y: ${(props) => (props.$overflowY ? props.$overflowY : "unset")};
  
    @media (min-width: 720px) {
      gap: ${(props) => (props.$gap ? props.$gap : "0.1rem")};
      padding: ${(props) => (props.$padding ? props.$padding : "0rem")};
      margin: ${(props) => (props.$margin ? props.$margin : "0")};
    }
`;
