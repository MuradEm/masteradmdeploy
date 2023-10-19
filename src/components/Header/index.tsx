'use client';
import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { AppContext } from "../../services/context";
import { ButtonIcon } from "../../shared/ButtonIcon";
import { HiOutlineUserCircle } from "react-icons/hi";
import { get_user } from "@/lib/apicalls";
import pmLogo2 from "../../assets/icons/pmLogo2.svg";
import { InputTextIconSearch } from "../InputTextIconSearch";
import {ModalGeneric} from "@/shared/ModalGeneric";
import {ModalSettingsUser} from "@/components/ModalSettingsUser";
import { usePathname } from "next/navigation";
import { ModalPassword } from "../ModalPassword";
import "../../services/language";
import { useTranslation } from "react-i18next";
import { hide } from "./lib";
import { ModalGeneric2 } from "../ModalGeneric2";
export function Header({
  // addOnClick,
}:{
  // addOnClick?:Function,
}) {
  const {
    setUserName,
    setUserPhoto,
    setUserEmail,
    userPhoto,
    showModalUser,
    setShowModalUser,
    headerLocation,
    headerSearchText,
    setHeaderSearchText,
    headerHideSearch,
    headerShowAdd,
    headerAddOnClick,
    setIsSideBarMenuActive,
    setShowModalPassword,
    showModalPassword
  } = useContext(AppContext);
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const path = usePathname();
  const { t } = useTranslation();
  async function  userInfo() {
    const userInformation= await get_user(9);
    setUserName(userInformation[0].user_name);
    setUserPhoto(userInformation[0].photo_Base64);
    setUserEmail(userInformation[0].email);
    console.log(userInformation+"cu");
  }

  useEffect(()=>{
    /*
    on load
    */
    userInfo()
  }, [])


  function ToggleModalUser() {
    setShowModalUser(!showModalUser);
  }

  function ToggleModalPassword() {
    setShowModalPassword(!showModalPassword);
  }

  function OpenSideBar(){
    setIsSideBarMenuActive(true);
}

  return (
    <Container style={{display: path.startsWith("/auth") ? "none" : ""}}>
      <div className="box">
        
        {/* logo */}
        <div className="logo">
          <img src={pmLogo2.src} onClick={OpenSideBar}/>
        </div>

        {/* add button */}
        {
          headerShowAdd
          ?
          <div className="add">
            <input type="button" onClick={()=>headerAddOnClick()} />
          </div>
          :
          null
        }
        
        {/* location */}
        <div className="location">
          <span><h2>{t(headerLocation)}</h2></span>
        </div>

        <>
          {/* search mobile */}
          <div className="searchMobile" style={{visibility:hide(headerHideSearch)}}>
            <input type="button" onClick={()=>setShowMobileSearch(true)} />
          </div>

          {/* search bar mobile */}
          {showMobileSearch
          ?
          <div className="searchBarMobile">
            <div className="searchInput"><InputTextIconSearch value={headerSearchText} setValue={setHeaderSearchText}/></div>
            <div className="btnClose"><input type="button" onClick={()=>setShowMobileSearch(false)} /></div>
          </div>
          :
          null
          }

          {/* search web */}
          <div className="searchWeb" style={{visibility:hide(headerHideSearch)}}>
            <InputTextIconSearch value={headerSearchText} setValue={setHeaderSearchText}/>
          </div>
        </>

        {/* photo */}
        <div className="buttonsFunctions">
          <div className="logoUser">
            <ButtonIcon functionButtonIcon={()=>{setShowModalUser(!showModalUser)}}>
              {userPhoto 
              ?
              (
                <img src={`data:image/png;base64,${userPhoto}`}/>
              )
              :
              (
                <HiOutlineUserCircle
                  style={{
                    color: "var(--color-blue-primary)",
                    width: "2.563rem",
                    height: "2.563rem",
                  }}
                />
              )}
            </ButtonIcon>
          </div>
        </div>  
      </div>

      {/* modal user */}
      {(showModalUser) ? (
          <ModalGeneric
              functionCloseModal={ToggleModalUser}
              top="4.5rem"
              right={ "2.875rem" }
          >
            <ModalSettingsUser></ModalSettingsUser>
          </ModalGeneric>
      ):null}

      {/* modal change password */}
      {
        showModalPassword
        ?
        <ModalGeneric2 onClose={ToggleModalPassword}>
          <h2 className="modalTittle">{t("ChangePassword")}</h2>
          <ModalPassword />
        </ModalGeneric2> 
        :
        null
      }

    </Container>

  );

}
