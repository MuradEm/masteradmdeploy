/* eslint-disable react/jsx-key */
'use client';

import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { filteredText } from "@/app/(home)/masteradmins/lib";
import { MoreOptionsButton } from "@/shared/MoreOptionsButton";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiDisc, FiMinusCircle } from "react-icons/fi";
import { AppContext } from "@/services/context";
import { useContext } from "react";
import { IconType } from "react-icons";

export function ProgressBar({
  data,
  dataFiltered,
  btnOnClick,
  filterText,
  isMastersAdminsActive,
  isShowInactive,
  setShowInactive
}:{
  data:any[],
  dataFiltered:any[],
  btnOnClick:Function,
  filterText:string,
  isMastersAdminsActive:boolean,
  isShowInactive:boolean,
  setShowInactive:Function
}) {
  const {t} = useTranslation();
  const percentage_done = `${dataFiltered.length / data.length * 100}%`
  const txt = `${t(filterText)}${filteredText(percentage_done)}`
  const screenSize = typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.innerWidth: 1080;
  const {headerAddOnClick} = useContext(AppContext);
  return (
    <Container>
      <div className="footer">
        {/* progress bar */}
        <div className="pb">
          <div className="pbtotal"></div>
          <div className="pbdone" style={{width:percentage_done}}></div>
          <div className="pbtext">
            {`${dataFiltered.length} ${t("of")} ${data.length} ${txt}`}
          </div>
        </div>
        {/* options */}
        {screenSize<720 &&
        <MoreOptionsButton
          infoAmount={isMastersAdminsActive ? 1 : 2}
          infoContent={isMastersAdminsActive 
            ? [[<HiOutlinePlusSm /> as unknown as IconType , "white", "lightBlue", t("New"), 0]] 
            : [[isShowInactive ? <FiMinusCircle />  as unknown as IconType : <FiDisc />  as unknown as IconType, "blue", "white", t("ShowInactive"), 90], 
              [<HiOutlinePlusSm />  as unknown as IconType, "white", "lightBlue", t("New"), 0]]}
          secondaryColor="gray"
          functions={isMastersAdminsActive ? [headerAddOnClick] : [setShowInactive, headerAddOnClick]}
          functionParameters={isMastersAdminsActive ? ["Teste1"] : [!isShowInactive]}
        ></MoreOptionsButton>
          }

      </div>
    </Container>
  )
}
