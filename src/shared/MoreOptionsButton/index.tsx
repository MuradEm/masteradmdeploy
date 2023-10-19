import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { AppContext } from "@/services/context";
import {useContext} from "react";

import { IconType } from "react-icons";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FiXCircle } from "react-icons/fi";

/*##########################################################
***Component***
    MoreOptionsButton
***Description***
    Generic component that contains options of buttons *mobile only*
***Props***
    infoAmount: how many buttons the component has
    infoContent: an array of informations for each button: 
        [type of react-icon, icon color, button background, text, icon rotation]
    functions: an array of functions for each button
    functionParameters: the parameters of the functions above
    secondaryColor (optional): a secondary color for the icon

    EXAMPLE:
        <MoreOptionsButton 
        infoAmount={2} 
        infoContent={[[<FiDisc/>, "blue", "none", t("ShowInactive"), 90], 
                      [<HiOutlinePlusSm/>, "white", "blue", t("New")]]}
        functions={[console.log, setShowModalUser]}
        functionParameters={["Teste1", !showModalUser]}
        secondaryColor: "gray"
        >      
##########################################################*/

export interface Props{
    infoAmount: Number;
    infoContent: [IconType, "blue" | "white" | "gray", "lightBlue" | "blue" | "white", string, 90 | 0][] 
    functions: Function[];
    functionParameters: any[];
    secondaryColor?: "gray" | ""
}

export function MoreOptionsButton({infoAmount, infoContent, functions, functionParameters, secondaryColor}:Props){
    const {t} = useTranslation();
    const {isMoreOptionsActive, setIsMoreOptionsActive} = useContext(AppContext);
    const infoElements = [];

    for (let i = 0; i < Number(infoAmount); i++) {
      infoElements.push(infoContent[i])
    }

    function ToggleMoreOptions(){
        setIsMoreOptionsActive(!isMoreOptionsActive)
    }
    return(
        <Container 
            infoAmount={infoAmount} 
            infoContent={infoContent} 
            functions={functions} 
            functionParameters={functionParameters}
            secondaryColor={secondaryColor ? "gray" : ""}
            style={{backgroundColor: isMoreOptionsActive ? "var(--color-white-secundary)" : "transparent"}}
        >
            
            {isMoreOptionsActive && infoElements.map((item: any, index: any) => 
            <>
                <div className="info" 
                style=
                {{backgroundColor: item[2] == "white" ? "var(--color-white-secundary)" 
                : item[2] == "blue" ? "var(--color-blue-primary)" 
                : item[2] == "lightBlue" ? "var(--color-blue-tertiary)" : "",
                    color: item[1] == "blue" ? "var(--color-blue-primary)" : 
                    item[1] == "gray" ? "var(--color-gray-tertiary)" : "var(--color-white-primary)",
                    transform: item[4] == 90 ? "rotate(90deg)" : ""
                }}
                onClick={() => functions[index](functionParameters[index])}>
                    {item[0]}
                    
                </div>
                <h2 className={item[3].length > 6 ? "animatedText" : ""}>{t(item[3])}</h2>
            </>)}
           
            {isMoreOptionsActive 
            ? <FiXCircle className="staticIcon" style={{color: "var(--color-blue-primary)"}} onClick={ToggleMoreOptions} />
            : <HiOutlineDotsCircleHorizontal style={{color: "var(--color-blue-primary)"}} onClick={ToggleMoreOptions}/>}
            
        </Container>
    )
}