import styled from "styled-components";

export interface Props{
  translation: any
}


export const Container = styled.div<Props>`
  flex: 1;
  max-width: 100dvw;
  height: 100%;
  @media (min-width: 720px) {
    width: 58.9375rem;
  }
  //overflow: auto;
  position: relative;
  .radioButtonStyle{
    
  }
  
  .bigEmailInputField{
    //width: 22.1875rem;
    width: 90dvw; //Test for responsivity
    @media (min-width: 720px) {
      width: 18.75rem;
    }
    div:last-child{
      background-color: var(--color-white-primary);
    }
    p{
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }

    input{
      background-color: var(--color-white-primary);
    }
  }
  
  
  .radioButtonGroup{
    display: flex;
    flex-direction: column;
    gap: 1.87rem;
  }

  .requiredFields{
    position: relative;
    label{
      div{
        p{
          color: red;
        }
        border-color: red;
      }
    }
  }

  .requiredFields:before{
    position: absolute;
    font-family: 'Ubuntu';
    top: 2.4rem;
    content: "${(props) => props.translation('Error')}:";
    font-weight: bold;
    font-size: 0.75rem;
    color: red;
  }

  .requiredFields:after{
    position: absolute;
    font-family: 'Ubuntu';
    top: 2.4rem;
    left: 2.2rem;
    content: "${(props) => props.translation('this field is mandatory')}";
    font-size: 0.75rem;
    color: red;
  }

  .userNameInput{
    color: var(--color-blue-tertiary);
    font-family: Ubuntu;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 80% */
    text-transform: capitalize;
  }
  
`;
