
"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { AppContextProviderProps, timeReportProps } from "../util/interfaces";
import { parseCookies } from "nookies";
import { Portal } from "@/components/CardDetailsPortal";
import { MasterUser } from "@/components/CardDetailsMasters";

/*################################################## 
***Service***
AppContextProvider
***Description***
......... 
***Props***
none
###################################################*/
const { "timesheet.portalId": portal } = parseCookies();
export const AppContext = createContext({} as AppContextProps);

interface AppContextProps {
  isWrongCredentials: boolean;
  setIsWrongCredentials: Dispatch<SetStateAction<boolean>>;
  isWrongEmail: boolean;
  setIsWrongEmail: Dispatch<SetStateAction<boolean>>;
  isRecoverPassword: boolean;
  setIsRecoverPassword: Dispatch<SetStateAction<boolean>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  headerSearchText: string;
  setHeaderSearchText: Dispatch<SetStateAction<string>>;
  userPhoto: string;
  setUserPhoto: Dispatch<SetStateAction<string>>;
  showModalUser: boolean;
  setShowModalUser: Dispatch<SetStateAction<boolean>>;
  showModalPassword: boolean;
  setShowModalPassword: Dispatch<SetStateAction<boolean>>;
  showModalAbout: boolean;
  setShowModalAbout: Dispatch<SetStateAction<boolean>>;
  headerLocation: string;
  setHeaderLocation: Dispatch<SetStateAction<string>>;
  isSideBarMenuActive: boolean;
  setIsSideBarMenuActive: Dispatch<SetStateAction<boolean>>;
  isPortalsActive: boolean;
  setIsPortalsActive: Dispatch<SetStateAction<boolean>>;
  isMastersAdminsActive: boolean;
  setIsMastersAdminsActive: Dispatch<SetStateAction<boolean>>;
  isMoreOptionsActive: boolean;
  setIsMoreOptionsActive: Dispatch<SetStateAction<boolean>>;
  isShowInactive: boolean;
  setShowInactive: Dispatch<SetStateAction<boolean>>;
  headerHideSearch: boolean;
  setHeaderHideSearch: Dispatch<SetStateAction<boolean>>;
  headerShowAdd: boolean;
  setHeaderShowAdd: Dispatch<SetStateAction<boolean>>;
  headerAddOnClick: Function;
  setHeaderAddOnClick: Dispatch<SetStateAction<Function>>;
  showModalEditPortal: boolean;
  setShowModalEditPortal: Dispatch<SetStateAction<boolean>>;
  currentPortal: Portal;
  setCurrentPortal: Dispatch<SetStateAction<Portal>>;
  showModalDelete: boolean;
  setShowModalDelete: Dispatch<SetStateAction<boolean>>;
  currentMasterUser: MasterUser;
  setCurrentMasterUser: Dispatch<SetStateAction<MasterUser>>;
  users: MasterUser[];
  setUsers: Dispatch<SetStateAction<MasterUser[]>>;
  portals: Portal[];
  setPortals: Dispatch<SetStateAction<Portal[]>>;
  versionNumber: string;
  setVersionNumber: Dispatch<SetStateAction<string>>;
  versionDate: string;
  setVersionDate: Dispatch<SetStateAction<string>>;
  quitMasterWithoutSaving: boolean;
  setQuitMasterWithoutSaving: Dispatch<SetStateAction<boolean>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [isWrongCredentials, setIsWrongCredentials] = useState<boolean>(false);
  const [isWrongEmail, setIsWrongEmail] = useState<boolean>(false);
  const [isRecoverPassword, setIsRecoverPassword] = useState<boolean>(false);
  const [headerLocation, setHeaderLocation] = useState<string>("Dashboard");

  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userPhoto, setUserPhoto] = useState<string>("");
  const [headerSearchText, setHeaderSearchText] = useState<string>("");
  const [showModalPassword, setShowModalPassword] = useState<boolean>(false);
  const [showModalUser, setShowModalUser] = useState<boolean>(false);
  const [showModalAbout, setShowModalAbout] = useState<boolean>(false);
  const [isPortalsActive, setIsPortalsActive] = useState<boolean>(false);
  const [isSideBarMenuActive, setIsSideBarMenuActive] =
    useState<boolean>(false);
  const [isMastersAdminsActive, setIsMastersAdminsActive] =
    useState<boolean>(false);
  const [isMoreOptionsActive, setIsMoreOptionsActive] =
    useState<boolean>(false);
  const [isShowInactive, setShowInactive] = useState<boolean>(false);
  const [headerHideSearch, setHeaderHideSearch] = useState<boolean>(false);
  const [headerShowAdd, setHeaderShowAdd] = useState<boolean>(false);
  const [headerAddOnClick, setHeaderAddOnClick] = useState<Function>(() => {});
  const [showModalEditPortal, setShowModalEditPortal] =
    useState<boolean>(false);
  const [currentPortal, setCurrentPortal] = useState<Portal>({
    client_id: "0",
  } as Portal);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [currentMasterUser, setCurrentMasterUser] = useState<MasterUser>({
    name: "",
    email: "",
    checkedValue: "1",
  });
  const [users, setUsers] = useState<MasterUser[]>([]);
  const [portals, setPortals] = useState<Portal[]>([]);
  const [versionNumber, setVersionNumber] = useState<string>("2.0")
  const [versionDate, setVersionDate] = useState<string>("2023/10/18")
  const [quitMasterWithoutSaving, setQuitMasterWithoutSaving] = useState<boolean>(false);


  return (
    <AppContext.Provider
      value={{
        isWrongCredentials,
        setIsWrongCredentials,
        isRecoverPassword,
        setIsRecoverPassword,
        isWrongEmail,
        setIsWrongEmail,
        headerLocation,
        setHeaderLocation,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        headerSearchText,
        setHeaderSearchText,
        userPhoto,
        setUserPhoto,
        showModalUser,
        setShowModalUser,
        showModalAbout,
        setShowModalAbout,
        showModalPassword,
        setShowModalPassword,
        isSideBarMenuActive,
        setIsSideBarMenuActive,
        isPortalsActive,
        setIsPortalsActive,
        isMastersAdminsActive,
        setIsMastersAdminsActive,
        isMoreOptionsActive,
        setIsMoreOptionsActive,
        isShowInactive,
        setShowInactive,
        headerHideSearch,
        setHeaderHideSearch,
        headerShowAdd,
        setHeaderShowAdd,
        headerAddOnClick,
        setHeaderAddOnClick,
        showModalEditPortal,
        setShowModalEditPortal,
        currentPortal,
        setCurrentPortal,
        showModalDelete,
        setShowModalDelete,
        currentMasterUser,
        setCurrentMasterUser,
        users,
        setUsers,
        portals,
        setPortals,
        versionNumber,
        setVersionNumber,
        versionDate,
        setVersionDate,
        quitMasterWithoutSaving,
        setQuitMasterWithoutSaving
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
