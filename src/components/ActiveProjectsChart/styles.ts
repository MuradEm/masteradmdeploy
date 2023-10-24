import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: transparent;
  z-index: 1000;
  align-self: center;
  justify-self: center;
  align-items: center;
  @media (min-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: center;
  }

  h1,
  h2,
  h3 {
    color: var(--color-blue-primary);
    font-weight: 400;
  }

  h2 {
    margin-bottom: 0rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  footer {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    gap: 1rem;

    .legend {
      flex-direction: row;
      align-items: center;

      .color {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 3px;
        margin-right: 5px;
      }

      h4 {
        color: #2F3640;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 125% */
      }
    }
  }
  .bar-container {
    width: calc(100% - 1.26rem);
    overflow-x:hidden;
    overflow-y:scroll;
    max-height: calc(100dvh - 10rem);
    @media (min-width: 720px) {
      width: calc(100% - 1.26rem);
      max-height: calc(100dvh - 10rem);
      display: grid;  
      align-items: start;
      justify-content: start;
      overflow-x:hidden;
      overflow-y:scroll;
      align-self:center;
    }
  }

  .bargraph{
    width: 100%;
    @media (min-width: 720px) {
      width: calc(93dvw - 1.26rem);
      grid-column: 1;
      
      grid-row: 1;
      z-index: 1;
    }
  }
  
  .doughnut-number {
    position: relative;
    font-size: 4.375rem;
    font-weight: 400;
    color: var(--color-blue-primary);
    grid-column: 1;
    grid-row: 1;
    text-align: center;
  }
  
  .legend {
    display: none;
  }

  .legend.show {
    display: flex;
  }

  .color {
    height: 20px; /* You may need to adjust this as per your need */
    width: 20px; /* You may need to adjust this as per your need */
  }

  .color.projects {
    background-color: #024089;
  }

  .color.subprojects {
    background-color: #D1D1D1;
  }

`;
