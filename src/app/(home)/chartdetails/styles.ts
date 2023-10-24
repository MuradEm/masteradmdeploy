import styled from "styled-components";

interface Props {
  // pbDoneWidth: Number;
}

export const Container= styled.div<Props>`

align-items: center;
justify-content: center;
  @media (min-width: 720px) {
    width:calc(100% - 2.5rem) ;
    margin-top: 0;
    align-items: center;
    justify-content: center;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  .distance{
    justify-self: start;
    
    height: 100%;
    @media (min-width: 720px) {
      
    }
  }

`;
