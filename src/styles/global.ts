'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
    :root{
        --color-black-primary: #2F3640;
        --color-black-secundary: #353B48;
        --color-white-primary: #FFFFFF;
        --color-white-secundary: #f4f4f5;
        --color-white-tertiary: #D4D4D8;
        --color-gray-primary: #D1D1D1;
        --color-gray-secundary: #F5F5F5;
        --color-gray-tertiary: #B2B2BB;
        --color-gray-alternative: #71717A;
        --color-blue-primary: #024089;
        --color-blue-hover: #2684ff;
        --color-hover-primary: #0063D7;
        --color-blue-secundary: #54A2FF;
        --color-blue-tertiary: #2BAACA;
        --color-blue-quarteary: #9AB3D0;
        --color-yellow-primary: #FBC531;
        --color-yellow-secundary: #FFF3D1;
        --color-red-primary: #FF0000;
        --color-red-primary-hover: #CD3434;
        --color-red-secundary: #F6D0D0;
        --color-red-tertiary: #FF4560;
        --color-green-dark-primary: #44BD32;
        --color-green-light-primary: #10FF10;
        --color-green-light-secundary: #E3F3DF;
        --color-green-light-tertiary: #D1FFBB;
        --color-green-quarteary: #00E396;
        --color-purple-primary: #E9D3FF;
        --color-blue-quinquinary: #BBEFFF;
        --representative-orange: #F16000;
        --representative-purple-primary: #D1AAFF;
        --representative-yellow: #ECA925;
    }

    *:focus {
        outline: 0 !important;
    }
    
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu'; 
    }

    body{
        overflow: hidden;
    }

    h1{
        font-size: 1.25rem ;
        font-weight: 400; 

        @media (min-width: 720px) {
            font-size: 1.875rem ;
        }  
    }

    h2{  
        font-size: 1.4rem ;
        font-weight: 400; 
        

        @media (min-width: 720px) {
            font-size: 1.6rem ;
        } 
    }

    h3{
        font-size: 0.875rem ;
        font-weight: 500;

        @media (min-width: 720px) {
            font-size: 1rem ;
        }
    }

    h4{
        font-size: 0.75rem ;
        font-weight: 400 ;

        @media (min-width: 720px) {
            font-size: 0.875rem ;
        } 
    }


    h5{
        
    }


    h6{

    }

    ::-webkit-scrollbar{
        height: 0.3125rem;
        width: 0.3125rem;
        padding-right: 0.313rem;
        background-color: transparent
        
    }

    ::-webkit-scrollbar-track{
        border-radius: 4px;
        margin: 25px;
        background-color: transparent;

    }

    ::-webkit-scrollbar-thumb{
        background: var(--color-gray-alternative);
        border-radius: 4px;

    }
    ::-webkit-scrollbar-corner{
        background-color: transparent;

    }
    
    *::-webkit-scrollbar,
    *::-webkit-scrollbar-thumb {
        height: .9rem;
        width: .9rem;
        border-radius: 13px;
        background-clip: padding-box;
        border: 5px solid transparent;
}
`;
