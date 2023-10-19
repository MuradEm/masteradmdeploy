import styled from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    $alignItems?: string;
    $backgroundColor?: string;
    $padding?: string;
    $paddingMobile?: string; //When paddingMobile is not defined it will use padding if it's available
    $justifyContent?: string;
    $flexWrap?: string;
    $flexGrow?: string;
    $flex?: string;
    $gap?: string;
    $gapMobile?: string; //When gapMobile is not defined it will use gap if it's available
    $width?: string;
    $height?: string;
    $margin?: string;
    $marginMobile?: string; //When marginMobile is not defined it will use margin if it's available
    $maxWidth?: string;
    $minWidth?: string;
    $minWidthMobile?: string;
    $minHeight?: string;
}
export const Container = styled.div<Props>`
  padding: ${(props: Props) => (props.$paddingMobile ? props.$paddingMobile : props.$padding ? props.$padding : "0rem")};
  display: flex;
  flex-direction: row;
  align-items: ${(props: Props) => (props.$alignItems ? props.$alignItems : "flex-start")};
  justify-content: ${(props: Props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  flex-wrap: ${(props: Props) => (props.$flexWrap ? props.$flexWrap : "wrap")};
  flex-grow: ${(props: Props) => (props.$flexGrow ? props.$flexGrow : "0")};
  flex: ${(props: Props) => (props.$flex ? props.$flex : "0")};
  gap: ${(props: Props) => (props.$gapMobile ? props.$gapMobile : props.$gap ? props.$gap : "0.1rem")};
  width: ${(props: Props) => (props.$width ? props.$width : "auto")};
  height: ${(props: Props) => (props.$height ? props.$height : "auto")};
  margin: ${(props: Props) => (props.$marginMobile ? props.$marginMobile : props.$margin ? props.$margin : "0")};
  min-width: ${(props: Props) => (props.$minWidthMobile ? props.$minWidthMobile : props.$minWidth ? props.$minWidth : "auto")};;
  min-height: ${(props: Props) => (props.$minHeight ? props.$minHeight : "auto")};
  max-width: ${(props: Props) => (props.$maxWidth ? props.$maxWidth : "none")};
  
    @media (min-width: 720px) {
      padding: ${(props: Props) => (props.$padding ? props.$padding : "0rem")};
      gap: ${(props: Props) => (props.$gap ? props.$gap : "0.1rem")};
      margin: ${(props: Props) => (props.$margin ? props.$margin : "0")};
      min-width: ${(props: Props) => (props.$minWidth ? props.$minWidth : "auto")};
    }
`;
