'use client';

import { useTranslation } from "react-i18next";
import { Container } from "./styles";

export function InputTextIconSearch({
  value,
  setValue
}:{
  value:string,
  setValue:Function,
}) {
  const {t} = useTranslation();

  return (
    <Container>
      <input
        className="InputTextIconSearch" 
        type="text" 
        placeholder={t("Search")} 
        name="searchtext"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        autoComplete="off"
      />
    </Container>
  )
}
