
import { useContext, useState } from "react";

import { Container } from "./styles";
import { Button } from "../../shared/Button";

import warningIcon from "../../assets/icons/warningIcon.svg";
import { AppContext } from "../../services/context";
import { Label } from "@/shared/Label";
import { Col } from "@/shared/Col";
import { Row } from "@/shared/Row";
import { ToolTipButton } from "@/shared/ToolTipButton";
import {delete_portal, get_portals} from "@/lib/apicalls";
import {useTranslation} from "react-i18next";

/*########################################################## 
***Component***
    ModalWarning
***Description***
    Shows a warning message for especific situations
***Props***
    textWarning: message of the modal
    textButton1: text of the gray button
    textButton2: text of the red button
    onClick1: function of the gray button
    onClick2: function of the red button

##########################################################*/

interface Props {
  textWarning: string;
  textButton1: string;
  textButton2?: string;
  client_id: string;

  onClick1: (e: any) => void;
  onClick2?: (e: any) => void;
}

export function ModalDelete({
  textWarning,
  onClick1,
  onClick2,
  client_id,
  textButton1,
  textButton2,
}: Props) {
  const [errorConfirmationWrong, setErrorConfirmationWrong] =
    useState<boolean>(false);
  const [confirmationText, setConfirmationText] = useState<string>("");
  const { t } = useTranslation();
  const deleteText = t("I want to delete all data from this portal");
  const { headerSearchText, setPortals, setShowModalEditPortal } = useContext(AppContext);

  const getPortals = async ()=>{
    /*
    get portals from database
    */
    const data = await get_portals(headerSearchText,true)
    if (data) {
      setPortals(data)
    }
  }
  async function deletePortal() {
    if (confirmationText != t(deleteText)) {
      setErrorConfirmationWrong(true);
    } else {
      await delete_portal(Number(client_id)); // TODO CAUTION HERE THIS DELETES EVERYTHING RELATED TO THE PORTAL
      await getPortals();
      setShowModalEditPortal(false);
    }

  }

  return (
    <>
      <div
        className="closeModal"
        style={{
          zIndex: 3000,
          width: "100dvw",
          height: "100dvh",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={onClick1}
      ></div>
      <Container translation={t}>
        <Col alignItems={"center"} gap={"2.25rem"}>
          <section className={"icontext"}>
            <img src={warningIcon.src} alt="warningIcon" />
            <h1>{textWarning}</h1>
          </section>
          <Col gap={"1.25rem"}>
            <div className={"inputFloatingStyles"}>
              <Row>
                <div
                  className={`inputConfirmationStyles ${
                    errorConfirmationWrong && "requiredFields"
                  }`}
                >
                  <Label
                    type={"input"}
                    label={t("Confirmation") + " *"}
                    defaultValue={confirmationText}
                    onChange={(e) => {
                      setErrorConfirmationWrong(false);
                      setConfirmationText(e);
                    }}
                  />
                </div>
                <div className={"floatingToolTipButton"}>
                  <ToolTipButton
                    toolTipText={t("To delete the portal, type")+": '" + deleteText+"'"}
                    alignment="left"
                  ></ToolTipButton>
                </div>
              </Row>
            </div>
            <div className={"modalWarningStyles"}>
              {textButton2 && onClick2 ? (
                <Button
                  variant="red"
                  typeOfButton="submit"
                  functionButton={(e) => {
                    deletePortal();
                  }}
                >
                  {" "}
                  <h1>{textButton2}</h1>
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="other"
                typeOfButton="submit"
                functionButton={onClick1}
              >
                {" "}
                <h1>{textButton1}</h1>
              </Button>
            </div>
          </Col>
        </Col>
      </Container>
    </>
  );
}
