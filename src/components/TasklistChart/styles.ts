import styled from "styled-components";

export const Container = styled.section`
  width: 22.1875rem;
  height: 10.625rem;
  background-color: transparent;
  padding: "0.313rem";
  z-index: 1000;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
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
    margin-top: 0.69rem;
    justify-content: center;
    gap: 1rem;
    @media (min-width: 720px) {
      margin-top: 4.2rem;
  }
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
        font-size: 0.75rem;
        font-weight: 500;
        margin-right: 0.625rem;
        font-family: Inter;
      }
    }
  }
  .doughnut-container {
    margin-top :1.0rem;
    width: 6.19rem;
    height: 6.19rem;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-column: 1;
      grid-row: 1;
      width: 20.8rem;
    @media (min-width: 720px) {
      width: 22.625rem;
      margin-top :1.88rem;
      grid-column: 1;
      grid-row: 1;
  }
  }
  .doughnut-graph{
    width: 5.5rem;
    height: 5.5rem;
    justify-self: center;
    align-self: center;
    z-index: 3;
    grid-column: 1;
      grid-row: 1;
    @media (min-width: 720px) {
      width: 7.375rem;
      height: 7.375rem;
      grid-column: 1;
      grid-row: 1;
  }
  }
  .doughnut-pointer-container{
    margin-top: 0.3rem;
    width: 22.625rem;
    justify-self: flex-start;
    align-self:flex-start;
    grid-column: 1;
    grid-row: 1;
    z-index: 5;
    display: grid;
    }
    .doughnut-pointer1{

    justify-self: center;
    align-self:flex-start;
    grid-column: 1;
    grid-row: 1;
    z-index:8;
    display: grid;
    width: 122px;
    }
  
    
    .right1{
      margin-top: -0.625rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: end;
      
      color: #2F3640;

      text-align: right;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-weight:bold;
      line-height: 0.75rem; /* 100% */
      @media (min-width: 720px) {
        margin-top: -0.75rem;
        font-size: 0.75rem;
      }
    }
    .right2{
      grid-column: 1;
      grid-row: 1;
      justify-self: end;
      color: #2F3640;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.75rem;
      @media (min-width: 720px) {
        font-size: 0.75rem;
      }
    }
    .rightdown1{
      margin-top: -0.32rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: end;
      
      color: #2F3640;

      text-align: right;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-weight:bold;
      line-height: 0.75rem; /* 100% */
      @media (min-width: 720px) {
        margin-top: -0.32rem;
        font-size: 0.75rem;
      }
    }
    .rightdown2{
      margin-top: 0.4rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: end;
      color: #2F3640;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.75rem;
      @media (min-width: 720px) {
        margin-top: 0.4rem;
        font-size: 0.75rem;
      }
    }
    .left1{
      margin-top: -0.625rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
      color: #2F3640;
      
      text-align: left;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-weight:bold;
      line-height: 0.75rem; /* 100% */
      @media (min-width: 720px) {
        margin-top: -0.75rem;
        font-size: 0.75rem;
      }
    }
    .left2{
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
      color: #2F3640;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.75rem;
      @media (min-width: 720px) {
        font-size: 0.75rem;
      }
    }
    .leftdown1{
      margin-top: -0.24rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
      color: #2F3640;
      
      text-align: left;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-weight:bold;
      line-height: 0.75rem; /* 100% */
      @media (min-width: 720px) {
        margin-top: -0.32rem;
        font-size: 0.75rem;
      }
    }
    .leftdown2{
      margin-top: 0.4rem;
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
      color: #2F3640;
      font-family: Ubuntu;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.75rem;
      @media (min-width: 720px) {
        margin-top: 0.4rem;
        font-size: 0.75rem;
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

  .color.archived {
    background-color: #d1d1d1;
  }

  .color.created {
    background-color: #024089;
  }

`;
