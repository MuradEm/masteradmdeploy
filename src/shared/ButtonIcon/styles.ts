import styled from "styled-components";

interface ContainerProps {
  islabel: number;
}

export const Container = styled.button<ContainerProps>`
  color: var(--color-white-primary);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  h3 {
    display: ${(props) => (props.islabel == 0 ? "none" : "")};
    font-family: "Inter";
  }

  &:disabled {
    color: var(--color-gray-primary);
    cursor: default;

    &:hover {
      background-color: transparent;
    }
  }
  .download {
    height: 20px;
    width: 20px;
    opacity: 100%;
    border: none;
  }
  .closeImage {
    height: 20px;
    width: 20px;
    opacity: 100%;
    border: none;
  }
`;
