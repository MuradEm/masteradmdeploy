import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div<Props>`
  background-color: var(--color-white-primary);
  border-radius: 1.5625rem;

  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  gap: ${(props) => (props.geometry == "rectangle" ? "" : "0.25rem")};

  height: ${(props) =>
    props.geometry == "rectangle" ? "4.8125rem" : "10.875rem"};
  width: ${(props) =>
    props.geometry == "rectangle" ? "33.75rem" : "10.375rem"};

  @media (max-width: 720px) {
    height: ${(props) =>
      props.geometry == "rectangle" ? "4.8125rem" : "6.25rem"};
    width: ${(props) =>
      props.geometry == "rectangle" ? "33.75rem" : "6.25rem"};
  }

  display: flex;
  flex-direction: ${(props) =>
    props.geometry == "rectangle" ? "row" : "column"};
  align-items: center;

  justify-content: ${(props) =>
    props.geometry == "rectangle" ? "space-around" : "center"};

  @media (min-width: 720px) {
    img{
    width: 50px;
    height: 50px;
  }
  .imgSizing{
    height: 57px;
  }
}
    
  h1,
  h2,
  h3 {
    color: ${(props) =>
      props.fontColor == "blue"
        ? "var(--color-blue-primary)"
        : "var(--color-gray-alternative)"} !important;
  }

  h1 {
    font-size: 3.125rem;
    //height: 50px;
  }

  h2 {
    font-size: 1.75rem;
    margin-left: ${(props) =>
      props.geometry == "rectangle" ? "0" : "0"};
    ${(props) => (props.geometry == "rectangle" ? "1.25rem" : "column")};
    /* width: 72%; */
    text-align: center;

    @media (max-width: 720px) {
      font-size: 1rem;
      line-height: 1.5rem;
      /* max-width: ${(props) => props.geometry == "rectangle" ? "24.375rem" : "3.5625rem"}; */
    }
  }

  h3 {
    font-size: 1.25rem;
  }

  img {
    color: ${(props) =>
      props.fontColor == "blue"
        ? "var(--color-blue-primary)"
        : "var(--color-gray-alternative) !important"};
  }

  .biggerText{
    flex: 1;
  }

  .qtyNum{
    width: 93px;
    display: flex;
  }

  
  svg {
    width: 3.125rem;
    height: 3.125rem;

    color: ${(props) =>
      props.fontColor == "blue"
        ? "var(--color-blue-primary)"
        : "var(--color-gray-alternative) !important"};

    @media (max-width: 720px) {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
`;
