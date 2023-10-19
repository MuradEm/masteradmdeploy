import { IconType } from "react-icons/lib";
import React from "react";
import { Container } from "./style";

/*##########################################################
***Component***
    CardGeneric
***Description***
    Generic card for Dashboard infos
***Props***
    geometry: card geometry (square or rectangle)
    mainText: text shown in the card
    number: {optional} - info amount
    icon: {optional}
    fontColor: icon/maintext colors
    onClickFunction: {optional} executed after clicking the card
##########################################################*/

export interface Props {
  geometry: "square" | "rectangle";
  mainText: string;
  number?: number;
  Icon?: IconType | string;
  fontColor: "blue" | "gray";
  onClickFunction?: () => void;
}

export function CardGeneric({
  geometry,
  mainText,
  number,
  fontColor,
  Icon,
  onClickFunction,
}: Props) {
  return (
    <Container
      geometry={geometry}
      mainText={mainText}
      Icon={Icon}
      onClick={onClickFunction}
      fontColor={fontColor}
      style={{ cursor: onClickFunction ? "pointer" : "default" }}
    >
      {geometry == "rectangle" ? (
        <>
          <div className="biggerText">
            <h2>{mainText}</h2>
          </div>

          {number ? (
            <>
              <h1 className="qtyNum">{number}</h1>
            </>
          ) : Icon ? (
            <>
              {typeof Icon == "string" ? (
                <div className="imgSizing" style={{ marginRight: "43px" }}>
                  <img src={Icon} />
                </div>
              ) : (
                <div style={{ marginRight: "43px" }}>
                  <Icon />
                </div>
              )}
            </>
          ) : (
            <h1 className="qtyNum">{number}</h1>
          )}
        </>
      ) : geometry == "square" ? (
        <>
          {number ? (
            <>
              <h1>{number}</h1>
            </>
          ) : Icon ? (
            <>
              {typeof Icon == "string" ? (
                <div className="imgSizing">
                  <img src={Icon} />
                </div>
              ) : (
                <>
                  {React.createElement(Icon)} {Icon}
                </>
              )}
            </>
          ) : (
            <h1>{number}</h1>
          )}
          <h2>{mainText}</h2>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
