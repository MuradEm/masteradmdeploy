import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2.5rem);

  @media (min-width: 720px) {
    width: 25.438rem;
  }

  .body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  

  div:last-child {
    display: flex;
    justify-content: end;

    button {
      margin: 0.563rem 0 0 0;

      @media (max-width: 720px) {
        margin-bottom: 1rem;
      }
    }
  }

  div {
    label {
      margin-bottom: 1.313rem;

      p {
        color: var(--color-blue-primary);
      }

      input {
        color: var(--color-black-primary);
      }
    }
  }

  .tmpbugfix {
    margin: 0;
    padding: 0;
    border: none;
    height: 0px;
  }

  .footer{
    @media (max-width: 720px) {
      position: absolute;
      bottom: 3.5rem;
      right: 1rem;
    }
  }
`;
