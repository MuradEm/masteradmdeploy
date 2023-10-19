import styled from "styled-components";
interface InputProps {
  $iconRight: boolean;
  $iconLeft: boolean;
  $iconFunction: boolean;
  $iconFunctionL: boolean;
  $isVisibility: boolean;
}

export const Container = styled.div<InputProps>`
  display: ${(props) => (props.$isVisibility ? "none" : "flex")};
  background-color: var(--color-white-secundary);
  border: 1px solid var(--color-gray-alternative);
  border-radius: 4px;

  align-items: center;
  overflow: hidden;
  justify-content: ${(props) => (props.$iconRight ? "space-between" : "start")};
  width: 100%;
  padding: 0.15rem;

  height: 2.375rem;
  //input[type="date"]::-webkit-calendar-picker-indicator {
  //  display: none; /* Hides the icon in Chrome and Firefox < v109 */
  //}
  img {
    margin-left: ${(props) => (props.$iconFunction ? "1.1rem" : "")};
    margin-right: ${(props) => (props.$iconRight ? "0.75rem" : "")};
    cursor: ${(props) => (props.$iconFunction ? "pointer" : "")};
    
  }

  input {
    width: 100%;
    border: none;
    padding: 0.3rem;
    //padding-left: 10.6px;
    outline: none;
    /* font-size: 0.9rem; */
    font-size: 1.25rem;
    font-family: "Inter";
    ::placeholder {
      color: var(--color-gray-tertiary);

      &:hover {
        color: var(--color-blue-primary);
      }
    }

    &:hover {
      /* box-shadow: 0 8px 16px rgb(0 0 0 / 10%); */
      /* border: 2px solid var(--color-blue-primary); */
    }
  }
  input[type="color"] {
    padding: 0;
    width: 4.4375rem;
    height: 1.5rem;
    border-radius: 0.375rem;
  }
`;
