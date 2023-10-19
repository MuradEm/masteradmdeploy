import { BsCheck } from "react-icons/bs";


import { Container } from "./styles";

/*################################################## 
***Component***
    CheckBox
***Description***
  Button with true or false states

***Props***
    onChange        function executed when the checkbox state is changed
    isChecked       variable that verifies the checkbox state
###################################################*/

interface Props {
    onChange: () => void;
    isChecked: boolean;
}
export function Checkbox({ onChange, isChecked }: Props) {
  return (
    <Container>
      <input type="checkbox" defaultChecked={isChecked} />
      <span onClick={onChange}>{isChecked ? <BsCheck /> : null}</span>
    </Container>
  );
}
