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
    name: string;
    text: string;
    value?: string;
    $checked?: boolean;

}
export function RadioButton({name, text, value, $checked }: Props) {
  return (
    <Container>
      <input type="radio" name={name} value={value ? value : text} checked={$checked} readOnly/>
      {text}
    </Container>
  );
}
