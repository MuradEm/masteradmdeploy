import styled from "styled-components";

export interface Props{
  translation: any
}

export const Container = styled.div<Props>`
  top: calc(50% - 12.75rem / 2);
  left: calc(50% - 95dvw / 2);
  width: 95dvw;
  height: 12.75rem;
  background-color: var(--color-white-primary);
  border-radius: 0.563rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 3001;
  padding: 0.75rem 1.69rem 1.25rem 1.62rem;

  @media (min-width: 720px) {
    width: 22.063rem;
    height: 12.75rem;
    left: calc(50% - 26.25rem / 2);
  }

  .icontext {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    gap: 0.625rem;
  }

  .requiredFields {
    position: relative;
    label {
      div {
        p {
          color: red;
        }
        border-color: red;
      }
    }
  }

  .requiredFields:before {
    position: absolute;
    font-family: "Ubuntu";
    top: 2.4rem;
    content: "Error:";
    font-weight: bold;
    font-size: 0.75rem;
    color: red;
  }

  .requiredFields:after {
    position: absolute;
    font-family: "Ubuntu";
    top: 2.4rem;
    left: 2.2rem;
    content: "${(props) => props.translation('Wrong confirmation text')}";
    font-size: 0.75rem;
    color: red;
  }

  section {
    display: flex;
    flex-direction: row;
    margin-top: 0;
    max-height: 7.75rem;
    max-width: 18rem;
    img {
    }

    h1 {
      //margin-left: 0.625rem;
      color: var(----color-black-primary, #2F3640);
      font-family: Ubuntu;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 28px */
    }
  }
  .inputFloatingStyles{
    position: relative;
  }
  .floatingToolTipButton{
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.75rem 0.62rem 0.81rem 0;
  }
  
  .inputConfirmationStyles{
    
    width: 18.75rem;
    height: 2.375rem;

    p{
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }
    
    div:last-child{
        background-color: var(--color-white-primary);
    }

    input{
      background-color: var(--color-white-primary);
    }
  }

  .modalWarningStyles {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1.875rem;
    gap: 1.25rem;

    button {
      width: 8.125rem;
      margin: 0;

      h1 {
        color: var(--color-white-primary);
      }
    }

    h1 {
      font-size: 0.875rem;
      font-family: "Inter";
    }
  }
  
`;
