import styled from "styled-components";
import HiOutlineSearch from "../../assets/icons/HiOutlineSearch.svg";

export const Container= styled.header`

  input {
    border: none;
    width: 100%;
    background-image: url(${HiOutlineSearch.src});
    background-size: 1.5rem; //24px
    background-position: 0.438rem 0.438rem; //7px
    background-repeat: no-repeat;
    border-radius: 0.5rem; //8px
    padding-left: 2.375rem; //38px
    padding-top: 0.563rem; //9px
    padding-bottom: 0.563rem; //9px
    font-size: 1rem; //16px;
    font-family: "Ubuntu";
    font-weight: 400;

    @media (min-width: 720px) {
      font-family: "Inter";
      font-weight: 500;
    }
  }

  input::placeholder {
    color: var(--color-white-tertiary);
  }

  input::-ms-input-placeholder { /* Edge 12 -18 */
    color: var(--color-white-tertiary);
  }

`;
