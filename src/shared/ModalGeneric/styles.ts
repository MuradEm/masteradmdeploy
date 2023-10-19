import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div<Props>`
  background-color: var(--color-white-primary);
  border-radius: 0.375rem;
  padding: 0.625rem;

  display: flex;
  flex-direction: column;

  position: ${(props) =>
    props.top || props.bottom || props.right || props.left
      ? "absolute"
      : "static"};

  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  z-index: 1001;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 720px) {
    height: ${(props) => (props.title ? "100vh" : "auto")};
    width: ${(props) => (props.title ? "100vw" : "auto")};
  }

  section.modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 2.188rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 400;
      color: var(--color-blue-primary);
      @media (min-width: 720px) {
        font-size: 1.875rem;
      }
    }

    button {
      padding: 0;
      align-self: start;
    }
  }

  section.modalBody {
    height: 100%;
    //overflow: auto;
    //scrollbar-gutter: stable;
  }
`;
