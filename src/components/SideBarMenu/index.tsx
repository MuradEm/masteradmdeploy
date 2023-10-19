"use client"

import { AppContext } from "@/services/context";
import { Container } from "./styles";
import {useContext} from "react"
import Image from "next/image"
import pmLogoSBOpen from "../../assets/icons/pmLogoSBOpen.svg"
import pmLogoSBClosed from "../../assets/icons/pmLogoSBClosed.svg"
import {HiOutlineGlobe} from "react-icons/hi";
import {RiUserStarLine} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from 'next/navigation'

export function SideBarMenu(){
    const {isSideBarMenuActive, setIsSideBarMenuActive, isPortalsActive, setIsPortalsActive, 
        isMastersAdminsActive, setIsMastersAdminsActive, setHeaderLocation, setIsMoreOptionsActive} = useContext(AppContext);
        const screenSize = typeof window !== 'undefined' && typeof window.navigator !== 'undefined'? window.innerWidth: 1080;

        const router = useRouter()
        const path = usePathname()

    const {
        setShowModalEditPortal,

    } = useContext(AppContext);
    
    const {t} = useTranslation();

    function OpenSideBar(){
        setIsSideBarMenuActive(true);
    }

    function CloseSideBar(){
        setIsSideBarMenuActive(false);
    }

    function TogglePortalsActive(){
        setIsPortalsActive(true);
        setIsMastersAdminsActive(false);
        setIsMoreOptionsActive(false)

        router.push('/portals');  
    }

    function ToggleMasterAdminsActive(){
        setIsPortalsActive(false);
        setIsMastersAdminsActive(true);
        setIsMoreOptionsActive(false)

        router.push('/masteradmins'); 
    }

    function BackToDashboard(){
        setIsPortalsActive(false);
        setIsMastersAdminsActive(false);
        setIsMoreOptionsActive(false);
        setHeaderLocation("Dashboard")
        router.push('/')
    }

    return(
      <Container
        style={{display: path.startsWith("/auth") ? "none" : ""}} 
        isOpen={isSideBarMenuActive} 
        onMouseEnter={OpenSideBar} onMouseLeave={CloseSideBar}
        onClick={event => {setShowModalEditPortal(false), setIsSideBarMenuActive(false)}}
      >
        <div className="logo" onClick={BackToDashboard}>
            {isSideBarMenuActive ? 
                <Image src={pmLogoSBOpen} alt="pmLogo" onClick={CloseSideBar}></Image> : 
                screenSize > 720 ?  
                <Image src={pmLogoSBClosed} alt="pmLogo" onClick={CloseSideBar}></Image> : null}
        </div>
        <section>
            <div className={isPortalsActive ? "checked" : ""} onClick={TogglePortalsActive}>
                <HiOutlineGlobe />
                <h2>{t("Portals")}</h2>

            </div>
            <div className={isMastersAdminsActive ? "checked" : ""} onClick={ToggleMasterAdminsActive}>
                <RiUserStarLine />
                <h2>{t("MasterAdmins")}</h2>
            </div>
        </section>
      </Container>  
    )
}