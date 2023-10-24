/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";

import SpinnerIcon from "../../assets/icons/spinnerIcon.svg";

/*################################################## 
***Component***
    Spin
***Description***
    Spin for loading occasions
***Props***
    none
###################################################*/

export function Spin() {
  return (
    <Container>
      <h4>
        <img src={SpinnerIcon.src} />
      </h4>
    </Container>
  );
}
