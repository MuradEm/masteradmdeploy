import styled from "styled-components";
interface ContainerProps {
  $isinput: string;
  // missingDescription: boolean;
}

export const Container = styled.label<ContainerProps>`
  display: grid;
  background-color: transparent;
  /* flex-direction: column; */
  width: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  p {
    z-index: 1;
    margin-left: 0.938rem;
    background: var(--color-white-primary);
    width: fit-content;
    padding: 0 0.25rem;
    font-size: 0.875rem;
  }
  div {
    margin-top: ${(props) => (props.$isinput == "1" ? "-0.5rem" : "")};
    div {
      border: 1px solid var(--color-gray-alternative);
      border-radius: 4px;
      div {
        border: none;
      }
    }
  }
  .labelHeader{
    grid-column: 1;
    grid-row: 1;
    z-index: 2;
    background-color: transparent;
  }

  .labelContent{
    grid-column: 1;
    grid-row: 1;
  }
  select {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  textArea {
    border-radius: 0.625rem;
    margin-top: -0.5rem;
    padding: 0.563rem 0.813rem 0.563rem 0.813rem;
    resize: none;
    border-radius: 0.25rem;
    font-family: "Inter";
    font-size: 0.9rem;

    border-color: var(--color-gray-alternative);

    :focus {
      outline: none !important;
    }
  }

  .groupStyles {
    align-items: end;
    width: 100%;
  }

  .headerstyle {
    font-size: 1.125rem;
    font-family: "Ubuntu";
    font-weight: 500;
    text-transform: none;
    color: var(--color-blue-primary);
    border-bottom: 1px solid var(--color-gray-primary);
    padding-left: 1.25rem;
    width: 100%;
  }
`;
