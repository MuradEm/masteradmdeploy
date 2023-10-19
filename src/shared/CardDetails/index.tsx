"use client";
import { ReactNode } from "react";
import { Container } from "./styles";
import { Button } from "@/shared/Button";
import { Row } from "@/shared/Row";
import CloseButton from "@/assets/icons/closeIcon.svg";
import { useTranslation } from "react-i18next";

export interface Props {
  children: ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
  actions?: ("close" | "save" | "delete")[];
  width?: string;
  height?: string;
  closeFunction?: () => void;
  saveFunction?: () => void;
  deleteFunction?: () => void;
  paddingBodyTop?: string;
}

export const CardDetails = ({
  children,
  actions,
  borderRadius,
  backgroundColor,
  width,
  height,
  closeFunction,
  saveFunction,
  deleteFunction,
  paddingBodyTop,
}: Props) => {

  const {t} = useTranslation();
  return (
    <Container
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      paddingBodyTop={paddingBodyTop}
    >
      {actions && actions.indexOf("close") != -1 && (
        <div className={"closeButton"} onClick={closeFunction}>
          <img src={CloseButton.src}/>
        </div>
      )}
      <div className={"bodyClass"}>{children}</div>
      <div className={"footerClass"}>
        <Row justifyContent={"flex-end"} gap={"1.25rem"}>
          {actions && actions.indexOf("delete") != -1 && (
            <Button
              variant={"red"}
              margin={"0"}
              functionButton={deleteFunction}
            >
              {t("Delete")}
            </Button>
          )}
          {actions && actions.indexOf("save") != -1 && (
            <Button
              variant={"green"}
              margin={"0"}
              functionButton={saveFunction}
            >
              {t("Save")}
            </Button>
          )}
        </Row>
      </div>
    </Container>
  );
};
