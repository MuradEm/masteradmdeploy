/* eslint-disable react/jsx-key */
"use client";
import { useContext, useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react"
import {get_master_users} from "@/lib/apicalls"
import { AppContext } from "@/services/context";
import { Container } from "./styles";
import { MasterTable } from "@/components/MasterTable";
import { useTranslation } from "react-i18next";
import { filterRows } from "./lib";
import { ProgressBar } from "@/components/ProgressBar";
import {CardDetailsPortal} from "@/components/CardDetailsPortal";
import {CardDetailsMasters, MasterUser} from "@/components/CardDetailsMasters";
import {emptyPortal} from "@/app/(home)/portals/lib";

export default function MasterAdmins() {
  const {t} = useTranslation();
  const {
    setHeaderLocation, 
    headerSearchText, 
    setHeaderSearchText, 
    setHeaderHideSearch, 
    setHeaderShowAdd,
    setHeaderAddOnClick,
    setIsMastersAdminsActive,
    isShowInactive,
    setShowInactive,
    isMastersAdminsActive,
      setCurrentMasterUser,
      setShowModalEditPortal

  } = useContext(AppContext);

  const [filteredUsers, setFilteredUsers] = useState<MasterUser[]>([])
  const {
    users,
    setUsers
  } = useContext(AppContext);

  const getUsers = async ()=>{
    /*
    get users from database
    */
    const data = await get_master_users(headerSearchText)
    if (data) {
      setUsers(data)
    }
  }

  useEffect(()=>{
    /*
    on users, searchText
    */
    const filtered = filterRows(users, headerSearchText)
    setFilteredUsers(filtered)
  }, [users, headerSearchText])

  useEffect(()=>{
    /*
    on load
    */
    getUsers()
    setHeaderLocation(t("Master Admins"))
    setHeaderSearchText("")
    setHeaderHideSearch(false)
    setHeaderShowAdd(true)
    setHeaderAddOnClick(() => () => {setCurrentMasterUser({name:"",email:"",checkedValue:"1"} as MasterUser); setShowModalEditPortal(true)})
    setHeaderSearchText("")

    setIsMastersAdminsActive(true)
  }, [])

  return (
    <SessionProvider>
      <Container>

        {/* group table */}
        <div className="groupTable">
          <MasterTable 
            col1Text="Name"
            col2Text="E-Mail"
            hideInactive={true}
            cbShowInactive={false}
            data={filteredUsers}
            setCbShowInactive={()=>{}}
            ModalCard={CardDetailsMasters}
            progressData={users}
            progressDataFiltered={filteredUsers}
            progressBtnOnClick={()=>{alert("tbd masteradmins progress bar")}}
            progressFilterText="users"
            progressIsShowInactive={isShowInactive}
            progressSetShowInactive={setShowInactive}
            progressIsMastersAdminsActive={isMastersAdminsActive}
          />
        </div>

        {/* bottom group */}
        <div className="bottomGroup">
          {/*<ProgressBar  */}
          {/*  data={users} */}
          {/*  dataFiltered={filteredUsers}*/}
          {/*  btnOnClick={()=>{alert("tbd masteradmins progress bar")}}*/}
          {/*  filterText="users"*/}
          {/*  isShowInactive={isShowInactive}*/}
          {/*  setShowInactive={setShowInactive}*/}
          {/*  isMastersAdminsActive={isMastersAdminsActive}*/}
          {/*/>*/}
        </div>

      </Container>
    </SessionProvider>
  )
}
