import styled from "styled-components";
import {ReactNode} from "react";


interface Props {
    children: ReactNode;
    $padding?: string;
    $margin?: string;
    $fontSize?: string;
    $fontWeight?: string;
    $color?: string;
    $lineColor?: string;
    $width?: string;
    $widthMobile?: string;
    $separatorDistance?: string;
}
export const Container = styled.div<Props>`
  padding: ${(props) => (props.$padding ? props.$padding : "0rem")};
  display: flex;
  margin: ${(props) => (props.$margin ? props.$margin : "0")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1.25rem")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "500")};
  color: ${(props) => (props.$color ? props.$color : "var(--color-blue-primary)")};
  align-items: center;
  text-align: center;
  width: ${(props) => (props.$widthMobile ? props.$widthMobile: props.$width ? props.$width : "auto")};
  
  @media (min-width: 720px) {
    width: ${(props) => (props.$width ? props.$width : "auto")};
  }
  &:after{
    content: '';
    flex: 1;
    border-bottom: 1px solid;
    border-color: ${(props) => (props.$lineColor ? props.$lineColor : "var(--color-gray-primary)")};
  }
  
  &:not(:empty)::after{
    margin-left: ${(props) => (props.$separatorDistance ? props.$separatorDistance : " 1.25rem")};
  }
`;