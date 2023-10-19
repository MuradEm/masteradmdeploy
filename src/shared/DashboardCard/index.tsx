import { ReactNode } from "react";
import { Container } from "./styles";
import { Col } from "@/shared/Col";


interface Props {
  children: ReactNode;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  borderRadiusMobile?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexDirection?: string;
  flex?: string;
  width?: string;
  widthMobile?: string;
  height?: string;
  heightMobile?: string;
  margin?: string;
  minWidth?: string;
  minWidthMobile?: string;
  minHeight?: string;
  minHeightMobile?: string;
  title: string;
  titleColor?: string;
  titleSize?: string;
}

export const DashboardCard = ({
  children,
  backgroundColor,
  padding,
  borderRadius,
  borderRadiusMobile,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  width,
  widthMobile,
  height,
  heightMobile,
  margin,
  minWidth,
  minWidthMobile,
  minHeight,
  minHeightMobile,
  title,
  titleColor,
  titleSize,
}: Props) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $padding={padding}
      $borderRadius={borderRadius}
      $borderRadiusMobile={borderRadiusMobile}
      $justifyContent={justifyContent}
      $flexWrap={flexWrap}
      $flexDirection={flexDirection}
      $flex={flex}
      $width={width}
      $widthMobile={widthMobile}
      $height={height}
      $heightMobile={heightMobile}
      $margin={margin}
      $minWidth={minWidth}
      $minWidthMobile={minWidthMobile}
      $minHeight={minHeight}
      $minHeightMobile={minHeightMobile}
      $title={title}
      $titleColor={titleColor}
      $titleSize={titleSize}
    >
      <Col width={"100%"} flex={"1"} alignItems={"center"} gap={"0"}>
        <h2 className={"titleStyle"}>{title}</h2>
        <div className={"contentStyle"}>{children}</div>
      </Col>
    </Container>
  );
};
