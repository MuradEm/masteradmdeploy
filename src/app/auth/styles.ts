import styled from "styled-components";

interface ForgotPassword {
  $forgotPassword: boolean;
}

export const Container = styled.div<ForgotPassword>`
  color: var(--color-gray-alternative);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .logo {
    width: 50%;
    @media (max-width: 720px) {
      display: none;
    }

    img {
      @media (max-width: 1400px) {
        width: 52%;
        height: 32%;
      }
    }
  }

  .login {
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 720px) {
      width: 100%;
    }
  }

  hr {
    background-color: var(--color-gray-primary);
    border: none;
    width: 1px;
    height: calc(100% - 140px);

    @media (max-width: 720px) {
      display: none;
    }
  }

  section {
    
    width: 50%;
      height: 66%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 720px) {
      background-color: transparent;
      width: 84%;
    }
    
    img {
      margin-top: 4.375rem;
      margin-bottom: 1.25rem;
      width: 8.5625rem;
      height: 8.5625rem;
      border-radius: 0.375rem;
    }

    h1 {
      color: var(--color-blue-primary);
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 2.5rem;

      @media (max-width: 720px) {
        margin-bottom: 0.1875rem;
      }
    }

    .logoMobile {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 720px) {
        display: none;
      }

      img {
        width: 5rem;
        height: 5rem;
      }
    }
    .divBack{
      position: absolute;
      z-index:-1; 
      width: 25.10dvw;
      height: 58.33dvh;
      background-color: var(--color-gray-secundary);
      filter: blur(18.5px);
    }
    div {
      width: 83%;
      display: flex;
      flex-direction: row;
      margin-bottom: 1.25rem;
      height: 2.375rem;

      input {
        font-family: "Inter";
        font-size: 1.25rem;
        font-weight: 400;
      }

      ::placeholder {
        color: var(--color-gray-primary);
        font-family: "Ubuntu";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 10.6px 0 0;
      }
    }

    .rememberLine {
      display: flex;
      align-items: center;
      margin-top: -15px;
      margin-bottom: 2.5rem;
    }

    button {
      width: 83%;
      margin-bottom: 117px;
      height: 2.375rem;
      font-size: 1.25rem;
    }
  }

  h2 {
    font-family: "Ubuntu";
    color: var(--color-gray-alternative);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-left: 0.3125rem;
    cursor: pointer;
  }
  h3 {
    color: var(--color-blue-tertiary);
    font-family: "Ubuntu";
    font-size: 1rem;
    font-weight: 400;
    line-height: 140%;
    margin-left: auto;
    cursor: pointer;

    &:hover {
      color: var(--color-hover-primary);
    }
  }

  .spin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
