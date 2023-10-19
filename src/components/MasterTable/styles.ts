import styled from "styled-components";

export const Container= styled.div`

.row {
    display: flex;
    flex-direction: column;
    font-size: 1rem; //16px

    @media (min-width: 720px) {
      font-size: 1.25rem; //20px
      flex-direction: row;
    }
  }

  .head {
    display: none;

    @media (min-width: 720px) {
      height: 1.875rem; //30px
      display: flex;
      background-color: var(--color-white-secundary);
      color: var(--color-blue-primary);
      padding: 0 1.25rem; //20px
      line-height: 1.875rem; //30px
    }
  }

  .progressBarPosition{
    position: absolute;
    right: 1.25rem;
    bottom: 1.25rem;
    

  }

  .tableData {
    overflow: scroll;
    height: calc(100dvh - 3.125rem);
    flex:1;
    position: relative;
    @media (min-width: 720px) {
      height: calc(100dvh - 5.625rem);
    }
  }
  
  .selectedRow {
    background-color: var(--color-white-tertiary);
  }

  .data {
    padding-top: 0.313rem; //5px
    height: 3.125rem; //50px
    margin: 0 0.625rem; //10px
    cursor: pointer;
    border-bottom: 1px solid var(--color-white-tertiary);

    @media (min-width: 720px) {
      margin: 0 1.25rem; //20px
      padding-top: 0;
      height: 1.875rem; //30px
      line-height: 1.875rem; //30px
    }
  }

  .data[data-inactive=true] {
    color: var(--color-gray-tertiary);
  }

  .data:hover {

    @media (min-width: 720px) {
      background-color: var(--color-white-tertiary);
    }
  }

  .col1 {
    width: 16.875rem; //270px
    display: inline-block;
    height: 1.25rem; //20px
    white-space: nowrap;

    @media (min-width: 720px) {
      display: block;
    }

    span {
      font-family: "Inter";
      font-weight: 700;

      @media (min-width: 720px) {
        font-family: "Ubuntu";
        font-weight: 500;
      }
    }
  }

  .data .col1, .data .col2 {

    span {
      @media (min-width: 720px) {
        font-family: "Inter";
        font-weight: 400;
      }
    }
  }
  
  .modalEdit{
    position: absolute;
    width: 100dvw;
    height: calc(100dvh - 50px);
    overflow: scroll;
    z-index: 1500;
    
    @media (min-width: 720px) {
      position: static;
      width: auto;
      padding-top: 10px;
    }
  }

  .col2 {
    padding-left: 0;
    display: inline-block;
    height: 1.25rem; //20px
    white-space: nowrap;

    @media (min-width: 720px) {
      padding-left: 1.25rem; //20px
    }

    span {
      font-family: "Inter";
      font-weight: 400;

      @media (min-width: 720px) {
        font-family: "Ubuntu";
        font-weight: 500;
      }
    }
  }

  .col3 {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .col4 {
    margin-left: 0.625rem; //10px
    align-self: center;

    span {

      @media (min-width: 720px) {
        font-family: "Ubuntu";
        font-weight: 500;
      }
    }

  }

`;
