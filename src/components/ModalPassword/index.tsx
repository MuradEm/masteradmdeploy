
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";
import { Button } from "../../shared/Button";
// import { ButtonIcon } from "../../shared/ButtonIcon";
import { Label } from "../../shared/Label";

import { AppContext } from "../../services/context";
import { login, reset_password } from "@/lib/apicalls";

/*########################################################## 
***Component***
    ModalPassword
***Description***
    Allows the user to change his password while logged in 
***Props***
    none
##########################################################*/

export function ModalPassword() {
  const {
    userEmail
  
  } = useContext(AppContext);
  const { t } = useTranslation();

  const email  = userEmail;

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] =
    useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showModalPassword, setShowModalPassword, userName } =
    useContext(AppContext);

  function ToggleModalPassword() {
    setShowModalPassword(!showModalPassword);
  }

  async function ChangePassword(currentPassword: string, newPassword: string) {
    //incluir api
    const response = await reset_password(currentPassword, newPassword );
    if (response!= false) {
      alert(t("PasswordChangedSuccessfully"));
      setIsLoading(false);
      ToggleModalPassword();
    }
  }

  async function ValidatePassword(
    currentPassword: string,
    newPassword: string,
    newPasswordConfirmation: string
  ) {
    if (currentPassword.trim() == "") {
      alert(t("CurrentPasswordEmpty"));
    } else {
      setIsLoading(true);
      const response = await login(email, currentPassword);
      if(response != false)
      {
        if (newPassword == "") {
          alert(t("EnterYourNewPassword"));
          setIsLoading(false);
        } else if (newPasswordConfirmation == "") {
          alert(t("EnterThePasswordConfirmation"));
          setIsLoading(false);
        } else if (newPassword != newPasswordConfirmation) {
          alert(t("DifferentConfirmationOfTheNewPassword"));
          setIsLoading(false);
        } else {
          ChangePassword(currentPassword, newPassword);
        }
      }
      else{
        setIsLoading(false);
        alert(t("PasswordIsNotCorrectPleaseTryAgain"));
      }
    }
  }

  function TextCurrentPassword(value: string) {
    setCurrentPassword(value);
  }
  function TextNewPassword(value: string) {
    setNewPassword(value);
  }
  function TextNewPasswordConfirmation(value: string) {
    setNewPasswordConfirmation(value);
  }

  return (
    <>
      <Container>

        <div style={{marginTop: "1.25rem"}}>
          <input className="tmpbugfix" /> {/* browser will use this input to autocomplete email/username. without this, it will use the first enabled input that comes before the password input /Felipe */}
          <Label
            label={t("Name")}
            type="input"
            inputType="text"
            defaultValue={userName}
            disabled={true}
            onChange={TextCurrentPassword}
          />
          <span />
          <Label
            label={t("E-mail")}
            type="input"
            inputType="email"
            defaultValue={email}
            disabled={true}
            onChange={TextCurrentPassword}
          />
          <span />
          <Label
            autoFocus
            label={t("CurrentPassword")}
            type="input"
            inputType="password"
            onChange={TextCurrentPassword}
          />
          <span />
          <Label
            label={t("NewPassword")}
            type="input"
            inputType="password"
            onChange={TextNewPassword}
          />
          <span />
          <Label
            label={t("RepeatNewPassword")}
            type="input"
            inputType="password"
            onChange={TextNewPasswordConfirmation}
          />
        </div>
        <div>
          <Button
            id="btSave"
            functionButton={() => {
              ValidatePassword(
                currentPassword,
                newPassword,
                newPasswordConfirmation
              );
            }}
            variant="green"
            typeOfButton="submit"
            isLoading={isLoading}
          >
            {" "}
            {t("Save")}
          </Button>
        </div>
      </Container>
    </>
  );
}
