import styled from "styled-components";

export const Container = styled.div`
  top: calc(50% - 12.75rem / 2);
  left: calc(50% - 95dvw / 2);
  width: 95dvw;
  height: 12.75rem;
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  background-color: var(--color-white-primary);
  border-radius: 0.563rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 500000000;

  @media (min-width: 720px) {
    width: 22.063rem;
    height: 12.75rem;
    left: calc(50% - 26.25rem / 2);
    padding: 3.1rem 1.25rem 1.25rem 1.25rem;
  }

  .icontext {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    gap: 0.625rem;
  }

  section {
    display: flex;
    flex-direction: row;
    margin-top: 0;
    max-height: 7.75rem;
    max-width: 19.563rem;
    img {
      padding-bottom: 0.9rem;
    }

    h1 {
      //margin-left: 0.625rem;
      font-size: 1.125rem;
      padding-bottom: 1.53rem;
      color: var(--color-black-primary);
    }
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1.875rem;
    gap: 1.25rem;

    button {
      width: 50%;
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
