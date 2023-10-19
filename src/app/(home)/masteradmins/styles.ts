import styled from "styled-components";

interface Props {
  // pbDoneWidth: Number;
}

export const Container= styled.div<Props>`

  @media (min-width: 720px) {
    width: 100%;
    margin-top: 0;
  }

  .groupTable {
    margin-top: 0.125rem; //2px
  }

  .bottomGroup {
    position: absolute;
    bottom: 1.25rem; //20px
    padding: 0 0.625rem; //10px
    width: 100%;

    @media (min-width: 720px) {
      right: 1.25rem; //20px
    }
  }

`;
