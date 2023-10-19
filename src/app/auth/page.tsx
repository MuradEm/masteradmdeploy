"use client";
import { signIn } from "next-auth/react";
import { useContext, useState } from "react";
import { Spin } from "@/shared/Spin";
import { Button } from "@/shared/Button";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { InputText } from "@/shared/InputText";
import { AppContext } from "@/services/context";

import loginLogoPM from "../../assets/icons/loginLogoPM.svg";
import masterLogo from "../../assets/icons/BiShapeCircle.svg";
import pmLogo from "../../assets/icons/pmLogo.svg";
import { useRouter } from "next/navigation";
import { ModalWarning } from "@/components/ModalWarning";
import { get_portals, retrieve_password } from "@/lib/apicalls";
import "../../services/language";

export default function SignIn(props: any) {
  const [isValidatingRecoverEmail, setIsValidatingRecoverEmail] =
    useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isValidateUserLoading, setIsValidateUserLoading] = useState(false);
  const [timeFlag] = useState(false);
  const [collectedEmail, setCollectedEmail] = useState("");
  const [collectedPassword, setCollectedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { t } = useTranslation();

  const {
    isWrongCredentials,
    setIsWrongCredentials,
    isWrongEmail,
    setIsWrongEmail,
    isRecoverPassword,
    setIsRecoverPassword,
  } = useContext(AppContext);
  const router = useRouter();

  function textEmail(value: string) {
    setCollectedEmail(value);
  }

  function textPassword(value: string) {
    setCollectedPassword(value);
  }

  function ValidateRecoverEmail(email: string) {
    if (email.trim() == "") return;

    setIsValidatingRecoverEmail(true);
    retrieve_password(email).then((value) => {
      if (!value) {
        setIsWrongEmail(true);
        setIsValidatingRecoverEmail(false);
      } else {
        setIsRecoverPassword(true);
        setIsValidatingRecoverEmail(false);
        setIsChangingPassword(!isChangingPassword);
      }
    });
  }

  function ToggleModalWrongCredentials() {
    setIsWrongCredentials(!isWrongCredentials);
  }

  function ToggleModalRecoverPassword() {
    setIsRecoverPassword(!isRecoverPassword);
  }

  async function ValidateUser(email: string, password: string) {
    setIsValidateUserLoading(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: `${typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.location.origin : ""}/`,
      redirect: false,
    }).then(async (value) => {
      if (value?.error) {
        setIsWrongCredentials(true);
        setIsValidateUserLoading(false);
      } else {
        const checkPermission = await get_portals("", true);
        if (!checkPermission) {
          setInvalidCredentials(true);
          setIsValidateUserLoading(false);
          return;
        }
        router.push(`${props.searchParams.callbackUrl}`);
      }
    });
  }

  if (props.searchParams.error) {
    const params = props.searchParams.error;
  }

  return (
    <>
      <Container $forgotPassword={isChangingPassword}>
        {!props.isRecovering ? (
          <>
            <article className="logo">
              <img src={loginLogoPM.src} />
            </article>
            <hr />
            <article className="login">
              <section>
                <div className="divBack"></div>
                <img src={masterLogo.src} />
                <h1>Master</h1>
                <div className="logoMobile">
                  <img src={pmLogo.src} />
                </div>

                {!isChangingPassword && !isValidateUserLoading && !timeFlag ? (
                  <>
                    <InputText
                      autoFocus
                      placeholder={t("InsertYourEmail")}
                      typeInput="email"
                      onChange={textEmail}
                      visibility={false}
                      onKeyDown={(e: any) =>
                        e.key == "Enter"
                          ? ValidateUser(collectedEmail, collectedPassword)
                          : null
                      }
                    />

                    <InputText
                      placeholder={t("InsertYourPassword")}
                      typeInput={showPassword ? "text" : "password"}
                      iconType={showPassword ? "eyeOpen" : "eyeClosed"}
                      $iconFunction={() => setShowPassword(!showPassword)}
                      $iconRight
                      onChange={textPassword}
                      onKeyDown={(e: any) =>
                        e.key == "Enter"
                          ? ValidateUser(collectedEmail, collectedPassword)
                          : null
                      }
                    />
                    <div className="rememberLine">
                      <h3
                        onClick={() =>
                          setIsChangingPassword(!isChangingPassword)
                        }
                      >
                        {t("ForgotPassword") + "?"}
                      </h3>
                    </div>

                    <Button
                      functionButton={() =>
                        ValidateUser(collectedEmail, collectedPassword)
                      }
                    >
                      {" "}
                      {t("SignIn")}
                    </Button>
                  </>
                ) : (
                  <>
                    {!isValidatingRecoverEmail &&
                    !isValidateUserLoading &&
                    !timeFlag ? (
                      <>
                        <h2
                          style={{
                            cursor: "default",
                            fontSize: "1.25rem",
                            marginBottom: "2.5rem",
                          }}
                        >
                          {t("WhatIsYourRegisteredEmail")}
                        </h2>
                        <InputText
                          autoFocus
                          placeholder={t("InsertYourEmail")}
                          typeInput="email"
                          onChange={textEmail}
                          visibility={false}
                          onKeyDown={(e: any) =>
                            e.key == "Enter"
                              ? ValidateRecoverEmail(collectedEmail)
                              : null
                          }
                        />
                        <div className="rememberLine">
                          <h3
                            onClick={() => {
                              setIsChangingPassword(!isChangingPassword);
                            }}
                          >
                            {t("BackToLogin")}
                          </h3>
                        </div>
                        <Button
                          functionButton={() => {
                            ValidateRecoverEmail(collectedEmail);
                          }}
                        >
                          {" "}
                          {t("Send")}
                        </Button>
                      </>
                    ) : (
                      <div className="spin">
                        <Spin />
                        {t("Loading") + "..."}
                      </div>
                    )}
                  </>
                )}
              </section>
            </article>
          </>
        ) : (
          <div className="spin">
            <Spin />
            {t("Loading") + "..."}
          </div>
        )}
      </Container>
      {isWrongCredentials && (
        <ModalWarning
          textWarning={t("EmailOrPasswordIsNotCorrect. ") + t("PleaseTryAgain")}
          textButton1="OK"
          onClick1={ToggleModalWrongCredentials}
        />
      )}
      {isRecoverPassword && (
        <ModalWarning
          textWarning={t("IfYourEmailIsInOurDatabaseYouWillBeEmailed")}
          textButton1="OK"
          onClick1={ToggleModalRecoverPassword}
        />
      )}
      {invalidCredentials && (
          <ModalWarning
              textWarning={t("You don't have permission to access this application")}
              textButton1="Ok"
              onClick1={e => {setInvalidCredentials(false)}}
          />
      )}
    </>
  );
}
