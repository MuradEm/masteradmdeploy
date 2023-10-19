import styled from "styled-components";
import {Props} from "./index";

export const Container = styled.div<Props>`
width: 35px;
right: 0;
border-radius: 22.5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
z-index: 10;

.info{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;

    svg{
        line{
            color:  ${(props) => props.secondaryColor ? "var(--color-gray-tertiary)" : ""};
        }
    }
}

svg{
    width: 2.1875rem;
    height: 2.1875rem;
}

.staticIcon{
    line{
        color: var(--color-black-primary);
    }
}

h2, .animatedText{
    color: var(--color-blue-primary);
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Ubuntu";
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.30);
    white-space: nowrap; 
    margin-top: 2px;
    margin-bottom: 5px;
}

.animatedText{
    animation: marquee 3.5s linear infinite; 
    display: inline-block;

}

@keyframes marquee {
0% {
    transform: translateX(100%);
}
100% {
    transform: translateX(-100%);
}
}
`