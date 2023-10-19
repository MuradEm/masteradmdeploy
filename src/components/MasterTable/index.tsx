"use client";

import { ButtonSwitch } from "@/shared/ButtonSwitch";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import { CardDetailsPortal, Portal } from "@/components/CardDetailsPortal";
import { Row } from "@/shared/Row";
import { useContext, useState } from "react";
import { AppContext } from "@/services/context";
import { ModalDelete } from "@/components/ModalDeletePortal";
import { MasterUser } from "@/components/CardDetailsMasters";
import { ProgressBar } from "@/components/ProgressBar";

export function MasterTable({
  col1Text,
  col2Text,
  hideInactive,
  cbShowInactive,
  setCbShowInactive,
  data,
  ModalCard,
  progressData,
  progressDataFiltered,
  progressBtnOnClick,
  progressFilterText,
  progressIsShowInactive,
  progressSetShowInactive,
  progressIsMastersAdminsActive,
}: {
  col1Text: string;
  col2Text: string;
  hideInactive?: boolean;
  cbShowInactive: boolean;
  setCbShowInactive: Function;
  data: Portal[] | MasterUser[];
  ModalCard: any;
  progressData: any[];
  progressDataFiltered: any[];
  progressBtnOnClick: Function;
  progressFilterText: string;
  progressIsShowInactive: boolean;
  progressSetShowInactive: Function;
  progressIsMastersAdminsActive: boolean;
}) {
  const { t } = useTranslation();

  const {
    showModalEditPortal,
    setShowModalEditPortal,
    currentPortal,
    setCurrentPortal,
    currentMasterUser,
    setCurrentMasterUser,
    setShowModalDelete,
  } = useContext(AppContext);

  function isPortal(d: any): d is Portal {
    return "portal" in d;
  }

  return (
    <Container>
      {/* head */}
      <div className="row head">
        <div className="col1">
          <span>{t(col1Text)}</span>
        </div>
        <div className="col2">
          <span>{t(col2Text)}</span>
        </div>
        {hideInactive ? null : (
          <>
            <div className="col3">
              <ButtonSwitch
                checked={cbShowInactive}
                functionButtonSwitch={() => setCbShowInactive(!cbShowInactive)}
                color="gray"
              />
            </div>
            <div className="col4">
              <span>{t("ShowInactive")}</span>
            </div>
          </>
        )}
      </div>

      {/* data */}
      <Row paddingMobile={"0"} padding={"0 10px 0 0"}>
        <div className="tableData">
          {data.map((d) => (
            <div
              key={isPortal(d) ? d.company : d.name} //avoid warning that every row must have a key
              className={`row data ${
                isPortal(d)
                  ? d.company == currentPortal.company
                    ? "selectedRow"
                    : ""
                  : d.email == currentMasterUser.email
                  ? "selectedRow"
                  : ""
              }`}
              data-inactive={"inactive" in d ? d.inactive : "false"}
              onClick={() => {
                if (isPortal(d)) {
                  setCurrentPortal(d);
                } else {
                  setCurrentMasterUser(d);
                }
                setShowModalEditPortal(true);
              }}
            >
              <div className="col1">
                {/*The following conditions are needed to maintain the current column width styles*/}
                <span>{isPortal(d) ? d.company.length > 28 ? `${d.company.substring(0,27)}...` : d.company : d.name.length > 28 ? `${d.name.substring(0,27)}...` : d.name}</span>
              </div>
              <div className="col2">
                <span>{isPortal(d) ? d.portal : d.email}</span>
              </div>
            </div>
          ))}
          <div className={"progressBarPosition"}>
            <ProgressBar
              data={progressData}
              dataFiltered={progressDataFiltered}
              btnOnClick={() => progressBtnOnClick()}
              filterText={progressFilterText}
              isShowInactive={progressIsShowInactive}
              setShowInactive={progressSetShowInactive}
              isMastersAdminsActive={progressIsMastersAdminsActive}
            />
          </div>
        </div>
        {showModalEditPortal && (
          <div className={"modalEdit"}>
            <ModalCard
              currentMasterUser={currentMasterUser}
              setCurrentMasterUser={setCurrentMasterUser}
              currentPortal={currentPortal}
              setCurrentPortal={setCurrentPortal}
              actions={
                currentPortal.client_id == "0"
                  ? ["close", "save"]
                  : ["close", "save", "delete"]
              }
              deleteAction={setShowModalDelete}
              closeAction={setShowModalEditPortal}
            />
          </div>
        )}
      </Row>
    </Container>
  );
}
