import styled from "styled-components";

export const Container = styled.span`
  margin-top: 0 !important;

  span {
    svg {
      font-size: 1rem !important;
    }
    height: calc(1.25rem - 1px);
    width: calc(1.25rem - 1px);
    border: 1.4px solid var(--color-blue-primary);
    border-radius: 5px;
    color: var(--color-blue-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white-primary);
  }

  input {
    display: none;
  }
`;
