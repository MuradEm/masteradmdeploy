import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";
import { Spin } from "../Spin";

/*################################################## 
***Component***
    Button
***Description***
    ......... 
***Props***
    none
###################################################*/

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  functionButton?: (e: any) => void;
  margin?: string;
  nameOfButton?: string | undefined;
  typeOfButton?: "button" | "submit" | "reset" | undefined;
  variant?: "red" | "green" | "cyan" | "other";
  id?: string;
  isLoading?: boolean;
}

export function Button({
  id,
  children,
  functionButton,
  variant,
    margin,
  typeOfButton,
  nameOfButton,
  disabled,
  isLoading,
}: Props) {
  return (
    <Container
      color={variant}
      disabled={disabled ? true : false}
      onClick={functionButton}
      margin={margin}
      name={nameOfButton}
      type={typeOfButton}
      id={id}
    >
      {isLoading ? <Spin /> : children}
    </Container>
  );
}
