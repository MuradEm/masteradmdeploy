import styled from "styled-components";

export const Container = styled.section`
  width: 22.1875rem;
  height: 10.625rem;
  background-color: transparent;

  z-index: 1000;
  align-self: center;
  justify-self: center;
  align-items: center;
  @media (min-width: 720px) {
    width: 33.125rem;
    height: 15.625rem;
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
        color: var(--color-gray-alternative);
        font-size: 0.625rem;
        font-weight: 500;
        margin-right: 0.625rem;
      }
    }
  }
  .bar-container {
    width: 22.1875rem;
    height: 8.75rem;
    @media (min-width: 720px) {
      width: 31.875rem;
      height:12.25rem;
      display: grid;  
      align-items: center;
      justify-content: center;
    }
  }

  .bargraph{
    max-width: 21rem;
    max-height: 8.75rem;
    @media (min-width: 720px) {
      min-width: 31.875rem;
      min-height:12.25rem;
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

  .color.quantity {
    background-color: #024089;
  }

  .color.hours {
    background-color: #FFA500;
  }

`;
