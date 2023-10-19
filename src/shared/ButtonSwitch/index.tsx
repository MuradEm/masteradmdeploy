import Switch from "react-switch";

import { Container } from "./styles";
/*################################################## 
***Component***
    ButtonSwitch
***Description***
    Button with true or false states
***Props***
    checked: verifies if the state is true or false
    functionButtonSwitch: what function is called when the state changes
    color: color if the state is true
###################################################*/

interface Props {
  checked: boolean;
  functionButtonSwitch: () => void;
  id?: string;
  width?: number;
  height?: number;
  handleDiameter?: number;
  color?: "gray" | "blue" | "green";
}

export function ButtonSwitch({
  id,
  checked,
  functionButtonSwitch,
  color,
  width,
  height,
    handleDiameter
}: Props) {
  return (
    <Switch
      checked={checked}
      id={id}
      onChange={() => {
        functionButtonSwitch();
      }}
      onColor={"#10FF10"}
      offColor={
        color == "gray" ? "#71717A" : color == "blue" ? "#024089" : "#ff0000"
      }
      offHandleColor={"#D1D1D1"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={height ? height : 26}
      width={width ? width : 52}
    />
  );
}
