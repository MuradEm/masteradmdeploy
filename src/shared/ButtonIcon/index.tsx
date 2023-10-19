/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { Container } from "./styles";

import closeIcon from "../../assets/icons/closeIcon.svg";
import AddReport from "../../assets/icons/AddReport.svg";
import PrintReport from "../../assets/icons/PrintReport.svg";
import addMaster from "../../assets/icons/addMaster.svg";

/*################################################## 
***Component***
    ButtonIcon
***Description***
    An icon with button function 
***Props***
    functionButtonIcon: function of the button
    IconType: what image is shown
    label: text that is shown with the button
    
###################################################*/

interface Props {
  functionButtonIcon?: () => void;
  label?: string;
  IconType?: string;
  children?: ReactNode;
}

export function ButtonIcon({
  functionButtonIcon,
  label,
  children,
  IconType,
}: Props) {
  return (
    <Container
      onClick={functionButtonIcon}
      disabled={functionButtonIcon ? false : true}
      islabel={label ? 1 : 0}
    >
      {IconType == "close" ? (
        <>
          <img src={closeIcon.src} />
          <h3>{label}</h3>
        </>
      ) : IconType == "printReport" ? (
        <>
          <img src={PrintReport.src} />
          <h3>{label}</h3>
        </>
      ) : IconType == "addReport" ? (
        <>
          <img src={AddReport.src} />
          <h3>{label}</h3>
        </>
      ) : IconType == "addMaster" ? (
        <>
          <img src={addMaster.src} />
          <h3>{label}</h3>
        </>
      ) : (
        <>
          {children}
          <h3>{label}</h3>
        </>
      )}
    </Container>
  );
}
