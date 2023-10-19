import styled from "styled-components";
import threeDotsRoundedBorder from "../../assets/icons/threeDotsRoundedBorder.svg";

export const Container= styled.header`
  .pb {
    float: left;
    position: relative;
    width: 18.75rem; //300px
    height: 1.875rem; //30px
    justify-self: end;
    align-self:flex-end;
    display: flex;
    margin-bottom: 2.5px;
    

    @media (min-width: 720px) {
      float: right;
    }
  }

  .pbtotal {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--color-gray-primary);
    border-radius: 0.625rem; //10px   
    border: 0.063rem solid var(--color-blue-primary); //1px
  }

  .pbdone {
    position: absolute;
    height: 100%;
    background-color: var(--color-blue-primary);
    border-radius: 0.625rem; //10px    
  }

  .pbtext {
    position: absolute;
    width: 18.75rem; //300px
    z-index: 1;
    text-align: center;
    font-size: 0.75rem; //12px
    line-height: 1.875rem; //30px
    color: var(--color-white-primary);
    font-family: "Ubuntu";
    font-weight: 500;
  }

  .footer{
    gap: 0.63rem;
    @media (max-width: 720px) {
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }
`;
