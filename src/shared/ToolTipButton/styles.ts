import styled from "styled-components";
import {Props} from "./index"

export const Container = styled.div<Props>`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  
    .toolTipStyle{
      width: 9.0625rem;
      position: absolute;
      top: 0;
      
      left: ${(props) => props.alignment == "left"? "-9.5rem" : "1.25rem"};
      background-color: var(--color-black-primary);
      border-radius: 0.25rem;
      z-index: 20;

      @media (min-width: 720px) {
        left: 1.25rem;
      }
    }
  
  
  .toolTipTextStyle{
    color: #FFF;
    text-align: center;
    font-family: Ubuntu;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 160% */
    padding: 0 0.63rem;
  }
  
`;
