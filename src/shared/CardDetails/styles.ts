import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "var(--color-white-primary)"};
  
  flex-direction: column;
  height: 100%; //Maybe change this when we have the layout
  width: 100%;
  min-width: 23.4375rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: auto;
  
  @media (min-width: 720px) {
    border: 1px solid #F4F4F5;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    max-width: ${(props) => props.width ? props.width : "58.9375rem"};
    border-radius: ${(props) =>    props.borderRadius ? props.borderRadius : "0.375rem"};
    height: ${(props) => props.height ? props.height : "51.75rem"};
    
  }
  .closeButton{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 0.44rem;
    padding-top: 0.75rem;
    cursor: pointer;
  }
  
  .bodyClass{
    flex: 1;
    padding-top: ${(props) => props.paddingBodyTop ? props.paddingBodyTop : "2.25rem"};
    @media (min-width: 720px) {
      padding-top: ${(props) => props.paddingBodyTop ? props.paddingBodyTop : "2.25rem"};
    }
  }
  
  .footerClass{
    padding: 0.63rem 0.63rem;
  }
  
`;
