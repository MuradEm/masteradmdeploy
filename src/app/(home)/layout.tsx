"use client";
import type { Metadata } from 'next'
import AppContextProvider, {AppContext} from "@/services/context";
import {SessionProvider} from "next-auth/react";
import ClientSessionProvider from "@/app/Session";
import { Header } from '@/components/Header';
import { SideBarMenu } from '@/components/SideBarMenu';
import styles from '../styles.module.css'
import {useContext} from "react";
import {ModalDelete} from "@/components/ModalDeletePortal";
import {useTranslation} from "react-i18next";
import { ModalWarning } from '@/components/ModalWarning';


export default function RootLayoutHome({
  children,
}: {
  children: React.ReactNode
}) {
    const {
        currentPortal,
        showModalDelete,
        setShowModalDelete,
        showModalAbout,
        setShowModalAbout,
        versionNumber,
        versionDate,
        quitMasterWithoutSaving,
        setQuitMasterWithoutSaving,
        setShowModalEditPortal
    } = useContext(AppContext);
    const { t } = useTranslation();
  return (
    <>
      {/*  Modals*/}
        {showModalDelete && <ModalDelete client_id={currentPortal.client_id} textWarning={t("Do you really want to delete this portal?")} textButton1={t("No")} onClick1={e => {setShowModalDelete(false)}} textButton2={t("Yes")} onClick2={e => {}}/>}
      {/*  Page*/}
      <SideBarMenu></SideBarMenu>
      <div className={styles.layout}>
        <Header></Header>
        {showModalAbout && (
        <ModalWarning
          textWarning={
            "MasterADM 2.0" + " " + t("Version") + " " + versionNumber + " " + t("DeployedIn") + " " + versionDate
          }
          textButton1={t("OK")}
          onClick1={() => setShowModalAbout(false)}
        />
      )}
      {quitMasterWithoutSaving && 
        <ModalWarning 
        textWarning={t("Do you really want to quit without saving?")} 
        textButton1={t("Cancel")} 
        onClick1={() => setQuitMasterWithoutSaving(false)}
        textButton2={t("Yes")}
        onClick2={() => (setShowModalEditPortal(false), setQuitMasterWithoutSaving(false))}></ModalWarning>}
        {children}
      </div>
    </>
  )
}
