import styled from "styled-components";
import addMaster from "../../assets/icons/addMaster.svg";
import HiOutlineSearch from "../../assets/icons/HiOutlineSearch.svg";
import HiOutlineX from "../../assets/icons/HiOutlineX.svg";

export const Container= styled.header`

  .box {
    display: flex;
    background-color: var(--color-white-secundary);
    text-align: center;
  }

  .logo {
    padding: 0.4375rem 0rem; //7px
    margin-left: 0.625rem; //10px

    @media (min-width: 720px) {
      display: none;
    }
  }

  .add {
    display: none;

    @media (min-width: 720px) {
      display: block;
      margin-left: 1.25rem; //20px
      padding: 0.9375rem 0; //15px
    }
  }

  .add input {
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
    background-image: url(${addMaster.src});
    background-repeat: no-repeat;
    height: 2.5rem; //40px
    width: 2.5rem; //40px
    border: none;
    cursor: pointer;
  }

  .location {
    text-align: left;
    width: 9.375rem; //150px
    margin-left: 0.625rem; //10px
    color: var(--color-gray-alternative);
    font-size: 1.25rem; //20px

    align-self: center;

    @media (min-width: 720px) {
      width: 13.125rem; //210px
      margin-left: 1.25rem; //20px
    }

    h2{
      color: var(--color-gray-alternative);
      font-size: 1.25rem;
      font-weight: 400;

      @media (min-width: 720px) {
        font-size: 1.875rem
      }
    }

    span {
      font-family: "Ubuntu";
      font-weight: 400;
    }
  }

  .searchMobile {
    padding: 0.375rem 0; //6px
    margin-left: auto;

    input {
      background-color: transparent;
      background-image: url(${HiOutlineSearch.src});
      background-repeat: no-repeat;
      height: 2.188rem; //35px
      width: 2.188rem; //35px
      border: none;
      cursor: pointer;
    }

    @media (min-width: 720px) {
      display: none;
    }
  }

  .searchBarMobile {
    position: absolute;
    right: 0;
    height: 3.125rem; //50px
    display: flex;
    width: calc(100% - 3.438rem); //subtract 55px from logo
    background-color: var(--color-white-secundary);
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: 720px) {
      display: none;
    }

    .searchInput {
      width: 100%;
    }

    .btnClose {
      padding: 0 0.625rem; //10px
      display: inline-flex;

      input{
        height: 1.5rem; //24px
        width: 1.5rem; //24px
        padding: 0;
        background-color: transparent;
        background-image: url(${HiOutlineX.src});
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
      }

    } 
  }

  .searchWeb {
    display: none;

    @media (min-width: 720px) {
      display: block;
      margin-left: 1.25rem; //20px
      width: 20rem; //320px
      text-align: left;
      padding: 1rem 0; //16px
      /* height: 30px; */
      /* background-color: red; */
    }
  }

  .buttonsFunctions {
    margin-left: 0.625rem; //10px
    margin-right: 0.625rem; //10px
    padding: 0.469rem 0rem; //7.5px 0px;

    @media (min-width: 720px) {
      margin-right: 1.25rem; //20px
      margin-left: auto;
      padding: 0.906rem 0rem; //14.5px 0px;
    }

    .logoUser {
      height: 2.1875rem; //35px
      width: 2.1875rem; //35px

      overflow: hidden;
      border-radius: 6rem;
      cursor: pointer;
      background-color: var(--color-white-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 0;
      }
      img {
        width: 2.563rem; //41px
        height: auto;
      }

      @media (min-width: 720px) {
        height: 2.563rem; //41px
        width: 2.563rem; //41px
      }
    }
  }

  .modalTittle {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--color-blue-primary);
    @media (min-width: 720px) {
      font-size: 1.875rem;
    }
  }

`;

