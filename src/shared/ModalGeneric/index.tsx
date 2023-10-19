import { ReactNode } from "react";
import { ButtonIcon } from "../ButtonIcon";
import { Container } from "./styles";

import aboutIcon from "../../assets/icons/SheetIcon.svg";

/*########################################################## 
***Component***
    ModalGeneric
***Description***
    Example implementation for a generic modal:

    <ModalGeneric title="Change Password" functionCloseModal={ToggleModal}>
        <div>
        ...
        <div>
        <section>
        ...
        <section>
    </ModalGeneric>
***Props***
    title:                  Title of the modal
    functionCloseModal:     The function to close the modal
    children:               Modal content
##########################################################*/

export interface Props {
  title?: string;
  functionCloseModal?: () => void;
  children: ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}

export function ModalGeneric({
  title,
  functionCloseModal,
  children,
  top,
  bottom,
  right,
  left,
}: Props) {
  



  return (
    <>
      <div
        className="closeModals"
        style={{
          width: "100dvw",
          height: "100dvh",
          top: "0",
          right: "0",
          position: "absolute",
          zIndex: 1001,
        }}
        onClick={functionCloseModal}
      ></div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: top || right || bottom || left ? "relative" : "flex",

          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <Container
          title={title}
          top={top}
          bottom={bottom}
          right={right}
          left={left}
        >
          <section className="modalHeader">
            <span></span>
            <h2>{title}</h2>
            <ButtonIcon
              IconType="close"
              functionButtonIcon={functionCloseModal}
            >
              <img src={aboutIcon.src}></img>
            </ButtonIcon>
          </section>
          <section className="modalBody">{children}</section>
        </Container>
      </div>
    </>
  );
}
