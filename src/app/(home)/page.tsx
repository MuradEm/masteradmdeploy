"use client";
import { AppContext } from "../../services/context";
import { useContext, useEffect} from "react";
import {Home as HomeP} from "../../components/Home"
import "../../services/language"
import { useTranslation } from 'react-i18next';



export default function Home() {
  const {
    setHeaderLocation,
    setHeaderShowAdd,
    setHeaderHideSearch,
    setHeaderSearchText,
    setHeaderAddOnClick,
  } = useContext(AppContext);
  const {t} = useTranslation();

  useEffect(()=>{
    /*
    on load
    */
    setHeaderLocation(t("Dashboard"))
    setHeaderSearchText("")
    setHeaderHideSearch(true)
    setHeaderShowAdd(false)
    setHeaderAddOnClick(() => () => {})

  }, [])

  return (
    <>
      <HomeP></HomeP>
    </>
  )
}
