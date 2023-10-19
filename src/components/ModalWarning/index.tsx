
import { useContext } from "react";

import { Container } from "./styles";
import { Button } from "../../shared/Button";

import warningIcon from "../../assets/icons/warningIcon.svg";
import { AppContext } from "../../services/context";

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

  onClick1: (e: any) => void;
  onClick2?: (e: any) => void;
}

export function ModalWarning({
  textWarning,
  onClick1,
  onClick2,
  textButton1,
  textButton2,
}: Props) {
  const { setShowModalUser } =
    useContext(AppContext);

  function CloseAllModals() {
    setShowModalUser(false);
  }

  return (
    <>
      <div
        className="closeModal"
        style={{ zIndex: 1002 }}
        onClick={onClick1}
      ></div>
      <Container>
        <section className={"icontext"}>
          <img src={warningIcon.src} alt="warningIcon" />
          <h1>{textWarning}</h1>
        </section>
        <div>
          {textButton2 && onClick2 ?(
            <Button
            variant="red"
            typeOfButton="submit"
            functionButton={onClick2}
          >
            {" "}
            <h1>{textButton2}</h1>
          </Button>
          ):("")}
          

          <Button
            variant="other"
            typeOfButton="submit"
            functionButton={onClick1}
          >
            {" "}
            <h1>{textButton1}</h1>
          </Button>
        </div>
      </Container>
    </>
  );
}
