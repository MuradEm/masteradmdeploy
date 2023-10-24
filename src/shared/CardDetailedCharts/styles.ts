import styled from "styled-components";
import {ReactNode} from "react";



export const Container = styled.div`
  align-items: center;
  background-color: var(--color-white-primary);
  border-radius: 0;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);;
  padding: 0.313rem;
  display: flex;
  flex-direction: column;
  justify-content:  flex-start;
  flex-wrap: wrap;
  flex: 0;
  margin: 0;
  
  max-height: calc(100dvh - 3rem);
  width:100dvw;
  height: 100%;

  @media (min-width: 720px) {
    
    max-height: calc(100dvh );
    padding: 0.63rem;
    width: calc(100dvw - 6.875rem);
    height: 100%;
    align-items: center;
    background-color: var(--color-white-primary);
    border-radius: 1.5625rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);;
    padding: 0.313rem;
    display: flex;
    flex-direction: column;
    justify-content:  flex-start;
    flex-wrap: wrap;
    flex: 0;
    margin: 0;
  }
  .close{
     
      width: calc(100dvw - 0.62rem);
      height: 2rem;
      position: absolute;
      justify-self: center ;
      display: flex;
      align-items: start;
      align-self: flex-start;
      justify-content: flex-end;
    @media (min-width: 720px) {
      margin-top: 0.63rem;
      width: calc(100dvw - 7.5rem);
      height: 2rem;
      position: absolute;
      justify-self: center ;
      display: flex;
      justify-content: flex-end;
    }
  }
  .contentStyle{
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
  }
  
  .titleStyle{
    margin-top: 1rem;
    color: #024089;
    font-family: Ubuntu;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 120% */
    text-transform: capitalize;
    
    @media (min-width: 720px) {
      color: #024089;
      margin-top: 0.63rem;
      margin-bottom: 1.87rem;
      font-family: Ubuntu;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem; /* 80% */
      text-transform: capitalize;
    }
  }
`;
