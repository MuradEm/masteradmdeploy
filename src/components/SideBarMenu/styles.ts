import styled from "styled-components";


interface SideBarOpen {
    isOpen: boolean;
  }

export const Container = styled.aside<SideBarOpen>`
  background-color: var(--color-blue-primary);
  position: absolute;
  transition: all 0.3s;
  height: 120%; //avoid mobile bug. 100% was missing a small line on mobile /Felipe
  z-index: 20000;
  width: ${(props) => (props.isOpen ? "15.625rem" : "4.375rem")};

  @media (max-width: 720px) {
    width: ${(props) => (props.isOpen ? "15.625rem" : "0")};
  }

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.625rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  section{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    div{
        width: calc(100% - 0.625rem);
        height: 2.25rem;
        display: flex;
        justify-content: ${(props) => (props.isOpen ? "start" : "center")};;
        align-items: center;
        border-radius: 0.25rem;
        margin-bottom: 0.75rem;
        cursor: pointer;

        svg{
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-white-primary);
            margin: ${(props) => (props.isOpen ? "0 1rem" : "0")};
        }

        h2{
            display: ${(props) => (props.isOpen ? "" : "none")};
            color: var(--color-white-primary);
            font-family: "Ubuntu";
            font-size: 1.25rem;
        }

        &:hover{
            background-color: var(--color-hover-primary);
        }
    }
  }

  .checked{
    background-color: var(--color-blue-secundary);
    cursor: default;

    &:hover{
            background-color: var(--color-blue-secundary);
        }
  }
`