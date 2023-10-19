import { Container } from "./styles";
import { CardDetails } from "@/shared/CardDetails";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { Col } from "@/shared/Col";
import { InputText } from "@/shared/InputText";
import { Label } from "@/shared/Label";
import { RadioButton } from "@/shared/RadioButton";
import { useContext, useEffect, useState } from "react";
import {get_master_users, update_master_users} from "@/lib/apicalls";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/services/context";

export interface Props {
  actions?: ("close" | "save" | "delete")[];
  closeAction: (e: boolean) => void;
  width?: string;
  height?: string;
  currentMasterUser: MasterUser;
  setCurrentMasterUser: (masterUser: MasterUser) => void;
}

export interface MasterUser {
  email: string;
  name: string;
  checkedValue: string;
}

export const CardDetailsMasters = ({
  actions,
  currentMasterUser,
  setCurrentMasterUser,
  closeAction,
}: Props) => {
  //Validation states
  const [errorEmailEmpty, setErrorEmailEmpty] = useState<boolean>(false);
  const { setUsers, headerSearchText, quitMasterWithoutSaving, setQuitMasterWithoutSaving } = useContext(AppContext);
  const { t } = useTranslation();
  const [initialEmail, setInitialEmail] = useState<string>("")
  const [initialCheckedValue, setInitialCheckedValue] = useState<string>("")



  useEffect(() => {
    setInitialEmail(currentMasterUser.email)
    setInitialCheckedValue(currentMasterUser.checkedValue)
  }, [])

    const getUsers = async ()=>{
        /*
        get users from database
        */
        const data = await get_master_users(headerSearchText)
        if (data) {
            setUsers(data)
        }
    }
  async function salvarMasterUser() {
    if (currentMasterUser.email == "") {
      setErrorEmailEmpty(true);
      return;
    }
    if (
      currentMasterUser.checkedValue != "1" &&
      currentMasterUser.checkedValue != "3"
    ) {
      setCurrentMasterUser({ ...currentMasterUser, checkedValue: "1" });
    }
    await update_master_users(
      currentMasterUser.email,
      Number(currentMasterUser.checkedValue),
    );
    // After updating it updates the information in the table
    await getUsers();
    closeAction(false);
  }

  function ToggleQuit(){
    setQuitMasterWithoutSaving(true)
  }

  return (
    <Container translation={t}>
      <CardDetails
        paddingBodyTop={"2.13rem"}
        width={"58.9375rem"}
        saveFunction={() => {
          salvarMasterUser();
        }}
        actions={["close", "save"]}
        closeFunction={() => 
          {currentMasterUser.email != initialEmail || currentMasterUser.checkedValue != initialCheckedValue ? 
            ToggleQuit() :
            closeAction(false) ;
        }}
        height={"828px"}
      >
        <Col gap={"1.75rem"} padding={"0 1.25rem"}>
          {currentMasterUser.name != "" && (
            <h1 className={"userNameInput"}>{currentMasterUser.name}</h1>
          )}
          <Col gap={"1.86rem"}>
            <div
              className={`bigEmailInputField ${
                errorEmailEmpty && "requiredFields"
              }`}
            >
              <Label
                type={"input"}
                label={t("E-mail") + " *"}
                defaultValue={currentMasterUser.email}
                onChange={(event) => {
                  setErrorEmailEmpty(false),
                    setCurrentMasterUser({
                      ...currentMasterUser,
                      email: event,
                    });
                }}
              />
            </div>
            <div
              onChange={(event) => {
                // @ts-ignore event.target.value exists in this case
                setCurrentMasterUser({...currentMasterUser,checkedValue: event.target.value,});
              }}
              className={"radioButtonGroup"}
            >
              <RadioButton
                name={"access"}
                text={t("Give Access")}
                value={"1"}
                $checked={currentMasterUser.checkedValue == "1"}
              />
              <RadioButton
                name={"access"}
                text={t("Remove Access")}
                value={"3"}
                $checked={currentMasterUser.checkedValue == "3"}
              />
            </div>
          </Col>
        </Col>
      </CardDetails>
    </Container>
  );
};
