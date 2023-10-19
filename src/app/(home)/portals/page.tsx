"use client";
import { useContext, useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react"
import {get_portals} from "@/lib/apicalls"
import {emptyPortal, filterRows} from "./lib"
import { AppContext } from "@/services/context";
import { Container } from "./styles";
import { MasterTable } from "@/components/MasterTable";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "@/components/ProgressBar";
import { MoreOptionsButton } from "@/shared/MoreOptionsButton";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiDisc, FiMinusCircle } from "react-icons/fi";
import {CardDetailsPortal, Portal} from "@/components/CardDetailsPortal";
import {Row} from "@/shared/Row";

 export default function Portals() {
  const {t} = useTranslation();
  const {
    setHeaderLocation, 
    setHeaderHideSearch, 
    headerSearchText, 
    setHeaderSearchText, 
    setHeaderShowAdd,
    setHeaderAddOnClick,
    setIsPortalsActive,
    setCurrentPortal,
    setShowModalEditPortal,
    setShowInactive,
    isShowInactive,
    portals,
    setPortals,
  } = useContext(AppContext);

  const [filteredPortals, setFilteredPortals] = useState<Portal[]>([])





  const getPortals = async ()=>{
    /*
    get portals from database
    */
    const data = await get_portals(headerSearchText,true)
    if (data) {
      setPortals(data);
    }
  }

  useEffect(()=>{
    /*
    on portals, searchText, cbShowInactive
    */
    const filtered = filterRows(portals, headerSearchText, isShowInactive)
    setFilteredPortals(filtered)
  }, [portals, headerSearchText, isShowInactive])

  useEffect(()=>{
    /*
    on load
    */
    getPortals()
    setHeaderLocation(t("Portals"))
    setHeaderSearchText("")
    setHeaderHideSearch(false)
    setHeaderShowAdd(true)
    setHeaderAddOnClick(() => () => {setCurrentPortal(emptyPortal); setShowModalEditPortal(true)})
    setIsPortalsActive(true)
  }, [])

  function showAlert(text: string){
    alert(text);
  }

  return (
    <SessionProvider>
      <Container>

        {/* group table */}
        <div className="groupTable">
          <MasterTable 
            col1Text="Company"
            col2Text="Portal Name"
            cbShowInactive={isShowInactive}
            data={filteredPortals}
            setCbShowInactive={setShowInactive}
            ModalCard={CardDetailsPortal}
            progressData={portals}
            progressDataFiltered={filteredPortals}
            progressBtnOnClick={()=>{alert("tbd portals progress bar")}}
            progressFilterText="portals"
            progressIsShowInactive={isShowInactive}
            progressSetShowInactive={setShowInactive}
            progressIsMastersAdminsActive={false}

          />

        </div>

        {/* bottom group */}
        <div className="bottomGroup">
          {/*<ProgressBar */}
          {/*  data={portals} */}
          {/*  dataFiltered={filteredPortals} */}
          {/*  btnOnClick={()=>{alert("tbd portals progress bar")}}*/}
          {/*  filterText="portals"*/}
          {/*  isShowInactive={isShowInactive}*/}
          {/*  setShowInactive={setShowInactive}*/}
          {/*  isMastersAdminsActive={false}*/}
          {/*/>*/}
        </div>



      </Container>
    </SessionProvider>
  )
}
