import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  functionButton?: () => void;
  margin?: string;
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  color: var(--color-white-primary);
  display: inline-block;
  border-radius: 6px;
  margin: ${(props) => (props.margin ? props.margin : "0.3rem")};
  transition: 0.5s all;
  font-size: 0.875rem;
  padding: 3px 1rem;
  border: none;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: "Inter";

  cursor: pointer;
  background: ${(props) =>
    !props.color
      ? "var(--color-blue-primary)"
      : props.color == "red"
      ? "var(--color-red-primary)"
      : props.color == "green"
      ? "var(--color-green-dark-primary)"
      : props.color == "cyan"
      ? "var(--color-blue-tertiary)"
      : "var(--color-gray-alternative)"};

  &:hover {
    background: ${(props) =>
      !props.color
        ? "var(--color-hover-primary)"
        : props.color == "red"
        ? "var(--color-red-primary-hover)"
        : props.color == "green"
        ? "var(--color-green-light-primary)"
        : props.color == "cyan"
        ? "var(--color-blue-tertiary)"
        : "var(--color-gray-alternative)"};
    color: ${(props) =>
      props.color == "green" ? "var(--color-black-primary)" : ""};
  }
`;
