
import { Container } from "./styles";
import tooltipIcon from "@/assets/icons/tooltipIcon.svg";
import {useEffect, useRef, useState} from "react";

/*##################################################
***Component***
    CheckBox
***Description***
  Button with true or false states

***Props***
    onChange        function executed when the checkbox state is changed
    isChecked       variable that verifies the checkbox state
###################################################*/

export interface Props {
    toolTipText: string;
    alignment: "left" | "right"
}
export function ToolTipButton({toolTipText, alignment}: Props) {
    const [toolTipOpened, setToolTipOpened] = useState<boolean>(false);
    const toolTipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (toolTipOpened) {
            toolTipRef.current?.focus();
        }
    }, [toolTipOpened])
    return (
        <Container toolTipText={toolTipText} alignment={alignment}>
            <img
                src={tooltipIcon.src}
                onClick={() => setToolTipOpened(!toolTipOpened)}
            />
            <div tabIndex={0}  onBlur={event => {setToolTipOpened(!toolTipOpened)}} className={"toolTipStyle"} ref={toolTipRef} style={{display: toolTipOpened ? "block" : "none"}}>
                <p className={"toolTipTextStyle"}>{toolTipText}</p>
            </div>
        </Container>
    );
}
