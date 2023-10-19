import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineColor?: string;
  width?: string;
  widthMobile?: string;
  separatorDistance?: string;
}

export const SectionSeparator = ({ children, padding, margin, fontSize, fontWeight, color, width, widthMobile, lineColor, separatorDistance }: Props) => {
  return (
    <Container
        $padding={padding}
        $margin={margin}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $color={color}
        $width={width}
        $widthMobile={widthMobile}
        $lineColor={lineColor}
        $separatorDistance={separatorDistance}
    >
      {children}
    </Container>
  );
};
