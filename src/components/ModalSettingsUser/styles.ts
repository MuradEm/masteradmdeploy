import styled from "styled-components";

export const Container = styled.div`
  section {
    display: flex;
    flex-direction: row;
    padding-left: 1.25rem;
    .userIcon {
      height: 4.375rem;
      width: 4.375rem;
      margin-bottom: 0.625rem;
      padding-left: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit:contain;
        border-radius: 2.188rem;
        margin: 0 0 0 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
      color: var(--color-blue-primary) !important;
      font-family: "Inter";
      font-size: 1.25rem;

      span {
        color: var(--color-gray-alternative);
        font-size: 1rem;
      }
    }
  }

  hr {
    border: none;
    height: 1px;
    background-color: var(--color-gray-primary);
    margin-bottom: 0.875rem;
  }

  button {
    color: var(--color-blue-primary);
    width: 18.125rem;
    margin: 0.5rem 0.625rem 0 0.625rem;
    height: 2.25rem;
    border-radius: 5px;
    padding: 6px 10px;

    &:hover {
      background-color: var(--color-white-secundary);
      transition: 0.2s ease-in;
    }

    svg {
      margin-right: 0.625rem;
      font-size: 24px;
    }
  }
`;
