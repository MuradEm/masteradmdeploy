import { useTranslation } from "react-i18next";
import { AppContext } from "../../services/context";
import { ButtonIcon } from "../../shared/ButtonIcon";
import { Container } from "./styles";
import { useContext } from "react";
import userIconBlue from "../../assets/icons/userIconBlue.svg";
import aboutIcon from "../../assets/icons/aboutIcon.svg";
import { destroyCookie } from "nookies";
import { HiOutlineInformationCircle, HiOutlineLockClosed, HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { ModalWarning } from "../ModalWarning";
// import portalApi from "../../services/portalApi";

export function ModalSettingsUser() {
  const { t } = useTranslation();
  const {
    userName,
    userEmail,
    userPhoto,
    setShowModalUser,
    showModalPassword,
    setShowModalPassword,
    setShowModalAbout
  } = useContext(AppContext);

  function ToggleModalPassword() {
    setShowModalPassword(!showModalPassword);
  }



  return (
    <>
      <Container>
        <section>
          <div className="userIcon">
            {userPhoto ? 
            <img
              src={
                `data:image/png;base64,${userPhoto}` 
              }
            />:<HiOutlineUserCircle style={{color: "var(--color-blue-primary)", width: "100%", height: "100%", objectFit:"contain"}}/>}
          </div>
          <div>
            {userName}
            <span>{userEmail}</span>
          </div>
        </section>
        <hr />
        <ButtonIcon
          functionButtonIcon={() => (ToggleModalPassword(), setShowModalUser(false))}
          label={t("ChangePassword")}
        >
          <HiOutlineLockClosed />
        </ButtonIcon>
        <ButtonIcon
          functionButtonIcon={() => (signOut(), setShowModalUser(false))}
          label={t("Logout")}
        >
          <HiOutlineLogout />
        </ButtonIcon>
        <ButtonIcon
          functionButtonIcon={() => setShowModalAbout(true)}
          label={t("About")}
        >
          <HiOutlineInformationCircle />
        </ButtonIcon>
        
        
      </Container>
    </>
  );
}
