import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
  alignItems?: string;
  backgroundColor?: string;
  padding?: string;
  paddingMobile?: string; //When paddingMobile is not defined it will use padding if it's available
  justifyContent?: string;
  flexWrap?: string;
  flexGrow?: string;
  flex?: string;
  gap?: string;
  gapMobile?: string; //When gapMobile is not defined it will use gap if it's available
  width?: string;
  height?: string;
  margin?: string;
  marginMobile?: string; //When marginMobile is not defined it will use margin if it's available
  maxWidth?: string;
  minWidth?: string;
  minWidthMobile?: string;
  minHeight?: string;
}

export const Row = ({
  children,
  alignItems,
  padding,
  paddingMobile,
  justifyContent,
  flexWrap,
  flexGrow,
  flex,
  gap,
  gapMobile,
  width,
  height,
  margin,
  marginMobile,
  maxWidth,
  minWidth,
  minWidthMobile,
  minHeight,
}: Props) => {
  return (
    <Container
      $padding={padding}
      $paddingMobile={paddingMobile}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $flexWrap={flexWrap}
      $flexGrow={flexGrow}
      $flex={flex}
      $gap={gap}
      $gapMobile={gapMobile}
      $width={width}
      $height={height}
      $margin={margin}
      $marginMobile={marginMobile}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $minWidthMobile={minWidthMobile}
      $minHeight={minHeight}
    >
      {children}
    </Container>
  );
};
